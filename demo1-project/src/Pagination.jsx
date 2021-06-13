import "./Pagination.css"
function Pagination(params) 
{
    return(
            <div className="outer_pag_div">        
                <div className="inner_div">
                <center>
                <button className="lii_pag"><p><i class="arrow left"></i></p></button>
                <button  href="#" className="li_pag" > 1</button>
                <button href="#" className="li_pag" > 2</button>
                <button  href="#" className="li_pag" > 3</button>
                <button  href="#" className="li_pag" > 4</button>
                <button href="#" className="li_pag" > 5</button>
                <button className="li2_pag"><p><i class="arrow right"></i></p></button>
                </center>
                </div>
            </div>
        )
}
export default Pagination;