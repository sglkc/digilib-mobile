import { View,Text } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import SelectDropdown from 'react-native-select-dropdown'
const countries = ["Terbaru", "Terlama", "Trending", "Teratas"]
export default function(){
    return(
        <View style={{flexDirection:'row', backgroundColor:'white', width:'100%', justifyContent:"flex-start", paddingLeft:9, height:'15%'}}>
            <View style={{ marginVertical: 4, flexDirection:'row'}}>
                <Text style={{fontWeight:'700', color:'grey'}}>Urutkan :</Text>
                
                <Icon name="list" size={20} style={{marginHorizontal:5}}></Icon>
            </View>
                <SelectDropdown
                    data={countries}
                    onSelect={(selectedItem, index) => {
                        console.log(selectedItem, index)
                    }}
                    buttonTextAfterSelection={(selectedItem, index) => {
                        // text represented after item is selected
                        // if data array is an array of objects then return selectedItem.property to render after item is selected
                        return selectedItem
                    }}
                    rowTextForSelection={(item, index) => {
                        // text represented for each item in dropdown
                        // if data array is an array of objects then return item.property to represent item in dropdown
                        return item
                    }}
                    buttonStyle={{borderRadius: 12, width: 120, height:30, }}
                    buttonTextStyle={{fontWeight:'700', }}
                    defaultValue={"Terbaru"}
                />
        </View>
    )
}