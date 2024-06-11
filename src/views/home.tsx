import React, { useState } from "react";

const Home = () => {

    const [text, setText] = useState("");
    const [newText, setNewText] = useState("");
    const handleSubmit = (event:React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setNewText(text);
    }

  return (
    <div>
        <form onSubmit = {handleSubmit}>
            <input
            type = "text"
            value = {text}
            onChange = {(e) => setText(e.target.value)}
            placeholder = "Enter Text"
            />
        </form>
        <div>
            <h2>{newText}</h2>
        </div>
    </div>
  );
};

export default Home;