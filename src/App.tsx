import List from "./components/List/List";
import {fetchCountries} from "./features/countries/countriesSlice";
import {useDispatch} from "react-redux";
import {AppDispatch} from "./app/store";
import {useEffect, useState} from "react";

const App = () => {
  const [offset, setOffset] = useState(0);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchCountries());
  }, [])

  return (
    <div className="App">
      <List offset={offset}/>
      <button onClick={() => setOffset(offset+10)}></button>
    </div>
  );
}

export default App;
