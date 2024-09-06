import React from 'react'

import { View, StyleSheet, Text, TouchableOpacity, ImageBackground} from 'react-native'

const First = ({navigation}) => {
  return (
    <ImageBackground style={styles.bg}
      source={require('../Images/3.jpg')}>
    <View style={styles.main}>
        
    <View>
      <Text style={styles.headerText} >
       Nature is Calling You!
      </Text>
      

      <TouchableOpacity  style={{alignItems: 'center', width:"70%",height:50, justifyContent: 'center', alignSelf:"center", backgroundColor:'white', marginTop:"58%", borderRadius: 50, borderColor:"#1763BD",borderWidth: 2}}      onPress={() => navigation.navigate('Home')}
>
             <Text style={{ fontSize: 17 ,color:"blue" , fontWeight:"semibold"}}>Explore Now</Text>
             
        </TouchableOpacity>

      <Text style={styles.secondText} >
              Developed by Malik Zeshan
        </Text>
         
    </View>
  </View>
</ImageBackground>
  )
}

export default First
const styles = StyleSheet.create({
  main: {
    padding: 20,
    height:"100%"
    
  },
  
  headerText: {
    color: '#1763BD',
    marginHorizontal: 7,
    fontSize: 76,
    fontWeight: 'bold',
    alignSelf:"center",
    textAlign:"center",
    letterSpacing: 2,
    paddingTop:40,
    


  },
  secondText: {
    color: '#1763BD',
    fontSize: 9,
    fontWeight: 'bold',
    marginTop:48,
    alignSelf:"center",
    backgroundColor:"lightgrey",
   
  },
  bg:{
    resizeMode:'contain',
  }

})





      {/* onPress={() => navigation.navigate('Start',{name:"payload"})} */}
