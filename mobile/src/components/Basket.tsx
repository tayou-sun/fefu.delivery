import { NavigationContainer } from '@react-navigation/native';
import { View, Text } from 'react-native';
import React from 'react';
import { ListItem, Avatar, CheckBox, Button } from 'react-native-elements'
import { StyleSheet, TouchableOpacity } from "react-native";
interface IBasket {
    Name: string,
    Price: number,
    Weight: string
}
const bsketList: IBasket[] = [
    {
        Name: "Фильтр кофе №1 Coffee Place",
        Price: 150,
        Weight: "0.4"
    },
    {
        Name: "Тяхан с курицей №1 Coffee Place",
        Price: 200,
        Weight: "300"
    }
]



export default function Basket(props: any) {

    return (
        <View style={{ flex: 1 }}>
            <View>
                {
                    bsketList.map((item: IBasket, i) => {
                        return <ListItem key={i} bottomDivider>


                            <ListItem.Content>
                                <View style={{ display: "flex", flexDirection: "row" }}>

                                    <View style={{ display: "flex" }}>

                                    </View>
                                    <View style={{ display: "flex" }}>
                                        <ListItem.Title style={{ fontWeight: "700", fontSize: 16, fontFamily: "Arial" }}>{item.Name}</ListItem.Title>
                                        <ListItem.Subtitle>
                                            <Text style={{ fontWeight: "700", fontSize: 14, fontFamily: "Arial" }}>{item.Price} ₽ </Text>
                                            <Text style={{ fontSize: 14, fontFamily: "Arial" }}> {item.Weight}</Text>
                                        </ListItem.Subtitle>
                                    </View>
                                </View>


                            </ListItem.Content>

                        </ListItem>
                    })
                }

            </View>


            <View style={{
                position: 'absolute',
                bottom: 0,
                right: 0,
                left: 0,
                display: 'flex',

            }}>
                <View style={{ padding: 13 }}>
                    <View style={{ borderTopWidth: 1, borderColor:"lightgrey" }}></View>

                    <View style={{ padding: 13 }}>
                        <Text style={{ fontSize: 18, color: "#000000", fontWeight: "700", fontFamily: "Arial" }}>Стоимость:</Text>
                        <View style={{ flex: 1, flexDirection: "row" }}>
                            <Text style={{ fontSize: 42, color: "#2D9CDB", fontWeight: "700", fontFamily: "Arial" }}>530 ₽</Text>
                            <Text style={{ fontSize: 42, color: "#E0E0E0", fontWeight: "700", fontFamily: "Arial" }}> + 100 ₽</Text>
                        </View>
                    </View>
                </View>
                <View style={{ flex: 1, flexDirection: "row", alignContent: "center", justifyContent: "space-around", paddingBottom: 10 }}>
                    <Button buttonStyle={{ backgroundColor: "#EFEFEF", width: 105, height: 46, borderRadius: 10 }} 
                    titleStyle={{ color: "black", fontFamily: "Arial", fontWeight: "700" }} title={"Картой"}
                    onPress={()=> props.navigation.navigate("SuccessScreen")}
                    ></Button>
                    <Button buttonStyle={{ backgroundColor: "#000000", width: 244, height: 46, borderRadius: 10 }} 
                    titleStyle={{ color: "#fff", fontFamily: "Arial", fontWeight: "700" }} 
                    title={"ApplePay"}
                    onPress={()=> props.navigation.navigate("SuccessScreen")}
                    ></Button>
                </View>
            </View>
        </View>);
}