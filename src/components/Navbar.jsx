import React, { use, useEffect } from "react";
import logo from "../assets/images/logo.png";
import { Link, useLocation, useParams } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";
import { BsHandbag } from "react-icons/bs";
import Cart from "./Cart";
const Navbar = () => {
  const [showCart , setShowCart] = React.useState(false);
  const [navcolor, setNavColor] = React.useState('');
  const myPath = useLocation()

  useEffect(()=>{
  if(myPath.pathname == '/'){
    setNavColor('text-primary')
  }else{
    setNavColor('text-white')
  }
},[])
  return (
    <>
      <nav className="main_menu pt-[19px]  absolute  top-0 left-0 w-full hidden z-[100] lg:block">
        <div className="container">
          <div className="manu_row flex justify-between items-center">
            {/* ------- menu logo */}
            <div className="logo_col w-[162px]">
              <img className="w-full" src={logo} alt="swigo" />
            </div>
            {/* ------- menu items */}
            <div className="menu_items flex gap-[60px] items-center">
              <ul className="flex gap-5  text-[16px] font-normal  font-poppins">
                <li>
                  <Link
                    className={`flex items-center gap-[7px]  ${navcolor}`}
                    to="#"
                  >
                    Home{" "}
                  </Link>
                </li>
                <li className=" relative group">
                  <Link
                    className={`flex items-center gap-[7px]  ${navcolor}`}
                    to="#"
                  >
                    Shop <IoIosArrowDown />
                  </Link>
                  {/* Shop dropdown  */}
                  <ul className=" invisible opacity-0 group-hover:visible  group-hover:opacity-100 duration-[.4s] p-4 absolute top-[50px]  left-0 w-[300px] bg-white rounded-[5px]">
                    <li>
                      <Link
                        className="text-[16px] font-normal font-poppins text-primary mb-[20px] inline-block  hover:text-brandColor duration-[.2s]"
                        to={"/allProducts"}
                      >
                        All Products
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="text-[16px] font-normal font-poppins text-primary mb-[20px] inline-block  hover:text-brandColor duration-[.2s]"
                        to={"#"}
                      >
                        New Arrivals
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="text-[16px] font-normal font-poppins text-primary mb-[20px] inline-block  hover:text-brandColor duration-[.2s]"
                        to={"#"}
                      >
                        Best Sellers
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="text-[16px] font-normal font-poppins text-primary  hover:text-brandColor duration-[.2s]"
                        to={"#"}
                      >
                        Specific Product Category
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className=" relative group ">
                  <Link
                    className={`flex items-center gap-[7px]   ${navcolor}`}
                    to="#"
                  >
                    Blogs <IoIosArrowDown />
                  </Link>
                  {/* ----------- droup down menu  */}
                  <div className=" absolute top-[70px] opacity-0 invisible group-hover:opacity-100 group-hover:visible  duration-[1s] left-[-900px] lg:w-[1200px]  bg-white  rounded-[5px] shadow-[0px_4px_6px_0px_rgba(0,_0,_0,_0.1)]">
                    {/*  ----------- dropdown head  */}
                    <div className="drp_head  w-full border-b-[1px] border-b-gray-300 flex">
                      <div className="row1 w-[300px] p-[30px] border-r-[1px] border-gray-300">
                        <h2 className="text-lg font-semibold font-poppins text-primary">
                          Taste the Stories
                        </h2>
                      </div>
                      <div className="row2 w-[300px] p-[30px] border-r-[1px] border-gray-300">
                        <h2 className="text-lg  font-semibold font-poppins text-primary">
                          Recipes, Tips{" "}
                        </h2>
                      </div>
                      <div className="row3 w-[300px] p-[30px] border-r-[1px] border-gray-300">
                        <h2 className="text-lg font-semibold font-poppins text-primary">
                          Flavor Chronicles
                        </h2>
                      </div>
                      <div className="row4 w-[300px] p-[30px]">
                        <h2 className="text-lg  font-semibold font-poppins text-primary">
                          Flavor Chronicles
                        </h2>
                      </div>
                    </div>
                    {/* ------------ derop down items */}
                    <div className="drp_head  w-full flex">
                      <div
                        id="singel_row"
                        className=" w-[300px] p-[30px] border-r-[1px] border-gray-300"
                      >
                        <ul>
                          <li>
                            <Link
                              className="text-[16px] font-normal font-poppins text-primary mb-[20px] inline-block  hover:text-brandColor duration-[.2s]"
                              to={"#"}
                            >
                              Taste the Stories
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="text-[16px] font-normal font-poppins text-primary mb-[20px] inline-block  hover:text-brandColor duration-[.2s]"
                              to={"#"}
                            >
                              Kitchen Chronicles
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="text-[16px] font-normal font-poppins text-primary mb-[20px] inline-block  hover:text-brandColor duration-[.2s]"
                              to={"#"}
                            >
                              Flavor Insights
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="text-[16px] font-normal font-poppins text-primary  hover:text-brandColor duration-[.2s]"
                              to={"#"}
                            >
                              The Foodie Feed
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div
                        id="singel_row"
                        className=" w-[300px] p-[30px] border-r-[1px] border-gray-300"
                      >
                        <ul>
                          <li>
                            <Link
                              className="text-[16px] font-normal font-poppins text-primary mb-[20px] inline-block  hover:text-brandColor duration-[.2s]"
                              to={"#"}
                            >
                              {" "}
                              Our Go-To Recipe
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="text-[16px] font-normal font-poppins text-primary mb-[20px] inline-block  hover:text-brandColor duration-[.2s]"
                              to={"#"}
                            >
                              {" "}
                              Tips for Better Home Cooking
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="text-[16px] font-normal font-poppins text-primary mb-[20px] inline-block  hover:text-brandColor duration-[.2s]"
                              to={"#"}
                            >
                              {" "}
                              Our Chef's Secrets
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="text-[16px] font-normal font-poppins text-primary  hover:text-brandColor duration-[.2s]"
                              to={"#"}
                            >
                              Creative Ways to Use Leftovers
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div
                        id="singel_row"
                        className=" w-[300px] p-[30px] border-r-[1px] border-gray-300"
                      >
                        <ul>
                          <li>
                            <Link
                              className="text-[16px] font-normal font-poppins text-primary mb-[20px] inline-block  hover:text-brandColor duration-[.2s]"
                              to={"#"}
                            >
                              The Spicy Trail
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="text-[16px] font-normal font-poppins text-primary mb-[20px] inline-block  hover:text-brandColor duration-[.2s]"
                              to={"#"}
                            >
                              Aromatic Adventures
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="text-[16px] font-normal font-poppins text-primary mb-[20px] inline-block  hover:text-brandColor duration-[.2s]"
                              to={"#"}
                            >
                              Sweet Surrender
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="text-[16px] font-normal font-poppins text-primary  hover:text-brandColor duration-[.2s]"
                              to={"#"}
                            >
                              Umami Unveiled
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div
                        id="singel_row"
                        className=" w-[300px] p-[30px] border-r-[1px] border-gray-300"
                      >
                        <ul>
                          <li>
                            <Link
                              className="text-[16px] font-normal font-poppins text-primary mb-[20px] inline-block  hover:text-brandColor duration-[.2s]"
                              to={"#"}
                            >
                              What's New on the Plate?
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="text-[16px] font-normal font-poppins text-primary mb-[20px] inline-block  hover:text-brandColor duration-[.2s]"
                              to={"#"}
                            >
                              Local Gems
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="text-[16px] font-normal font-poppins text-primary mb-[20px] inline-block  hover:text-brandColor duration-[.2s]"
                              to={"#"}
                            >
                              Foodie Hotspots
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="text-[16px] font-normal font-poppins text-primary  hover:text-brandColor duration-[.2s]"
                              to={"#"}
                            >
                              Behind the Scenes
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <Link
                    className={`flex items-center gap-[7px]  ${navcolor}`}
                    to="#"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
              <div className="menu_buttons flex gap-[10px] ">
                <button className="w-[45px] h-[45px] rounded-[6px] bg-[#fff] flex justify-center items-center hover:bg-brandColor hover:text-white duration-[1s] text-[#222]">
                  <FaRegUser />
                </button>
                <button onClick={()=>setShowCart(!showCart)} className="w-[45px]  h-[45px] rounded-[6px] bg-[#fff] flex justify-center items-center hover:bg-brandColor hover:text-white duration-[1s] text-[#222]">
                  <BsHandbag />
                </button>
              </div>
            </div>
          </div>
        </div>
        <Cart toggleCartButton={showCart}  closeCart={()=>setShowCart(!showCart)} />
     
      </nav>
    </>
  );
};

export default Navbar;
