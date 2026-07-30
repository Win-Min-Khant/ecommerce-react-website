import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchSingleProduct } from "../api/productService";

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);

    fetchSingleProduct(id).then((data) => {
      setProduct(data);
      setLoading(false);
    });
  }, [id]);

  if (loading)
    return <div className="text-center mt-20 text-xl">Loading...</div>;
  if (!product)
    return <div className="text-center mt-20 text-xl">Product not found.</div>;

  return (
    <div className="max-w-7xl mx-auto p-6 md:py-12">
      <button
        onClick={() => navigate(-1)}
        className="mb-6 text-indigo-600 hover:underline font-medium ring-purple-50 cursor-pointer"
      >
        &larr; Back
      </button>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-[400px] object-contain"
          />
        </div>

        <div className="space-y-6">
          <div>
            <span className="text-indigo-600 font-semibold uppercase tracking-wider text-sm">
              {product.category}
            </span>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
              {product.title}
            </h1>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-3xl font-bold text-gray-900">
              ${product.price}
            </span>
            <div className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm font-semibold">
              {product.rating.rate} ⭐ ({product.rating.count} reviews)
            </div>
          </div>

          <p className="text-gray-600 leading-relaxed">{product.description}</p>

          <button className="w-full md:w-auto px-8 py-3 bg-indigo-600 text-white rounded-lg font-bold hover:bg-indigo-700 transition shadow-lg cursor-pointer">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
