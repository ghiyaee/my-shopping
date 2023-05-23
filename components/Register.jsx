import Link from "next/link";
const Register = () => {
    return (
      <div className="flex justify-center items-center flex-col gap-4 bg-zinc-500 container m-auto p-10 rounded-lg">
        <h3 className="text-3xl text-yellow-300">فرم ثبت نام</h3>
        <form className="flex flex-col gap-4">
          <input
            type="text"
            className="py-5 px-20 text-center text-2xl   outline-none rounded-lg"
            placeholder="نام کاربری"
          />
          <input
            type="email"
            className="py-5 px-20 text-center text-2xl   outline-none rounded-lg"
            placeholder="آدرس ایمیل"
          />
          <input
            type="password"
            className="py-5 px-20 text-center text-2xl   outline-none rounded-lg"
            placeholder=" پسورد"
          />
        <button className=" primery-button mt-4 ">تایید ثبت نام</button>
        </form>
      </div>
    );
}

export default Register;