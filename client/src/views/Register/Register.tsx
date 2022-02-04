/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useState } from 'react';
import { FormInput, Logo, Alert } from 'components';
import Wrapper from 'assets/wrappers/RegisterPage';

const initialState = {
  name: '',
  email: '',
  password: '',
  isMember: true,
  showAlert: true,
};

const Register = () => {
  // @ts-ignore
  const [values, setValues] = useState(initialState);

  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember });
  };

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
        <h3>{values.isMember ? 'Login' : 'Register'}</h3>
        {values.showAlert && <Alert />}
        {/** Show Name Input if there is no membership */}
        {!values.isMember && (
          <FormInput
            type="text"
            name="name"
            value={values.name}
            onChange={handleChange}
          />
        )}
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
        <p>
          {values.isMember ? 'Not a member yet?' : 'Already a member?'}
          <button type="button" className="member-btn" onClick={toggleMember}>
            {values.isMember ? 'Register' : 'Login'}
          </button>
        </p>
      </form>
    </Wrapper>
  );
};

export default Register;
