import React, {FC} from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';
import {PostImage as PostImageTypes} from '../../types';
import PostImages from '../PostImages';

const LastFiveDaysImages: FC<{postImages?: PostImageTypes[]}> = ({
  postImages,
}) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Last 10 days images ðŸŒŽ</Text>
      </View>
      <View style={styles.scrollContainer}>
        <ScrollView horizontal={true} style={styles.content}>
          {postImages?.map(element => (
            <PostImages key={element.title} {...element} />
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'red',
  },
  scrollContainer: {
    // backgroundColor: 'blue',
    // height: '100%',
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  title: {
    marginVertical: 10,
    marginLeft: 4,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  content: {
    // padding: 10,
    // borderWidth: 2,
    marginVertical: 16,
  },
});
export default LastFiveDaysImages;
