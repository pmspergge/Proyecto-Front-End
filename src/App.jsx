import LayoutMain from "./Layout/LayoutMain";
import Form from "./Components/Form";
import Login from "./Components/Login";
import Main from "./Components/Main"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LayoutMain></LayoutMain>}>
            <Route index element={<Main></Main>}></Route>
            <Route path="login" element={<Login></Login>}></Route>
            <Route path="form" element={<Form></Form>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
