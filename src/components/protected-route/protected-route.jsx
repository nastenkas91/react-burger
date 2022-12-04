import {Redirect, Route, useLocation} from "react-router-dom";
import PropTypes from "prop-types";
import {Modal} from "../modal/modal";
import {useSelector} from "react-redux";

export const ProtectedRoute = ({children, onlyAuth,...rest}) => {
  const location = useLocation();
  const {isLoggedIn} = useSelector(state => state.loginReducer);
  const nextPage = location.state?.from || '/';

  if (onlyAuth) {
    return (
      <Route
        {...rest}
        render={({location}) =>
          isLoggedIn ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: '/login',
                state: {from: location}
              }}
            />
          )}
      />
    )
  } else {
    return (
      <Route
        {...rest}>
        {
          isLoggedIn ?
            <Redirect to={nextPage}/>
           :
            children
        }
      </Route>
    )
  }
}

Modal.propTypes = {
  children: PropTypes.element.isRequired,
  onlyAuth: PropTypes.bool.isRequired,
  rest: PropTypes.array
}
