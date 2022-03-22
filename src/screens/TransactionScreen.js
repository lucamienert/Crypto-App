import {
  StyleSheet,
  View,
  Text,
  TextInput,
  SafeAreaView
} from 'react-native'
import HeaderBar from '../components/HeaderBar'

const TransactionScreen = ({ navigation }) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#fff'
      }}
    >
      <HeaderBar />
      <View style={styles.inputView}>
        <TextInput
          keyboardType='numeric'
          style={styles.inputText}
          placeholder="Nettobetrag"
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          editable={false} selectTextOnFocus={false}
          style={styles.inputText}
          placeholder="Gesamt"
        />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  header: {
    color: "#246EE9",
    fontSize: 40,
    marginBottom: 30,
    fontWeight: 'bold'
  },
  inputView: {
    width: '80%',
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#00000022',
    height: 50,
    marginTop: 20,
    justifyContent: 'center',
    padding: 20,
  },
  inputText: {
    height: 50,
    color: '#000'
  },
  password: {
    marginTop: 10,
    marginBottom: 40,
  },
  login: {
    marginTop: 20,
    width: '80%',
    borderRadius: 25,
    height: 50,
    backgroundColor: "#246EE9",
    alignItems: "center",
    justifyContent: 'center',
  },
  loginText: {
    color: '#fff'
  }
})

export default TransactionScreen