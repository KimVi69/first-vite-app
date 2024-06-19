import { Link } from "react-router-dom";

const header = () => {
  return (
    <header className="flex justify-between h-[164px] items-center px-20 max-md:flex-col max-md:justify-end max-md:gap-8">
      <div className="text-xl font-medium">
        <Link to="/">Vite Project</Link>
      </div>
      <nav className="flex gap-12">
        <ul className="flex gap-12 items-center text-xl font-medium">
          <li>
            <Link to="/article">Article</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
        <button className="bg-black rounded-lg text-white px-[24px] py-[14px] text-base">
          LOGIN
        </button>
      </nav>
    </header>
  );
};

export default header;
