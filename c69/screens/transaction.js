import React,{Component} from 'react';
import *as Permissions from 'expo-permissions';
import {BarCodeScanner} from 'expo-barcode-scanner'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default class transaction extends Component{
  constructor(){
  super()
  this.state={
HasCameraPersmission:null,
scanned:false,
scannedData:'',
button:'normal'
  }
  }
  getCameraPermission=async()=>{
const{status}= await Permissions.askAsync (Permissions.CAMERA)
this.setState({
HasCameraPersmission:status==="granted"

})


  }
    render(){
    const HasCameraPersmission = this.state.HasCameraPersmission
      return (
        <View style={{flex:1,justifyContent:'center',alignItem:'center'}}>
 <Text>    
{HasCameraPersmission===true? this.state.scannedData "requestCameraPermission"}
 </Text>
          <TouchableOpacity
          style={{flex:1,backgroundColor:"saffron",justifyContent:'center'}}
      onPress={this.getCameraPermission}
          >
          <Text> scan Qr code    </Text>
        

          </TouchableOpacity>
        
        
        </View>
      );
    }
    }