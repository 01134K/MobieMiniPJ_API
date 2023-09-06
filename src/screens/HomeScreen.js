import React from "react";
import {View, Text, StyleSheet, TouchableOpacity,Image} from 'react-native'


const HomeScreen= ({navigation}) =>{
   
    return(
      <View style={styles.container}>
        <View style={styles.cardAbout}>
            <Image 
            style = {styles.conImg}
            source={require('../img/p1.jpeg')} 
            />
            <Text style = {styles.title}>6421600042</Text>
            <Text style = {styles.subTitle}>นาย ชนม์ธนวัฒน์ แก้วกัณฑ์</Text>
        </View>
        <View style={styles.cardAbout}>
            <Image 
            style = {styles.conImg}
            source={require('../img/p2.jpg')} 
            />
            <Text style = {styles.title}>6421600069</Text>
            <Text style = {styles.subTitle}>นาย ณภัทรนันท์ ศิลปะ</Text>
        </View>
        <View style={styles.cardAbout}>
            <Image 
            style = {styles.conImg}
            source={require('../img/p3.jpg')} 
            />
            <Text style = {styles.title}>6421600123</Text>
            <Text style = {styles.subTitle}>นาย ปวริศ มุ้ยจีน</Text>
        </View>


        <TouchableOpacity
            style = {styles.bS}
            onPress = {()=>navigation.navigate("API")}
        >
            <View style = {styles.BT}>
                <Text> Pass for go to API app </Text>
            </View>
        </TouchableOpacity>
        
       </View>  
    );
};


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#99CECB',
      padding:10,
      paddingHorizontal:15,
      justifyContent:"center",
      alignItems:"center",
    },
    title:{
        fontSize:15,
        fontWeight:'900',
    },
    subTitle:{
        fontSize:20,
    },
    cardAbout:{
        borderColor:"#004744",
        borderWidth:3,
        borderRadius:5,
        backgroundColor:"#3F908C",
        padding:10,
        marginTop:10,
        justifyConten:'center',
        alignItems:'center',
        width:'70%',
    },
    conImg:{
        width: 150,
        height: 150,
        borderRadius: 50,
        borderWidth: 3,
        borderColor: "#000",
    },
    BT:{
        borderColor:"#004744",
        borderWidth:3,
        borderRadius:5,
        backgroundColor:"#fff",
        padding:10,
        marginTop:10,
        width:'80%',
        alignItems:'center',
    },
  });

  export default HomeScreen;