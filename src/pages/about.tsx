import { motion } from "framer-motion";

export function About() {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-7xl mx-auto"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl font-bold mb-6">About Fallen Divines</h1>
            <div className="space-y-4 text-lg">
              <p>
                Founded in the heart of the underground scene, Fallen Divines
                represents the perfect fusion of punk rebellion and luxury
                fashion. Our mission is to create clothing that empowers
                individuals to express their unique identity through fashion.
              </p>
              <p>
                Each piece in our collection is carefully crafted to blend
                vintage punk aesthetics with modern sensibilities, creating
                timeless pieces that stand out in any setting.
              </p>
              <p>
                We believe in sustainable fashion and ethical manufacturing,
                ensuring that each item not only looks good but feels good to
                wear and own.
              </p>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1551232864-3f0890e580d9?auto=format&fit=crop&q=80"
              alt="About Fallen Divines"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
