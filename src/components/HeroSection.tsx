import SearchBar from "./SearchBar"
import SearchCategoryList from "./SearchCategoryList"


const HeroSection = () => {
  return (
    <section className='font-inter w-full flex flex-col gap-10 items-center justify-end p-4 md:h-[540px] h-[400px] pb-[50px] bg-gradient-to-b from-indigo-900 to-slate-100 mx-auto'>
      <div className="md:text-4xl text-base text-white md:pl-[150px]">
        <span className="font-normal">Mau Sukses? Buka Bisnis </span><span className="font-bold inline-flex flex-col h-[20px] md:h-[calc(theme(fontSize.4xl)*theme(lineHeight.tight))] overflow-hidden">
          <ul className="block animate-text-slide text-left leading-tight [&_li]:block">
            <li>Makanan</li>
            <li>Kebutuhan Harian</li>
            <li>Logistik</li>
            <li>Edukasi</li>
            <li>Kecantikan</li>
            <li>Otomotif</li>
            <li>Property</li>
            <li aria-hidden="true">Makanan</li>
          </ul>
        </span>
      </div>
      <SearchBar />
      <SearchCategoryList />
    </section>
  )
}

export default HeroSection