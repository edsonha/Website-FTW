import React from "react";
import InputField from "./InputField";
import Button from "./Button";

function AddDataConsole({
  handleChangeInput,
  handleCreateData,
  nameInputAdd,
  orangeInputAdd,
  appleInputAdd
}) {
  return (
    <div className="row">
      <div className="input-group mb-3 col-lg-8">
        <label className="mt-2 mr-2">ADD:</label>
        <InputField
          name="nameInputAdd"
          placeholder="Enter name..."
          onChange={handleChangeInput}
          value={nameInputAdd}
        />
        <InputField
          name="appleInputAdd"
          placeholder="Enter apple quantity..."
          onChange={handleChangeInput}
          value={appleInputAdd}
        />
        <InputField
          name="orangeInputAdd"
          placeholder="Enter orange quantity..."
          onChange={handleChangeInput}
          value={orangeInputAdd}
        />
        <div className="input-group-append">
          <Button sign="+" color="btn-success" onClick={handleCreateData} />
        </div>
      </div>
    </div>
  );
}

export default AddDataConsole;
