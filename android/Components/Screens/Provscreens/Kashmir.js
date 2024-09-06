import React, {useState} from 'react';
import { View, Text,TextInput, StyleSheet, ScrollView, FlatList, TouchableOpacity, Image } from 'react-native';

const DATA2 = [
    { 
        id: '1', 
        title: 'Muzaffarabad', 
        image: require('../../Images/prov/kashmir/Muzaffarabad.webp'), 
        Detail: 'Muzaffarabad is the capital city of Azad Kashmir, known for its scenic beauty and historical significance.', 
        detail2: `Muzaffarabad is capital of Azad Kashmir, is renowned for its stunning natural beauty and historical importance. Nestled among lush green hills and riverbanks, the city offers breathtaking views and a serene environment. Visitors can explore historical sites such as the Red Fort and enjoy outdoor activities like hiking and fishing in the Neelum and Jhelum rivers. Muzaffarabad is a gateway to the enchanting valleys of Azad Kashmir, making it a must-visit destination for nature and history enthusiasts.` 
    },
    { 
        id: '2', 
        title: 'Neelum Valley', 
        image: require('../../Images/prov/kashmir/NeelumValley.jpg'), 
        Detail: 'Neelum Valley is famous for its lush greenery, rivers, and picturesque landscapes.', 
        detail2: `Neelum Valley, located in Azad Kashmir, is celebrated for its lush greenery, crystal-clear rivers, and stunning landscapes. The valley is a haven for nature lovers, offering scenic views, dense forests, and numerous hiking trails. Key attractions include the mesmerizing Neelum River, Sharda University ruins, and the picturesque Keran and Kel villages. Neelum Valley's tranquil environment and natural beauty make it an ideal destination for relaxation and adventure.` 
    },
    { 
        id: '3', 
        title: 'Rawalakot', 
        image: require('../../Images/prov/kashmir/Rawalakot.webp'), 
        Detail: 'Rawalakot is known for its pleasant weather and beautiful surroundings, making it a popular tourist destination.', 
        detail2: `Rawalakot, also known as the "Pearl Valley," is a popular tourist destination in Azad Kashmir. The town is known for its pleasant weather, scenic beauty, and lush green surroundings. Visitors can enjoy stunning views of the Banjosa Lake, Toli Pir, and Poonch River. Rawalakot offers a peaceful retreat with opportunities for hiking, boating, and exploring the vibrant local culture.` 
    },
    { 
        id: '4', 
        title: 'Banjosa Lake', 
        image: require('../../Images/prov/kashmir/BanjosaLake.jpeg'), 
        Detail: 'Banjosa Lake is a serene artificial lake surrounded by pine forests and lush greenery.', 
        detail2: `Banjosa Lake, located near Rawalakot in Azad Kashmir, is an artificial lake surrounded by pine forests and lush greenery. The lake's tranquil environment and picturesque scenery make it a popular spot for picnics and boating. Visitors can enjoy leisurely walks along the lakeshore, rent pedal boats, and experience the serene beauty of the surrounding landscape. Banjosa Lake is a perfect getaway for nature lovers seeking peace and relaxation.` 
    },
    { 
        id: '5', 
        title: 'Toli Pir', 
        image: require('../../Images/prov/kashmir/ToliPir.webp'), 
        Detail: 'Toli Pir is a hilltop area known for its breathtaking views and trekking trails.', 
        detail2: `Toli Pir, situated near Rawalakot in Azad Kashmir, is a hilltop area known for its breathtaking views and trekking trails. The area offers panoramic vistas of the surrounding valleys and mountains, making it a popular destination for hikers and nature enthusiasts. Visitors can trek through lush meadows, enjoy the cool mountain air, and witness stunning sunrises and sunsets from Toli Pir's vantage points. It's an ideal spot for outdoor activities and experiencing the natural beauty of Azad Kashmir.` 
    }
];

