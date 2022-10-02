import { StyleSheet, Text, View, FlatList, ScrollView } from "react-native";
import React from "react";
import {
  Menu,
  MenuProvider,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from "react-native-popup-menu";
import { Entypo } from "@expo/vector-icons";
import { data } from "../data";

const ScrollViewMenu = () => {
  return (
    <MenuProvider style={styles.container}>
      <Menu>
        <MenuTrigger
          customStyles={{
            triggerWrapper: {
              top: -40,
            },
          }}
        >
          <Entypo name="dots-three-vertical" size={24} color="black" />
        </MenuTrigger>
        <MenuOptions>
          {/* <FlatList
            data={data}
            keyExtractor={(item) => item.id}
            style={{ height: 200 }}
            renderItem={({ item }) => (
              <MenuOption
                onSelect={() => alert(item.name)}
                customStyles={{
                  optionWrapper: {
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                  },
                }}
              >
                <Text>{item.name}</Text>
                <Text>{item.icon}</Text>
              </MenuOption>
            )}
          /> */}
          <ScrollView style={{ height: 200 }}>
            {data.map((item) => (
              <MenuOption
                key={item.key}
                customStyles={{
                  optionWrapper: {
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                  },
                }}
              >
                <Text>{item.name}</Text>
                <Text>{item.icon}</Text>
              </MenuOption>
            ))}
          </ScrollView>
        </MenuOptions>
      </Menu>
    </MenuProvider>
  );
};

export default ScrollViewMenu;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 200,
    marginHorizontal: 100,
  },
  scroll: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
