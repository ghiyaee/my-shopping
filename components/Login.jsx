import Link from 'next/link';
import { useState, useContext, useEffect } from 'react';
import { MyContext } from '@/utils/context';
import { useRouter } from 'next/navigation';
const Login = () => {
  const router = useRouter();
  const { state } = useContext(MyContext);
  const { users } = state;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const handelSubmit = (e) => {
    e.preventDefault();
  };
  const handelUser = () => {
    const { newUser} = JSON.parse(localStorage.getItem('users'));
    if (newUser=== undefined) {
      setMessage('ایمیل یا رمز عبور نامعتبر یا خالی است ');
      setEmail('');
      setPassword('');
      return;
    } else if (email === newUser.email && password === newUser.password) {
      router.push('/checkOut');
    } 
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setMessage('');
    }, 1900);
    return () => {
      clearTimeout(timer);
    };
  }, [message]);
  useEffect(() => {
    if (users) {
      localStorage.setItem('users', JSON.stringify(users));
    }
  });
  return (
    <div className="flex flex-col items-center  bg-zinc-500 p-10  gap-4 rounded-lg w-[400px]">
      <h3 className="text-2xl text-yellow-300">فرم ورود</h3>
      <form className="grid grid-cols-1 gap-6 w-full" onSubmit={handelSubmit}>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          className="py-3 text-center text-2xl   outline-none rounded-lg"
          placeholder="ایمیل خود را وارد کنید"
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          className="py-3 text-center text-2xl   outline-none rounded-lg"
          placeholder="پسورد خود را وارد کنید"
        />
        {message ? (
          <p className="text-white font-blod text-xl">{message}</p>
        ) : (
          ''
        )}
        <button className="w-full primery-button" onClick={handelUser}>
          ورود
        </button>
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
