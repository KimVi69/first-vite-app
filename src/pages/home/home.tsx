import { useEffect, useState } from "react";
import "./home.css";

const Home = () => {
  const [age, setAge] = useState<number | "">("");
  const [lifeStage, setLifeStage] = useState<string>("");
  const [name, setName] = useState<string>("");

  useEffect(() => {
    if (typeof age === "number") {
      if (age < 18) {
        setLifeStage("Teen");
      } else if (age >= 18 && age <= 40) {
        setLifeStage("Adult");
      } else if (age > 40 && age <= 80) {
        setLifeStage("Middle-aged");
      } else if (age > 80) {
        setLifeStage("Old");
      }
    }
  }, [age]);

  return (
    <div className="container">
      <div>
        <div>
          <label htmlFor="age">Enter your age: </label>
          <input
            type="number"
            id="age"
            value={age}
            onChange={(e) =>
              setAge(e.target.value === "" ? "" : Number(e.target.value))
            }
          />
        </div>
        <div>
          <label htmlFor="name">Enter your name: </label>
          <input
            type="string"
            id="name"
            value={name}
            onChange={(e) =>
              setName(e.target.value === "" ? "" : String(e.target.value))
            }
          />
        </div>
        {lifeStage && (
          <div>
            <h2>Your age category is: {lifeStage}</h2>
          </div>
        )}
        {name && (
          <div>
            <h2>Your name is: {name}</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
