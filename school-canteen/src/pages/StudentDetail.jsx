import { useParams } from 'react-router-dom';
import { useCanteen } from '../context/CanteenContext';

const StudentDetail = () => {
  const { id } = useParams();
  const { students } = useCanteen();
  const student = students.find(s => s.id === id);

  if (!student) return <p>Student not found</p>;

  return (
    <div>
      <h2>{student.name}'s Profile</h2>
      <p>Referral: {student.referalCode}</p>
      <h3>Order History</h3>
      <ul>
        {student.orders.map(order => (
          <li key={order.id}>
            {order.snackName} - Qty: {order.quantity} - Total: ${order.amount}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentDetail;