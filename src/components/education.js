import React ,{Component} from "react"

export default class Education extends Component{

    render()
    {
        return(
            <div className="col-md-12">
            <h5>Education : </h5>
            <hr style={{borderTop:'1px solid grey'}} />     
            <ul>
              <li>Bachelor of Electronics (Electronics) from PVPIT, Sangli in 2018 with 72.81%.</li>
              <li>HSC from Kolhapur Divisional Board in 2014 with 68.92%.</li>
              <li>SSC from Maharashtra State Board in 2012 with 87.45%.</li>
            </ul>
          </div>
        )
    }
    
    }