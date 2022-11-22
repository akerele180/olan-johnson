// import { useState } from "react";
import { Fragment, Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import AppRoutes from "./routes";
import Logo from "./assets/olan-johnson-logo.png";

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Suspense
          fallback={
            <div className="relative h-screen">
              <img
                src={Logo}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                alt="Loading..."
              />
            </div>
          }
        >
          <AppRoutes />
        </Suspense>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
