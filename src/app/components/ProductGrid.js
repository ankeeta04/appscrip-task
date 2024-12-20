import ProductCard from "./ProductCard";

const products = [
  { id: 1, image: "/product1.jpg", name: "Product Name 1" },
  { id: 2, image: "/product2.jpg", name: "Product Name 2" },
  // Add more products
];

export default function ProductGrid() {
  return (
    <section className="w-3/4 p-4 grid grid-cols-3 gap-4">
      {products.map(product => (
        <ProductCard key={product.id} image={product.image} name={product.name} />
      ))}
    </section>
  );
}
