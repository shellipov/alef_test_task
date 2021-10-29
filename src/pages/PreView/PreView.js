import React from "react";
import { ageEnding } from "../../utils";
import "./style.css";

const PreView = () => {
  const userData = localStorage.getItem("personData")
    ? JSON.parse(localStorage.getItem("personData"))
    : { name: "", age: "" };
  const children = localStorage.getItem("childrenData")
    ? JSON.parse(localStorage.getItem("childrenData"))
    : [];

  return (
    <section>
      <div className="preview_person_data">
        <h2>Персональные данные</h2>
        <div className="person_data_block">
          <span className="person_data">
            {`${userData.name !== "" ? userData.name : ""}  
          ${userData.name !== "" && userData.age !== "" ? "," : ""} 
          ${userData.age !== "" ? userData.age + ageEnding(userData.age) : ""}`}
          </span>
        </div>
      </div>

      <div className="preview_children_data">
        <h2>Дети</h2>
        <div className="children_data_block">
          {children.length ? (
            children.map((child) => (
              <div key={child.id} className="child_card">
                <span className="child_data">{
                `${child.name}, ${child.age + ageEnding(child.age)} `
                }
                </span>
              </div>
            ))
          ) : (
            <div className="child_card">
              <span className="child_data">Детей нет</span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default PreView;
