import Image from "next/image";
import Link from "next/link";

type Item = {
  id: number;
  title: string;
  description: string;
  price: number;
  photo: string;
  isActive: boolean;
}

const getData = async () => {
  try{
    const result = await fetch(process.env.API_URL + '/catalog');
    const data = await result.json();
    return data;
  } catch(err) {  
    console.log(err);
  }
}

export default async function Page() {
  const data = await getData();
  
  return (
    <section className="section"> 
      <div className="container">
        <h1 className="text-4xl text-slate-800 font-bold text-center mb-5">Catalog</h1> 
        <div className="grid grid-cols-3 gap-5">
          {data && data.map((item:Item) => 
            <div className="w-full flex flex-col items-center border border-slate-800">
              <Link href={'/product/' + item.id} className="image-box">
                <Image 
                  className="relative z-0"
                  src={process.env.API_URL + '/' + item.photo} 
                  width={300} 
                  height={300} 
                  alt={item.title} 
                />
              </Link>
              <div className="w-full h-full flex flex-col p-5 bg-slate-800">
                <h4 className="self-start text-sm text-gray-100">{item.title}</h4>
                <h5 className="self-start font-bold text-gray-200">Цена: {item.price} ₽</h5>
                <button className="btn">Заказать</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
