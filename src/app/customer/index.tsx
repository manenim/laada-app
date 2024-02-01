import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const PendingRequests = () => {
  return (
    <View>
          <Text>Pending Requests</Text>
          
          {/* <Link href={`/customer/requests/1`}><Text>To Accept screen</Text></Link> */}
    </View>
  )
}

export default PendingRequests