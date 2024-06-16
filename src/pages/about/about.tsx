import aboutImage from "../../assets/images/about-image.svg";

const About = () => {
  return (
    <main className="flex p-20 gap-36 pb-[120px] flex-wrap">
      <div className="flex flex-col gap-6 flex-1">
        <h1 className="text-7xl font-bold">About</h1>
        <h2 className="text-2xl font-normal text-[#828282]">
          Subheading for description or instructions
        </h2>
        <div className="flex flex-col gap-6 text-xl font-medium">
          <p>
            Body text for your whole article or post. We’ll put in some lorem
            ipsum to show how a filled-out page might look:
          </p>
          <p>
            Excepteur efficient emerging, minim veniam anim aute carefully
            curated Ginza conversation exquisite perfect nostrud nisi intricate
            Content. Qui international first-class nulla ut. Punctual
            adipisicing, essential lovely queen tempor eiusmod irure. Exclusive
            izakaya charming Scandinavian impeccable aute quality of life soft
            power pariatur Melbourne occaecat discerning. Qui wardrobe aliquip,
            et Porter destination Toto remarkable officia Helsinki excepteur
            Basset hound. Zürich sleepy perfect consectetur.
          </p>
        </div>
      </div>
      <div>
        <img src={aboutImage} alt="About Image" />
      </div>
    </main>
  );
};

export default About;
