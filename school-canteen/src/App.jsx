import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { CanteenProvider } from "./context/CanteenContext";
import SnacksPage from "./pages/SnacksPage"; 
import StudentsPage from "./pages/StudentsPage";
import StudentDetail from "./pages/StudentDetail"; 

const Navbar = () => (
  <nav style={{ 
    padding: '1rem 2rem', 
    background: '#ffffff', 
    borderBottom: '1px solid #e2e8f0',
    display: 'flex', 
    justifyContent: 'space-between', 
    alignItems: 'center',
    marginBottom: '2rem'
  }}>
    <span style={{ fontWeight: 'bold', color: '#2563eb' }}>MY CANTEEN</span>
    
    <div style={{display: 'Flex', gap: '30px' }}> {/* This adds the gap you requested */}
      <Link to="/" style={{ textDecoration: 'none', color: '#475569', fontWeight: '600',alignItems: 'center',flexDirection: 'column'}}>Menu</Link>
      <Link to="/students" style={{ textDecoration: 'none', color: '#475569', fontWeight: '600' , alignItems: 'center',flexDirection: 'column'
      }}>Students</Link>
    </div>
  </nav>
);

function App() {
  return (
    <CanteenProvider>
      <BrowserRouter>
        <div style={{ 
          Height: '4.5vh', 
          backgroundColor: '#f8fafc', 
          backgroundPosition: 'center', 
          backgroundSize: 'cover', 
          width: '100%', 
          borderBottomLeftRadius: '20px', 
          borderBottomRightRadius: '20px',
          color: '#3378e6ff' 
        }}></div>
      
        <Navbar />
        <div style={{ 
          maxWidth: '800px', 
          margin: '0 auto', 
          padding: '0 20px',
          display: 'inline-flex',
          flexDirection: 'column',
          alignItems: 'center' 
        }}>
          <Routes>
            <Route path="/" element={<SnacksPage />} />
            <Route path="/students" element={<StudentsPage />} />
            <Route path="/student/:id" element={<StudentDetail />} />
          </Routes>
        </div>
      </BrowserRouter>
    </CanteenProvider>
  );
}
export default App;