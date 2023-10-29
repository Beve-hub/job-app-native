import React from 'react'
import { View, Text, TextInput, TouchableOpacity, Image, FlatList  } from 'react-native'
import { icons, SIZES } from '../../../constants';
import styles from './welcome.style'
import { useRouter } from 'expo-router';

const Welcome = () => {
  const  router = useRouter();
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello Victor</Text>
        <Text style={styles.welcomeMessage}>Find your perfect job</Text>
      </View>

      <View>
        <View>
          <TextInput 
          style={styles.searchInput}/>
        </View>
      </View>
    </View>
  )
}

export default Welcome