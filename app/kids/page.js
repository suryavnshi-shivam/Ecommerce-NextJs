'use client'
import Search from "@/components/search/Search"
import FilterSelect from "@/components/select/FilterSelect"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { AiOutlineArrowUp } from "react-icons/ai"
import { BsFilterLeft } from "react-icons/bs"

const Kinds = () => {
    const [arrowSizeToggale, setArrowSizeToggale] = useState(false);
    const [arrowColoursToggale, setArrowColoursToggale] = useState(false);
    const [arrowUpperToggale, setArrowUpperToggale] = useState(false);
    const [arrowLiningToggale, setArrowLiningToggale] = useState(false);
    const [arrowOccasionToggale, setArrowOccasionToggale] = useState(false);
    const onSizeArrowClick = () => {
        setArrowSizeToggale(!arrowSizeToggale)
    }
    const onColoursArrowClick = () => {
        setArrowColoursToggale(!arrowColoursToggale)
    }
    const onUpperArrowClick = () => {
        setArrowUpperToggale(!arrowUpperToggale)
    }
    const onLiningArrowClick = () => {
        setArrowLiningToggale(!arrowLiningToggale)
    }
    const onSOccasionArrowClick = () => {
        setArrowOccasionToggale(!arrowOccasionToggale)
    }
    return (
        <div className="p-5">
            <div className="w-full text-center">
                <Image alt="kid" src="/kidsbackground.png" width={1500} height={0} style={{ height: "300px" }} />
            </div>
            <div className="grid grid-cols-3 my-2 sd:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
                <div className=" inline-flex gap-2  font-bold">
                    <BsFilterLeft className="mt-1" />
                    <h1 >FILTERS</h1>
                </div>
                <div className=" font-bold ">
                    <h1>KIDS</h1>
                </div>
                <div className="inline-flex gap-2  font-bold" >
                    <h1 className="mt-1 mr-2">SORTED BY:</h1>
                    <FilterSelect />
                </div>
                <div >
                    {/* <Search /> */}
                </div>
            </div>
            <div className="w-full inline-flex flex-wrap">
                <div className="lg:w-48 sd:w-[23rem] md:w-[720px] md:pr-10">
                    <ul>
                        <div className="lg:w-52 sd:w-[23rem] md:w-[720px] px-2 inline-flex justify-between border border-spacing-1">
                            <div>
                                <li className="p-5" >
                                    Size
                                </li>
                            </div>
                            <div>
                                <button onClick={onSizeArrowClick}>
                                    <AiOutlineArrowUp className={`mt-5 ${arrowSizeToggale ? ' rotate-180' : ''}`} />
                                </button>
                            </div>
                        </div>
                        {arrowSizeToggale &&
                            <ul className="p-5  lg:lg:w-[200px] sd:w-[350px] inline-flex flex-wrap gap-2">
                                <li className="">
                                    <input type="checkbox" id="6" value="6" />
                                    <label for="6" className="ml-2">6</label>
                                </li>
                                <li className="">
                                    <input type="checkbox" id="7" value="7" />
                                    <label for="7" className="ml-2">7</label>
                                </li>
                                <li className="">
                                    <input type="checkbox" id="8" value="8" />
                                    <label for="8" className="ml-2">8</label>
                                </li>
                                <li className="">
                                    <input type="checkbox" id="9" value="9" />
                                    <label for="9" className="ml-2">9</label>
                                </li>
                                <li className="">
                                    <input type="checkbox" id="10" value="10" />
                                    <label for="10" className="ml-2">10</label>
                                </li>
                                <li className="">
                                    <input type="checkbox" id="11" value="11" />
                                    <label for="11" className="ml-2">11</label>
                                </li>
                                <li className="">
                                    <input type="checkbox" id="12" value="12" />
                                    <label for="12" className="ml-2">12</label>
                                </li>
                            </ul>
                        }
                        <div className="lg:w-52 sd:w-[23rem] md:w-[720px] px-2 inline-flex justify-between border border-spacing-1">
                            <div>
                                <li className="p-5" >
                                    Colours
                                </li>
                            </div>
                            <div>
                                <button onClick={onColoursArrowClick}>
                                    <AiOutlineArrowUp className={`mt-5 ${arrowColoursToggale ? 'rotate-180' : ''}`} />
                                </button>
                            </div>
                        </div>
                        {arrowColoursToggale &&
                            <ul className="p-5 lg:w-[200px] sd:w-[350px]md200px gap-2">
                                <li className="">
                                    <input type="checkbox" id="Black" value="Black" />
                                    <label for="Black" className="ml-2"><span className="mr-2 bg-black rounded-full px-[6px]">&nbsp;</span>Black</label>
                                </li>
                                <li className="">
                                    <input type="checkbox" id="Brown" value="Brown" />
                                    <label for="Brown" className="ml-2"><span className="mr-2 bg-amber-800 rounded-full px-[6px]">&nbsp;</span>Brown</label>
                                </li>
                                <li className="">
                                    <input type="checkbox" id="Gray" value="Gray" />
                                    <label for="Gray" className="ml-2"><span className="mr-2 bg-slate-600 rounded-full px-[6px]">&nbsp;</span>Gray</label>
                                </li>
                                <li className="">
                                    <input type="checkbox" id="Blue" value="Blue" />
                                    <label for="Blue" className="ml-2"><span className="mr-2 bg-blue-600 rounded-full px-[6px]">&nbsp;</span>Blue</label>
                                </li>
                                <li className="">
                                    <input type="checkbox" id="Tan" value="Tan" />
                                    <label htmlFor="Tan" className="ml-2">
                                        <span className="mr-2 bg-orange-300 rounded-full px-[6px]">&nbsp;</span>
                                        Tan
                                    </label>
                                </li>
                            </ul>
                        }
                        <div className="lg:w-52 sd:w-[23rem] md:w-[720px] px-2 inline-flex justify-between border border-spacing-1">
                            <div>
                                <li className="p-5" >
                                    Upper Materail
                                </li>
                            </div>
                            <div>
                                <button onClick={onUpperArrowClick}>
                                    <AiOutlineArrowUp className={`mt-5 ${arrowUpperToggale ? 'rotate-180' : ''}`} />
                                </button>
                            </div>
                        </div>
                        {arrowUpperToggale &&
                            <ul className="p-5 lg:w-[200px] sd:w-[350px]capitalize  gap-2">
                                <li>
                                    <input type="checkbox" id="6" value="leather" />
                                    <label for="leather" className="ml-2">leather</label>
                                </li>
                                <li>
                                    <input type="checkbox" id="synthetic" value="synthetic" />
                                    <label for="synthetic" className="ml-2">synthetic</label>
                                </li>
                                <li>
                                    <input type="checkbox" id="cow learher" value="cow learher" />
                                    <label for="cow learher" className="ml-2">cow learher</label>
                                </li>
                                <li>
                                    <input type="checkbox" id="nubuck" value="nubuck" />
                                    <label for="nubuck" className="ml-2">nubuck</label>
                                </li>
                                <li>
                                    <input type="checkbox" id="cow leather" value="cow leather" />
                                    <label for="cow leather" className="ml-2">cow leather</label>
                                </li>
                            </ul>
                        }
                        <div className="lg:w-52 sd:w-[23rem] md:w-[720px] px-2 inline-flex justify-between border border-spacing-1">
                            <div>
                                <li className="p-5" >
                                    Lining Material
                                </li>
                            </div>
                            <div>
                                <button onClick={onLiningArrowClick}>
                                    <AiOutlineArrowUp className={`mt-5 ${arrowLiningToggale ? 'rotate-180' : ''}`} />
                                </button>
                            </div>
                        </div>
                        {arrowLiningToggale && <ul className="p-5 w-96  capitalize">
                            <li>
                                <input type="checkbox" id="6" value="polyester/artificial leather/polyamide" />
                                <label for="leather" className="ml-2">polyester/artificial </label>
                            </li>
                            <li>
                                <input type="checkbox" id="synthetic" value="synthetic" />
                                <label for="synthetic" className="ml-2">polyester/leather</label>
                            </li>
                            <li>
                                <input type="checkbox" id="cow learher" value="cow learher" />
                                <label for="cow learher" className="ml-2">fabric</label>
                            </li>
                            <li>
                                <input type="checkbox" id="nubuck" value="nubuck" />
                                <label for="nubuck" className="ml-2">polyester/polyamide</label>
                            </li>
                            <li>
                                <input type="checkbox" id="cow leather" value="cow leather" />
                                <label for="cow leather" className="ml-2">leather</label>
                            </li>
                            <li>
                                <input type="checkbox" id="cow leather" value="cow leather" />
                                <label for="cow leather" className="ml-2">leather/polyamide</label>
                            </li>
                            <li>
                                <input type="checkbox" id="cow leather" value="cow leather" />
                                <label for="cow leather" className="ml-2">polyester/leather</label>
                            </li>
                        </ul>}
                        <div className="lg:w-52 sd:sd:w-[23rem] md:w-[720px] px-2 inline-flex justify-between border border-spacing-1">
                            <div>
                                <li className="p-5" >
                                    Occasion
                                </li>
                            </div>
                            <div>
                                <button onClick={onSOccasionArrowClick}>
                                    <AiOutlineArrowUp className={`mt-5 ${arrowOccasionToggale ? 'rotate-180' : ''}`} />
                                </button>
                            </div>
                        </div>
                        {arrowOccasionToggale && <ul className="p-5 w-96 capitalize ">
                            <li>
                                <input type="checkbox" id="casual" value="casual" />
                                <label for="casual" className="ml-2">casual</label>
                            </li>
                            <li>
                                <input type="checkbox" id="formal" value="formal" />
                                <label for="formal" className="ml-2">formal</label>
                            </li>
                        </ul>}
                    </ul>
                </div>
                <div className="inline-flex flex-wrap lg:w-[1115px] md:w-[800px] sd:w-[23rem] lg:pl-[65px]">
                    <div className="lg:w-52 sd:sd:w-[23rem] md:w-[362px] p-2">
                        <Link href='#'>
                            <Image alt="kid"
                                style={{ width: '500px', height: "200px" }}
                                src='/kidsshoes.png' width={100} height={0} />
                        </Link>
                        <div className="text-center my-2">
                            <p style={{ fontFamily: 'futuramedium', fontSize: '13px' }}>Male Brown Casual Slippers</p>
                            <p className=" text-gray-600">ECCO</p>
                            <p style={{ fontFamily: 'futuramedium', fontSize: '13px' }}>Rs. 8999.00</p>
                        </div>
                    </div>
                    <div className="lg:w-52 sd:w-[23rem] md:w-[362px] p-2">
                        <Link href='#'>
                            <Image alt="kid"
                                style={{ width: '500px', height: "200px" }}
                                src='/kidsshoes.png' width={100} height={0} />
                        </Link>
                        <div className="text-center my-2">
                            <p style={{ fontFamily: 'futuramedium', fontSize: '13px' }}>Male Brown Casual Slippers</p>
                            <p className=" text-gray-600">ECCO</p>
                            <p style={{ fontFamily: 'futuramedium', fontSize: '13px' }}>Rs. 8999.00</p>
                        </div>
                    </div>
                    <div className="lg:w-52 sd:w-[23rem] md:w-[362px] p-2 ">
                        <Link href='#'>
                            <Image alt="kid"
                                style={{ width: '500px', height: "200px" }}
                                src='/kidsshoes.png' width={100} height={0} />
                        </Link>
                        <div className="text-center my-2">
                            <p style={{ fontFamily: 'futuramedium', fontSize: '13px' }}>Male Brown Casual Slippers</p>
                            <p className=" text-gray-600">ECCO</p>
                            <p style={{ fontFamily: 'futuramedium', fontSize: '13px' }}>Rs. 8999.00</p>
                        </div>
                    </div>
                    <div className="lg:w-52 sd:w-[23rem] md:w-[362px] p-2 ">
                        <Link href='#'>
                            <Image alt="kid"
                                style={{ width: '500px', height: "200px" }}
                                src='/kidsshoes.png' width={100} height={0} />
                        </Link>
                        <div className="text-center my-2">
                            <p style={{ fontFamily: 'futuramedium', fontSize: '13px' }}>Male Brown Casual Slippers</p>
                            <p className=" text-gray-600">ECCO</p>
                            <p style={{ fontFamily: 'futuramedium', fontSize: '13px' }}>Rs. 8999.00</p>
                        </div>
                    </div>
                    <div className="lg:w-52 sd:w-[23rem] md:w-[362px] p-2 ">
                        <Link href='#'>
                            <Image alt="kid"
                                style={{ width: '500px', height: "200px" }}
                                src='/kidsshoes.png' width={100} height={0} />
                        </Link>
                        <div className="text-center my-2">
                            <p style={{ fontFamily: 'futuramedium', fontSize: '13px' }}>Male Brown Casual Slippers</p>
                            <p className=" text-gray-600">ECCO</p>
                            <p style={{ fontFamily: 'futuramedium', fontSize: '13px' }}>Rs. 8999.00</p>
                        </div>
                    </div>
                    <div className="lg:w-52 sd:w-[23rem] md:w-[362px] p-2 ">
                        <Link href='#'>
                            <Image alt="kid"
                                style={{ width: '500px', height: "200px" }}
                                src='/kidsshoes.png' width={100} height={0} />
                        </Link>
                        <div className="text-center my-2">
                            <p style={{ fontFamily: 'futuramedium', fontSize: '13px' }}>Male Brown Casual Slippers</p>
                            <p className=" text-gray-600">ECCO</p>
                            <p style={{ fontFamily: 'futuramedium', fontSize: '13px' }}>Rs. 8999.00</p>
                        </div>
                    </div>
                    <div className="lg:w-52 sd:w-[23rem] md:w-[362px] p-2 ">
                        <Link href='#'>
                            <Image alt="kid"
                                style={{ width: '500px', height: "200px" }}
                                src='/kidsshoes.png' width={100} height={0} />
                        </Link>
                        <div className="text-center my-2">
                            <p style={{ fontFamily: 'futuramedium', fontSize: '13px' }}>Male Brown Casual Slippers</p>
                            <p className=" text-gray-600">ECCO</p>
                            <p style={{ fontFamily: 'futuramedium', fontSize: '13px' }}>Rs. 8999.00</p>
                        </div>
                    </div>
                    <div className="lg:w-52 sd:w-[23rem] md:w-[362px] p-2 ">
                        <Link href='#'>
                            <Image alt="kid"
                                style={{ width: '500px', height: "200px" }}
                                src='/kidsshoes.png' width={100} height={0} />
                        </Link>
                        <div className="text-center my-2">
                            <p style={{ fontFamily: 'futuramedium', fontSize: '13px' }}>Male Brown Casual Slippers</p>
                            <p className=" text-gray-600">ECCO</p>
                            <p style={{ fontFamily: 'futuramedium', fontSize: '13px' }}>Rs. 8999.00</p>
                        </div>
                    </div>
                    <div className="lg:w-52 sd:w-[23rem] md:w-[362px] p-2 ">
                        <Link href='#'>
                            <Image alt="kid"
                                style={{ width: '500px', height: "200px" }}
                                src='/kidsshoes.png' width={100} height={0} />
                        </Link>
                        <div className="text-center my-2">
                            <p style={{ fontFamily: 'futuramedium', fontSize: '13px' }}>Male Brown Casual Slippers</p>
                            <p className=" text-gray-600">ECCO</p>
                            <p style={{ fontFamily: 'futuramedium', fontSize: '13px' }}>Rs. 8999.00</p>
                        </div>
                    </div>
                    <div className="lg:w-52 sd:w-[23rem] md:w-[362px] p-2 ">
                        <Link href='#'>
                            <Image alt="kid"
                                style={{ width: '500px', height: "200px" }}
                                src='/kidsshoes.png' width={100} height={0} />
                        </Link>
                        <div className="text-center my-2">
                            <p style={{ fontFamily: 'futuramedium', fontSize: '13px' }}>Male Brown Casual Slippers</p>
                            <p className=" text-gray-600">ECCO</p>
                            <p style={{ fontFamily: 'futuramedium', fontSize: '13px' }}>Rs. 8999.00</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-center">
                <button className=" bg-slate-600 hover:text-black text-white p-2 rounded">Show More</button>
            </div>
        </div>
    )
}

export default Kinds