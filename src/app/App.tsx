import { BrowserRouter } from "react-router-dom";
import ErrorBoundary from "./providers/error/ErrorBoundary";
import { RoutesComponent } from "./providers/routes/Routes";
import "./styles/App.css";
import { Provider } from "react-redux";
import { store } from "./providers/store/store";
import { Suspense } from "react";

function App() {
  return (
    <div className="w-full">
      <BrowserRouter>
        <ErrorBoundary>
          <Provider store={store}>
            <Suspense fallback={"loading..."}>
              <RoutesComponent />
            </Suspense>
          </Provider>
        </ErrorBoundary>
      </BrowserRouter>
    </div>
  );
}

export default App;
