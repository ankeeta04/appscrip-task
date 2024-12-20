import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import ProductGrid from "../components/ProductGrid";
import Footer from "../components/Footer";

export default function Page() {
  return (
    <div>
      <Header />
      <main className="flex">
        <Sidebar />
        <ProductGrid />
      </main>
      <Footer />
    </div>
  );
}
