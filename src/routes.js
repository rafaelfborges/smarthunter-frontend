import {Router, Route, Switch} from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext"

import history from "./history";
import PrivateRoute from "./components/PrivateRoute";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Course from "./pages/Course";
import Courses from "./pages/Courses";
import PageNotFound from "./pages/404";
import EnrolledCourses from "./pages/EnrolledCourses";

export default function Routes() {
  return (
    <AuthProvider>
      <Router history={history}>
        <Switch>
          <PrivateRoute path="/" component={Courses} exact/>
          <PrivateRoute path="/course/:id" component={Course} exact/>
          <PrivateRoute path="/my-courses" component={EnrolledCourses} exact/>
          <Route path="/login" component={Login} exact/>
          <Route path="/signup" component={Signup} exact/>
          <Route path="*" component={PageNotFound}/>
        </Switch>
      </Router>
    </AuthProvider>
  );
}
