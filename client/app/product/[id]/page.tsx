import Image from "next/image";
import {IoCartOutline} from 'react-icons/io5';

const getData = async (id:string) => {
  console.log(id);

  try{
    const result = await fetch(process.env.API_URL + `/catalog/${id}`);
    const data = await result.json();
    return data
  } catch(err) {  
    console.log(err);
  }
}

async function Page({ params }: { params: { id: string } }) {
  const data = await getData(params.id);
  console.log(data);
  return (
    <section className="section">
      <div className="container grid grid-cols-2 gap-5">
        <div className="h-full">
          <Image width={600} height={600} alt={data.title} src={process.env.API_URL + '/' + data.photo} />
        </div>
        <div className="h-full flex flex-col">
          <h1 className="text-2xl text-slate-800 font-bold mb-5">{data.title}</h1> 
          <div className="w-full h-12 flex items-center justify-around bg-slate-800 mb-5 font-bold text-lg text-gray-100">
            {data.isActive ? 'В наличии' : 'Под заказ'}
          </div>
          {data.parametrs && data.parametrs.map((param:any) =>
            <div className="text-slate-800 mb-2">
              - {param.title}: {param.description}
            </div>
          )}
         
          <div className="w-full h-24 flex items-center justify-around mt-auto bg-slate-800">
            <h2 className="text-xl font-bold text-gray-100">Цена: {data.price} ₽</h2>
            <button className="flex items-center justify-center bg-gray-100 p-2 rounded">
              <span>В корзину</span>
              <IoCartOutline className="ml-2" />
            </button>
          </div>
        </div>
        <div className="col-span-full mt-5">
          <h3 className="text-2xl text-slate-800 font-bold mb-5">Описание</h3> 
          <p className="text-slate-600">{data.description}</p>
        </div>
      </div>
    </section>
  );
}

export default Page;