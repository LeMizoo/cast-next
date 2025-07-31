import { motion } from 'framer-motion';

export default function FeaturedMediaCard({ item, delay }) {
  return (
    <motion.div
      className="inline-block w-72 bg-white rounded-lg shadow-lg p-4 snap-center"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
    >
      <img
        src={item.imageUrl}
        alt={item.title}
        className="rounded-md mb-3 object-cover w-full h-40"
      />
      <h3 className="text-lg font-serif text-gray-700 tracking-wide">
        {item.title}
      </h3>
      <p className="text-sm italic text-gray-500">{item.author}</p>
    </motion.div>
  );
}