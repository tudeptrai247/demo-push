import { Button, Image, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Ionicons } from '@expo/vector-icons';

export default function login(){
    return(
        <ScrollView className="flex-1 bg-white">
        <View className="flex items-center mt-20">
            <Image
            source={require("../../assets/images/Screenshot 2025-11-10 134337.png")}
            className="w-30 h-20 object-cover"
            />
            <Text className="mt-5 text-2xl font-bold text-blue-900">FIS INSIGHT PORTAL</Text>
            <View className="w-24 h-3 flex-row mt-2">
                <View className="w-8 h-1.5 bg-blue-500 mr-1"/>
                <View className="w-8 h-1.5 bg-orange-500 mr-1"/>
                <View className="w-8 h-1.5 bg-green-500"/>
            </View>
            <Text className="mt-5 text-xl font-bold text-orange-400">ĐĂNG NHẬP HỆ THỐNG</Text>

            <View className="flex-col items-center w-full px-6 mt-2 ">
                <View className="flex-row mb-4 px-4 w-full h-12 items-center rounded-lg bg-gray-200">
                <Ionicons 
                name="person-outline"
                size={20}
                className="text-gray-300 mr-3"
                />
                <TextInput
                placeholder="Tài Khoản"
                className="text-lg text-center flex-1"
                placeholderTextColor="#3b00ddff"
                 />
                 </View>
                
                <View className="flex-row mb-4 px-4 w-full h-12 items-center rounded-lg bg-gray-200 relative">
                <Ionicons 
                name="lock-closed-outline"
                size={20}
                className="text-gray-300 mr-3"
                />
                <TextInput
                placeholder="Mật Khẩu"
                className="text-lg text-center flex-1"
                placeholderTextColor="#3b00ddff"
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

            <View className="w-full ml-20 ">
                <TouchableOpacity
                className="flex-row items-center">
                <Ionicons 
                name="radio-button-off"
                />
                <Text className="text-orange-600 ml-1 w-24 italic">Ghi nhớ đăng nhập</Text>
                </TouchableOpacity>
            </View>
            <View className="w-full px-8 mt-2">
                <TouchableOpacity
                className="bg-orange-400 w-full h-10 rounded items-center justify-center flex" 
                >
                    <Text className="text-white text-lg font-bold">ĐĂNG NHẬP</Text>
                </TouchableOpacity>
           </View>

            <View className="w-full px-8 mt-2">
                <TouchableOpacity
                className="bg-orange-400 w-full h-10 rounded items-center justify-center flex" 
                >
                    <Text className="text-white text-lg font-bold">ĐĂNG NHẬP BẰNG AZUL</Text>
                </TouchableOpacity>
           </View>

           <View className="mt-2">
            <Image 
            source={require("../../assets/images/Screenshot 2025-11-10 144649.png")}
            />
           </View>

           <View className="mt-4">
                <Text className="text-gray-300 text-lg"> Coppy Right</Text>
           </View>
        </View>
        </ScrollView>
    )
}