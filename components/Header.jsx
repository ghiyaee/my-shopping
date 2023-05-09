import Link from 'next/link';
import { useContext } from 'react';
import { MyContext } from '../utils/context';
import { SlBasket } from 'react-icons/sl';

const Header = () => {
  const { state, dispatch } = useContext(MyContext)
  const {cart}=state
    return (
      <header
        className="h-14 w-full shadow-xl 
       flex justify-between items-center font-bold sm:text-2xl sm:h-20 "
      >
        <Link href={'/'}>
          <div className="p-2 sm:p-6">فروشگاه من</div>
        </Link>
        <nav className="flex p-2 items-center">
          <div className="ml-2 sm:p-4 flex items-center  ">
            {cart.cartItems.length > 0 && (
              <span className="item-add ">
                {cart.cartItems.reduce((a, b) => a + b.quantity, 0)}
              </span>
            )}
            <Link href={'/card'}>
              <SlBasket className="sm:text-3xl" />
            </Link>
          </div>
            <div className='border bg-zinc-900 h-8 ml-2'></div>
          <div className="sm:p-4">حساب کاربری</div>
        </nav>
      </header>
    );
}

export default Header;