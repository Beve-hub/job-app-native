import React, {useState, useEffect} from 'react'
import { View, Text, TouchableOpacity, ActivityIndicator, FlatList } from 'react-native'
import { COLORS, SIZES } from '../../../constants' 
import styles from './popularjobs.style'
import PopularJobCard from './../../common/cards/popular/PopularJobCard';
import { useRouter } from 'expo-router';
import useFetch from '../../../hook/useFetch'



const Popularjobs = () => {
  const router = useRouter();
 
  const { data, isLoading, error} = useFetch
  (
    'search', {
      query: 'React developer',
      num_pages: 1
    }
  )

  const [selectedJob, setSelectedJob] = useState();

  const handleCardPress = (item) => {
    router.push(`/job-details/${item.job_id}`);
    setSelectedJob(item.job_id);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popularjobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show all</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
       {isLoading ? (
        <ActivityIndicator size="large" colors={COLORS.primary}/>
       ) : error ? (
        <Text>Something went wrong</Text>
       ) : (
        <FlatList
          data={data}
          renderItem={({item }) => (
            <PopularJobCard
               item={item}
               selectedJob={selectedJob}
               handleCardPress={handleCardPress}
            />
          )}
          keyExtractor={item => item?.job_id}
          contentContainerStyle={{ columGap: SIZES.medium}}
          horizontal
        />
       ) }
      </View>
    </View>
  )
}

export default Popularjobs;