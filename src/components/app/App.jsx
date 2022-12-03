import {AppHeader} from "../app-header/app-header";
import {ConstructorPage} from "../../pages/constructor-page/constructor-page";
import {Route, Switch} from "react-router-dom";
import {Login} from "../../pages/login/login";
import {Register} from "../../pages/register/register";
import {ForgotPassword} from "../../pages/forgot-password/forgot-password";
import {ResetPassword} from "../../pages/reset-password/reset-password";
import {Profile} from "../../pages/profile/profile";
import {ProtectedRoute} from "../protected-route/protected-route";
import {NotFound} from "../../pages/not-found/not-found";

export function App() {
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
          <ForgotPassword />
        </Route>
        <Route path={'/reset-password'} exact={true}>
          <ResetPassword />
        </Route>
        <ProtectedRoute path={'/feed'} exact={true}>
        </ProtectedRoute>
        <ProtectedRoute path={'/profile'} exact={true}>
          <Profile />
        </ProtectedRoute>
        <ProtectedRoute path={'/profile/orders'} exact={true}>
          <Profile />
        </ProtectedRoute>
        <ProtectedRoute path={'/ingredients/:id'} exact={true}>
          <ConstructorPage />
        </ProtectedRoute>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </>
  );
}

