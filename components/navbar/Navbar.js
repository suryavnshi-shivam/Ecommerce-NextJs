"use client"
import Link from "next/link"
import { FaUser } from 'react-icons/fa';
import { BsCartFill } from 'react-icons/bs';
import { useContext, useEffect, useState } from "react";
import styles from './navbar.module.css'
import { useRouter } from "next/navigation";
import CartModal from "../Modals/CartModal";
import { Store } from "@/redux/Store";

const Navbar = () => {
    const router = useRouter()
    const { state, dispatch } = useContext(Store)
    const cart = state.cart
    const [isClient, setIsClient] = useState(false)

    const [showTooltip, setShowTooltip] = useState(false);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        setIsClient(true)
    }, [])
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
    const onUserClick = () => {
        setShowTooltip(!showTooltip);
    }
    const onLogout = () => {
        router.push('/login')
        setShowTooltip(!showTooltip);
    }
    return (
        <div className='grid grid-cols-3 sd:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 p-5 bg-slate-600 text-white font-semibold'>
            <div className='animate-bounce'>
                <Link href="/" className=" bg-orange-400 sd:bg-transparent sd:font-extrabold rounded-lg p-1 sd:p-0 hover:text-black">SHOES ADDA</Link>
            </div>
            <div className='inline-flex  flex-wrap'>
                {link?.map((linkItem) => (
                    <Link href={linkItem.url} key={linkItem.id} className='mr-3 uppercase hover:text-black'>
                        {linkItem.title}
                    </Link>
                ))}
            </div>
            <div className="inline-flex gap-2 lg:pl-[80%] mt-1 flex-wrap ">
                <div className={styles.tooltip_container}>
                    <FaUser onClick={onUserClick} className=" cursor-pointer" />
                    {showTooltip && (
                        <ul className={styles.tooltip}>
                            <li className="text-xs">SURYAVNSHI SHIVAM</li>
                            <button onClick={onLogout} className="text-xs px-5 bg-gray-300 p-1 rounded">Logout</button>
                        </ul>
                    )}
                </div>
                <div className="grid grid-cols-2">
                    <button onClick={() => setShowModal(true)} >
                        <div>
                            <BsCartFill />
                        </div>
                        {isClient ? <div className="w-full text-center">
                            {cart?.cartItems?.length > 0 && (
                                <span className="w-8 absolute sd:top-[67px] sd:right-[289px] lg:top-[10px] lg:right-[40px] rounded-full py-[2px] text-xs font-bold border border-spacing-1">
                                    {cart?.cartItems?.reduce((a, c) => a + c.quantity, 0)}
                                </span>
                            )}
                        </div> : null}
                    </button>
                    <CartModal showModal={showModal} setShowModal={setShowModal} />
                </div>
            </div>
        </div>
    )
}

export default Navbar