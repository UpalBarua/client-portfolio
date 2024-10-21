import PortfolioDetails from "../../src/components/PortfolioDetails";
import Header from "../../src/layouts/Header";
import Layout from "../../src/layouts/Layout";
import MobileHeader from "../../src/layouts/MobileHeader";
import Mouse from "../../src/layouts/Mouse";
import ScrollTop from "../../src/layouts/ScrollTop";
import { portfolioWorks } from "../../src/data/portfolio-works";

export async function getStaticPaths() {
  const paths = portfolioWorks.map(({ id }) => ({
    params: { portfolioId: id.toString() },
  }));

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params: { portfolioId } }) {
  const portfolioDetails = portfolioWorks.find(
    ({ id }) => id === Number(portfolioId),
  );

  return { props: { portfolioDetails } };
}

export default function PortfolioPage({ portfolioDetails }) {
  return (
    <div>
      <Layout>
        <MobileHeader />
        <Header />
        <PortfolioDetails portfolioDetails={portfolioDetails} />
        <Mouse />
        <ScrollTop />
      </Layout>
    </div>
  );
}
