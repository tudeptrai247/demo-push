import { Ionicons } from "@expo/vector-icons";
import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function login4(){
    return(
    <ScrollView className="flex-1 bg-white">
        <View className="flex-1 items-center px-10">
            <View className="mt-20">
               <Image
               source={require("../../assets/images/Screenshot 2025-11-10 134337.png")}
               className=""
               />
            </View>
            <Text className="text-2xl mt-8 font-bold text-blue-900">FIS INSIGHT PORTAL</Text>
            <View className="flex-row w-24 h-1 mt-2">
                <View className="w-8 h-full bg-blue-800" />
                <View className="w-8 h-full bg-orange-500 mx-1" />
                <View className="w-8 h-full bg-green-500" />
            </View>

            <Text className="text-xl font-bold text-orange-400 mt-6">ĐĂNG NHẬP HỆ THỐNG</Text>

            <View className="flex-row w-full h-12 bg-gray-200 mt-2 items-center px-3">
                <Ionicons
                 name="person-outline"
                size={20}
                />
                <TextInput
                placeholder="Tài Khoản"
                className="text-center flex-1"
                />
            </View>

            <View className="flex-row w-full h-12 bg-gray-200 mt-2 items-center px-3 relative">
                <Ionicons
                 name="lock-closed-outline"
                size={20}
                />
                <TextInput
                placeholder="Mật Khẩu"
                className="text-center flex-1"
                />
                <View className="absolute right-4">
                    <Ionicons 
                    name="eye-off-outline"
                />
                </View>
            </View>

            <View className="flex-row items-center w-full mt-3">
                <Ionicons 
                 name="radio-button-off"
                />
                <Text
                className="w-24 ml-1 italic text-orange-400"
                >Ghi Nhớ Đăng Nhập</Text>
            </View>

            <View className="w-full h-10 bg-orange-300 rounded mt-2 items-center justify-center">
                <TouchableOpacity className=" ">
                    <Text className="text-white font-bold">Đăng Nhập</Text>
                </TouchableOpacity>
            </View>

            <View className="w-full h-10 bg-orange-300 rounded mt-2 items-center justify-center">
                <TouchableOpacity className=" ">
                    <Text className="text-white font-bold">Đăng Nhập Bằng Azul</Text>
                </TouchableOpacity>
            </View>

            <Image
            source={require("../../assets/images/Screenshot 2025-11-10 144649.png")}
            className="mt-2"
            />

            <Text className="text-gray-400 text-lg ">Coppy Right</Text>
        </View>
    </ScrollView>
    )
}