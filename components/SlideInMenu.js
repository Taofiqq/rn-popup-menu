import { StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  Menu,
  MenuProvider,
  MenuOptions,
  MenuOption,
  MenuTrigger,
  renderers,
} from "react-native-popup-menu";
import { Entypo } from "@expo/vector-icons";

const { SlideInMenu: SlideInMenuRenderer } = renderers;
const SlideInMenu = () => {
  return (
    <MenuProvider
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View
        style={{
          //   flex: 1,
          flexDirection: "column",
          //   backgroundColor: "lightgray",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            backgroundColor: "dimgray",
            paddingTop: 105,
          }}
        >
          <Menu renderer={SlideInMenuRenderer}>
            <MenuTrigger
              customStyles={{
                triggerWrapper: {
                  top: 20,
                },
              }}
            >
              <Entypo name="dots-three-vertical" size={24} color="black" />
            </MenuTrigger>
            <MenuOptions
              style={{
                backgroundColor: "red",
                bottom: 250,
              }}
            >
              <MenuOption onSelect={() => alert(`Save`)} text="Save" />
              <MenuOption onSelect={() => alert(`Delete`)} text="Delete" />
            </MenuOptions>
          </Menu>
        </View>
      </View>
    </MenuProvider>
  );
};

export default SlideInMenu;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
});
