import { useEffect } from "react";

const Register = () => {
  useEffect(() => {
    document.body.style.backgroundColor = "#98A675";

    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);

  return (
    <main className="flex justify-center items-center w-full h-full px-80 py-40">
      <section className="flex rounded-2xl overflow-hidden shadow-lg w-full h-full">
        <div className="h-full max-w-[45%]">
          <img
            className="w-full h-full object-cover"
            src="https://hips.hearstapps.com/hmg-prod/images/nature-quotes-landscape-1648265299.jpg?crop=1.00xw:0.760xh;0,0.0587xh&resize=1200:*"
          ></img>
        </div>
        <div className="bg-white flex-1 flex flex-col gap-6 p-20 items-center justify-center">
          <h1 className="text-start text-3xl font-bold w-full">Register</h1>
          <input
            className="shadow-custom rounded-lg px-[16px] py-[10px] w-full"
            placeholder="Name"
          />
          <input
            className="shadow-custom rounded-lg px-[16px] py-[10px] w-full"
            placeholder="Password"
          />
          <input
            className="shadow-custom rounded-lg px-[16px] py-[10px] w-full"
            placeholder="Confirm Password"
          />
          <div className="flex justify-between w-full text-sm">
            <p>Have an account? Log in</p>
            <p>Forgot Password?</p>
          </div>
          <button className="bg-[#2F3B32] rounded-3xl text-white px-[30px] py-[12px] shadow-lg text-sm font-medium">
            REGISTER
          </button>
          <div className="flex flex-col items-center text-sm">
            <p>if you are having trouble please contact</p>
            <p>support@viteproject.com</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Register;
