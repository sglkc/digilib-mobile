import { ScrollView, Text, StyleSheet, StatusBar, View } from "react-native";
export default function EtalaseCategory(){
    return(
    <ScrollView
        horizontal={true}
        style={{
            marginTop: StatusBar.currentHeight+190, 
            width:'100%', 
            height:80, 
            backgroundColor:'white',        
            borderTopLeftRadius: 9,
            borderTopRightRadius: 9,    
            padding:9
        }}
    >
        <View style={{marginTop:5}}>
            <Text style={{ fontWeight:'700'}}>
                ASssaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            </Text>
        </View>
    </ScrollView>
)}