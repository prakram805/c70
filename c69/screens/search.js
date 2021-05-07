import React,{Component} from 'react';
import *as Permissions from 'expo-permissions'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default class transaction extends Component{
    render(){
      return (
        <View style={{flex:1,justifyContent:'center',alignItem:'center'}}>
          <TouchableOpacity>
          <Text> issue or return    </Text>
        

          </TouchableOpacity>
        
        
        </View>
      );
    }
    }