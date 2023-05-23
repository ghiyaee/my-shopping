import Link from "next/link";
const Register = () => {
    return (
      <div className="flex flex-col items-center  bg-zinc-500 p-10  gap-4 rounded-lg w-[400px]">
        <h3 className="text-3xl text-yellow-300">فرم ثبت نام</h3>
        <form className="flex flex-col gap-8 w-full">
          <input
            type="text"
            className="py-3  text-center text-2xl   outline-none rounded-lg"
            placeholder="نام کاربری"
          />
          <input
            type="email"
            className="py-3 text-center text-2xl   outline-none rounded-lg"
            placeholder="آدرس ایمیل"
          />
          <input
            type="password"
            className="py-3  text-center text-2xl   outline-none rounded-lg"
            placeholder=" پسورد"
          />
          <button className=" primery-button mt-0 ">تایید ثبت نام</button>
        </form>
      </div>
    );
}

export default Register;