import React ,{Component} from "react"

export default class Workdetail extends Component{

    render()
    {
        return(
            <div className="col-md-12">
        <h5>Professional Expereince : </h5>
        <hr style={{borderTop:'1px solid grey'}} />
        <p><span style={{fontWeight: 'bold'}}>Company :</span> VXL Software Solution Pvt Ltd. Andheri East, Mumbai.</p>
        <p><span style={{fontWeight: 'bold'}}>Job Title :</span> Software Engineer.</p>
        <p><span style={{fontWeight: 'bold'}}>Project :</span> Digital Signage</p>
        <p><span style={{fontWeight: 'bold'}}>Working Period: </span>  January 2019 – Present</p>
        <h6>Roles and Responsibilities:</h6>
        <ul>
          <li>Implement the new modules as per requirement given by clients</li>
          <li>Worked on API for Twitter and YouTube component</li>
          <li>Modify  the component like image, video, twitter, marquee static text, countdown timer, etc to improve the performance or to solve the errors</li>
          <li>Communicate on daily basis with testing/technical support team to resolve the bugs.</li>
        </ul>
        <br />
      </div>
      
        )
    }
    
    }