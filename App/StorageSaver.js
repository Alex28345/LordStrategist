import Storage from "react-native-storage";
import AsyncStorage from "@react-native-async-storage/async-storage";

const storage = new Storage({
    size: 1000,
    storageBackend: AsyncStorage,
    defaultExpires: 1000*3600*24,
    enableCache: true,
    sync: {}
});

async function savePlayerListToStorage(playerList) {
    try {
        await storage.save({ key: 'playerList', data: JSON.stringify(playerList)});
    } catch (error) {
        console.log(error);
    }
}

async function loadPlayerListFromStorage() {
    try {
        const storedPlayerList = await storage.load({ key: 'playerList' });
        return JSON.parse(storedPlayerList);
    } catch (error) {
        console.log(error);
        return [];
    }
}

export { savePlayerListToStorage, loadPlayerListFromStorage };