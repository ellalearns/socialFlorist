import { View, Image, Text, TouchableOpacity } from "react-native"
import images from "@/constants/images"
import GradientBackground from "@/components/GradientBackground"
import Header from "@/components/Header"
import ProfileDetail from "@/components/ProfileDetail"

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
          justifyContent: "space-between",
          paddingBottom: 185
        }}
      >
        <Header />

        <View style={{
          marginTop: 100,
          height: 270,
          width: 270
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

        <View>

        <View>
          <Text style={{
            fontSize: 60,
            fontWeight: "bold",
            color: "white"
          }}>Margaretha Collins</Text>
        </View>

        <View style={{
          flexDirection: "row",
          justifyContent: "space-between",
          width: "85%"
        }}>
          <ProfileDetail detail={"275K"} icon={images.user} />
          <ProfileDetail detail={"2,923"} icon={images.gallery} />
          <ProfileDetail detail={"581"} icon={images.user} />
        </View>

        </View>

      </View>
    </GradientBackground>
  )
}
