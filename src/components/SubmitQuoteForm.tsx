// import { Helmet } from "react-helmet";

const SubmitForm = () => {
  const jotFormUrl = "https://form.jotform.com/241824783120453";
  const iframeId = "JotFormIFrame-241824783120453";

  return (
    <>
      {/* <Helmet>
        <script src="https://cdn.jotfor.ms/s/umd/latest/for-form-embed-handler.js" />
        <script>{`window.jotformEmbedHandler("iframe[id='<span class="math-inline">\{iframeId\}'\]", "</span>{jotFormUrl}")`}</script>
      </Helmet> */}
      <div className="w-full lg:w-[700px]">
        <iframe
          id={iframeId}
          title="Information Request Form"
          onLoad={() => {
            window.parent.scrollTo(0, 0);
          }}
          allowTransparency
          allow="geolocation; microphone; camera; fullscreen"
          src={jotFormUrl}
          style={{
            width: "100%",
            border: "none",
          }}
          className="h-[1200px] lg:h-[800px]"
        />
      </div>
    </>
  );
};

export default SubmitForm;
