import { SiTelegram } from 'react-icons/si';
import { BsWhatsapp } from 'react-icons/bs';
import { AiTwotoneMail } from 'react-icons/ai';
import { AiTwotonePhone } from 'react-icons/ai';
import Link from 'next/link';
const Footer = () => {
  return (
    <footer className="h-30  w-full shadow-inner border flex justify-around
           items-center text-2xl font-bold flex-wrap p-8 gap-4  mt-0 text-center"
    >
      <div className="mb-4">
        این یک وب سایت فروشگاهی بوده و در حال توسعه می باشد
      </div>
      <Link href={''}>
        <div className="flex ">
          ارتباط با ما :&nbsp;
          <SiTelegram className="text-blue-500 mr-5" />
          <BsWhatsapp className="text-green-500 mr-5" />
          <AiTwotonePhone className="mr-5 text-blue-500" />
          <AiTwotoneMail className="mr-5" />
        </div>
      </Link>
    </footer>
  );
};

export default Footer;
