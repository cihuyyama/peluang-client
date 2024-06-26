import { Separator } from './ui/separator'

import icon1 from '../assets/images/icon/icon1.png'
import icon2 from '../assets/images/icon/icon2.png'
import icon3 from '../assets/images/icon/icon3.png'

import icon5 from '../assets/images/icon/icons8-facebook.png'
import icon6 from '../assets/images/icon/icons8-instagram.png'
import icon7 from '../assets/images/icon/icons8-tiktok.png'

import logo2 from '../assets/images/Logo pink 2024 - Draft 1.png'

const Footer = () => {
    return (
        <footer className='w-full h-[510px] my-6 md:px-0 px-4'>
            <div className='w-full h-full mx-auto max-w-[1190px] '>
                <Separator className='my-[70px] h-[1px]' />
                <div className='w-full h-fit flex md:flex-row flex-col md:gap-0 gap-8'>
                    <div className='h-full md:w-1/4 bg-white flex justify-start'>
                        <div className='flex flex-col gap-[20px] w-fit'>
                            <h2 className='font-semibold text-gray-500'>
                                Layanan Kami
                            </h2>
                            <div className='text-gray-400 cursor-pointer hover:text-gray-400/50 w-fit text-sm font-extralight'>
                                Mitra Kami
                            </div>
                            <div className='text-gray-400 cursor-pointer hover:text-gray-400/50 w-fit text-sm font-extralight'>
                                Mendaftar Menjadi Mitra
                            </div>
                            <div className='text-gray-400 cursor-pointer hover:text-gray-400/50 w-fit text-sm font-extralight'>
                                Tentang Kami
                            </div>
                            <div className='text-gray-400 cursor-pointer hover:text-gray-400/50 w-fit text-sm font-extralight'>
                                Blog
                            </div>
                        </div>
                    </div>
                    <div className='h-full md:w-1/4 bg-white flex justify-start'>
                        <div className='flex flex-col gap-[20px] w-fit'>
                            <h2 className='font-semibold text-gray-500'>
                                Hubungi Kami
                            </h2>
                            <div className='text-gray-400 cursor-pointer hover:text-gray-400/50 w-fit text-sm font-extralight'>
                                Plaza Sumarecon Bekasi
                            </div>
                            <div className='text-gray-400 cursor-pointer hover:text-gray-400/50 w-fit text-sm font-extralight'>
                                official.peluang@gmail.com
                            </div>
                            <div className='text-gray-400 cursor-pointer hover:text-gray-400/50 w-fit text-sm font-extralight'>
                                +62 851-7999-8975
                            </div>
                        </div>
                    </div>
                    <div className='h-full md:w-1/4 bg-white flex justify-start'>
                        <div className='flex flex-col gap-[20px] w-fit'>
                            <h2 className='font-semibold text-gray-500'>
                                Kolaborasi
                            </h2>
                            <div className='flex flex-row gap-4'>
                                <img src={icon1} alt="" />
                                <img src={icon2} alt="" />
                                <img src={icon3} alt="" />
                            </div>
                        </div>
                    </div>
                    {/* <div className='h-full md:w-1/4 bg-white flex flex-col gap-[20px]'>
                        <h2 className='font-semibold text-gray-500'>
                            Layanan Kami
                        </h2>
                        <div className='flex flex-row gap-4'>
                            <img src={icon4} alt="" />
                        </div>

                    </div> */}
                </div>
                <Separator className='my-[40px] h-[1px]' />
                <div className='w-full h-fit flex md:flex-row flex-col md:justify-between md:gap-0 gap-4 items-center'>
                    <div className='h-full w-fit flex flex-row gap-[50px]'>
                        <a
                            className='text-gray-400 cursor-pointer hover:text-gray-400/50 w-fit text-sm font-extralight'
                            href="#" >
                            Syarat dan ketentuan
                        </a>
                        <a
                            className='text-gray-400 cursor-pointer hover:text-gray-400/50 w-fit text-sm font-extralight'
                            href="#">
                            Kebijakan Privasi
                        </a>
                    </div>
                    <div className='flex flex-row md:justify-end justify-center gap-[30px]'>
                        <img className='w-[30px] h-[30px] cursor-pointer hover:-translate-y-1 transition-all' src={icon5} alt="" />
                        <img className='w-[30px] h-[30px] cursor-pointer hover:-translate-y-1 transition-all' src={icon6} alt="" />
                        <img className='w-[30px] h-[30px] cursor-pointer hover:-translate-y-1 transition-all' src={icon7} alt="" />
                    </div>
                </div>
                <Separator className='my-[40px] h-[1px]' />
                <div className='w-full h-fit flex md:flex-row flex-col items-center md:gap-[40px] gap-4 md:pb-0 pb-[40px] '>
                    <img className='w-[100px] h-[22px] my-auto' src={logo2} alt="" />
                    <p className='text-gray-400 w-fit text-[13.5px] font-extralight'>
                        Peluang.co adalah Platform Ekosistem untuk bisnis kemitraan dan waralaba di Indonesia. Peluang.co dioperasikan oleh PT Peluang Bersama Kita. Dukung kami untuk membantu
                        pemberdayaan UMKM dan menciptakan ekosistem bisnis waralaba di Indonesia.
                    </p>
                </div>

            </div>
        </footer>
    )
}

export default Footer