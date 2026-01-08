import { useState } from 'react';
import { useCanteen } from '../context/CanteenContext';

const SnacksPage = () => {
  const { snacks, students, placeOrder } = useCanteen();
  const [selectedSnack, setSelectedSnack] = useState(null);
  const [form, setForm] = useState({ studentId: '', quantity: 1 });

  const handleOrder = (e) => {
    e.preventDefault();
    placeOrder(form.studentId, selectedSnack.id, parseInt(form.quantity));
    setSelectedSnack(null);
    alert("Order Placed!");
  };

  return (
    <div>
      <h2>Available Snacks</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
        {snacks.map(snack => (
          <div key={snack.id} style={{ border: '1px solid #ccc', padding: '10px' }}>
            <h3>{snack.name}</h3>
            <p>Price: ${snack.price}</p>
            <p>Orders: {snack.ordersCount}</p>
            <button onClick={() => setSelectedSnack(snack)}>Order</button>
          </div>
        ))}
      </div>

      {selectedSnack && (
        <div style={{ position: 'fixed', top: '20%', left: '30%', background: 'white', border: '2px solid black', padding: '20px' }}>
          <h3>Order {selectedSnack.name}</h3>
          <form onSubmit={handleOrder}>
            <select required onChange={e => setForm({...form, studentId: e.target.value})}>
              <option value="">Select Student</option>
              {students.map(s => <option key={s.id} value={s.id}>{s.name}</option>)}
            </select>
            <input type="number" min="1" max="35" value={form.quantity} 
              onChange={e => setForm({...form, quantity: e.target.value})} />
            <button type="submit">Confirm Order</button>
            <button type="button" onClick={() => setSelectedSnack(null)}>Cancel</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default SnacksPage;