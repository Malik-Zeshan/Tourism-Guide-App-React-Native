import React, {useState} from 'react';
import { View, Text,TextInput, StyleSheet, ScrollView, FlatList, TouchableOpacity, Image } from 'react-native';

const DATA2 = [
    { 
        id: '1', 
        title: 'Lahore', 
        image: require('../../Images/prov/punjab/Lahore.webp'), 
        Detail: 'Lahore is known for its rich culture and lively atmosphere.', 
        detail2: `Lahore, the cultural capital of Pakistan, is famous for its vibrant bazaars, historic landmarks such as the Lahore Fort and Badshahi Mosque, and culinary delights like Lahori kebabs and traditional sweets. The city boasts a rich cultural heritage with festivals like Basant and historical sites that attract tourists from around the globe. Lahore's bustling streets, bustling markets, and warm hospitality make it a must-visit destination in Punjab.` 
    },
    { 
        id: '2', 
        title: 'Multan', 
        image: require('../../Images/prov/punjab/Multan.jpg'), 
        Detail: 'Multan is famous for its Sufi shrines and historical significance.', 
        detail2: `Multan, the "City of Saints," is renowned for its centuries-old Sufi shrines, including the shrine of Bahauddin Zakariya, which draws pilgrims and visitors seeking spiritual solace. The city is steeped in history, with ancient forts, vibrant bazaars selling handicrafts and textiles, and traditional Multani cuisine. Multan's warm climate, bustling markets, and hospitable people reflect its rich cultural heritage and historical importance in South Asia.` 
    },
    { 
        id: '3', 
        title: 'Faisalabad', 
        image: require('../../Images/prov/punjab/Faisalabad.jpg'), 
        Detail: 'Faisalabad is a major industrial city known for its textiles.', 
        detail2: `Faisalabad, the "Manchester of Pakistan," is renowned for its textile industry, which drives the city's economy and exports worldwide. The city's industrial growth is complemented by its cultural diversity, with bustling markets, educational institutions, and a thriving arts scene. Faisalabad's rich history, modern infrastructure, and dynamic business environment make it a key player in Pakistan's economic landscape.` 
    },
    { 
        id: '4', 
        title: 'Shalimar Gardens', 
        image: require('../../Images/prov/punjab/ShalimarGardensc.jpg'), 
        Detail: 'Shalimar Gardens in Lahore is a UNESCO World Heritage site known for its Mughal-era garden design and architecture.',
        detail2: `Shalimar Gardens, a UNESCO World Heritage site in Lahore, is a magnificent example of Mughal-era garden design and architecture. The gardens feature terraced lawns, beautiful fountains, and intricately designed pavilions that reflect the grandeur of Mughal landscaping. Visitors are captivated by the serene ambiance, historical significance, and aesthetic beauty of this iconic landmark in Punjab.` 
    },
    { 
        id: '5', 
        title: 'Sheikhupura Fort', 
        image: require('../../Images/prov/punjab/SheikhupuraFort.jpg'), 
        Detail: 'Sheikhupura Fort, located near Lahore, is an ancient fort known for its historical significance and architectural beauty.',
        detail2: `Sheikhupura Fort, located near Lahore, is an ancient fort that stands as a testament to the region's rich history and architectural grandeur. The fort's impressive structure, historical relevance, and scenic surroundings make it a notable site for history enthusiasts and tourists. Its majestic presence continues to draw visitors interested in exploring Punjab's cultural and historical heritage.` 
    }
];

const DATA3 = [
    { 
        id: '1', 
        title: 'Wagah Border', 
        image: require('../../Images/prov/punjab/WagahBorder.jpg'), 
        Detail: 'Wagah Border is a ceremonial border between Pakistan and India, known for the Wagah-Attari border ceremony.',
        detail2: `Wagah Border, the ceremonial border between Pakistan and India, is famous for the daily Wagah-Attari border ceremony. This vibrant event, marked by patriotic displays and elaborate marches, attracts large crowds from both countries. The ceremony symbolizes the historical significance and ongoing relationship between the neighboring nations, offering a unique cultural experience for visitors.` 
    },
    { 
        id: '2', 
        title: 'Badshahi Mosque', 
        image: require('../../Images/prov/punjab/BadshahiMosque.png'), 
        Detail: 'Badshahi Mosque in Lahore is one of the largest mosques in the world, renowned for its Mughal architecture.',
        detail2: `Badshahi Mosque in Lahore is one of the largest mosques in the world, renowned for its stunning Mughal architecture. The mosque's grand structure, intricate designs, and historical significance make it a major tourist attraction. Visitors are drawn to its majestic domes, expansive courtyard, and the serene ambiance that reflects the architectural brilliance of the Mughal era.` 
    },
    { 
        id: '3', 
        title: 'Derawar Fort', 
        image: require('../../Images/prov/punjab/DerawarFort.jpg'), 
        Detail: 'Derawar Fort in Bahawalpur is a historic fort known for its impressive architecture and strategic location.',
        detail2: `Derawar Fort, located in Bahawalpur, is a historic fort known for its impressive architecture and strategic location. The fort's massive walls, intricate designs, and historical importance make it a significant landmark. Visitors are captivated by its grandeur, the panoramic views it offers, and the glimpse it provides into the region's historical and architectural heritage.` 
    },
    { 
        id: '4', 
        title: 'Anarkali Bazaar', 
        image: require('../../Images/prov/punjab/AnarkaliBazaar.jpg'), 
        Detail: 'Anarkali Bazaar in Lahore is one of the oldest markets in South Asia, famous for its traditional goods and bustling atmosphere.',
        detail2: `Anarkali Bazaar, one of the oldest markets in South Asia, is located in Lahore and is famous for its traditional goods and bustling atmosphere. The bazaar offers a vibrant shopping experience with a wide range of products, from traditional clothing and jewelry to spices and handicrafts. Its lively environment, historical significance, and diverse offerings make it a popular destination for both locals and tourists.` 
    },
    { 
        id: '5', 
        title: 'Minar-e-Pakistan', 
        image: require('../../Images/prov/punjab/Minar-e-Pakistan.jpg'), 
        Detail: 'Minar-e-Pakistan in Lahore is a national monument commemorating the Lahore Resolution of 1940.',
        detail2: `Minar-e-Pakistan, located in Lahore, is a national monument commemorating the Lahore Resolution of 1940. The monument's towering structure and historical significance make it an iconic symbol of Pakistan's struggle for independence. Visitors are drawn to its impressive design, the historical context it represents, and the surrounding park that offers a serene environment for reflection and leisure.` 
    }
];



const Punjab = ({ navigation }) => {
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
                <Text style={styles.heading}>Welcome to Punjab</Text>
                <Image source={require('../../Images/punjab.png')} style={styles.mainpic} />
                <Text style={styles.description}>
                    Punjab is Pakistan's most populous province with a rich history and diverse culture. It is the heartland of Pakistan, with a vibrant economy and significant contributions to the country's heritage.
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

export default Punjab;
