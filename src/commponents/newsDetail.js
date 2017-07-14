import React,{Component} from "react";
export default class NewsDetail extends Component{
    render(){
        return (
            <div>
                新闻详情.....{this.props.params.uniquekey}
            </div>
        )
    }

}