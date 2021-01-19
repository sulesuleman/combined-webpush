import { Select } from 'antd';
import WindowChrome from './chrome'
import WindowChrome10 from './operawindow10'
import WindowOpera10 from './chromewindow10'
import WindowOpera from './opera'
import Edge from './edge'
import Firefox from './firefox'
import React,{Component} from "react";
const { Option } = Select;

export default class Window extends React.Component {
    constructor(props){
      super(props)
      this.state={
        androidcategory:'ChromeonWindows'
      }
    } 
     handleChangeANDROID=  (value) =>{
    //      var a=await event.target.value
    //   console.log(a)
      this.setState({androidcategory:value});
    console.log(`selected ${value}`);
    window.$user.window=value
    console.log('window',window.$user)
    }

    render() {
      return (
       
                <div>
                  <Select style={{ width: '100%' }} placeholder="Select Device For Preview" value={this.state.androidcategory}onChange={this.handleChangeANDROID}  >
          
                    <Option value="ChromeonWindows">Chrome on Windows</Option>
                    <Option value="FirefoxonWindows">Firefox on Windows</Option>
                    <Option value="OperaonWindows">Opera on Windows</Option>
                    <Option value="ChromeonWindows10">Chrome on Windows 10</Option>
                    <Option value="FirefoxonWindows10">Firefox on Windows 10</Option>
                    <Option value="OperaonWindows10">Opera on Windows 10</Option>
                    <Option value="EdgeonWindows10">Edge on Windows 10</Option>
                  </Select>
                  <br/>
          <br/>
          { this.state.androidcategory==='ChromeonWindows' ?
             <WindowChrome data={this.props.data}/> :
             this.state.androidcategory==='FirefoxonWindows' ?
             <Firefox data={this.props.data}/> :
             this.state.androidcategory==='FirefoxonWindows10' ?
             <Firefox data={this.props.data}/> :
             this.state.androidcategory==='EdgeonWindows10' ?
             <Edge data={this.props.data}/>:
             this.state.androidcategory==='OperaonWindows' ?
             <WindowOpera data={this.props.data}/>:
             this.state.androidcategory==='ChromeonWindows10' ?
             <WindowChrome10   data={this.props.data}/>:
             this.state.androidcategory==='OperaonWindows10' ?
             <WindowOpera10   data={this.props.data}/>:
             null
          }
  
                </div>
              )
            }
          }
      