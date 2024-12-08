"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
const Cart = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(sessionStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  const removeFromCart = (itemToRemove) => {
    const updatedCart = cart.filter((item) => item.id !== itemToRemove.id);
    setCart(updatedCart);
    sessionStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  return (
    <div className="mt-5 container   ">
      <h2 className="text-lg font-bold mb-20">Səbət</h2>
      <div>
        {cart.length > 0 ? (
          cart.map((item, index) => (
            <div key={index}>
              <div className="flex justify-between container gap-5 border-2   mt-5 p-5 rounded-2xl items-center">
                <div className="flex gap-5 ">
                  {" "}
                  <img src={item.url} alt={item.name} className="w-30 h-40" />
                  <p className="font-semibold text-xl">{item.name}</p>
                </div>{" "}
                <div className="flex gap-5">
                  <p className="text-red-500 font-extrabold">{item.price}</p>
                  <IoCloseSharp
                    onClick={() => removeFromCart(item)}
                    className=" w-7 h-7 cursor-pointer "
                  >
                    Sil
                  </IoCloseSharp>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="border-none shadow-md  py-10 rounded-2xl text-center text-3xl font-medium">
            <img className="mx-auto pb-5" src="/pictures/basket.png" alt="" />
            <p className=" ">Səbətinizde məhsul yoxdur</p>
            <p className="text-base font-thin text-gray-400 pt-5">
              İstədiyiniz məhsulu səbətinizə əlavə edin
            </p>

            <Link href={"/"}>
              <button className=" mt-10 px-24   border-gray-400 py-3 text-base font-medium rounded-xl border-2 ">
                {" "}
                Əsas səhifə
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
