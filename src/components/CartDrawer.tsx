import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Minus, Plus, Trash2, ShoppingBag, MessageCircle } from "lucide-react";
import { useCart } from "@/context/CartContext";

// --- CONFIGURATION ---
const WHATSAPP_NUMBER = "447350739707"; 
const CURRENCY_SYMBOL = "£";
// ---------------------

const CartDrawer = () => {
  const { items, isOpen, setIsOpen, updateQuantity, clearCart, totalPrice, removeItem } = useCart();
  const [showConfirmation, setShowConfirmation] = useState(false);

  // --- LOGIC: Handle Browser Back Button ---
  useEffect(() => {
    if (isOpen) {
      window.history.pushState({ cartOpen: true }, "");

      const handlePopState = () => {
        if (showConfirmation) {
          setShowConfirmation(false); // Close popup if open
        } else {
          setIsOpen(false); // Close cart if popup is closed
        }
      };

      window.addEventListener("popstate", handlePopState);

      return () => {
        window.removeEventListener("popstate", handlePopState);
      };
    }
  }, [isOpen, setIsOpen, showConfirmation]);

  // Step 1: User clicks "Order", show popup
  const handleOrderClick = () => {
    if (items.length === 0) return;
    setShowConfirmation(true);
  };

  // Step 2: User confirms, send message
  const confirmOrder = () => {
    const orderDetails = items
      .map((item) => `${item.quantity}x ${item.name} (${CURRENCY_SYMBOL}${(item.price * item.quantity).toFixed(2)})`)
      .join("\n");

    const message = `New Order from Bites of Bliss with BOB:\n\n${orderDetails}\n\nTotal: ${CURRENCY_SYMBOL}${totalPrice.toFixed(2)}`;
    const encodedMessage = encodeURIComponent(message);
    
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
    
    setShowConfirmation(false); // Close popup after sending
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-foreground/40 backdrop-blur-sm z-[150]"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-background shadow-2xl z-[200] flex flex-col border-l border-border"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-5 border-b border-border bg-background/50 backdrop-blur-sm">
              <div className="flex items-center gap-3">
                <ShoppingBag className="w-5 h-5 text-accent" />
                <h2 className="font-serif text-xl font-bold text-foreground">Your Cart</h2>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-secondary rounded-full transition-colors"
              >
                <X className="w-5 h-5 text-foreground" />
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-5 bg-secondary/10">
              {items.length === 0 ? (
                <div className="text-center py-20 flex flex-col items-center justify-center h-full">
                  <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mb-6">
                    <ShoppingBag className="w-10 h-10 text-accent/50" />
                  </div>
                  <p className="text-foreground font-medium text-lg mb-2">Your cart is empty</p>
                  <p className="text-muted-foreground text-sm mb-8">Add some delicious items to get started!</p>
                  
                  {/* Empty State Button */}
                  <button
                    onClick={() => setIsOpen(false)}
                    className="px-8 py-3 bg-accent text-accent-foreground rounded-full font-bold shadow-soft hover:bg-yellow-400 transition-colors"
                  >
                    Start Ordering
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  {items.map((item) => (
                    <motion.div
                      key={item.id}
                      layout
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className="flex gap-4 bg-card rounded-xl p-3 shadow-sm border border-border/50"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-20 h-20 object-cover rounded-lg bg-secondary"
                      />
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-start mb-1">
                          <h3 className="font-bold text-foreground text-sm line-clamp-2 pr-2">{item.name}</h3>
                          <p className="text-amber-600 font-bold text-sm whitespace-nowrap">
                            {CURRENCY_SYMBOL}{(item.price * item.quantity).toFixed(2)}
                          </p>
                        </div>
                        
                        {/* Quantity Controls */}
                        <div className="flex items-center justify-between mt-3">
                          <div className="flex items-center gap-3 bg-secondary/50 rounded-lg p-1">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="w-7 h-7 flex items-center justify-center bg-background rounded-md shadow-sm text-foreground hover:text-accent transition-colors"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="font-bold text-sm w-4 text-center">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="w-7 h-7 flex items-center justify-center bg-background rounded-md shadow-sm text-foreground hover:text-accent transition-colors"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>
                          
                          <button
                            onClick={() => removeItem(item.id)}
                            className="p-2 text-muted-foreground hover:text-destructive transition-colors"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="p-5 border-t border-border bg-background space-y-4">
                <div className="flex items-center justify-between text-lg mb-2">
                  <span className="text-muted-foreground font-medium">Total</span>
                  <span className="font-sans text-3xl font-black text-foreground">
                    {CURRENCY_SYMBOL}{totalPrice.toFixed(2)}
                  </span>
                </div>

                {/* Primary: WhatsApp Order (Triggers Popup) */}
                <motion.button
                  onClick={handleOrderClick}
                  className="w-full py-4 bg-accent text-accent-foreground rounded-xl font-bold text-lg flex items-center justify-center gap-2 shadow-soft hover:bg-yellow-400 hover:shadow-[0_0_20px_rgba(255,193,7,0.5)] transition-all"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <MessageCircle className="w-6 h-6" />
                  Order via WhatsApp
                </motion.button>

                {/* Secondary: Clear Cart */}
                <button
                  onClick={clearCart}
                  className="w-full py-3 border-2 border-destructive text-destructive rounded-xl font-bold hover:bg-destructive hover:text-white transition-colors flex items-center justify-center gap-2"
                >
                  Clear Cart
                </button>
              </div>
            )}

            {/* --- CONFIRMATION POPUP --- */}
            <AnimatePresence>
              {showConfirmation && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 bg-black/60 backdrop-blur-sm z-[250] flex items-center justify-center p-4"
                >
                  <motion.div 
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.9, opacity: 0 }}
                    className="bg-background w-full max-w-sm rounded-2xl p-6 shadow-2xl border border-border"
                  >
                    <div className="text-center space-y-4">
                      <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mx-auto text-accent">
                        <MessageCircle className="w-6 h-6" />
                      </div>
                      <h3 className="text-xl font-serif font-bold text-foreground">Confirm Order</h3>
                      <p className="text-muted-foreground text-sm">
                        Order message will be sent via WhatsApp.
                      </p>
                      
                      <div className="flex gap-3 pt-2">
                        <button
                          onClick={() => setShowConfirmation(false)}
                          className="flex-1 py-3 border border-border rounded-xl font-bold text-foreground hover:bg-secondary transition-colors"
                        >
                          Cancel
                        </button>
                        <button
                          onClick={confirmOrder}
                          className="flex-1 py-3 bg-accent text-accent-foreground rounded-xl font-bold hover:bg-yellow-400 transition-colors shadow-sm"
                        >
                          Confirm
                        </button>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>

          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartDrawer;