import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import Menu from "../../assets/icons/menu.svg";
import X from "../../assets/icons/x.svg";
import Sun from "../../assets/icons/sun.svg";
import Moon from "../../assets/icons/moon.svg";
import logo from "../../assets/icons/TR.svg";

import { Button } from "../ui/button";
import { useStore } from "@/lib/store";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { cart, theme, toggleTheme } = useStore();
  const cartItemsCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  const strokeColor = theme === "light" ? "#000" : "#fff";

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-black/80 backdrop-blur-lg border-b border-neutral-200 dark:border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <img src={logo} alt="" className="h-[22px] w-[22px] mr-2" />
            <Link to="/" className="text-2xl font-bold tracking-tighter">
              Fallen Divines
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/products"
              className="hover:text-neutral-600 dark:hover:text-neutral-300"
            >
              Products
            </Link>
            <Link
              to="/categories"
              className="hover:text-neutral-600 dark:hover:text-neutral-300"
            >
              Categories
            </Link>
            <Link
              to="/about"
              className="hover:text-neutral-600 dark:hover:text-neutral-300"
            >
              About
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="relative"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={theme}
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 20, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {theme === "dark" ? (
                    <img src={Sun} alt="" className="h-6 w-6" />
                  ) : (
                    <img src={Moon} alt="" className="h-6 w-6" />
                  )}
                </motion.div>
              </AnimatePresence>
            </Button>

            <Link to="/cart" className="relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke={strokeColor}
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-shopping-cart"
              >
                <circle cx="8" cy="21" r="1" />
                <circle cx="19" cy="21" r="1" />
                <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
              </svg>
              {cartItemsCount > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center"
                >
                  {cartItemsCount}
                </motion.span>
              )}
            </Link>

            <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? (
                  <img src={X} alt="" className="h-6 w-6" />
                ) : (
                  <img src={Menu} alt="" className="h-6 w-6" />
                )}
              </Button>
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                to="/products"
                className="block px-3 py-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800"
              >
                Products
              </Link>
              <Link
                to="/categories"
                className="block px-3 py-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800"
              >
                Categories
              </Link>
              <Link
                to="/about"
                className="block px-3 py-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800"
              >
                About
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
