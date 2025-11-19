import { Ionicons } from "@expo/vector-icons";
import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function login3(){
    return(
        <ScrollView className="flex-1 bg white">
            <View className="flex-1 items-center px-12">
                <View className="w-36 h-24 items-center mt-16">
                    <Image 
                    source={require("../../assets/images/Screenshot 2025-11-10 134337.png")}
                    className="w-full h-full object-container"
                    />
                </View>
                  <Text className="text-2xl font-bold mt-8 text-blue-900">FIS INSIGHT PORTAL</Text>
                  <View className="flex-row w-24 h-1 mt-2">
                        <View className="h-full w-8 bg-blue-600 " />
                       <View className="h-full w-8 bg-orange-500 mx-1" />
                        <View className="h-full w-8 bg-green-600 " />
                  </View>
                  <Text className="mt-6 text-xl font-bold text-orange-400">ĐĂNG NHẬP HỆ THỐNG</Text>

                <View className="w-full h-10 mt-4 ">
                  <View className="flex-row items-center w-full h-full bg-gray-200 px-4">
                    <Ionicons 
                    name="person-outline"
                    size={20}
                    color="gray"
                    />
                    <TextInput 
                    placeholder="Tài Khoản"
                    className="flex-1 text-center text-lg"
                    placeholderTextColor="#090085ff"
                    />
                  </View>
                </View>  

                <View className="w-full h-10 mt-2 ">
                  <View className="flex-row items-center w-full h-full bg-gray-200 px-4 relative">
                    <Ionicons 
                    name="person-outline"
                    size={20}
                    color="gray"
                    />
                    <TextInput 
                    placeholder="Mật Khẩu"
                    className="flex-1 text-center text-lg"
                    placeholderTextColor="#090085ff"
                    />
                    <View className="absolute right-4">
                        <Ionicons 
                        name="eye-off-outline"
                        size={20}
                        />
                    </View>
                  </View>
                </View>

                <View className="flex-row items-center w-full mt-2 ">
                    <Ionicons name="radio-button-off"
                    size={20}
                    />
                    <Text className="w-24 italic ml-2 text-orange-500 ">Ghi nhớ đăng nhập</Text>
                </View> 

                <View className="w-full mt-2 ">
                    <TouchableOpacity className="bg-orange-400 h-11 rounded items-center justify-center">
                        <Text className="text-lg text-white font-bold">Đăng Nhập</Text>
                    </TouchableOpacity>
                </View>
                <View className="w-full mt-2 ">
                    <TouchableOpacity className="bg-orange-400 h-11 rounded items-center justify-center">
                        <Text className="text-lg text-white font-bold">Đăng Nhập</Text>
                    </TouchableOpacity>
                </View>

                    <Image 
                    source={require("../../assets/images/Screenshot 2025-11-10 144649.png")}
                    className="mt-2 "
                    />
                
                <Text className="text-gray-400 text-base mt-2">Coppy Right @ 2019 FPT IS</Text>
            </View>
        </ScrollView>
    )
}