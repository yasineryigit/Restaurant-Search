import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, FlatList } from 'react-native';
import yelp from '../api/yelp'

export default function ResultsShowScreen({ navigation }) {
  const id = navigation.getParam('id');//ResultList componentinden gönderilen verileri id'si ile alıyoruz
  const [result, setResult] = useState(null); //object tutacağız, default değerine null diyoruz

  //console.log(result)

  const getResult = async (id) => { //verilen id'ye sahip restorana ait istek atacağız
    const response = await yelp.get(`/${id}`)
    setResult(response.data)
  }

  useEffect(() => {
    getResult(id);
  }, [])

  if (!result) {  //result yoksa null döndür
    return null;
  }

  return (
    <View>
      <Text style={styles.text}>{result.name}</Text>
      
      <FlatList
        data={result.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => {
          //photos dizisindeki her bir elemanı al (yani url'i)
          return <Image style={styles.image} source={{ uri: item }} />
        }}

      />
    </View>
  );
}


const styles = StyleSheet.create({
  image:{
      height:200,
      width:300,
      margin:10,
  },
  text:{
    textAlign: 'center',
    padding: 10,
  }
})