import { Fragment, useContext, useEffect, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { Store } from '@/redux/Store'
import Image from 'next/image'

const CartSizeModel = ({ showModal, setShowModal , cartData }) => {
    const { state, dispatch } = useContext(Store)
    const [selectedSize, setSelectedSize] = useState();
    const cart = state.cart
    const cancelButtonRef = useRef(null)

    useEffect(()=>{
        if(cartData){
            setSelectedSize(cartData.selectedSize)
        }
    },[cartData])
  
    const handleSizeSelection = (size) => {
        setSelectedSize(size);
    };

    const onUpdateSize = () => {
        const updatedCartItems = state.cart.cartItems.map(cartItem => {
            if (cartItem.id === cartData.id) {
                return { ...cartItem, selectedSize: selectedSize };
            }
            return cartItem;
        });
        dispatch({ type: 'UPDATE_SIZE', payload: { cartItems: updatedCartItems } });
        setShowModal(false)
    };
    
    
    return (
        <Transition.Root show={showModal} as={Fragment}>
            <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setShowModal}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                </Transition.Child>

                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                            <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                                    <div className="sm:flex sm:items-start">
                                        <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                            <Dialog.Title as="h3" className="text-base font-semibold leading-6 text-gray-900">
                                                {cartData && <div className='inline-flex gap-2'>
                                                    <div>
                                                        <Image src={cartData.images[0]} width={100} height={0} alt='image' />
                                                    </div>
                                                    <div>
                                                        <p>{cartData.title}</p>
                                                        <p>Rs. {cartData.price}</p>
                                                    </div>
                                                </div>}
                                            </Dialog.Title>
                                            <div className="mt-2">
                                                <h1  className='text-xl font-extrabold'>Select Size</h1>
                                                <p className="text-sm text-gray-500">
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
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                    <button
                                        type="button"
                                        className="inline-flex w-full justify-center rounded-md bg-gray-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-500 sm:ml-3 sm:w-auto"
                                        onClick={onUpdateSize}
                                    >
                                        Update
                                    </button>
                                    <button
                                        type="button"
                                        className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-300 sm:mt-0 sm:w-auto"
                                        onClick={() => setShowModal(false)}
                                        ref={cancelButtonRef}
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    )
}
export default CartSizeModel
