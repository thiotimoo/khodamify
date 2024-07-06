"use client";
import Starfield from "@/components/ui/starfield";
import { useTheme } from "next-themes";

const StarfieldBackground = () => {
    const { theme } = useTheme();
    return (
        <div className="absolute top-0 bottom-0 w-full rounded-b-2xl -mt-20 -z-20">
            <div
                className="absolute top-0 bottom-0 w-full -z-10"
                style={{
                    background:
                        "linear-gradient(99.9deg, rgba(27,24,0,0.2) 21.2%, rgba(50,4,89,0.2) 84.8%)",
                }}
            ></div>
            <Starfield
                starCount={1000}
                starColor={theme === "dark" ? [255, 255, 255] : [0, 0, 0]}
                speedFactor={0.05}
                backgroundColor={theme === "dark" ? "black" : "white"}
            />
        </div>
    );
};

export default StarfieldBackground;
