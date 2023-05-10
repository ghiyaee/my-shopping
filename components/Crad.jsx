import { useContext } from 'react';
import { MyContext } from '@/utils/context';
import Image from 'next/image';
import Link from 'next/link';
const Crad = () => {
  const { state, dispatch } = useContext(MyContext);
  const { cart } = state;
  return (
    <div className=" flex  justify-around items-center flex-wrap mt-0">
      {cart.cartItems.length === 0 ? (
        <h2
          className="w-[40rem] flex justify-center items-center text-3xl 
          p-6 bg-zinc-500 rounded-lg text-yellow-100 shadow-lg mr-0"
        >
          سبد خرید شما خالی است &nbsp;
          <Link className="text-blue-300" href={'/'}>
            اینجا کلیک کنید
          </Link>
        </h2>
      ) : (
        <>
          <div className="flex flex-col gap-6 ">
            {cart.cartItems.map((i) => (
              <div
                key={i.id}
                className=" flex justify-around items-center 
                rounded-lg shadow p-6 bg-zinc-500 text-yellow-100 text-xl "
              >
                <div className="flex  items-center ">
                  <Image
                    src={`/images${i.image[0]}`}
                    width={90}
                    height={150}
                    alt={i.title}
                  />
                 
                    <h2 className="p-6 w-[10rem]"> {i.title}</h2>
                    <div className="p-6 w-[10rem]"> قیمیت : {i.price}</div>
                    <div className="p-6 w-[10rem]"> تعداد : {i.quantity}</div>
                
                </div>

                <button className="primery-button">انصراف</button>
              </div>
            ))}
          </div>
        </>
      )}

      <div className="w-[25rem] rounded-lg shadow p-10 mt-10 bg-[#f7f2e6] text-2xl">
        <p className="text-center"> فاکتور خرید</p>
        <div>تعداد :{cart.cartItems.reduce((a, c) => a + c.quantity, 0)}</div>
        <div>
          قیمت :{cart.cartItems.reduce((a, c) => a + c.quantity * c.price, 0)}{' '}
          تومان
        </div>
        <div>
          مالیات ارزش افزوده :{' '}
          {cart.cartItems.reduce(
            (a, c) => a + (c.quantity * c.price * 1) / 100,
            0
          )}{' '}
          تومان
        </div>
        <div>
          جمع فاکتور:
          {cart.cartItems.reduce(
            (a, c) => a + (c.quantity * c.price * 1) / 100 + c.price,
            0
          )}{' '}
          تومان
        </div>
        <button className="primery-button w-full">تایید نهایی </button>
      </div>
    </div>
  );
};

export default Crad;
