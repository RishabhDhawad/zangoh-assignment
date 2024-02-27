import React from "react";
import { FaFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";

const ContactModal = ({ closeModal }) => {
  return (
    <div className=" z-50 absolute left-0 top-0 min-h-screen w-full flex items-center justify-center bg-black bg-opacity-60">
      <form className=" bg-[#FCEBE5]  rounded-xl relative p-16">
        <div className="">
          <h1 className=" text-4xl text-[#495057]">Contact</h1>
          <p className=" text-[#ADB5BD]">
            Lorem Ipsum is simply dummy text of the printing
          </p>
        </div>

        <div className=" bg-white rounded-lg px-4 py-2 flex items-center  mt-4">
          <label htmlFor="name" className=" w-[30%]">Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            className=" border-none px-2 py-1"
          />
        </div>

        <div className=" bg-white rounded-lg px-4 py-2 flex items-center mt-4">
          <label htmlFor="email" className=" w-[30%]">Email</label>
          <input
            type="text"
            placeholder="Enter your e-mail address here"
            className=" border-none px-2 py-1"
          />
        </div>

        <div className=" bg-white rounded-lg px-4 py-2 flex items-center mt-4">
          <label htmlFor="message" className=" w-[30%]">Message</label>
          <input
            type="text"
            placeholder="Wanna share something with us?"
            className=" border-none px-2 py-1"
          />
        </div>
        <div className="  mt-4  text-left flex items-center justify-end">
          <button className="bg-black text-white px-10 py-2 rounded-2xl" >
            Submit
          </button>
        </div>
        <div className=" flex items-center justify-between mt-4">
          <p>Need more info? hello@newzera.com </p>
          <div className=" flex items-center gap-2">
            <FaFacebook />
            <FaLinkedin />
            <FaTwitter />
          </div>
        </div>
        <div
          onClick={closeModal}
          className=" cursor-pointer text-2xl font-bold absolute top-4 right-4"
        >
          X
        </div>
      </form>
    </div>
  );
};

export default ContactModal;