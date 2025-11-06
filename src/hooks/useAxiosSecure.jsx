import axios from "axios";
import useAuth from "./useAuth";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import { SiGooglenearby } from "react-icons/si";

const instance = axios.create({
  baseURL: "http://localhost:3000",
});

const useAxiosSecure = () => {
  const { user, signOutUser } = useAuth();
  const navigate = useNavigate();

  // set token in the header for all the api call using axiosSecure hook means request interceptor
  useEffect(() => {
    const requestInterceptor = instance.interceptors.request.use((config) => {
      const token = user.accessToken;
      if (token) {
        config.headers.authorization = `Bearer ${token}`;
      }
      return config;
    });

    //response interceptor
    const responseInterceptor = instance.interceptors.response.use(
      (res) => {
        return res;
      },
      (err) => {
        const status = err.status;
        if (status === 401 || status === 403) {
          // console.log("Error khaiso .Log Out for Bad Request");
          signOutUser().then(() => {
            // ekhn navigate kore register korabo
            navigate("/register");
          });
        }
      }
    );

    return () => {
      instance.interceptors.request.eject(requestInterceptor);
      instance.interceptors.response.eject(responseInterceptor);
    };
  }, [user, signOutUser, navigate]);
  return instance;
};

export default useAxiosSecure;
