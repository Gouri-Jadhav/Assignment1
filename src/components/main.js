import React ,{Component} from "react"
import Objective from './objective'
import Workdetail from './workdetail'
import Skills from './skills'
import Education from './education'
import PersonalDetail from './personaldetail'

export default class Main extends Component{

    render()
    {
        return(
            <div className="container bg-light">
        <Objective/>
        <div className ="row">
        <Workdetail/>
        <Education/>
        <Skills/>
        <PersonalDetail/>
        </div>
       
        </div> 
    
        )
    }
    
    }