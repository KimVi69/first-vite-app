import Image from "../../assets/images/landing-page.svg";
import Avatar from "../../assets/images/avatar.svg";
import Avatar1 from "../../assets/images/avatar1.svg";
import Avatar2 from "../../assets/images/avatar2.svg";

const landingPage = () => {
  return (
    <main className="flex flex-col text-center items-center gap-[120px] px-20">
      <div className="flex flex-col gap-6 items-center pt-[120px]">
        <h1 className="text-[64px] font-bold">Landing page title</h1>
        <h2 className="text-2xl font-normal text-[#828282]">
          And a subheading describing your site, too
        </h2>
        <button className="bg-black rounded-lg text-white w-[99px] h-[52px]">
          Button
        </button>
      </div>
      <div className="w-full h-[637px]">
        <img
          className="w-full h-full object-cover rounded-lg"
          src={Image}
          alt="Landing Page Image"
        />
      </div>
      <div className="flex flex-col items-start text-start gap-9 w-full pb-[120px]">
        <div className="flex flex-col gap-2">
          <h1 className="text-[40px] leading-[44px] font-semibold">Heading</h1>
          <h2 className="text-2xl font-normal text-[#828282]">
            Subheading to introduce testimonials
          </h2>
        </div>
        <div className="flex gap-20 w-full">
          <div className="flex flex-col items-start text-start shadow-custom p-8 rounded-xl justify-between gap-12 flex-1 font-medium">
            <p className="w-[340px] text-xl">“A terrific piece of praise”</p>
            <div className="flex gap-4">
              <img src={Avatar} alt="Landing Page Avatar" />
              <div className="text-base">
                <h1>Name</h1>
                <p className="text-[#828282]">Description</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start text-start shadow-custom p-8 rounded-xl justify-between gap-12 flex-1 font-medium">
            <p className="w-[340px] text-xl">“A fantastic bit of feedback”</p>
            <div className="flex gap-4">
              <img src={Avatar1} alt="Landing Page Avatar" />
              <div className="text-base">
                <h1>Name</h1>
                <p className="text-[#828282]">Description</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start text-start shadow-custom p-8 rounded-xl justify-between gap-12 flex-1 font-medium">
            <p className="w-[340px] text-xl">“A genuinely glowing review”</p>
            <div className="flex gap-4">
              <img src={Avatar2} alt="Landing Page Avatar" />
              <div className="text-base">
                <h1>Name</h1>
                <p className="text-[#828282]">Description</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default landingPage;
