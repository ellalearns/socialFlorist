import { ImageBackground, View, SafeAreaView, Image, Text, TouchableOpacity } from "react-native"
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
          flex: 1,
          justifyContent: "space-evenly"
        }}
      >
        <Header />
        <View style={{
          // backgroundColor: "grey",
          height: "30%",
          width: "70%"
        }}>
          <View style={{
            borderRadius: 50
          }}>
            <Image source={images.pic1} style={{
              height: "100%",
              width: "100%",
              borderRadius: 300
            }}>
            </Image>
          </View>
          <View style={{
            height: 70,
            width: 70,
            backgroundColor: "#67bc5f",
            position: "absolute",
            bottom: 0,
            right: 0,
            borderRadius: 50,
            justifyContent: "center",
            alignItems: "center"
          }}>
            <TouchableOpacity style={{
              height: "100%",
              width: "100%",
              justifyContent: "center",
              alignItems: "center"
            }}>
              <Image source={images.chat} style={{
                height: "50%",
                width: "50%"
              }} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </GradientBackground>
  )
}
