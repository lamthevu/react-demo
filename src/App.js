import React from 'react';
import RouterApp from "./routes/router";
import { BrowserRouter } from "react-router-dom";


function App() {
  return (
      <BrowserRouter>
        <div>
          <RouterApp/>
        </div>
      </BrowserRouter>
  );
}

export default App;
