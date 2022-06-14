import axios from "axios"
import { useEffect, useState } from "react"
import { View, StyleSheet, Text } from "react-native"
import { MaterialCommunityIcons } from "../constants/icons"
import { VictoryLine } from "victory-native"

const PriceItem = ({ coinName, coinShort, apiName, iconName, color }) => {
  const [data, setData] = useState()
  const [rawData, setRawData] = useState()
  const [coin, setCoin] = useState(apiName)
  const [period, setPeriod] = useState(7)

  const getData = async () => {
    const response = await axios.get(
      `https://api.coingecko.com/api/v3/coins/${coin}/market_chart?vs_currency=usd&days=${period}`
    )

    const rawRespose = await axios.get(
      `https://api.coingecko.com/api/v3/coins/${coin}`
    )

    setRawData(rawRespose)

    const formatData = response.data.prices.map(i => {
      return {
        x: i[0],
        y: i[1]
      }
    })
    setData(formatData)
  }

  useEffect(() => {
    getData()
  }, [coin, period])

  return (
    <View
      style={{
        marginTop: 24,
        marginHorizontal: 12,
        padding: 12,
        borderRadius: 12,
        backgroundColor: 'white',
        ...styles.shadow
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginBottom: 12
        }}
      >
        <View style={{ flex: 1 }}>
          <View style={{ flexDirection: 'row' }}>
            <MaterialCommunityIcons name={iconName} size={20} color={color} />
            <Text style={{ fontSize: 14 }}>{coinName}</Text>
          </View>
          <View>
            <Text style={{ fontSize: 10, color: 'grey' }}>
              {coinShort}
            </Text>
          </View>
          <View>
            <Text>{rawData?.data?.market_data?.current_price?.eur}€</Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <VictoryLine
            style={{
              data: {
                stroke: "#000",
                strokeWidth: 1
              },
            }}
            width={300}
            height={60}
            data={data}
          />
        </View>
      </View>
    </View>
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

export default PriceItem