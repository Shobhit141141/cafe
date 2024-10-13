import React, { useState } from "react";
import menu from "./icons/bars-solid.svg";
import user from "./icons/person-military-to-person-solid.svg";
import logo from "./icons/—Pngtree—coffee logo_5898135.png";

function Project() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };

  return (
    <div>
      <img
        src={menu}
        alt="Menu"
        className="logos"
        id="img"
        onClick={toggleSidebar}
      />
      <div className="divs">
        <div className="header">
          <div></div>
          <img src={logo} alt="Logo" className="logos2" />
          <img src={user} alt="User" className="logos" />
        </div>

        <div className={`sidebar ${isSidebarOpen ? "open" : ""}`} id="side-bar">
          <div className="btns">
            <button onClick={() => scrollToSection("aboutt")}>About</button>
            <button onClick={() => scrollToSection("createe")}>Create</button>
            <button onClick={() => scrollToSection("reactt")}>React</button>
          </div>
        </div>

        <div className="main-section">
          <div className="main-content">
            <Section id="aboutt" title="About" />
            <Section id="createe" title="Create" />
            <Section id="reactt" title="React" />
          </div>
        </div>
      </div>
    </div>
  );
}

const Section = ({ id, title }) => (
  <div className={title.toLowerCase()} id={id}>
    <h1 className="heading">{title}</h1>
    <h4 className="elaboration">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo fugiat iure eveniet eaque,
      neque, provident laudantium cum odio voluptate cumque porro. Rerum dolor, in voluptas
      fugit maxime magnam. Quod eos aliquam impedit corporis alias iste quasi, recusandae
      nostrum a veniam error obcaecati, deleniti, magnam dolor numquam sapiente hic
      suscipit. Sunt.
    </h4>
  </div>
);

export default Project;
