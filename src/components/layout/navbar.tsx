import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, Menu, X, Moon, Sun } from 'lucide-react';
import { Button } from '../ui/button';
import { useStore } from '@/lib/store';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { cart, theme, toggleTheme } = useStore();
  const cartItemsCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-black/80 backdrop-blur-lg border-b border-neutral-200 dark:border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold tracking-tighter">
              Fallen Divine
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/products" className="hover:text-neutral-600 dark:hover:text-neutral-300">
              Products
            </Link>
            <Link to="/categories" className="hover:text-neutral-600 dark:hover:text-neutral-300">
              Categories
            </Link>
            <Link to="/about" className="hover:text-neutral-600 dark:hover:text-neutral-300">
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
                  {theme === 'dark' ? <Sun /> : <Moon />}
                </motion.div>
              </AnimatePresence>
            </Button>

            <Link to="/cart" className="relative">
              <ShoppingCart className="w-6 h-6" />
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
                {isOpen ? <X /> : <Menu />}
              </Button>
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
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