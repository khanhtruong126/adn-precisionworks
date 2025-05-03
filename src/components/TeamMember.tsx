import { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { SliderContainer } from './InsideOurVendor';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import Slider from 'react-slick';

const TeamMember = () => {
  const carouselRef = useRef<any>();

  const handleChangeCarousel = (type: 'prev' | 'next') => {
    if (!carouselRef.current) return;
    if (type === 'next') {
      carouselRef.current.slickNext();
    } else {
      carouselRef.current.slickPrev();
    }
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    prevArrow: <></>,
    nextArrow: <></>,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const team = [
    {
      name: 'Wendy Vo',
      title: 'CEO & Founder',
      description:
        'With 20+ years in quality and sourcing for global manufacturers, Wendy leads with hands-on expertise in automation, electronics, and hearing aid components. She ensures every client gets precision sourcing backed by deep industry insight.',
    },
    {
      name: 'Tina Le',
      title: 'Operations & Project Manager',
      description:
        'Tina brings two decades of supply chain and project management experience to the team. She keeps your projects moving with streamlined coordination and on-time execution.',
    },
    {
      name: 'Le Duong',
      title: 'Supplier Quality Manager',
      description:
        'Duong is a seasoned expert in mechanical and injection molding supplier management. She ensures your vendors meet top-tier standards through proactive quality systems.',
    },
    {
      name: 'Nguyen Hung',
      title: 'CAD/Drawing & Engineering Lead',
      description:
        'Hung has over 20 years in product development and engineering, specializing in hearing aids. He supports your technical projects with accurate drawings and process optimization.',
    },
    {
      name: 'Liesly Ngan',
      title: 'Supply Chain Consultant',
      description:
        'A graduate of MIT’s SCM program, Ngan combines academic insight with practical QA leadership. She advises on global supply strategies and performance improvement.',
    },
    {
      name: 'Thai Vu',
      title: 'Compliance & Lab Testing Manager',
      description:
        'With a Master’s in Chemistry and 22 years in lab testing, Thai leads our compliance services. He ensures your products meet international standards like RoHS, REACH, and ASTM.',
    },
  ];

  return (
    <div>
      <div className="flex items-center gap-3 mb-2">
        <FontAwesomeIcon
          size="2x"
          icon={faUsers}
          className="mr-1 text-app-red"
        />
        <h2 className="highlight-title"> Meet the team</h2>
        <div className="flex items-center gap-2">
          <LeftOutlined
            style={{ fontSize: '1rem' }}
            onClick={() => {
              handleChangeCarousel('prev');
            }}
          />
          <RightOutlined
            style={{ fontSize: '1rem' }}
            onClick={() => {
              handleChangeCarousel('next');
            }}
          />
        </div>
      </div>

      <SliderContainer>
        <Slider
          {...settings}
          ref={(ref) => {
            carouselRef.current = ref;
          }}
        >
          {team.map((item, index) => (
            <div key={index} className="shadow-md p-3 min-h-[250px] mb-2">
              <div className="font-semibold text-lg">{item.name}</div>
              <div className="my-2 text-lg">{item.title}</div>
              <p>{item.description}</p>
            </div>
          ))}
        </Slider>
      </SliderContainer>
    </div>
  );
};

export default TeamMember;
