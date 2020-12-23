import React from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';
import styles from "./styles";
import {ProgressBar} from '@react-native-community/progress-bar-android';

/**
 * BoxStat Component que apresenta os status
 *
 * @version 0.0.1
 * @author [Filipe Augusto]
 * @param {themeColor} - Cor do tema
 * @param {hp} - HP do pokemon
 * @param {attack} - Ataque do pokemon
 * @param {defense} - Defensa do pokemon
 * @param {speed} - Velocidade do pokemon
 * @param {specialAttack} - Ataque especial do pokemon
 * @param {specialDefense} - Defesa especial do pokemon
 * @param {weightKg} - Peso em quilos do pokemon
 * @param {heightM} - Altura em metros do pokemon
 * @param {expBase} - Pontos de experiência do pokemon
 * @returns {BoxStat} - Componente que renderiza os status
 */
export default function BoxStat({
  themeColor, 
  hp, 
  attack, 
  defense, 
  speed, 
  specialAttack, 
  specialDefense, 
  weightKg, 
  heightM, 
  expBase })  {
   
  const stats = (title, value) => {
    return (
      <View style={styles.directionStatus}>
        <Text style={[styles.status, {color: themeColor}]}>{title}</Text>
        <ProgressBar style={styles.progressBar}
          styleAttr="Horizontal"
          indeterminate={false}
          progress={value*0.01}
        />
        <Text style={[styles.numberStatus, {color: themeColor}]}>{value}</Text>
      </View>
    )
  }

  return (
    <View style={[styles.box2, {backgroundColor: 'white'}]}>
      <Text style={[styles.titulo, {color: themeColor}]}>Status</Text>
      {stats('HP', hp)}
      {stats('Attack', attack)}
      {stats('Defense', defense)}
      {stats('Speed', speed)}
      {stats('Special Attack', specialAttack)}
      {stats('Special Defense', specialDefense)}
      {stats('Special Defense', specialDefense)}
      <Text style={[styles.titulo, {color: themeColor}]}>Informações básicas</Text>
      <View style={styles.row}>
        <Text style={[styles.infoTitle, {color: themeColor}]}>Peso: </Text>
        <Text style={styles.info}>{weightKg} quilogramas</Text>
      </View>
      <View style={styles.row}>
        <Text style={[styles.infoTitle, {color: themeColor}]}>Altura: </Text>
        <Text style={styles.info}>{heightM} metros</Text>
      </View>
      <View style={[styles.row, {marginBottom: '3%'}]}>
        <Text style={[styles.infoTitle, {color: themeColor}]}>Experiência base: </Text>
        <Text style={styles.info}>{expBase} pontos</Text>
      </View>
    </View> 
  ) 
}

