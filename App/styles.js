import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 130,
        backgroundColor: '#3b3b3b',
        display:'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomColor: "#282828",
        borderBottomWidth: 3
    },
    headerTitle: {
        marginTop: '10%',
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
    },
    body: {
      width: "100%",
      height: "100%",
    },
    image: {
        width: 50,
        height: 50
    },
    footer: {
        width: '100%',
        height: 100,
        backgroundColor: '#3b3b3b',
        display: "flex",
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'space-around',
        position: 'fixed',
        bottom: 0,
        borderTopWidth: 3,
        borderTopColor: "#282828"
    },
    footerImage: {
        marginBottom: 10,
        width: 50,
        height: 50
    },
    footerPlusBackgroundShadow: {
        marginBottom: 60,
        width: 105,
        height: 105,
        backgroundColor: "#282828",
        borderRadius: 65,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    footerPlusBackground: {
        width: 100,
        height: 100,
        backgroundColor: "#3b3b3b",
        borderRadius: 60,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    plusFooterImage: {
        padding: 35,
        width: 50,
        height: 50,
        borderRadius: 50,
    }
});

export default styles;