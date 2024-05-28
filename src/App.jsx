import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ContactUs from "./Components/ContactUs/ContactUs";
import Home from "./Components/Home/Home";
import Login from "./Components/auth/Login";
import Register from "./Components/auth/register/Register";
import AdminLayout from "./Components/Admin/AdminLayout/AdminLayout";
import Dashboard from "./Components/Admin/Dashboard/Dashboard";
import Layout from "./Components/layout/Layout";
import CreateOrder from "./Components/Admin/CreateOrder/CreateOrder";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/contactus" element={<Layout><ContactUs /></Layout>} />
        <Route path="/login" element={<Layout><Login /></Layout>} />
        <Route path="/register" element={<Layout><Register /></Layout>} />
        <Route path="/admin" element={<AdminLayout><Dashboard /></AdminLayout>} />
        <Route path="/admin/create-order" element={<AdminLayout><CreateOrder /></AdminLayout>} />
      </Routes>
    </Router>
  );
}

export default App;
