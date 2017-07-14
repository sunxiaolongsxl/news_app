import React,{Component} from "react";
import NewsHeader from "./newsHeader"
export default class App extends Component{
    render(){
        return (
            <div>
               <NewsHeader />
                {this.props.children}
               <div>底部文字</div>
            </div>
        )
    }

}

