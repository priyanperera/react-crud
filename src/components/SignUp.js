import { useState } from "react";

const SignUp = (onSignUp) => {
  const [email, setEmail] = useState("");
  const isValid = email != null && email.trim().length > 0;
  const handleSubmit = (event) => {
    event.preventDefault();
    onSignUp({ email });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Email</label>
      <input
        type="email"
        required
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <button disabled={!isValid}>Sign up</button>
    </form>
  );
};

export default SignUp;
