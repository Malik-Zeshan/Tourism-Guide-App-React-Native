import React, {useState} from 'react';
import { View, Text,TextInput, StyleSheet, ScrollView, FlatList, TouchableOpacity, Image } from 'react-native';

const DATA2 = [
    { 
        id: '1', 
        title: 'Karachi', 
        image: require('../../Images/prov/Sindh/Karachi.webp'), 
        Detail: 'Karachi is Pakistan\'s largest city and an economic hub known for its beaches and vibrant culture.', 
        detail2: `Karachi, the bustling metropolis on the Arabian Sea, is known for its diverse culture, lively markets, and culinary delights. The city boasts iconic landmarks like Clifton Beach, the Karachi Port Grand, and historical sites such as Mohatta Palace and Quaid-e-Azam\'s Mausoleum. Karachi offers a blend of modern infrastructure, rich history, and vibrant nightlife, making it a vibrant destination for tourists and residents alike.` 
    },
    { 
        id: '2', 
        title: 'Hyderabad', 
        image: require('../../Images/prov/Sindh/Hyderabad.jpg'), 
        Detail: 'Hyderabad is famous for its historical landmarks and Sindhi culture.', 
        detail2: `Hyderabad, the city of ancient traditions and heritage, is renowned for landmarks like the Shahi Bazaar, Pakka Qila, and the iconic Charminar. The city offers a glimpse into Sindhi culture through its vibrant festivals, handicrafts, and traditional Sindhi cuisine. Hyderabad\'s rich history, architectural marvels, and warm hospitality make it a must-visit destination in Sindh.` 
    },
    { 
        id: '3', 
        title: 'Thatta', 
        image: require('../../Images/prov/Sindh/Thatta.jpg'), 
        Detail: 'Thatta is a UNESCO World Heritage Site known for its ancient monuments and architecture.', 
        detail2: `Thatta, a UNESCO World Heritage Site, is famous for its historical monuments such as the Shah Jahan Mosque, Makli Necropolis, and various tombs dating back to the 14th century. The city reflects the architectural brilliance of ancient civilizations and offers insights into the cultural and historical heritage of Sindh. Thatta\'s serene ambiance, architectural marvels, and cultural significance attract history enthusiasts and tourists alike.` 
    },
    { 
        id: '4', 
        title: 'Mohenjo-daro', 
        image: require('../../Images/prov/Sindh/Mohenjo-daro.webp'), 
        Detail: 'Mohenjo-daro is an archaeological site dating back to the ancient Indus Valley Civilization.', 
        detail2: `Mohenjo-daro, an archaeological marvel of the ancient Indus Valley Civilization, is one of the world\'s earliest urban settlements. The site offers insights into the advanced urban planning, drainage systems, and culture of the Harappan civilization. Mohenjo-daro\'s well-preserved structures, including the Great Bath and the Great Granary, provide a glimpse into the ancient life and society of the Indus Valley people.` 
    },
    { 
        id: '5', 
        title: 'Ranikot Fort', 
        image: require('../../Images/prov/Sindh/RanikotFort.webp'), 
        Detail: 'Ranikot Fort in Sindh is one of the largest forts in the world, known for its massive walls and strategic location.',
        detail2: `Ranikot Fort, also known as the Great Wall of Sindh, is the largest fort in the world with a circumference of approximately 26 kilometers. It is an ancient fortification dating back to the 17th century, built to protect the Kirthar Range. The fort offers stunning views of the surrounding landscape and is a testament to the architectural prowess of ancient Sindh.` 
    }
];

const DATA3 = [
    { 
        id: '6', 
        title: 'Keenjhar Lake', 
        image: require('../../Images/prov/Sindh/KeenjharLake.jpg'), 
        Detail: 'Keenjhar Lake, also known as Kalri Lake, is a scenic freshwater lake in Thatta District, popular for boating and picnics.',
        detail2: `Keenjhar Lake, situated in the picturesque Thatta District, is the second largest freshwater lake in Pakistan. It is a popular tourist destination known for its scenic beauty and recreational activities such as boating and birdwatching. The lake offers stunning views of the surrounding hills and is a serene retreat for nature lovers and adventurers alike.` 
    },
    { 
        id: '7', 
        title: 'Chaukhandi Tombs', 
        image: require('../../Images/prov/Sindh/ChaukhandiTombs.webp'), 
        Detail: 'Chaukhandi Tombs near Karachi are ancient funerary monuments known for their intricate carvings and historical significance.',
        detail2: `Chaukhandi Tombs are ancient funerary monuments located near Karachi, known for their unique architecture and intricate stone carvings. These tombs date back to the 15th-18th centuries and serve as a testament to the artistic skills of ancient Sindhi craftsmen. The site is renowned for its historical significance and attracts visitors interested in archaeology and cultural heritage.` 
    },
    { 
        id: '8', 
        title: 'Sehwan Sharif', 
        image: require('../../Images/prov/Sindh/SehwanSharif.jpg'), 
        Detail: 'Sehwan Sharif is a major Sufi shrine in Sindh, dedicated to the revered saint Lal Shahbaz Qalandar.',
        detail2: `Sehwan Sharif is a revered Sufi shrine in Sindh dedicated to Hazrat Lal Shahbaz Qalandar, a 13th-century Sufi saint and poet. The shrine is a center of religious and cultural significance, attracting devotees from across Pakistan and beyond. Sehwan Sharif is known for its spiritual ambiance, mystic traditions, and vibrant festivals such as the annual Urs celebrations, which draw thousands of pilgrims and tourists.` 
    },
    { 
        id: '9', 
        title: 'Churna Island', 
        image: require('../../Images/prov/Sindh/ChurnaIsland.jpg'), 
        Detail: 'Churna Island near Karachi is a popular diving and snorkeling spot, known for its clear waters and coral reefs.',
        detail2: `Churna Island, located near Karachi, is a hidden gem for diving and snorkeling enthusiasts. The island is renowned for its crystal-clear waters, vibrant coral reefs, and diverse marine life, including tropical fish and sea turtles. Visitors can enjoy thrilling water activities such as scuba diving, snorkeling, and boat rides, making Churna Island a paradise for underwater adventurers and nature lovers.` 
    },
   
];

const Sindh = ({ navigation }) => {
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
                <Text style={styles.heading}>Welcome to Sindh</Text>
                <Image source={require('../../Images/sindh.png')} style={styles.mainpic} />
                <Text style={styles.description}>
                    Sindh is one of Pakistan's four provinces, known for its rich history, cultural diversity, and economic significance. It is home to bustling cities, historical sites, and scenic landscapes.
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
        height: 250,
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

export default Sindh;
