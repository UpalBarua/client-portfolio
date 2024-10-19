import Layout from "../src/layouts/Layout";
import MobileHeader from "../src/layouts/MobileHeader";
import Header from "../src/layouts/Header";
import Mouse from "../src/layouts/Mouse";
import ScrollTop from "../src/layouts/ScrollTop";
import PortfolioDetails from "../src/components/PortfolioDetails";

export default function PortfolioPage() {
  return (
    <Layout>
      <MobileHeader />
      <Header />
      <PortfolioDetails />
      <Mouse />
      <ScrollTop />
    </Layout>
  );
}
