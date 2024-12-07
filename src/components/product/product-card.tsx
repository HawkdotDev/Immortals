import { motion } from 'framer-motion';
import { Button } from '../ui/button';
import { useStore, type Product } from '@/lib/store';
import ShoppingCart from "../../assets/icons/shopping-cart.svg";
import Heart from "../../assets/icons/heart.svg";
interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useStore();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="group relative bg-white dark:bg-neutral-900 rounded-lg shadow-lg overflow-hidden"
    >
      <div className="aspect-square overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="absolute top-4 right-4">
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full bg-white/80 dark:bg-black/80 backdrop-blur-sm"
        >
          <img src={Heart} alt="" className="h-4 w-4" />
        </Button>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
        <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
          {product.description}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold">${product.price}</span>
          <Button
            onClick={() => addToCart(product)}
            className="flex items-center space-x-2"
          >
            <img src={ShoppingCart} alt="" className="h-4 w-4" />
            <span>Add to Cart</span>
          </Button>
        </div>
      </div>
    </motion.div>
  );
}