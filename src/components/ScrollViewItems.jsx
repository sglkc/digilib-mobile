import { ScrollView, Text, StyleSheet } from "react-native";


export default function ScrollViewItems() {
    return(
        <ScrollView style={styles.scrollView} >
            <Text style={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
            </Text>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    scrollView: {
        marginTop:230,
        width: '100%',
        height:'100%',
        backgroundColor: 'white',
        marginHorizontal: 20,
        borderTopLeftRadius: 9,
        borderTopRightRadius: 9,
        padding:9
      },
      text: {
        fontSize: 12,
      },
})