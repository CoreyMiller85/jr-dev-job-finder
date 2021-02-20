import "./App.css";
import Listing from "./component/Listing";
import data from "./data/listings.json";

function App() {
  const listings = data.map((item) => {
    return (
      <Listing
        title={item.title}
        company={item.company}
        image={item.logo}
        location={item.location}
        jobType={item.jobType}
        desc={item.desc}
        link={item.link}
      />
    );
  });

  return <div className="App">{listings}</div>;
}

export default App;
