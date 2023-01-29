import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Pressable, Image } from 'react-native';
import React, {useState} from 'react';

const TicketVault = () => {
const [ticketTotal, setTicketTotal] = useState(0);
const [text, setText] = useState('');
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Ticket Vault</Text>
      <TextInput style={styles.inputStyle} placeholder="Number of Tickets" onChangeText={newText => setText(newText)}></TextInput>
      <Pressable style={styles.button} onPress={() => {setTicketTotal("$" + (text * 99.99).toFixed(2))}
      }><Text style={styles.cost}>Find The Cost</Text></Pressable>
      <Text style={styles.cost}>Ticket Cost: {ticketTotal} </Text>
      <Image source={require("./images/concert.png")}></Image>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputStyle:{
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
    width: 157,
    paddingHorizontal: 20,
    marginBottom: 30,
  },
  header:{
    fontSize: 60,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button:{
    Width: 200,
    padding: 10,
    paddingVertical: 12,
    paddingHorizontal: 32,
    backgroundColor: '#f98b88',
    marginBottom: 20,
  },
  cost: {
    fontSize: 35,
  },
});
export default TicketVault;