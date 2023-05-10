import { data } from '@/data/data';
import Image from 'next/image';
import Link from 'next/link';
import Slider from './Slider';
const Products = () => {
 
  return (
    <>
      <div className="flex justify-center flex-wrap gap-8 my-10 md:p-16  ">
        {data.products.map((product) => (
          <div
            key={product.id}
            className="p-8 shadow-xl rounded-lg flex flex-col justify-between items-center bg-[#f7f2e6] "
          >
            <Link href={`/product/${product.id}`}>
              <Image
                alt={product.image}
                width={230}
                height={230}
                src={`/images${product.image[0]}`}
                style={{ objectFit: 'content', height: '230px' }}
                className=""
              />
            </Link>
            <div className="text-xl font-bold mt-4">
              <h2>{product.title}</h2>
              <div>قیمت :{product.price} تومان</div>
              <Link href={`/product/${product.id}`}>
                <button className="primery-button w-full">بیشتر...</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Products;
