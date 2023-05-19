import { useEffect } from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function Edit({ user, deleteUser, teamList, setTeamList }) {
  const [showInput, setShowInput] = useState(false);
  const [edit, setEdit] = useState(user);
  const onEdit = (id) => {
    const updatedUsers = teamList.map((user) => {
      if (user.id === id) {
        return edit;
      } else {
        return user;
      }
    });
    setTeamList(updatedUsers);
  };

  return !showInput ? (
    <div>
      <div className="p-4">
        <div className="h-full flex flex-col items-center text-center">
          <Link to={`${user.id}`}>
            <img
              src={user.imgSrc}
              className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
            />
            <div className="w-full">
              <h2 className="title-font font-medium text-lg text-gray-900">
                {user.name}
              </h2>
              <h3 className="text-gray-500 mb-3">{user.workingIn}</h3>
            </div>
          </Link>
        </div>
      </div>
      <div className=" w-full flex justify-center mb-2">
        <button className="border2" on onClick={() => deleteUser(user.id)}>
          Delete
        </button>
        <button className="border2" onClick={() => setShowInput(true)}>
          Edit
        </button>
      </div>
    </div>
  ) : (
    <div className="flex flex-col justify-center align-center w-full">
      <input
        className="w-full border border-2 rounded-lg border-gray-400 mb-1"
        onChange={(e) => setEdit({ ...edit, name: e.target.value })}
        type="text"
        placeholder="add name"
        value={edit.name}
      />
      <input
        className="w-full border border-2 rounded-lg border-gray-400 mb-1"
        onChange={(e) => setEdit({ ...edit, workingIn: e.target.value })}
        type="text"
        placeholder="add job"
        value={edit.workingIn}
      />
      <input
        className="w-full border border-2 rounded-lg border-gray-400 mb-2"
        onChange={(e) => setEdit({ ...edit, imgSrc: e.target.value })}
        type="text"
        placeholder="add img"
        value={edit.imgSrc}
      />
      <button
        className="border2"
        onClick={() => {
          onEdit(user.id);
          setShowInput(false);
        }}
      >
        Save
      </button>
    </div>
  );
}
