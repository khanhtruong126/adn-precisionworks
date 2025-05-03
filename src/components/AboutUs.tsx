import SectionTitle from './SectionTitle';
import placeholder from '../assets/image-placeholder.svg';
import AppLogo from '../assets/main-logo.svg';

const AboutUs = () => {
  return (
    <div className="mb-5">
      <SectionTitle title="About Us" />
      <p className="text-center mb-5">
        <h2 className="highlight-title">Your Trusted Partner in Vietnam</h2>
      </p>
      <div className="text-justify text-lg px-16">
        <div className="indent-10">
          <p className="mb-5">
            <img
              className="inline mr-1 mb-1"
              src={AppLogo}
              alt="main_logo"
              width={20}
              height={20}
            />
            With over 20 years of experience in quality management for the
            mechanical industry and a strong background in chemistry, we
            specialize in helping international clients source{' '}
            <span className="font-semibold">
              high-quality CNC-machined and precision-engineered components
            </span>{' '}
            from trusted Vietnamese manufacturers.
          </p>
          <p>
            <img
              className="inline mr-1 mb-1"
              src={AppLogo}
              alt="main_logo"
              width={20}
              height={20}
            />
            We don’t just connect you with suppliers — we manage every step of
            the process with a focus on{' '}
            <span className="font-semibold">
              quality assurance, transparency, and long-term partnership.
            </span>
          </p>
        </div>
        <div className="px-5 w-full lg:w-[70%] pt-5 mx-auto">
          <p className="mb-2 text-xl">
            <b className="highlight-title">Why work with us?</b>
          </p>
          <div className="flex gap-20">
            <div>
              <img src={placeholder} alt="" width={120} />
            </div>
            <ol className="list-decimal">
              <li>Wide network of verified Vietnamese suppliers</li>
              <li>Personal support, real-time updates, and full QC services</li>
              <li>Fast response, flexible quantities, clear communication</li>
              <li>
                Trusted by clients in the U.S., Canada, Germany & Australia
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
