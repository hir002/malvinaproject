import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
const Payment = () => {
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <TouchableOpacity style={styles.button}>
          <Image source={require('./Vector1.png')} />
        </TouchableOpacity>
        <Text style={styles.text}>Credit / Debit Card</Text>
      </View>
      <View style={styles.card}>
        <Image source={require('./card.png')} />
        <Image source={require('./photo.png')} />
      </View>
      <View style={styles.title1}>
        <Image source={require('./Text.png')} />
        <Image source={require('./Text1.png')} />
      </View>
      <View style={styles.title2}>
        <Image source={require('./Text2.png')} />
        <Image source={require('./cvc.png')} />
      </View>
      <View style={styles.title3}>
        <TouchableOpacity style={styles.button1}>
          <Text style={styles.text2}>Use this card</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Payment;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: ' #E5E5E5',
  },
  title: {
    flex: 0.4,
    alignItems: 'flex-end',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  button: {
    backgroundColor: 'rgba(7, 18, 42, 0.15)',
    width: 42,
    height: 42,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#07122A',
    fontWeight: '600',
    fontSize: 22,
  },
  card: {
    alignItems: 'center',
    gap: -15,
  },
  title1: {
    alignItems: 'center',
    gap: 10,
  },
  title2: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 30,
    flex: 0.5,
    justifyContent: 'center',
  },
  button1: {
    width: 327,
    height: 56,
    backgroundColor: '#07122A',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title3: {
    alignItems: 'center',
    flex: 0.3,
  },
  text2: {
    color: '#FFFFFF',
  },
});
