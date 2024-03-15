import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage, PostPage } from "./pages/index";

import styles from "./App.module.css";

const App = () => {
  return (
    <div className={styles.container}>
      <Router>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/posts/:id' element={<PostPage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
