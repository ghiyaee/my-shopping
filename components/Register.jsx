import Link from 'next/link';
import { useContext } from 'react';
import { MyContext } from '@/utils/context';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { data } from '@/data/data';

const Register = () => {
  const router = useRouter();
  const { state, dispatch } = useContext(MyContext);
  const { users } = state;
  console.log(users);
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const handelSubmit = (e) => {
    e.preventDefault();
  };
  const handelRegister = () => {
    const person = JSON.parse(localStorage.getItem('users'));
    console.log(person);
    // if (person.email === email) {
    //   setMessage(`بااین ایمیل قبلا ثبت نام شده است`)
    //   return
    // } else {
      
    // }
    dispatch({ type: 'ADD_NEW_USERS',payload:{user,email,password,} });
    router.push('./login');

  };
  return (
    <div className="flex flex-col items-center  bg-zinc-500 p-10  gap-4 rounded-lg w-[400px]">
      <h3 className="text-3xl text-yellow-300">فرم ثبت نام</h3>
      <form className="flex flex-col gap-4 w-full" onSubmit={handelSubmit}>
        <input
          value={user}
          onChange={(e) => setUser(e.target.value)}
          type="text"
          className="py-3  text-center text-2xl   outline-none rounded-lg"
          placeholder="نام کاربری"
        />
        {user.length < 5 ? (
          <p className="text-red-100 text-xl">
            نام کاربری باید بیشتراز 5 حرف باشد
          </p>
        ) : (
          ''
        )}
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          className="py-3 text-center text-2xl   outline-none rounded-lg"
          placeholder="آدرس ایمیل"
        />
        {email.length < 12 ? (
          <p className="text-red-100 text-xl">
            نام ایمیل شما باید بیشتز از 15 حرف باشد
          </p>
        ) : (
          ''
        )}
        {message ? <p className="text-white text-2xl">{message}</p> : ''}
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          className="py-3  text-center text-2xl   outline-none rounded-lg"
          placeholder=" پسورد"
        />
        {password.length < 8 ? (
          <p className="text-red-100 text-xl">رمز عبور باید 8 حرفی باشد</p>
        ) : (
          ''
        )}
        <button className=" primery-button mt-0 " onClick={handelRegister}>
          تایید ثبت نام
        </button>
      </form>
    </div>
  );
};

export default Register;
