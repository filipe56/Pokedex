import React, { useState, useEffect } from 'react';
import { Text, View, ScrollView, Image, Alert } from 'react-native'
import styles from "./styles";
import { TYPE_COLORS } from "../../util/Constants";
import { getListPokemon  } from "../../service/pokemonService";
import BoxStat from "../../components/boxStats/BoxStats";
import Loading from "../../components/Loading/Loading";

export default function DetailPokemon({ route, navigation }) {
    const [name, setName] = useState('');
    const [hp, setHp] = useState('');
    const [attack, setAttack] = useState('');
    const [specialDefense, setSpecialDefense] = useState('');
    const [speed, setSpeed] = useState('');
    const [specialAttack, setSpecialAttack] = useState('');
    const [defense, setDefense] = useState('');
    const [weightKg, setWeightKg] = useState('');
    const [heightM, setHeightM] = useState('');
    const [expBase, setExpBase] = useState('');
    const [themeColor, setThemeColor] = useState('');
    const [loading, setLoading] = useState(false); 


    useEffect(() => {
      getPokemon();
    },[])
    

    const pokemonIndex = route.params.id;
    
    const getPokemon = () => {
      setLoading(true)
      getListPokemon(pokemonIndex).then((response) =>{
        setName(response.data.name)
        setWeightKg((response.data.weight*0.1).toFixed(1))
        setHeightM((response.data.height*0.1).toFixed(1))
        setExpBase(response.data.base_experience)

        //Cor de acordo com o tipo
        const types = response.data.types.map(type => type.type.name);
        setThemeColor(`${TYPE_COLORS[types[types.length - 1]]}`);

        const stats = response.data.stats
        setSpeed(getStat(stats, "speed"))
        setSpecialDefense(getStat(stats, "special-defense"))
        setSpecialAttack(getStat(stats, "special-attack"))
        setDefense(getStat(stats, "defense"))
        setAttack(getStat(stats, "attack"))
        setHp(getStat(stats, "hp"))
        setLoading(false)

      })
      .catch((error) =>{
        setLoading(false)
        Alert.alert("Erro", "Falha no sistema da pokedex");
      })
    }

    navigation.setOptions({ 
      headerStyle: {
        backgroundColor: themeColor ,
      },
      title: '',
     });

    function getStat(listStat, key) {
      let stat;
      listStat.forEach(element => {
        if (key === element.stat.name) {
          stat  = element.base_stat;
          return;
        }
      });
      return stat;
    }

    const imageUrl = `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${pokemonIndex}.png?raw=true`;

    return (
      <ScrollView style={{backgroundColor: themeColor}}>
        <Loading loading={loading} />
        <View style={styles.container}>
            <View style={[styles.box1, {backgroundColor: themeColor}]}>
                <View style={{flexDirection: 'row'}}>                     
                  <View style={styles.arrowButton}>
                    <Text style={styles.headerFont}>{name}</Text>
                  </View>
                  <View style={styles.arrowButton}>
                    <Text style={styles.headerFont}>#{pokemonIndex}</Text>
                  </View>
                </View>
              <Image resizeMode="contain" source={{uri: imageUrl}} style={styles.imagem}/>
            </View>
            <BoxStat 
              themeColor={themeColor} 
              hp={hp} 
              attack={attack} 
              defense={defense} 
              speed={speed} 
              specialAttack={specialAttack} 
              specialDefense={specialDefense}              
              weightKg={weightKg}
              heightM={heightM} 
              expBase={expBase}
            />
          </View>
      </ScrollView>
    )
}

