import Link from "next/link";
const Login = () => {
  return (
    <div className="flex flex-col items-center  bg-zinc-500 p-10  gap-4 rounded-lg w-[400px]">
      <h3 className="text-2xl text-yellow-300">فرم ورود</h3>
      <form className="flex flex-col gap-4 w-full">
        <input
          type="email"
          className="py-3 text-center text-2xl   outline-none rounded-lg"
          placeholder="ایمیل خود را وارد کنید"
        />
        <input
          type="password"
          className="py-3 text-center text-2xl   outline-none rounded-lg"
          placeholder="پسورد خود را وارد کنید"
        />
        <button className="w-full primery-button">ورود</button>
      </form>
      <div className="flex text-2xl ">
        <p>ثبت نام نکردید؟</p> &nbsp;&nbsp;
        <Link href={'/register'} className="text-yellow-300">
          اینجا کلیک کنید
        </Link>
      </div>
    </div>
  );
};

export default Login;
