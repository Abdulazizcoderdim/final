import { RouterProvider } from "react-router-dom";
import I18nProvider from "./providers/I18nProvider";
import { router } from "./router/router";

const App = () => {
  return (
    <I18nProvider>
      <RouterProvider router={router} />
    </I18nProvider>
  );
};

export default App;
