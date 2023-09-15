"use client"
import FilterSelect from "@/components/select/FilterSelect"
import Image from "next/image"
import { BsFilterLeft } from "react-icons/bs"

const Brand = () => {
    return (
        <div className="p-5">
        <div className="w-full text-center">
            <Image  alt='brand' src="/menbackground.png" width={1500} height={0} style={{height:"300px"}} />
        </div>
        <div className="w-full inline-flex flex-wrap justify-between">
            <div className="lg:w-32 sd:w-[-50px] inline-flex gap-2 text-center my-2 font-bold">
                <BsFilterLeft className="mt-1"/>
                <h1 >FILTERS</h1>
            </div>
            <div className="lg:w-32 sd:w-[-50px] text-center my-2 font-bold ">
                <h1>Brand</h1>
            </div>
            <div className="lg:w-38 sd:w-[-50px] inline-flex text-center my-2 font-bold">
                <h1 className="mt-1 mr-2">SORTED BY:</h1>
                <FilterSelect />
            </div>
        </div>
    </div>
    )
}

export default Brand