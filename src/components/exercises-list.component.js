import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

//Functional react component because of the lack of state and lifecycle method. Simplified for accepting props and returning JSX
//Loading properties for each exercise and linking to the edit page and delete function below.
const Exercise = (props) => (
  <tr>
    <td>{props.exercise.username}</td>
    <td>{props.exercise.description}</td>
    <td>{props.exercise.duration}</td>
    <td>{props.exercise.date.substring(0, 10)}</td>
    <td>
      <Link to={"/edit/" + props.exercise._id}>edit</Link> |{" "}
      <a
        href='/'
        onClick={() => {
          props.deleteExercise(props.exercise._id);
        }}
      >
        delete
      </a>
    </td>
  </tr>
);

//Class component with constructor to initialize state from empty exercises Array and add the delete exercise method
export default class ExercisesList extends Component {
  constructor(props) {
    super(props);
    
    this.deleteExercise = this.deleteExercise.bind(this);

    this.state = { exercises: [] };
  }

  //Getting exercises from the database and catching errors
  componentDidMount() {
    axios
      .get("http://localhost:5000/exercises/")
      .then((response) => {
        this.setState({ exercises: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  //Delete method, sending to the DB and removing it from the table, by filtering for the element
  deleteExercise(id) {
    axios.delete("http://localhost:5000/exercises/" + id).then((response) => {
      console.log(response.data);
    });

    this.setState({
      exercises: this.state.exercises.filter((el) => el._id !== id),
    });
  }
  //For the exerciseList array, returning a component for each exercise
  exerciseList() {
    return this.state.exercises.map((currentexercise) => {
      return (
        <Exercise
          exercise={currentexercise}
          deleteExercise={this.deleteExercise}
          key={currentexercise._id}
        />
      );
    });
  }

  //Rendering exercise list table and returning the ExerciseList 
  render() {
    return (
      <div>
        <h3>Logged Exercises</h3>
        <table className='table'>
          <thead className='thead-dark'>
            <tr>
              <th>Username</th>
              <th>Description</th>
              <th>Duration</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>{this.exerciseList()}</tbody>
        </table>
      </div>
    );
  }
}
