const descriptionExtractor = (description?: string) => {
  return (
    <>
      {description?.split("\r\n").map((item, idx) => (
        <p key={idx} className="group flex flex-col">
          {item}

          <span className="group-last:hidden h-2" />
        </p>
      ))}
    </>
  );
};

export default descriptionExtractor;
