import Link from 'next/link';
import { SlBasket } from 'react-icons/sl';
const Header = () => {
    return (
      <header className="h-12 w-full shadow-xl 
       flex justify-between items-center font-bold sm:text-2xl sm:h-16 ">
        <Link href={'/'}>
          <div className="p-2 sm:p-6">فروشگاه من</div>
        </Link>
        <nav className="flex p-2 items-center">
          <div className="ml-2 sm:p-4">
            <SlBasket className="sm:text-2xl" />
          </div>
          <div className="sm:p-4">حساب کاربری</div>
        </nav>
      </header>
    );
}

export default Header;