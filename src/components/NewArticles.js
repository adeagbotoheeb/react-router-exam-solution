import { Helmet } from "react-helmet-async";

const NewArticles = () => {
  return (
    <>
      <Helmet>
        <title>New Articles</title>
        <meta name="description" content="The new article page" />
        <link rel="canonical" href="/new" />
      </Helmet>
      <div>
        <h2 className="section">List of new articles</h2>
      </div>
    </>
  );
};

export default NewArticles;
