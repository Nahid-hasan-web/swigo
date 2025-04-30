import React from "react";

const Cart = () => {
  return (
    <>
      <div class="w-[320px] bg-white border border-lime-300 p-4 rounded-md font-sans">
        <div class="space-y-4">
          <div class="flex items-center gap-4">
            <img
              src="https://via.placeholder.com/60"
              alt="Double Burger"
              class="w-[60px] h-[60px] rounded-md object-cover"
            />
            <div class="flex-1">
              <h3 class="font-semibold text-[16px]">Double Burger</h3>
              <p class="text-[#8BC34A] font-medium">$28.00</p>
            </div>
            <button class="w-[28px] h-[28px] rounded-full bg-red-500 text-white flex items-center justify-center text-sm">
              ✕
            </button>
          </div>

          <div class="flex items-center gap-4">
            <img
              src="https://via.placeholder.com/60"
              alt="Cheese Burger"
              class="w-[60px] h-[60px] rounded-md object-cover"
            />
            <div class="flex-1">
              <h3 class="font-semibold text-[16px]">Cheese Burger</h3>
              <p class="text-[#8BC34A] font-medium">$20.00</p>
            </div>
            <button class="w-[28px] h-[28px] rounded-full bg-red-500 text-white flex items-center justify-center text-sm">
              ✕
            </button>
          </div>

          <div class="flex items-center gap-4">
            <img
              src="https://via.placeholder.com/60"
              alt="Burger"
              class="w-[60px] h-[60px] rounded-md object-cover"
            />
            <div class="flex-1">
              <h3 class="font-semibold text-[16px]">Burger</h3>
              <p class="text-[#8BC34A] font-medium">$15.00</p>
            </div>
            <button class="w-[28px] h-[28px] rounded-full bg-red-500 text-white flex items-center justify-center text-sm">
              ✕
            </button>
          </div>
        </div>

        <div class="flex justify-between items-center mt-6 border-t pt-4">
          <span class="text-lg font-semibold">Total:</span>
          <span class="text-lg font-bold text-[#8BC34A]">$63</span>
        </div>

        <div class="flex gap-3 mt-5">
          <button class="flex-1 bg-[#8BC34A] text-white py-2 rounded-md font-semibold hover:bg-[#7DA640] transition">
            View Cart
          </button>
          <button class="flex-1 border border-[#8BC34A] text-[#8BC34A] py-2 rounded-md font-semibold hover:bg-[#F5FFF0] transition">
            Menu
          </button>
        </div>
      </div>
    </>
  );
};

export default Cart;
