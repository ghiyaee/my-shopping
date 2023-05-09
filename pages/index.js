import Products from '@/components/Products';
import Slider from '@/components/Slider';
export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center  `}
    >
      <Products />
    </main>
  );
}
