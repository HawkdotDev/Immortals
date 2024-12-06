import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { products } from '@/lib/data/products';

const categories = [
  {
    id: 'vintage-punk',
    name: 'Vintage Punk',
    description: 'Classic punk aesthetics with a modern twist',
    image: 'https://images.unsplash.com/photo-1512331455279-c8ae8178f586?auto=format&fit=crop&q=80'
  },
  {
    id: 'modern-rebel',
    name: 'Modern Rebel',
    description: 'Contemporary streetwear with an edge',
    image: 'https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&fit=crop&q=80'
  },
  {
    id: 'street-luxe',
    name: 'Street Luxe',
    description: 'Luxury meets street culture',
    image: 'https://images.unsplash.com/photo-1523398002811-999ca8dec234?auto=format&fit=crop&q=80'
  }
];

export function Categories() {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-7xl mx-auto"
      >
        <h1 className="text-4xl font-bold mb-8">Shop by Category</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/categories/${category.id}`}
              className="group relative overflow-hidden rounded-lg"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="aspect-square"
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
                <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-6">
                  <h2 className="text-2xl font-bold mb-2">{category.name}</h2>
                  <p className="text-center text-sm opacity-90">{category.description}</p>
                  <p className="mt-4 text-sm">
                    {products.filter((p) => p.category === category.id).length} Products
                  </p>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </motion.div>
    </div>
  );
}