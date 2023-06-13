
import { View, StyleSheet, ActivityIndicator, Text } from 'react-native'

export const Loading = () => {
    return (
        <View
            style={styles.activitiContainer}
        >
            <ActivityIndicator
                size={50}
                color={'grey'}
            />
            <Text>... cargando</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    activitiContainer: {
        flex: 1,

        justifyContent: 'center',
        alignItems: "center"
    }

})
