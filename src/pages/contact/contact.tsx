import { yupResolver } from "@hookform/resolvers/yup";
import Image from "../../assets/images/contact-image.svg";
import { Label1 } from "./components/Label";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";

const schema = yup.object({
  firstName: yup.string().required("* First name is required"),
  lastName: yup.string().required("* Last name is required"),
  email: yup
    .string()
    .email("* Invalid email address")
    .required("* Email is required"),
  message: yup.string().optional(),
});

type Inputs = yup.InferType<typeof schema>;

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: yupResolver(schema),
  });
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <main className="flex flex-col justify-between p-20 pb-[120px] gap-32 lg:flex-row">
      <section className="flex flex-col gap-8 flex-1">
        <div className="flex flex-col gap-6">
          <h1 className="text-[64px] font-bold leading-[77.45px]">
            Contact us
          </h1>
          <h2 className="text-2xl font-normal text-[#828282]">
            Subheading for description or instructions
          </h2>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-6 h-full"
        >
          <div className="flex gap-8 max-md:flex-col">
            <div className="flex flex-col gap-2 w-full">
              <p className="text-base font-medium">First name</p>
              <input
                className="border-2 rounded-lg px-[16px] py-[12px]"
                {...register("firstName")}
                placeholder="John"
              />
              <p className="text-red-600">{errors.firstName?.message}</p>
            </div>
            <div className="flex flex-col gap-2 w-full">
              <p className="text-base font-medium">Last name</p>
              <input
                className="border-2 rounded-lg px-[16px] py-[12px]"
                {...register("lastName")}
                placeholder="Smith"
              />
              <p className="text-red-600">{errors.lastName?.message}</p>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <Label1 title="Email Address" style={false} />
            <input
              className="border-2 rounded-lg px-[16px] py-[12px]"
              {...register("email")}
              placeholder="email@janesfakedomain.net"
            />
            <p className="text-red-600">{errors.email?.message}</p>
          </div>
          <div className="flex flex-col gap-2 flex-1">
            <p className="text-base font-medium">Your message</p>
            <textarea
              className="border-2 rounded-lg px-[16px] py-[12px] flex-1 resize-none"
              {...register("message")}
              placeholder="Enter your question or message"
            />
            <p className="text-red-600">{errors.message?.message}</p>
          </div>
          <div className="flex">
            <button
              type="submit"
              className="bg-black rounded-lg text-white flex-1 py-4 text-xl"
            >
              Submit
            </button>
          </div>
        </form>
      </section>
      <div>
        <img
          className="w-full h-[657px] object-cover"
          src={Image}
          alt="Contact Image"
        />
      </div>
    </main>
  );
};

export default Contact;
