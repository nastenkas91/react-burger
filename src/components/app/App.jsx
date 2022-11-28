import {useEffect} from "react";
import {AppHeader} from "../app-header/app-header";
import {ConstructorPage} from "../../pages/constructor-page/constructor-page";
import {getIngredients} from "../../services/actions/ingredients";
import {useDispatch} from "react-redux";
import {Route, Switch} from "react-router-dom";
import {Login} from "../../pages/login/login";
import {Register} from "../../pages/register/register";

export function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getIngredients())
  }, [])

  return (
    <>
      <AppHeader />
      <Switch>
        <Route path={'/'} exact={true}>
          <ConstructorPage />
        </Route>
        <Route path={'/login'} exact={true}>
          <Login />
        </Route>
        <Route path={'/register'} exact={true}>
          <Register />
        </Route>
        <Route path={'/forgot-password'} exact={true}>
          <ConstructorPage />
        </Route>
        <Route path={'/reset-password'} exact={true}>
          <ConstructorPage />
        </Route>
        <Route path={'/profile'} exact={true}>
          <ConstructorPage />
        </Route>
        <Route path={'/ingredients/:id'} exact={true}>
          <ConstructorPage />
        </Route>
        <Route>
          <ConstructorPage />
        </Route>
      </Switch>
    </>
  );
}

