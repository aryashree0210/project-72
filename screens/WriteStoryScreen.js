import React from 'react';
import {Text, View, TextInput, StyleSheet, TouchableOpacity, KeyboardAvoidingView, Alert} from 'react-native';
import {Header} from 'react-native-elements';
import db from '../config';

export default class WriteStorySceen extends React.Component{
  constructor(){
    super();
    this.state = {
      title:'',
      authorName:'',
      story:''
    }
  }

  submitStory = async()=>{
    
    db.collection("stories").add({
      Title: this.state.title,
      AuthorName: this.state.authorName,
      Story: this.state.story
    });
    alert(submitStory);
   // ToastAndroid.show('submitStory', ToastAndroid.SHORT);
  }

  render(){
    return(
      <KeyboardAvoidingView
        style = {{backgroundColor:'white', flex:1}}
        behavior = {"padding"}
        enabled>
        <Header
          backgroundColor={'pink'}
          centerComponent={{
            text:'Story Hub',
            style:{color:'grey', fontSize:20, fontWeight:'bold'}
          }}
        />
       
        <TextInput
          style = {styles.authorTitleInputStyle}
          placeholder = "Title of the Story"
          onChangeText = {(text) => {this.setState({title:text})}}
          value = {this.state.title}
        />

        
        <TextInput
          style = {styles.authorTitleInputStyle}
          placeholder = "Author name"
          onChangeText = {(text) => {this.setState({authorName:text})}}
          value = {this.state.authorName}
        />

       
        <TextInput
          style = {styles.storyInput}
          placeholder = "Write your story here"
          multiline = {true}
          onChangeText = {(text) => {this.setState({story:text})}}
          value = {this.state.story}
        />

        
        <TouchableOpacity
          style = {styles.submitStyle}
          onPress = {()=>{this.submitStory()}}>
          <Text style = {styles.submitTextStyle}>SUBMIT</Text>
        </TouchableOpacity>
        </KeyboardAvoidingView>
      
    );
  }
}

const styles = StyleSheet.create({
  submitStyle:{
    alignSelf:'center',
    width:100,
    height:30,
    borderRadius:15,
    backgroundColor:'pink',
    borderColor:'#000',
    borderWidth:1,
    alignContent:'center',
    alignItems:'center',
    margin:30,
    justifyContent:'center'
  },
  submitTextStyle:{
    color:'grey',
    fontSize:18,
    fontWeight:'bold'
  },
  authorTitleInputStyle:{
    width:'70%',
    height:'5%',
    alignSelf:'center',
    borderWidth:1.5,
    fontSize:20,
    backgroundColor:'#FFF',
    margin:20,
    textAlign:'center',
  },
  storyInput:{
    width:'70%',
    height:'30%',
    alignSelf:'center',
    borderWidth:1.5,
    fontSize:20,
    backgroundColor:'#FFF',
    margin:20
  }
});