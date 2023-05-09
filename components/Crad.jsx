import { useContext } from 'react';
import { MyContext } from '@/utils/context';
import Link from 'next/link';
const Crad = () => {
  const { state, dispatch } = useContext(MyContext);
  const { cart } = state;
  return (
    <div className='container m-auto flex justify-center items-center min-h-screen'>
      {cart.cartItems.length === 0 ? (
        <h2 className="flex justify-center items-center text-3xl p-16 shadow-lg mr-8">
          سبد خرید شما خالی است -
          <Link className="text-blue-500" href={'/'}>
            برگشت
          </Link>
        </h2>
      ) : (
        ''
      )}
    </div>
  );
};

export default Crad;
