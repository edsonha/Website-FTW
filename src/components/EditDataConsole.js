import React from "react";
import InputField from "./InputField";
import Button from "./Button";

function EditDataConsole({ handleChangeInput, handleEditData }) {
  return (
    <div className="row">
      <div className="input-group mb-3 col-lg-8">
        <label className="mt-2 mr-2">EDIT:</label>
        <InputField
          name="nameInput"
          placeholder="Enter name..."
          onChange={handleChangeInput}
        />
        <InputField
          name="appleInput"
          placeholder="Edit apple quantity..."
          onChange={handleChangeInput}
        />
        <InputField
          name="orangeInput"
          placeholder="Edit orange quantity..."
          onChange={handleChangeInput}
        />
        <div className="input-group-append">
          <Button sign="+" color="btn-success" onClick={handleEditData} />
        </div>
      </div>
    </div>
  );
}

export default EditDataConsole;
