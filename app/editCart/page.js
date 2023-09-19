"use client"
import CartSizeModel from "@/components/Modals/CartSizeModel";
import { Store } from "@/redux/Store";
import Image from "next/image";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { BsFillArrowDownSquareFill } from "react-icons/bs";
const EditCartItems = () => {
    const { state, dispatch } = useContext(Store)
    const [isClient, setIsClient] = useState(false)
    const [showModal, setShowModal] = useState(false);
    const [cartData,setCartData] = useState('')
    const cart = state.cart
    const customClass = cart?.cartItems?.length > 1 ? "px-5 lg:w-[30%] right-0 lg:absolute lg:bottom-[37px] sd:grid sd:grid-cols-1 " : "sd:grid sd:grid-cols-1  lg:w-[30%]"
    const TotalMRP = cart?.cartItems?.reduce((a, c) => a + c.price * c.quantity, 0);
    const onDeleteCartItem = (id) => {
        const updatedCartItems = state.cart.cartItems.filter(item => item.id !== id);
        dispatch({ type: 'REMOVE_ITEM', payload: { cartItems: updatedCartItems } });
    };
    useEffect(() => {
        setIsClient(true)
    }, [])
    const onSizeHandler = (item) => {
        setShowModal(true)
        setCartData(item)
    }
    return (
        <div>
            <h1 className="text-center my-2 font-extrabold p-2 text-lg">Shopping Cart</h1>
            {isClient ? 
            <div className="sd:grid sd:grid-cols-1 p-5  lg:w-full  lg:inline-flex lg:relative ">
                <div className="sd:grid  lg:w-[70%]  sd:grid-cols-1 sd:overflow-scroll">
                    <table style={{ width: '-webkit-fill-available' }} className="table-auto border-collapse border border-slate-400">
                        <thead>
                            <tr>
                                <th className="border border-slate-300 p-2">Item</th>
                                <th className="border border-slate-300 p-2">Price</th>
                                <th className="border border-slate-300 p-2">Qty</th>
                                <th className="border border-slate-300 p-2">Discount</th>
                                <th className="border border-slate-300 p-2">Subtotal</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart?.cartItems?.map((item) => (
                                <tr key={item.id} className="sd:overflow-scroll">
                                    <td className="border border-slate-300 px-5">
                                        <div className="w-full inline-flex text-center flex-wrap">
                                            <div className="my-[10%] w-[30%]">
                                                <Image
                                                    src={item.images[1]}
                                                    alt={item.title}
                                                    style={{ marginLeft: "auto" }}
                                                    width={50}
                                                    height={50}
                                                />
                                            </div>
                                            <div className="w-[70%] px-5 mt-[10%]">
                                                <p>{item.title}</p>
                                                <p className="inline-flex gap-2">
                                                    Size: {item.selectedSize}
                                                    <span className="mt-1 cursor-pointer">
                                                        <button onClick={() => onSizeHandler(item)}>
                                                            <BsFillArrowDownSquareFill />
                                                        </button>
                                                    </span>
                                                </p>
                                                <br />
                                                <button
                                                    onClick={() => onDeleteCartItem(item.id)}
                                                    className="text-xs bg-gray-400 text-white my-2 border border-spacing-1 border-gray-300 p-1 px-2 rounded"
                                                >
                                                    Remove
                                                </button>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="border border-slate-300 px-5">{item.price}</td>
                                    <td className="border border-slate-300 px-5">{item.quantity}</td>
                                    <td className="border border-slate-300 px-5">0.00</td>
                                    <td className="border border-slate-300 px-5">{item.price * item.quantity}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className="text-end px-84 py-5">
                        <button
                            className=" hover:bg-slate-300 border border-spacing-1 border-black p-2 rounded"
                        >
                            <Link href="/men">Continue Shopping</Link>
                        </button>
                    </div>
                </div>
                <div className={customClass}>
                        <h1 className="text-lg  font-bold text-center mt-5">ORDER SUMMARY</h1>
                        <div className="sd:grid  sd:grid-cols-2  justify-between my-5" style={{width:" -webkit-fill-available"}}>
                            <p>Coupons</p>
                            <button className=" bg-gray-300 py-2 px-4 rounded hover:bg-gray-200">ADD COUPON</button>
                        </div>
                        <h1 className="text-lg font-bold">PRICE DETAILS</h1>
                        <div className="gap-5 sd:grid  sd:grid-cols-2  justify-between mt-5" style={{width:" -webkit-fill-available"}}>
                            <p>Total MRP</p>
                            <p className="py-2 px-1 text-end">Rs. {TotalMRP}</p>
                        </div>
                        <div className="gap-5 sd:grid sd:grid-cols-2  justify-between " style={{width:" -webkit-fill-available"}}>
                            <p>Total Discount on MRP</p>
                            <p className="py-2 px-1 text-end">Rs. 0.00</p>
                        </div>
                        <div className="gap-5 sd:grid  sd:grid-cols-2  justify-between" style={{width:" -webkit-fill-available"}}>
                            <p>Discount Coupon</p>
                            <p className="py-2 px-1 text-end">Rs. 0.00</p>
                        </div>
                        <div className="gap-5 sd:grid sd:grid-cols-2  justify-between" style={{width:" -webkit-fill-available"}}>
                            <p>Shipping Charge</p>
                            <p className="py-2 px-1 text-end">Rs. 0.00</p>
                        </div>
                        <div className="gap-5 sd:grid sd:grid-cols-2  justify-between mb-5" style={{ width: " -webkit-fill-available" }}>
                            <p>Order Total</p>
                            <p className="py-2 px-1 text-end">Rs. {TotalMRP}</p>
                        </div>
                        <div className="gap-5 sd:grid  sd:grid-cols-1  justify-between mb-5">
                            <button className="bg-gray-300 p-3 rounded hover:bg-gray-200">CHECKOUT</button>
                        </div>
                </div>
            </div> :
                <div role="status" className="mt-[10%] ml-[50%] mb-[10%]">
                    <svg aria-hidden="true" className="w-8 h-8 mr-2 text-gray-200 animate-spin-loading dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                    </svg>
                    <span className="sr-only">Loading...</span>
                </div>
            }
            <CartSizeModel showModal={showModal} setShowModal={setShowModal} cartData={cartData}/>
        </div>
    )
}
export default EditCartItems;