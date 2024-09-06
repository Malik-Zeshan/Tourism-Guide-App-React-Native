import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const ItemDet = ({ route }) => {
    const { itemTitle, itemImage, itemDetail } = route.params;

    return (
        <View style={styles.container}>
            <View>
            <Image source={itemImage} style={styles.image}  />
            <View style={styles.content}>
                <Text style={styles.title}>{itemTitle}</Text>
                <Text style={styles.detail}>{itemDetail}</Text>
                {/* Add additional content as needed */}
            </View>
            <View>
            <TouchableOpacity style={styles.button} >
                    <Text style={styles.buttonText}>Explore More</Text>
                </TouchableOpacity>
            </View>
            </View>
        </View>
    );
}



const styles = StyleSheet.create({
    container: {
        // flex: 1,
        backgroundColor: '#FAFBFF', // Light background color
    },
    image: {
        resizeMode: "cover",
        width: '100%',
        height: '90%',
    },
    content: {
        position: 'absolute',
        bottom: -180,
        left: 0,
        right: 0,
        height:"70%",
        backgroundColor:"white",
        // backgroundColor: 'rgba(0, 0, 0, 0.5)',
        padding: 10,
        alignItems: 'center',
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        color:"#1763BD",
        textAlign:'center'
    },
    detail: {
        color: 'black',
        fontSize: 14,
        paddingTop:5,
        fontWeight: "600",
        paddingLeft:5,
       
        
    },
    button: {
        backgroundColor: '#1763BD',
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 10,
        width:"85%",
        alignSelf:"center",
        marginTop:20,
        shadowColor: '#1763BD',
        shadowOffset: { width: 10, height: 4 },
        shadowOpacity: 0.5,
        shadowRadius: 4,
        elevation: 15,
        
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        
    },
});

export default ItemDet;
