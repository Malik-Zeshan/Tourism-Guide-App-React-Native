import React, {useState} from 'react';
import { View, Text,TextInput, StyleSheet, ScrollView, FlatList, TouchableOpacity, Image } from 'react-native';

const DATA2 = [
    { 
        id: '1', 
        title: 'Peshawar', 
        image: require('../../Images/prov/kpk/Peshawar.webp'), 
        Detail: 'Peshawar is known for its historical landmarks and vibrant bazaars.', 
        detail2: `Peshawar, the capital of Khyber Pakhtunkhwa, is renowned for its rich history and vibrant bazaars. The city is home to historical landmarks such as the Bala Hisar Fort and the Qissa Khwani Bazaar, where stories and goods have been exchanged for centuries. Visitors can explore the Peshawar Museum, which showcases Gandharan art and the city's cultural heritage. The bustling markets and flavorful cuisine make Peshawar a unique destination for travelers seeking a blend of history and modernity.` 
    },
    { 
        id: '2', 
        title: 'Swat Valley', 
        image: require('../../Images/prov/kpk/SwatValley.jpg'), 
        Detail: 'Swat Valley is famous for its natural beauty and picturesque landscapes.', 
        detail2: `Swat Valley, often referred to as the "Switzerland of Pakistan," is famous for its stunning natural beauty and picturesque landscapes. The valley is surrounded by lush green mountains, crystal-clear rivers, and serene lakes. Visitors can explore the historic Buddhist sites, such as the Butkara Stupa, and enjoy activities like trekking, fishing, and boating. Swat is also known for its hospitality and cultural festivals, offering a glimpse into the local way of life.` 
    },
    { 
        id: '3', 
        title: 'Kumrat Valley', 
        image: require('../../Images/prov/kpk/KumratValley.jpg'), 
        Detail: 'Kumrat Valley is a hidden gem known for its pristine forests and scenic beauty.', 
        detail2: `Kumrat Valley, located in the Upper Dir District of Khyber Pakhtunkhwa, is a hidden gem known for its pristine forests and scenic beauty. The valley is adorned with pine forests, flowing streams, and lush meadows, making it an ideal destination for nature lovers and adventurers. Visitors can enjoy camping, hiking, and fishing in this tranquil valley. Kumrat Valley's untouched natural environment provides a perfect escape from the hustle and bustle of city life.` 
    },
    { 
        id: '4', 
        title: 'Malam Jabba', 
        image: require('../../Images/prov/kpk/MalamJabba.jpg'), 
        Detail: 'Malam Jabba is a famous ski resort and hill station in Khyber Pakhtunkhwa.', 
        detail2: `Malam Jabba, a renowned ski resort and hill station in Khyber Pakhtunkhwa, is famous for its stunning scenery and winter sports. The resort offers well-maintained ski slopes, chair lifts, and snowboarding facilities, attracting tourists and adventure enthusiasts. In the summer, Malam Jabba transforms into a lush green retreat with opportunities for hiking, zip-lining, and exploring the surrounding forests. The panoramic views and pleasant weather make Malam Jabba a year-round destination.` 
    },
    { 
        id: '5', 
        title: 'Nathiagali', 
        image: require('../../Images/prov/kpk/Nathiagali.webp'), 
        Detail: 'Nathiagali is a hill station known for its scenic beauty and pleasant weather.', 
        detail2: `Nathiagali, located in the Abbottabad District of Khyber Pakhtunkhwa, is a popular hill station known for its scenic beauty and pleasant weather. The area is surrounded by pine forests and offers breathtaking views of the surrounding mountains. Visitors can enjoy hiking trails, such as the Mukshpuri and Miranjani treks, and explore the quaint markets and cafes in the town. Nathiagali's serene environment and cool climate make it a favorite getaway for tourists seeking relaxation and nature.` 
    }
];

