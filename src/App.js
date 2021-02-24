import "./App.css";
import ListingList from "./component/ListingList";
import data from "./data/listings.json";

function App() {
  return <ListingList data={data} />;
}

export default App;
