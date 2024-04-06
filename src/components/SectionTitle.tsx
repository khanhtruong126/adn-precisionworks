const SectionTitle = ({ title }: { title: string }) => {
  return (
    <div className="text-center mb-10">
      <span className="text-3xl pb-2 font-bold border-b-[5px] border-app-red">
        {title}
      </span>
    </div>
  );
};

export default SectionTitle;
