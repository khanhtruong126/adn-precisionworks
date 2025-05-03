import { Row, Col } from 'antd';
import { SECTION_ID } from '../router';
import item from '../assets/home-item.png';
import SendQuoteButton from './SendQuoteButton';
import whiteLogo from '../assets/logo-white.svg';
import { apwRed } from '../colors';

const Home = () => {
  const features = [
    'CNC Machining; Sheet Metal Fabrication, Injection Molding.',
    'Prototypes, Custom components, and Unique designs',
    '15 reliable vendors, located Industrial parks in big cites in Vietnam.',
    'Cost effective, Quality and Leadtime focused.',
  ];
  return (
    <section id={SECTION_ID.HOME} className="bg-app-red !text-white pt-8">
      <Row className="px-10 lg:px-24 md:px-10 sm:px-5">
        <Col
          lg={16}
          md={24}
          sm={24}
          className="flex mb-5 md:justify-center sm:justify-center"
        >
          <div className="flex flex-col justify-center">
            <div>
              <h2 className="text-4xl mb-2 text-white">
                Precision Sourcing from Vietnam — Built on 20 Years of Quality
                Expertise
              </h2>
              <p className="text-xl indent-10 text-justify my-3">
                We help U.S., Canada, Australia, and EU buyers source
                high-quality CNC, sheet metal, and injection mold parts directly
                from trusted Vietnamese manufacturers — with full quality
                assurance and personal support.
              </p>
              <div className="text-lg text-start md:text-justify">
                <Row justify="space-between" align="middle">
                  <Col className="ml-5 mt-2">
                    {features.map((feature, index) => (
                      <div key={index} className="flex gap-2">
                        <img
                          loading="lazy"
                          src={whiteLogo}
                          alt="main_logo"
                          width={15}
                          height={15}
                        />
                        <h3 className="font-semibold">{feature}</h3>
                      </div>
                    ))}
                  </Col>
                </Row>
                <div className="flex justify-center md:hidden mt-10">
                  <SendQuoteButton color={apwRed} backgroundColor="white" />
                </div>
              </div>
            </div>
          </div>
        </Col>
        <Col
          lg={8}
          md={24}
          sm={24}
          className="flex justify-center lg:justify-end"
        >
          <img
            loading="lazy"
            src={item}
            width={300}
            height={450}
            alt="adn-precision-product"
          />
        </Col>
      </Row>
    </section>
  );
};

export default Home;
