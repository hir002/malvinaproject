import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
const Popup = () => {
  return (
    <View style={styles.container}>
      <View style={styles.bust}>
        <Image source={require('./bust.png')} />
      </View>
      <View style={styles.title1}>
        <Text style={styles.title}> Hey Leslee, </Text>
        <Text style={styles.title2}> there’s a new course about</Text>
        <Text style={styles.title3}>Figma</Text>
      </View>
      <View style={styles.title4}>
        <Text style={styles.title5}>Find out how our new matching tool </Text>
        <Text style={styles.title6}> can help you learn another way</Text>
      </View>
      <View style={styles.form}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Discover the course</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.title7}>
        <Text style={styles.title8}>Not now</Text>
      </View>
    </View>

  );
};
export default Popup;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: ' #E5E5E5',
  },
  bust:{
    justifyContent: 'center',
    alignItems: 'center',
  },
  title:{
    color: '#07122A',
    fontWeight: '600',
    fontSize: 22,
},
  title1: {
    alignItems: 'center',
},
  title2: {
    color: '#07122A',
    fontWeight: '600',
    fontSize: 22,
},
  title3: {
    color: '#07122A',
    fontWeight: '600',
    fontSize: 22,
},
  title4: {
    alignItems: 'center',
    flex:0.8,
},
  title5: {
    color: '#4F4F4F',
    fontSize: 16,
    fontWeight: '300',
},
  title6: {
    color: '#4F4F4F',
    fontSize: 16,
    fontWeight: '300',
},
  button: {
    backgroundColor: '#07122A',
    width: 284,
    height: 58,
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',

},
  buttonText: {
    color: '#FFFFFF',
    fontSize: 17,
},
  form: {
    alignItems: 'center',
    flex:0.7

},
  title8: {
    color: '#BDBDBD',
    fontSize: 15,
    fontWeight: '500',
},
  title7: {
    alignItems: 'center',
    flex:0.5
}
});
