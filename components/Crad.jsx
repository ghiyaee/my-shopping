import { useContext } from 'react';
import { MyContext } from '@/utils/context';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
const Crad = () => {
  const router = useRouter();
  const { state, dispatch } = useContext(MyContext);
  const { cart, users } = state;
  const { newUser } = users;
  const removeHandle = (item) => {
    dispatch({ type: 'ERMOVE_ITEM', payload: item });
  };
  const updatcountInStack = (item, qunty) => {
    const quantity = +qunty;
    dispatch({ type: 'ADD_NEW_ITEM', payload: { ...item, quantity } });
  };

  const handelUser = () => {
    if (newUser) {
      router.push('/checkOut');
    } else {
      router.push('/login');
    }
  };
  return (
    <div className=" container m-auto flex  justify-center gap-4 p-8 flex-wrap mt-0 ">
      {cart.cartItems.length === 0 ? (
        <h2
          className="w-[35rem] flex justify-center items-center md:text-3xl 
          p-6 bg-zinc-500  text-yellow-400 shadow-lg "
        >
          سبد خرید شما خالی است &nbsp;
          <span>
            <Link className="text-red-400" href={'/'}>
              اینجا کلیک کنید
            </Link>
          </span>
        </h2>
      ) : (
        <>
          <div className="grid grid-cols-1 gap-4  ">
            {cart.cartItems.map((item) => (
              <div
                key={item.id}
                className="w-[20rem] h-[22rem] flex  items-center md:flex-row md:w-full md:h-[10rem]
                rounded-lg shadow p-6 bg-zinc-500 text-yellow-300 text-xl md:text-2xl justify-center "
              >
                <div className="flex items-center  text-center flex-col md:flex-row md:p-4">
                  <Image
                    src={`/images${item.image[0]}`}
                    width={120}
                    height={150}
                    alt={item.title}
                    className="mb-4 md:mb-0"
                  />
                  <h2 className=" w-[10rem] font-bold"> {item.title}</h2>
                  <p className="md:m-0 w-[18rem]">
                    {item.price}- قیمت به تومان{' '}
                  </p>
                  <div className="md:m-4 w-[10rem]">
                    تعداد (+/-)
                    <select
                      value={item.quantity}
                      className="bg-zinc-500 text-3xl outline-0 cu"
                      onChange={(e) => updatcountInStack(item, e.target.value)}
                    >
                      {[...Array(item.countInStack).keys()].map((c) => (
                        <option key={c + 1} value={c + 1}>
                          {c + 1}
                        </option>
                      ))}
                    </select>
                  </div>
                  <button
                    className="primery-button mt-2 "
                    onClick={() => removeHandle(item)}
                  >
                    انصراف از خرید
                  </button>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
      <div className="mt-4 md:mt-0">
        {cart.cartItems.length !== 0 ? (
          <div
            className="w-[20rem]  rounded-lg shadow p-4 mt-0
         bg-zinc-500 text-yellow-300 text-xl text-center md:p-10"
          >
            <p className="mb-4 font-bold"> فاکتور خرید</p>
            <div>
              تعداد :&nbsp;{cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
            </div>
            <div>
              جمع اقلام :&nbsp;
              {cart.cartItems.reduce(
                (a, c) => a + c.quantity * c.price,
                0
              )}{' '}
              تومان
            </div>
            <div>
              مالیات برارزش افزوده :&nbsp;{' '}
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
            <button className="primery-button mt-4" onClick={handelUser}>
              تایید نهایی{' '}
            </button>
          </div>
        ) : (
          ''
        )}
      </div>
    </div>
  );
};

export default Crad;
