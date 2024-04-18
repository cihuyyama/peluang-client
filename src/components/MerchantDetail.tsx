import { PartnerCardProps } from "@/types/partner"
import { useLoaderData } from "react-router-dom"
import merchant1 from '@/assets/images/merchant/Images Utama.png'

import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Thumbs } from 'swiper/modules';
import { CircleDot } from "lucide-react";

import icon5 from '../assets/images/icon/icons8-facebook.png'
import icon6 from '../assets/images/icon/icons8-instagram.png'
import icon7 from '../assets/images/icon/icons8-tiktok.png'

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

const MerchantDetail = () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [activeThumb, setActiveThumb] = useState<any>(null);
    const load: PartnerCardProps = useLoaderData() as PartnerCardProps;
    console.log(load);


    return (
        <section className='w-full h-[660px] py-[30px] flex flex-row items-center justify-start gap-[60px] max-w-[1320px] mx-auto'>
            <div className="h-[600px] w-[500px] flex flex-col justify-center">
                <Swiper

                    modules={[Navigation, Thumbs]}
                    loop={false}
                    slidesPerView={1}
                    pagination={{
                        clickable: true,
                    }}
                    grabCursor={false}
                    navigation={true}
                    thumbs={{
                        swiper:
                            activeThumb && !activeThumb.destroyed ? activeThumb : null,
                    }}
                    className="mySwiper2 mb-4 rounded-lg"
                >
                    <SwiperSlide>
                        <img src={merchant1} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={merchant1} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={merchant1} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={merchant1} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={merchant1} alt="" />
                    </SwiperSlide>
                </Swiper>

                <Swiper
                    onSwiper={setActiveThumb}
                    loop={false}
                    grabCursor={false}
                    spaceBetween={10}
                    slidesPerView={5}
                    modules={[Navigation, Thumbs]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <img src={merchant1} className="rounded-lg" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={merchant1} className="rounded-lg" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={merchant1} className="rounded-lg" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={merchant1} className="rounded-lg" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={merchant1} className="rounded-lg" alt="" />
                    </SwiperSlide>

                </Swiper>
            </div>

            <div className="w-full h-full flex flex-col justify-between">
                <div className="w-full h-fit flex flex-row gap-4">
                    <div className="w-fit h-fit shadow-[0_0_10px_4px_rgba(0,0,0,0.1)] rounded-full object-cover">
                        <img className="rounded-full" src={load.imgUrl} width={75} height={75} alt="" />
                    </div>
                    <div className="flex flex-col w-full h-full justify-center">
                        <h1 className="text-3xl font-semibold">
                            {load.title}
                        </h1>
                        <span className="text-green-500 flex flex-row items-center">
                            <CircleDot height={16} /> Online
                        </span>
                    </div>
                </div>

                <div className="flex flex-col w-full h-full justify-evenly">
                    <div className="flex flex-col gap-2">
                        <h2 className="text-xl font-semibold">
                            Tentang
                        </h2>
                        <p>
                            {load.desc}
                        </p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h2 className="text-xl font-semibold">
                            Social Media
                        </h2>
                        <div className='flex flex-row justify-start gap-[15px]'>
                            <img className='w-[30px] h-[30px] cursor-pointer hover:-translate-y-1 transition-all' src={icon5} alt="" />
                            <img className='w-[30px] h-[30px] cursor-pointer hover:-translate-y-1 transition-all' src={icon6} alt="" />
                            <img className='w-[30px] h-[30px] cursor-pointer hover:-translate-y-1 transition-all' src={icon7} alt="" />
                        </div>
                    </div>

                    <div className="flex flex-col gap-2">
                        <h2 className="text-xl font-semibold">
                            Detail Usaha
                        </h2>
                        <div className="flex flex-row">
                            <div className="h-full w-1/3">
                                <h3 className="font-semibold">
                                    6 Cabang
                                </h3>
                                <div>
                                    Seluruh Indonesia
                                </div>
                            </div>
                            <div className="h-full w-1/3">
                                <h3 className="font-semibold">
                                    Biaya Marketing
                                </h3>
                                <div>
                                    Tidak Ada
                                </div>
                            </div>
                            <div className="h-full w-1/3">
                                <h3 className="font-semibold">
                                    BEP
                                </h3>
                                <div>
                                    {load.BEP} Bulan
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-row items-center justify-between w-full p-6 text-white h-[150px] bg-gradient-to-r from-indigo-900 via-slate-400 to-neutral-100 rounded-lg">
                    <div className="flex flex-col gap-1 max-w-[480px]">
                        <h2 className="text-lg font-semibold">
                            Sudah punya akun belum ?
                        </h2>
                        <p className="text-sm">
                            Buat akun atau log in yuk. Ada diskon dan benefit biar kamu makin cuan
                            buka usaha lewat Peluang!
                        </p>
                    </div>
                    <div>
                        <button className='text-white font-inter cursor-pointer border-2 border-transparent hover:bg-[#a5408c] bg-[#771444] py-[5px] px-6 rounded-lg transition-all ml-4'>
                            Daftar
                        </button>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default MerchantDetail