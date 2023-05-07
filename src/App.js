import { Fragment } from "react";
import "./App.css";
import Landingpage from "./Component/pages/Landingpage";
import Navbar from "./Component/Ui/Navbar";
// import { BrowserRouter, Route, Switch } from "react-router-dom";
// import Login from "./Component/pages/Login";
function App() {
  return (
    <Fragment>
      <Navbar />
      <Landingpage />
    </Fragment>

    // <BrowserRouter>
    //   <Navbar />
    //   <Switch>
    //     <Route path="/" component={Landingpage} />
    //     <Route exact path="/login" component={Login} />
    //   </Switch>
    // </BrowserRouter>
  );
}

export default App;

// import "./App.css";
// import Landingpage from "./Component/pages/Landingpage";
// import Navbar from "./Component/Ui/Navbar";
// import { createContext, useState } from "react";

// export const ThemeContext = createContext(null);

// function App() {
//   const [theme, setTheme] = useState ("dark");
//   const toggleTheme = () => {
//     setTheme((curr) => (curr === "light" ? "dark" : "light"));
//   };
//   return (
//     <ThemeContext.Provider value={{ theme, toggleTheme }}>
//       <div className="App" id="{theme}">
//         <Navbar />
//         <Landingpage />
//       </div>
//     </ThemeContext.Provider>
//   );
// }

// export default App;
