import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import InvoiceDemoComponent from './components/invoice-demo';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/invoice" element={<InvoiceDemoComponent />} />
      </Routes>
    </Router>
  );
}

export default App;
