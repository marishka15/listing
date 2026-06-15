import Listing from './components/Listing';
import type { ListingItem } from './components/Listing';
import etsy from './etsy.json';
import './App.css';

function App() {
  return (
    <div className="container">
      <Listing items={etsy as ListingItem[]} />
    </div>
  );
}

export default App;
