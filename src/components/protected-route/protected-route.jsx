import {Redirect, Route} from "react-router-dom";
import {isAuth} from "../../utils/utils";
import PropTypes from "prop-types";
import {Modal} from "../modal/modal";
import {useSelector} from "react-redux";

export const ProtectedRoute = ({children, ...rest}) => {
  let isLoggedIn = isAuth();
  //const {isLoggedIn} = useSelector(state => state.loginReducer)
  const nextPage = location.state?.from.pathname || '/';

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
