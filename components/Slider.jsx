

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { data } from '@/data/data';
const Slider = () => {
  const { image } = data.products[1]
  console.log(image[0]);
  const [state, setState] = useState([]);
  let [color1, setColor1] = useState('bg-blue-500');
  let [color2, setColor2] = useState('bg-blue-100');
  let [color3, setColor3] = useState('bg-blue-100');
  let [counter, setCounter] = useState(0);
  const handelItemNext = () => {
    if (counter < state.length - 1) {
      setCounter((prevConter) => prevConter + 1);
      if (counter === 0) {
        setColor2('bg-blue-500');
        setColor1('bg-blue-100');
      } else if (counter === 1) {
        setColor3('bg-blue-500');
        setColor2('bg-blue-100');
      }
    } else {
      setCounter(0);
      setColor1('bg-blue-500');
      setColor2('bg-blue-100');
      setColor3('bg-blue-100');
    }
  };
  const handelItemPriv = () => {
    if (counter > 0) {
      setCounter((prevConter) => prevConter - 1);
      if (counter === 1) {
        setColor2('bg-blue-100');
        setColor1('bg-blue-500');
      }
      if (counter === 2) {
        setColor3('bg-blue-100');
        setColor2('bg-blue-500');
      }
    } else {
      setCounter(2);
      if (counter === 0) {
        setColor1('bg-blue-100');
        setColor3('bg-blue-500');
      }
    }
  };
  useEffect(() => {
    
      return setState(image);
    
  },[counter]);
  useEffect(() => {
    const timer = setInterval(() => {
      if (counter < 2) {
        setCounter((prevConter) => prevConter + 1);
        if (counter === 0) {
          setColor2('bg-blue-500');
          setColor1('bg-blue-100');
        } else if (counter === 1) {
          setColor3('bg-blue-500');
          setColor2('bg-blue-100');
        }
      } else {
        setCounter(0);
        setColor1('bg-blue-500');
        setColor2('bg-blue-100');
        setColor3('bg-blue-100');
      }
    }, 4000);
    return () => {
      clearInterval(timer);
    };
  }, [counter]);
  return (
    <>
      <div className="w-full rounded-lg bg-blue-300 flex justify-center items-center h-[35rem]  ">
        {state[counter] ? (
          <div className="relative">
            <Image
              width={500}
              height={400}
              src={`/images${state[counter]}`}
              alt={'imgSlider'}
              style={{ objectFit: 'cover ' }}
              className={`transition duration-700    `}
            />
            <div>
              <span onClick={handelItemPriv} className="priv">
                {'<'}
              </span>
              <span onClick={handelItemNext} className="next">
                {'>'}
              </span>
            </div>
          </div>
        ) : (
          ''
        )}
      </div>
      <div className="flex justify-center gap-2 mb-8 mt-4 ">
        <span className={`w-4 h-4 ${color1} rounded-full `}></span>
        <span className={`w-4 h-4 ${color2} rounded-full `}></span>
        <span className={`w-4 h-4 ${color3} rounded-full `}></span>
      </div>
    </>
  );
};

export default Slider;
