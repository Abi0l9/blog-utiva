import React, { useState } from "react";
import { subscribe } from "../services/email";

const Subscribe = () => {
  const [address, setAddress] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await subscribe({ address });
      setMessage("Subscription Successful");
      setTimeout(function () {
        setMessage("");
        setAddress("");
      }, 4000);
    } catch (e) {
      console.log(e.message);
    }
  };
  return (
    <div
      className="p-3 md:px-8 lg:px-10 min-h-[80%]  rounded-[8px] shadow my-5 bg-blue-700 py-4 text-center w-10/12 mx-auto md:w-3/4  md:mx-auto"
      id="subscribe"
    >
      {/* <p className="text-2xl mb-5  text-blue-500">Subscribe</p> */}
      <div className="flex flex-col">
        <p className="text-2xl text-white">
          Get Notified about our Latest Posts
        </p>

        {message && (
          <p className="text-white my-2 font-semibold mx-auto py-1 px-2 bg-green-500 rounded-[5px] w-3/4">
            {message}
          </p>
        )}
        <p className="text-sm text-gray-200">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
          quaerat repellendus ut, sed ips
        </p>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col md:flex-row items-center my-3">
            <label
              htmlFor="subscribe"
              className="block font-semibold md:mr-2 text-white"
            >
              Email
            </label>
            <input
              type="email"
              id="subscribe"
              value={address}
              required
              onChange={(e) => setAddress(e.target.value)}
              name="subscribe"
              placeholder="james@yahoo.com"
              className="border-gray-100 w-full py-2 text-center font-bold mt-2 rounded-[5px] focus:border-blue-900"
            />
          </div>
          <div className=" w-2/4 mx-auto p-[4px] px-3 bg-white text-blue-500 rounded-[8px] font-bold active:bg-blue-900 active:text-white">
            <button className="">subscribe</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Subscribe;
