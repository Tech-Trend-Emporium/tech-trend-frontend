import { useEffect } from "react";
import { CarouselComponent, ItemCard, Button } from "../components";
import { useAuth } from "../hooks";


export const HomePage = () => {
  const user = useAuth();

  useEffect(() => {
    console.log(user);
  }, [user]);

  // Categories items (same as before)
  const mockItems = [
    {
      id: 1,
      title: "Apple AirPods Max Silver",
      price: 549,
      image:
        "https://cdn.dummyjson.com/product-images/mobile-accessories/apple-airpods-max-silver/1.webp",
    },
    {
      id: 2,
      title: "Samsung Galaxy S7",
      price: 299,
      image:
        "https://cdn.dummyjson.com/product-images/smartphones/samsung-galaxy-s7/1.webp",
    },
    {
      id: 3,
      title: "iPhone X",
      price: 899,
      image: "https://cdn.dummyjson.com/product-images/smartphones/iphone-x/2.webp",
    },
  ];

  // Latest arrivals with your provided data
  const latestArrivals = [
    {
      id: 127,
      title: "Oppo K1",
      price: 299.99,
      image: "https://cdn.dummyjson.com/product-images/smartphones/oppo-k1/1.webp",
    },
    {
      id: 128,
      title: "Realme C35",
      price: 149.99,
      image: "https://cdn.dummyjson.com/product-images/smartphones/realme-c35/1.webp",
    },
    {
      id: 129,
      title: "Realme X",
      price: 299.99,
      image: "https://cdn.dummyjson.com/product-images/smartphones/realme-x/1.webp",
    },
    {
      id: 130,
      title: "Realme XT",
      price: 349.99,
      image: "https://cdn.dummyjson.com/product-images/smartphones/realme-xt/1.webp",
    },
  ];

  return (
    <div className="pb-2">
      <CarouselComponent />

      {/* Categories section */}
      <div className="mt-12 mb-12">
        <h2 className="text-2xl font-semibold text-center text-gray-800 dark:text-gray-200">
          Categories
        </h2>
        <span className="text-gray-600 dark:text-gray-400 flex justify-center mt-2 px-4 text-center">
          These are all the categories available in Tech Trend Emporium.
          <br />
          Select one to explore the products within that category.
        </span>
        <div className="flex justify-center">
          <Button
            variant="outline"
            className="mt-4 hover:cursor-pointer"
          >
            Shop All
          </Button>
        </div>

        <div className="w-full mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6 md:px-12 mx-auto max-w-6xl">
          {mockItems.map((item) => (
            <ItemCard
              key={item.id}
              image={item.image}
              title={item.title}
              price={item.price}
            />
          ))}
        </div>
      </div>

      {/* Latest Arrivals section */}
      <div className="mt-12 mb-12">
        <h2 className="text-2xl font-semibold text-center text-gray-800 dark:text-gray-200">
          Our Latest Arrivals
        </h2>
        <span className="text-gray-600 dark:text-gray-400 flex justify-center mt-2 px-4 text-center">
          Check out the newest products recently added to Tech Trend Emporium.
        </span>

        <div className="mb-6 mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6 md:px-12 mx-auto max-w-7xl">
          {latestArrivals.map((item) => (
            <ItemCard
              key={item.id}
              image={item.image}
              title={item.title}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;