import { NavigationContainer } from '@react-navigation/native';
import React, { useDebugValue } from 'react';
import { StyleSheet, TouchableOpacity } from "react-native";
import { View, Text, ScrollView, ImageBackground, Button, Image } from 'react-native';
import Svg, { Path } from "react-native-svg"
import * as SecureStore from 'expo-secure-store';

function SvgComponent(props: any) {
  return (
    <Svg width={25} height={22} color={"white"} viewBox="0 0 25 22" fill="none" {...props}>
      <Path
        d="M17.599 13.566V6.842C17.599 3.616 15.166 1 12.165 1 9.164 1 6.73 3.616 6.73 6.842v6.724M4.467 21h15.396c2 0 3.622-1.733 3.622-3.87v-4.84c0-2.137-1.622-3.87-3.622-3.87H4.466c-2 0-3.622 1.733-3.622 3.87v4.84c0 2.137 1.622 3.87 3.622 3.87z"
        stroke="#fff"
        strokeWidth={1.452}
        strokeLinecap="round"
      />
    </Svg>
  )
}


function setData(x: string){
  debugger
  var a = SecureStore.getItemAsync("list")
 
    a.then(p=>{
      SecureStore.setItemAsync("list", p + "  " + x)
      alert(p)
  
  })
}



interface ITag{
  Name: string,
  Img: any
}
var tags: ITag[] = [{
  Name:"Новинки",
  Img:require( '../assets/images/Мороженое.png')
},{
  Name:"Часто заказывают",
  Img:require(  '../assets/images/Гигиена.png')
},{
  Name:"Вы это заказывали",
  Img: require( '../assets/images/Колбасы.png')
}
,{
  Name:"Свежий кофе",
  Img: require( '../assets/images/Напитки.png')
},
{
  Name:"Готовая еда",
  Img: require( '../assets/images/Колбасы.png')
},{
  Name:"Фрукты и ягоды",
  Img: require( '../assets/images/Снеки.png')
},
{
  Name:"Овощи и зелень",
  Img: require( "../assets/images/Булочная.png")
},
{
  Name:"Фрукты и ягоды",
  Img: require( '../assets/images/Сладкое.png')
},
{
  Name:"Булочная",
  Img: require( '../assets/images/Булочная.png')
}
]
export default function TagList(props: any) {
  SecureStore.setItemAsync("list", "")
  return (
    <View style={{ flex: 1 }}>

      <View style={{
        width: "100%", flexDirection: "row", justifyContent: "space-around",

        flexWrap: 'wrap',
      }}>
        {tags.map((x: ITag) => <TouchableOpacity/*  onPress={()=>setData(x.Name)} */onPress={() => props.navigation.navigate('ItemList')}>
          <View style={{
            
            
          }}>
            <ImageBackground
         
              source={x.Img}
              style={{
                width: 117, height: 115, marginTop: 20, marginBottom: 10,  borderTopEndRadius: 100
              }}
              imageStyle={{ borderRadius: 10 }}
            >

              <Text style={{ padding: 16, fontSize: 14, fontFamily: "Arial", fontWeight: "700" }}>{x.Name}</Text>
            </ImageBackground>


          </View>
        </TouchableOpacity>
        )}

      </View>
      <View style={{ display: "flex", justifyContent: "center", flexDirection: "row", paddingTop: 14 }}>
        <Text style={{
          color: "#F2994A",
          fontWeight: "700",
          fontSize: 14

        }}>Минимальный заказ: 100 ₽ </Text>
      </View>
      <View style={{
        position: 'absolute',
        bottom: 0,
        right: 0,
        left: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <TouchableOpacity onPress={() => { props.navigation.navigate("Basket") }}>
          <View style={{
            marginBottom: 20,
            width: 350, height: 45, backgroundColor: "#2D2D2D", borderRadius: 10, flex: 1, flexDirection: "row",

          }}>
            <View style={{ display: "flex", width: "15%", justifyContent: "center", paddingLeft: 15 }}>
              <SvgComponent />
            </View>
            <View style={{ display: "flex", width: "65%", justifyContent: "center", }}>
              <Text style={{ alignItems: 'center', justifyContent: 'center', color: "white" }}>Оформить заказ</Text>
            </View>
            <View style={{ display: "flex", width: "20%", justifyContent: "center", paddingLeft: 15 }}>
              <Text style={{ color: "white" }}>830р</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>

    </View>
  );
}