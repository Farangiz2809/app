import { useState } from "react";
import "./team.css";
import AddUser from "../adduser/AddUser";
import Edit from "../edit/Edit";

export default function Team({users}) {
  
  const [teamList, setTeamList] = useState(users);
  const onFilter = (job) => {
    setTeamList(users.filter((user) => user.workingIn == job));
  };

  const reset = () => {
    setTeamList(users);
  };

  const deleteUser = (id) => {
    setTeamList(teamList.filter((user) => user.id !== id));
  };

  const onSortOfNameAz = () => {
    setTeamList(
      [...teamList].sort((a, b) => {
        if (a.name > b.name) {
          return 1;
        } else if (a.name < b.name) {
          return -1;
        } else {
          return 0;
        }
      })
    );
  };
  const onSortOfNameZa = () => {
    setTeamList(
      [...teamList].sort((a, b) => {
        if (a.name > b.name) {
          return -1;
        } else if (a.name < b.name) {
          return 1;
        } else {
          return 0;
        }
      })
    );
  };

  // const [edit, setEdit] =useState(false);
  // const handleEditClick =() =>{
  //    setEdit(true)
  // };
  // const handleSaveClick = ()=>{
  //   setEdit(false)
  // }

  const handleAddClick = (user) => {
    setTeamList([...teamList, user]);
  };

  return (
    <dev className="p-2 w-full">
      <div className="flex justify-center">
        <button className="border-1" onClick={() => onFilter("IT security")}>
          IT security
        </button>
        <button className="border-1" onClick={() => onFilter("Front-end")}>
          Front-end
        </button>
        <button className="border-1" onClick={() => onFilter("UI Designer")}>
          UI Designer
        </button>
        <button className="border-1" onClick={reset}>
          Reset
        </button>
        <button className="border-1" onClick={onSortOfNameAz}>
          Sort A-Z
        </button>
        <button className="border-1" onClick={onSortOfNameZa}>
          Sort Z-A
        </button>
      </div>

      <div className="flex flex-wrap -m-2 grid grid-cols-4 px-40 py-10">
        {teamList.map((user) => (
          <div
            className="flex flex-wrap m-4 bg-red-200  drop-shadow-lg shadow-inner contrast-125 hover:bg-stone-300 border border-zinc-400 border-2 border rounded-xl"
            key={user.id}
          >
            <Edit
              user={user}
              deleteUser={deleteUser}
              teamList={teamList}
              setTeamList={setTeamList}
            />
          </div>
        ))}
      </div>
      <AddUser handleAddClick={handleAddClick} />
      
    </dev>
  );
}
