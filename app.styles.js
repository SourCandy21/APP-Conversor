import { ScrollView, StyleSheet } from "react-native"
import { colors } from "./src/styles/colors"
import { currencies } from "./src/constants/currencies"


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background
    },
    ScrollView: {
        flexGrow: 1,
    },
    content: {
        paddingHorizontal: 24,
        paddingTop: 80,
        paddingBottom: 24
    },
    header: {
        marginBottom: 32
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        color: colors.text,
        marginBottom: 10,
    },
    subtitle: {
        paddingLeft: 7,
        color: '#c3c5c9ff',
        fontSize: 16
    },
    card: {
        backgroundColor: colors.cardBackground,
        borderRadius: 16,
        padding: 24,
        marginBottom: 23
    },
    label: {
        color: colors.textSecondary,
        marginBottom: 8,
        fontSize: 18
    },
    currencyGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginHorizontal: -4,
        marginBottom: 12,
        alignItems: "center",
        justifyContent: "center"

    },
    swapButton: {
        backgroundColor: colors.inputBackground,
        paddingVertical: 16,
        paddingHorizontal: 24,
        borderRadius: 24,
        marginBottom: 24
    },
    swapButtonText:{
        color: '#ffffff',
        textAlign: "center",
        fontSize: 18,
        fontWeight: '600'
    },
    convertButton: {
        backgroundColor: colors.primary,
        paddingVertical: 16,
        paddingHorizontal: 24,
        borderRadius: 24,
        marginBottom: 24
    },
    convertButtonDisable:{
        backgroundColor: colors.disabled,
    }
})