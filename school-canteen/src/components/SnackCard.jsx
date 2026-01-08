export const SnackCard = ({ snack, onOrder }) => (
  <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-5 hover:shadow-md transition-shadow">
    <div className="flex justify-between items-start mb-4">
      <h3 className="text-lg font-bold text-slate-800">{snack.name}</h3>
      <span className="bg-green-100 text-green-700 text-sm font-semibold px-2.5 py-0.5 rounded">
        ${snack.price}
      </span>
    </div>
    <p className="text-slate-500 text-sm mb-4">Total Orders: {snack.ordersCount}</p>
    <button 
      onClick={() => onOrder(snack)}
      className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-lg transition-colors"
    >
      Order Now
    </button>
  </div>
);