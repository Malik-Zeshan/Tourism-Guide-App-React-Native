import React, {useState} from 'react';
import { View, Text,TextInput, StyleSheet, ScrollView, FlatList, TouchableOpacity, Image } from 'react-native';

const DATA2 = [
    { 
        id: '1', 
        title: 'Quetta', 
        image: require('../../Images/prov/Balochistan/Quetta.jpg'), 
        Detail: 'Quetta is known for its scenic beauty and historical landmarks.', 
        detail2: `Quetta, the capital city of Balochistan, Pakistan, is celebrated for its stunning natural beauty and rich history. Nestled amidst majestic mountains, Quetta offers picturesque landscapes and pleasant weather. The city is home to historical landmarks such as the Quaid-e-Azam Residency and the stunning Hanna Lake, where visitors can enjoy boating and picnicking. Quetta is also famous for its delectable cuisine, including mouth-watering kebabs and traditional Balochi dishes.` 
    },
    { 
        id: '2', 
        title: 'Gwadar', 
        image: require('../../Images/prov/Balochistan/Gwadar.jpg'), 
        Detail: 'Gwadar is a developing port city famous for its deep-sea port.', 
        detail2: `Gwadar, located along the Arabian Sea in Balochistan, Pakistan, is a rapidly developing port city known for its strategic deep-sea port. The city's port is a gateway for international trade and is pivotal to the China-Pakistan Economic Corridor (CPEC). Gwadar boasts stunning beaches, including the popular Hammerhead Beach, where visitors can relax and enjoy breathtaking sunsets. The city is also renowned for its fishing industry and delicious seafood cuisine.` 
    },
    { 
        id: '3', 
        title: 'Ziarat', 
        image: require('../../Images/prov/Balochistan/Ziarat.jpg'), 
        Detail: 'Ziarat is a hill station and a popular tourist destination.', 
        detail2: `Ziarat is a serene hill station and a favorite retreat for tourists seeking tranquility and natural beauty. The town is famous for its juniper forests, which are among the oldest and largest in the world. Visitors to Ziarat can explore the iconic Quaid-e-Azam Residency, where Pakistan's founder Muhammad Ali Jinnah spent his last days. The region offers pleasant weather year-round, making it an ideal destination for hiking, sightseeing, and enjoying the cool mountain air.` 
    },
    { 
        id: '4', 
        title: 'Khuzdar', 
        image: require('../../Images/prov/Balochistan/Khuzdar.jpg'), 
        Detail: 'Khuzdar is known for its archaeological sites and cultural heritage.', 
        detail2: `Khuzdar, a historic city in Balochistan, Pakistan, is renowned for its rich archaeological sites and cultural heritage. The city is home to ancient relics, including the famed Kalat Kali Temple and the imposing Khuzdar Fort, which stands as a testament to its storied past. Khuzdar's rugged terrain and hospitable locals make it an intriguing destination for history enthusiasts and adventurers alike. The city also hosts vibrant cultural festivals that celebrate its diverse traditions and folklore.` 
    }
];


const DATA3 = [
    { 
        id: '1', 
        title: 'Pir Ghayb', 
        image: require('../../Images/prov/Balochistan/PirGhayb.jpg'), 
        Detail: 'Pir Ghayb offers serene landscapes and hnatural beauty.', 
        detail2: `Pir Ghayb, nestled in the tranquil valleys of Balochistan, Pakistan, is celebrated for its serene landscapes and untouched natural beauty. It is a haven for nature lovers, offering pristine rivers, lush meadows, and majestic mountains. The area is ideal for outdoor activities such as camping, trekking, and birdwatching, providing visitors with an escape into the lap of nature.` 
    },
    { 
        id: '2', 
        title: 'Moola Chatok', 
        image: require('../../Images/prov/Balochistan/Mola-Chotak.jpg'), 
        Detail: 'Moola Chatok is famous for its valleys and hiking trails.', 
        detail2: `Moola Chatok, located in Balochistan, Pakistan, is renowned for its breathtaking valleys and extensive network of hiking trails. The region's rugged terrain and picturesque landscapes attract adventure enthusiasts and nature photographers alike. Visitors can explore the enchanting Moola River and immerse themselves in the tranquility of the surrounding mountains.` 
    },
    { 
        id: '3', 
        title: 'Jhal Magsi Desert Rally', 
        image: require('../../Images/prov/Balochistan/JhalMagsiDesertRally.jpg'), 
        Detail: 'Jhal Magsi Desert Rally attracts adrenaline junkies and spectators alike.', 
        detail2: `Jhal Magsi Desert Rally, held annually in Balochistan, Pakistan, is a thrilling event that draws adrenaline junkies and motorsport enthusiasts from around the world. The rally features challenging desert tracks and showcases the skill of drivers navigating through the sandy terrain. Spectators flock to witness the excitement and enjoy cultural festivities that accompany this exhilarating sporting event.` 
    },
    { 
        id: '4', 
        title: 'Hingol National Park', 
        image: require('../../Images/prov/Balochistan/HingolNationalPark.webp'), 
        Detail: 'Hingol National Park is home to diverse wildlife and stunning landscapes.', 
        detail2: `Hingol National Park, located in Balochistan, Pakistan, is one of the largest national parks in the country, known for its diverse wildlife and breathtaking landscapes. The park is home to rare species such as the Balochistan bear and the endangered Indus river dolphin. Visitors can explore the park's rugged terrain, ancient rock formations, and pristine beaches, making it an ideal destination for wildlife enthusiasts and nature lovers.` 
    },
    { 
        id: '5', 
        title: 'Astola Island', 
        image: require('../../Images/prov/Balochistan/AstolaIsland.jpg'), 
        Detail: 'Astola Island is a secluded paradise with pristine beaches and marine life.', 
        detail2: `Astola Island, also known as 'Haft Talar', is Pakistan's largest offshore island located in the Arabian Sea. It is renowned for its crystal-clear waters, vibrant coral reefs, and diverse marine life, including sea turtles and dolphins. The island's secluded beaches offer a perfect escape for snorkeling, diving, and beachcombing. Astola Island is a paradise for nature enthusiasts seeking tranquility and natural beauty.` 
    },
    
];







const Balochistan = ({ navigation }) => {
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
                <Text style={styles.heading}>Welcome to Balochistan</Text>
                <Image source={require('../../Images/balochistan.png')} style={styles.mainpic} />
                <Text style={styles.description}>
                    Balochistan is Pakistan's largest province, known for its rugged terrain and rich cultural heritage. It is a land of diverse landscapes, from deserts to mountains, and hosts ancient civilizations and vibrant traditions.
                </Text>
            </View>
            <View>
                <TextInput
                    style={styles.search}
                    placeholder="🔎   What are you looking for?"
                    placeholderTextColor="grey"
                    value={searchInput}
                    onChangeText={handleSearch}
                />
            </View>
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
        fontSize: 29,
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

export default Balochistan;
