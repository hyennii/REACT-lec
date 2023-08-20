import React, { useEffect, useState, useContext } from "react";
import {useParams} from "react-router-dom";
import styled from 'styled-components'
import Nav from 'react-bootstrap/Nav';

import {Context1} from './../App.js'

let YellowBtn = styled.button`
    background : ${ props => props.bg };
    color : ${ props => props.bg == 'blue' ? 'white' : 'black' };
    padding : 10px;
`

function Detail(props){

    let {재고} = useContext(Context1)    //보관함 해체해주는 함수

    let {id} = useParams();
    let [tab, tabstate] = useState(0);

    return(
        <div className="container">

            <YellowBtn bg="blue">버튼</YellowBtn>
            <YellowBtn bg="orange">버튼</YellowBtn>

            <div className="row">
                <div className="col-md-6">
                <img src="/main1.jpg" width="100%" />
                </div>
                <div className="col-md-6">
                <h4 className="pt-5">{props.shop[id].title}</h4>
                <p>{props.shop[id].content}</p>
                <p>{props.shop[id].price}</p>
                <button className="btn btn-danger">주문하기</button> 
                </div>
            </div>

            <Nav variant="tabs"  defaultActiveKey="link0">
                <Nav.Item>
                <Nav.Link onClick={()=>{tabstate(0)}} eventKey="link0">버튼0</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link onClick={()=>{tabstate(1)}} eventKey="link1">버튼1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link onClick={()=>{tabstate(2)}} eventKey="link2">버튼2</Nav.Link>
                </Nav.Item>
            </Nav>
            <TabContent tab={tab}/>
        </div> 
    )
}

function TabContent({tab}){

    let [fade, setFade] = useState('')

    useEffect(()=>{
        setTimeout(()=>{ setFade('end') }, 100)
        return ()=>{
            setFade('') //fade state에 공백 넣기    
        }
    }, [tab])
    

    return <div className={"start " + fade}>
        {[<div>내용0</div>, <div>내용1</div>, <div>내용2</div>][tab]}
    </div>
}

export default Detail;
