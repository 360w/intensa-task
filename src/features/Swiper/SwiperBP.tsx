// import './SwiperBP.scss';
// import { Thumbs } from 'swiper/modules';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { useState } from 'react';


// const imgList = [
//     {
//         img: '',
//     },
// ];


// export const SwiperBP = () => {
//     const [activeThumb, setActiveThumb] = useState<null | boolean>(null);

//     return (
//         <section className="SwiperBP">
//             <div className="lg:mx-auto max-w-5xl mx-[1.5rem]">
//                 <div className="">
//                     <Swiper
//                         modules={[Thumbs]}
//                         loop={true}
//                         slidesPerView={1}
//                         grabCursor={true}
//                         thumbs={{
//                             swiper:
//                                 activeThumb ? activeThumb : null,
//                         }}
//                         className="thumbShow"
//                     >
//                         {imgList.map((p, index) => {
//                             return (
//                                 <SwiperSlide key={index}>
//                                     <img src={p.img} alt="" />
//                                 </SwiperSlide>
//                             );
//                         })}
//                     </Swiper>
//                 </div>
//             </div >
//         </section >
//     );
// };