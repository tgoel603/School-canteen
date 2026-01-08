import { create } from 'zustand';
import axios from 'axios';

const API_URL = 'http://localhost:5000';

export const useStore = create((set) => ({
  students: [],
  snacks: [],
  loading: false,

  fetchData: async () => {
    set({ loading: true });
    const [studentsRes, snacksRes] = await Promise.all([
      axios.get(`${API_URL}/students`),
      axios.get(`${API_URL}/snacks`)
    ]);
    set({ students: studentsRes.data, snacks: snacksRes.data, loading: false });
  },

  addStudent: async (name) => {
    const newStudent = { 
      name, 
      referralCode: Math.random().toString(36).substring(7).toUpperCase(), 
      totalSpent: 0 
    };
    const res = await axios.post(`${API_URL}/students`, newStudent);
    set((state) => ({ students: [...state.students, res.data] }));
  }
}));