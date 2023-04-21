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
      <View style={styles.title6}>
        <Image source={require('./cardd.png')} />
        <Image source={require('./photo.png')} />
      </View>
      <View style={styles.title2}>
        <Text style={styles.text2}>Name on card</Text>
        <TouchableOpacity style={styles.button2}>
          <Text style={styles.text3}>Leslee Harron</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.title2}>
        <Text style={styles.text2}>Card number</Text>
        <TouchableOpacity style={styles.button3}>
          <Text style={styles.text4}>4242 4242 4242 4242</Text>
        </TouchableOpacity>
      </View>
      <View style={{left: 30, top: 15}}>
        <Text>Exprity date</Text>
      </View>
      <View style={{left: 200}}>
        <Text>CVC</Text>
      </View>
      <View style={styles.title4}>
        <TouchableOpacity style={styles.button4}>
          <Text style={styles.text7}>04/22</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button5}>
          <Text style={styles.text7}>474</Text>
          <Image style={{left: 100, top: -10}} source={require('./hint.png')} />
        </TouchableOpacity>
      </View>
      <View style={styles.title5}>
        <TouchableOpacity style={styles.button6}>
          <Text style={styles.text5}>Use this card</Text>
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
    flex: 0.25,
    alignItems: 'flex-end',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    right: 18,
  },
  button: {
    backgroundColor: 'rgba(7, 18, 42, 0.15)',
    width: 42,
    height: 42,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    top: 10,
  },
  text: {
    color: '#07122A',
    fontWeight: '600',
    fontSize: 22,
  },
  buttonn: {
    backgroundColor: '#07122A',
    width: 327,
    height: 214,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20,
  },
  photo: {
    alignItems: 'center',
  },
  text2: {
    fontWeight: '400',
    fontSize: 14,
    color: '#8698A8',
    right: 120,
  },
  button2: {
    backgroundColor: '#FFFFFF',
    width: 327,
    height: 48,
    borderRadius: 8,
    justifyContent: 'center',
  },
  text3: {
    color: '#0B152D',
    fontWeight: '500',
    fontSize: 17,
    left: 10,
  },
  title2: {
    alignItems: 'center',
    flex: 0.3,
  },
  button3: {
    backgroundColor: '#FFFFFF',
    width: 327,
    height: 48,
    borderRadius: 8,
    justifyContent: 'center',
  },
  text4: {
    color: '#000000',
    fontWeight: '500',
    fontSize: 17,
    left: 10,
  },
  button4: {
    backgroundColor: '#FFFFFF',
    width: 154,
    height: 48,
    borderRadius: 8,
    left: 30,
  },
  button5: {
    backgroundColor: '#FFFFFF',
    width: 154,
    height: 48,
    borderRadius: 8,
  },
  title4: {
    flexDirection: 'row',
    gap: 50,
    flex: 0.3,
  },
  button6: {
    backgroundColor: '#07122A',
    width: 327,
    height: 56,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text5: {
    color: '#FFFFFF',
  },
  title5: {
    alignItems: 'center',
    top: -20,
  },
  title6: {
    alignItems: 'center',
    gap: -20,
  },
  text7: {
    top: 10,
    color: '#000000',
    fontWeight: '500',
    fontSize: 17,
    left: 10,
  },
});
