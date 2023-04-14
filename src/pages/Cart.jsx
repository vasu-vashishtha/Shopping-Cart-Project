import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import CartItem from "../components/CartItem";

const Cart = () => {

  const {cart} = useSelector((state) => state);
  console.log("Printing Cart");
  console.log(cart);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce( (acc, curr) => acc + curr.price, 0) );
  },[cart])


  return (
    <div className="w-full">
      {
        cart.length > 0 ? 
        (<div className=" w-11/12 flex justify-center mt-[50px] gap-20 ml-28">

          <div className="flex flex-col gap-y-8">
            {
              cart.map((item, index) => {
                return <CartItem key={item.id} item={item} itemIndex={index} />
             })
            }
          </div>

          <div className="flex flex-col justify-between">
            <div className="flex flex-col mt-28">
              <div className="text-xl text-green-800 font-semibold uppercase">Your Cart</div>
              <div className="text-6xl text-green-600 font-semibold uppercase">Summary</div>

              <p>
                <span className="text-lg font-semibold mt-5">Total Items: {cart.length}</span>
              </p>
            </div>

            <div className="flex flex-col gap-y-4">
              <p className="text-lg font-semibold ml-3">Total Amount: <span className="text-lg font-bold">${totalAmount}</span></p>
              <button className="bg-green-600 text-white px-40 py-4 rounded-full text-lg font-semibold mb-40 shadow-2xl">Checkout Now</button>
            </div>
          </div>
        </div>) :
        (<div className="w-full h-[80vh] flex flex-col justify-center items-center gap-y-4">
          <h1 className="text-xl font-semibold text-green-950">Your cart is empty!</h1>
          <NavLink to="/">
            <button className="bg-green-600 text-white rounded-md text-md font-semibold px-5 py-2">
              Shop Now
            </button>
          </NavLink>
        </div>)
      }
    </div>
  );
};

export default Cart;
