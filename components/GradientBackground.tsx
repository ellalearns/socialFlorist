import React from "react";
import { ImageBackground, View } from "react-native";
import images from "@/constants/images";

interface GradientBackgroundProps {
    children: React.ReactNode
}

const GradientBackground: React.FC<GradientBackgroundProps> = ({ children }) => {
    return (
        <ImageBackground source={images.gradient} style={{
            flex: 1,
            height: "100%",
            width: "100%"
        }}>
            {children}
        </ImageBackground>
    )
}

export default GradientBackground
