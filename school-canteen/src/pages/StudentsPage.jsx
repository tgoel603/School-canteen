import { useCanteen } from '../context/CanteenContext';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const StudentsPage = () => {
  const { students, addStudent } = useCanteen();
  const { register, handleSubmit, reset ,formState: { errors }} = useForm();

  const onSubmit = (data) => {
    addStudent(data.name);
    reset();
  };

  return (
    <div>
      <h2>Add New Student</h2>
     
      <form onSubmit={handleSubmit(onSubmit)} style={{ marginBottom: '20px' }}>
  <div style={{ display: 'inline-flex', flexDirection: 'column', gap: '5px', width: '200px', alignContent: 'center' }}>
    <input 
      {...register("name", { required: "Student name is required" })} 
      placeholder="Student Name" 
      style={{ padding: '8px', border: errors.name ? '1px solid red' : '1px solid #ccc' }}
    />
    {/* Use the errors variable here to fix the linting error */}
    {errors.name && <span style={{ color: 'red', fontSize: '12px' }}>{errors.name.message}</span>}
    
    <button type="submit" style={{ width: 'fit-content', padding: '8px 16px' }}>
      Create
    </button>
  </div>
</form>
      <h2>Student List</h2>
       <div style={{ display: 'grid',  gap: '10px' }}></div>
      <table>
        <thead>
          <tr>
              {/* Padding creates the gap between words */}
              <th style={{ padding: '16px 24px', fontSize: '14px', fontWeight: 'bold', color: '#64748b' }}>NAME</th>
              <th style={{ padding: '16px 24px', fontSize: '14px', fontWeight: 'bold', color: '#64748b' }}>REFERRAL</th>
              <th style={{ padding: '16px 24px', fontSize: '14px', fontWeight: 'bold', color: '#64748b' }}>TOTAL SPENT</th>
              <th style={{ padding: '16px 24px', fontSize: '14px', fontWeight: 'bold', color: '#64748b' }}>ACTION</th>
            </tr>
        </thead>
        <tbody>
            {students.map(s => (
              <tr key={s.id} style={{ borderBottom: '1px solid #f1f5f9' }}>
                <td style={{ padding: '16px 24px', color: '#1e293b' }}>{s.name} [cite: 31]</td>
                <td style={{ padding: '16px 24px', color: '#64748b', fontFamily: 'monospace' }}>{s.referralCode || s.referalCode} [cite: 32, 43]</td>
                <td style={{ padding: '16px 24px', fontWeight: 'bold', color: '#1e293b' }}>${s.totalSpent} [cite: 33]</td>
                <td style={{ padding: '16px 24px' }}>
                  <Link to={`/student/${s.id}`} style={{ color: '#2563eb', textDecoration: 'none', fontWeight: '600' }}>
                    View Details 
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        
      </table>
    </div>
  );
};

export default StudentsPage;