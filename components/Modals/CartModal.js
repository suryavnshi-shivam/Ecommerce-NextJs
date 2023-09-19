import { Store } from "@/redux/Store";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";


const CartModal = ({ showModal, setShowModal }) => {
    const { state, dispatch } = useContext(Store)
    const cart = state.cart
    const itemInCart = cart?.cartItems?.length;
    const cartSubtotal = cart?.cartItems?.reduce((a, c) => a + c.price * c.quantity, 0);
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


    return (
        <>
            {showModal ? (
                <>
                    <div
                        className="justify-end items-start mt-8 flex fixed overflow-x-hidden  overflow-scroll inset-0 z-50"
                    >
                        <div className="w-[27rem]  my-6">
                            <div className="rounded-lg shadow-lg lg:m-[0%] flex-col bg-white p-2 sd:m-[15%]">
                                <div className="grid grid-cols-2 items-start justify-between p-1 border-b border-solid border-slate-200 rounded-t">
                                    <div className="text-sm text-slate-500 font-extrabold">
                                        <p>
                                            Item in Cart : {itemInCart}
                                        </p>
                                    </div>
                                    <div className="text-sm text-slate-500 font-extrabold">
                                        <p>
                                            Cart Subtotal : Rs. {cartSubtotal}
                                        </p>
                                    </div>
                                </div>
                                <div className="">
                                    {cart?.cartItems?.map((el) => (
                                        <div key={el.id} className="lg:w-[26rem] sd:w-[15rem] inline-flex gap-5 p-1 border-b-2  justify-start">
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
                                {cart?.cartItems?.length <= 0 && <div className="text-center text-black">No Item in cart</div>}
                                <div className="flex items-center lg:flex-row sd:flex-col justify-around p-1 border-t border-solid border-slate-200 rounded-b">
                                    <button
                                        className="text-black p-1 border border-spacing-2 rounded bg-red-200  font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                    >
                                        close
                                    </button>
                                    {itemInCart > 0 &&<button
                                        className="text-black p-1 border border-spacing-2 rounded border-black  font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                    >
                                         <a href="/editCart">Edit Cart</a>
                                    </button>}
                                    <button
                                        className="bg-slate-500 text-white active:bg-slate-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                    >
                                      <Link href="/checkout">checkout</Link>   
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0  z-40 bg-black"></div>
                </>
            ) : <div></div>}
        </>
    );
}
export default CartModal;