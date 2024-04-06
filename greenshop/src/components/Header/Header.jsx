// @ts-nocheck
import React, { useState } from "react";
import Logo from "../../assets/Images/Logo.svg";
import { Link, NavLink } from "react-router-dom";
import { Modal } from "antd";
import Login from "../Ui/Auth/Login";

const Header = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalOpen2, setModalOpen2] = useState(false);

  const deleteUser = () => {
    localStorage.removeItem("token");
    setModalOpen2(false);
  };

  const modalCheck = (modalOpen) => {
    setModalOpen(modalOpen);
  };

  return (
    <header className="fixed top-0 w-full py-[25px] bg-white z-10">
      <div className="container mx-auto flex items-center justify-between">
        <Link to={"/"}>
          <img src={Logo} alt="Greenshop logo" />
        </Link>

        <nav className="hidden lg:flex">
          <ul className="flex items-center gap-x-[50px] text-base">
            <li className=" hover:border-b-2 border-[#46A358]">
              <NavLink to={"/"} className={"hover:font-bold"}>
                Home
              </NavLink>
            </li>
            <li className="hover:border-b-2 border-[#46A358]">
              <NavLink to={"/shop"} className={"hover:font-bold"}>
                Shop
              </NavLink>
            </li>
            <li className="hover:border-b-2 border-[#46A358]">
              <Link to={""} className={"hover:font-bold"}>
                Plant Care
              </Link>
            </li>
            <li className="hover:border-b-2 border-[#46A358]">
              <Link to={""} className={"hover:font-bold"}>
                Blog
              </Link>
            </li>
          </ul>
        </nav>

        <div className="flex gap-x-[30px] items-center">
          <i className="bx bx-search hidden md:flex"></i>
          <i className="bx bx-cart-alt hidden md:flex"></i>
          {localStorage.getItem("token") ? (
            <button
              onClick={() => setModalOpen2(true)}
              className="w-[100px] h-[35px] flex items-center justify-center bg-[#46a358] rounded-md text-white gap-1"
            >
              <i className="bx bx-log-out"></i>
              <span>Logout</span>
            </button>
          ) : (
            <button
              onClick={() => setModalOpen(true)}
              className="w-[100px] h-[35px] flex items-center justify-center bg-[#46a358] rounded-md text-white gap-1"
            >
              <i className="bx bx-log-in"></i>
              <span>Login</span>
            </button>
          )}
        </div>

        <Modal
          title={null}
          centered
          open={modalOpen2}
          footer={null}
          onCancel={() => setModalOpen2(false)}
        >
          <h3 className="text-center font-bold text-xl mb-5">
            Are you sure to logout?
          </h3>
          <div className="flex items-center gap-x-5 justify-center">
            <button
              onClick={() => setModalOpen2(false)}
              className="w-[100px] h-[35px] flex items-center border border-[#46a358] justify-center bg-[#ffffff] rounded-md text-[#46a358] gap-1"
            >
              No
            </button>
            <button
              onClick={() => deleteUser()}
              className="w-[100px] h-[35px] flex items-center justify-center bg-[#ff3939] rounded-md text-white gap-1"
            >
              Yes
            </button>
          </div>
        </Modal>

        <Modal
          title={null}
          centered
          open={modalOpen}
          footer={null}
          onCancel={() => setModalOpen(false)}
        >
          <Login modalStatus={modalCheck} />
        </Modal>
      </div>
    </header>
  );
};

export default Header;
