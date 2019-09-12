import React from 'react';
import skudata from './pdp.json';
import './composition.css'
let data={
    "color":[],
    "imageURL":[],
    "ShortDescription":[],
    "size":[]
}
const bundleProducts = skudata && skudata.product && skudata.product[0] && skudata.product[0].bundleMandatoryProducts[0] || []
const dataarr=["color","imageURL","ShortDescription","size"]
const Maindiv = (props) =>{
    return(
        <div class="frame">
        {props.children}
        </div>
    )

}
const Heading = (props) =>{
    return(
     <Maindiv>
            <h1>{props.title}</h1>
            <span>{props.productdetails}</span>
            <form>{props.children}</form>
     </Maindiv>)
}
class Productpage extends React.Component {
    
    sizefunction=()=>{
        var sizeselection=[];
           for(let i in data.size){
               if(i<5){
                sizeselection.push(<div class="eachsize"><span>  {data.size[i]}  </span></div>)
                // console.log(y);
               }
                }
        return(sizeselection);
    }
    render() {
        console.log("test product component")
        console.log(data.imageURL[0])
    return(
        <div className="Resultpage">
            <img class="image" src={data.imageURL[0]} width="20%"/>
            <div id="content">
                <p>Size : {this.sizefunction()}</p>
                <span>Description : {data.ShortDescription[0]}</span>
            </div>
        </div>
    )
}
}

export default class Form extends  React.Component{
        constructor(props)
        {
            super(props)
            this.state={
                userName:'',
                orderedproduct:'Available Product',
                count:'',
                showProduct: false
            };
            this.typingname=this.typingname.bind(this)
            this.selectingtype=this.selectingtype.bind(this)
            this.changingpage=this.changingpage.bind(this)
        }
        description = () =>{
            data.ShortDescription.map(des => {
                if(des==0){
                    return(<p>{des}</p>)
                }
            })

        }
        getArray= () =>{
            dataarr.map(x =>{
                bundleProducts.sku.map( skus=>{
                    data[x].push(skus.properties[x])
                })
            })
        }
        typingname = (event) =>{
            this.setState({userName : event.target.value})
        }
        selectingtype = (event) => {
            this.setState({orderedproduct : event.target.value})
        }
        changingpage = (event) => {
            event.preventDefault()
            console.log("test")
            if(this.state.showProduct === false){
                this.setState({showProduct :true })
            }
        }
        render(){
            {this.getArray()}
            return(
                <Heading
                    title="Welcome to T-GIANT"
                    productdetails="mens long sleeve micro thermal shirt">
                    User Name : <br/><input type="text" value={this.state.userName} onChange={this.typingname}/><br/>
                    Select Product : <br/><select type="text" value={this.state.orderedproduct} onChange={(event)=>this.selectingtype(event)}>
                        <option value="Available Product">Available Product</option>
                        <option value="Men T-Shirt">Men T-Shirt</option>
                    </select><br/><br/>
                    <button  id="design" onClick={(event)=>this.changingpage(event)}>Check Item</button>
                    <div id="pp"><center>{this.state.showProduct && <Productpage />}</center></div>
                </Heading>
            )
        }

}
