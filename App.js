import React from 'react';
import HomeNav from './home/HomeNav';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import Villagers from "./villagers/Villagers";

const HomeNavigator = createStackNavigator({
        Home: {screen: HomeNav},
        Villagers: {screen: Villagers}
    },
    {
        initialRouteName: 'Home'
    });

const App = createAppContainer(HomeNavigator);

export default App;