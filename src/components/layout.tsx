import Image from '../assets/matheus5.jpeg';
import Image2 from '../assets/matheus2.jpeg';
import Image3 from '../assets/matheus3.jpeg';
import Image4 from '../assets/matheus4.jpeg';
import Image5 from '../assets/Matheus1.jpeg';

import marca1 from '../assets/marca1.jpeg';
import marca2 from '../assets/marca2.jpeg';
import marca3 from '../assets/marca3.jpeg';
import marca4 from '../assets/marca4.jpeg';
import marca5 from '../assets/marca5.jpeg';
import marca6 from '../assets/marca6.jpeg';

import local from '../assets/placeholder.png'
import Horario from '../assets/relogio (1).png'
import Confirmar from '../assets/amor.png';
import calendario from '../assets/calendario.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import {Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { Link } from 'react-router-dom';

export default function Layout() {
  return (
    <div className="w-[95%] md:w-4/5 mx-auto mt-20">

    
      {/* Galeria de fotos */}
      <Swiper
        className="rounded-lg shadow-lg"
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{delay : 2000}}
        loop= {true}
        modules={[Pagination,Autoplay]}
      >
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
      <article className=" rounded-2xl shadow-xl text-center mt-12 bg-black ">
           <section className="flex mb-4 pt-3">
                <div className='ml-auto'>
                  <div className="rounded-full w-14 h-14 overflow-hidden bg-white ml-auto mr-auto">
                    <img src={local} alt="Marca 1" className="w-full scale-75 h-full object-cover" />
                  </div>
                    <p className='text-sm text-white mt-2'>Local :</p>
                    <p className='text-sm text-white mt-2 p-0.5 border-t'>Jardim das<br/> araras</p>

                </div>

                <div className=' ml-auto   mr-auto'>
                
                  <div className="rounded-full w-14 h-14 overflow-hidden bg-white">
                    <img src={Horario} alt="Marca 2" className="w-full h-full object-cover scale-75 p-2" />
                  </div>
                  <p className='text-sm text-white mt-2'>Horario:<br/> <p className='bg-blue-600 rounded-2xl mt-1'>11:30</p> </p>
                </div>
                
                 <div className='mr-auto'>
                    <div className="rounded-full w-14 h-14 overflow-hidde bg-white">
                      <img src={calendario} alt="Marca 3" className="w-full h-full object-cover scale-75 " />
                    </div>
                  <p className='text-sm text-white mt-2'>Data:<br/> <p className='rounded-2xl bg-blue-600 text-shadow-2 textshadow mt-1'>01.11</p></p>
                </div>
                <Link className=' mr-auto' to={"/confirmar"}>
                    <div className="rounded-full w-14 h-14 overflow-hidde bg-white">
                      <img src={Confirmar} alt="Marca 3" className="w-full h-full object-cover scale-75 " />
                    </div>
                  <p className='text-sm text-white mt-2'>Confirme <br/>sua<br/>Presença </p>
                </Link>
          </section>

          
        <p className="text-sm md:text-xl leading-relaxed text-white font-light tracking-wide px-4 py-6">
          No dia 21 de outubro de 1995, um sábado, às 17h, nascia 
          <span className="font-bold"> Matheus Souza Brito</span>, na Casa de Saúde Dr. José Evóide de Moura, em Afogados da Ingazeira-PE. Filho de Elpídio Grigório de Brito e Lucinalva Zezinho de Souza Brito, neto, por parte de pai, de Antonio Firmino Mendes e Maria de Lourdes de Brito (in memoriam), e, por parte de mãe, de João Zezinho de Souza (in memoriam) e Rita Luciano de Lima. Tendo apenas um único irmão, Diêgo de Souza Brito..
         <p className='mt-3'> Enfim... 30! Só gratidão!</p>
          Sabe aquela sensação de “piscou, passou”? Aquela idade que sempre pareceu tão distante finalmente chegou. Hoje é dia de refletir — encantado com o que já foi e esperançoso com o que ainda está por vir.
          <br /><br />
          Olho para quem me tornei e sinto apenas orgulho e alegria pelas amizades que construí e pelos aprendizados acumulados ao longo desses anos. Aprendi a aceitar quem sou e a acolher o que a vida tem a oferecer.
          <br /><br />
          São 30 anos de gratidão, com a certeza de que o melhor ainda está por vir!
        </p>

        {/* Data e local */}
        

        {/* Destaques */}
        <div className="mt-10">
          <p className="mb-3 font-semibold text-gray-200 text-lg">Onde comprar Presentes:</p>
          <section className="flex justify-evenly mb-4 flex-col">
              <article className='flex ml-auto mr-auto w-2/3 justify-between'>
                  <div className="rounded-full w-16 h-16 overflow-hidden">
                    <img src={marca1} alt="Marca 1" className="w-full scale-125 h-full object-cover" />
                  </div>
                  <div className="rounded-full w-16 h-16 overflow-hidden">
                    <img src={marca2} alt="Marca 2" className="w-full h-full object-cover" />
                  </div>
                  <div className="rounded-full w-16 h-16 overflow-hidden">
                    <img src={marca3} alt="Marca 3" className="w-full h-full object-cover scale-95" />
                  </div>
              </article>
              <article className='flex ml-auto mr-auto w-2/3 justify-between mt-2'>

                  <div className="rounded-full w-16 h-16 overflow-hidden">
                    <img src={marca4} alt="Marca 3" className="w-full h-full object-cover scale-95" />
                  </div>
                  <div className="rounded-full w-16 h-16 overflow-hidden">
                    <img src={marca5} alt="Marca 3" className="w-full h-full object-cover scale-90" />
                  </div>
                  <div className="rounded-full w-16 h-16 overflow-hidden">
                    <img src={marca6} alt="Marca 3" className="w-full h-full object-cover scale-110" />
                  </div>
              </article>
          </section>
        </div>

        {/* Botão de confirmação */}
        <Link to={"/confirmar"}>
            <button className="bg-blue-700 hover:bg-blue-800 text-black font-bold px-8 py-3 rounded-xl transition-all duration-300 mt-4 mb-6">
              Confirmar Presença
            </button>
        </Link>
      </article>
    </div>
  );
}
