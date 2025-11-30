export interface MenuItem {
  id: number;
  name: string;
  price: number;
  category: string;
  type: "BoB" | "BoB India";
  image: string;
  description?: string;
}

export const menuItems: MenuItem[] = [
  // --- BoB Items (Reordered) ---

  // 1. THE BIG N' SPICY
  { id: 16, name: "BOB Crispy Chicken Tacos", price: 5.99, category: "THE BIG N' SPICY", type: "BoB", image: "/images/taco.jpg" },
  { id: 17, name: "BOB Lamb Tacos", price: 5.99, category: "THE BIG N' SPICY", type: "BoB", image: "/images/lambtaco.jpg" },
  { id: 18, name: "BOB Crispy Chicken Burger", price: 4.99, category: "THE BIG N' SPICY", type: "BoB", image: "/images/Crispy-chicken-burger.jpg" },
  { id: 19, name: "BOB Smash Lamb Burger", price: 4.99, category: "THE BIG N' SPICY", type: "BoB", image: "/images/lambburger.jpg" },
  { id: 20, name: "Extra Patty", price: 1.00, category: "THE BIG N' SPICY", type: "BoB", image: "/images/extra.jpg" },
  { id: 21, name: "Extra Cheese", price: 0.50, category: "THE BIG N' SPICY", type: "BoB", image: "/images/cheese.jpg" },

  // 2. COMBOS
  { id: 25, name: "4 Mexican Tacos Combo", description: "Includes Regular fries + Soft drink", price: 10.99, category: "COMBOS", type: "BoB", image: "/images/combo.jpg" },
  { id: 26, name: "2 Nashville Chicken Burgers Combo", description: "Includes Regular fries + Soft drink", price: 10.99, category: "COMBOS", type: "BoB", image: "/images/2nashville-combo.jpg" },
  { id: 27, name: "2 Tacos + 1 Chicken Burger Combo", description: "Includes Regular fries + Soft drink", price: 11.99, category: "COMBOS", type: "BoB", image: "/images/2tacos-combo.jpg" },

  // 3. FRYER'S CLUB
  { id: 1, name: "Chicken Strips (3 pcs)", price: 3.50, category: "FRYER'S CLUB", type: "BoB", image: "/images/3pc-chicken-strips.jpg" },
  { id: 2, name: "Chicken Strips (5 pcs)", price: 4.99, category: "FRYER'S CLUB", type: "BoB", image: "/images/5pc-chicken-strips.jpg" },
  { id: 3, name: "Chicken Strips (10 pcs)", price: 8.99, category: "FRYER'S CLUB", type: "BoB", image: "/images/10pc-chicken-strips.jpg" },
  { id: 4, name: "Chicken Wings (4 pcs)", price: 2.99, category: "FRYER'S CLUB", type: "BoB", image: "/images/4pc-wings.jpg" },
  { id: 5, name: "Chicken Wings (6 pcs)", price: 3.99, category: "FRYER'S CLUB", type: "BoB", image: "/images/wings.jpg" }, 
  { id: 6, name: "Chicken Wings (12 pcs)", price: 6.50, category: "FRYER'S CLUB", type: "BoB", image: "/images/12-pc-wings.jpg" },
  { id: 7, name: "Fries (Regular)", price: 0.99, category: "FRYER'S CLUB", type: "BoB", image: "/images/fries.jpg" },
  { id: 8, name: "Fries (Large)", price: 1.50, category: "FRYER'S CLUB", type: "BoB", image: "/images/large-fries.jpg" },

  // 4. SUNDAES
  { id: 22, name: "Lotus Biscoff Sundae", price: 3.99, category: "SUNDAES", type: "BoB", image: "/images/lotusbiscoffsundae.jpeg" },
  { id: 23, name: "Oreo Sundae", price: 3.99, category: "SUNDAES", type: "BoB", image: "/images/oreosundae.jpg" },
  { id: 24, name: "Kinder Bueno Sundae", price: 3.99, category: "SUNDAES", type: "BoB", image: "/images/kindersundae.jpg" },

  // 5. BEVERAGES
  { id: 9, name: "Lotus Biscoff Milkshake", price: 2.99, category: "BEVERAGES", type: "BoB", image: "/images/biscoff.jpg" },
  { id: 10, name: "Oreo Milkshake", price: 2.99, category: "BEVERAGES", type: "BoB", image: "/images/oreo.jpg" },
  { id: 11, name: "Kinder Bueno Milkshake", price: 2.99, category: "BEVERAGES", type: "BoB", image: "/images/kinder.jpg" },
  { id: 12, name: "Coke", price: 1.00, category: "BEVERAGES", type: "BoB", image: "/images/coke.jpg" },
  { id: 13, name: "Fanta", price: 1.00, category: "BEVERAGES", type: "BoB", image: "/images/fanta.jpg" },
  { id: 14, name: "Dr Pepper", price: 1.00, category: "BEVERAGES", type: "BoB", image: "/images/drpepper.jpg" },
  { id: 15, name: "Still Water", price: 1.00, category: "BEVERAGES", type: "BoB", image: "/images/water.jpg" },

  // --- BoB India Items (Unchanged) ---
  { id: 28, name: "Plain Dosa", price: 2.99, category: "DOSA-LICIOUS", type: "BoB India", image: "/images/plain-dosa.jpg" },
  { id: 29, name: "Onion Dosa", price: 3.99, category: "DOSA-LICIOUS", type: "BoB India", image: "/images/onion-dosa.jpg" },
  { id: 30, name: "Ghee Karam Dosa", price: 3.99, category: "DOSA-LICIOUS", type: "BoB India", image: "/images/gheedosa.jpg" },
  { id: 31, name: "Masala Dosa", price: 4.99, category: "DOSA-LICIOUS", type: "BoB India", image: "/images/masala-dosa.jpg" },
  { id: 32, name: "Egg Dosa", price: 5.99, category: "DOSA-LICIOUS", type: "BoB India", image: "/images/Egg-dosa.jpg" },
  { id: 33, name: "Paneer Butter Dosa", price: 5.99, category: "DOSA-LICIOUS", type: "BoB India", image: "/images/paneer-Butter-dosa.jpg" },
  { id: 34, name: "Extra Chutney", price: 0.50, category: "DOSA-LICIOUS", type: "BoB India", image: "/images/chutney.jpg" },

  { id: 35, name: "Vada Pav", price: 3.99, category: "WHAT THE PAV!", type: "BoB India", image: "/images/vadapav.jpg" },
  { id: 36, name: "Spl Vada Pav", price: 4.99, category: "WHAT THE PAV!", type: "BoB India", image: "/images/Spl-Vada-pav.jpg" },

  { id: 37, name: "Bonda", price: 3.99, category: "TIFFIN-TASTIC", type: "BoB India", image: "/images/bonda.jpg" },
  { id: 38, name: "Tawa Bonda", price: 5.99, category: "TIFFIN-TASTIC", type: "BoB India", image: "/images/Tawa-bonda.jpg" },
  { id: 39, name: "Idli", price: 2.99, category: "TIFFIN-TASTIC", type: "BoB India", image: "/images/idli.jpg" },
  { id: 40, name: "Ghee Karam Idli", price: 3.99, category: "TIFFIN-TASTIC", type: "BoB India", image: "/images/ghee-karam-idli.jpg" },
  { id: 41, name: "Tawa Idli", price: 4.99, category: "TIFFIN-TASTIC", type: "BoB India", image: "/images/tawa-idli.jpg" },
  { id: 42, name: "Extra Chutney", price: 0.50, category: "TIFFIN-TASTIC", type: "BoB India", image: "/images/chutney.jpg" }
];

export const getCategories = (type?: string) => {
  const filteredItems = type && type !== "All" 
    ? menuItems.filter(item => item.type === type)
    : menuItems;
  
  return [...new Set(filteredItems.map(item => item.category))];
};

export const getItemsByCategory = (category: string, type?: string) => {
  return menuItems.filter(item => {
    const matchesCategory = item.category === category;
    const matchesType = !type || type === "All" || item.type === type;
    return matchesCategory && matchesType;
  });
};

export const searchItems = (query: string, type?: string) => {
  const lowerQuery = query.toLowerCase();
  return menuItems.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(lowerQuery) || 
                          item.category.toLowerCase().includes(lowerQuery);
    const matchesType = !type || type === "All" || item.type === type;
    return matchesSearch && matchesType;
  });
};