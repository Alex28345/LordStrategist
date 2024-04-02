import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: "16%",
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
        height: "12%",
        backgroundColor: '#3b3b3b',
        display: "flex",
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'space-around',
        position: 'absolute',
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
    },

    container: {
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center"
    },

    searchBar: {
        backgroundColor: "#FFF",
        marginTop: "2%",
        borderColor: "black",
        borderWidth: 2,
        width: 350,
        borderRadius: 50,
        height: "6%"
    },

    flatList: {
        height: "65.1%",
        width: "100%",
        display: "flex",
        backgroundColor: "white"
    },

    item: {
        borderColor: "black",
        borderWidth: 2,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: 280,
        height: 280,
        margin: 10,
        backgroundColor: "#e1e1e1",
        borderRadius: 40
    },
    itemText: {
        padding: 2,
        margin: 1,
        fontWeight: "bold",
        borderWidth: 2,
        borderColor: "#ffffff",
        width: "80%",
        height: 25,
        color: "#812700"
    },
    itemButtonDelete: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems:"center",
        width: 150,
        marginTop: 5,
        borderWidth: 2,
        borderRadius: 50,
        backgroundColor: "#ff5d5d"
    },
    itemButtonEdit: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems:"center",
        width: 150,
        marginTop: 5,
        borderWidth: 2,
        borderRadius: 50,
        backgroundColor: "#ffe073"
    },
    itemButtonImage: {
        width: 20,
        height: 20,
        marginLeft: 5
    }

});

export default styles;