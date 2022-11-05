import { Helmet } from "react-helmet-async";
import { Link, Outlet } from "react-router-dom";

const Products = () => {
    return (
        <>
        <Helmet>
        <title>Products</title>
        <meta name="description" content="This is a product page" />
        <link rel="canonical" href="/products" />
      </Helmet>
        <div>
        <h2 className="section">This is a Nested Routes</h2>
        </div>
        <nav>
            <Link to='featured' className="section">Featured</Link>
            <Link to='new' className="section">New</Link>
            
        </nav>
        <Outlet />
        </>
        
       
    );

}

export default Products;