import { StatusBar } from "expo-status-bar"
import { StyleSheet, Text, View } from "react-native"
import { WebView } from "react-native-webview"

export default function App() {
  return (
    <WebView
      style={styles.container}
      source={{ uri: "192.168.1.15:3000/?userId=2312103121" }}
    />
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
})
