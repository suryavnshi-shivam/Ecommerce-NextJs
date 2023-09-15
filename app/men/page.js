'use client'
import FilterSelect from "@/components/select/FilterSelect";
import Image from "next/image"
import { BsFilterLeft } from 'react-icons/bs';
import { AiOutlineArrowUp } from 'react-icons/ai';
import {  useEffect, useState } from "react";
import Search from "@/components/search/Search";
import Link from "next/link";
import { getProductData } from "@/api/ProductApi/ProductAPI";
const initialItemsToShow = 8
const Men = () => {

    const [arrowSizeToggale, setArrowSizeToggale] = useState(false);
    const [arrowColoursToggale, setArrowColoursToggale] = useState(false);
    const [arrowUpperToggale, setArrowUpperToggale] = useState(false);
    const [arrowLiningToggale, setArrowLiningToggale] = useState(false);
    const [arrowOccasionToggale, setArrowOccasionToggale] = useState(false);
    const [data, setData] = useState([]);
    const [itemsToShow, setItemsToShow] = useState(initialItemsToShow);
    const [loder, setLoder] = useState(false);
    const [noData, setNoData] = useState('');
    console.log(data)
    useEffect(() => {
        getProduct();
    }, [])
    const getProduct = async () => {
        setLoder(true)
        await getProductData().then(res => {
            setData(res.data)
            setLoder(false)
        }).catch(err => {
            // console.log(err)
        }).finally(() => setLoder(false))
    }
    // console.log(data)
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
    const onShowMore = () => {
        setItemsToShow(itemsToShow + 8);
        // console.log("Show More");
        // toastFile("success", "Show More");
    };
    const handleSearchFunction = (searchTerm) => {
        if (searchTerm === '') {
            setNoData('')
            getProduct();
        } else {
            const filterTerm = searchTerm
            const searchResults = data.filter((item) => {
                return item.title && typeof item?.title === 'string' && item?.title.toLowerCase().includes(filterTerm?.toLowerCase());
            });
            console.log(searchResults);
            if (searchResults.length === 0) {
                setNoData("No Data found");
            } else {
                setNoData('')
                setData(searchResults);
            }
        }
    };
      
      
      


    return (
        <div className="p-5">
            <div className="grid grid-cols-1  xl:grid-cols-1 text-center">
                <Image src="/menbackground.png" width={5000} height={0} style={{ height: "300px" }} />
            </div>
            <div className="grid grid-cols-3 my-2 sd:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
                <div className=" inline-flex gap-2  font-bold">
                    <BsFilterLeft className="mt-1" />
                    <h1 >FILTERS</h1>
                </div>
                <div className=" font-bold ">
                    <h1>MEN</h1>
                </div>
                <div className="inline-flex gap-2  font-bold" >
                    <h1 className="mt-1 mr-2">SORTED BY:</h1>
                    <FilterSelect data={data} setData={setData}/>
                </div>
                <div>
                    <Search data={data} onSearch={handleSearchFunction}/>
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
                                    <label for="Brown" className="ml-2"><span className="mr-2 bg-[#964B00]rounded-full px-[6px]">&nbsp;</span>Brown</label>
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
                                        <span className="mr-2 bg-[#D2B48C]rounded-full px-[6px]">&nbsp;</span>
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
                {noData && <div className="text-center ml-[40%] mt-[10%]">
                    {noData}
                </div>}
                {!loder ? <div className="inline-flex flex-wrap lg:w-[1115px] md:w-[800px] sd:w-[23rem] lg:pl-[55px]">
                    {!noData && data.slice(0, itemsToShow).map((item) => (
                        <div key={item._id} className="lg:w-64 lg:mt-1 lg:mx-1 sd:w-[23rem] shadow shadow-slate-900  border border-spacing-1 rounded md:w-[362px] p-2">
                            <Link href={`/men/${item._id}`}>
                                <Image
                                    style={{ width: '500px', height: '200px' }}
                                    src={item.images[0]}
                                    width={100}
                                    height={0}
                                    alt="Shoe Image"
                                />
                            </Link>
                            <div className="my-2 text-center text-sm">
                                <p style={{ fontFamily: 'futuramedium', fontSize: '13px' }}>{item.title}</p>
                                <p className="text-gray-600">{item.brand}</p>
                                <p style={{ fontFamily: 'futuramedium', fontSize: '13px' }}> Stok: {item.stock}</p>
                                <p style={{ fontFamily: 'futuramedium', fontSize: '13px' }}>Price:{item.price}</p>
                            </div>
                        </div>
                    ))}
                </div> : <div className="p-[66px] ml-[30%] mt-[2%]  font-extrabold">
                    <div role="status">
                        <svg aria-hidden="true" class="w-8 h-8 mr-2 text-gray-200 animate-spin-loading dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                        </svg>
                        <span class="sr-only">Loading...</span>
                    </div>
                </div>}
            </div>
            {!noData && itemsToShow < data.length && <div className="text-center my-5">
                <button
                    onClick={onShowMore}
                    className=" bg-slate-600 hover:text-black text-white p-2 rounded ml-[240px]"
                >Show More</button>
            </div>}
        </div>
    )
}

export default Men