import { useState } from "react";
import { v4 as uuid } from "uuid";
export default function AddUser({ handleAddClick }) {
  const [addUser, setAddUser] = useState({
    id: Math.random(),
    name: "",
    workingIn: "",
    imgSrc: "",
  });
  console.log(addUser.id);

  const changeUser = (key) => (e) => {
    setAddUser({
      ...addUser,
      [key]: e.target.value,
    });
  };

  //   const changeHandlerWork = (e) => {
  //     setAddUser({
  //       ...addUser,
  //       workingIn: e.target.value,
  //     });
  //   };

  console.log("addUser", addUser);
  return (
    <div>
      <input onChange={changeUser("name")} type="text" placeholder="add name" />
      <input
        onChange={changeUser("workingIn")}
        type="text"
        placeholder="add job"
      />
      <input
        onChange={changeUser("imgSrc")}
        type="text"
        placeholder="add img"
      />
      <button onClick={()=>handleAddClick(addUser)}>
        Add
      </button>
    </div>
  );
}
