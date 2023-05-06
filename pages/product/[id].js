
import { data } from "../../data/data.jsx";
import { useRouter } from "next/router.js";
import Image from 'next/image';
import Product from "@/components/Product.jsx";
import Link from "next/link.js";
const ProductPage = () => {
    const router = useRouter();
    const {id}=router.query
    const product = data.products.find((f) => f.id === parseInt(id));
    if (!product) {
        return (
          <div className=" flex justify-center items-center min-h-screen text-3xl">
            محصولی یافت نشد &nbsp; 
            <Link href={'/'}>
              <span className="text-red-500">برگشت به صفحه اصلی</span>
            </Link> 
          </div>
        );
    }
    return (
        <Product product={product } />
    );
}

export default ProductPage;