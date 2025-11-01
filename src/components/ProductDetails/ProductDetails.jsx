import React, { use, useRef } from "react";
import { useLoaderData } from "react-router";
import { AuthContext } from "../../contexts/AuthContext";

const ProductDetails = () => {
  const { _id: productId } = useLoaderData();
  const bidModalRef = useRef(null);
  const { user } = use(AuthContext);

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
        console.log("After Placing bid", data);
      });
  };

  return (
    <div>
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
                    defaultValue={user.displayName}
                  />
                  <label className="label">Buyer Email</label>
                  <input
                    type="email"
                    name="email"
                    className="input w-full"
                    readOnly
                    defaultValue={user.email}
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
                  <button className="btn">Close</button>
                </form>
              </div>
            </div>
          </dialog>
        </div>
      </div>
      {/* bids for this products  */}
    </div>
  );
};

export default ProductDetails;
