import React, { useState } from 'react';
import { Text, View, ScrollView, StyleSheet, Image, TextInput, FlatList, TouchableOpacity } from 'react-native';

const DATA = [
  { id: '1', title: 'Islamabad', image: require('../Images/Logos/Islamabad.jpg'), screen: 'Islamabad' },
  { id: '2', title: 'Punjab', image: require('../Images/Logos/punjab.jpg'), screen: 'Punjab' },
  { id: '3', title: 'Kpk', image: require('../Images/Logos/kpk1.webp'), screen: 'Kpk' },
  { id: '4', title: 'Sindh', image: require('../Images/Logos/sindh.png'), screen: 'Sindh' },
  { id: '5', title: 'Balochistan', image: require('../Images/Logos/balochistan.png'), screen: 'Balochistan' },
  { id: '6', title: 'Gilgit', image: require('../Images/Logos/gilgit.webp'), screen: 'Gilgit' },
  { id: '7', title: 'Kashmir', image: require('../Images/Logos/kashmir.png'), screen: 'Kashmir' },
];

const DATA2 = [
    { 
        id: '1', 
        title: 'Ansoo Lake', 
        image: require('../Images/prov/kpk/AnsoLake.jpg'), 
        Detail: 'Ansoo Lake is a high-altitude lake located in Kaghan Valley, Pakistan, known for its unique tear-shaped appearance and scenic beauty.',
        detail2: `Ansoo Lake, nestled amidst the Himalayan range, is renowned for its breathtaking views and tranquil surroundings. The lake's shape resembles a teardrop, adding to its mystique and allure for trekkers and nature enthusiasts. Surrounded by snow-capped peaks and lush green meadows, Ansoo Lake offers a serene retreat amidst the rugged beauty of Kaghan Valley, making it a must-visit destination for adventurers seeking solitude and natural splendor.` 
    },
    { 
        id: '2', 
        title: 'Multan', 
        image: require('../Images/prov/punjab/Multan.jpg'), 
        Detail: 'Multan is famous for its Sufi shrines and historical significance.', 
        detail2: `Multan, the "City of Saints," is renowned for its centuries-old Sufi shrines, including the shrine of Bahauddin Zakariya, which draws pilgrims and visitors seeking spiritual solace. The city is steeped in history, with ancient forts, vibrant bazaars selling handicrafts and textiles, and traditional Multani cuisine. Multan's warm climate, bustling markets, and hospitable people reflect its rich cultural heritage and historical importance in South Asia.` 
    },
];

const DATA3 = [
    { 
        id: '5', 
        title: 'Kalash Valleys', 
        image: require('../Images/prov/kpk/KalashValleys.jpg'), 
        Detail: 'The Kalash Valleys are known for their unique culture and stunning natural beauty.', 
        detail2: `The Kalash Valleys, located in the Chitral District of Khyber Pakhtunkhwa, are known for their unique culture and stunning natural beauty. The valleys are home to the Kalash people, who have a distinct culture and language. Visitors can experience the vibrant festivals, traditional dances, and colorful attire of the Kalash community. The valleys also offer breathtaking landscapes, with lush green fields, flowing rivers, and majestic mountains.` 
    },
    { 
        id: '4', 
        title: 'Mohenjo-daro', 
        image: require('../Images/prov/Sindh/Mohenjo-daro.webp'), 
        Detail: 'Mohenjo-daro is an archaeological site dating back to the ancient Indus Valley Civilization.', 
        detail2: `Mohenjo-daro, an archaeological marvel of the ancient Indus Valley Civilization, is one of the world\'s earliest urban settlements. The site offers insights into the advanced urban planning, drainage systems, and culture of the Harappan civilization. Mohenjo-daro\'s well-preserved structures, including the Great Bath and the Great Granary, provide a glimpse into the ancient life and society of the Indus Valley people.` 
    },];

