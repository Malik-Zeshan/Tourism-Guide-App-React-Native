import React, {useState} from 'react';
import { View, Text,TextInput, StyleSheet, ScrollView, FlatList, TouchableOpacity, Image } from 'react-native';

const DATA2 = [
    { 
        id: '1', 
        title: 'Skardu', 
        image: require('../../Images/prov/gilgit/Skardu.jpg'), 
        Detail: 'Skardu is known for its stunning landscapes, including lakes and mountains.', 
        detail2: `Skardu is renowned for its natural beauty and diverse landscapes. Nestled amidst the Karakoram Range, Skardu is home to picturesque lakes such as Satpara Lake and Shangrila Resort. The region offers opportunities for trekking and mountaineering, with popular destinations like K2 Base Camp attracting adventurers from around the globe. Skardu also boasts a rich cultural heritage with historic sites such as Skardu Fort and ancient Buddhist rock carvings at Manthal Buddha Rock.` 
    },
    { 
        id: '2', 
        title: 'Hunza Valley', 
        image: require('../../Images/prov/gilgit/HunzaValley.jpg'), 
        Detail: 'Hunza Valley is famous for its natural beauty, apricot blossoms, and hospitality.', 
        detail2: `Hunza Valley, nestled in Gilgit-Baltistan is renowned for its landscapes and warm hospitality. The valley is famous for terraced fields of apricot orchards, vibrant festivals, and ancient forts like Baltit Fort and Altit Fort. Visitors can explore attractions like Attabad Lake and Rakaposhi View Point, offering panoramic views of snow-capped peaks. The valley's serene environment and friendly locals make it a popular destination for trekking, cultural tours, and experiencing the unique Wakhi culture.` 
    },
    { 
        id: '3', 
        title: 'Fairy Meadows', 
        image: require('../../Images/prov/gilgit/FairyMeadows.jpg'), 
        Detail: 'Fairy Meadows offers stunning views of Nanga Parbat and is popular among trekkers.', 
        detail2: `Fairy Meadows, in Gilgit-Baltistan, Pakistan, is renowned for its views of Nanga Parbat, the ninth-highest mountain. The meadows offer a serene environment with lush greenery and alpine flowers, ideal for nature lovers and photographers. Visitors can trek to Nanga Parbat's base camp, known as Killer Mountain, and camp under the starlit sky amidst the Himalayan peaks.` 
    },
    { 
        id: '4', 
        title: 'Shigar Valley', 
        image: require('../../Images/prov/gilgit/ShigarValley.webp'), 
        Detail: 'Shigar Valley is known for its ancient forts and lush orchards.', 
        detail2: `Shigar Valley, in Gilgit-Baltistan, Pakistan, is celebrated for its scenic beauty and cultural heritage. The valley is home to historic landmarks like Shigar Fort, known for impressive architecture and cultural significance. The region's fertile orchards produce apricots, apples, and cherries. Visitors can explore traditional Balti culture, trek in the mountains, and enjoy local hospitality.` 
    },
    { 
        id: '5', 
        title: 'Baltit Fort', 
        image: require('../../Images/prov/gilgit/BaltitFort.jpg'), 
        Detail: 'Baltit Fort is a historic fort in Karimabad, offering panoramic views of Hunza Valley.', 
        detail2: `Baltit Fort, in Karimabad, Hunza Valley, Gilgit-Baltistan, Pakistan, is a UNESCO World Heritage site known for its architecture and historical significance. The fort offers panoramic views of the valley and snow-capped peaks, attracting history enthusiasts and photographers. Visitors can explore ancient rooms, learn about Hunza's history, and enjoy cultural performances.` 
    }
];

const DATA3 = [
    { 
        id: '1', 
        title: 'Gilgit', 
        image: require('../../Images/prov/gilgit/Skardu.jpg'), 
        Detail: 'Gilgit is the capital city of Gilgit-Baltistan, known for its scenic beauty and cultural diversity.', 
        detail2: `Gilgit, the capital city of Gilgit-Baltistan, Pakistan, is celebrated for its natural beauty and cultural diversity. Nestled amidst towering mountains and lush valleys, Gilgit offers breathtaking landscapes. The city is a hub of cultural heritage with vibrant bazaars, ancient forts, and mosques showcasing diverse traditions. Visitors can explore attractions like the Karakoram International University, Gilgit River, and serene Naltar Valley known for crystal-clear lakes and skiing.` 
    },
    { 
        id: '2', 
        title: 'Deosai National Park', 
        image: require('../../Images/prov/gilgit/DeosaiNationalPark.jpg'), 
        Detail: 'Deosai National Park is a high-altitude plateau known for its wildlife and flowers.', 
        detail2: `Deosai National Park, in Gilgit-Baltistan, Pakistan, is a high-altitude plateau known for landscapes and diverse wildlife. The park is home to the endangered Himalayan brown bear and offers views of snow-capped peaks, vast grasslands, and wildflowers in summer. Visitors can experience Sheosar Lake's serenity, trek across plains, and encounter bird species.` 
    },
    { 
        id: '3', 
        title: 'Naltar Valley', 
        image: require('../../Images/prov/gilgit/NaltarValley.jpg'), 
        Detail: 'Naltar Valley is famous for its scenic beauty and skiing opportunities.', 
        detail2: `Naltar Valley, in Gilgit-Baltistan, Pakistan, is renowned for picturesque landscapes and adventurous activities. Surrounded by snow-capped mountains and green meadows, the valley offers breathtaking views and a serene environment. Naltar's ski slopes attract enthusiasts in winter. The valley features lakes like Naltar Lake, Bashkiri Lake, ideal for nature lovers and adventurers.` 
    },
    { 
        id: '4', 
        title: 'Hopper Glacier', 
        image: require('../../Images/prov/gilgit/HopperGlacier.jpg'), 
        Detail: 'Hopper Glacier offers stunning views and is a popular trekking destination.', 
        detail2: `Hopper Glacier, in Nagar Valley, Gilgit-Baltistan, Pakistan, is renowned for views and trekking trails. Surrounded by peaks, the glacier offers a backdrop for photography and nature exploration. Visitors can trek to see the glacier, explore Nagar Valley's serene environment, and encounter flora and fauna.` 
    },
    { 
        id: '5', 
        title: 'Khunjerab Pass', 
        image: require('../../Images/prov/gilgit/KhunjerabPass.jpg'), 
        Detail: 'Khunjerab Pass is the highest paved international border crossing in the world.', 
        detail2: `Khunjerab Pass, in the Karakoram Mountains at Pakistan-China border, is renowned for landscapes and strategic importance. The pass connects Gilgit-Baltistan with China's Xinjiang region. Visitors enjoy views of snow-capped peaks, explore Khunjerab National Park, and experience Wakhi culture.` 
    },
   
];



const Gilgit = ({ navigation }) => {
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
                <Text style={styles.heading}>Welcome to Gilgit-Baltistan</Text>
                <Image source={require('../../Images/gilgit.jpeg')} style={styles.mainpic} />
                <Text style={styles.description}>
                    Gilgit-Baltistan is a mountainous region known for its breathtaking landscapes, including snow-capped peaks, lakes, and valleys. It is a popular destination for adventure seekers and nature enthusiasts.
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
        borderRadius: 30,
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

export default Gilgit;
