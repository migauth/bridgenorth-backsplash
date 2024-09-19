/* eslint-disable react/prop-types */

const RequestQuote = ({ handleRequestClick }) => {
  return (
    <div>
      <button
        className="border px-8 py-4 bg-slate-200"
        onClick={handleRequestClick}
      >
        Request a Free Quote
      </button>
    </div>
  );
};

export default RequestQuote;
