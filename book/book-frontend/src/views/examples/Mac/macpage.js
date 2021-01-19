import { Select } from 'antd';

import MacSafari from './safari'
import MacChrome from './chrome'
import MacFirefox from './firefox'
import MacOpera from './opera'
import React,{Component} from "react";
const { Option } = Select;

export default class Mac extends React.Component{
    constructor(props){
      super(props)
      this.state={
        androidcategory:'ChromeonMacOS'
      }
    } 
     handleChangeANDROID=  (value) =>{
    //      var a=await event.target.value
    //   console.log(a)
      this.setState({androidcategory:value});
    console.log(`selected ${value}`);
    window.$user.mac=value
    console.log('mac',window.$user)
    }
    render(){
      return(
        <div>
          <Select style={{ width: '100%' }} placeholder="Select Device For Preview" value={this.state.androidcategory} onChange={this.handleChangeANDROID} >
          <Option value="ChromeonMacOS">Chrome on Mac OS</Option>
          <Option value="FirefoxonMacOS">Firefox on Mac OS</Option>
          <Option value="OperaonMacOS">Opera on Mac OS</Option>
          <Option value="SafarionMacOS">Safari on Mac OS</Option>
  
          </Select>
          <br/>
          <br/>
          { this.state.androidcategory==='SafarionMacOS' ?
             <MacSafari data={this.props.data}/> :
             this.state.androidcategory==='ChromeonMacOS' ?
             <MacChrome data={this.props.data}/> :
             this.state.androidcategory==='FirefoxonMacOS' ?
             <MacFirefox data={this.props.data}/> :
             this.state.androidcategory==='OperaonMacOS' ?
             <MacOpera data={this.props.data}/> :
            
            
             null
          }
  
        </div>
        
      )
    }
  }
  