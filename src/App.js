import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./components/navbar.component";
import ExercisesList from "./components/exercises-list.component";
import EditExercise from "./components/edit-exercise.component";
import CreateExercise from "./components/create-exercise.component";

import UserLogin from "./components/user-login.component";
import UserRegister from "./components/user-register.component";
import Footer from "./components/footer.component";
import GoogleMap from "./components/map.component";

function App() {
  return (
    <Router>
      <div className='container'>
        <Navbar />
        <br />
        <Route path='/' exact component={ExercisesList} />
        <Route path='/edit/:id' component={EditExercise} />
        <Route path='/create' component={CreateExercise} />
        
        <Route path='/login' component={UserLogin} />
        <Route path='/register' component={UserRegister} />
        <Footer />
        <GoogleMap />
      </div>
    </Router>
  );
}

export default App;
