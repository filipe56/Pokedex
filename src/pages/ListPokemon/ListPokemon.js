import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Alert,
  Image,
  FlatList,
  TextInput
} from 'react-native';
import styles from "./styles";
import { getListPokemon  } from "../../service/pokemonService";
import { URLDEFAULT } from "../../util/Constants";
import CellPokemon from "../../components/cellPokemon/CellPokemon";
import Loading from "../../components/Loading/Loading";

export default function ListPokemon({ navigation }) {

  const [nextPage, setNextPage] = useState(''); 
  const [previousPage, setPreviousPage] = useState(''); 
  const [numberPage, setNumberPage] = useState(1); 
  const [loading, setLoading] = useState(false); 
  const [listPokemon, setListPokemon] = useState([]); 
  const [lastList, setLastList] = useState([]); 
  
  useEffect(() => {
    getPokemon()
  },[])

  const getPage = (page) => {
    return page.replace(URLDEFAULT,'')
  }

  const getPokemon = (page, filter = false) => {
    setLoading(true)
    getListPokemon(page).then((response) =>{
      setLoading(false)
      if (filter && response && response.data.forms) {
        setListPokemon([])
        setListPokemon(response.data.forms)
        setNextPage(null)
        setPreviousPage(null)
      } else if (!filter){
        setListPokemon(response.data.results)
        setNextPage(getPage(response.data.next || ''))
        setPreviousPage(getPage(response.data.previous || ''))
        setLastList(response.data.results)
      } 
    })
    .catch((error) =>{
      setLoading(false)
      if (filter) {
        setListPokemon(lastList)
      }
      Alert.alert("Erro", "Falha no sistema da pokedex");
    })
  }

  const previous = () => {
    if (!previousPage) {
      Alert.alert("Ação negada!", "Você já está na primeira página, não há páginas anteriores a esta!");
    } else {
        getPokemon(previousPage);
        setNumberPage(numberPage - 1)
    }
  }

  const detailPokemon = (index, name) => {
    navigation.navigate('DetailPokemon', {id: index, name })
  }

  const next = () => {
    if(!nextPage) {
      Alert.alert("Ação negada!", "Você já está na última página, não há páginas após esta!");
    } else {
      getPokemon(nextPage);
      setNumberPage(numberPage + 1);
    }
  };

  const onFilter = (value) => {
    getPokemon(value.toLowerCase(), true);
  }


  const renderItem = ({item}) => {
    let url = item.url
    const pokemonIndex = url.split('/')[url.split('/').length - 2];
    const imageUrl = `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${pokemonIndex}.png?raw=true`;
    return (
      <CellPokemon 
      onPress={() => detailPokemon(pokemonIndex, item.name)} 
      pokemonIndex={pokemonIndex} 
      imageUrl={imageUrl} 
      name={item.name} />
    ) ;
  }


  return (
    <>
    <Loading loading={loading} />
    <Image source={require('../../assets/background.png')} style={styles.backgroundColor} />
    <View style={{flex: 1}}>
      <View style={styles.header}>
        <View style={styles.containerHeader}>
          <Image resizeMode="contain" source={require('../../assets/loupe.png')} style={styles.imagemSearch}/>
            <TextInput 
            placeholder="Buscar..."  
            onChangeText={(value) => onFilter(value)}
            />
          </View>
        </View>
      <View style={styles.containerArrows}>
      <TouchableOpacity style={styles.arrowButton} onPress={previous}>
        <Image resizeMode="contain" source={require('../../assets/left-arrow.png')} style={styles.imagemArrow}/>
      </TouchableOpacity>
      <View style={styles.arrowButton}>
        <Text style={styles.count}>{numberPage}</Text>
      </View>
      <TouchableOpacity style={styles.arrowButton} onPress={next}>
        <Image resizeMode="contain" source={require('../../assets/right-arrow.png')} style={styles.imagemArrow}/>
      </TouchableOpacity>
      </View>
      <FlatList 
        numColumns={2}
        data={listPokemon}
        refreshing={true}
        renderItem={renderItem}
        keyExtractor={(item) => item}  
      />
    </View>
    </>
  );
}
