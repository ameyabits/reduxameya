import React from 'react';
import {View,Text,StyleSheet,Dimensions} from 'react-native';

const Header=()=>{
    return(
        <View style={styles.container} ><Text style={styles.textstyle}>redux</Text></View>
    );
}
export default Header;

const styles=StyleSheet.create({
    container:{
        width:Dimensions.get('window').width,
        height:50,
        backgroundColor:'red',
        alignItems:'center',
        padding :12,
    },
    textstyle:{
        color:'white',
        fontWeight:'bold'
    }
});