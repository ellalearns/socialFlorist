import images from "@/constants/images"
import { Image, StyleSheet, View, Text } from "react-native"

const Header = () => {
    return (
        <View style={styles.headerBar}>
            <View style={styles.profile}>
                <View style={styles.headerBorder}>
                    <Image source={images.back} style={styles.headerIconSize} />
                </View>
                <View>
                    <Text style={styles.text}>Profile</Text>
                </View>
            </View>
            <View style={styles.headerBorder}>
                <Image source={images.menu} style={styles.headerIconSize} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    headerBorder: {
        height: 50,
        width: 50,
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 1,
        borderRadius: 50,
        borderColor: "grey",
    },
    headerIconSize: {
        height: "40%",
        width: "40%"
    },
    headerBar: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    profile: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    text: {
        fontSize: 20,
        fontWeight: "bold",
        paddingLeft: 13,
        color: "white"
    }
})

export default Header

