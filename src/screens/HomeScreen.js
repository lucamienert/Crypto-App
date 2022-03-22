import React from 'react'
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  TouchableOpacity
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import TransactionHistory from '../components/TransactionHistory'
import transactionHistory from '../constants/transactionHistory'

/* Home Screen => Markt Screen*/
const HomeScreen = () => {
  const renderHeader = () => {
    return (
      <View style={{ width: '100%', height: 250 }}>
        <View style={{ flex: 1, alignItems: 'center', backgroundColor: '#7F5DF0', borderBottomLeftRadius: 20, borderBottomRightRadius: 20, ...styles.shadow }}>
          <View style={{ marginTop: 48, width: '100%', alignItems: 'flex-end', paddingHorizontal: 24 }}>
            <TouchableOpacity style={{ width: 35, height: 35, alignItems: 'center', justifyContent: 'center' }}
              onPress={() => console.log("test")}>
              <Icon name="bell-o" size={30} style={{ flex: 1 }} color="#fff"></Icon>
            </TouchableOpacity>
          </View>
          <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ color: '#fff', fontSize: 24 }}>Wallet</Text>
            <Text style={{ color: '#fff', fontSize: 44, marginTop: 4 }}>3.478,00€</Text>
            <Text style={{ color: '#fff', fontSize: 18, marginTop: 4 }}>+0,5%</Text>
          </View>
        </View>
      </View>
    )
  }

  const renderHistory = () => {
    return (
      <TransactionHistory style={{ ...styles.shadow }} history={transactionHistory} />
    )
  }

  return (
    <ScrollView style={{ backgroundColor: '#fff' }}>
      <View style={{ flex: 1, paddingBottom: 130 }}>
        {renderHeader()}
        {renderHistory()}
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.30,
    shadowRadius: 4.65,

    elevation: 8,
  }
})

export default HomeScreen