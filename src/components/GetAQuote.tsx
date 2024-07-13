import SubmitForm from "./SubmitQuoteForm";
import { SECTION_ID } from "../router";

const GetAQuote = () => {
  return (
    <section
      id={SECTION_ID.GET_A_QUOTE}
      className="flex justify-center mt-[-90px] lg:mt-0 md:mt-[-20px] mb-0 lg:mb-5 h-[1000px] md:h-[720px] overflow-y-hidden"
    >
      <SubmitForm />
    </section>
  );
};

export default GetAQuote;
