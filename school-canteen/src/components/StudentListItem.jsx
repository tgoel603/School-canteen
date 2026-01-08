import { Link } from 'react-router-dom';

export const StudentListItem = ({ student }) => (
  <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
    <td className="py-4 px-4 font-medium text-slate-900">{student.name}</td>
    <td className="py-4 px-4 text-slate-600 font-mono text-sm">{student.referalCode}</td>
    <td className="py-4 px-4 text-slate-900 font-semibold">${student.totalSpent}</td>
    <td className="py-4 px-4 text-right">
      <Link 
        to={`/student/${student.id}`}
        className="text-blue-600 hover:text-blue-800 font-medium text-sm"
      >
        View Details →
      </Link>
    </td>
  </tr>
);