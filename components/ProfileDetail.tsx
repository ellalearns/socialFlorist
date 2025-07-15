import { Image, View, Text } from "react-native"

const ProfileDetail = ({ detail, icon }: any) => {
    return (
        <View style={{
            flexDirection: "row",
            backgroundColor: "rgba(0, 0, 0, 0.1)",
            overflow: "hidden",
            width: 80,
            height: 40,
            borderRadius: 15,
            justifyContent: "center",
            alignItems: "center",
            padding: 8
        }}>
            <Image source={icon} style={{
                width: 20,
                height: 20,
            }}></Image>
            <Text numberOfLines={1} ellipsizeMode="clip" style={{
                fontSize: 24,
                color: "white",
                paddingLeft: 8,
            }}>{detail}</Text>
        </View>
    )
}


export default ProfileDetail
