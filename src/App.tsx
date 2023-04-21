import React from 'react'; 
import {SafeAreaView, StyleSheet} from 'react-native'; 
import Popup from './Popup'; 
import Payment from './Payment'; 
const App = () => { 
  return ( 
    <SafeAreaView style={styles.container}> 
      {/* <Popup />  */}
     <Payment/>
    </SafeAreaView> 
  ); 
}; 
export default App; 
const styles = StyleSheet.create({ 
  container: { 
    flex: 1, 
    backgroundColor: '#E5E5E5', 
  }, 
});