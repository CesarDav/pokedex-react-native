
import { FC, useEffect, useState } from 'react'
import { StyleSheet, View, TextInput, StyleProp, ViewStyle } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { useDebouncedValue } from '../hooks/useDebouncedValue'

interface Props {
    style?: StyleProp<ViewStyle>,
    onDebounce: (value: string) => void
}

export const SearchInput: FC<Props> = ({ style, onDebounce }) => {

    const [textValue, setTextValue] = useState<string>('');

    const debouncedValue = useDebouncedValue(textValue);

    useEffect(() => {
        onDebounce(debouncedValue)
    }, [debouncedValue])

    return (
        <View style={{
            ...styles.container,
            ...style as any
        }} >
            <View style={styles.textBackground}>
                <TextInput
                    placeholder='Buscar Pokemon'
                    style={styles.textInput}
                    autoCapitalize='none'
                    autoCorrect={false}
                    value={textValue}
                    onChangeText={setTextValue}
                />
                <Icon
                    name='search-outline'
                    color={'grey'}
                    size={30}
                />
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        // backgroundColor: 'red'
    },
    textBackground: {
        backgroundColor: '#F3F1F3',
        borderRadius: 50,
        height: 40,
        paddingHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        /// shadow
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    textInput: {
        flex: 1,
        fontSize: 18,
        top: 2
    }
})