// @ts-nocheck
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { v4 as uuidv4 } from "uuid";

const Login = ({ modalStatus }) => {
  const [passwordI, setPassword] = useState(true);
  const [auth, setAuth] = useState(true);
  const [loginForm, setLoginForm] = useState({
    username: "",
    password: "",
  });
  const [regForm, setRegForm] = useState({
    usernameR: "",
    email: "",
    passwordR: "",
  });

  const [user, setUser] = useState();

  const handleRegChange = (e) => {
    const { name, value } = e.target;
    setRegForm({ ...regForm, [name]: value });
  };

  const { usernameR, email, passwordR } = regForm;

  const closeModal = () => {
    modalStatus(false);
  };

  const registerUser = (e) => {
    e.preventDefault();
    setUser({ usernameR, email, passwordR });
    const newUser = { usernameR, email, passwordR };
    localStorage.setItem("user", JSON.stringify(newUser));
    console.log(newUser, user);
    localStorage.setItem("token", JSON.stringify(uuidv4()));
    closeModal();
    toast.success("User registered");
    regForm.usernameR = "";
    regForm.passwordR = "";
    regForm.email = "";
  };

  const LoginUser = (e) => {
    e.preventDefault();
    const user = localStorage.getItem("user");
    const objUser = JSON.parse(user);
    console.log(objUser);
    console.log();
    if (username != objUser.usernameR) {
      alert("Username is not vaild!");
    } else if (password != objUser.passwordR) {
      alert("Password is not vaild!");
    } else {
      alert("You are logged in!");
      localStorage.setItem("token", JSON.stringify(uuidv4()));
      loginForm.username = "";
      loginForm.password = "";
      closeModal();
    }
  };

  const { username, password } = loginForm;

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginForm({ ...loginForm, [name]: value });
  };

  return (
    <>
      {auth ? (
        <div>
          <div className="flex items-center justify-center gap-x-3 mb-10">
            <button
              onClick={() => setAuth(true)}
              className="text-xl font-medium text-[#46A358]"
            >
              Login
            </button>
            <span>|</span>
            <button
              onClick={() => setAuth(false)}
              className="text-xl font-medium text-[#3D3D3D]"
            >
              Register
            </button>
          </div>
          <form action="" onSubmit={LoginUser}>
            <div>
              <p className="mb-[14px] text-sm text-[#3D3D3D]">
                Enter your username and password to login.
              </p>
              <input
                value={loginForm.username}
                onChange={handleLoginChange}
                name="username"
                className="border border-[#EAEAEA] px-[14px] py-3 rounded-md outline-none focus:border-[#46A358] w-full placeholder:text-base text-[#A5A5A5] mb-4"
                type="text"
                placeholder="Username"
                required
              />
              <div className="relative">
                <input
                  value={loginForm.password}
                  onChange={handleLoginChange}
                  name="password"
                  className="border border-[#EAEAEA] px-[14px] py-3 rounded-md outline-none focus:border-[#46A358] w-full placeholder:text-base text-[#A5A5A5] mb-[14px]"
                  type={`${passwordI ? "password" : "text"}`}
                  placeholder="Password"
                  required
                />
                <i
                  onClick={() => setPassword(!passwordI)}
                  className={`bx ${
                    passwordI ? "bx-hide" : "bx-show"
                  } absolute right-3 text-xl top-[10px] cursor-pointer`}
                ></i>
              </div>
              <p className="text-sm text-[#46A358] text-right mb-[27px] cursor-pointer">
                Forgot password?
              </p>

              <button className="p-4 rounded-md bg-[#46A358] text-base font-bold text-center w-full text-white">
                Login
              </button>
              <ToastContainer />
            </div>
          </form>
        </div>
      ) : (
        <div>
          <div className="flex items-center justify-center gap-x-3 mb-10">
            <button
              onClick={() => setAuth(true)}
              className="text-xl font-medium text-[#3D3D3D]"
            >
              Login
            </button>
            <span>|</span>
            <button
              onClick={() => setAuth(false)}
              className="text-xl font-medium text-[#46A358]"
            >
              Register
            </button>
          </div>
          <form action="#" onSubmit={registerUser}>
            <div>
              <p className="mb-[14px] text-sm text-[#3D3D3D]">
                Enter your username and password to login.
              </p>
              <input
                className="border border-[#EAEAEA] px-[14px] py-3 rounded-md outline-none focus:border-[#46A358] w-full placeholder:text-base text-[#A5A5A5] mb-4"
                type="text"
                placeholder="Username"
                value={regForm.usernameR}
                name="usernameR"
                onChange={handleRegChange}
                required
              />
              <input
                className="border border-[#EAEAEA] px-[14px] py-3 rounded-md outline-none focus:border-[#46A358] w-full placeholder:text-base text-[#A5A5A5] mb-4"
                type="email"
                placeholder="almamun_uxui@outlook.com"
                value={regForm.email}
                onChange={handleRegChange}
                name="email"
                required
              />
              <div className="relative">
                <input
                  className="border border-[#EAEAEA] px-[14px] py-3 rounded-md outline-none focus:border-[#46A358] w-full placeholder:text-base text-[#A5A5A5] mb-[14px]"
                  type={`${passwordI ? "password" : "text"}`}
                  placeholder="Password"
                  value={regForm.passwordR}
                  onChange={handleRegChange}
                  name="passwordR"
                  required
                />
                <i
                  onClick={() => setPassword(!passwordI)}
                  className={`bx ${
                    passwordI ? "bx-hide" : "bx-show"
                  } absolute right-3 text-xl top-[10px] cursor-pointer`}
                ></i>
                <div className="relative">
                  <input
                    className="border border-[#EAEAEA] px-[14px] py-3 rounded-md outline-none focus:border-[#46A358] w-full placeholder:text-base text-[#A5A5A5] mb-10"
                    type={`${passwordI ? "password" : "text"}`}
                    placeholder="Confirm Password"
                    required
                  />
                  <i
                    onClick={() => setPassword(!passwordI)}
                    className={`bx ${
                      passwordI ? "bx-hide" : "bx-show"
                    } absolute right-3 text-xl top-[10px] cursor-pointer`}
                  ></i>
                </div>
              </div>

              <button className="p-4 rounded-md bg-[#46A358] text-base font-bold text-center w-full text-white">
                Register
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default Login;
