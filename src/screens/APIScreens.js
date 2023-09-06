import React from "react";
import { useEffect, useState } from 'react';
import {View, Text, StyleSheet,TextInput,TouchableOpacity,FlatList,Alert} from 'react-native'
import axios from 'axios';

const APIScreen= () =>{
    const [dataWater , setDataWater] = useState([]);
    const [text , setText] = useState("");

    const axiosWater = async () => {
        const BASE_URL =
        "https://pasutara.dgr.go.th/api_well/api/FindWellAll"
        try {
          const res = await axios.get(BASE_URL)
          setDataWater(res.data.result)
        } catch (error) {
          console.error("Error Fetching News",error)
          throw error
        }
      }
      useEffect(() => {
        axiosWater()
      },[])
    //Alert ข้อมูลจังหวัดจากเลขบ่อนำ้
    const AWter = (text_ , data)=>
    {
        for(var i in data)
        {
        if(data[i].no == text_)
        { 
        Alert.alert('บ่อรหัส : '+data[i].no,
        'จังหวัด : ' +data[i].provincenam )
        }
        }
        return 0;
    }

    return(
      <View style={styles.container}>

        <Text style = 
        {{
            color:'#fff',
            fontWeight:'bold',
            marginTop:5,
            fontSize:20,
        }}
        >
            Water storage ponds in Thailand 🌊
        </Text>
        <TextInput
        label="no water"
        placeholder='ใส่รหัสบ่อนำ้'
        value={text}
        onChangeText={text => setText(text)}
        style = {styles.Tinput}
        />

        <TouchableOpacity
        style = {styles.BS}
        onPress={()=>{
        AWter(text,dataWater);
        // AWter("0109E026",articles);
        }}
        >
            <Text> Enter </Text>
        </TouchableOpacity>

        <FlatList
        data={dataWater}
        keyExtractor={(item) => item.no}
        renderItem={({item}) => (
            <View style = {styles.waterCard}>
            <Text style={styles.dataFont}>รหัสบ่อน้ำ : {item.no}</Text>
            <Text style={styles.dataFont}>หมู่ที่ : {item.mubanno}</Text>
            <Text style={styles.dataFont}>ชื่อหมู่บ้าน : {item.mubanname}</Text>
            <Text style={styles.dataFont}>ตำบล : {item.tumbolname}</Text>
            <Text style={styles.dataFont}>อำเภอ : {item.ampurname}</Text>
            <Text style={styles.dataFont}>จังหวัด : {item.provincenam}</Text>
            </View>
        )}
        />
       </View>  
    );
};


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#99CECB',
      padding:20,
      paddingHorizontal:15,
      alignItems: "center",
    },
    Tinput:{
        borderColor:"#004744",
        borderWidth:3,
        borderRadius:5,
        backgroundColor:"#FFF",
        padding:10,
        marginTop:10,
        width:'70%',
    },
    BS:{
        borderColor:"#004744",
        borderWidth:3,
        borderRadius:5,
        backgroundColor:"#fff",
        padding:10,
        marginTop:10,
        width:'60%',
        alignItems:'center',
    },
    waterCard:{
        borderColor:"#004744",
        borderWidth:3,
        borderRadius:5,
        backgroundColor:"#3F908C",
        padding:20,
        marginTop:10,
        justifyConten:'center',
        alignItems:'center',
    },
    dataFont:{
        color:'#fff',
        fontSize:20,
    },
  });

  export default APIScreen;