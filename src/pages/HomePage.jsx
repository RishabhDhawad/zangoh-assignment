import React from "react";
import Layout from '../layout/layout';
import { Link } from "react-router-dom";
import googlePlayLogo from "../assets/googlePlayLogo.png";
import appStoreLogo from "../assets/AppStoreLogo.png";

const HomePage = () => {
  return (
    <Layout>
      <div className=" flex min-h-[92vh]  px-10">
        {/* left content */}
        <div className=" lg:w-1/2 w-full mt-72">
          <div className=" max-w-[70%]">
            <h1 className=" text-4xl font-bold text-[#3E3E3E]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </h1>
            <p className=" text-[#6D6D6D] text-[16px] max-w-[90%] mt-5">
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book.
            </p>
          </div>

          {/* Buttons Links */}
          <div className=" flex items-center mt-16 gap-2">
            <Link to="/app-store">
              <img src={appStoreLogo} alt="" className=" w-[145px]" />
            </Link>
            <Link to="/google-play">
              <img src={googlePlayLogo} alt="" className=" w-[180px]" />
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;