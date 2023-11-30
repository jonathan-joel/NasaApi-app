import React, {useEffect, useState} from 'react';
import {Platform, StyleSheet, View, ScrollView} from 'react-native';
import Header from '../../components/Header';
import TodaysImage from '../../components/TodaysImage';
import fetchAPI from '../../utils/fetch';
import {PostImage} from '../../types';
import {format, sub} from 'date-fns';
import LastFiveDaysImages from '../../components/LastFiveDaysImages';

const Home = () => {
  const [todayImage, setTodayImage] = useState<PostImage>({});
  const [lastFiveDaysImages, setLastFiveDaysImages] = useState<PostImage[]>([]);

  useEffect(() => {
    const loadImage = async () => {
      try {
        const todayImageResponse = await fetchAPI();
        setTodayImage(todayImageResponse);
      } catch (error) {
        console.log(error);
        setTodayImage({});
      }
    };
    loadImage().catch(null);
  }, []);

  useEffect(() => {
    const loadLast5Images = async () => {
      try {
        const date = new Date();
        const todaysDate = format(date, 'yyyy-MM-dd');
        const fiveDaysAgoDate = format(sub(date, {days: 9}), 'yyyy-MM-dd');
        const lastFiveDaysImageResponse = await fetchAPI(
          `&start_date=${fiveDaysAgoDate}&end_date=${todaysDate}`,
        );
        setLastFiveDaysImages(lastFiveDaysImageResponse);
      } catch (error) {
        setLastFiveDaysImages([{}]);
      }
    };

    loadLast5Images().catch(null);
  }, []);

  console.log(typeof lastFiveDaysImages);

  return (
    <View style={[styles.container, styles.os]}>
      <ScrollView>
        <View style={styles.header}>
          <Header />
        </View>
        <TodaysImage {...todayImage} />
        <LastFiveDaysImages postImages={lastFiveDaysImages} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 1,
    backgroundColor: '#262626',
  },
  header: {
    marginTop: 4,
  },
  items: {
    alignContent: 'center',
    justifyContent: 'center',
  },
  os: {
    ...(Platform.OS === 'android' && {
      paddingTop: 2,
      flex: 1,
      backgroundColor: '#262626',
    }),
  },
});
export default Home;
