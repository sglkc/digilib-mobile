import { View,StyleSheet, Text } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
export default function BottomNavbar(){
    return (
        <View style={{
            backgroundColor: '#3cd70d',
            width: 280,
            height: 60,
            borderTopLeftRadius: 9,
            borderTopRightRadius: 9,
            flexDirection:'row',
            justifyContent:'space-evenly',
          }}>
            <View style={styleSheet.ItemContainer}>
                <Icon name="home" size={25} color="#FFFF" style={styleSheet.IconContainer}/>
                <Text style={styleSheet.textMenu}>Etalase</Text>
            </View>
            <View style={styleSheet.ItemContainer}>
                <Icon name="folder-open-o" size={25} color="#FFFF" style={styleSheet.IconContainer}/>
                <Text style={styleSheet.textMenu}>Jelajahi</Text>
            </View>
            
            <View style={styleSheet.ItemContainer}>
                <Icon name="bookmark-o" size={25} color="#FFFF" style={styleSheet.IconContainer}/>
                <Text style={styleSheet.textMenu}>Tandai</Text>
            </View>
        </View>
    )
}

const styleSheet = StyleSheet.create({
    ItemContainer:{
        alignItems:'center',
    },
    textMenu: {
      fontSize: 12,
      color: 'white',
      textAlign: 'center',
    },
    IconContainer:{
        width:30,
        height:30,
        marginTop:7,
    }
});
