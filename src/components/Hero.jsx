const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16 px-6 rounded-2xl mb-10 shadow-xl text-center">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">
        Discover Your Style
      </h1>
      <p className="text-lg md:text-xl mb-8 opacity-90 max-w-2xl mx-auto">
        Explore our curated collection of premium products, designed to bring
        comfort and aesthetic excellence into your daily life.
      </p>
      <button className="bg-white cursor-pointer text-indigo-700 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition duration-300">
        Shop Now
      </button>
    </div>
  );
};

export default Hero;
