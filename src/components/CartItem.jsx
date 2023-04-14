import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import {FcDeleteDatabase} from "react-icons/fc";

const CartItem = ({item, itemIndex}) => {

  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.error("Item Removed");
  }


  return (
    <div className="flex">
      <div className="flex gap-10 w-[750px] h-[350px] border-b-4 mx-auto ml-[100px]">

        <div>
          <img src={item.image} className="h-[300px] w-[400px]"/>
        </div>

        <div>
          <h1 className="text-gray-700 w-[500px] font-semibold text-[1.6rem] text-left mt-3">{item.title}</h1>
          <h1 className=" text-gray-600 w-[500px] font-normal text-lg text-left mt-5">{item.description.split(" ").slice(0, 15).join(" ") + "..."}</h1>

          <div className="w-[450px] flex justify-between mt-8">
            <p className="text-green-600 font-semibold ">${item.price}</p>
            <div
            onClick={removeFromCart}
            className="bg-red-200 w-10 h-10 flex justify-center items-center rounded-full cursor-pointer">
              <FcDeleteDatabase/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
