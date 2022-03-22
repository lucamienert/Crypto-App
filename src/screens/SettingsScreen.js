import {
  View,
  ScrollView,
  Text
} from 'react-native'

const SettingsScreen = () => {
  return (
    <ScrollView style={{ backgroundColor: '#fff' }}>
      <View style={{ flex: 1, paddingBottom: 130 }}>
        <View style={{ width: '100%', height: 250 }}>
          <View style={{ flex: 1, alignItems: 'center', backgroundColor: '#7F5DF0', borderBottomLeftRadius: 20, borderBottomRightRadius: 20 }}>
            <View style={{ marginTop: 48, alignItems: 'center', justifyContent: 'center' }}>
              <Text style={{ color: '#fff', fontSize: 24 }}>Settings</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

export default SettingsScreen