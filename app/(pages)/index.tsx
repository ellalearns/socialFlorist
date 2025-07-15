import { ImageBackground, View, SafeAreaView } from "react-native"
import images from "@/constants/images"
import GradientBackground from "@/components/GradientBackground"
import Header from "@/components/Header"

export default function Index() {
  return (
    <GradientBackground>
      <View
      style={{
        padding: 24,
        height: "100%",
        width: "100%",
        marginTop: 36,
        flex: 1
        // zIndex: 100
        // backgroundColor: "yellow"
      }}
      >
        <Header />
      </View>
    </GradientBackground>
  )
}
