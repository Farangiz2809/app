import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import AddUser from "./components/adduser/AddUser";
import Team from "./components/team/Team";
import UserCard from "./components/team/UserCard";
function App() {
  const users = [
    {
      id: 1,
      name: "Rukshona",
      workingIn: "UI Designer",
      imgSrc:
        "https://vsememy.ru/kartinki/wp-content/uploads/2023/03/1639244750_59-papik-pro-p-rabota-klipart-60.jpg",
    },
    {
      id: 2,
      name: "Ariana",
      workingIn: "Front-end",
      imgSrc: "https://flyclipart.com/thumb2/clipart-92989.png",
    },
    {
      id: 3,
      name: "Bakhrom",
      workingIn: "IT security",
      imgSrc:
        "https://vsememy.ru/kartinki/wp-content/uploads/2023/03/1642359900_15-papik-pro-p-ofisnii-klipart-15.jpg",
    },
    {
      id: 4,
      name: "Sofiya",
      workingIn: "UI Designer",
      imgSrc:
        "https://papik.pro/uploads/posts/2023-02/1675781018_papik-pro-p-risunok-rabotayushchego-cheloveka-29.png",
    },
    {
      id: 5,
      name: "Oriyon",
      workingIn: "Front-end",
      imgSrc: "https://klike.net/uploads/posts/2023-02/1675758198_3-58.jpg",
    },
    {
      id: 6,
      name: "Sheroz",
      workingIn: "IT security",
      imgSrc:
        "https://papik.pro/uploads/posts/2023-01/1674100252_papik-pro-p-programmist-risunok-34.jpg",
    },
  ];

  return (
    <div>
      <ul>
        <li>
          <Link to="/team">team</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/team" element={<Team users={users} />} />
        <Route path="/team/:id" element={<UserCard users={users} />} />
      </Routes>
    </div>
  );
}

export default App;
