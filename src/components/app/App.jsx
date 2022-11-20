import {useEffect} from "react";
import {AppHeader} from "../app-header/app-header";
import {ConstructorPage} from "../constructor-page/constructor-page";
import {getIngredients} from "../../services/actions/ingredients";
import {useDispatch} from "react-redux";

export function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getIngredients())
  }, [])

  return (
    <>
      <AppHeader />
      <ConstructorPage />
    </>
  );
}

