import PortfolioDetails from "../src/components/PortfolioDetails";
import Header from "../src/layouts/Header";
import Layout from "../src/layouts/Layout";
import MobileHeader from "../src/layouts/MobileHeader";
import Mouse from "../src/layouts/Mouse";
import ScrollTop from "../src/layouts/ScrollTop";

export default function PortfolioPage() {
  return (
    <div>
      <Layout>
        <MobileHeader />
        <Header />
        <PortfolioDetails />
        <Mouse />
        <ScrollTop />
      </Layout>
    </div>
  );
}
