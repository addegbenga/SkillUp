import { NextPage } from "next";
import { useState } from "react";
import { FaBars, FaSearch, FaCartPlus, FaTimes } from "react-icons/fa";
import Navmodal from "../utils/Navmodal";
const Navbar: NextPage = () => {
  const [open, setOpen] = useState<boolean>(false);

  const handleOpenModal = () => {
    setOpen(true);
  };
  const handleCloseModal = () => {
    setOpen(!open);
  };

  return (
    <>
      <Navmodal
        isOpen={open}
        handleCloseModal={handleCloseModal}
        handleOpenModal={handleOpenModal}
      />
      <div className="px-4 bg-white shadow py-5">
        <div className="flex items-center justify-between">
          <span onClick={() => handleOpenModal()}>
            <FaBars />
          </span>

          <h1 className="font-bold">Udemy</h1>
          <div className="flex gap-4">
            <FaSearch />
            <FaCartPlus />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
