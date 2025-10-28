import React from "react";
import AppRoutes from "./routes/approutes"; // ✅ exact same casing as file name

const App = () => {
  return (
    <div className="App">
      <AppRoutes />
    </div>
  );
};

export default App;
