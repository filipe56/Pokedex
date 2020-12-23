import React from 'react';
import { Modal, View, ActivityIndicator, Text } from 'react-native';
import Styles from "./styles";
import PropTypes from 'prop-types';

/**
 * Loading Component de Loading
 *
 * @version 0.0.1
 * @author [Filipe Augusto]
 * @param {loading} - Informa se o loading está ativo ou não
 * @returns {Loading} - Component de Loading
 */
export default Loading = ({ loading }) => {
  return (
    <Modal transparent animationType="none" visible={loading}>
      <View style={Styles.modalBackground}>
        <View style={Styles.activityIndicatorWrapper}>
          <ActivityIndicator
            size="large"
            color="#BA7CDD"
            animating={loading}
          />
          <Text style={{ textAlign: 'center', fontSize: 14, color: '#BA7CDD' }}>
            Aguarde, processando.
          </Text>
        </View>
      </View>
    </Modal>
  );
};

Loading.propTypes = {
  loading: PropTypes.bool.isRequired
};



