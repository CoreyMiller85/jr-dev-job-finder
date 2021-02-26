import "./App.css";
import ListingList from "./component/ListingList";
import data from "./data/listings.json";
import Header from "./component/Header";

function App() {
  return (
    <div>
      <Header />
      <ListingList data={data} />;
    </div>
  );
}

export default App;
