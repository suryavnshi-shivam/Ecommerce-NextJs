'use client'
import { getProductDetailsById } from "@/api/ProductApi/ProductAPI";
import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import { BiSolidShareAlt } from 'react-icons/bi';
import { BsCurrencyRupee } from 'react-icons/bs';
import { GrRotateRight } from 'react-icons/gr';
import { LuRotateCcw } from 'react-icons/lu';
import { FaShuttleVan } from 'react-icons/fa';
import { MdVerified } from 'react-icons/md';
import { GrAdd, GrFormSubtract } from 'react-icons/gr';
import ImageGallery from "react-image-gallery";
import 'react-image-gallery/styles/css/image-gallery.css';
import { Store } from "@/redux/Store";
import { v4 as uuidv4 } from 'uuid';
import ProductDetailsMetaTag from "@/components/ProductDetailsMetaTag";
const menProductDetails = ({ params }) => {
    const { state, dispatch } = useContext(Store)
    localStorage.setItem("CartItems", JSON.stringify(state.cart.cartItems));
    const [product, setProduct] = useState();
    const [pincode, setPincode] = useState();
    const [selectedSize, setSelectedSize] = useState('5');
    const [selectedColor, setSelectedColor] = useState('Gray');
    const [ReturnShipping, setReturnShipping] = useState(false)
    const [OtherDetails, setOtherDetails] = useState(false)
    const [consumerComplaint, setConsumerComplaint] = useState(false)
    const [careInstruction, setCareInstruction] = useState(false)
    const [imagese, setImagese] = useState([])
    // console.log(selectedColor)

    useEffect(() => {

        if (params.id) {
            getProductDataById(params.id);
        }
    }, [params.id])
    const handleSizeSelection = (size) => {
        setSelectedSize(size);
    };
    const handleColorSelection = (color) => {
        setSelectedColor(color);
    };
    // console.log(selectedSize)
    const getProductDataById = (productId) => {
        getProductDetailsById(productId).then(res => {
            // console.log(res.data)
            setProduct(res.data)
            setImagese(pre => {
                return res.data.images.map(item => ({
                    original: item,
                    thumbnail: item,
                }))
            })
        }).catch(err => {
            console.log(err)
        })
    }
    const onPinCodeInput = (e) => {
        setPincode(e.target.value)
    }
    const addToCart = () => {
        const newItem = { ...product, quantity: 1, selectedSize, selectedColor };
        const uniqueId = `${selectedSize}-${selectedColor}`;
        const newItemWithId = { ...newItem, id: uuidv4() + uniqueId };

        const existingItems = state.cart.cartItems.filter(
            (item) =>
                item._id === newItem._id
        );

        const totalQuantity = existingItems.reduce(
            (acc, cartItem) => acc + cartItem.quantity,
            newItem.quantity
        );

        if (totalQuantity > newItem.stock) {
            alert("Sorry, the product is out of stock");
            return;
        }

        const existingItemIndex = state.cart.cartItems.findIndex(
            (item) =>
                item._id === newItem._id &&
                item.selectedSize === selectedSize &&
                item.selectedColor === selectedColor
        );

        if (existingItemIndex !== -1) {
            const updatedCartItems = [...state.cart.cartItems];
            const existingItem = updatedCartItems[existingItemIndex];
            existingItem.quantity += newItem.quantity;

            dispatch({
                type: 'CART_ADD_ITEM',
                payload: { ...state, cart: { ...state.cart, cartItems: updatedCartItems } },
            });
        } else {
            dispatch({
                type: 'CART_ADD_ITEM',
                payload: { ...state, cart: { ...state.cart, cartItems: [...state.cart.cartItems, newItemWithId] } },
            });
        }
    };

    return (
        <div>
            <ProductDetailsMetaTag product={product} />
            <div className="grid grid-cols-2 xl:grid-cols-2 sd:grid-cols-1 md:grid-cols-1 sm:grid-cols-1">
                <div className="grid grid-cols-1 xl:grid-cols-1 sd:grid-cols-1 md:grid-cols-2 sm:grid-cols-1 p-5" style={{ height: 'fit-content' }}>
                    <ImageGallery
                        items={imagese}
                        showFullscreenButton={true}
                        showPlayButton={false}
                        autoPlay={true}
                        showIndex={false}
                        showBullets={true}
                        showNav={false}
                        style={{ width: "664px" }}
                    />
                </div>
                <div className="p-5 capitalize">
                    <p className="p-3 font-bold">{product?.brand}</p>
                    <p className="p-3 font-[500px] font-['lato-regular'] ">{product?.category}</p>
                    <div className="grid grid-cols-2">
                        <div>
                            <p className="p-3 font-semibold">Price: {product?.price}.00</p>
                        </div>
                        <div style={{ textAlign: "-webkit-right" }}>
                            <p className="p-3 font-semibold"><BiSolidShareAlt /></p>
                        </div>
                    </div>
                    <p className="px-3 text-xs">Inclusive of all taxes</p>
                    <p className="p-3 font-semibold">Stock: {product?.stock}</p>
                    <h1 className="p-3  font-extrabold">AVAILABLE COLORS</h1>
                    <div className="p-3">
                        <ul className="inline-flex flex-wrap  gap-2">
                            <div className={`rounded-full p-3 border border-spacing-1 bg-white ${selectedColor === "Black" ? 'border-orange-500' : ''}`}>
                                <li
                                    onClick={() => handleColorSelection("Black")}
                                    className={` bg-black cursor-pointer p-2  rounded-full border border-spacing-5 border-black `}
                                >
                                </li>
                            </div>
                            <div className={`rounded-full p-3 border border-spacing-1 bg-white ${selectedColor === "Brown" ? 'border-orange-500' : ''}`}>
                                <li
                                    onClick={() => handleColorSelection("Brown")}
                                    className={`cursor-pointer p-2  rounded-full border border-spacing-5 border-black bg-[#964B00]  `}
                                >
                                </li>
                            </div>
                            <div className={`rounded-full p-3 border border-spacing-1 ${selectedColor === "Gray" ? ' border-orange-500' : ''}`}>
                                <li
                                    onClick={() => handleColorSelection("Gray")}
                                    className={`cursor-pointer p-2  rounded-full border border-spacing-5 border-black bg-gray-500 `}
                                >
                                </li>
                            </div>
                            <div className={`rounded-full p-3 border border-spacing-1 bg-white ${selectedColor === "Blue" ? 'border-orange-500' : ''}`}>
                                <li
                                    onClick={() => handleColorSelection("Blue")}
                                    className={` cursor-pointer p-2  rounded-full border border-spacing-5 border-black bg-blue-500  `}
                                >
                                </li>
                            </div>
                            <div className={`rounded-full p-3 border border-spacing-1 bg-white ${selectedColor === "Tan" ? 'border-orange-500' : ''}`}>
                                <li
                                    onClick={() => handleColorSelection("Tan")}
                                    className={` cursor-pointer p-2  rounded-full border border-spacing-5 border-black bg-[#D2B48C] `}
                                >
                                </li>
                            </div>
                        </ul>
                    </div>
                    <h1 className="p-3  font-extrabold">SELECT SIZE (UK/BHARAT/USA) </h1>
                    <div className="p-3">
                        <ul className="inline-flex flex-wrap gap-2 text-center">
                            <li
                                onClick={() => handleSizeSelection("2")}
                                className={` cursor-pointer px-4 py-2 rounded-full border border-spacing-5 border-black hover:border-orange-500 ${selectedSize === "2" ? 'border-orange-500' : ''}`}
                            >
                                2
                            </li>
                            <li
                                onClick={() => handleSizeSelection("3")}
                                className={`cursor-pointer px-4 py-2 rounded-full border border-spacing-5 border-black hover:border-orange-500 ${selectedSize === "3" ? 'border-orange-500' : ''}`}
                            >
                                3
                            </li>
                            <li
                                onClick={() => handleSizeSelection("4")}
                                className={`cursor-pointer px-4 py-2 rounded-full border border-spacing-5 border-black hover:border-orange-500 ${selectedSize === "4" ? 'border-orange-500' : ''}`}
                            >
                                4
                            </li>
                            <li
                                onClick={() => handleSizeSelection("5")}
                                className={`cursor-pointer px-4 py-2 rounded-full border border-spacing-5 border-black hover:border-orange-500 ${selectedSize === "5" ? 'border-orange-500' : ''}`}
                            >
                                5
                            </li>
                            <li
                                onClick={() => handleSizeSelection("6")}
                                className={`cursor-pointer px-4 py-2 rounded-full border border-spacing-5 border-black hover:border-orange-500 ${selectedSize === "6" ? 'border-orange-500' : ''}`}
                            >
                                6
                            </li>
                            <li
                                onClick={() => handleSizeSelection("7")}
                                className={`cursor-pointer px-4 py-2 rounded-full border border-spacing-5 border-black hover:border-orange-500 ${selectedSize === "7" ? 'border-orange-500' : ''}`}
                            >
                                7
                            </li>
                        </ul>
                    </div>
                    <div className="p-3 grid grid-cols-2 lg:grid-cols-2 text-center gap-2">
                        <div>
                            <button
                                className="uppercase border border-spacing-1  border-slate-400 px-5 py-3 rounded-3xl"
                                onClick={addToCart}>
                                Add To Cart
                            </button>
                        </div>
                        <div>
                            <button className="uppercase font-semibold border border-spacing-1  border-slate-400 px-5 py-3 rounded-3xl bg-orange-500 text-white">Buy Now</button>
                        </div>
                    </div>
                    <h1 className="p-3  font-extrabold">DELIVERY OPTIONS</h1>
                    <div className="p-3 ">
                        <input
                            className='w-64 p-3 bg-slate-200 border rounded border-spacing-1 border-black'
                            type="text"
                            placeholder="CHECK PINCODE"
                            onChange={(e) => onPinCodeInput(e)}
                            value={pincode}
                        />
                        {pincode?.length >= 6 &&
                            <div className="p-3 grid grid-cols-1">
                                <div className="p-1 inline-flex gap-2">
                                    <BsCurrencyRupee className="mt-1" />
                                    <p>COD available</p>
                                </div>
                                <div className="p-1 inline-flex gap-2">
                                    <LuRotateCcw className="mt-1" />
                                    <p>Ships in 2-3 days</p>
                                </div>
                                <div className="p-1 inline-flex gap-2">
                                    <MdVerified className="mt-1" />
                                    <p>100% Originals</p>
                                </div>
                                <div className="p-1 inline-flex gap-2">
                                    <FaShuttleVan className="mt-1" />
                                    <p>Free shipping on order above Rs. 600</p>
                                </div>
                                <div className="p-1 inline-flex gap-2">
                                    <GrRotateRight className="mt-1" />
                                    <p>15 days free returns</p>
                                </div>
                                <div className="p-1 inline-flex gap-2">
                                    <GrRotateRight className="mt-1" />
                                    <p>Easy 15 days returns and exchanges</p>
                                </div>
                            </div>
                        }
                    </div>
                    <div>
                        <h1 className="p-3  font-extrabold">Product Details</h1>
                        <p className="px-3">{product?.description}</p>
                    </div>
                    <div className="p-3 grid grid-cols-2 my-2 gap-2">
                        <div>
                            <p className=" font-semibold">Type</p>
                            <p>Moccasin</p>
                        </div>
                        <div>
                            <p className=" font-semibold">Upper Material</p>
                            <p>Leather</p>
                        </div>
                        <div>
                            <p className=" font-semibold">Occasion</p>
                            <p>Formal</p>
                        </div>
                        <div>
                            <p className=" font-semibold">Category</p>
                            <p>Men</p>
                        </div>
                        <div>
                            <p className=" font-semibold">Colour</p>
                            <p>Black</p>
                        </div>
                        <div>
                            <p className=" font-semibold">Brand</p>
                            <p>{product?.brand}</p>
                        </div>
                        <div>
                            <p className=" font-semibold">Country of Origin</p>
                            <p>India</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-2 xl:grid-cols-2 sd:grid-cols-1 md:grid-cols-1 sm:grid-cols-1 my-5  xl:px-10">
                <div></div>
                <div className="p-5">
                    <h1 className="p-3  font-extrabold">FAQ</h1>
                    <div className="grid grid-cols-2 p-3 border-y-2">
                        <div>
                            <h1>Care Instruction</h1>
                        </div>
                        <div style={{ textAlign: '-webkit-right' }}>
                            {!careInstruction ?
                                <GrAdd className="cursor-pointer"
                                    onClick={() => setCareInstruction(!careInstruction)} />
                                :
                                <GrFormSubtract className="cursor-pointer"
                                    onClick={() => setCareInstruction(!careInstruction)} />
                            }
                        </div>
                    </div>
                    {careInstruction &&
                        <div className="p-5 text-justify">
                            Keep your product dry avoid getting it wet or damp. to clean it,
                            simply wipe with a dry cloth. keep fasteners and zip running smoothly
                            by running pencil leads over the open teeth.
                        </div>
                    }
                    <div className="grid grid-cols-2 p-3 border-y-2">
                        <div>
                            <h1>Return and shipping policy</h1>
                        </div>
                        <div style={{ textAlign: '-webkit-right' }}>
                            {!ReturnShipping ?
                                <GrAdd className="cursor-pointer"
                                    onClick={() => setReturnShipping(!ReturnShipping)} />
                                :
                                <GrFormSubtract className="cursor-pointer"
                                    onClick={() => setReturnShipping(!ReturnShipping)} />
                            }
                        </div>
                    </div>
                    {ReturnShipping &&
                        <div className="p-5 text-justify">
                            The return/replacement/refund policy is customer friendly so that you will
                            feel more comfortable in making online buying decision. Only unused merchandise
                            will be eligible for return within 15 days from the date of delivery. No return/
                            refund/replacement on SALE products. You can return the merchandise via courier
                            by raising the return request through the website My Account section by providing
                            a valid reason. Please return to us the unused merchandise in original packing
                            (Same box in which the merchandise was sent to you) for inspection. Replacement,
                            if available will be couriered to you or a refund will be available for
                            unhampered products.
                        </div>
                    }
                    <div className="grid grid-cols-2 p-3 border-y-2">
                        <div>
                            <h1>Other Details</h1>
                        </div>
                        <div style={{ textAlign: '-webkit-right' }}>
                            {!OtherDetails ?
                                <GrAdd className="cursor-pointer"
                                    onClick={() => setOtherDetails(!OtherDetails)} />
                                :
                                <GrFormSubtract className="cursor-pointer"
                                    onClick={() => setOtherDetails(!OtherDetails)} />
                            }
                        </div>
                    </div>
                    {OtherDetails &&
                        <div className="p-5 text-justify">
                            Manufactured by :ECCO Sko A/s Industrivej 5, DK-6261,
                            BredebroMarketed by: ECCO Shoes India Pvt. Ltd. Shakti
                            Mills Lane, Mahalaxmi, Turf Estate No. 315,Mumbai-400011
                            INDIANet Quantity: 1 Pair
                        </div>
                    }
                    <div className="grid grid-cols-2 p-3 border-y-2">
                        <div>
                            <h1>Consumer Complaint Contact</h1>
                        </div>
                        <div style={{ textAlign: '-webkit-right' }}>
                            {!consumerComplaint ?
                                <GrAdd className="cursor-pointer"
                                    onClick={() => setConsumerComplaint(!consumerComplaint)} />
                                :
                                <GrFormSubtract className="cursor-pointer"
                                    onClick={() => setConsumerComplaint(!consumerComplaint)} />
                            }
                        </div>
                    </div>
                    {consumerComplaint &&
                        <div className="p-5 text-justify">
                            <p>For customer complaint contact at marketer address</p>
                            <p>Email : customercare@shoeadda.com</p>
                            <p>Phone : +91-797 7311 647</p>
                        </div>
                    }
                </div>
            </div>
            <div className="text-center p-5">
                <div className=" text-2xl">SIMILAR PRODUCTS</div>
            </div>
        </div>
    )
}
export default menProductDetails;                                                                                                                                                                                          