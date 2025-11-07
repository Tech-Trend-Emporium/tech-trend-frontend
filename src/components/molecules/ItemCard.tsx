interface cardProps {
    image: string;
    title: string;
    price: number;
}

export function ItemCard({ image, title, price }: cardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden 
                    hover:shadow-lg 
                    hover:bg-gray-100 dark:hover:bg-gray-700 
                    transition-all duration-200 max-w-xs"
    >
      <div className="w-full h-48">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-contain p-2"
          loading="lazy"
        />
      </div>

      <div className="p-4 flex flex-col items-center">
        <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-2">
          {title}
        </h3>
        <span className="text-lg font-bold text-blue-600 dark:text-blue-400">
          ${price}
        </span>
      </div>
    </div>
  );
}
export default ItemCard;