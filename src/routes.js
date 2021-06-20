import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import PrivateRoute from "./components/PrivateRoute";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Courses from "./pages/Courses";
import PageNotFound from "./pages/404";
import EnrolledCourses from "./pages/EnrolledCourses";

export default function Routes() {
  return (
    <Router>
      <Switch>
        <PrivateRoute path="/" component={Courses} exact/>
        <PrivateRoute path="/enrolled_courses" component={EnrolledCourses} exact/>
        <Route path="/login" component={Login} exact/>
        <Route path="/signup" component={Signup} exact/>
        <Route path="*" component={PageNotFound}/>
      </Switch>
    </Router>
  );
}
