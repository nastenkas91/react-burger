import {Redirect, Route} from "react-router-dom";
import {isAuth} from "../../utils/utils";

export const ProtectedRoute = ({children, ...rest}) => {
  let loggedin = isAuth();

  return (
    <Route
      {...rest}
      render={({location}) =>
        loggedin ? (
        children
      ) : (
        <Redirect
          to={{pathname: '/login',
          state: {from: location}}}
        />
        )}
      />
  )
}