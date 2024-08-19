import React, { useState,useEffect } from 'react'
import { FlatList, Text, View,StyleSheet } from 'react-native'




const Listscreen = () => {

    const [data,setData] = useState(undefined);

    const getApi = async ()=> {
        let result = await fetch("https://jsonplaceholder.typicode.com/posts/")
        result = await result.json();
        setData(result)
        console.warn(result); 
      }
    
      useEffect(()=>{
        getApi() 
      },[])

   const users = [
    {
        name:"Santosh",
        id:1
    },
    {
        name:"Pooja",
        id:2
    },
    {
        name:"Ritvi",
        id:3
    },
    {
        name:"Lokhande",
        id:4
    },
    {
        name:"Abcd",
        id:4
    } 
   ]

    return (
      <View>
        <Text> Flat List Using Api Call </Text>
        {
            data ?
            <View>
            <Text style= {{fontSize : 20, color : 'red'}}>Title :- {data.title}</Text>
            </View>
            : null
        }
        <FlatList 
         data={data}
         renderItem={({item})=><Text style = {styles.item}>{item.title} </Text>}
        />
      </View>
    )
}

const styles = StyleSheet.create({
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

export default Listscreen;
