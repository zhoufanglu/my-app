import React , {Component} from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components'
import Button from "antd/es/button";
import './index.css'


/*class Header extends Component {
    render() {
        const name  = 'lfz'
        return (
            <div className={`${name} className2`} >
                <h1>React 小书{(function(){return '666'})()}</h1>
            </div>
        )
    }
}

const userList = [1,2,3]

class Title extends Component {
    headerClick(word,e){
        console.log(20,e.target)
        console.log(21,word)
    }
    render() {
        const self = this
        return (
            <div>
                <span onClick={this.headerClick.bind(this,'sss')}>我是title</span>
                {userList.map(i=><Header
                    key={i}
                />)}
                <LikeButton likedText="已赞" unlikedText="未赞" />
            </div>
        )
    }
}

/!*const userList = [
    { username: 'Jerry', age: 21, gender: 'male' },
    { username: 'Tomy', age: 22, gender: 'male' },
    { username: 'Lily', age: 19, gender: 'female' },
    { username: 'Lucy', age: 20, gender: 'female' }
]
//写一个用户组件 users
class User extends Component {
    render() {
        const {user} = this.props
        return(
            <div>
                <h4 >{user.username}</h4>
            </div>
        )
    }
}



class Index extends Component {
    render () {
        return (
            <div>
                {console.log(48,this)}
                {userList.map((item,index) => <User key={index} user={item} />)}
            </div>
        )
    }
}*!/

/!**
 * state&setState
 *!/
/!*class LikeButton extends Component {
    constructor () {
        super()
        this.state = { isLiked: false }
    }

    handleClickOnLikeButton () {
        /!*!/!*this.setState({
            isLiked: !this.state.isLiked
        })*!/
        console.log(this.state.isLiked)
        this.setState(prevState=>{
            console.log(83,prevState)
        })
        console.log(this.state.isLiked)*!/
        this.setState((prevState) => {
            return { count: 0 }
        })
        this.setState((prevState) => {
            return { count: prevState.count + 1 } // 上一个 setState 的返回是 count 为 0，当前返回 1
        })
        this.setState((prevState) => {
            return { count: prevState.count + 2 } // 上一个 setState 的返回是 count 为 1，当前返回 3
        })
        console.log(95,this.state)
    }

    render () {
        return (
            <button onClick={this.handleClickOnLikeButton.bind(this)}>
                {this.state.isLiked ? '取消' : '点赞'} 👍
            </button>
        )
    }
}*!/

/!**
 * props
 *!/
class LikeButton extends Component {
    constructor () {
        super()
        this.state = { isLiked: false }
    }

    handleClickOnLikeButton () {
        this.setState({
            isLiked: !this.state.isLiked
        })
    }

    render () {
        const likedText = this.props.likedText || '取消'
        const unlikedText = this.props.unlikedText || '点赞'
        console.log(125,this)
        return (
            <button onClick={this.handleClickOnLikeButton.bind(this)}>
                {this.state.isLiked ? likedText : unlikedText} 👍
            </button>
        )
    }
}*/

const Title = styled.div`
    font-size: 20px;
    text-align: center;
    color: palevioletred;
    border:solid 1px;
`;

class Panel extends Component{
    constructor(props){
        super(props)
        this.state = {
            name:'',
            comment:'',
            list:[]
        }
    }
    handleClick(){
        //console.log(this.state)
        this.setState({
            list:[...this.state.list,{
                name:this.state.name,
                comment:this.state.comment,
            }]
        })
    }
    onRef(ref){
        //console.log(154,Object.getOwnPropertyDescriptors(this))
        /*this.xxx=ref
        console.log(155,this.xxx)*/
        //this.commentRow=ref

    }
    nameChange(e){
        this.setState({
            name:e.target.value
        })
    }
    commentChange(e){
        this.setState({
            comment:e.target.value
        })
    }
    render(){
        return(
            <div>
                <Title>
                    <Button type="primary">antButton</Button>
                    <div>
                        <label htmlFor="userName">用户名</label>
                        <input
                            type="text"
                            id='userName'
                            value={this.state.name}
                            onChange={this.nameChange.bind(this)}
                        />
                    </div>
                    <div>
                        <label htmlFor="comment">评论内容</label>
                        <textarea
                            id="comment"
                            value={this.state.comment}
                            cols="30" rows="10"
                            onChange={this.commentChange.bind(this)}>
                        </textarea>
                    </div>
                    <button onClick={this.handleClick.bind(this)}>确定</button>
                </Title>
                <div className="comment-panel">
                    <CommentRow
                        list={this.state.list}
                    />
                </div>
            </div>
            /*<div className="test">

            </div>*/
        )
    }
}

class CommentRow extends Component{
    constructor(props){
        super(props)
    }
    componentDidMount() {
        //this.props.onRef(this)
        //this.props.fatherClick(this)
    }

    render() {
        return (
            <div>
                {this.props.list.map((item,index)=>{
                    return(
                        <div key={index}>
                            <span className="name">{item.name}</span>
                            <span className="comment">{item.comment}</span>
                        </div>
                    )
                })}
            </div>
        )
    }
}


/**
 * 网上测试demo
 */

/*class Parent extends Component {
    render() {
        return(
            <div>
                <Child onRef={this.onRef} />
                <button onClick={this.click} >click</button>
            </div>
        )
    }

    onRef = (ref) => {
        this.xxx = ref
        console.log(256,this.xxx)
    }

    click = (e) => {
        this.xxx.myName()
    }

}

class Child extends Component {
    constructor(props){
        super(props)
        this.state={
            name:'child'
        }
    }

    componentDidMount(){
        this.props.onRef(this)
    }

    myName = () => alert('xiaohesong')

    render() {
        return ('woqu')
    }
}*/



ReactDOM.render(
    //<Parent/>,
    <Panel/>,
    //<Index/>,
    document.getElementById('root')
)




/*import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();*/
