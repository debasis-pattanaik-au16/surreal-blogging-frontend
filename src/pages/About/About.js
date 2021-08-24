import { Link } from 'react-router-dom';
import './About.css';

const About = () => {
  return (
    <div>
      <div id="column1">
        <div id="portrait1"></div>
        <h1 class="photohead" style={{ left: '25%' }}>
          Debasis Pattanaik
        </h1>
        <p class="photodescription">
          Passionate about creating products that are seamless to use and
          include good and consistent design language. Learning in the inner
          grits of software development in hopes to enable change and provide
          services and opportunities to many people as possible.
        </p>
        <div className="text-center text-white">
          <h1 className="h6">dpattanaik33@gma</h1>
          <Link
            to="https://www.linkedin.com/in/debasis-pattanaik-a25709212/"
            className="text-decoration-none link"
            target="_blank"
            rel="noreferrer"
          >
            <h6 className="h5 text-warning">LinkedIn</h6>
          </Link>
        </div>
      </div>

      <div id="column2">
        <div id="portrait2"></div>
        <h1 className="photohead" style={{ left: '75%' }}>
          Nihar Ranjan Mohanty
        </h1>
        <p class="photodescription">
          Nihar Ranjan Mohanty is an Indian billionaire Internet entrepreneur.
          In Aug 2021 he co-founded the blogging platform Surreal Blogging with
          Debasis Pattanaik and served as the chief operating officer.
        </p>
        <div className="text-center text-white">
          <h1 className="h6">mnihar198@gmail.com</h1>
          <Link
            to="https://www.linkedin.com/in/nihar-ranjan-mohanty-27102012a/"
            className="text-decoration-none link"
            target="_blank"
            rel="noreferrer"
          >
            <h6 class="h5 text-warning">LinkedIn</h6>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
