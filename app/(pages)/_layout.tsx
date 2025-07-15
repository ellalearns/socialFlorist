import { Tabs } from "expo-router";
import { Text, View } from "react-native";

export default function _Layout() {
    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                // tabBarBackground: () => null,
                tabBarStyle: {
                    backgroundColor: "transparent",
                    position: "absolute",
                    elevation: 0,
                    borderTopWidth: 0,
                    height: 100,
                    opacity: 10
                },
                tabBarShowLabel: false
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
    return (
        <View>
            <Text>{title}</Text>
        </View>
    )
}

