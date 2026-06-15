import Listing from './components/Listing';
import etsyRaw from './etsy.json';
import './App.css';

type MainImage = {
  url_570xN: string;
};

type ListingItem = {
  listing_id: number;
  url: string;
  title: string;
  currency_code: string;
  price: string;
  quantity: number;
  MainImage?: MainImage;
};


const etsy: ListingItem[] = etsyRaw as ListingItem[];

function App() {
  return (
    <div className="container">
      <Listing items={etsy} />
    </div>
  );
}

export default App;
