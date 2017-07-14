import React,{Component} from "react";
import {Link} from 'react-router';
import logo from "../images/logo.png";
import "./pc.css";
import axios from "axios"
import{
    Row,//行
    Col,//列
    Menu,//菜单
    Icon,//图标
    Button,//按钮
    Modal,//对话框
    Tabs,//选项卡、页签
    Form, //表单
    Input,//input

} from "antd";
const MenuItem = Menu.Item;
const FormItem = Form.Item;
const TabPane = Tabs.TabPane;
class NewsHeader extends Component{
    constructor(props){
        super(props);
        this.state={
            username:null,
            selectKey: "shishang",
            visible: false

        }
    }
    clickSelect = (e) => {
        this.setState({
            selectKey: e.key,
        });
        if(e.key === "register"){
            this.setState({
                visible: true
            });
        }
    }
    //对话框点击取消和关闭的回调
    handle = ()=> {
        this.setState({
            visible: false
        });
    }
    tabChange = (key) => {
        console.log(key)
    }
    handleSubmit = (isRegist)=>{
        /*1 准备带参数的url
        * 2 发ajax
        * 3 请求结束做相应的的处理
        * //http://newsapi.gugujiankong.com/Handler.ashx?action=register&r_userName=abc&r_password=123123&r_confirmPassword=123123
        * //http://newsapi.gugujiankong.com/Handler.ashx?action=login&username=zxfjd3g&password=123123
        * */
        let url =  "http://newsapi.gugujiankong.com/Handler.ashx";
        let action = isRegist ? ("?action=register"):("?action=login");
        url += action;

        let {userName,password,r_userName,r_password,r_confirm_password} = this.props.form.getFieldsValue();
        if(isRegist){//注册
            let parms = `&r_userName=${r_userName}&r_password=${r_password}&r_confirmPassword=${r_confirm_password}`;
            url += parms;
            axios.get(url)
                .then( response => {

                })
                .catch( response => {

                })





        }else{//登录

        }

    }
    render(){
        const {selectKey,username,visible} = this.state;
        const {getFieldDecorator} = this.props.form;
        const userInfo = username?(
                <MenuItem className="logout" key="register" >
                    <Button type="primary">{username}</Button>&nbsp;&nbsp;
                    <Link to="/usercenter" style={{display:"inline-block"}}>
                        <Button type="dashed">个人中心</Button>
                    </Link>&nbsp;&nbsp;
                    <Button>退出</Button>
                </MenuItem>
            ):(
                <MenuItem className="register" key="register" >
                    <Icon type="appstore-o" />登录/注册
                </MenuItem>
            )
        return (
            <div>
                {/*头部组件*/}
                <Row>
                    <Col span={1}></Col>
                    <Col span={3}>
                        <Link to="/"  className="logo">
                            <img src={logo} alt="logo"/>
                            <span>ReactNews</span>
                        </Link>
                    </Col>
                    <Col span={19}>
                        <Menu mode="horizontal"  selectedKeys={[selectKey]} onClick={this.clickSelect}>
                            <MenuItem key="toutiao">
                                <Icon type="scan" />头条
                            </MenuItem>
                            <MenuItem key="shehui">
                                <Icon type="like" />社会
                            </MenuItem>
                            <MenuItem key="guonei">
                                <Icon type="camera" />国内
                            </MenuItem>
                            <MenuItem key="guoji">
                                <Icon type="heart" />国际
                            </MenuItem>
                            <MenuItem key="tiyu">
                                <Icon type="scan" />体育
                            </MenuItem>
                            <MenuItem  key="yule">
                                <Icon type="camera"/>娱乐
                            </MenuItem>
                            <MenuItem key="keji">
                                <Icon type="like" />科技
                            </MenuItem>
                            <MenuItem key="shishang">
                                <Icon type="scan" />时尚
                            </MenuItem>

                            {userInfo}
                        </Menu>
                        <Modal title="用户中心"
                               visible={visible}
                               onOk={this.handle}
                               onCancel={this.handle}
                               okText="关闭"
                        >
                            {/*登录选项卡*/}
                            <Tabs onChange={this.tabChange} type="card">
                                <TabPane tab="登录" key="1">
                                    <Form onSubmit={this.handleSubmit.bind(this,false)}>
                                        <FormItem label="账户">
                                            {
                                                getFieldDecorator('userName')(
                                                    <Input type="text" placeholder="Username" />
                                                )
                                            }
                                        </FormItem>
                                        <FormItem label="密码">
                                        {
                                            getFieldDecorator('password')(
                                                <Input type="password" placeholder="password" />
                                            )
                                        }
                                    </FormItem>
                                    </Form >
                                    <Button type="primary" htmlType="submit">登录</Button>
                                </TabPane>


                                {/*注册选项卡*/}
                                <TabPane tab="注册" key="2">
                                    <Form onSubmit={this.handleSubmit.bind(this,true)}>
                                        <FormItem label="账户">
                                            {
                                                getFieldDecorator('r_userName')(
                                                    <Input type="text" placeholder="Username" />
                                                )
                                            }
                                        </FormItem>
                                        <FormItem label="密码">
                                            {
                                                getFieldDecorator('r_password')(
                                                    <Input type="password" placeholder="password" />
                                                )
                                            }
                                        </FormItem>
                                        <FormItem label="确认密码">
                                            {
                                                getFieldDecorator('r_confirm_password')(
                                                    <Input type="password" placeholder="confirm_password" />
                                                )
                                            }
                                        </FormItem>
                                    </Form>
                                    <Button type="primary" htmlType="submit">注册</Button>
                                </TabPane>
                            </Tabs>


                        </Modal>


                    </Col>
                    <Col span={1}></Col>
                </Row>
            </div>
        )
    }

}
const WrappedNormalLoginForm = Form.create()(NewsHeader);
export default WrappedNormalLoginForm;