import React ,{Component} from "react"

export default class PersonalDetail extends Component{

    render()
    {
        return(
            <div className="col-md-12">
        <h5>Person Details :</h5>
        <hr style={{borderTop: '1px solid grey'}} />     
        <p><b>Name : </b>Gouri Govindrao Jadhav</p>
        <p><b>Date of Birth  :  </b>18th September1996</p>
        <p><b>Permanent Address  :  </b> Vasantdada Sugar Factory Ltd. Colony C-3/3 ,Sangli Maharashtra</p>
        <p><b>Current Address  :  </b>Andheri East , Mumbai</p> 
        <p><b>Languages Known  :  </b>English, Hindi, Marathi</p>
      </div>
        )
    }
    
    }