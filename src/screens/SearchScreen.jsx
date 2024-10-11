import {View, Text, TextInput, Pressable} from 'react-native';
import React, {useState} from 'react';
import {supabase} from '../utils/supabase';

export default function SearchScreen({navigation}) {
  const performSearch = () => {
    // save this search in database

    // scrape amazon from this query

    navigation.navigate('Screen2');
  };

  const [search, setSearch] = useState('123');

  return (
    <>
      <View className="flex-row gap-3 p-3">
        <TextInput
          value={search}
          onChangeText={setSearch}
          placeholder="Search for a product"
          className="flex-1 rounded border border-gray-300 p-3"
        />
        <Pressable onPress={performSearch} className="bg-teal-300 p-3 rounded">
          <Text>Search</Text>
        </Pressable>
      </View>
      <Pressable onPress={() => navigation.navigate('Login')}>
        <Text>Open Auth Screen</Text>
      </Pressable>

      <Text onPress={() => supabase.auth.signOut()}>Sign Out</Text>
    </>
  );
}
