import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BookingSummary from './pages/BookingSummary/BookingSummary';
import SelectMeet from './pages/SelectMeet/SelectMeet';
import Calendar from './pages/calendar/Calendar';
import Users from './pages/users/Users';
import NavBar from './components/layout/NavBar/NavBar';
import UserEdit from './pages/users/edit/UserEdit';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path='/select-meet' element={<SelectMeet />} />
        <Route path='/booking/summary' element={<BookingSummary />} />
        <Route path='/calendar' element={<Calendar />} />
        <Route path='/users' element={<Users />} />
        <Route path='/users/edit' element={<UserEdit />} />
      </Routes>
    </Router>
  );
}

export default App;
