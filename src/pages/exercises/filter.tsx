import { useEffect, useState } from "react";

const Filter = () => {
  const [inputText, setInputText] = useState("");
  const [result, setResult] = useState<string[]>([]);

  useEffect(() => {
    const fruits = ["Apple", "Banana", "Mango", "Avocado", "Melon", "Coconut"];
    setResult(
      fruits.filter((fruit) =>
        fruit.toLowerCase().includes(inputText.toLowerCase())
      )
    );
  }, [inputText]);

  return (
    <main className="flex flex-col justify-center items-center text-center">
      <section className="flex flex-col gap-6 items-center">
        <h1>Filter</h1>
        <input
          className="text-xl text-center border-2 rounded-lg border-black max-w-[200px]"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <div>
          <ul className="flex">
            List of fruits: &nbsp;
            {result.map((item) => {
              return <li>{item}&nbsp;</li>;
            })}
          </ul>
        </div>
      </section>
    </main>
  );
};

export default Filter;
