import { Button, StyleSheet, Text, TextInput, View, FlatList } from 'react-native'
import React, { useState } from 'react'
import Listscreen from './screen/Listscreen';


const App = () => {
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [display,setDisplay] = useState(false);



  const reset =()=> {
    setDisplay(false)
    setName("")
    setEmail("")
    setPassword("")
  }

  

  return (
    <View>
       <Text style={{fontSize : 30}}> Login Form</Text>
       <TextInput style = {styles.textInput}
                  placeholder='Enter username'
                  value={name}
                  onChangeText={(text1)=>setName(text1)} 
       />
       <TextInput style = {styles.textInput}
                  placeholder='Enter password'
                  value={password}
                  secureTextEntry = {true}
                  onChangeText={(text1)=>setPassword(text1)} 
       />
       <TextInput style = {styles.textInput}
                  placeholder='Enter email'
                  value={email}
                  onChangeText={(text1)=>setEmail(text1)} 
       />
       <View style = {{marginBottom : 10, marginLeft : 10, marginRight : 10}}>
       <Button title='Get Details' color={'green'} onPress={()=>setDisplay(true)}/>
       
       </View>
       <Button title='Clear Details' onPress={()=>reset()}/>

      <View>
        {
          display ?
          <View>
            <Text style = {{fontSize : 18}}> {name} </Text>
            <Text style = {{fontSize : 18}}> {password} </Text>
            <Text style = {{fontSize : 18}}> {email} </Text>
          </View>
          :null
        }
      </View>

      <View>
        <Listscreen/>
      </View>
    

    </View>
  );
};



const styles = StyleSheet.create({
   textInput : {
    fontSize : 18,
    color : 'blue',
    borderWidth : 2,
    borderColor : 'blue',
    margin : 10
   },
   item : {
    fontSize : 24,
    padding : 10,
    color : '#fff',
    backgroundColor : 'blue',
    borderWidth : 2,
    borderColor : 'black',
    borderRadius : 10,
    borderWidth : 1,
    margin : 10
   }
})

export default App