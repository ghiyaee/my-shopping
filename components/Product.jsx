import Image from 'next/image';
import { useContext } from 'react';
import { MyContext } from "../utils/context"
import { useRouter } from 'next/navigation';
const Product = ({ product }) => {
  const router = useRouter()
  const {state, dispatch}=useContext(MyContext)
  const handleAddItem = () => {
    const existItem = state.cart.cartItems.find(f => f.id === product.id)
    const quantity=existItem ? existItem.quantity + 1 : 1
    dispatch({ type: 'ADD_NEW_ITEM', payload: { ...product, quantity } })
    router.push('/card')
   };
  return (
    <div className="container m-auto min-h-screen flex flex-col gap-0 justify-center p-6 ">
      <div
        className="  flex flex-col md:flex-row gap-6 justify-between md:justify-around flex-wrap items-center
       shadow  rounded-lg p-4 mb-0 bg-zinc-500  "
      >
        <div className="flex flex-col flex-wrap md:flex-row  justify-center gap-2 items-center ">
          <Image
            width={230}
            height={300}
            src={`/images${product.image[0]}`}
            alt={product.title}
            className="md:w-[250px]"
          />
          <Image
            width={230}
            height={300}
            src={`/images${product.image[1]}`}
            alt={product.title}
            className="md:w-[350px]"
          />
        </div>
        <div className="p-6 mt-4 font-bold md:p-8 shadow-xl bg-[#f7f2e6] rounded-lg sm:text-2xl ">
          <div>مشخصات گوشی:</div>
          <div>نام محصول :&nbsp;{product.title}</div>
          <div>قیمت :&nbsp;{product.price} تومان</div>
          <div>
            <p>دوربین اصلی : &nbsp;&nbsp;{product.details.camera}</p>
            <p>دوربین سلفی :&nbsp; &nbsp;{product.details.cameraSelfie}</p>
            <p>باطری :&nbsp; &nbsp;{product.details.battery}</p>
            <p>ظرفیت حافظه :&nbsp; &nbsp;{product.details.memory}</p>
            <p>سیستم عامل :&nbsp; &nbsp;{product.details.os}</p>
          </div>
          <button
            className="primery-button w-full mt-4"
            onClick={handleAddItem}
          >
            خرید و سفارش
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
