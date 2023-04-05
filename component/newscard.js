import { useEffect, useState } from "react";
import { FlatList, Image, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Mynewscard() {
    const [currnewsdata, setnewsdata] = useState();
    const mynewsdata = async () => {
        try {
            const response = await fetch('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=5a926342016b447ca98fd36bc91e93ac');
            const Mynewsdata = await response.json();
            setnewsdata(Mynewsdata.articles);

        } catch (error) {
            console.log(console.error);
        }
    }

    useEffect(() => {
        mynewsdata();
    }, []);

    return (
        <FlatList
            data={currnewsdata}
            keyExtractor={(Item, index) => index}
            renderItem={({ item, index }) => {
                return (
                    <View style={styles.mynewscard}>
                        <Text style={styles.newstitle}>{item.title}</Text>
                        <View style={{ flex: 0, width: '100%', alignItems: 'center' }}>
                            <Image source={{ uri: item.urlToImage, }} style={{ width: '98%', height: 250, }} />
                        </View>
                        <Text style={styles.newsdescription}>{item.description}</Text>
                        <TouchableOpacity style={styles.readmorecontainer} onPress={()=>{
                            Linking.openURL(item.url)
                        }}>
                            <Text style={styles.readmorebtn}>Read More {">"}</Text>
                        </TouchableOpacity>
                    </View>
                )
            }}
        />
    )
}

const styles = StyleSheet.create({
    mynewscard: {
        // borderColor: 'white',
        borderWidth: 1,
        backgroundColor: 'grey',
        width: '96%',
        borderRadius: 10,
        marginVertical: 10,

    },
    newstitle: {
        color: 'white',
        fontSize: 25,
        padding: 5,
        fontWeight: '600'
    },
    newsdescription: {
        color: 'white',
        fontSize: 17,
        margin: 10,
    },
    readmorecontainer: {
        flex: 0,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    readmorebtn: {
        backgroundColor: 'black',
        color: 'white',
        fontSize: 20,
        fontWeight: '700',
        margin: 10,
        padding: 10,
        borderRadius: 10,
    },
});