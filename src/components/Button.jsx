import React from "react";

const Button = ({
  setTasks,
  setTitle,
  setDesc,
  buttonText,
  title,
  desc,
  editIndex,
}) => {
  const handleSub = () => {
      let task = {
        title: title,
        desc: desc,
        status: false,
      };

      

      setTasks((prevTasks) => [...prevTasks, task]);
      setTitle(" ");
      setDesc(" ");
    
  };

  const handleUpdate = () => {

    setTasks((prevTasks) => {
      const newTasks = [...prevTasks];
      newTasks[editIndex] = {
        ...newTasks[editIndex],
        title: title,
        desc: desc,
      };
      return newTasks;
    });
  };

  return (
    <div>
      <button
        type="button"
        className=" btn btn-success"
       
        onClick={
          buttonText == "Add" && title.trim() !== "" && desc.trim() !== ""
            ? handleSub
            : handleUpdate
        }
      >
        {buttonText}
      </button>
    </div>
  );
};

export default Button;
