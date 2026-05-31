import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import user from "../assets/user.jpg";
import { IoSearchOutline } from "react-icons/io5";
import { navigation } from "../contants/Navigation";

const Header = () => {
  const location = useLocation();
  const removeSpace = location?.search?.slice(3)?.split("%20")?.join(" ")
  const [search, setSearch] = useState(removeSpace);
  const navigate = useNavigate();

  console.log("location", location);

  useEffect(() => {
    if (search){
      navigate(`/search?q=${search}`);
    }
  }, [search]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <header className="fixed top-0 w-full h-16 bg-black bg-opacity-50 z-40">
      <div className="container mx-auto px-3 sm:px-4 flex items-center h-full gap-3">
        <Link to="/">
          <img src={logo} alt="logo" width={110} className="sm:w-[120px]" />
        </Link>
        <nav className="hidden lg:flex items-center gap-1 ml-5">
          {navigation.map((nav, index) => {
            return (
              <div key={nav.label+"header"+index}>
                <NavLink
                  to={nav.href}
                  className={({ isActive }) =>
                    `px-2 hover:text-neutral-100 ${
                      isActive ? "text-neutral-100" : "text-neutral-400"
                    }`
                  }
                >
                  {nav.label}
                </NavLink>
              </div>
            );
          })}
        </nav>

        <div className="ml-auto flex items-center gap-3 sm:gap-5">
          <form className="flex items-center gap-2" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Search Movies..."
              className="bg-transparent px-4 py-1 outline-none border-none hidden lg:block text-white"
              onChange={(e) => setSearch(e.target.value)}
              value={search}
            />
            <button className="text-2xl text-white" aria-label="Search">
              <IoSearchOutline />
            </button>
          </form>

          <div
            className="w-8 h-8 rounded-full overflow-hidden active:scale-95 transition-transform cursor-pointer"
            aria-label="User Profile"
          >
            <img src={user} alt="user" className="w-full h-full" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
