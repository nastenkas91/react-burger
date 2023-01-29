import {AppHeader} from "../app-header/app-header";
import {ConstructorPage} from "../../pages/constructor-page/constructor-page";
import {Route, Switch, useLocation, useHistory} from "react-router-dom";
import {Login} from "../../pages/login/login";
import {Register} from "../../pages/register/register";
import {ForgotPassword} from "../../pages/forgot-password/forgot-password";
import {ResetPassword} from "../../pages/reset-password/reset-password";
import {Profile} from "../../pages/profile/profile";
import {ProtectedRoute} from "../protected-route/protected-route";
import {NotFound} from "../../pages/not-found/not-found";
import {IngredientDetails} from "../ingredient-details/ingredient-details";
import {Modal} from "../modal/modal";
import {Ingredient} from "../../pages/ingredient/ingredient";
import {useDispatch, useSelector} from "../../utils/hooks";
import {useEffect} from "react";
import {getIngredients} from "../../services/actions/ingredients";
import {getUser} from "../../services/actions/auth";
import {Spinner} from "../spinner/spinner";
import {TModalState} from "../../utils/types";
import {FeedPage} from "../../pages/feed-page/feed-page";
import {FeedOrderDetails} from "../feed-order-details/feed-order-details";

export function App() {
  const {isLoggedIn} = useSelector(state => state.loginReducer);
  const location = useLocation<TModalState>();
  const history = useHistory();
  const dispatch = useDispatch();
  const{ingredientsRequest} = useSelector(state => state.ingredients)
  const orderNumber = localStorage.getItem('orderNumber') ? parseInt(localStorage.getItem('orderNumber') || '') : null;

  useEffect(() => {
    dispatch(getIngredients());
  }, []);

  useEffect(() => {
    isLoggedIn && dispatch(getUser());
  }, [isLoggedIn]);

  const background = location.state && location.state.background;
  const handleModalClose = () => {
    history.goBack();
    localStorage.removeItem('currentIngredient');
    localStorage.removeItem('orderNumber');
  }

  return (
    <>
      <AppHeader />
      <Switch location={background || location}>
        <Route path={'/'} exact={true}>
          <ConstructorPage />
        </Route>
        <Route path={'/ingredients/:ingredientId'} exact={true}>
          <Ingredient />
        </Route>
        <Route path={'/feed'} exact={true}>
          <FeedPage />
        </Route>
        <Route path={'/feed/:id'} exact={true}>
          <FeedOrderDetails />
        </Route>

        <ProtectedRoute onlyAuth={false} path={'/login'} exact={true}>
          <Login />
        </ProtectedRoute>
        <ProtectedRoute onlyAuth={false} path={'/register'} exact={true}>
          <Register />
        </ProtectedRoute>
        <ProtectedRoute onlyAuth={false} path={'/forgot-password'} exact={true}>
          <ForgotPassword />
        </ProtectedRoute>
        <ProtectedRoute onlyAuth={false} path={'/reset-password'} exact={true}>
          <ResetPassword />
        </ProtectedRoute>

        <ProtectedRoute onlyAuth={true} path={'/profile'} exact={true}>
          <Profile />
        </ProtectedRoute>
        <ProtectedRoute onlyAuth={true} path={'/profile/orders'} exact={true}>
          <Profile />
        </ProtectedRoute>
        <ProtectedRoute onlyAuth={true} path={'/profile/orders/:id'} exact={true}>
          <FeedOrderDetails />
        </ProtectedRoute>

        <Route>
          <NotFound />
        </Route>
      </Switch>

      {background && (
        <Route
          path={'/ingredients/:ingredientId'}
          children={
           <Modal
             title={'Детали ингредиента'}
             closeModal={handleModalClose}
           >
             <IngredientDetails />
           </Modal>
          }
        />
      )}

      {background &&
      (
        <Route
          path={'/feed/:id'}
          render={() => (
            <Modal
              title={orderNumber}
              closeModal={handleModalClose}
          >
              <FeedOrderDetails />
            </Modal>
          )}
        />
      )}

      {background &&
        (
          <Route
            path={'/profile/orders/:id'}
            render={() => (
              <Modal
                title={orderNumber}
                closeModal={handleModalClose}
              >
                <FeedOrderDetails />
              </Modal>
            )}
          />
        )}

      {
        ingredientsRequest &&
        <Spinner />
      }
    </>
  );
}

