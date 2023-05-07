import Image from 'next/image';
import { useContext } from 'react';
import {MyContext} from "../utils/context"
const Product = ({ product }) => {
  const {state, dispatch}=useContext(MyContext)
  const handleAddItem = () => {
    const existItem = state.cart.cartItems.find(f => f.id === product.id)
    const quantity=existItem ? existItem.quantity + 1 : 1
   dispatch({type:'ADD_NEW_ITEM' , payload:{...product,quantity}})
   };
  return (
    <div className="container m-auto min-h-screen flex flex-col gap-4 justify-center ">
      <div
        className="  flex gap-8 justify-around flex-wrap items-center
       shadow shadow-cyan-800 rounded-lg p-6 mb-6"
      >
        <div className="flex flex-wrap justify-center gap-8 ">
          <Image
            width={300}
            height={300}
            src={`/images${product.image[0]}`}
            alt={product.title}
            className=""
          />
          <Image
            width={300}
            height={300}
            src={`/images${product.image[1]}`}
            alt={product.title}
            className=""
          />
        </div>
        <div className="p-10 font-bold shadow-xl shadow-cyan-800 rounded-lg sm:text-2xl ">
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
            className="primery-button w-full"
            onClick={handleAddItem}
          >
            سفارش
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
