import React from "react";
import { Route, Switch } from "react-router-dom";

import AccomadationClaim from "./pages/accomadationClaim";
import AdminPage from "./pages/adminPage";
import BorrowFund from "./pages/borrowFund";
import BudgetPage from "./pages/budgetPage";
import ClaimPage from "./pages/claimPage";
import CurrentBudget from "./components/currentBudget";
import DayOneFeed from "./components/dayOneFeed";
import FeedClaim from "./pages/feedClaim";
import FundedStaff from "./pages/fundedStaff";
import Login from "./pages/login";
import Main from "./pages/main";
import MakeClaim from "./pages/makeClaim";
import NewBudget from "./pages/newBudget";
import NominateStaff from "./pages/nominateStaff";
import NominatedStaff from "./pages/nominatedStaff";
import SignUp from "./pages/signup";
import StaffPage from "./pages/staffPage";
import TrackClaim from "./pages/trackClaim";
import PreviousBudget from "./pages/previousBudget";
import TransportClaim from "./components/transportClaim";
import ViewClaims from "./pages/viewClaims";

import "./styles/admin.css";
import "./styles/claim.css";
import "./styles/modal.css";
import "./styles/style.css";
import Dropdown from "./common/Dropdown";

function App() {
  return (
    <>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/staff" component={StaffPage} />
        <Route path="/makeClaim" component={MakeClaim} />
        <Route path="/nominateStaff" component={NominateStaff} />
        <Route path="/nominatedStaff" component={NominatedStaff} />
        <Route path="/fundedStaff" component={FundedStaff} />
        <Route path="/dropdown" component={Dropdown} />
        <Route path="/claim" component={ClaimPage} />
        <Route path="/budget" component={BudgetPage} />
        <Route path="/accomodationClaim" component={AccomadationClaim} />
        <Route path="/feedClaim" component={FeedClaim} />
        <Route path="/dayFeed" component={DayOneFeed} />
        <Route path="/transportClaim" component={TransportClaim} />
        <Route path="/viewClaims" component={ViewClaims} />
        <Route path="/trackClaim" component={TrackClaim} />
        <Route path="/previousBudget" component={PreviousBudget} />
        <Route path="/currentBudget" component={CurrentBudget} />
        <Route path="/newBudget" component={NewBudget} />
        <Route path="/borrowFund" component={BorrowFund} />
        <Route path="/sign-up" component={SignUp} />
        <Route path="/admin" component={AdminPage} />
        <Route path="/" component={Main} />
      </Switch>
    </>
  );
}

export default App;
