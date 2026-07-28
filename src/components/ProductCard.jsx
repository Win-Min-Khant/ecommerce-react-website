import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 flex flex-col justify-between transition-all hover:shadow-md">
      <div className="h-48 overflow-hidden mb-4">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-contain"
        />
      </div>

      <div>
        <h2 className="font-semibold text-gray-800 line-clamp-1 mb-1">
          {product.title}
        </h2>
        <p className="text-indigo-600 font-bold text-lg mb-4">
          ${product.price}
        </p>
      </div>

      <div className="flex flex-col gap-2">
        <Link
          to={`/product/${product.id}`}
          className="w-full text-center py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium"
        >
          View Details
        </Link>

        <button
          onClick={() => console.log(`Added ${product.title} to cart`)}
          className="w-full py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors text-sm font-medium cursor-pointer"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
