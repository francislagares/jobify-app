import { useAppContext } from 'contexts/app/AppContext';

const Alert = () => {
  const { alertText, alertType } = useAppContext();

  return <div className={`alert alert-${alertType}`}>{alertText}</div>;
};

export default Alert;
