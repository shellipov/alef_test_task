import React from "react";
import "./style.css";

const PreView = () => {
  const userData = {
    name: "Василий",
    age: 30,
  };

  const children = [
    {
      name: "Коля",
      age: 5,
    },
    {
      name: "Саша",
      age: 8,
    },
    {
      name: "Вика",
      age: 12,
    },
  ];

  let { name, age } = userData;

  return (
    <section>
      <div className="preview_person_data">
        <h2>Персональные данные</h2>
        <div className="person_data_block">
          <span className="person_data">{`${name}, ${age} лет`}</span>
        </div>
      </div>

      <div className="preview_children_data">
        <h2>Дети</h2>
        <div className="children_data_block">
          {children.map((child) => (
            <div key={child.name + child.age} className="child_card">
              <span className="child_data">{`${child.name}, ${child.age} лет`}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PreView;
