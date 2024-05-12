import React from "react";

const TaskCard = ({
  item,
  index,
  setTasks,
  setTitle,
  setDesc,
  setButton,
  setEditIndex,
}) => {
  const handleDelete = () => {
    setTasks((prevTasks) => prevTasks.filter((task, i) => i !== index));
  };

  const handleEdit = () => {
    setButton("Modify");
    setTitle(item.title);
    setDesc(item.desc);
    setEditIndex(index);
  };

  const updateStatus = () => {
    setTasks((prevTasks) => {
      const newTasks = [...prevTasks];
      newTasks[index] = { ...newTasks[index], status: true };
      return newTasks;
    });
  };

  return (
    <div key={index} class="card" style={{ margin: "1px" }}>
      <div class="card-body">
        <div>
          <h4 class="card-title">
            {" "}
            {item.title}{" "}
          </h4>
        </div>

        <div>
          <p class="card-text">
            {item.desc}
          </p>
        </div>

        <div>
          <div class="dropdown">
          <span>Status</span> {'         '}
          <button
              class="btn  dropdown-toggle btn-primary btn-sm"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
               {item.status == false ? "Not Completed" : "Completed"}
            </button>
            <ul class="dropdown-menu">
              <li>
                <a class="dropdown-item" href="#" onClick={updateStatus}>
                  {item.status == false ? "Completed" : "Not Completed"}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div class="button-row mt-2">
          <a
            href="#"
            class="btn btn-success m-1"
            onClick={handleEdit}
          >
            Edit
          </a>
          <a href="#" class="btn btn-danger" onClick={handleDelete}>
            Delete
          </a>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;