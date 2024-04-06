import { Button } from "antd";

const SendQuoteButton = () => {
  return (
    <Button
      className="text-lg font-semibold px-8 pb-9 pt-2 rounded-lg"
      type="primary"
      target="_blank"
      href="https://docs.google.com/forms/d/e/1FAIpQLSdJ2GHV36JsiJi80s5okG74CJY4wTPTVpJD8k04ye41SsejHQ/viewform?usp=sf_link"
    >
      Get a Quote
    </Button>
  );
};

export default SendQuoteButton;
