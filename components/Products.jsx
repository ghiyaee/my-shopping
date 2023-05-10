import { data } from '@/data/data';
import Image from 'next/image';
import Link from 'next/link';
const Products = () => {
  return (
    <>
      <div className="container m-auto flex justify-center flex-wrap gap-8 items-center  ">
        {data.products.map((product) => (
          <div
            key={product.id}
            className="p-8 shadow-xl rounded-lg  flex flex-col  gap-6
             bg-zinc-500 text-yellow-300 items-center " 
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
            <div className="text-xl font-bold flex flex-col gap-4 items-center ">
              <h2>{product.title}</h2>
              <p>قیمت :{product.price} تومان</p>
              <Link href={`/product/${product.id}`}>
                <button className="primery-button w-[15rem]">بیشتر...</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Products;
