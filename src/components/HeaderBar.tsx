import { useNavigation } from "@react-navigation/native"
import { Text, TouchableOpacity, View, SafeAreaView, Platform, StatusBar } from "react-native"
import { IonIcon } from "../constants/icons"

const HeaderBar = ({ right }) => {
  const navigation = useNavigation()

  return (
    <SafeAreaView style={{ paddingHorizontal: 24, marginTop: Platform.OS === "android" ? StatusBar.currentHeight + 10 : 0, flexDirection: 'row' }}>
      <View style={{ flex: 1, alignItems: 'flex-start' }}>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center'
          }}
          onPress={() => navigation.goBack()}>
          <IonIcon name="arrow-back" size={24} style={{ width: 25, height: 25 }} color="grey" />
          <Text style={{ marginLeft: 1, fontSize: 24, color: 'grey' }}>Back</Text>
        </TouchableOpacity>
        {/*<View
          style={{
            marginTop: 10,
            marginBottom: 20,
            width: '100%',
            borderBottomColor: 'grey',
            borderBottomWidth: 1,
          }}
        />*/}
      </View>
    </SafeAreaView>
  )
}

export default HeaderBar