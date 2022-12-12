import './App.css';
import Navbar from './components/nav_bar';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import FindStudent from './pages/query/find_students';
import FindCoach from './pages/query/find_coaches';
import FindWorkout from './pages/query/workouts.js';
import SportInfo from './pages/query/sport_info.js';
import InsertCoach from './pages/updates/insert_coach.js';
import RemoveCoach from './pages/updates/remove_coach.js';
import UpdateCoach from './pages/updates/update_coach.js';
import InsertStudent from './pages/updates/insert_student.js';
import RemoveStudent from './pages/updates/remove_student.js';
import UpdateStudent from './pages/updates/update_student.js';

function App() {

  return (
    
    <div className="get_information">
      <Router>
      <Navbar />
      <Routes>
          <Route path='/find_students' element={<FindStudent/>} />
          <Route path='/find_coaches' element={<FindCoach/>} />
          <Route path='/sport_workout' element={<FindWorkout/>} />
          <Route path='/sport_info' element={<SportInfo/>} />
          <Route path='/insert_coach' element={<InsertCoach/>} />
          <Route path='/remove_coach' element={<RemoveCoach/>} />
          <Route path='/update_coach' element={<UpdateCoach/>} />
          <Route path='/insert_student' element={<InsertStudent/>} />
          <Route path='/remove_student' element={<RemoveStudent/>} />
          <Route path='/update_student' element={<UpdateStudent/>} />
      </Routes>
      </Router>
      
    </div>
  );
}

export default App;
