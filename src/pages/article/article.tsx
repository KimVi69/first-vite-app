import Image from "../../assets/images/landing-page.svg";
import Image1 from "../../assets/images/article.svg";
import Image2 from "../../assets/images/article1.svg";
import Image3 from "../../assets/images/article2.svg";
import Image4 from "../../assets/images/article3.svg";
import Image5 from "../../assets/images/article4.svg";

const article = () => {
  return (
    <main className="flex flex-col gap-20 px-20 pb-[120px]">
      <div className="flex flex-col gap-6 w-[733px]">
        <h1 className="text-[64px] font-bold leading-[77.45px]">
          Article or post title
        </h1>
        <p className="text-2xl font-normal text-[#828282]">
          Subheading that sets up context, shares more info about the author, or
          generally gets people psyched to keep reading
        </p>
      </div>
      <div className="w-full h-[650px]">
        <img
          className="w-full h-full object-cover rounded-lg"
          src={Image}
          alt="Article Image"
        />
      </div>
      <div className="flex justify-center px-[299px] text-xl font-medium">
        <p>
          Body text for your whole article or post. We’ll put in some lorem
          ipsum to show how a filled-out page might look:
          <br />
          <br /> Excepteur efficient emerging, minim veniam anim aute carefully
          curated Ginza conversation exquisite perfect nostrud nisi intricate
          Content. Qui international first-class nulla ut. Punctual adipisicing,
          essential lovely queen tempor eiusmod irure. Exclusive izakaya
          charming Scandinavian impeccable aute quality of life soft power
          pariatur Melbourne occaecat discerning. Qui wardrobe aliquip, et
          Porter destination Toto remarkable officia Helsinki excepteur Basset
          hound. Zürich sleepy perfect consectetur. <br />
          <br />
          Exquisite sophisticated iconic cutting-edge laborum deserunt Addis
          Ababa esse bureaux cupidatat id minim. Sharp classic the best commodo
          nostrud delightful. Conversation aute Rochester id. Qui sunt
          remarkable deserunt intricate airport handsome K-pop excepteur classic
          esse Asia-Pacific laboris.
        </p>
      </div>
      <div className="flex gap-20">
        <img className="flex-1" src={Image1} alt="Article Image 2" />
        <img className="flex-1" src={Image2} alt="Article Image 3" />
      </div>
      <div className="flex justify-center px-[299px] text-xl font-medium pb-10">
        <p>
          Excepteur efficient emerging, minim veniam anim cloying aute carefully
          curated gauche. Espresso exquisite perfect nostrud nisi intricate.
          Punctual adipisicing Borzoi, essential lovely tempor eiusmod irure.
          Exclusive izakaya charming Quezon City impeccable aute quality of life
          soft power pariatur occaecat discerning. Qui wardrobe aliquip, et
          Amadeus rock opera.
          <br />
          <br /> Exquisite sophisticated iconic cutting-edge laborum deserunt
          esse bureaux cupidatat id minim. Sharp classic the best commodo
          nostrud delightful. Conversation aute wifey id. Qui sunt remarkable
          deserunt intricate airport excepteur classic esse riot girl.
        </p>
      </div>
      <div className="flex flex-col gap-8">
        <h1 className="text-[40px] font-semibold leading-[44px]">
          Related articles or posts
        </h1>
        <div className="flex gap-20">
          <div className="flex flex-col flex-1 gap-6">
            <img src={Image3} alt="Article Image 4" />
            <div className="flex flex-col gap-1 text-xl font-medium">
              <h1>Title</h1>
              <p className="text-[#828282]">Author</p>
            </div>
          </div>
          <div className="flex flex-col flex-1 gap-6">
            <img src={Image4} alt="Article Image 4" />
            <div className="flex flex-col gap-1 text-xl font-medium">
              <h1>Title</h1>
              <p className="text-[#828282]">Author</p>
            </div>
          </div>
          <div className="flex flex-col flex-1 gap-6">
            <img src={Image5} alt="Article Image 4" />
            <div className="flex flex-col gap-1 text-xl font-medium">
              <h1>Title</h1>
              <p className="text-[#828282]">Author</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default article;
