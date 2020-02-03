import React from "react";
import InputField from "./InputField";
import Button from "./Button";

function EditDataConsole({
  handleChangeInput,
  handleEditData,
  nameInputEdit,
  appleInputEdit,
  orangeInputEdit
}) {
  return (
    <div className="row">
      <div className="input-group mb-3 col-lg-8">
        <label className="mt-2 mr-2">EDIT:</label>
        <InputField
          name="nameInputEdit"
          placeholder="Enter name..."
          onChange={handleChangeInput}
          value={nameInputEdit}
        />
        <InputField
          name="appleInputEdit"
          placeholder="Edit apple quantity..."
          onChange={handleChangeInput}
          value={appleInputEdit}
        />
        <InputField
          name="orangeInputEdit"
          placeholder="Edit orange quantity..."
          onChange={handleChangeInput}
          value={orangeInputEdit}
        />
        <div className="input-group-append">
          <Button sign="+" color="btn-success" onClick={handleEditData} />
        </div>
      </div>
    </div>
  );
}

export default EditDataConsole;
