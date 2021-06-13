import React, { Component } from 'react';
import { PostUser ,GetData} from "./RESTAPICALLER";
import Userdisplay from "./Projects";
import NavbarBottom from "./Navbar_Bottom";
import FilterUper from "./Filter_Button";
import MiddlePortion from "./MiddlePortion";
import Pagination from "./Pagination";
class EnglishPro extends Component 
{
      constructor(props) 
      {
        super(props);
        this.state = { 
            arr:[],
            Flag:"main",
         }
      }
      componentDidMount() 
      {
        console.log("Component mounted");
        this.FetchProjects();
      }
      FetchProjects() 
      {
        GetData().then((response) => 
        {
          console.log(response.data);
          this.setState({ arr: response.data });
        });
        return [];
      }
      render() 
      { 

        if(this.state.Flag==="main")
        {
          return(
            <div>
            <div >
            <nav className="navdiv" >
              <div className="div_topa_1">
              <div className="div_topb_1">
              <img  alt=" not found"  src="img1.svg" className="img_1" />
              <button className="btn_1"> Explore  <i class="i_1"></i></button>
              <div className="div_mida_1">
              <input  type="text" placeholder=" What do you want to learn?" className="input_1"></input>
              <button className="btn_search_1" >
              <img alt=" not found" src="search.png"/></button>
              </div>
              </div>
              <div className="div_bottom2_1">
              <button href="" className="div_bottom_1">For Enterprise </button>
              <button  href=""className="div_bottom_1">For Students </button>
              <button className="a2_1"> Log in</button>
              <button  href="" className="btn2_1"   onClick={() => {
              this.updateflag();}}>Join For Free</button>
              </div>
              </div>
            </nav>
            </div>
            <div>
            <nav className="navdiv" >
              <div className="div_topa_1">
              <div className="div_topb_1">
              <img  alt=" not found"  src="img1.svg" className="img_1" />
              <button className="btn_1"> Explore  <i class="i_1"></i></button>
              <div className="div_mida_1">
              <input  type="text" placeholder=" What do you want to learn?" className="input_1"></input>
              <button className="btn_search_1" >
              <img alt=" not found" src="search.png"/></button>
              </div>
              </div>
              <div className="div_bottom2_1">
              <button href="" className="div_bottom_1">For Enterprise </button>
              <button  href=""className="div_bottom_1">For Students </button>
              <button className="a2_1"> Log in</button>
              <button  href="" className="btn2_1"   onClick={() => {
              this.updateflag();}}>Join For Free</button>
              </div>
              </div>
            </nav>
          </div>
          <NavbarBottom/>
          <FilterUper></FilterUper>


               <div >
                {this.state.arr.map((props) => {
                  return (
                    <div className="Outer_Div">
                    <div className="Inner_Div_1">
                    <img src={props.imgsrc} alt="My img" className="img_style" />
                    </div>
                    <div className="Inner_Div_2">
                    <h1 className="heading_style">{props.heading}</h1>
                    <p className="para_style">{props.paragraph}</p>
                    <button   className="btn_style" >{props.btn}</button>
                    <div className="Bottom">
                    <div class="rating">
                    <span><img alt="not found" src={props.imgstar1}/></span>
                    <span><img alt="not found" src={props.imgstar2}/></span>
                    <span><img alt="not found" src={props.imgstar3}/></span>
                    <span><img alt="not found" src={props.imgstar4}/></span>
                    <span><img alt="not found" src={props.imgstar5}/></span>
                    </div>
                    <span className="myspan">{props.span1}</span>
                    <span className="myspan">{props.span2}</span>
                    <hr className="myhr_2"/>
                    <span className="myspan">{props.span3}</span>
                    <span className="myspantext">{props.span4}</span>
                    <hr className="myhr_2"/>
                    <div>
                    <img alt="not found"   className="myspan" src={props.imgsrc_span} />
                    </div>
                    </div>
                    <div className="last_div">
                    <span className="spanlevel_img"><img alt="not found" src={props.level_img}/></span>
                    <span className="span_level_text">{props.level_text}</span>
                    </div></div>
                    </div>
                  );
                })}
              </div>
              <Pagination></Pagination>
              <MiddlePortion/> 
              </div>
          );
          
        }
        else
        {
          return<div>
                    <div >
                    <nav className="navdiv" >
              <div className="div_topa_1">
              <div className="div_topb_1">
              <img  alt=" not found"  src="img1.svg" className="img_1" />
              <button className="btn_1"> Explore  <i class="i_1"></i></button>
              <div className="div_mida_1">
              <input  type="text" placeholder=" What do you want to learn?" className="input_1"></input>
              <button className="btn_search_1" >
              <img alt=" not found" src="search.png"/></button>
              </div>
              </div>
              <div className="div_bottom2_1">
              <button href="" className="div_bottom_1">For Enterprise </button>
              <button  href=""className="div_bottom_1">For Students </button>
              <button className="a2_1"> Log in</button>
              <button  href="" className="btn2_1"   onClick={() => {
              this.updateflag();}}>Join For Free</button>
              </div>
              </div>
            </nav>
            </div>
            <Userdisplay></Userdisplay>
            </div> 
        } }
            updateflag()
        {
          this.setState({Flag:"signup"})
          this.state.Flag="signup";
       }
}
 
export default EnglishPro;