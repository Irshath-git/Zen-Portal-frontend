import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./components/Login/Login";
import Class from "./pages/Class";
import Dashboard from "./pages/Dashboard";
import Portal from "./Portal/Portal";
import Tasks from "./pages/Tasks";
import Webcode from "./pages/Webcode";
import Capstone from "./pages/Capstone";
import Queries from "./pages/Queries";
import Signup from "./components/signup/Signup";
import { DataProvider } from "./Context/DataContext";

function App() {
  return (
    <BrowserRouter>
      <DataProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/portal" element={<Portal />}>
            <Route path="class" element={<Class />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="task submissions" element={<Tasks />} />
            <Route path="webcode" element={<Webcode />} />
            <Route path="capstone" element={<Capstone />} />
            <Route path="queries" element={<Queries />} />
          </Route>
        </Routes>
      </DataProvider>
    </BrowserRouter>
  );
}

export default App;
