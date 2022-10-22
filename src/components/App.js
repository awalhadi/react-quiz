import {
  BrowserRouter as Router, Route, Routes
} from "react-router-dom";
import { AuthProvider } from "../contexts/AuthContext";
import "../styles/App.css";
import Layout from "./Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Quiz from "./pages/Quiz";
import Result from "./pages/Result";
import Signup from "./pages/Signup";
import PrivateRoute from "./routes/PrivateRoute";
// import PrivateRoute5 from "./PrivateRoute5";
// import PublicRoute5 from "./PublicRoute5";
// import PrivateRouteAlternative from "./routes/PrivateRouteAlternative";
import PublicRoute from "./routes/PublicRoute";
// import PublicRouteAlternative from "./routes/PublicRouteAlternative";
// import PrivateRoute from "./PrivateRoute";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Home/>} />
            {/* <Route path="signup" element={<PublicRouteAlternative> <Signup /> </PublicRouteAlternative>} />
            <Route path="login" element={<PublicRouteAlternative> <Login /> </PublicRouteAlternative>} /> */}
            {/* <Route path="quiz" element={<PrivateRouteAlternative > <Quiz/> </PrivateRouteAlternative>} />
            <Route path="result" element={<PrivateRouteAlternative > <Result/> </PrivateRouteAlternative>} /> */}

            <Route path="quiz" element={<PrivateRoute />} >
                <Route index element={<Quiz />} />
                <Route path="result" element={<Result />}></Route>
            </Route>
            <Route path="auth" element={<PublicRoute />} >
                <Route path="login" element={<Login />}></Route>
                <Route path="signup" element={<Signup />}></Route>
            </Route>

          </Routes>
        </Layout>
      </AuthProvider>
    </Router>
  );
}

export default App;
