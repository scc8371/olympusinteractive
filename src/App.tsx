import Navbar from "./components/Navbar";
import NavLink from './components/NavLink'
import Hero from "./components/Hero"
import Profiles from "./components/Profiles";
import Games from "./components/Games";
import Panel from "./components/Panel"
import assets from "./assets"



const App = () => {
  return (
    <div>
      <Navbar imageLink={assets["logo-no-background"]}>
        <NavLink link={"#"}>Games</NavLink>
        <NavLink link={"#"}>Team</NavLink>
        <NavLink link={"#"}>Services</NavLink>
        <NavLink link={"#"}>About</NavLink>
        <NavLink link={"#"}>Contact</NavLink>
      </Navbar>

      <div className="main">
        <Hero></Hero>
        <Games></Games>
        <Profiles></Profiles>
      </div>

    </div>
  );
}

export default App;