import React from "react";

import { BiMailSend, BiPhoneCall,  } from "react-icons/bi";
const Contact = () => {
    const image="https://previews.123rf.com/images/niroworld/niroworld1703/niroworld170300063/74568707-email-icon-website-contact-us-symbol-eps10-vector-illustration-on-white-background.jpg"
  return (
   

      <div className="row contactus mt-4 p-5">
        {/* // Bootstrap Grid System for responsive design */}
        <div className="col-md-6">
          <img
            src={image} 
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>

        {/* // Bootstrap Grid System for responsive design */}
        <div className="col-md-6">
          <h1 className="bg-dark p-2 text-white text-center">CONTACT US</h1>
          <p className="text-justify mt-2">
            <br></br>
            <br></br>
          
            <br></br>
          </p>
          <p className="mt-3">
            <BiMailSend /> : Suncellular@sun.in
          </p>
          <p className="mt-3">
            <BiPhoneCall /> : 8344441551
          </p>
          {/* <p className="mt-3">
            <BiSupport /> : 1800-0000-0000 (toll free)
          </p> */}
        </div>
      </div>
    
  );
};

export default Contact;