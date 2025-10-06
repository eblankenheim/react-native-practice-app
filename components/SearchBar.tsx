import { icons } from "@/constants/icons";
import React from "react";
import { Image, TextInput, View } from "react-native";

const SearchBar = () => {
  return (
    <View className="flex-row items-center bg-dark-200 rounded-full px-5 py-4">
      <Image
        source={icons.search}
        className="size-5"
        resizeMode="contain"
        tintColor="#ab8bff"
      />
      <TextInput
        onPress={() => {}}
        className="flex-1 ml-2 text-white"
        placeholder="Search"
        value=""
        onChangeText={() => {}}
        placeholderTextColor="#A8B5DB"
      />
    </View>
  );
};

export default SearchBar;
