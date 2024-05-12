import React from "react";
import TaskCard from "./TaskCard";

const TodoCards = ({
  filteredTasks,
  setTasks,
  setTitle,
  setDesc,
  setButton,
  setEditIndex,
}) => {
  return (
    <div class="col">
      <section>
        <div className="container mt-2">
          <div className="row row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-left">
            {filteredTasks.map((item, index) => {
              return (
                <TaskCard
                  item={item}
                  index={index}
                  setTasks={setTasks}
                  setTitle={setTitle}
                  setDesc={setDesc}
                  setButton={setButton}
                  setEditIndex={setEditIndex}
                />
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default TodoCards;