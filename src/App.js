import React from "react";
import { Routes, Route, Link } from "react-router-dom";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import AddCustomer from "./components/AddCustomer";
import Customer from "./components/Customer";
import CustomerList from "./components/CustomerList";
import SignUp from "./components/SignUp";

function App() {
  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <a href="/customers" className="navbar-brand">
          Customers
        </a>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/customers"} className="nav-link">
              Cutomers
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/add"} className="nav-link">
              Add Customer
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/signup"} className="nav-link">
              signup
            </Link>
          </li>
        </div>
      </nav>

      <div className="container mt-3">
        <Routes>
          <Route exact path="/" element={<CustomerList />} />
          <Route exact path="/customers" element={<CustomerList />} />
          <Route exact path="/add" element={<AddCustomer />} />
          <Route path="/customers/:id" element={<Customer />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
