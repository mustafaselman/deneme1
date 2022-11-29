import {Provider} from "react-redux";
import {store} from "./redux";
import Router from "./config/router";
import { CssBaseline } from "@mui/material";

export default function App() {
return (
  <Provider store={store}>
      <CssBaseline/>
      <Router/>
  </Provider>

)
}