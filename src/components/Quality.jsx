import React from 'react'
import CommonHead from './Common/CommonHead'
import q1 from '../assets/images/q1.png'
import house from '../assets/images/house.png'
const Quality = () => {
  return (
    <>
         <section id='qulity' className=' bg-[#F4FDE7] h-[300px]'>
            <div className="container">
                <CommonHead CommonHead={"Quality Service's"} />
                <div className="qulityRow flex flex-wrap  rounded-[20px] w-full lg:w-[1300px]  m-auto mt-[50px] justify-between bg-white h-[280px] shadow-[0px_4px_6px_0px_rgba(0,_0,_0,_0.1)] ">
                    {/* ------------ qulity singel item */}
                    <div className='w-[300px] h-[280px] group overflow-hidden relative  hover:scale-[1.1] duration-[1s]'>
                        <img className=' duration-[1s] group-hover:opacity-100 opacity-0' src={q1} alt="qulity" />
                        <div className="qulity_texts flex flex-col  items-center duration-[1s]  group-hover:bg-[#7da640e8]  absolute top-0 left-0 p-10 ">
                            <img src={house} className='w-[80px]' alt="hosue Image" />
                            <h2 className='text-[20px] font-semibold font-poppins text-black my-4'>ResTauRant</h2>
                            <p className='text-[16px] w-[213px] m-auto text-center font-normal font-poppins text-[#666666] group-hover:text-white '> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                    </div>
                    {/* ------------ qulity singel item */}
                    <div className='w-[300px] h-[280px] group overflow-hidden relative  hover:scale-[1.1] duration-[1s]'>
                        <img className=' duration-[1s] group-hover:opacity-100 opacity-0' src={q1} alt="qulity" />
                        <div className="qulity_texts flex flex-col  items-center duration-[1s]  group-hover:bg-[#7da640e8]  absolute top-0 left-0 p-10 ">
                            <img src={house} className='w-[80px]' alt="hosue Image" />
                            <h2 className='text-[20px] font-semibold font-poppins text-black my-4'>ResTauRant</h2>
                            <p className='text-[16px] w-[213px] m-auto text-center font-normal font-poppins text-[#666666] group-hover:text-white '> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                    </div>
                    {/* ------------ qulity singel item */}
                    <div className='w-[300px] h-[280px] group overflow-hidden relative  hover:scale-[1.1] duration-[1s]'>
                        <img className=' duration-[1s] group-hover:opacity-100 opacity-0' src={q1} alt="qulity" />
                        <div className="qulity_texts flex flex-col  items-center duration-[1s]  group-hover:bg-[#7da640e8]  absolute top-0 left-0 p-10 ">
                            <img src={house} className='w-[80px]' alt="hosue Image" />
                            <h2 className='text-[20px] font-semibold font-poppins text-black my-4'>ResTauRant</h2>
                            <p className='text-[16px] w-[213px] m-auto text-center font-normal font-poppins text-[#666666] group-hover:text-white '> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                    </div>
                    {/* ------------ qulity singel item */}
                    <div className='w-[300px] h-[280px] group overflow-hidden relative  hover:scale-[1.1] duration-[1s]'>
                        <img className=' duration-[1s] group-hover:opacity-100 opacity-0' src={q1} alt="qulity" />
                        <div className="qulity_texts flex flex-col  items-center duration-[1s]  group-hover:bg-[#7da640e8]  absolute top-0 left-0 p-10 ">
                            <img src={house} className='w-[80px]' alt="hosue Image" />
                            <h2 className='text-[20px] font-semibold font-poppins text-black my-4'>ResTauRant</h2>
                            <p className='text-[16px] w-[213px] m-auto text-center font-normal font-poppins text-[#666666] group-hover:text-white '> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                    </div>
                </div>
            </div>
         </section>
    </>
  )
}

export default Quality