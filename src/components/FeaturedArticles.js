import { Helmet } from "react-helmet-async";

const FeaturedArticles = () => {
  return (
    <>
      <Helmet>
        <title>Featured Articles</title>
        <meta name="description" content="Learn more about us here" />
        <link rel="canonical" href="/featured" />
      </Helmet>
      <div>
        <h2 className="section">List of Featured Articles</h2>
      </div>
    </>
  );
};

export default FeaturedArticles;
