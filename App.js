import { createBrowserRouter , RouterProvider } from "react-router-dom";
import Username from "./components/Username";
import Register from "./components/Register";
import Password from "./components/Password";
import Profile from "./components/Profile";
import Recovery from "./components/Recovery";
import Reset from "./components/Reset";


const router = createBrowserRouter([
  {
    path:'/',
    element:<Username/>
  },
  {
    path:'/resgister',
    element:<Register/>
  },
  {
    path:'/password',
    element:<Password/>
  },
  {
    path:'/profile',
    element:<Profile/>
  },
  {
    path:'/profile',
    element:<Recovery/>
  },
  {
    path:'/profile',
    element:<Reset/>
  },
])

function App() {
  return (
    <div className="App">
      react
    </div>
  );
}

export default App;
