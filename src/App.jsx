import React, { useState, useEffect } from "react";
import TodoCards from "./components/TodoCards";
import Input from "./components/Input";
import Button from "./components/Button";


const App = () => {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [buttonText, setButton] = useState("Add");
  const [editIndex, setEditIndex] = useState(-1);
  const [filteredTasks, setFilteredTasks] = useState([]);
  const [selectedOption, setSelectedOption] = useState("All");

  useEffect(() => {
    console.log("added tasks");

    
    setFilteredTasks(() => {                               
      const option =
        selectedOption === "Completed"
          ? true
          : selectedOption === "Not Completed"
          ? false
          : null;
      if (option != null) {
        return tasks.filter((task, i) => task.status === option);
      } else {
        return tasks;
      }
    });
  }, [selectedOption, tasks]);

  return (
    <div >
      <div className="header text-center" style={{
      backgroundColor:"#5AB2FF",
      marginBottom : "25px",
      padding:'50px'
    }}>
        <h3>Todo List</h3>
      </div>

      <div                                         
        className="row"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="col-md-8">
          <Input
            setTitle={setTitle}
            setDesc={setDesc}
            title={title}
            desc={desc}
          />
        </div>

        <div className="col-md-2" style={{ marginTop: "20px", width: "18rem" }}>
          <Button
            setTasks={setTasks}
            setTitle={setTitle}
            setDesc={setDesc}
            buttonText={buttonText}
            title={title}
            desc={desc}
            editIndex={editIndex}
          />
        </div>
      </div>

      <div                                              
        className="row justify-content-between " 
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="col-md-6">
          <h5 style={{ marginLeft: "7em" }}>My Tasks</h5>
        </div>

        <div
          className="col-md-4 "
          style={{
            marginRight: "8em",
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <h5>Status Filter: </h5>
          <select
            class="form-select"
            onChange={(e) => setSelectedOption(e.target.value)}
            style={{
              width: "12rem",
              backgroundColor: '#5AB2FF',
              color: "white",
            }}
          >
            <option>All</option>
            <option>Completed</option>
            <option>Not Completed</option>
          </select>
        </div>
      </div>

      <div className="row">
        <div class="col-sm-12">
          <TodoCards
            filteredTasks={filteredTasks}
            setTasks={setTasks}
            setTitle={setTitle}
            setDesc={setDesc}
            setButton={setButton}
            setEditIndex={setEditIndex}
          />
        </div>
      </div>
    </div>
  );
};

export default App;