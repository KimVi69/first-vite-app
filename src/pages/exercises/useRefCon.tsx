import { forwardRef, useRef, useImperativeHandle } from "react";

const MyInput = forwardRef(function MyInput(props, ref) {
  const inputRef = useRef<HTMLInputElement>(null);

  useImperativeHandle(
    ref,
    () => {
      return {
        focusRef() {
          inputRef.current?.focus();
        },
        clearRef() {
          if (inputRef.current) inputRef.current.value = "";
        },
      };
    },
    []
  );

  return (
    <input
      className="border-2 border-grey rounded-lg"
      {...props}
      ref={inputRef}
    />
  );
});

export default MyInput;
