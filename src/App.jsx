import { Route, Routes, useNavigate } from "react-router-dom";
import path from "./utils/path";
import Public from "./pages/Public";
import Home from "./pages/Home";
import { getCurrent } from "./stores/actions/userAction";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Login from "./pages/Login";
import { Toaster } from "react-hot-toast";
function App() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate()
  const { isLoggedIn, token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const { currentData } = useSelector((state) => state.user);
  console.log(token)
   useEffect(() => {
    if (isLoggedIn && token) {
      setLoading(true);
      setTimeout(() => {
        dispatch(getCurrent());
        setLoading(false);
      }, 500);
     
    }else{
      navigate("/login")
    }
  }, [isLoggedIn, token, dispatch, navigate]);
  return (
      <>
        <Routes>
          <Route path={path.PUBLIC} element={<Public />} className="max-sm:hidden max-lg:hidden w-full">
            <Route path={path.HOME} element={<Home />} />
          </Route>
          <Route path="/login" element={<Login/>}>

          </Route>
        </Routes>
        <Toaster/>
      </>
        
  );
}

export default App;
