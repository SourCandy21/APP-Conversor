import { Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

// Componente Button com desestruturação correta dos props
export function Button({ variant = "primary", onPress, currency, isSelected }) {


    return (
        <TouchableOpacity
            onPress={onPress}
            style={[
                styles.button,

                isSelected && (variant === "primary" ? styles.buttonPrimary : styles.buttonSecondary)
            ]}
        >
            <Text style={styles.butttontext}>
                {currency.code}
            </Text>
        </TouchableOpacity>
    );
}
