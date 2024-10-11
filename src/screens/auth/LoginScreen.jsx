import {View, Text, Pressable, Alert, TextInput} from 'react-native';
import React, {useState} from 'react';
import {supabase} from '../../utils/supabase';

export default function LoginScreen({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSignIn = async () => {
    const {data, error} = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      Alert.alert('Error signing in', error.message);
    } else if (data?.session) {
      navigation.navigate('Search');
    } else {
      Alert.alert('Error', 'Unable to sign in. Please try again.');
    }
  };

  const onSignUp = async () => {
    const {data, error} = await supabase.auth.signUp({
      email,
      password,
    });
    if (error) {
      Alert.alert('Error signing in', error.message);
    } else if (data?.session) {
      navigation.navigate('Search');
    } else {
      Alert.alert('Error', 'Unable to sign up. Please try again.');
    }
  };

  return (
    <View className="p-3 gap-3">
      <TextInput
        value={email}
        onChangeText={setEmail}
        placeholder="email"
        className="rounded border border-gray-300 bg-white p-4"
      />
      <TextInput
        value={password}
        onChangeText={setPassword}
        placeholder="password"
        className="rounded border border-gray-300 bg-white p-4"
      />
      <View className="flex-row gap-2">
        <Pressable
          onPress={onSignIn}
          className="flex-1 items-center rounded bg-teal-500 p-3">
          <Text className="font-bold color-white">Sign in</Text>
        </Pressable>

        <Pressable
          onPress={onSignUp}
          className="flex-1 items-center rounded bg-teal-500 p-3">
          <Text className="font-bold color-white">Sign up</Text>
        </Pressable>
      </View>
    </View>
  );
}
