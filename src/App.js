import Welcome from "./Pages/Welcome";
import Login from "./Pages/Login";
import TicTacToe from "./Game/TicTacToe";
// import Register from "./Pages/Register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Register from "./Pages/Register";
import { auth } from "./firebase";
import { useEffect, useState } from "react";

function App() {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        // if user logged in successfully set user name
        setUserName(user.displayName);
      } else {
        setUserName("");
      }
    });
  }, []);
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/tictactoe"
            element={<TicTacToe user={userName.name} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
