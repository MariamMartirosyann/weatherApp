import "./App.scss";
import CurrentWeather from "./component/CurrentWeather/CurrentWeather";
import ForDaysData from "./component/ForDaysData/forDaysData";
import Header from "./component/Header/Header";
import Hourly from "./component/Hourly/Hourly";
import store from "./redux/store"
import { Provider } from "react-redux";

function App() {
  return (
   
  
    <Provider store={store}>
      <Header />
      <div className="currentDiv">
        <CurrentWeather />
        <Hourly/>
      </div>
      <ForDaysData/>
      </Provider>
    
    
  );
}

export default App;
