import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BookingSummary from './pages/BookingSummary/BookingSummary';
import SelectMeet from './pages/SelectMeet/SelectMeet';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<SelectMeet />} />
        <Route path='/booking/summary' element={<BookingSummary />} />
      </Routes>
    </Router>
  );
}

export default App;
