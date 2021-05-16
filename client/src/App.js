import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import UserDetails from "./components/UserDetails";
import UserTransactions from "./components/UserTransactions";
import Transfer from "./components/Transfer";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/allUsers">
          <UserDetails />
        </Route>
        <Route path="/allTransactions">
          <UserTransactions />
        </Route>
        <Route path="/transfer">
          <Transfer />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
