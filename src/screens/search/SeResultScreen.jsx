import React from 'react';
import {View, Text, FlatList, Image, Pressable, Linking} from 'react-native';
import dummyProducts from '../../assets/search.json';

const products = dummyProducts.slice(0, 20);

export default function SeResultScreen() {
  return (
    <View>
      <Text className="text-xl">Search Screen</Text>
      <FlatList
        data={products}
        keyExtractor={item => item.asin}
        contentContainerStyle={{gap: 5, padding: 3}}
        renderItem={({item}) => (
          <Pressable
            onPress={() => Linking.openURL(item.url)}
            className="bg-white p-3 flex-row gap-2">
            <Image source={{uri: item.image}} className="w-20 h-20" />
            <Text className="flex-1" numberOfLines={4}>
              {item.name}
            </Text>
            <Text>$ {item.final_price}</Text>
          </Pressable>
        )}
      />
    </View>
  );
}
