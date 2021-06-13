import "./Navbar.css";
function Navbar_bottom(params) {
    return(
        <div>
            <nav className="navbar_btm_style">
                <div className="navbar_btm_div">
                    <button  className="a1_styl" href="">All</button>
                    <button className="a_styl" href="">Guided Projects</button>
                    <button className="a_styl" href="">Degree & Certificates </button>
                </div>
                <hr className= "hr_navstyle"/>
            </nav>
        </div>
    )
}
export default Navbar_bottom;