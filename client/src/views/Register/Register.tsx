import { useState } from 'react';
import { FormInput, Logo, Alert } from 'components';
import Wrapper from 'assets/wrappers/RegisterPage';
import { useAppContext } from 'contexts/app/AppContext';

const initialState = {
  name: '',
  email: '',
  password: '',
  isMember: true,
};

const Register = () => {
  const [values, setValues] = useState(initialState);
  const { showAlert, displayAlert } = useAppContext();

  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember });
  };

  const handleChange = (e: Change) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: Submit) => {
    e.preventDefault();
    const { name, email, password, isMember } = values;

    if (!email || !password || (!isMember && !name)) {
      displayAlert();
      return;
    }
  };

  return (
    <Wrapper className="full-page">
      <form className="form" onSubmit={handleSubmit}>
        <Logo />
        <h3>{values.isMember ? 'Login' : 'Register'}</h3>
        {showAlert && <Alert />}
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
