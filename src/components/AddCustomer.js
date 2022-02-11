import React, { useState } from "react";
import { useForm } from "react-hook-form";
import customerService from "../services/customerService";

const AddCustomer = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  const customerState = {
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

  const [customer, setCustomer] = useState(customerState);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCustomer({ ...customer, [name]: value });
  };

  const saveCustomer = () => {
    var data = {
      firstName: customer.firstName,
      lastName: customer.lastName,
      email: customer.email,
      mobileNumber: customer.mobileNumber,
    };

    customerService
      .create(data)
      .then((resp) => {
        setCustomer({
          id: resp.data.id,
          firstName: resp.data.firstName,
          lastName: resp.data.lastName,
          email: resp.data.email,
          mobileNumber: resp.data.mobileNumber,
        });
        setSubmitted(true);
        console.log(resp.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const newCustomer = () => {
    setCustomer(customerState);
    setSubmitted(false);
  };

  return (
    <div className="submit-form">
      {submitted ? (
        <div>
          <h4>You submitted successfully!</h4>
          <button className="btn btn-success" onClick={newCustomer}>
            Add
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <label htmlFor="firstName">First name</label>
            <input
              type="text"
              className="form-control"
              id="firstName"
              required
              {...register("firstName", { required: true, maxLength: 20 })}
              value={customer.firstName}
              onChange={handleInputChange}
              name="firstName"
            />
            {errors.firstName?.type === "required" && "First name is required"}
          </div>

          <div className="form-group">
            <label htmlFor="lastName">Last name</label>
            <input
              type="text"
              className="form-control"
              id="lastName"
              required
              value={customer.lastName}
              onChange={handleInputChange}
              name="lastName"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              className="form-control"
              id="email"
              required
              value={customer.email}
              onChange={handleInputChange}
              name="email"
            />
          </div>

          <div className="form-group">
            <label htmlFor="mobileNumber">Mobile</label>
            <input
              type="text"
              className="form-control"
              id="mobileNumber"
              required
              value={customer.mobileNumber}
              onChange={handleInputChange}
              name="mobileNumber"
            />
          </div>

          {/* <button onClick={saveCustomer} className="btn btn-success">
            Submit
          </button> */}
          <input type="submit" className="btn btn-success"></input>
        </form>
      )}
    </div>
  );
};

export default AddCustomer;
