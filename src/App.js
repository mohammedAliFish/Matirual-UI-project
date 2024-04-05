import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home/Home";
import Root from "./Root";
import Create from "./pages/Create/Create";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Home />} />
      <Route path="create" element={<Create />} />
    </Route>
  )
);




function App() {

  return (
      <RouterProvider router={router} />
  
  );
}

export default App;
