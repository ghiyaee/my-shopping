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
  const updatcountInStack = (item, qunty) => {
    const quantity=+qunty
      dispatch({ type: 'ADD_NEW_ITEM', payload: { ...item, quantity } });
  }
  return (
    <div className=" flex  justify-center gap-8 items-center flex-wrap mt-0">
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
          <div className="flex flex-col gap-6  ">
            {cart.cartItems.map((item) => (
              <div
                key={item.id}
                className=" flex  flex-col items-center md:flex-row
                rounded-lg shadow p-8 bg-zinc-500 text-yellow-300 text-xl justify-center "
              >
                <div className="flex items-center text-center flex-col  md:flex-row md:p-0">
                  <Image
                    src={`/images${item.image[0]}`}
                    width={120}
                    height={150}
                    alt={item.title}
                  />
                  <h2 className="p-6 w-[10rem]"> {item.title}</h2>
                  <div className="p-6 w-[10rem]">
                    قیمت به تومان {item.price}
                  </div>
                  <div className="p-6 w-[10rem]">
                    تعداد :
                    <select value={item.quantity}
                      className='bg-zinc-500 text-3xl outline-0'
                      onChange={(e)=> updatcountInStack(item,e.target.value)}>
                      {[...Array(item.countInStack).keys()].map((c) => (
                        <option key={c + 1} value={c + 1}>
                          {c + 1}
                        </option>
                      ))}
                    </select>
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
      {cart.cartItems.length !== 0 ? (
        <div
          className="w-[25rem] rounded-lg shadow p-0 mt-10
         bg-zinc-500 text-yellow-300 text-xl text-center md:p-10"
        >
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
          <button className="primery-button w-full mt-4">تایید نهایی </button>
        </div>
      ) : (
        ''
      )}
    </div>
  );
};

export default Crad;
