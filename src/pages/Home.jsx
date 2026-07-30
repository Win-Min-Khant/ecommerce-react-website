import { useEffect, useState } from "react";
import { fetchProducts } from "../api/productService";
import ProductCard from "../components/ProductCard";
import Hero from "../components/Hero.jsx";

function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts().then((data) => {
      setProducts(data);
      setLoading(false);
    });
  }, []);

  if (loading)
    return <div className="text-center mt-10">Loading Products...</div>;

  return (
    <div className="max-w-7xl mx-auto p-4">
      <Hero />
      <h2 className="text-2xl font-bold mb-6">Latest Arrivals</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
}

export default Home;
