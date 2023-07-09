import React, { useEffect } from "react";
import {useParams} from "react-router-dom";
import styled from 'styled-components'
import Nav from 'react-bootstrap/Nav';
import { useState } from "react";

let YellowBtn = styled.button`
    background : ${ props => props.bg };
    color : ${ props => props.bg == 'blue' ? 'white' : 'black' };
    padding : 10px;
`

function Detail(props){

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

function TabContent(props){
    if(props.tab == 0){
        return <div>내용0</div>
    } else if(props.tab == 1){
        return <div>내용1</div>
    } else if(props.tab == 2){
        return <div>내용2</div>
    }
}

export default Detail;
