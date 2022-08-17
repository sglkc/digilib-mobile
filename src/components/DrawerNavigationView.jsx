import { Image, Text, View, StyleSheet, Button, TouchableHighlight } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import Octicons from 'react-native-vector-icons/Octicons';

const thisfumc = [
    {
        icon: "person-outline",
        text: "Informasi Akun",
        function: ()=>console.log('nicee')
    },
    {
        icon: "notifications-outline",
        text: "Notifikasi",
        function: ()=>console.log('nicee')
    },
    {
        icon: "history",
        text: "Riwayat",
        octicons: true,
        function: ()=>console.log('nicee')
    },
    {
        icon:"DIVIDER"
    },
    {
        icon: "chatbubble-ellipses-outline",
        text: "Umpan Balik",
        function: ()=>console.log('nicee')
    },
    {
        icon: "information-circle-outline",
        text: "Tentang Aplikasi",
        function: ()=>console.log('nicee')
    },
]

export default function DrawerContent({Keluar}){
    return(
    <View style={{paddingTop: 30, flex:1}}>
        <View>
            <Image 
                style={{width:150, height:150, resizeMode:'contain', alignSelf:'center'}}
                source={require('@/assets/logo.png')}/>
            <View style={{paddingLeft:8}}>
                <Text style={{fontWeight:'800'}}>ANUU</Text>
                <Text style={{fontSize:10}}>ANUU</Text>
            </View>
            <View
                style={style.LineDivider}
            />
            <View style={{paddingLeft:10}}>
            {thisfumc.map((e, index)=>{
                if (e.icon=='DIVIDER') {
                    return(
                        <View
                            style={style.LineDivider}
                        />
                    )
                }else{
                    return(
                        <TouchableHighlight underlayColor="#DDDDDD" style={{borderRadius:9}} onPress={e.function}>
                            <View style={{flexDirection:"row", margin:5 }}>
                                {e.octicons ?  <Octicons style={style.IconContainer} name={e.icon} size={20} color="black"></Octicons> 
                                    :<Icon name={e.icon} size={25} color="black"></Icon>}
                                <Text style={style.fontMedBold} >{e.text}</Text>
                            </View>
                        </TouchableHighlight>
                    )
                }
               })}
            </View>
            
            <View style={{alignItems:'center', marginTop:25}}>
                <TouchableHighlight underlayColor="#DDDDDD" style={{borderRadius:9, width:'100%', height:40,alignItems:'center', flex:1}} onPress={Keluar}>
                    <View style={{width:'70%', height:25, backgroundColor:'#3cd70d', borderRadius:15, justifyContent:'center'}}>
                        <Text style={{textAlign:'center',color:'white', alignSelf:'center'}}>Keluar</Text>
                    </View>
                </TouchableHighlight>
            </View>
        </View>
    </View>)
}

const style = StyleSheet.create({
    IconContainer:{
        marginLeft:2
    },
    fontMedBold:{
        fontWeight:'700',
        marginLeft:5
    },
    LineDivider:{
        marginTop:9,
        marginBottom:9,
        borderBottomColor: 'grey',
        borderBottomWidth: StyleSheet.hairlineWidth,
        marginLeft:-10
    }
})
