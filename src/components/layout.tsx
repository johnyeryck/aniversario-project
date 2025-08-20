import Image from '../assets/matheus5.jpeg';
import Image2 from '../assets/matheus2.jpeg';
import Image3 from '../assets/matheus3.jpeg';
import Image4 from '../assets/matheus4.jpeg';
import Image5 from '../assets/Matheus1.jpeg';

import marca1 from '../assets/marca1.jpeg';
import marca2 from '../assets/marca2.jpeg';
import marca3 from '../assets/marca3.jpeg';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default function Layout() {
  return (
    <div className="w-[95%] md:w-4/5 mx-auto mt-20 ">
      {/* Galeria de fotos */}
      <Swiper className="rounded-lg shadow-lg" slidesPerView={1}>
        <SwiperSlide>
          <img src={Image} alt="Imagem 1" className="mx-auto rounded-lg object-cover" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Image2} alt="Imagem 2" className="mx-auto rounded-lg object-cover" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Image3} alt="Imagem 3" className="mx-auto rounded-lg object-cover" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Image4} alt="Imagem 4" className="mx-auto rounded-lg object-cover" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Image5} alt="Imagem 5" className="mx-auto rounded-lg object-cover" />
        </SwiperSlide>
      </Swiper>

      {/* Convite */}
      <article className="p-6 rounded-xl shadow-md text-center mt-10">
        <div className="text-center flex justify-evenly">
          <div className="flex flex-col">
            <h1 className="font-bold text-white mb-2">
              01.11
            </h1>
            <p className="text-blue-600 mb-4">
              ÀS 11:30H
            </p>
          </div>

          <p className="text-lg md:text-xl text-white italic">
            No Jardim das<br />Araras
          </p>
        </div>

        {/* Destaques */}
        <div className="mt-10">
          <p className="mb-3 font-semibold text-gray-700">Destaques Para:</p>
          <section className="flex justify-evenly mb-4">
            <div className="rounded-full w-16 h-16 overflow-hidden hover:scale-110 transition-transform duration-300">
              <img src={marca1} alt="Marca 1" className="w-full scale-125 h-full object-cover" />
            </div>
            <div className="rounded-full w-16 h-16 overflow-hidden hover:scale-110 transition-transform duration-300">
              <img src={marca2} alt="Marca 2" className="w-full h-full object-cover" />
            </div>
            <div className="rounded-full w-16 h-16 overflow-hidden hover:scale-110 transition-transform duration-300">
              <img src={marca3} alt="Marca 3" className="w-full h-full object-cover scale-95" />
            </div>
          </section>
        </div>

        {/* Botão de confirmação */}
        <button className="bg-white hover:bg-blue-700 text-black font-bold px-6 py-3 rounded-lg transition">
          Confirmar Presença
        </button>
      </article>
    </div>
  );
}
