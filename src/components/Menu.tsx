import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X, Filter } from "lucide-react";
import { getCategories, getItemsByCategory, searchItems } from "@/data/menuData";
import MenuCard from "./MenuCard";
import MobileFilterSheet from "./MobileFilterSheet";

const Menu = () => {
  const [isBoB, setIsBoB] = useState(false); // false = BoB India (default), true = BoB
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const currentType = isBoB ? "BoB" : "BoB India";
  const categories = ["All", ...getCategories(currentType)];

  const getFilteredItems = () => {
    if (searchQuery.trim()) {
      return searchItems(searchQuery, currentType);
    }
    
    if (activeCategory === "All") {
      const allCategories = getCategories(currentType);
      return allCategories.flatMap(cat => getItemsByCategory(cat, currentType));
    }
    
    return getItemsByCategory(activeCategory, currentType);
  };

  const filteredItems = getFilteredItems();
  
  // Group items by category for display
  const groupedItems = filteredItems.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {} as Record<string, typeof filteredItems>);

  const handleTypeToggle = () => {
    setIsBoB(!isBoB);
    setActiveCategory("All");
    setSearchQuery("");
  };

  return (
    <section id="menu" className="section-padding">
      <div className="container-narrow mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <span className="text-accent font-medium tracking-widest uppercase text-sm mb-4 block">
            Explore
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-foreground mb-4">
            Our Menu
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover our carefully crafted fusion dishes, from classic English bites to authentic Indian street food
          </p>
        </motion.div>

        {/* Desktop Controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="hidden md:block"
        >
          {/* Search Bar - Row 1 */}
          <div className="max-w-xl mx-auto mb-6">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search menu items..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-12 py-4 bg-card border border-border rounded-2xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-1 hover:bg-secondary rounded-full transition-colors"
                >
                  <X className="w-4 h-4 text-muted-foreground" />
                </button>
              )}
            </div>
          </div>

          {/* Category Pills + Toggle - Row 2 */}
          <div className="flex items-center gap-4 mb-12">
            {/* Category Pills - Scrollable */}
            <div 
              ref={scrollRef}
              className="flex-1 overflow-x-auto scrollbar-hide"
            >
              <div className="flex gap-2 pb-2">
                {categories.map((category) => (
                  <motion.button
                    key={category}
                    onClick={() => {
                      setActiveCategory(category);
                      setSearchQuery("");
                    }}
                    className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300 ${
                      activeCategory === category
                        ? "bg-accent text-accent-foreground shadow-soft"
                        : "bg-secondary text-secondary-foreground hover:bg-muted"
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {category}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* SLIDING TOGGLE SWITCH (Desktop) */}
            <div className="flex-shrink-0">
               <div 
                 className="bg-secondary p-1 rounded-full inline-flex relative shadow-inner h-11 w-52 items-center cursor-pointer"
                 onClick={handleTypeToggle}
               >
                 <motion.div
                   className="absolute top-1 bottom-1 bg-accent rounded-full shadow-md z-0"
                   initial={false}
                   animate={{ 
                     x: isBoB ? "100%" : "0%",
                     width: "50%"
                   }}
                   transition={{ type: "spring", stiffness: 300, damping: 25 }}
                 />
                 
                 <span className={`flex-1 text-center relative z-10 text-sm font-bold transition-colors duration-200 ${!isBoB ? 'text-accent-foreground' : 'text-muted-foreground'}`}>
                   BoB India
                 </span>
                 <span className={`flex-1 text-center relative z-10 text-sm font-bold transition-colors duration-200 ${isBoB ? 'text-accent-foreground' : 'text-muted-foreground'}`}>
                   BoB
                 </span>
               </div>
            </div>
          </div>
        </motion.div>

        {/* Mobile Controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="md:hidden space-y-4 mb-8"
        >
          {/* Search + Filter Row */}
          <div className="flex items-center gap-3">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-10 py-3 bg-card border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all text-sm"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-1 hover:bg-secondary rounded-full transition-colors"
                >
                  <X className="w-3 h-3 text-muted-foreground" />
                </button>
              )}
            </div>
            <button
              onClick={() => setIsFilterOpen(true)}
              className="w-12 h-12 bg-accent hover:bg-gold-dark rounded-xl flex items-center justify-center transition-colors group relative"
              title="Filter by category"
            >
              <Filter className="w-5 h-5 text-accent-foreground" />
              {/* Tooltip */}
              <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-foreground text-primary-foreground text-xs px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                Filter by category
              </span>
            </button>
          </div>

          {/* SLIDING TOGGLE SWITCH (Mobile) - Centered */}
          <div className="flex justify-center">
             <div 
               className="bg-secondary p-1 rounded-full inline-flex relative shadow-inner h-11 w-52 items-center cursor-pointer"
               onClick={handleTypeToggle}
             >
               <motion.div
                 className="absolute top-1 bottom-1 bg-accent rounded-full shadow-md z-0"
                 initial={false}
                 animate={{ 
                   x: isBoB ? "100%" : "0%",
                   width: "50%"
                 }}
                 transition={{ type: "spring", stiffness: 300, damping: 25 }}
               />
               
               <span className={`flex-1 text-center relative z-10 text-sm font-bold transition-colors duration-200 ${!isBoB ? 'text-accent-foreground' : 'text-muted-foreground'}`}>
                 BoB India
               </span>
               <span className={`flex-1 text-center relative z-10 text-sm font-bold transition-colors duration-200 ${isBoB ? 'text-accent-foreground' : 'text-muted-foreground'}`}>
                 BoB
               </span>
             </div>
          </div>
        </motion.div>

        {/* Menu Items */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${currentType}-${activeCategory}-${searchQuery}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {filteredItems.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-muted-foreground text-lg">No items found</p>
              </div>
            ) : (
              Object.entries(groupedItems).map(([category, items]) => (
                <div key={category} className="mb-12 last:mb-0">
                  <motion.h3
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="font-serif text-xl md:text-2xl font-semibold text-foreground mb-6 flex items-center gap-4"
                  >
                    <span className="w-8 md:w-12 h-0.5 bg-accent" />
                    {category}
                  </motion.h3>

                  {/* 4 Cards per row on desktop (lg:grid-cols-4) */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                    {items.map((item, index) => (
                      <MenuCard key={item.id} item={item} index={index} />
                    ))}
                  </div>
                </div>
              ))
            )}
          </motion.div>
        </AnimatePresence>

        {/* Mobile Filter Sheet - Categories only */}
        <MobileFilterSheet
          isOpen={isFilterOpen}
          onClose={() => setIsFilterOpen(false)}
          categories={categories}
          activeCategory={activeCategory}
          onSelectCategory={(cat) => {
            setActiveCategory(cat);
            setSearchQuery("");
          }}
        />
      </div>
    </section>
  );
};

export default Menu;