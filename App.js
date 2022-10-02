import { StyleSheet, Text, View } from "react-native";
import CustomMenu from "./components/CustomMenu";
import ScrollViewMenu from "./components/ScrollViewMenu";
import SimpleMenu from "./components/SimpleMenu";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <SimpleMenu /> */}
      {/* <CustomMenu /> */}
      <ScrollViewMenu />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
