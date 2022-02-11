import React, { useEffect, useState } from "react";
import customerService from "../services/customerService";
import { Link } from "react-router-dom";

const CustomerList = () => {
  const [customers, setCustomers] = useState([]);
  const [currentCustomer, setCurrentCustomer] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(-1);

  useEffect(() => {
    retreiveCustomers();
  }, []);

  const retreiveCustomers = () => {
    customerService
      .getAll()
      .then((resp) => {
        setCustomers(resp.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const refreshList = () => {
    retreiveCustomers();
    setCurrentCustomer(null);
    setCurrentIndex(-1);
  };

  const setActiveCustomer = (customer, index) => {
    setCurrentCustomer(customer);
    setCurrentIndex(index);
  };

  return (
    <div className="list row">
      <div className="col-md-6">
        <h4>Customers List</h4>
        <ul className="list-group">
          {customers &&
            customers.map((customer, index) => (
              <li
                className={
                  "list-group-item " + (index === currentIndex ? "active" : "")
                }
                onClick={() => setActiveCustomer(customer, index)}
                key={index}
              >
                {customer.firstName}
              </li>
            ))}
        </ul>
      </div>
      <div className="col-md-6">
        {currentCustomer ? (
          <div>
            <h4>Customer</h4>
            <div>
              <label>
                <strong>First name:</strong>
              </label>{" "}
              {currentCustomer.firstName}
            </div>
            <div>
              <label>
                <strong>Last name:</strong>
              </label>{" "}
              {currentCustomer.lastName}
            </div>
            <div>
              <label>
                <strong>Email:</strong>
              </label>{" "}
              {currentCustomer.email}
            </div>

            <Link
              to={"/customers/" + currentCustomer.id}
              className="badge badge-warning"
            >
              Edit
            </Link>
          </div>
        ) : (
          <div>
            <br />
            <p>Please click on a Customer...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CustomerList;
