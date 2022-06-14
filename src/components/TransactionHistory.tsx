import {
  View,
  Text,
  FlatList,
  TouchableOpacity
} from 'react-native'

import { FontAwesomeIcon } from '../constants/icons'

const TransactionHistory = ({ style, history }) => {
  const renderItem = ({ item }) => (
    <TouchableOpacity style={{
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: 16
    }}>
      <FontAwesomeIcon name='exchange' size={30} color='#7F5DF0' />
      <View style={{ flex: 1, marginLeft: 12 }}>
        <Text style={{ fontSize: 18 }}>{item.description}</Text>
        <Text style={{ fontSize: 12, color: 'grey' }}>{item.date}</Text>
      </View>
      <View style={{ flexDirection: 'row', height: '100%', alignItems: 'center' }}>
        <Text style={{ color: item.amount.toString().startsWith('-') ? '#F9A8BA' : '#37E39F' }}>{item.amount} {item.currency}</Text>
      </View>
    </TouchableOpacity>
  )

  return (
    <View
      style={{
        marginTop: 24,
        marginHorizontal: 24,
        padding: 20,
        borderRadius: 12,
        backgroundColor: '#fff',
        ...style
      }}
    >
      <Text
        style={{
          color: '#000',
          fontSize: 24
        }}
      >
        Transaction History
      </Text>
      <FlatList
        contentContainerStyle={{ marginTop: 12 }}
        scrollEnabled={false}
        data={history}
        keyExtractor={item => `${item.id}`}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => {
          return (
            <View style={{ width: '100%', height: 1, backgroundColor: 'grey' }}></View>
          )
        }}
      />
    </View>
  )
}

export default TransactionHistory