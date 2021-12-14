import { BrowserRouter, Switch, Route } from "react-router-dom";
import UserContext from "./contexts/UserContext";
import { useState } from "react";
import HomePage from "./components/HomePage";
import LoginPage from "./components/LoginPage";
import LogonPage from "./components/LogonPage";
import DetailsPage from "./components/DetailsPage";
import NewSubscriptionPage from "./components/NewSubscriptionPage";
import SubscriptionPage from "./components/SubscriptionPage";

function App() {
  const storedUser = JSON.parse(localStorage.getItem("storedUser"));
  const [user, setUser] = useState(storedUser);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <HomePage></HomePage>
          </Route>
          <Route path="/sign-in" exact>
            <LoginPage></LoginPage>
          </Route>
          <Route path="/sign-up" exact>
            <LogonPage></LogonPage>
          </Route>
          <Route path="/details" exact>
            <DetailsPage></DetailsPage>
          </Route>
          <Route path="/new-subscription/:subscriptionType" exact>
            <NewSubscriptionPage></NewSubscriptionPage>
          </Route>
          <Route path="/subscription" exact>
            <SubscriptionPage></SubscriptionPage>
          </Route>
        </Switch>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
