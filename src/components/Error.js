import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <>
      <Helmet>
        <title>404 page</title>
        <meta name="description" content="Learn more about us here" />
        <link rel="canonical" href="*" />
      </Helmet>
      <section className="section">
        <h2> Error 404 </h2>
        <p> page not found </p>
        <Link to="/"> Back Home</Link>
      </section>
    </>
  );
};

export default Error;
