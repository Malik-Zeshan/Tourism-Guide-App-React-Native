import React, {useState} from 'react';
import { View, Text,TextInput, StyleSheet, ScrollView, FlatList, TouchableOpacity, Image } from 'react-native';

const DATA2 = [
    { 
        id: '1', 
        title: 'Faisal Mosque', 
        image: require('../../Images/prov/islamabad/FaisalMosque.jpg'), 
        Detail: 'Faisal Mosque, located in Islamabad, Pakistan, is renowned for its stunning modern architecture and peaceful ambiance.', 
        detail2: `Faisal Mosque, situated in Islamabad, Pakistan, is known for its impressive modern architecture and serene atmosphere. The mosque, designed by Turkish architect Vedat Dalokay, is one of the largest mosques in the world and can accommodate tens of thousands of worshippers. Its unique design blends contemporary elements with traditional Islamic aesthetics.` 
    },
    { 
        id: '2', 
        title: 'Pakistan Monument', 
        image: require('../../Images/prov/islamabad/PakistanMonument.jpg'), 
        Detail: 'Pakistan Monument in Islamabad is a symbol of national unity, featuring a unique design representing the four provinces of Pakistan.', 
        detail2: `Pakistan Monument in Islamabad symbolizes national unity and pride, with its distinctive design representing the four provinces of Pakistan. The monument, designed by architect Arif Masood, stands as a tribute to the country's cultural and historical heritage. Visitors can explore the monument's museum, which showcases Pakistan's history through interactive exhibits and displays.` 
    },
    { 
        id: '3', 
        title: 'Daman-e-Koh', 
        image: require('../../Images/prov/islamabad/Daman-e-Koh.jpg'), 
        Detail: 'Daman-e-Koh offers panoramic views of Islamabad and is a popular spot for picnics and hiking.', 
        detail2: `Daman-e-Koh, located in the Margalla Hills National Park, offers breathtaking panoramic views of Islamabad and the surrounding plains. The viewpoint, situated at an elevation of 2400 feet, is a popular destination for picnics, leisure walks, and hiking. Visitors can enjoy the serene environment amidst lush greenery and diverse wildlife.` 
    },
    { 
        id: '4', 
        title: 'Rawal Lake', 
        image: require('../../Images/prov/islamabad/RawalLake.jpg'), 
        Detail: 'Rawal Lake, a scenic reservoir in Islamabad, Pakistan, is ideal for boating and enjoying serene natural surroundings.', 
        detail2: `Rawal Lake, located on the outskirts of Islamabad, Pakistan, is a picturesque reservoir surrounded by serene natural landscapes. The lake, formed by the damming of the Korang River, offers opportunities for boating, fishing, and picnicking. Visitors can relax in the peaceful ambiance and enjoy views of the Margalla Hills.` 
    },
    { 
        id: '5', 
        title: 'Lok Virsa Museum', 
        image: require('../../Images/prov/islamabad/LokVirsaMuseum.jpg'), 
        Detail: 'Lok Virsa Museum showcases the cultural heritage of Pakistan through exhibits of traditional arts, crafts, and artifacts.', 
        detail2: `Lok Virsa Museum, located in Islamabad, Pakistan, celebrates the rich cultural heritage of the country through its extensive collection of traditional arts, crafts, and artifacts. The museum features exhibits that highlight Pakistan's diverse ethnic groups and cultural practices.` 
    }
];

const DATA3 = [
    { 
        id: '1', 
        title: 'Margalla Hills National Park', 
        image: require('../../Images/prov/islamabad/MargallaHillsNationalPark.jpg'), 
        Detail: 'Margalla Hills National Park in Islamabad offers hiking trails, wildlife viewing, and panoramic views of the city.', 
        detail2: `Margalla Hills National Park, located in Islamabad, Pakistan, is a scenic paradise offering diverse wildlife, hiking trails, and panoramic views of the city. The park is home to various species of birds, mammals, and flora native to the region. Visitors can explore numerous hiking trails that wind through dense forests and rocky terrain.` 
    },
    { 
        id: '2', 
        title: 'Centaurus Mall', 
        image: require('../../Images/prov/islamabad/CentaurusMall.jpg'), 
        Detail: 'Centaurus Mall is a premier shopping and entertainment destination in Islamabad, featuring international brands and dining options.', 
        detail2: `Centaurus Mall, located in Islamabad, Pakistan, is a luxurious shopping and entertainment complex offering a wide range of international brands, upscale boutiques, and gourmet dining options. Visitors can explore a diverse array of shops, enjoy leisure activities such as bowling and arcade games.` 
    },
    { 
        id: '3', 
        title: 'Shakarparian Park', 
        image: require('../../Images/prov/islamabad/ShakarparianPark.webp'), 
        Detail: 'Shakarparian Park offers lush greenery, viewpoints, and recreational activities in Islamabad.', 
        detail2: `Shakarparian Park is a picturesque recreational park offering green landscapes and various recreational activities. It is situated on the Shakarparian Hills, features well-maintained gardens, jogging tracks, and picnic spots amidst tranquil surroundings. Visitors can enjoy panoramic views of Islamabad and Rawalpindi.` 
    },
    { 
        id: '4', 
        title: 'Islamabad Zoo', 
        image: require('../../Images/prov/islamabad/IslamabadZoo.jpg'), 
        Detail: 'Islamabad Zoo is home to a variety of wildlife species and offers educational exhibits and family-friendly attractions.', 
        detail2: `Islamabad Zoo, located in the heart of the capital city, is a popular attraction known for its diverse collection of wildlife species and family-friendly exhibits. The zoo houses animals from around the world, including mammals, birds, and reptiles, providing educational opportunities for visitors of all ages.` 
    },
    { 
        id: '5', 
        title: 'Japanese Park', 
        image: require('../../Images/prov/islamabad/JapanesePark.jpg'), 
        Detail: 'Japanese Park in Islamabad features serene gardens, cherry blossoms, and a peaceful ambiance for visitors.', 
        detail2: `Japanese Park, located in Islamabad, Pakistan, is a serene oasis known for its meticulously landscaped gardens, cherry blossoms, and tranquil ambiance. The park offers visitors a peaceful retreat amidst lush greenery and scenic pathways. Cherry blossoms in springtime create a stunning spectacle, attracting photographers and nature enthusiasts.` 
    },
   
];


const Islamabad = ({ navigation }) => {
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
                <Text style={styles.heading}>Welcome to Islamabad</Text>
                <Image source={require('../../Images/Islamabad.jpg')} style={styles.mainpic} />

                <Text style={styles.description}>
                    Islamabad is the capital city of the Islamic Republic of Pakistan. It is the country's ninth-most populous city with a population of over 1.2 million people and is federally administered by the Pakistani government as part of the Islamabad Capital Territory.
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

export default Islamabad;
