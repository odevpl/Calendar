import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BookingSummary from './pages/BookingSummary/BookingSummary';
import SelectMeet from './pages/SelectMeet/SelectMeet';
import Calendar from './pages/calendar/Calendar';
import Users from './pages/users/Users';
import NavBar from './components/layout/NavBar/NavBar';
import UserEdit from './pages/users/edit/UserEdit';
import { useState } from 'react';
import pl from '../src/translations/pl';
import en from '../src/translations/en';

function App() {
  const [language, setLanguage] = useState('pl');

  const handleLanguageChange = (newLanguage) => {
    setLanguage(newLanguage);
  };

  const translate = language === 'pl' ? pl : en;

  return (
    <Router>
      <NavBar
        language={language}
        handleLanguageChange={handleLanguageChange}
        translate={translate}
      />
      <Routes>
        <Route
          path='/select-meet'
          element={<SelectMeet translate={translate} />}
        />
        <Route
          path='/booking/summary'
          element={<BookingSummary translate={translate} />}
        />
        <Route path='/calendar' element={<Calendar translate={translate} />} />
        <Route path='/users' element={<Users translate={translate} />} />
        <Route
          path='/users/edit'
          element={<UserEdit translate={translate} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
