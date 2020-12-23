import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ListPokemon from "../pages/ListPokemon/ListPokemon";
import DetailPokemon from "../pages/DetailPokemon/DetailPokemon";

const Routes = createStackNavigator();

const navigator = () => {
return(
  <Routes.Navigator screenOptions={{
    headerTintColor : '#fff', 
    headerStyle : {
      backgroundColor: '#BA7CDD'
    },
  }}>
    <Routes.Screen 
    name="ListPokemon"
    component={ListPokemon}
    options={() => ({ 
      title: 'Pokedex',
    })}
    />
    <Routes.Screen name="DetailPokemon" component={DetailPokemon} />
  </Routes.Navigator>
  );

}
export default navigator