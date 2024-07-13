import React, { useState } from "react";
import { ShopData } from "../data";
import ReactPaginate from "react-paginate";

const Pagination = () => {
  const [pageNumber, setPageNumber] = useState(0);
  const usersPerPage = 12;
  const pagesVisted = pageNumber * usersPerPage;

  const pageCount = Math.ceil(ShopData.length / usersPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-5 ">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-10">
        {ShopData.slice(pagesVisted, pagesVisted + usersPerPage).map((item) => (
          <div
            key={item.id}
            className=" border border-gray-500 rounded-lg  w-[300px]"
          >
            <div className="w-full h-[300px] rounded-lg">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="flex flex-col justify-center items-center  ">
              <h2 className="mt-2  bg-slate-700 py-1 px-3 rounded text-white text-xl">
                {item.title}
              </h2>
              <div className="flex gap-5 text-orange-700 my-3">
                <p className="font-bold">Price: ${item.price}</p>
                <p className="font-semibold">Color: {item.color}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <ReactPaginate
        previousLabel="Previous"
        nextLabel="Next"
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName="flex justify-center items-center gap-3 mt-4"
        previousLinkClassName="border-2 border-[#b88e2f] px-4 py-2 m-2 rounded-lg text-black font-bold hover:bg-[#f9f1e7] hover:text-[#b88e2f]"
        nextLinkClassName="border-2 border-[#b88e2f] px-4 py-2 m-2 rounded-lg text-black font-bold hover:bg-[#f9f1e7] hover:text-[#b88e2f]"
        disabledClassName="opacity-50 cursor-not-allowed"
        activeClassName=" text-white border-white border-2 py-1 px-3 rounded bg-[#b88e2f] "
      />
    </div>
  );
};

export default Pagination;
