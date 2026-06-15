interface MainImage {
  url_570xN: string;
}

export interface ListingItem {
  listing_id: number;
  url: string;
  title: string;
  currency_code: string;
  price: string;
  quantity: number;
  MainImage?: MainImage;
}

interface ListingProps {
  items?: ListingItem[];
}

const Listing = ({ items = [] }: ListingProps) => {
  const formatTitle = (title: string): string => {
    return title.length > 50
      ? `${title.slice(0, 50)}…`
      : title;
  };

  const formatPrice = (
    price: string,
    currency: string
  ): string => {
    switch (currency) {
      case 'USD':
        return `$${price}`;

      case 'EUR':
        return `€${price}`;

      case 'GBP':
        return `£${price}`;

      default:
        return `${currency} ${price}`;
    }
  };

  const getStockClass = (
    quantity: number
  ): string => {
    if (quantity <= 10) {
      return 'stock-low';
    }

    if (quantity <= 20) {
      return 'stock-medium';
    }

    return 'stock-high';
  };

  const getStockText = (
    quantity: number
  ): string => {
    return `${quantity} left`;
  };

  const validItems = items.filter(
    (item) =>
      item.MainImage &&
      item.MainImage.url_570xN
  );

  return (
    <div className="product-grid">
      {validItems.map((item) => (
        <a
          key={item.listing_id}
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className="product-card"
        >
          <img
            src={item.MainImage!.url_570xN}
            alt={item.title}
            className="product-image"
          />

          <div className="product-info">
            <h3 className="product-title">
              {formatTitle(item.title)}
            </h3>

            <div className="price-container">
              <div className="product-price">
                {formatPrice(
                  item.price,
                  item.currency_code
                )}
              </div>

              <span
                className={`stock-badge ${getStockClass(
                  item.quantity
                )}`}
              >
                {getStockText(item.quantity)}
              </span>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
};

export default Listing;