const DATA4 = [
    { 
        id: '3', 
        title: 'Jhal Magsi Desert Rally', 
        image: require('../Images/prov/Balochistan/JhalMagsiDesertRally.jpg'), 
        Detail: 'Jhal Magsi Desert Rally attracts adrenaline junkies and spectators alike.', 
        detail2: `Jhal Magsi Desert Rally, held annually in Balochistan, Pakistan, is a thrilling event that draws adrenaline junkies and motorsport enthusiasts from around the world. The rally features challenging desert tracks and showcases the skill of drivers navigating through the sandy terrain. Spectators flock to witness the excitement and enjoy cultural festivities that accompany this exhilarating sporting event.` 
    },
    { 
        id: '2', 
        title: 'Hunza Valley', 
        image: require('../Images/prov/gilgit/HunzaValley.jpg'), 
        Detail: 'Hunza Valley is famous for its natural beauty, apricot blossoms, and hospitality.', 
        detail2: `Hunza Valley, nestled in Gilgit-Baltistan is renowned for its landscapes and warm hospitality. The valley is famous for terraced fields of apricot orchards, vibrant festivals, and ancient forts like Baltit Fort and Altit Fort. Visitors can explore attractions like Attabad Lake and Rakaposhi View Point, offering panoramic views of snow-capped peaks. The valley's serene environment and friendly locals make it a popular destination for trekking, cultural tours, and experiencing the unique Wakhi culture.` 
    },];

const Home = ({navigation}) => {
    const [searchInput, setSearchInput] = useState('');
    const [filteredData, setFilteredData] = useState(DATA2);
    const [filteredData1, setFilteredData1] = useState(DATA3);
    const [filteredData2, setFilteredData2] = useState(DATA4);


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

            const newData4 = DATA4.filter(item => {
                const itemData = item.title ? item.title.toUpperCase() : ''.toUpperCase();
                const textData = text.toUpperCase();
                return itemData.indexOf(textData) > -1;
            });
            setFilteredData2(newData4);

        } else {
            setFilteredData(DATA2);
            setFilteredData1(DATA3);
            setFilteredData2(DATA4);
        }
    };
    return (
        <ScrollView style={styles.main}>
            <View style={styles.header}>
                <Image source={require('../Images/man.png')} style={styles.iconloc} />
                <Text style={{ color: "#1763BD", padding: 4, paddingLeft: 12, fontSize: 28, fontWeight: "bold" }}>Let's Discover</Text>
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
            <View style={styles.show}>
                <Text style={styles.browse}>Browse Categories</Text>
                <Text style={styles.seeall}>see all</Text>
            </View>

            <FlatList
                data={DATA}
                renderItem={({ item }) => (
                  <TouchableOpacity onPress={() => navigation.navigate(item.screen)}>
                  <View style={styles.FLitemConatiner}>
                      <Image source={item.image} style={styles.FLimage} />
                      <Text style={styles.itemText}>{item.title}</Text>
                  </View>
              </TouchableOpacity>
                )}
                keyExtractor={item => item.id}
                horizontal
            />

            <View style={styles.show}>
                <Text style={styles.browse}>Suggested</Text>
            </View>
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
                    <FlatList
                        data={filteredData2}
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
                        contentContainerStyle={[styles.FLlistContainer, { paddingTop: 0 }]}
                    />
            
        </ScrollView>
    );
}

export default Home;

const styles = StyleSheet.create({
    main: {
        paddingHorizontal: 5,
        height: "100%",
        paddingTop: 20,
        backgroundColor: "#FAFBFF" // Light background color
        // #f5f5e1
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10
    },
    iconloc: {
        resizeMode: 'contain',
        width: 38,
        height: 38,
        borderRadius: 28,
        backgroundColor: "white",
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
    show: {
        alignItems: "center",
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        paddingTop: 30
    },
    seeall: {
        textAlign: "center",
        color: '#1763BD',
        fontSize: 15,
        fontWeight: 'bold',
    },
    browse: {
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold',
    },
    FLitemConatiner: {
        alignItems: 'center',
        marginRight: 10,
        marginLeft: 10,
        backgroundColor: "white",
        borderRadius: 12,
        borderWidth: 0.8,
        padding: 5,
        paddingBottom: 8, 
        borderColor: "#1763BD",
        marginTop:20
    },
    FLlistContainer: {
        paddingTop: 20,
        marginHorizontal: 10,
        gap: 10,
        
    },
    FLimage: {
        resizeMode: 'contain',
        width: 70,
        height: 70,
        borderRadius: 20,
      },
    itemText: {
        color: 'black',
        fontSize: 16,
        fontWeight: "bold",
        paddingTop: 8,
        textAlign: "center"
    },
    FLitemConatiner2: {
        alignItems: 'center',
        width: 160,
        height: 280,
        backgroundColor: 'white',
        borderRadius: 10,
        overflow: 'hidden',
       
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
        borderTopLeftRadius:15,
        borderTopRightRadius:15
    },
    overlayText: {
        color: 'white',
        fontSize: 20,
        fontWeight: "bold",
    },
    overlayDetail: {
        color: 'lightgrey',
        fontSize: 11,
        fontWeight: "600"
    },
});
