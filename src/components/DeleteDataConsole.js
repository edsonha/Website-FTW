import React from "react";
import InputField from "./InputField";
import Button from "./Button";

function DeleteDataConsole({
  handleDeleteData,
  handleChangeInput,
  nameInputDelete
}) {
  return (
    <div className="row">
      <div className="input-group mb-3 col-lg-8">
        <label className="mt-2 mr-2">DELETE:</label>
        <InputField
          name="nameInputDelete"
          placeholder="Delete name..."
          onChange={handleChangeInput}
          value={nameInputDelete}
        />
        <div className="input-group-append">
          <Button sign="-" color="btn-danger" onClick={handleDeleteData} />
        </div>
      </div>
    </div>
  );
}

export default DeleteDataConsole;
