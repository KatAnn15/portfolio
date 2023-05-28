import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./components/WebContainer/components/Content/Content";
import PhoneContainer from "./components/PhoneContainer/PhoneContainer";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "./Redux/store";
import { Modes } from "./Redux/Slices/modeSlice";

const App = () => {
  const [loading, setLoading] = useState(true);
  const { value: mode } = useSelector((state: RootState) => state.mode);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
  ]);

  useEffect(() => {
    if (loading && mode === Modes.Web)
      setTimeout(() => {
        setLoading(false);
      }, 1200);
  }, [loading, mode]);

  return (
    <div
      id='app'
      data-testid='app'
      style={{
        backgroundColor: mode === Modes.Web && !loading ? "white" : "black",
      }}
    >
      {loading ? <PhoneContainer /> : <RouterProvider router={router} />}
    </div>
  );
};

export default App;
