import React from 'react';

const CardForm = () => {
  return (
    <div className="max-w-lg mx-auto p-8 bg-white rounded-2xl shadow-lg mt-10">
      <h2 className="text-xl font-semibold text-gray-800 mb-6">Add New Card</h2>
      <form className="space-y-5">
        <div>
          <label className="block text-sm font-medium text-gray-700">Cardholder Name</label>
          <input
            type="text"
            placeholder="John Doe"
            className="mt-1 w-full rounded-lg border-gray-300 px-4 py-2 focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Card Number</label>
          <input
            type="text"
            placeholder="1234 5678 9012 3456"
            className="mt-1 w-full rounded-lg border-gray-300 px-4 py-2 focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div className="flex gap-4">
          <div className="w-1/2">
            <label className="block text-sm font-medium text-gray-700">Expiry Date</label>
            <input
              type="text"
              placeholder="MM/YY"
              className="mt-1 w-full rounded-lg border-gray-300 px-4 py-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div className="w-1/2">
            <label className="block text-sm font-medium text-gray-700">CVV</label>
            <input
              type="password"
              placeholder="•••"
              className="mt-1 w-full rounded-lg border-gray-300 px-4 py-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
        </div>
        <div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white rounded-lg py-2 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default CardForm;
