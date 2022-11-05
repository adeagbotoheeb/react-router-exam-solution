import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
    <Helmet>
      <title>About</title>
      <meta name="description" content="Learn more about us here" />
      <link rel="canonical" href="/about" />
    </Helmet>
      <section className="section">
        <h2>About</h2>
        <Link to="/"> Home </Link>
      </section>
    </>
  );
};

export default About;
