import { Tabs } from "expo-router";
import { forwardRef } from "react";
import { Pressable, Text, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";

export default function _Layout() {
    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: "transparent",
                    position: "absolute",
                    elevation: 0,
                    borderTopWidth: 0,
                    height: 50,
                    opacity: 10,
                    bottom: 30,
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                    alignContent: "center",
                    paddingLeft: 16,
                    paddingRight: 16
                },
                tabBarShowLabel: false,
                // tabBarButton: (props) => <NoRipple {...props} />
            }}

        >
            <Tabs.Screen
                name="index"
                options={{
                    title: "Hello",
                    tabBarIcon: ({ focused }) => (
                        <TabItem
                            title={"Hello"}
                            focused={focused}
                        />
                    )
                }}
            />
            <Tabs.Screen
                name="stats"
                options={{
                    title: "Stats",
                    tabBarIcon: ({ focused }) => (
                        <TabItem
                            title={"Stats"}
                            focused={focused}
                        />
                    )
                }}
            />
            <Tabs.Screen
                name="photos"
                options={{
                    title: "Photos",
                    tabBarIcon: ({ focused }) => (
                        <TabItem
                            title={"Photos"}
                            focused={focused}
                        />
                    )
                }}
            />
            <Tabs.Screen
                name="about"
                options={{
                    title: "About",
                    tabBarIcon: ({ focused }) => (
                        <TabItem
                            title={"About"}
                            focused={focused}
                        />
                    )
                }}
            />
        </Tabs>
    )
}

const TabItem = ({ title, focused }: any) => {
    const background = focused ? "white" : ""

    return (
        // <Pressable style={{
            // backgroundColor: "yellow"
        // }}>
        <View style={{
            backgroundColor: background,
            width: 80,
            height: 50,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 30,
            alignSelf: "center"
        }}>
            <Text style={{
                fontSize: 25,
                alignSelf: "center"
            }}>{title}</Text>
        </View>
        // </Pressable>
    )
}

const NoRipple = forwardRef<any, any>(({ children, ...props }, ref) => {
    return (
        <TouchableWithoutFeedback ref={ref} {...props}>
            {children}
        </TouchableWithoutFeedback>
    )
})
