import React from "react";
import Footer from "./footer";
import Secondsection from "./secondsection";
import Newheader from "./newheader";
import Newsection from "./newsection";
import Newthird from "./newthird";

function Landingpage() {
  return (
    <div className="w-full bg-[#080808]">
      <div className=" px-14 py-3">
        <Newheader/>
      </div>
      <div className=" px-14 mt-10">
        <Newsection/>
      </div>
      <div className=""><Newthird/></div>
      {/* <Header/>
      <Firstsection/>
      <Secondsection/>
      <Thirdsection/>
      <Lastsection/> */}

<div className=" mt-5">
<Footer />
</div>
     
    </div>
  );
}

export default Landingpage;
