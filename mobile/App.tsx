import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { Button, Text, View, } from 'react-native';
import TagList from './src/components/TagList'
import ItemList from './src/components/ItemList'
import Basket from './src/components/Basket';

import Svg, { Path } from "react-native-svg"
import SuccessScreen from './src/components/Sucess';

function SvgComponent(props: any) {
  return (
    <Svg width={20} height={23} viewBox="0 0 20 23" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.75 4.5a1.5 1.5 0 01-1.5 1.5h-.75v13.5a3 3 0 01-3 3h-9a3 3 0 01-3-3V6h-.75a1.5 1.5 0 01-1.5-1.5V3a1.5 1.5 0 011.5-1.5H7A1.5 1.5 0 018.5 0h3A1.5 1.5 0 0113 1.5h5.25a1.5 1.5 0 011.5 1.5v1.5zM4.177 6L4 6.088V19.5A1.5 1.5 0 005.5 21h9a1.5 1.5 0 001.5-1.5V6.088L15.823 6H4.177zM1.75 4.5V3h16.5v1.5H1.75z"
        fill="#000"
      />
    </Svg>
  )
}


const HomeStack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator

      
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            return <Ionicons name={'ios-list-box'} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
          
        }}
        
        >

        <Tab.Screen name="tags" component={HomeStackScreen} />
        <Tab.Screen name="orders" component={HomeStackScreen} />
        <Tab.Screen name="lk" component={HomeStackScreen} />

      </Tab.Navigator>
    </NavigationContainer>
  )
}

var navigationOptions = {
  headerRight: () => (
    <Button

      onPress={() => alert('This is a button!')}
      title="Info"
      color="#fff"
    />
  ),
};

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Tags" component={TagList} options={{  title: 'Доброе утро',
      }}/>
      <HomeStack.Screen name="SuccessScreen" component={SuccessScreen} options={{   headerLeft: null}}/>
      <HomeStack.Screen name="ItemList" component={ItemList} />
      <HomeStack.Screen name="Basket" component={Basket}
        options={({ navigation }) => ({
          title: 'Корзина',
          headerRight: () => (
            <View style={{paddingRight:25}}>
              <SvgComponent />
            </View>
          ),
        })} />
    </HomeStack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
