import {Redirect, Route} from "react-router-dom";
import {isAuth} from "../../utils/utils";
import PropTypes from "prop-types";
import {Modal} from "../modal/modal";

export const ProtectedRoute = ({children,...rest}) => {
  let isLoggedIn = isAuth();

  return (
    <Route
      {...rest}
      render={({location}) =>
        isLoggedIn ? (
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

Modal.propTypes = {
  children: PropTypes.element.isRequired,
  rest: PropTypes.array
}
