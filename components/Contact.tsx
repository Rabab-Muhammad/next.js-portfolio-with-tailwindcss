import React from "react";
import { MdOutlineMail } from "react-icons/md";
import { RxMobile } from "react-icons/rx";

const Contact = () => {
  return (
    <div id="contact" className="pt-32 container">
      <div className="grid md:grid-cols-2 gap-10">
        <div className="space-y-8">
          <h2 className="text-5xl">Connect with Me</h2>
          <p className="text-gray-600 text-[18px] pt-2">
            Feel free to reach out—whether by call or message—by simply filling
            out the form. Let's connect!
          </p>
          <div className="flex gap-3 items-center">
          <MdOutlineMail size={30}/>rababmuhammadhussain@gmail.com
          </div>
          <div className="flex gap-3 items-center">
          <RxMobile size={30} /> +923162217017
          </div>
        </div>
        <div className="space-y-8">
            <div className="flex flex-col gap-1"data-aos="fade-up"data-aos-duration="3000">
                <label htmlFor="name">Name</label>
                <input type="text"
                className="h-[40px] bg-transparent border border-blue-400" id="name" />
            </div>
            <div className="flex flex-col gap-1"data-aos="fade-up"data-aos-duration="3000">
                <label htmlFor="email">Email</label>
                <input type="text"
                className="h-[40px] bg-transparent border border-blue-400" id="email" />
            </div>
            <div className="flex flex-col gap-1"data-aos="fade-up"data-aos-duration="3000">
                <label htmlFor="msg">Message</label>
                <textarea
                className="bg-transparent border border-blue-400" id="msg" rows={8} >
                </textarea>
            </div>
            <button className="bg-blue-500 p-2 px-6">Send</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
