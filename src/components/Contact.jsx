import React from "react";

const Contact = () => {
  return (
    <div name="contact" className=" flex flex-col items-center justify-center px-5 w-full h-screen bg-[#04181a] text-gray-300">
      {/*container*/}
      <form action="https://getform.io/f/7f43f393-e7ec-4f49-a471-a9d8184f6ff6" method="POST" className="flex flex-col gap-4 max-w-[600px] w-full">

      <h3 className="text-3xl  font-bold inline border-b-4 border-yellow-700">
                Contact
      </h3>
      <span>Submit the form below or shoot me an email</span>
      <input className="input" type="text" name="name" placeholder="Name" />
      <input className="input" type="email" name="email" placeholder="Email" />
      <textarea className="input" name="message" rows="10" placeholder="Enter Message"></textarea>
      <div className="flex justify-center items-center">
      <button className="btn">
      Contact Me
      </button>
      </div>
      </form>
    </div>
  );
};

export default Contact;
