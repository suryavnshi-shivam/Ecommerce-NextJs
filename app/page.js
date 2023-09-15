import MyCarousel from "@/components/carousel/MyCarousel";
import Image from "next/image";
import Link from "next/link";

const Home = () => {
  return (
    <div className="lg:px-14 sd:px-5">
      <h1 className="text-center my-2 font-extrabold p-2 uppercase bg-slate-300">Trending Shoes</h1>
      <MyCarousel />
      <h1 className="text-center my-2 font-extrabold p-2 uppercase bg-slate-300">FEATURED STYLES</h1>
      <div className="grid grid-cols-4 sd:grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3">
        <div className="text-center">
          <Image  alt="Shoe Image" width={1500} height={0} style={{ height: "500px" }} src="/menshoes.png" />
          <button className="bg-black text-white p-2 rounded my-2">
            <Link href="/men">SHOP NOW</Link>
          </button>
        </div>
        <div className=" text-center">
          <Image  alt="Shoe Image" width={1500} height={0} style={{ height: "500px" }} src="/womenshoes.png" />
          <button className="bg-black text-white p-2 rounded my-2">
            <Link href="/women">SHOP NOW</Link>
          </button>
        </div>
        <div className="text-center">
          <Image  alt="Shoe Image" width={1500} height={0} style={{ height: "500px" }} src="/kid.png" />
          <button className="bg-black text-white p-2 rounded my-2">
            <Link href="/kids">SHOP NOW</Link>
          </button>
        </div>
      </div>
      <h1 className="text-center my-2 font-extrabold p-2 bg-slate-300">BEST BRAND</h1>
      <div className="grid grid-cols-4 sd:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <div x>
          <Image  alt="Shoe Image" src='/nike.png' width={1500} height={0} style={{ height: "200px" }}></Image>
        </div>
        <div >
          <Image  alt="Shoe Image" src='/woodland.png' width={1500} height={0} style={{ height: "200px" }}></Image>
        </div>
        <div >
          <Image  alt="Shoe Image" src='/reebok.png' width={1500} height={0} style={{ height: "200px" }}></Image>
        </div>
        <div >
          <Image  alt="Shoe Image" src='/adidas.png' width={1500} height={0} style={{ height: "200px" }}></Image>
        </div>
        <div >
          <Image  alt="Shoe Image" src='/spark.png' width={1500} height={0} style={{ height: "200px" }}></Image>
        </div>
        <div >
          <Image  alt="Shoe Image" src='/PUMA-logo.png' width={1500} height={0} style={{ height: "200px" }}></Image>
        </div>
        <div >
          <Image  alt="Shoe Image" src='/womenbrand.png' width={1500} height={0} style={{ height: "200px" }}></Image>
        </div>
        <div >
          <Image  alt="Shoe Image" src='/Skechers.png' width={1500} height={0} style={{ height: "200px" }}></Image>
        </div>
      </div>
      <h1 className="text-center my-2 font-extrabold p-2 bg-slate-300">OVERVIEW</h1>
      <div className="grid grid-cols-4 overflow-hidden sd:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3  bg-black gap-20 p-2 my-2">
        <div className="animate-spin">
          <Image  alt="Shoe Image" className="rounded-full" width={500} height={0} style={{ height: "300px" }} src="/store.png" />
        </div>
        <div className="animate-spin">
          <Image  alt="Shoe Image" className="rounded-full" width={1500} height={0} style={{ height: "300px" }} src="/store2.png" />
        </div>
        <div className="animate-spin">
          <Image  alt="Shoe Image" className="rounded-full" width={1500} height={0} style={{ height: "300px" }} src="/store3.png" />
        </div>
      </div>
    </div>
  )
}
export default Home;
