import React from 'react';
import {StyleSheet, View, Text, Image, StatusBar, FlatList} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Result from './Result/Result';

const CampList = ({data}) => {
  // console.log('Camps in camp list  ===', data);
  // console.log('images ===>', data?.image[0]?.url);

  const Item = ({item}) => {
    return (
      <View style={styles.item}>
        <Text style={styles.title}>{item.title}</Text>
        <Image style={styles.image} source={{uri: item?.image[0]?.url}} />
        <Text>{item.description}</Text>
        <Text>{item.price}</Text>
        <Text>Created By: {item?.author?.username}</Text>
        <View>
          <Text>Delete</Text>
          <Text>Update</Text>
        </View>
      </View>
    );
  };

  const renderItem = ({item}) => <Item item={item} />;
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>Yelp Camp</Text>
      </View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item?._id}
      />
    </SafeAreaView>
  );
};

export default CampList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#fff',
    padding: 10,
    marginVertical: 5,
    marginHorizontal: 10,
  },
  title: {
    fontSize: 20,
    marginBottom: 5,
  },
  image: {
    width: 313,
    height: 200,
    marginBottom: 10,
  },
});
