import { Helmet } from "react-helmet-async";

const Fallback = () => {
  return (
    <>
      <Helmet>
        <title>Error 404</title>
        <meta name="description" content="Learn more about us here" />
        <link rel="canonical" href="/fallback" />
      </Helmet>
      <h1>Troubling in Loading!!!</h1>
    </>
  );
};

export default Fallback;
