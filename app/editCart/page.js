"use client"
import { Store } from "@/redux/Store";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { BsFillArrowDownSquareFill } from "react-icons/bs";

const EditCartItems = () => {
    const { state, dispatch } = useContext(Store)
    const cart = state.cart
    
    const TotalMRP = cart?.cartItems?.reduce((a, c) => a + c.price * c.quantity, 0);
    const onDeleteCartItem = (id) => {
        const updatedCartItems = state.cart.cartItems.filter(item => item.id !== id);
        dispatch({ type: 'REMOVE_ITEM', payload: { cartItems: updatedCartItems } });
    };
    return (
        <div>
            <h1 className="text-center my-2 font-extrabold p-2 text-xl">Shopping Cart</h1>
            <div className="w-full p-5 inline-flex">
                <div className="w-[70%]">
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
                                <tr key={item.id}>
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
                                                        <BsFillArrowDownSquareFill />
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
                                    <td className="border border-slate-300 px-5">{item.price *item.quantity}</td>
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
                <div className="px-5 w-[30%]  right-0">
                        <h1 className="text-xl font-bold text-center">ORDER SUMMARY</h1>
                        <div className="inline-flex justify-between my-5" style={{width:" -webkit-fill-available"}}>
                            <p>Coupons</p>
                            <button className=" bg-gray-300 py-2 px-4 rounded hover:bg-gray-200">ADD COUPON</button>
                        </div>
                        <h1 className="text-xl font-bold">PRICE DETAILS</h1>
                        <div className="gap-5 inline-flex justify-between mt-5" style={{width:" -webkit-fill-available"}}>
                            <p>Total MRP</p>
                            <p className="py-2 px-1">Rs. {TotalMRP}</p>
                        </div>
                        <div className="gap-5 inline-flex justify-between " style={{width:" -webkit-fill-available"}}>
                            <p>Total Discount on MRP</p>
                            <p className="py-2 px-1">Rs. 0.00</p>
                        </div>
                        <div className="gap-5 inline-flex justify-between" style={{width:" -webkit-fill-available"}}>
                            <p>Discount Coupon</p>
                            <p className="py-2 px-1">Rs. 0.00</p>
                        </div>
                        <div className="gap-5 inline-flex justify-between" style={{width:" -webkit-fill-available"}}>
                            <p>Shipping Charge</p>
                            <p className="py-2 px-1">Rs. 0.00</p>
                        </div>
                        <div className="gap-5 inline-flex justify-between mb-5" style={{width:" -webkit-fill-available"}}>
                            <p>Order Total</p>
                            <p className="py-2 px-1">Rs. {TotalMRP}</p>
                        </div>
                        <button className="bg-gray-300 p-3 rounded w-[100%] hover:bg-gray-200">CHECKOUT</button>
                </div>
            </div>
        </div>
    )
}
export default EditCartItems;