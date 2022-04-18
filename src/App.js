import { Provider } from "react-redux";
import store from "./Data/store";
import Page from "./Page";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h3>Redux Practice</h3>
      <p>&copy; Jayesh Shimpi</p>
      <Provider store={store}>
        <Page />
      </Provider>
    </div>
  );
}