const DATA3 = [
    { 
        id: '6', 
        title: 'Leepa Valley', 
        image: require('../../Images/prov/kashmir/LeepaValley.jpg'), 
        Detail: 'Leepa Valley is known for its picturesque landscapes, traditional wooden houses, and apple orchards.', 
        detail2: `Leepa Valley, located in Azad Kashmir, is known for its picturesque landscapes, traditional wooden houses, and apple orchards. The valley is a serene destination with terraced fields, gushing streams, and dense pine forests. Visitors can explore the charming villages of Leepa, Reshian, and Dao Khan, and enjoy the valley's rich cultural heritage. Leepa Valley's natural beauty and tranquil environment make it a perfect destination for those looking to escape the hustle and bustle of city life.` 
    },
    { 
        id: '7', 
        title: 'Poonch', 
        image: require('../../Images/prov/kashmir/Poonch.jpg'), 
        Detail: 'Poonch is a historic town in Azad Kashmir, known for its forts and cultural heritage.', 
        detail2: `Poonch, a historic town in Azad Kashmir, is renowned for its rich cultural heritage and ancient forts. The town's notable landmarks include the Poonch Fort and the AJK University campus. Poonch offers a blend of natural beauty and historical significance, with lush green fields, rolling hills, and cultural festivals that attract visitors throughout the year. It's a perfect destination for those interested in history, culture, and nature.` 
    },
    { 
        id: '8', 
        title: 'Pir Chinasi', 
        image: require('../../Images/prov/kashmir/PirChinasi.jpg'), 
        Detail: 'Pir Chinasi is a high mountain peak known for its scenic views and spiritual significance.', 
        detail2: `Pir Chinasi, located near Muzaffarabad in Azad Kashmir, is a high mountain peak known for its scenic views and spiritual significance. The peak offers panoramic vistas of the surrounding valleys and mountains, making it a popular spot for nature enthusiasts and photographers. Visitors can trek to the top, explore the shrine of Saint Shah Hussain Bukhari, and enjoy the serene environment. Pir Chinasi is an ideal destination for trekking, spiritual retreats, and experiencing the natural beauty of Azad Kashmir.` 
    },
    { 
        id: '9', 
        title: 'Ratti Gali Lake', 
        image: require('../../Images/prov/kashmir/RattiGaliLake.jpg'), 
        Detail: 'Ratti Gali Lake is an alpine glacial lake surrounded by snow-capped peaks and lush meadows.', 
        detail2: `Ratti Gali Lake, situated in Neelum Valley of Azad Kashmir, is an alpine glacial lake surrounded by snow-capped peaks and lush meadows. The lake's crystal-clear waters and breathtaking scenery make it a popular destination for trekkers and nature lovers. Visitors can camp by the lakeside, explore the surrounding trails, and enjoy the tranquil beauty of the high-altitude environment. Ratti Gali Lake offers a perfect blend of adventure and natural splendor.` 
    },
   
];


