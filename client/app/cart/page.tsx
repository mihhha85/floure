import Image from "next/image";
import img from '@/public/default.png';
import {BsTrash} from 'react-icons/bs';

function Page() {
  return ( 
    <section className="section min-h-screen">
      <h1 className="text-4xl text-slate-800 font-bold text-center mb-5">Корзина</h1>
      <div className="container">
        <div className="w-full flex items-center rounded border border-slate-800 p-2 gap-5">
          <Image src={img} width={100} height={100} alt={'photo'} />
          <div className="w-full h-full flex flex-col">
            <h4 className="text-lg text-slate-800 mb-2">Траурный венок "Классический" №3</h4>
            <h5 className="font-bold text-lg text-slate-600">Цена: 9000 ₽</h5>
          </div>
          <input 
            type="number" 
            defaultValue={1} 
            className="w-10 h-10 bg-gray-10 text-slate-800 rounded p-2" 
          />
          <button className="hover:bg-blue-200 hover:bg-opacity-40 flex items-center justify-center p-5 mr-2 rounded-full transition-colors duration-200">
            <BsTrash className="text-2xl text-slate-800" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Page;