const DATA3 = [
    { 
        id: '1', 
        title: 'Chitral', 
        image: require('../../Images/prov/kpk/Chitral.jpg'), 
        Detail: 'Chitral is a scenic valley known for its hospitality and cultural richness.', 
        detail2: `Chitral, located in the northernmost part of Khyber Pakhtunkhwa, is a scenic valley known for its hospitality and cultural richness. The valley is surrounded by the Hindukush mountains and offers stunning views of Tirich Mir, the highest peak in the range. Visitors can explore the ancient Chitral Fort, visit the Kalash Valleys to experience the unique culture of the Kalash people, and enjoy outdoor activities like trekking, fishing, and birdwatching. Chitral's warm and welcoming atmosphere makes it a memorable destination.` 
    },
    { 
        id: '2', 
        title: 'Abbottabad', 
        image: require('../../Images/prov/kpk/Abbottabad.jpg'), 
        Detail: 'Abbottabad is a hill station surrounded by lush green hills and pine forests.', 
        detail2: `Abbottabad, a picturesque city in Khyber Pakhtunkhwa, is surrounded by lush green hills and pine forests. The city is known for its pleasant climate, making it a popular summer retreat. Visitors can explore historical sites such as the Abbottabad Church, enjoy hiking in the nearby Ayubia National Park, and visit the bustling bazaars. Abbottabad's serene environment and scenic beauty provide a perfect escape for those seeking tranquility and nature.` 
    },
    { 
        id: '3', 
        title: 'Ayubia National Park', 
        image: require('../../Images/prov/kpk/AyubiaNationalPark.jpg'), 
        Detail: 'Ayubia National Park is a protected area known for its diverse wildlife and scenic hiking trails.', 
        detail2: `Ayubia National Park, located in the Abbottabad District of Khyber Pakhtunkhwa, is a protected area known for its diverse wildlife and scenic hiking trails. The park is home to a variety of flora and fauna, including leopards, bears, and numerous bird species. Visitors can explore the famous Ayubia chairlift, trek through the lush forests, and enjoy panoramic views from various viewpoints within the park. Ayubia National Park offers a perfect blend of adventure and natural beauty.` 
    },
    { 
        id: '4', 
        title: 'Dir', 
        image: require('../../Images/prov/kpk/Dir.jpg'), 
        Detail: 'Dir is known for its archaeological sites and natural beauty.', 
        detail2: `Dir, located in Khyber Pakhtunkhwa, is known for its archaeological sites and natural beauty. The region is rich in history, with remnants of ancient civilizations and historic landmarks. Visitors can explore the Dir Museum, which houses artifacts from the Gandhara civilization, and enjoy the scenic landscapes of the region. Dir offers opportunities for trekking, fishing, and experiencing the local culture and traditions.` 
    },
    { 
        id: '5', 
        title: 'Kalash Valleys', 
        image: require('../../Images/prov/kpk/KalashValleys.jpg'), 
        Detail: 'The Kalash Valleys are known for their unique culture and stunning natural beauty.', 
        detail2: `The Kalash Valleys, located in the Chitral District of Khyber Pakhtunkhwa, are known for their unique culture and stunning natural beauty. The valleys are home to the Kalash people, who have a distinct culture and language. Visitors can experience the vibrant festivals, traditional dances, and colorful attire of the Kalash community. The valleys also offer breathtaking landscapes, with lush green fields, flowing rivers, and majestic mountains.` 
    },
   
    
];

const KPK = ({ navigation }) => {
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
                <Text style={styles.heading}>Welcome to Khyber Pakhtunkhwa (KPK)</Text>
                <Image source={require('../../Images/kpk.png')} style={styles.mainpic} />
                <Text style={styles.description}>
                    Khyber Pakhtunkhwa, often abbreviated as KPK, is known for its stunning natural beauty and rich cultural heritage. It is home to some of Pakistan's most scenic valleys and historical sites.
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

export default KPK;
