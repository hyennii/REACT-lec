import {useParams} from "react-router-dom";

function Detail(props){

    let {id} = useParams();

    return(
        <div className="container">
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
        </div> 
    )
}

export default Detail;
