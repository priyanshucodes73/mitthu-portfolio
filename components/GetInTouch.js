import React from "react";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaPaperPlane,
  FaCommentDots,
} from "react-icons/fa";

const InputField = ({ icon: Icon, type, placeholder, name }) => (
  <div className="flex items-center bg-[#eaf0ff] rounded-lg px-3 py-2 mb-4">
    <Icon className="text-purple-500 mr-2 text-lg" />
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      className="bg-transparent outline-none w-full text-slate-700 placeholder-slate-400"
      autoComplete="off"
    />
  </div>
);

const TextAreaField = ({ icon: Icon, placeholder, name }) => (
  <div className="flex items-start bg-[#eaf0ff] rounded-lg px-3 py-2 mb-4">
    <Icon className="text-purple-500 mr-2 text-lg mt-1" />
    <textarea
      name={name}
      placeholder={placeholder}
      rows={4}
      className="bg-transparent outline-none w-full text-slate-700 placeholder-slate-400 resize-none"
    />
  </div>
);

const GetInTouch = () => (
  <section className="py-8 sm:py-12 flex justify-center items-center w-full">
    <div className="bg-black/80 rounded-2xl shadow-lg p-4 sm:p-8 w-full max-w-3xl flex flex-col md:flex-row gap-6 md:gap-8">
      {/* Left: Illustration */}
      <div className="flex-1 flex justify-center items-center mb-6 md:mb-0">
        <img
          src="./Touch Me.gif"
          alt="Contact Illustration"
          className="w-32 h-32 sm:w-48 sm:h-48 object-contain"
        />
      </div>
      {/* Right: Form */}
      {/* Replace with Formspree integration. Visit https://formspree.io/ to get your endpoint. Example below: */}
      <form
        className="flex-1 flex flex-col justify-center w-full"
        action="https://formspree.io/f/xnnbobgw"
        method="POST"
      >
        <h2 className="text-3xl font-bold mb-6 text-center">
          Get <span className="text-orange-500">In</span>{" "}
          <span className="text-purple-700">Touch</span>
        </h2>
        <InputField icon={FaUser} type="text" placeholder="Name" name="name" />
        <InputField
          icon={FaEnvelope}
          type="email"
          placeholder="Email"
          name="email"
        />
        <InputField
          icon={FaPhone}
          type="tel"
          placeholder="Phone"
          name="phone"
        />
        <TextAreaField
          icon={FaCommentDots}
          placeholder="Message"
          name="message"
        />
        <button
          type="submit"
          className="bg-purple-700 hover:bg-purple-800 text-white font-semibold rounded-xl px-6 py-3 flex items-center justify-center gap-2 mt-2 transition-colors"
        >
          <FaPaperPlane className="text-lg" /> Submit
        </button>
      </form>
    </div>
  </section>
);

export default GetInTouch;
