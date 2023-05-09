import Products from '@/components/Products';
import Slider from '@/components/Slider';
export default function Home() {
  return (
    <main className={`flex min-h-screen flex-col items-center `}>
      <div className="hidden w-full lg:block"><Slider/></div>
      <Products />
    </main>
  );
}
