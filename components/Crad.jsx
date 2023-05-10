import { useContext } from 'react';
import { MyContext } from '@/utils/context';
import Image from 'next/image';
import Link from 'next/link';
const Crad = () => {
  const { state, dispatch } = useContext(MyContext);
  const { cart } = state;
  const removeHandle = (item) => {
    dispatch({ type: 'ERMOVE_ITEM' ,payload:item});
  }
  return (
    <div className=" flex  justify-center gap-8 items-center flex-wrap mt-6">
      {cart.cartItems.length === 0 ? (
        <h2
          className="w-[35rem] flex justify-center items-center md:text-3xl 
          p-6 bg-zinc-500  text-yellow-100 shadow-lg mr-0" 
        >
          سبد خرید شما خالی است &nbsp;
          <Link className="text-blue-300" href={'/'}>
            اینجا کلیک کنید
          </Link>
        </h2>
      ) : (
        <>
          <div className="flex flex-col gap-6  ">
            {cart.cartItems.map((item) => (
              <div
                key={item.id}
                className=" flex  flex-col items-center md:flex-row
                rounded-lg shadow p-8 bg-zinc-500 text-yellow-100 text-xl justify-center "
              >
                <div className="flex items-center text-center flex-col  md:flex-row md:p-0">
                  <Image
                    src={`/images${item.image[0]}`}
                    width={90}
                    height={150}
                    alt={item.title}
                  />
                  <h2 className="p-6 w-[10rem]"> {item.title}</h2>
                  <div className="p-6 w-[10rem]">
                    {' '}
                    قیمت به تومان {item.price}
                  </div>
                  <div className="p-6 w-[10rem]"> تعداد :
                    {item.quantity}
                  </div>
                </div>
                <button
                  className="primery-button"
                  onClick={() => removeHandle(item)}
                >
                  انصراف
                </button>
              </div>
            ))}
          </div>
        </>
      )}

      <div className="w-[25rem] rounded-lg shadow p-0 mt-10 bg-[#f7f2e6] text-xl text-center md:p-10">
        <p className="mb-4 font-bold"> فاکتور خرید</p>
        <div>
          تعداد :&nbsp;{cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
        </div>
        <div>
          جمع اقلام :&nbsp;
          {cart.cartItems.reduce((a, c) => a + c.quantity * c.price, 0)} تومان
        </div>
        <div>
          مالیات ارزش افزوده :&nbsp;{' '}
          {cart.cartItems.reduce(
            (a, c) => a + (c.quantity * c.price * 1) / 100,
            0
          )}
          تومان
        </div>
        <div>
          جمع فاکتور:&nbsp;
          {cart.cartItems.reduce(
            (a, c) =>
              a + (c.quantity * c.price * 1) / 100 + c.quantity * c.price,
            0
          )}
          تومان
        </div>
        <button className="primery-button w-full">تایید نهایی </button>
      </div>
    </div>
  );
};

export default Crad;
