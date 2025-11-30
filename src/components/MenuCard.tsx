import { motion } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { MenuItem } from "@/data/menuData";
import { useCart } from "@/context/CartContext";

interface MenuCardProps {
  item: MenuItem;
  index: number;
}

const MenuCard = ({ item, index }: MenuCardProps) => {
  const { items, addItem, updateQuantity } = useCart();
  
  const cartItem = items.find(i => i.id === item.id);
  const quantity = cartItem?.quantity || 0;

  const handleAddToCart = () => {
    addItem(item);
  };

  const handleIncrement = () => {
    updateQuantity(item.id, quantity + 1);
  };

  const handleDecrement = () => {
    updateQuantity(item.id, quantity - 1);
  };

  return (
    <motion.div
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className="card-menu overflow-hidden group flex flex-row md:flex-col cursor-pointer bg-card rounded-2xl shadow-sm border border-border/50 hover:border-accent hover:shadow-[0_0_15px_rgba(212,175,55,0.4)] transition-all p-2 md:p-0 gap-3 md:gap-0"
    >
      {/* Image */}
      <div className="relative w-28 h-28 md:w-full md:h-52 flex-shrink-0 overflow-hidden rounded-xl md:rounded-none">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col justify-between md:p-4">
        <div>
          {/* Title - UPDATED: Bold and slightly larger to highlight */}
          <h3 className="font-serif text-lg font-bold text-foreground leading-tight mb-1 md:mb-2 line-clamp-2">
            {item.name}
          </h3>
          
          {/* Price - UPDATED: Darker Amber color and Heaviest font weight */}
          <span className="text-amber-600 font-black text-xl block mb-2">
            £{item.price.toFixed(2)}
          </span>

          {item.description && (
            <p className="text-muted-foreground text-xs mb-3 line-clamp-2">{item.description}</p>
          )}
        </div>

        {quantity === 0 ? (
          <motion.button
            onClick={handleAddToCart}
            className="w-full md:w-[90%] md:mx-auto flex items-center justify-center gap-2 py-2 md:py-2.5 bg-accent hover:bg-gold-dark text-accent-foreground rounded-xl text-sm font-bold shadow-sm transition-colors duration-300"
            whileTap={{ scale: 0.98 }}
          >
            <Plus className="w-4 h-4" />
            <span className="md:hidden">Add</span>
            <span className="hidden md:inline">Add to Cart</span>
          </motion.button>
        ) : (
          /* Quantity Selector */
          <div className="flex items-center justify-between px-0 md:px-2">
            <motion.button
              onClick={handleDecrement}
              className="w-10 h-8 flex items-center justify-center bg-transparent border-2 border-accent rounded-xl text-foreground hover:bg-accent/10 transition-colors"
              whileTap={{ scale: 0.9 }}
            >
              <Minus className="w-3 h-3 font-bold" />
            </motion.button>
            
            <span className="text-foreground font-bold text-lg w-6 text-center">
              {quantity}
            </span>
            
            <motion.button
              onClick={handleIncrement}
              className="w-10 h-8 flex items-center justify-center bg-transparent border-2 border-accent rounded-xl text-foreground hover:bg-accent/10 transition-colors"
              whileTap={{ scale: 0.9 }}
            >
              <Plus className="w-3 h-3 font-bold" />
            </motion.button>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default MenuCard;