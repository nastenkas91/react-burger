import {Redirect, Route, useLocation} from "react-router-dom";
import {useSelector} from "../../utils/hooks";
import {FC, ReactNode} from "react";
import {TLocation} from "../../utils/types";

interface IProtectedRoute {
  children?: ReactNode,
  onlyAuth: boolean,
  path: string,
  exact?: boolean
}

export const ProtectedRoute: FC<IProtectedRoute> = ({children, onlyAuth,...rest}): JSX.Element => {
  const location = useLocation<TLocation>();
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
