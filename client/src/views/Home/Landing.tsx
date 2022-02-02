import Logo from 'components/Logo/Logo';
import main from 'assets/images/main.svg';
import Wrapper from 'assets/wrappers/LandingPage';

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            I'm baby crucifix tousled glossier tofu bushwick gentrify retro,
            banh mi tote bag chartreuse schlitz quinoa direct trade you probably
            haven't heard of them cronut.
          </p>
          <button className="btn btn-hero">Login/Register</button>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};
export default Landing;
