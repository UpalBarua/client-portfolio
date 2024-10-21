import Link from "next/link";
import { portfolioWorks } from "../data/portfolio-works";

const Portfolio2 = () => {
  return (
    <div className="devman_tm_section" id="portfolio">
      <div className="devman_tm_portfolio">
        <div className="container">
          <div className="devman_tm_main_title" data-text-align="center">
            <span>Portfolio</span>
            <h3>My Amazing Works</h3>
            <p>
              Dliquip ex ea commo do conse namber onequa ute irure dolor in
              reprehen derit in voluptate
            </p>
          </div>
          <div className="portfolio_list">
            <ul className="portfolio-grid">
              {portfolioWorks.map(({ img, name, githubLink, liveLink, id }) => (
                <li key={id} className="wow fadeInUp" data-wow-duration="1s">
                  <div>
                    <img className="portfolio-img" src={img} />
                    <div className="portfolio-content">
                      <Link href={`/portfolio/${id}`}>
                        <h5>{name}</h5>
                      </Link>
                      <a href={liveLink} target="_blank">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="lucide lucide-github"
                        >
                          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                          <path d="M9 18c-4.51 2-5-2-7-2" />
                        </svg>
                        GitHub Link
                      </a>
                      <a href={githubLink} target="_blank">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="lucide lucide-radio"
                        >
                          <path d="M4.9 19.1C1 15.2 1 8.8 4.9 4.9" />
                          <path d="M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5" />
                          <circle cx="12" cy="12" r="2" />
                          <path d="M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5" />
                          <path d="M19.1 4.9C23 8.8 23 15.1 19.1 19" />
                        </svg>
                        Live Link
                      </a>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Portfolio2;
