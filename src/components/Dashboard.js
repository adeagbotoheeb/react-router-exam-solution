import { Helmet } from "react-helmet-async";

const Dashboard = () => {
  return (
    <>
      <Helmet>
        <title>Dashboard</title>
        <meta name="description" content="Learn more about us here" />
        <link rel="canonical" href="/dashboard" />
      </Helmet>

      <section className="section">
        <h2>Dashboard</h2>
      </section>
    </>
  );
};

export default Dashboard;
