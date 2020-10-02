import { NavigationContainer } from '@react-navigation/native';
import {  View, Text } from 'react-native';
import { ListItem, Avatar, CheckBox, Button } from 'react-native-elements'
import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props:any) {
  return (
    <Svg width={48} height={34} viewBox="0 0 48 34" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M46.415 1.584a2 2 0 010 2.832l-28 28a2.001 2.001 0 01-2.832 0l-14-14a2.002 2.002 0 112.832-2.832l12.584 12.588L43.583 1.584a2 2 0 012.832 0z"
        fill="#000"
      />
    </Svg>
  )
}

export default function SuccessScreen(a: { navigation: any }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <View>
                <SvgComponent></SvgComponent>
                <Text>Ожидайте курьера</Text>
                <Text>Ваш заказ принят в обработку</Text>
            </View>
            <View>
                <Button title="d"></Button>
                <Button title="d"></Button>
            </View>
        </View>
    );
}