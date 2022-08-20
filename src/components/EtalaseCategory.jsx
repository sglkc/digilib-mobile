import { ScrollView, Text, StyleSheet, StatusBar, View } from "react-native";

const Lists = [
    {name: 'Semua'},
    {name: 'Audio'},
    {name: 'Buku'},
    {name: 'Video'},
    {name: 'Video'},
]

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
        <View style={{marginTop:1,flexDirection:'row'}}>
            {Lists.map((data, index)=>{
                return(
                <Text style={[styles.gridNav, styles.underline]}>
                    {data.name}
                </Text>
                )
            })}
        </View>
    </ScrollView>
)}

const styles = StyleSheet.create({
    gridNav: {
        fontWeight:'700', 
        color: 'grey', 
        marginHorizontal: 20
    },
    underline: {textDecorationLine: 'underline'}
})