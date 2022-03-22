import {
  SafeAreaView, ScrollView, View
} from 'react-native'
import HeaderBar from '../components/HeaderBar'
import TextButton from '../components/TextButton'

const CryptoDetailsScreen = ({ navigation }) => {
  const renderChart = () => {
    return (
      <View
        style={{
          marginTop: 24,
          marginHorizontal: 12,
          alignItems: 'center',
          width: '100%',
          borderRadius: 12,
          backgroundColor: '#fff'
        }}
      >
      </View>
    )
  }

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#fff'
      }}
    >
      <HeaderBar />
      <ScrollView>
        <View style={{ flex: 1, paddingBottom: 24, padding: 10 }}>
          <TextButton
            label="Buy"
            onPress={() => navigation.navigate('TransactionScreen')}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default CryptoDetailsScreen