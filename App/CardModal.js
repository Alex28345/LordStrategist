import {Modal, Text, TextInput, TouchableOpacity, View} from "react-native";
import {useEffect, useState} from "react";
import {addOrUpdatePlayer} from "./PlayerSlice";
import {useDispatch, useSelector} from "react-redux";
import {validate} from "@babel/core/lib/config/validation/options";
const CardModal = ({ modalVisible, setModalVisible, id = null}) => {
    const [actualId, setActualId] = useState(id);
    const [name, setName] = useState('');
    const [race, setRace] = useState('');
    const [hp, setHp] = useState('');
    const [mp, setMp] = useState('');
    const [role, setRole] = useState('');
    const [guild, setGuild] = useState('');

    const data = id !== null ? useSelector(state => state.main.playerList.find(player => player.id === id)) : null;
    useEffect(() => {
        if (data) {
            setName(data.name);
            setRace(data.race);
            setHp(data.hp.toString());
            setMp(data.mp.toString());
            setRole(data.role);
            setGuild(data.guild);
        }
    }, [data]);


    const dispatch = useDispatch();

    const validateAction = () => {
        dispatch(addOrUpdatePlayer({id: actualId, name: name, race: race, hp: hp, mp: mp, role: role, guild: guild}));
        // Reset all states
        setName('');
        setRace('');
        setHp('');
        setMp('');
        setRole('');
        setGuild('');
        setModalVisible(false);
    };

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
        >
            <TouchableOpacity
                style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
                activeOpacity={1}
                onPressOut={() => setModalVisible(false)}
            >
                <TouchableOpacity
                    activeOpacity={1}
                    onPress={(e) => e.stopPropagation()}
                >
                <View style={{ backgroundColor: 'white', padding: 50, borderRadius: 5, borderWidth: 5}}>
                    <TextInput
                        style={{ borderWidth: 1, borderRadius: 10, marginBottom: 10, padding: 3}}
                        placeholder="Nom"
                        value={name}
                        onChangeText={setName}
                    />
                    <TextInput
                        style={{ borderWidth: 1, borderRadius: 10, marginBottom: 10, padding: 3}}
                        placeholder="Race"
                        value={race}
                        onChangeText={setRace}
                    />
                    <TextInput
                        style={{ borderWidth: 1, borderRadius: 10, marginBottom: 10, padding: 3}}
                        placeholder="HP"
                        value={hp}
                        onChangeText={setHp}
                        keyboardType="numeric"
                    />
                    <TextInput
                        style={{ borderWidth: 1, borderRadius: 10, marginBottom: 10, padding: 3}}
                        placeholder="MP"
                        value={mp}
                        onChangeText={setMp}
                        keyboardType="numeric"
                    />
                    <TextInput
                        style={{ borderWidth: 1, borderRadius: 10, marginBottom: 10, padding: 3}}
                        placeholder="Role"
                        value={role}
                        onChangeText={setRole}
                    />
                    <TextInput
                        style={{ borderWidth: 1, borderRadius: 10, marginBottom: 10, padding: 3}}
                        placeholder="Guild"
                        value={guild}
                        onChangeText={setGuild}
                    />
                    <TouchableOpacity
                        onPress={validateAction}
                        style={{ backgroundColor: 'blue', padding: 10, alignItems: 'center', borderRadius: 5, marginTop: 10 }}
                    >
                        <Text style={{ color: 'white' }}>Valider</Text>
                    </TouchableOpacity>
                </View>
                </TouchableOpacity>
            </TouchableOpacity>
        </Modal>
      );
}

export default CardModal;