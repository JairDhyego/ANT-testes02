import Information from "../components/home/information";
import Hero from "./../components/home/hero";
import RecentProduct from "./../components/home/recentProduct";
import ProductCategories from "./../components/home/productCategories";
import SaleProduct from "./../components/home/saleProduct";

const RouteHome = () => {
  return (
    <div className="container">
      <Hero />
      <RecentProduct />
      <Information />
      <ProductCategories />
      <SaleProduct />
    </div>
  );
};

export default RouteHome;
