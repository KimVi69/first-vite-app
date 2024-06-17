import { FormEvent, useState } from "react";
import Image from "../../assets/images/contact-image.svg";

const Contact = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log("firstName:", firstName);
    console.log("lastName:", lastName);
    console.log("email:", email);
    console.log("message:", message);
  };
  return (
    <main className="flex flex-col justify-between p-20 pb-[120px] gap-32 lg:flex-row">
      <section className="flex flex-col gap-8 flex-1">
        <div className="flex flex-col gap-6">
          <h1 className="text-[64px] font-bold leading-[77.45px]">
            Contact us
          </h1>
          <h2 className="text-2xl font-normal text-[#828282]">
            Subheading for description or instructions
          </h2>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-6 h-full">
          <div className="flex gap-8 max-md:flex-col">
            <div className="flex flex-col gap-2 w-full">
              <p className="text-base font-medium">First name</p>
              <input
                className="border-2 rounded-lg px-[16px] py-[12px] flex-1"
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
                placeholder="John"
              />
            </div>
            <div className="flex flex-col gap-2 w-full">
              <p className="text-base font-medium">Last name</p>
              <input
                className="border-2 rounded-lg px-[16px] py-[12px] flex-1"
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
                placeholder="Smith"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-base font-medium">Email address</p>
            <input
              className="border-2 rounded-lg px-[16px] py-[12px]"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="email@janesfakedomain.net"
            />
          </div>
          <div className="flex flex-col gap-2 flex-1">
            <p className="text-base font-medium">Your message</p>
            <textarea
              className="border-2 rounded-lg px-[16px] py-[12px] flex-1 resize-none"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Enter your question or message"
            />
          </div>
          <div className="flex">
            <button
              type="submit"
              className="bg-black rounded-lg text-white flex-1 py-4 text-xl"
            >
              Submit
            </button>
          </div>
        </form>
      </section>
      <div>
        <img
          className="w-full h-[657px] object-cover"
          src={Image}
          alt="Contact Image"
        />
      </div>
    </main>
  );
};

export default Contact;
