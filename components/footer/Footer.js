"use-client"
import Link from "next/link";
import Image from "next/image";
const Footer = () => {
    const link = [
        {
            id: 1,
            title: "Men",
            url: "/men"
        },
        {
            id: 2,
            title: "Women",
            url: "/women"
        },
        {
            id: 3,
            title: "Kids",
            url: "/kids"
        },
        {
            id: 4,
            title: "Brand",
            url: "/brand"
        },
    ]
    const linkCompany = [
        {
            id: 1,
            title: "About",
            url: "/about"
        },
        {
            id: 2,
            title: "Blog",
            url: "/blog"
        },
        {
            id: 3,
            title: "Careers",
            url: "/careers"
        },
        {
            id: 3,
            title: "Contact",
            url: "/contact"
        },
    ]
    return (
        <div className='grid grid-cols-4 sd:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 bottom-0 bg-slate-600  text-start text-black p-5 flex-wrap'>
            <div className="text-center">
                <p className="text-lg font-extrabold ">PAYMENT PARTNER</p>
                <div className=" grid grid-cols-4 sd:grid-cols-2 my-2 mx-[80px] gap-2">
                    <Image alt="footer" src="/phone pay.png" width={80} height={0} />
                    <Image alt="footer" src="/pytam.jpg" width={80} height={0} />
                    <Image alt="footer" src="/pytam.jpg" width={80} height={0} />
                    <Image alt="footer" src="/hdfc.png" width={80} height={0} />
                </div>
            </div>
            <div className="sd:text-center lg:text-start">
                <p className="text-lg font-extrabold">SHOP</p>
                <ul className="">
                    {link?.map((linkItem) => (
                        <Link className="hover:text-slate-100" href={linkItem.url} key={linkItem.id}>
                            {linkItem.title} <br />
                        </Link>
                    ))}
                </ul>
            </div>
            <div className="sd:text-center lg:text-start">
                <p className="text-lg font-extrabold uppercase">Company</p>
                <ul className="">
                    {linkCompany?.map((linkItem) => (
                        <Link className=" hover:text-slate-100" href={linkItem.url} key={linkItem.id}>
                            {linkItem.title} <br />
                        </Link>
                    ))}
                </ul>
            </div>
            <div className="sd:text-center lg:text-start">
                <p className="text-lg font-extrabold">FOLLOW US</p>
                <div className="inline-flex md:w-28 sm:w-28 gap-2  flex-wrap">
                    <Link href="/https://www.facebook.com/golu.mishra.716970"><Image alt="footer" src="/facebook.png" width={50} height={0} /></Link>
                    <Link href="/https://instagram.com/____s_s_m____?utm_source=qr&igshid=NGExMmI2YTkyZg%3D%3D"><Image alt="footer" src="/Instagram_logo.png" width={50} height={0} /></Link>
                    <Link href="/https://twitter.com/Mishra91352?t=EptfiHzci8zqmxb4zaVRfQ&s=09"><Image alt="footer" src="/twitter.png" width={50} height={0} /></Link>
                    <Link href="/www.youtube.com"><Image alt="footer" src="/youtube.png" width={50} height={0} /></Link>
                </div>
            </div>
        </div>
    )
}
export default Footer;