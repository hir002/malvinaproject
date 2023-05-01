import React, {useEffect, useState} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
const Kalkulyator = () => {
  const [result, setResult] = useState('');
  const [first, setFirst] = useState('0');
  const [operator, setOperator] = useState(null);
  const setNumber = number => {
    if (result === 0) {
      setResult(number);
    } else {
      setResult(result + number);
    }
  };
  const onOperatorPress = (malvina: string) => {
    setOperator(malvina);
    setFirst(parseInt(result));
    setResult('');
  };
  useEffect(()=>{
    if(result===Infinity){
      setResult(parseInt('eror'))
    }
  },[result])
  const equal = () => {
    switch (operator) {
      case '+':
        setResult(parseInt(first) + parseInt(result));
        break;
      case '-':
        setResult(parseInt(first) - parseInt(result));
        break;
      case '*':
        setResult(parseInt(first) * parseInt(result));
        break;
      case '/':
        setResult(parseInt(first) / parseInt(result));
        break;
      case '%':
        setResult(parseInt(first) % parseInt(result));
        break;
      default:
        setResult(0);
        break;
    }
  };

  return (
    <View style={{flex: 1, backgroundColor: 'pink'}}>
      <View
        style={{flex: 1, justifyContent: 'flex-end', alignItems: 'flex-end'}}>
        <Text style={styles.title2}>{result}</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          gap: 10,
          justifyContent: 'center',
        }}>
        <TouchableOpacity
          style={[styles.button, {backgroundColor: 'coral'}]}
          onPress={() => onOperatorPress(' C')}>
          <Text style={styles.number}>C</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, {backgroundColor: 'coral'}]}
          onPress={() => onOperatorPress('Delete ')}>
          <Text style={styles.number}>Delete</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, {backgroundColor: 'coral'}]}
          onPress={() => onOperatorPress('%')}>
          <Text style={styles.number}>%</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => setNumber('9')}>
          <Text style={styles.number}>9</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => setNumber('8')}>
          <Text style={styles.number}>8</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, {backgroundColor: 'coral'}]}
          onPress={() => onOperatorPress('+')}>
          <Text style={styles.number}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => setNumber('7')}>
          <Text style={styles.number}>7</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => setNumber('6')}>
          <Text style={styles.number}>6</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, {backgroundColor: 'coral'}]}
          onPress={() => onOperatorPress('-')}>
          <Text style={styles.number}>-</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => setNumber('5')}>
          <Text style={styles.number}>5</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => setNumber('4')}>
          <Text style={styles.number}>4</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, {backgroundColor: 'coral'}]}
          onPress={() => onOperatorPress('*')}>
          <Text style={styles.number}>*</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => setNumber('3')}>
          <Text style={styles.number}>3</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => setNumber('2')}>
          <Text style={styles.number}>2</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, {backgroundColor: 'coral'}]}
          onPress={() => onOperatorPress('/')}>
          <Text style={styles.number}>/</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => setNumber('1')}>
          <Text style={styles.number}>1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => setNumber('0')}>
          <Text style={styles.number}>0</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, {backgroundColor: 'coral'}]}
          onPress={() => equal('=')}>
          <Text style={styles.number}>=</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Kalkulyator;
const styles = StyleSheet.create({
  title2: {
    fontSize: 40,
    fontWeight: '500',
    color: 'blue',
  },
  button: {
    backgroundColor: 'purple',
    width: '30%',
    height: 65,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  number: {
    color: '#FFFFFF',
    fontSize: 28,
    fontWeight: 'bold',
  },
});
