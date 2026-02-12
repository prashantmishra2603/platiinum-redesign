import { Navbar } from '@/components/Navbar';
import { ProductsSection } from '@/components/ProductsSection';
import { Footer } from '@/components/Footer';

const Products = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24">
        <ProductsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Products;
