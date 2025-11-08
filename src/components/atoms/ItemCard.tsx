interface CardProps {
  image: string;
  title: string;
  price?: number; 
  ctaText?: string;
}

export const ItemCard = ({ image, title, price, ctaText }: CardProps) => {
  const isPriceVisible = typeof price === "number" && !Number.isNaN(price);
  return (
    <div
      className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden 
                  hover:shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700 
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

      <div className="p-4 flex flex-col items-center gap-2">
        <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-200 text-center">
          {title}
        </h3>

        {isPriceVisible ? (
          <span className="text-lg font-bold text-blue-600 dark:text-blue-400">
            ${price!.toFixed(2)}
          </span>
        ) : (
          <span className="text-xs uppercase tracking-wide bg-blue-600/10 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full">
            {ctaText ?? "Explore"}
          </span>
        )}
      </div>
    </div>
  );
};