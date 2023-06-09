

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { data } from '@/data/data';
const Slider = () => {
  const [state, setState] = useState([]);
  let [color1, setColor1] = useState('bg-red-500');
  let [color2, setColor2] = useState('bg-red-100');
  let [color3, setColor3] = useState('bg-red-100');
  let [color4, setColor4] = useState('bg-red-100');
  let [counter, setCounter] = useState(0);

  const handelItemNext = () => {
    if (counter < state.length - 1) {
      setCounter((prevConter) => prevConter + 1);
      if (counter === 0) {
        setColor2('bg-red-500');
        setColor1('bg-red-100');
      } else if (counter === 1) {
        setColor3('bg-red-500');
        setColor2('bg-red-100');
      }if (counter === 2) {
        setColor4('bg-red-500');
        setColor3('bg-red-100');
      }
      
    } else {
      setCounter(0);
      setColor1('bg-red-500');
      setColor2('bg-red-100');
      setColor3('bg-red-100');
       setColor4('bg-red-100');
    }
  };
  const handelItemPriv = () => {
    if (counter > 0) {
      setCounter((prevConter) => prevConter - 1);
      if (counter === 1) {
        setColor2('bg-red-100');
        setColor1('bg-red-500');
      }
      if (counter === 2) {
        setColor3('bg-red-100');
        setColor2('bg-red-500');
      }
      if (counter === 3) {
        setColor4('bg-red-100');
        setColor3('bg-red-500');
      }
    }
    else
    {
      setCounter(3);
      setColor1('bg-red-100');
        setColor4('bg-red-500');
      }
    
  };
  useEffect(() => {
    
      return setState(data.images);
    
  },[counter]);
  useEffect(() => {
    const timer = setInterval(() => {
      if (counter < 3) {
        setCounter((prevConter) => prevConter + 1);
        if (counter === 0) {
          setColor2('bg-red-500');
          setColor1('bg-red-100');
        } else if (counter === 1) {
          setColor3('bg-red-500');
          setColor2('bg-red-100');
        } else if (counter === 2) {
          setColor4('bg-red-500');
          setColor3('bg-red-100');
        }
      } else {
        setCounter(0);
        setColor1('bg-red-500');
        setColor2('bg-red-100');
        setColor3('bg-red-100');
        setColor4('bg-red-100');
      }
    }, 4000);
    return () => {
      clearInterval(timer);
    };
  }, [counter]);
  return (
    <>
      <div className="slider">
        {state[counter] ? (
          <>
            <div className="w-[25rem] h-[25rem] flex items-center justify-center">
              <Image
                width={400}
                height={300}
                src={`/images${state[counter]}`}
                alt={'imgSlider'}
                style={{ objectFit: 'cover ' }}
                className={`transition duration-1000 ease-in-out `}
              />
            </div>
            <div className="hidden md:block text-yellow-300 text-7xl ml-16 ">
              بهترین برای بهترین ها
            </div>
            <div onClick={handelItemPriv} className="hidden priv">
              {'<'}
            </div>
            <div onClick={handelItemNext} className="hidden next">
              {'>'}
            </div>
          </>
        ) : (
          ''
        )}
      </div>
      <div className=" flex justify-center gap-2 mb-8 mt-4 ">
        <span className={`w-4 h-4 ${color1} rounded-full `}></span>
        <span className={`w-4 h-4 ${color2} rounded-full `}></span>
        <span className={`w-4 h-4 ${color3} rounded-full `}></span>
        <span className={`w-4 h-4 ${color4} rounded-full `}></span>
      </div>
    </>
  );
};

export default Slider;
