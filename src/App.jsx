import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Getstarted from "./pages/GetStarted";
import Signin from "./pages/Signin";
import Welcome from "./pages/Welcome";
import Create from "./pages/Create";
import EditStory from "./pages/EditStory";
import Story from "./pages/Story";
import Allstories from "./pages/Allstories";
import MyStory from "./pages/MyStory";
import AllUserStories from "./pages/userStories/AllUserStories";
import DraftStories from "./pages/userStories/DraftStories";
import Published from "./pages/userStories/Published";
import { ProtectedRoutes } from "./routes/protectedRoute";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          {/* external pages */}
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Getstarted />} />
          <Route path="/login" element={<Signin />} />
          {/* internal pages */}
          <Route element={<ProtectedRoutes/>}>

          <Route path="/welcome" element={<Welcome />} />
          <Route path="/create" element={<Create />} />
          <Route path="/allstories" element={<Allstories />} />
          <Route path="/mystories" element={<MyStory />}>
            <Route path="/mystories" element={<AllUserStories />} />
            {/* <Route path="drafts" element={<DraftStories />} />
            <Route path="published" element={<Published />} /> */}
          </Route>
          <Route path="/story/:storyId" element={<Story />} />
          <Route path="/edit/:storyId" element={<EditStory />} />
          {/* end of internal pages */}
          </Route>
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
