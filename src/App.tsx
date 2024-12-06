import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useStore } from './lib/store'; // Ensure the store is properly configured.
import { Navbar } from './components/layout/navbar';
import { Home } from './pages/home';
import { Products } from './pages/products';
import { Cart } from './pages/cart';
import { Categories } from './pages/categories';
import { Category } from './pages/category';
import { About } from './pages/about';

const App = () => {
  const theme = useStore((state) => state.theme) || 'light'; // Default theme fallback.

  return (
    <div className={`app ${theme}`}>
      <div className="min-h-screen bg-white dark:bg-black text-neutral-900 dark:text-neutral-50 transition-colors duration-300">
        <Router>
          <Navbar />
          <main className="pt-16">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/categories" element={<Categories />} />
              <Route path="/categories/:categoryId" element={<Category />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </main>
        </Router>
      </div>
    </div>
  );
}

export default App
