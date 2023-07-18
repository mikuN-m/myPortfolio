import React from "react"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Top from "./pages/top"
import Profile from "./pages/profile"
import Skill from "./pages/skill"
import Work from "./pages/work"


class App extends React.Component {
  render(){
    return(
      <div>
        <Router basename={process.env.PUBLIC_URL}>
          <Routes>
            <Route path="/" element={<Top />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/skill" element={<Skill />} />
            <Route path="/work" element={<Work />} />
          </Routes>
        </Router>

        <script src="./js/main.js" type="module"></script>
      </div>
    )
  }
}

export default App
