import React, { useState } from "react";
import Input from "../../UI/Input/Input";
import Button from "../../UI/Button/Button";
import cross from "../../images/cross.svg";
import "./style.css";

const Form = () => {
  const forms = [1, 2, 3, 4];
  const [userData, setUserData] = useState({ name: "", age: "" });

  return (
    <section>
      <div className="form_person_data">
        <h2>Персональные данные</h2>
        <Input
          value={userData.name}
          onChange={(e) => setUserData({ ...userData, name: e.target.value })}
          name="name"
          label="Имя"
        />
        <Input
          value={userData.age}
          onChange={(e) => setUserData({ ...userData, age: e.target.value })}
          type="number"
          label="Возраст"
        />
      </div>
      <div className="form_children_data">
        <div className="add_children_block">
          <h2>Дети (макс. 5)</h2>
          <Button styleType={"border"}>
            <img className="sross_img" src={cross} alt="add_cross" />
            <span>Добавить ребенка</span>
          </Button>
        </div>
        <div className="children_form_Block">
          {forms.map((el) => (
            <div key={el} className="children_form">
              <Input label="Имя" />
              <Input label="Возраст" type="number" />
              <Button>Удалить</Button>
            </div>
          ))}
        </div>
        <div className="add_data_block">
          <Button styleType={"blue"}>Сохранить</Button>
        </div>
      </div>
    </section>
  );
};

export default Form;
