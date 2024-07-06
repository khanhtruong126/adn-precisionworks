import SubmitForm from "../SubmitQuoteForm";
import { SECTION_ID } from "../../router";

const GetAQuote = () => {
  return (
    <section
      id={SECTION_ID.GET_A_QUOTE}
      className="flex justify-center mt-[-90px] lg:mt-0 md:mt-[-20px]"
    >
      <SubmitForm />
    </section>
  );
};

export default GetAQuote;
