import { Ionicons } from "@expo/vector-icons";
import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function login2(){
    return(
        <ScrollView className="flex-1 bg-white">
            <View className="flex-1 items-center mt-16">
                <Image
                source={require("../../assets/images/Screenshot 2025-11-10 134337.png")}
                className="w-28 h-20"
                />
            <Text className="text-2xl mt-2 font-bold text-blue-900">
                FIS INSIGHT PORTAL
            </Text>
            <View className="w-24 h-1 flex-row mt-2">
                <View className="bg-blue-500 w-8 h-full " />
                <View className="bg-orange-500 w-8 h-full mx-1"  />
                <View className="bg-green-500 w-8 h-ful" />
            </View>
            <Text className="mt-8 text-xl font-bold text-orange-400">ĐĂNG NHẬP HỆ THỐNG</Text>

            <View className="w-full px-8 mt-2">
                <View className="flex-row bg-gray-300 rounded-lg items-center w-full mb-3 px-4">
                    <Ionicons 
                    name="person-outline"
                    size={20}
                    className="text-gray-300"
                    />
                    <TextInput 
                    placeholder="Tài Khoản"
                    className="text-center flex-1"
                    />
                </View>

                 <View className="flex-row bg-gray-300 rounded-lg items-center w-full mb-3 px-3 relative">
                    <Ionicons 
                    name="lock-closed-outline"
                    size={20}
                    className="text-gray-300"
                    />
                    <TextInput 
                    placeholder="Mật Khẩu"
                    className="text-center flex-1"
                    />
                    <View className="absolute right-4">
                        <Ionicons 
                        name="eye-off-outline"
                        size={20}
                        className="text-gray-300"
                        />
                    </View>
                </View>
            </View>

            <View className=" w-full ml-24 flex-row items-center">
                <Ionicons 
                name="radio-button-off"
                />
                <Text
                className="w-24 ml-2 font text-orange-300 italic"
                >Ghi nhớ đăng nhập</Text>
            </View>

            <View className="w-full mt-4 px-6  ">
                <TouchableOpacity className="bg-orange-400 h-8 rounded-lg flex items-center justify-center">
                    <Text
                    className="text-white"
                    >Đăng Nhập</Text>
                </TouchableOpacity>
            </View>

            <View className="w-full mt-1 px-6  ">
                <TouchableOpacity className="bg-orange-400 h-8 rounded-lg flex items-center justify-center">
                    <Text
                    className="text-white"
                    >Đăng Nhập bằng azul</Text>
                </TouchableOpacity>
            </View>

            <Image 
            className="mt-2"
            source={require("../../assets/images/Screenshot 2025-11-10 144649.png")}
            />

            <Text
            className="mt-2 text-gray-300"
            >Coppy right</Text>
            </View>
        </ScrollView>
    )
}