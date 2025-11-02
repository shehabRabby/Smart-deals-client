import React, { use, useEffect, useRef, useState } from "react";
import { useLoaderData } from "react-router";
import { AuthContext } from "../../contexts/AuthContext";
import Swal from "sweetalert2";

const ProductDetails = () => {
  const { _id: productId } = useLoaderData();
  const [bids, setBids] = useState([]);
  const bidModalRef = useRef(null);
  const { user } = use(AuthContext);

  useEffect(() => {
    fetch(`http://localhost:3000/products/bids/${productId}`)
      .then((res) => res.json())
      .then((data) => {
        console.log("Bids for this ", data);
        setBids(data);
      });
  }, [productId]);

  const handleBidModalOpen = () => {
    bidModalRef.current.showModal();
  };

  const handleBidSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const bid = e.target.bid.value;

    const newBid = {
      product: productId,
      buyer_name: name,
      buyer_email: email,
      bid_price: bid,
      buyer_image: user?.photoURL,
      status: "pending",
    };

    fetch("http://localhost:3000/bids", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newBid),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          bidModalRef.current.close();
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Your bid has been placed",
            showConfirmButton: false,
            timer: 1800,
          });
          //add new bid to state
          newBid._id = data.insertedId;
          const newBids = [...bids, newBid]
          newBids.sort((a,b) => b.bid_price - a.bid_price)
          setBids(newBids);
        }
      });
  };

  return (
    <div className="w-7xl mx-auto">
      {/* product info */}
      <div>
        <div></div>
        <div>
          <button onClick={handleBidModalOpen} className="btn btn-primary">
            I want o buy this product
          </button>

          <dialog
            ref={bidModalRef}
            className="modal modal-bottom sm:modal-middle"
          >
            <div className="modal-box">
              <h3 className="font-bold text-lg text-center">
                Give The Best Offer!{" "}
              </h3>
              <p className="py-4"> Offer something seller can not resist</p>
              {/* ourform  */}
              <form onSubmit={handleBidSubmit}>
                <fieldset className="fieldset">
                  <label className="label">Buyer Name</label>
                  <input
                    type="text"
                    name="name"
                    className="input w-full"
                    readOnly
                    defaultValue={user?.displayName}
                  />
                  <label className="label">Buyer Email</label>
                  <input
                    type="email"
                    name="email"
                    className="input w-full"
                    readOnly
                    defaultValue={user?.email}
                  />
                  <label className="label">Buyer Image Url</label>
                  <input
                    type="text"
                    name="photo"
                    className="input w-full"
                    placeholder="https://..your_img_url"
                  />
                  <label className="label">Contact Info</label>
                  <input
                    type="text"
                    name="phone"
                    className="input w-full"
                    placeholder="e.g +0881236-22"
                  />
                  <label className="label">Place your Price</label>
                  <input
                    type="text"
                    name="bid"
                    className="input w-full"
                    placeholder="e.g - 300"
                  />
                  <button className="btn btn-primary mt-1">
                    Bids Your Price
                  </button>
                </fieldset>
              </form>
              {/* ourform  */}
              <div className="modal-action">
                <form method="dialog">
                  <button className="btn">Cancel</button>
                </form>
              </div>
            </div>
          </dialog>
        </div>
      </div>
      {/* bids for this products  */}
      <div>
        <h3 className="text-2xl font-semibold">
          Bids For this Product:{" "}
          <span className="text-purple-600">{bids.length}</span>
        </h3>

        {/* table  */}
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>SL No</th>
                <th>Buyer Name</th>
                <th>Buyer Email</th>
                <th>Bid Price</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
             {
              bids.map((bid,index)=>
                <tr>
                <th>{index+1}</th>

                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{bid.buyer_name}</div>
                      <div className="text-sm opacity-50">United States</div>
                    </div>
                  </div>
                </td>

                <td>
                  {bid.buyer_email}
                  <br />
                  <span className="badge badge-ghost badge-sm">
                    By Smart Details
                  </span>
                </td>

                <td>
                  {bid.bid_price}
                </td>

                <th>
                  <button className="btn btn-ghost btn-xs">details</button>
                </th>
              </tr>
              )
             }
              {/* row 1 */}
            </tbody>
          </table>
        </div>
        {/* table  */}
      </div>
    </div>
  );
};

export default ProductDetails;
