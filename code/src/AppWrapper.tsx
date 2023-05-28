import App from "./App";
import { Provider } from "react-redux";
import { store } from "../src/Redux/store";

const AppWrapper = () => <Provider store={store}>{<App />}</Provider>;

export default AppWrapper;
