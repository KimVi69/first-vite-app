import React from "react";
import MyInput from "./useRefCon";

export interface MyInputRef {
  focusRef: () => void;
  clearRef: () => void;
}

const UseRef = () => {
  const ref = React.useRef<MyInputRef>(null);

  function handleFocus() {
    ref.current?.focusRef();
  }

  function handleReset() {
    ref.current?.clearRef();
  }

  return (
    <main className="flex flex-col justify-center items-center">
      <section>
        <div className="flex flex-col gap-4 items-center">
          <h1>Enter an input:</h1>
          <MyInput ref={ref} />

          <div className="flex gap-4">
            <button
              className="bg-black text-white rounded-lg px-4 py-2"
              onClick={handleFocus}
            >
              Focus
            </button>
            <button
              className="bg-black text-white rounded-lg px-4 py-2"
              onClick={handleReset}
            >
              Clear
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default UseRef;
