import React,{Component} from "react";
import {Link} from "react-router";
export default class NewsContainer extends Component{
    render(){
        return (
           <ul>
               <li>
                   <Link to="/detail/:11">查看新闻111</Link>
               </li>
               <li>
                   <Link to="/detail/:22">查看新闻222</Link>
               </li><li>
                   <Link to="/detail/:33">查看新闻333</Link>
               </li>

               <br/>
               <li><Link to="/usercenter">个人中心</Link></li>
           </ul>
        )
    }

}