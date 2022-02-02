/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useState } from 'react';
import { FormInput, Logo } from 'components';
import Wrapper from 'assets/wrappers/RegisterPage';

const initialState = {
  name: '',
  email: '',
  password: '',
  isMember: true,
};

const Register = () => {
  // @ts-ignore
  const [values, setValues] = useState(initialState);

  const handleChange = (e: Change) => {
    console.log(e.target);
  };

  const handleSubmit = (e: Submit) => {
    e.preventDefault();
    console.log(e.target);
  };

  return (
    <Wrapper className="full-page">
      <form className="form" onSubmit={handleSubmit}>
        <Logo />
        <h3>Login</h3>
        {/** Name Input */}
        <FormInput
          type="text"
          name="name"
          value={values.name}
          onChange={handleChange}
        />
        {/** Email Input */}
        <FormInput
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange}
        />
        {/** Password Input */}
        <FormInput
          type="password"
          name="password"
          value={values.password}
          onChange={handleChange}
        />
        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
    </Wrapper>
  );
};

export default Register;
