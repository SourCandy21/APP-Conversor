import { StyleSheet } from "react-native"; // ✅ Corrigido
import { colors } from "../../styles/colors";

export const styles = StyleSheet.create({
    container: {
        marginBottom: 16,
    },
    label: {
        color: colors.textSecondary,
        marginBottom: 8,
        fontSize: 14
    },
    input: {
        backgroundColor: colors.inputBackground,
        color: colors.text,
        fontSize: 16, 
        fontWeight: 'bold',
        padding: 20,
        borderRadius: 8
    }
});
