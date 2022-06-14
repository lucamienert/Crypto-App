import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  ScrollView
} from 'react-native'
import PriceItem from '../components/PriceItem'
import { IonIcon } from '../constants/icons'
import cryptos from '../constants/cryptos'

const PricesScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <View style={{ width: '100%', height: 150 }}>
        <View style={{ flex: 1, alignItems: 'center', backgroundColor: '#7F5DF0', borderBottomLeftRadius: 20, borderBottomRightRadius: 20, ...styles.shadow }}>
          <View style={{ marginTop: 68, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ color: '#fff', fontSize: 36 }}>Prices<IonIcon name="pricetag-outline" size={36} /></Text>
          </View>
        </View>
      </View>
      <ScrollView style={{ backgroundColor: '#fff' }}>
        <View style={{ paddingBottom: 100 }}>
          {cryptos.map(e => {
            return (
              <PriceItem
                coinName={e.name}
                apiName={e.apiName}
                coinShort={e.coinShort}
                iconName={e.iconName}
                color={e.color}
                key={e.name}
              />
            )
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
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
export default PricesScreen