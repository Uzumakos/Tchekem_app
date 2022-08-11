import { View, Image, Text, StyleSheet, Pressable } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";




const Pin = (props: { image: any; title: any; pini: any;}) => {
    const {image, title} = props.pini;

    const [ratio, setRatio] = useState(1);
    
    const onLike = () => {};

    useEffect(() => {
        if (image) {
            Image.getSize(image, (width, height) => setRatio(width / height));
        }
    }, [image]);
    

    return (
      <View style={styles.pin}>
        <View>
         <Image source={{ uri: image}}
            style={[styles.image, { aspectRatio: ratio }]}    
         />

         <Pressable onPress={onLike} style={styles.heartBtn}>
              <AntDesign name="hearto" size={24} color="black" />
         </Pressable>
        </View>
     

      
      <Text style={styles.title}>{title}</Text>
      </View>
    );
};

const styles = StyleSheet.create({
    pin: {
      width: "100%",
      padding: 4,
    },
    title: {
      fontSize: 16,
      lineHeight: 22,
      fontWeight: "600",
      margin: 5,
      color: "#181818",
    },
    image: {
      width: "100%",
      borderRadius: 25,
    },
    heartBtn: {
        backgroundColor: "#D3CFD4",
        position: "absolute",
        bottom: 10,
        right: 10,
        padding: 5,
        borderRadius: 50,
      },
    
  });

  export default Pin;