import menu from "./icons/bars-solid.svg"
import user from "./icons/person-military-to-person-solid.svg"
import logo from "./icons/—Pngtree—coffee logo_5898135.png"
function Project() {
    const scrolll = (id) => {
        const secondiv = document.getElementById(id);
        if (secondiv) {
            secondiv.scrollIntoView({ behavior: "smooth" });
        }
    };





    let flag = 0;
    const sidebar = () => {
        const img = document.querySelector("#img")
        const sb = document.querySelector("#side-bar")
        if (flag == 0) {
            sb.className = "open";
            flag = -1;
            img.className = "open"
        }
        else {
            sb.className = ""
            flag = 0;
            img.className = ""
        }
    }















    return (
        <div>

            <img src={menu} alt="" className="logos" id="img" onClick={sidebar} />
            <div className="divs">
                <div className="header">

                    
                    <div></div>
                    <img src={logo} alt="" className="logos2" />
                    <img src={user} alt="" className="logos" />

                </div>



                <div className="sidebar" id="side-bar">
                    <div className="btns">
                        <button onClick={() => {
                            scrolll("aboutt")
                        }}>about</button>
                        <button onClick={() => {
                            scrolll("createe")
                        }}>create</button>
                        <button onClick={() => {
                            scrolll("reactt")
                        }}>react</button>
                    </div>
                </div>









                <div className="main-section">

                    <div className="main-content">
                        <div className="about" id="aboutt">
                            <h1 className="heading">About</h1>
                            <h4 className="elaboration">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo fugiat iure eveniet eaque, neque, provident laudantium cum odio voluptate cumque porro. Rerum dolor, in voluptas fugit maxime magnam. Quod eos aliquam impedit corporis alias iste quasi, recusandae nostrum a veniam error obcaecati, deleniti, magnam dolor numquam sapiente hic suscipit. Sunt.</h4>
                        </div>

                        <div className="create" id="createe">
                            <h1 className="heading">Create</h1>
                            <h4 className="elaboration">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo fugiat iure eveniet eaque, neque, provident laudantium cum odio voluptate cumque porro. Rerum dolor, in voluptas fugit maxime magnam. Quod eos aliquam impedit corporis alias iste quasi, recusandae nostrum a veniam error obcaecati, deleniti, magnam dolor numquam sapiente hic suscipit. Sunt.</h4>
                        </div>

                        <div className="react" id="reactt">
                            <h1 className="heading">React</h1>
                            <h4 className="elaboration">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo fugiat iure eveniet eaque, neque, provident laudantium cum odio voluptate cumque porro. Rerum dolor, in voluptas fugit maxime magnam. Quod eos aliquam impedit corporis alias iste quasi, recusandae nostrum a veniam error obcaecati, deleniti, magnam dolor numquam sapiente hic suscipit. Sunt.</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Project;