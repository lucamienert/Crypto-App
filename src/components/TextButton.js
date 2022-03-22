import { Text, TouchableOpacity } from "react-native"

const TextButton = ({ label, onPress }) => {
    return (
        <TouchableOpacity style={{
            height: 60,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 12,
            backgroundColor: '#37E39F'
        }}
            onPress={onPress}>
            <Text style={{ color: '#fff', fontSize: 24 }}>{label}</Text>
        </TouchableOpacity>
    )
}

export default TextButton