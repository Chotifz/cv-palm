import React, { useRef } from "react";
import ProductList from "./components/ProductList";
import { useFetchProduct } from "../../api/useProducts";
import Carousel from "../../components/Carousel";
import Navbar from "./components/Navbar";

const Home = () => {
  const aboutRef = useRef(null);

  const handleScrollToAbout = () => {
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const { data, isLoading, isError } = useFetchProduct();
  const products = data?.data;
  console.log(products);

  return (
    <div>
      <Navbar handleScrollToAbout={handleScrollToAbout} />
      <Carousel />
      <div className="flex flex-col items-center mt-10">
        <h1 className="text-3xl font-bold mb-8">Products</h1>
        {isLoading ? (
          <div>Loading...</div>
        ) : isError ? (
          <div>Error fetching products.</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products && products.length > 0 ? (
              products.map((product) => (
                <ProductList
                  key={product.id}
                  id={product.id}
                  name={product.name}
                  price={product.price}
                  description={product.description}
                  image={product.image}
                />
              ))
            ) : (
              <div>No Products available</div>
            )}
          </div>
        )}
      </div>
      <div
        ref={aboutRef}
        className="flex flex-col items-center mt-20 p-8 bg-base-200"
      >
        <h2 className="text-3xl font-bold mb-4">About Us</h2>
        <p className="text-lg text-center max-w-prose">
          Welcome to PALM INDO, your premier destination for electronic
          equipment rentals. We offer a wide range of high-quality electronics
          for all your needs, whether it's for personal use, corporate events,
          or any other occasion. Our mission is to provide top-notch products
          and exceptional service to ensure your satisfaction.
        </p>
      </div>
    </div>
  );
};

export default Home;
