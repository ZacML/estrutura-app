import { useState } from "react";
import { getRandomChallenge } from "../../services/challangeService";
import { useScore } from "../../hooks/useScore";
import { Button, Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { ChallengeCard } from '../../components/ChallengeCard';
import { COLORS } from "../../styles/theme";

export const HomeScreen = () => {
    const [current, setCurrent] = useState(getRandomChallenge());
    const [playerName, setPlayerName] = useState('');
    const { score, addPoint, removePoint } = useScore();

    return (
        <View style={styles.container}>

            <Image
                source={require('../../assets/images/logo.png')}
                style={styles.logo}
                resizeMode="contain"
            />

            <ChallengeCard challenge={current} />

            <View style={styles.buttonsContainer} />

            <TextInput
                placeholder="Digite seu nome"
                style={styles.input}
                value={playerName}
                onChangeText={setPlayerName}
            />

            <View style={styles.buttonsContainer}>

                <TouchableOpacity
                    style={[styles.button, { backgroundColor: COLORS.primary }]}
                    onPress={() => {
                    addPoint();
                    setCurrent(getRandomChallenge());
                    }}>
                    <Text style={styles.buttonText}>Cumpriu</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.button, { backgroundColor: COLORS.secundary }]}
                    onPress={() => {
                    removePoint();
                    setCurrent(getRandomChallenge());
                    }}
                >
                    <Text style={styles.buttonText}>Desistiu</Text>
                </TouchableOpacity>

            </View>

            <Text>
                Jogador: {playerName}
                {' | '}
                Pontuação: {score}
            </Text>

        </View>
    );
};