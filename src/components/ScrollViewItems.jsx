import { ScrollView, Text, StyleSheet, View } from "react-native";
import ItemScroll from "@/components/scrollView/ItemScroll";

const array = [1,2,3,4,5,6,7,9]

export default function ScrollViewItems() {
  return (
    <ScrollView style={styles.scrollView} >
      { array.map((data, index) => <ItemScroll key={index} />)}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    padding: 9
  },
  text: {
    fontSize: 50,
  },
})
