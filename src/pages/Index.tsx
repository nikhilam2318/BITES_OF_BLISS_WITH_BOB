import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Menu from "@/components/Menu";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import FloatingActions from "@/components/FloatingActions";
import StatsSection from "@/components/StatsSection";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    // UPDATED: Added w-full, max-w-full, and overflow-x-hidden to the wrapper
    <main className="min-h-screen bg-background w-full max-w-full overflow-x-hidden relative">
      <Header />
      <Hero />
      <StatsSection />
      <Menu />
      <About />
      <Contact />
      <Footer />
      <CartDrawer />
      <FloatingActions />
    </main>
  );
};

export default Index;