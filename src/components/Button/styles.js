import { StyleSheet } from "react-native";
import { colors } from "../../styles/colors";

export const styles = StyleSheet.create({
    button:{
        backgroundColor: colors.inputBackground,
        paddingHorizontal: 20,
        paddingVertical: 11,
        margin: 5, 
        borderRadius: 10
    }, 
    butttontext:{
        color: colors.text,
        fontWeight: '700'
    },
    buttonPrimary:{
        backgroundColor: colors.primary
    },
    buttonSecondary:{
        backgroundColor: colors.secondary
    }
})