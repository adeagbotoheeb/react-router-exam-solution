import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Error from "./components/Error";
import Login from "./components/Login";
import Products from "./components/Products";
import { ErrorBoundary } from "react-error-boundary";
import Fallback from "./components/Fallback";
import Navbar from "./components/StyledNavbar";
import FeaturedArticles from "./components/FeaturedArticles";
import NewArticles from "./components/NewArticles";
import Profile from "./components/Profile";
import { AuthProvider } from "./components/auth";
import RequireAuth from "./components/RequireAuth";

function App() {
  const errorHandler = (error, errorInfo) => {
    console.log("Logging", error, errorInfo);
  };

  return (
    <AuthProvider>
      <div className="App">
        <ErrorBoundary FallbackComponent={Fallback} onError={errorHandler}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="*" element={<Error />} />
            <Route path="products" element={<Products />}>
              <Route path="featured" element={<FeaturedArticles />} />
              <Route path="new" element={<NewArticles />} />
            </Route>
            <Route path="login" element={<Login />} />
            <Route path="profile" element={<RequireAuth><Profile /></RequireAuth>} />
          </Routes>
        </ErrorBoundary>
      </div>
    </AuthProvider>
  );
}

export default App;
