const header = () => {
  return (
    <header className="flex justify-between h-[164px] items-center px-20">
      <div className="text-xl font-medium">Site name</div>
      <nav className="flex gap-12">
        <ul className="flex gap-12 items-center text-xl font-medium">
          <li>Page</li>
          <li>Page</li>
          <li>Page</li>
        </ul>
        <button className="bg-black rounded-lg text-white px-[24px] py-[14px] text-base">
          Button
        </button>
      </nav>
    </header>
  );
};

export default header;
