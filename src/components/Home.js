import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home</title>
        <meta name="description" content="This is home page" />
        <link rel="canonical" href="/" />
      </Helmet>
      <section className="section">
        <h2>Home page</h2>
      </section>
    </>
  );
};

export default Home;
