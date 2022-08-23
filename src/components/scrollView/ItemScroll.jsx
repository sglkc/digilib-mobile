import { Text, View } from "react-native";

export default function ItemScroll() {
    return(
        <View style={{flexDirection:"row", marginVertical:5}}>
            <View style={{backgroundColor:'blue', width:50, height:90, borderRadius:12}}>

            </View>
            <View style={{flexDirection:"column", justifyContent:"space-between", paddingHorizontal:9}}>
              <View>
                <Text style={{color:'green', fontWeight:'700'}}>anu</Text>
                <Text>anu</Text>
              </View>
              <View>
                <View style={{backgroundColor:'white', borderColor:'orange', borderWidth:2,borderRadius:9, paddingHorizontal:9}}>
                  <Text style={{color:'black'}}>Doa</Text>
                </View>
              </View>
            </View>
          </View>
    )
}