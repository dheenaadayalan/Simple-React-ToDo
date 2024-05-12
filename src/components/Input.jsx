import React, { useState } from "react";

const Input = ({ setTitle, setDesc, title, desc }) => {
  return (
    <div className="row" style={{ margin: "24px" }}>
      <div className="col-md-6">

        Title:{" "}
        <input
          type="text"
          placeholder=" "
          class="form-control"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div className="col-md-6">
        Description:{" "}
        <input
          type="text"
          placeholder=" "
          class="form-control"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Input;