const RequestQuote = () => {

  const handleRequestClick = () => {
    window.location.href =
      "mailto:bridgenorthbacksplash@outlook.com?subject=Request%20for%20Estimate";
  };

  return (
    <div>
      <button
        className="border px-8 py-4 bg-slate-200"
        onClick={() => handleRequestClick()}
      >
        Request a Free Quote
      </button>
    </div>
  );
};

export default RequestQuote;
