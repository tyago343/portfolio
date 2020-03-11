import React from "react";
import ReactDOM from "react-dom";
import StringInput from "../index";

test("Rendearea el typo de campo puesto y el label.", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <StringInput
      type="text"
      name="userName"
      label="Usuario"
      placeholder="Ingrese un nombre de usuario"
      onChange={() => {}}
      value="Santiago"
    />,
    div
  );
  expect(div.querySelector("input").type).toBe("text");
  expect(div.querySelector("label").textContent).toBe("Usuario");
});
