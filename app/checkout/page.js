"use client"
import CouponModel from "@/components/Modals/CouponModel"
import SeparateForm from "@/components/SeparateForm"
import { Store } from "@/redux/Store"
import axios from "axios"
import Image from "next/image"
import Link from "next/link"
import { useContext, useEffect, useState } from "react"
import { Controller, useForm } from "react-hook-form"

const Checkout = () => {
    const { state, dispatch } = useContext(Store)
    const cart = state.cart
    const { control, handleSubmit, formState: { errors } } = useForm();
    const [isClient, setIsClient] = useState(false)
    const [toggleGuest,setToggleGuest] = useState(true)
    const [pincode,setPincode] = useState()
    const [location, setLocation] = useState(null);
    const [showModal,setShowModal] = useState(false)
    const TotalMRP = cart?.cartItems?.reduce((a, c) => a + c.price * c.quantity, 0);
    const onGuestHandler = () => {
        setToggleGuest(!toggleGuest)
    }
    useEffect(() => {
        setIsClient(true)
        if (pincode?.length >= 6) {
            getPincodeValue(pincode)
        }
    }, [pincode])

    const getPincodeValue = (pincode) => {
        const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
        const apiUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${pincode}&key=${apiKey}`;
        console.log("API Key:", apiKey);
        console.log("API URL:", apiUrl);
        axios
            .get(apiUrl)
            .then((response) => {
                const results = response.data.results;
                if (results.length > 0) {
                    const locationData = results[0].geometry.location;
                    setLocation(locationData);
                } else {
                    setLocation(null);
                }
            })
            .catch((error) => {
                console.error('An error occurred:', error);
                setLocation(null);
            });
    }
    console.log(location)
    
    const onAddQty = (el) => {
        const item = state.cart.cartItems.find(item => item.id === el.id && item._id === el._id);
        if (!item) {
            return;
        }
        const sameIdItems = state.cart.cartItems.filter(cartItem => cartItem._id === el._id);
        const totalQuantity = sameIdItems.reduce((acc, cartItem) => acc + cartItem.quantity, 0);
        if (totalQuantity >= item.stock) {
            alert(`Sorry, the product ${item.stock} is out of stock.`);
            return;
        }
        const updatedCartItems = state.cart.cartItems.map(cartItem => {
            if (cartItem.id === el.id && cartItem._id === el._id) {
                const newQuantity = cartItem.quantity + 1;
                return { ...cartItem, quantity: newQuantity };
            }
            return cartItem;
        });
        dispatch({ type: 'INCREMENT_QTY', payload: { cartItems: updatedCartItems } });
    };

    const onSubQty = (el) => {
        const item = state.cart.cartItems.find(item => item.id === el.id && item._id === el._id);
        if (!item) {
            return;
        }
        const updatedCartItems = state.cart.cartItems.map(cartItem => {
            if (cartItem.id === el.id && cartItem._id === el._id) {
                const newQuantity = cartItem.quantity - 1;
                return { ...cartItem, quantity: Math.max(newQuantity, 1) };
            }
            return cartItem;
        });
        dispatch({ type: 'DECREMENT_QTY', payload: { cartItems: updatedCartItems } });
    };

    const onDeleteCartItem = (id) => {
        const updatedCartItems = state.cart.cartItems.filter(item => item.id !== id);
        dispatch({ type: 'REMOVE_ITEM', payload: { cartItems: updatedCartItems } });
    };
    const onSubmit = (data) => {
        console.log(data);
      };
    return (
        <div>
            <div className="grid grid-cols-2 text-center my-2 font-extrabold p-2 text-lg bg-slate-300">
                <h1>SHIPPING </h1>
                <h1>REVIEW & PAYMENTS</h1>
            </div>
            {isClient && <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1  p-5 sd:grid-cols-1">
                {toggleGuest === true ? <div className=" text-start p-5">
                    <h1 className="text-xl font-bold my-1">LOGIN</h1>
                    <p className="my-1">Logged in customers get to avail <span className=" text-red-500">loyalty discounts!</span></p>
                    <SeparateForm />
                    <div>
                        <h1 className="text-lg font-bold my-1">IN A HURRY ?</h1>
                        <div className="text-center p-2 hover:bg-slate-300 border rounded border-spacing-1 border-slate-400">
                            <button onClick={onGuestHandler}>CHECKOUT AS GUEST</button>
                        </div>
                    </div>
                </div> :
                    <div className="text-center px-32">
                        <form onSubmit={handleSubmit(onSubmit)} className="text-center ">
                            <div className="my-2">
                                <Controller
                                    name="mobileNumber"
                                    control={control}
                                    rules={{
                                        required: 'Mobile Number is required*',
                                        pattern: {
                                            value: /^[0-9]{10,}$/,
                                            message: 'Invalid Mobile Number (at least 10 digits, numbers only)',
                                        },
                                    }}
                                    render={({ field: { onChange, value } }) => (
                                        <input
                                            className="p-2 w-[-webkit-fill-available] border border-spacing-1 border-slate-500 rounded"
                                            placeholder="Enter Mobile Number*"
                                            value={value}
                                            onChange={(e) => {
                                                const numericValue = e.target.value.replace(/[^0-9+]/g, '');
                                                onChange(numericValue);
                                            }}
                                        />
                                    )}
                                />
                            </div>
                            {errors.email && <span className="text-red-600">{errors?.mobileNumber?.message}</span>}
                            <div className="my-2">
                                <Controller
                                    name="email"
                                    control={control}
                                    rules={{
                                        required: 'Email is required',
                                        pattern: {
                                            value: /^\S+@\S+$/i,
                                            message: 'Invalid email address',
                                        },
                                    }}
                                    render={({ field: { onChange, value } }) => (
                                        <input
                                            className="p-2 w-[-webkit-fill-available] border border-spacing-1 border-slate-500 rounded"
                                            placeholder="Email*"
                                            value={value}
                                            onChange={(e) => onChange(e.target.value)}
                                        />
                                    )}
                                />
                            </div>
                            {errors.email && <span className="text-red-600">{errors?.email?.message}</span>}
                            <div className="my-2">
                                <Controller
                                    name="fullName"
                                    control={control}
                                    rules={{ required: 'Full Name is required*' }}
                                    render={({ field: { onChange, value } }) => (
                                        <div>
                                            <input
                                                className="p-2 w-[-webkit-fill-available] border border-spacing-1 border-slate-500 rounded"
                                                placeholder="Full Name*"
                                                value={value}
                                                onChange={(e) => onChange(e.target.value)}
                                            />
                                        </div>
                                    )}
                                />
                                {errors.fullName && (
                                    <span className=" text-red-600 px-3">{errors?.fullName?.message}</span>
                                )}
                            </div>

                            <div className="my-2">
                                <Controller
                                    name="flatBuildingNo"
                                    control={control}
                                    rules={{ required: 'Flat Building No is required*' }}
                                    render={({ field: { onChange, value } }) => (
                                        <div>
                                            <input
                                                className="p-2 w-[-webkit-fill-available] border border-spacing-1 border-slate-500 rounded"
                                                placeholder="Flat Building No*"
                                                value={value}
                                                onChange={(e) => onChange(e.target.value)}
                                            />
                                        </div>
                                    )}
                                />
                            </div>
                            {errors.fullName && (
                                    <span className=" text-red-600 px-3">{errors?.flatBuildingNo?.message}</span>
                                )}
                            <div className="my-2">
                                <Controller
                                    name="streetAddress"
                                    control={control}
                                    rules={{ required: 'Street Address is required*' }}
                                    render={({ field: { onChange, value } }) => (
                                        <div>
                                            <input
                                                className="p-2 w-[-webkit-fill-available] border border-spacing-1 border-slate-500 rounded"
                                                placeholder="Street Address*"
                                                value={value}
                                                onChange={(e) => onChange(e.target.value)}
                                            />
                                        </div>
                                    )}
                                />
                                {errors.streetAddress && (
                                    <span className=" text-red-600 px-3">{errors?.streetAddress?.message}</span>
                                )}
                            </div>
                            <div className="my-2">
                                <Controller
                                    name="landmark"
                                    control={control}
                                    rules={{ required: 'Landmark is required*' }}
                                    render={({ field: { onChange, value } }) => (
                                        <div>
                                            <input
                                                className="p-2 w-[-webkit-fill-available] border border-spacing-1 border-slate-500 rounded"
                                                placeholder="Landmark"
                                                value={value}
                                                onChange={(e) => onChange(e.target.value)}
                                            />
                                        </div>
                                    )}
                                />
                            </div>
                            {errors.streetAddress && (
                                    <span className=" text-red-600 px-3">{errors?.landmark?.message}</span>
                                )}
                            <div className="my-2">
                                <Controller
                                    name="pinCode"
                                    control={control}
                                    rules={{ required: 'PIN Code is required*', pattern: /^[0-9]{6}$/ }}
                                    render={({ field: { onChange, value } }) => (
                                        <div>
                                            <input
                                                className="p-2 w-[-webkit-fill-available] border border-spacing-1 border-slate-500 rounded"
                                                placeholder="PIN Code*"
                                                value={value}
                                                onChange={(e) => {
                                                    onChange(e.target.value);
                                                    setPincode(e.target.value);
                                                  }}
                                            />
                                        </div>
                                    )}
                                />
                                {errors.pinCode && (
                                    <span className=" text-red-600 px-3">{errors?.pinCode?.message}</span>
                                )}
                            </div>
                            <div className="my-2">
                                <Controller
                                    name="selectOption1"
                                    control={control}
                                    rules={{ required: true }}
                                    render={({ field: { onChange, value } }) => (
                                        <select
                                            className="p-2 w-[-webkit-fill-available] border border-spacing-1 border-slate-500 rounded"
                                            value={value}
                                            onChange={(e) => onChange(e.target.value)}
                                        >
                                            <option value="" disabled selected>
                                                Please Select Area
                                            </option>
                                            <option value="1">Option 1</option>
                                            <option value="2">Option 2</option>
                                            <option value="3">Option 3</option>
                                        </select>
                                    )}
                                />
                            </div>
                            <div className="my-2">
                                <Controller
                                    name="selectOption2"
                                    control={control}
                                    rules={{ required: true }}
                                    render={({ field: { onChange, value } }) => (
                                        <select
                                        className="p-2 w-[-webkit-fill-available] border border-spacing-1 border-slate-500 rounded"
                                        value={value}
                                        onChange={(e) => onChange(e.target.value)}
                                    >
                                        <option value="" disabled selected>
                                            Please Select City
                                        </option>
                                        <option value="1">Option 1</option>
                                        <option value="2">Option 2</option>
                                        <option value="3">Option 3</option>
                                    </select>
                                    )}
                                />
                            </div>
                            <div className="my-2">
                                <Controller
                                    name="state"
                                    control={control}
                                    rules={{ required: true }}
                                    render={({ field: { onChange, value } }) => (
                                        <input
                                            className="p-2 w-[-webkit-fill-available] border border-spacing-1 border-slate-500 rounded"
                                            placeholder="State"
                                            value={value}
                                            onChange={(e) => onChange(e.target.value)}
                                        />
                                    )}
                                />
                            </div>
                            <div className="text-start">
                                <p>Select Address Type</p>
                                <div className="gap-2 grid grid-cols-2 p-2">
                                    <div>
                                        <Controller
                                            name="addressType"
                                            control={control}
                                            rules={{ required: 'Address Type is required*' }}
                                            render={({ field: { onChange, value } }) => (
                                                <>
                                                    <input
                                                        type="radio"
                                                        id="home"
                                                        name="location"
                                                        value="Home"
                                                        checked={value === 'Home'}
                                                        onChange={(e) => onChange(e.target.value)}
                                                    />
                                                    <label htmlFor="home" className="pl-1">Home</label>
                                                </>
                                            )}
                                        />
                                    </div>
                                    <div>
                                        <Controller
                                            name="addressType"
                                            control={control}
                                            rules={{ required: 'Address Type is required*' }}
                                            render={({ field: { onChange, value } }) => (
                                                <>
                                                    <input
                                                        type="radio"
                                                        id="office"
                                                        name="location"
                                                        value="Office"
                                                        checked={value === 'Office'}
                                                        onChange={(e) => onChange(e.target.value)}
                                                    />
                                                    <label htmlFor="office" className="pl-1">Office</label>
                                                </>
                                            )}
                                        />
                                    </div>
                                </div>
                                {errors.addressType && (
                                    <span className="text-red-600 px-3">{errors.addressType.message}</span>
                                )}
                            </div>
                            <div className="text-start p-2 inline-flex gap-2">
                                <input type="checkbox" className="" />
                                <p className="text-xs">
                                    I consent to receive promotional SMS, emails, and other communications
                                </p>
                            </div>
                            <div className="p-2 inline-flex gap-2 w-[-webkit-fill-available]">
                                <div>
                                    <button onClick={onGuestHandler} className="border border-spacing-1 hover:bg-slate-400 border-slate-300 p-2 rounded">
                                        BACK
                                    </button>
                                </div>
                                <div>
                                    <button type="submit" className="border border-spacing-1 hover:bg-slate-400 border-slate-300 p-2 rounded">
                                        CONTINUE
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                }
                <div className="p-5">
                    <div className="grid grid-cols-2 my-1">
                        <h1 className="text-xl font-semibold">Order Summary</h1>
                        <button className=" bg-slate-300 rounded p-2 ">
                            <Link href='/editCart'>Edit Cart</Link>
                        </button>
                    </div>
                    <div className="grid grid-cols-2 my-1">
                        <h1 className="text-md ">APPLY COUPONS</h1>
                        <button 
                        onClick={() => setShowModal(true)}
                        className="border hover:bg-slate-300 border-spacing-1 border-black rounded p-2 text-sm ">
                            APPLY
                        </button>
                    </div>
                    <CouponModel showModal={showModal} setShowModal={setShowModal} />
                    <div className="grid grid-cols-2 my-2">
                        <h1 className=" text-2xl font-semibold">Price Details</h1>
                        <div className="h-[210px] overflow-scroll">
                            {cart?.cartItems?.map((el) => (
                                <div key={el.id} className="lg:w-[18rem] sd:w-[15rem] inline-flex gap-5 p-1 border-b-2  justify-start">
                                    <div className="w-[80px]">
                                        <Image alt="model" src={el.thumbnail} style={{ height: "100px" }} width={100} height={100} />
                                    </div>
                                    <div className="text-gray-600  ">
                                        <ul>
                                            <li className="text-xs">{el.title}</li>
                                            <li className="text-xs">PRICE: {el.price}</li>
                                            <li className="text-xs">SIZE : {el.selectedSize}</li>
                                            <li className="text-xs">QTY : {el.quantity}
                                                <button className="ml-2 px-2 bg-gray-300 rounded text-lg" onClick={() => onSubQty(el)}>-</button>
                                                <button className="ml-2 px-2 bg-gray-300 rounded text-lg" onClick={() => onAddQty(el)}>+</button>
                                            </li>
                                            <li className="text-xs">COLOR : {el.selectedColor}</li>
                                        </ul>
                                        <button
                                            onClick={() => onDeleteCartItem(el?.id)}
                                            className=" text-xs bg-gray-400 text-white my-2 border border-spacing-1 border-gray-300 p-1 px-2 rounded"
                                        >
                                            Remove
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="grid grid-cols-2">
                        <p>Total MRP</p>
                        <p className="text-end">Rs. {TotalMRP}.00</p>
                    </div>
                    <div className="grid grid-cols-2">
                        <p>Total Discount on MRP</p>
                        <p className="text-end">- Rs. 0.00</p>
                    </div>
                    <div className="grid grid-cols-2">
                        <p>Discount Coupon</p>
                        <p className="text-end">- Rs. 0.00</p>
                    </div>
                    <div className="grid grid-cols-2">
                        <p>Shipping Charge</p>
                        <p className="text-end">- Rs. 0.00</p>
                    </div>
                    <div className="grid grid-cols-2">
                        <p>Subtotal</p>
                        <p className="text-end">Rs. {TotalMRP}.00</p>
                    </div>
                </div>
            </div>}
        </div>
    )
}
export default Checkout