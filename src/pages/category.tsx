import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ProductCard } from '@/components/product/product-card';
import { products } from '@/lib/data/products';

const categoryInfo = {
  'vintage-punk': {
    title: 'Vintage Punk',
    description: 'Classic punk aesthetics with a modern twist',
    image: 'https://images.unsplash.com/photo-1512331455279-c8ae8178f586?auto=format&fit=crop&q=80'
  },
  'modern-rebel': {
    title: 'Modern Rebel',
    description: 'Contemporary streetwear with an edge',
    image: 'https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&fit=crop&q=80'
  },
  'street-luxe': {
    title: 'Street Luxe',
    description: 'Luxury meets street culture',
    image: 'https://images.unsplash.com/photo-1523398002811-999ca8dec234?auto=format&fit=crop&q=80'
  }
};

export function Category() {
  const { categoryId } = useParams();
  const category = categoryInfo[categoryId as keyof typeof categoryInfo];
  const categoryProducts = products.filter(p => p.category === categoryId);

  if (!category) {
    return (
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Category Not Found</h1>
          <p className="text-neutral-600 dark:text-neutral-400">
            The category you're looking for doesn't exist.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-7xl mx-auto"
      >
        <div className="relative h-64 mb-12 rounded-lg overflow-hidden">
          <img
            src={category.image}
            alt={category.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-4xl font-bold mb-2">{category.title}</h1>
              <p className="text-lg">{category.description}</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categoryProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {categoryProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-neutral-600 dark:text-neutral-400">
              No products found in this category.
            </p>
          </div>
        )}
      </motion.div>
    </div>
  );
}