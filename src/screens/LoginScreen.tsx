import { useState } from "react"
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"

const LoginScreen = ({ navigation }) => {
  const [password, setPassword] = useState("")

  const login = () => {
    if (password === "admin")
      navigation.navigate('HomeScreen')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Login</Text>
      <View style={styles.inputView}>
        <TextInput
          value={password}
          onChangeText={e => setPassword(e)}
          secureTextEntry={true}
          style={styles.inputText}
          placeholder="Password"
        />
      </View>
      <TouchableOpacity style={styles.login} onPress={() => login()}>
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>
    </View>
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
    borderRadius: 25,
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

export default LoginScreen