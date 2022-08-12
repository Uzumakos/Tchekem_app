import { StyleSheet, ScrollView, useWindowDimensions } from "react-native";

import { View } from "../components/Themed";
import Pin from "../components/Pin";
import { useState } from "react";

interface IMasonryList {
  pins: {
    id: string;
    image: string;
    title: string;
  }[];
}

const MasonryList = ({ pins }: IMasonryList) => {
  const width = useWindowDimensions().width;

  const numColumns = Math.ceil(width / 350);

  return (
    <ScrollView>
    <View style={styles.container}>
      {/*1rst column pou tchek yo */}
    <View style={styles.column}>
    
      {pins.filter((item, index) => index % 2 === 0).map(pini => <Pin pini={pini} key={pini.id} image={undefined} title={undefined} />)}
    </View>
    {/*2nd column pou tchek yo */}
    <View style={styles.column}>

      {pins.filter((item, index) => index % 2 === 1).map(pini => <Pin pini={pini} key={pini.id} image={undefined} title={undefined} />)}
    </View>

    </View>
  </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: "row",
  },
  column: {
    flex: 1,
  },
});

export default MasonryList;
