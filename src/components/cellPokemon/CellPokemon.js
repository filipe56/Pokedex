import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import PropTypes from 'prop-types';
import styles from "./styles";

/**
 * Cellpokemon Component que monta a célula do pokemón
 *
 * @version 0.0.1
 * @author [Filipe Augusto]
 * @param {pokemonIndex} - Id do pokemon
 * @param {onPress} - Ação de precionar a célula
 * @param {imageUrl} - Url da imagem
 * @param {name} - Nome do pokemon
 * @returns {Cellpokemon} - Componente de célula que renderiza a image e o nome do pokemon
 */
export default function Cellpokemon({pokemonIndex, onPress , imageUrl, name}) {
  const color = '#BA7CDD';
  return (
    <TouchableOpacity style={styles.gridButton} onPress={onPress}>
      <View style={[styles.grid, {backgroundColor: color}]}>
        <Text style={styles.indexFont}>{pokemonIndex}</Text>
        <Image resizeMode="contain" source={{uri: imageUrl}} style={styles.imagem}/>
        <Text style={styles.fonte}>{name}</Text>
      </View>
    </TouchableOpacity>
  ) 
}

Cellpokemon.propTypes = {
  pokemonIndex: PropTypes.number.isRequired,
  onPress: PropTypes.func,
  imageUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

Cellpokemon.defaultProps = {
  onPress: () => {},
};

