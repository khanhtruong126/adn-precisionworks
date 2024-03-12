import { Button } from "antd";

const SendQuoteButton = () => {
  return (
    <Button
      className="text-2xl px-8 pb-10 pt-2"
      type="primary"
      target="_blank"
      href="https://docs.google.com/forms/d/e/1FAIpQLSdJ2GHV36JsiJi80s5okG74CJY4wTPTVpJD8k04ye41SsejHQ/viewform?usp=sf_link"
    >
      Send us your files to Get a trial quotes
    </Button>
  );
};

export default SendQuoteButton;
