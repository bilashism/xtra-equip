import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./routes/router";

function App() {
  return (
    <div className="grid gap-16">
      <RouterProvider router={router} />
      <Toaster />
    </div>
  );
}

export default App;
