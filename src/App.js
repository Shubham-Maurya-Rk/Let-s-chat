import LoginPage from "./MyComponents/LoginPage"
import Navbar from "./MyComponents/Navbar"
import ChatroomAndPeople from "./MyComponents/ChatroomAndPeople"
import { BrowserRouter as Router, Routes,Route,Link } from "react-router-dom";

function App() {
  return (<>
    <Router>
      <Navbar />
      <Routes>
        <Route index element={<LoginPage/>}/>
        <Route exact path='chat' element={<ChatroomAndPeople/>} />
      </Routes>
    </Router>
  </>);
}

export default App;