const Kashmir = ({ navigation }) => {
    const [searchInput, setSearchInput] = useState('');
    const [filteredData, setFilteredData] = useState(DATA2);
    const [filteredData1, setFilteredData1] = useState(DATA3);

    const handleSearch = (text) => {
        setSearchInput(text);

        if (text) {
            const newData2 = DATA2.filter(item => {
                const itemData = item.title ? item.title.toUpperCase() : ''.toUpperCase();
                const textData = text.toUpperCase();
                return itemData.indexOf(textData) > -1;
            });
            setFilteredData(newData2);

            const newData3 = DATA3.filter(item => {
                const itemData = item.title ? item.title.toUpperCase() : ''.toUpperCase();
                const textData = text.toUpperCase();
                return itemData.indexOf(textData) > -1;
            });
            setFilteredData1(newData3);
        } else {
            setFilteredData(DATA2);
            setFilteredData1(DATA3);
        }
    };
    return (
        <ScrollView style={styles.main}>
            <View style={styles.container}>
                <Text style={styles.heading}>Welcome to Kashmir</Text>
                <Image source={require('../../Images/kashmir.jpg')} style={styles.mainpic} />
                <Text style={styles.description}>
                    Kashmir is known for its breathtaking natural beauty, including mountains, rivers, and valleys. It is a region rich in culture and history, attracting tourists from around the world.
                </Text>
            </View>
            <TextInput
                    style={styles.search}
                    placeholder="🔎   What are you looking for?"
                    placeholderTextColor="grey"
                    value={searchInput}
                    onChangeText={handleSearch}
                />
            <Text style={styles.sectionTitle}>Popular Destinations</Text>
            <FlatList
               data={filteredData}
               renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigation.navigate('Start', {
                        itemTitle: item.title,
                        itemImage: item.image,
                        itemDetail: item.detail2
                    })}>
                        <View style={[styles.FLitemConatiner2, { borderWidth: 0.5, borderColor: "white", marginBottom: 10 }]}>
                            <Image source={item.image} style={styles.FLimage2} />
                            <View style={styles.textOverlay}>
                                <Text style={styles.overlayText}>{item.title}</Text>
                                <Text style={styles.overlayDetail}>{item.Detail}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                )}
                keyExtractor={item => item.id}
                horizontal
                contentContainerStyle={styles.FLlistContainer}
            />

            <Text style={styles.sectionTitle}>More to Explore</Text>
            <FlatList
               data={filteredData1}
               renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigation.navigate('Start', {
                        itemTitle: item.title,
                        itemImage: item.image,
                        itemDetail: item.detail2
                    })}>
                        <View style={[styles.FLitemConatiner2, { borderWidth: 0.5, borderColor: "white", marginBottom: 25 }]}>
                            <Image source={item.image} style={styles.FLimage2} />
                            <View style={styles.textOverlay}>
                                <Text style={styles.overlayText}>{item.title}</Text>
                                <Text style={styles.overlayDetail}>{item.Detail}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                )}
                keyExtractor={item => item.id}
                horizontal
                contentContainerStyle={[styles.FLlistContainer, { paddingTop: 6 }]}
            />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    main: {
        paddingHorizontal: 10,
        height: "100%",
        paddingTop: 20,
        backgroundColor: "#FAFBFF",
    },
    container: {
        paddingHorizontal: 10,
        marginBottom: 20,
    },
    heading: {
        fontSize: 31,
        fontWeight: 'bold',
        color: '#1763BD',
        textAlign: 'left',
        marginBottom: 10,
    },
    mainpic: {
        resizeMode: 'contain',
        width: "100%",
        height: 200,
        borderRadius: 10,
        backgroundColor: "white",
        marginBottom: 15,
    },
    search: {
        borderRadius: 20,
        paddingHorizontal: 20,
        marginLeft: 10,
        color: "black",
        borderColor: "#1763BD",
        borderWidth: 2,
        marginTop: 30,
        width: "90%"
    },
    description: {
        fontSize: 16,
        color: '#333',
        textAlign: 'left',
    },
    sectionTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        color: 'black',
        marginTop: 20,
        marginBottom: 10,
        textAlign: 'left',
        paddingLeft: 10,
    },
    FLitemConatiner2: {
        alignItems: 'center',
        width: 160,
        height: 280,
        backgroundColor: 'white',
        borderRadius: 10,
        overflow: 'hidden',
        marginHorizontal: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
    },
    FLimage2: {
        resizeMode: "cover",
        width: '100%',
        height: '100%',
    },
    textOverlay: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        padding: 10,
        alignItems: 'center',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
    },
    overlayText: {
        color: 'white',
        fontSize: 20,   
        fontWeight: "bold",
    },
    overlayDetail: {
        color: 'lightgrey',
        fontSize: 13,
        paddingTop:5,
        fontWeight: "600",
        
    },
    FLlistContainer: {
        paddingTop: 10,
        paddingBottom: 10,
    },
});

export default Kashmir;
