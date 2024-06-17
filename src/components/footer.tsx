import facebookIcon from "../assets/images/facebook-icon.svg";
import linkedinIcon from "../assets/images/linkedin-icon.svg";
import youtubeIcon from "../assets/images/youtube-icon.svg";
import instagramIcon from "../assets/images/instagram-icon.svg";

const footer = () => {
  return (
    <footer>
      <hr className="mx-20" />
      <section className="px-20 py-12 flex justify-between items-center max-md:flex-col">
        <div className="flex flex-col justify-between gap-[88px] min-w-[184px]">
          <div className=" text-2xl">Site name</div>
          <div className="flex font-normal">
            <img src={facebookIcon} alt="Facebook Icon" />
            <img src={linkedinIcon} alt="Linkedin Icon" />
            <img src={youtubeIcon} alt="Youtube Icon" />
            <img src={instagramIcon} alt="Instagram Icon" />
          </div>
        </div>
        <nav className="flex gap-8 text-[#454545] text-base font-medium max-md:flex-col">
          <ul className="flex flex-col gap-6 w-[187px] max-md:flex-row max-md:w-full">
            <div className="text-black">Topic</div>
            <li>Page</li>
            <li>Page</li>
            <li>Page</li>
          </ul>
          <ul className="flex flex-col gap-6 w-[187px] max-md:flex-row max-md:w-full">
            <div className="text-black">Topic</div>
            <li>Page</li>
            <li>Page</li>
            <li>Page</li>
          </ul>
          <ul className="flex flex-col gap-6 w-[187px] max-md:flex-row max-md:w-full">
            <div className="text-black">Topic</div>
            <li>Page</li>
            <li>Page</li>
            <li>Page</li>
          </ul>
        </nav>
      </section>
    </footer>
  );
};

export default footer;
