/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react";
import { initialSnacks, initialStudents } from "../utils/mockData";
export const CanteenContext = createContext();
 
export const CanteenProvider = ({ children }) => {
  const [snacks, setSnacks] = useState(initialSnacks);
  const [students, setStudents] = useState(initialStudents);

  const addStudent = (name) => {
    const newStudent = {
      id: Date.now().toString(),
      name,
      referalCode: `REF-${Math.floor(Math.random() * 1000)}`,
      totalSpent: 0,
      orders: []
    };
    setStudents([...students, newStudent]);
  };

  const placeOrder = (studentId, snackId, quantity) => {
    const snack = snacks.find(s => s.id === snackId);
    if (!snack) return;

    const amount = snack.price * quantity;

    setStudents(prev => prev.map(student => {
      if (student.id === studentId) {
        return {
          ...student,
          totalSpent: student.totalSpent + amount,
          orders: [...student.orders, { snackName: snack.name, quantity, amount, id: Date.now() }]
        };
      }
      return student;
    }));

    setSnacks(prev => prev.map(s => 
      s.id === snackId ? { ...s, ordersCount: (s.ordersCount || 0) + 1 } : s
    ));
  };

  return (
    <CanteenContext.Provider value={{ snacks, students, addStudent, placeOrder }}>
      {children}
    </CanteenContext.Provider>
  );
};
export const useCanteen = () => {
  const context = useContext(CanteenContext);
  if (!context) throw new Error("useCanteen must be used within a CanteenProvider");
  return context;
};