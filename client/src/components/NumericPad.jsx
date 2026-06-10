import { motion } from 'framer-motion';
import { Delete, X } from 'lucide-react';

const NumericPad = ({ onNumberAdd, onBackspace, onClear }) => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'C', 0, 'del'];

  return (
    <div className="grid grid-cols-3 gap-4 max-w-[280px] mx-auto">
      {numbers.map((num, i) => (
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          key={i}
          onClick={() => {
            if (num === 'C') onClear();
            else if (num === 'del') onBackspace();
            else onNumberAdd(num.toString());
          }}
          className={`
            w-16 h-16 rounded-full flex items-center justify-center text-2xl font-black transition-all
            ${num === 'C' ? 'bg-red-50 text-red-500 hover:bg-red-100' : 
              num === 'del' ? 'bg-gray-100 text-gray-500 hover:bg-gray-200' : 
              'bg-white border-2 border-gray-100 text-gray-800 hover:border-primary-500 hover:text-primary-500 shadow-sm'}
          `}
        >
          {num === 'del' ? <Delete className="w-6 h-6" /> : num}
        </motion.button>
      ))}
    </div>
  );
};

export default NumericPad;
