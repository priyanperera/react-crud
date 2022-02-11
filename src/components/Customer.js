import React, { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import customerService from "../services/customerService";

const Customer = (props) => {
  const initialCustomerState = {
    id: 0,
    firstName: "",
    lastName: "",
    email: "",
    mobileNumber: "",
    address: {
      street: "",
      city: "",
      state: "",
      country: "",
      postCode: "",
    },
  };

  const [currentCustomer, setCurrentCustomer] = useState(initialCustomerState);
  const [message, setMessage] = useState("");

  const getCustomer = (id) => {
    customerService
      .get(id)
      .then((resp) => {
        setCurrentCustomer(resp.data);
        console.log(resp.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    getCustomer(props.match.params.id);
  }, [props.match.params.id]);
};

export default Customer;
