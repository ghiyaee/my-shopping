import { data } from '@/data/data';
import Image from 'next/image';
import Link from 'next/link';
const Products = () => {
  return (
    <>
      <div className="container m-auto grid grid-cols-1 p-8  gap-8 md:p-0 lg:p-0 md:grid-cols-3 lg:grid-cols-4   ">
        {data.products.map((product) => (
          <div
            key={product.id}
            className=" p-6 shadow-xl rounded-lg  flex flex-col  gap-4
             bg-zinc-500 text-yellow-300 items-center  "
          >
            <Image
              alt={product.image}
              width={230}
              height={230}
              src={`/images${product.image[0]}`}
              style={{ objectFit: 'content', height: '230px' }}
              className=""
            />
            <div className="text-xl font-bold flex flex-col gap-4 items-center mt-4 ">
              <h2>{product.title}</h2>
              <p>قیمت :{product.price} تومان</p>
              <Link href={`/product/${product.id}`}>
                <button className="primery-button mt-4">اطلاعات بیشتر...</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Products;
