import { useState } from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-controller'

const TestForm = () => {
    const [input1, setInput1] = useState('')
    const [input2, setInput2] = useState('')
    const [input3, setInput3] = useState('')
    const [input4, setInput4] = useState('Lorem ipsum dolor sit amet. Et aspernatur quibusdam 33 ducimus veniam vel cupiditate enim ut repudiandae dolor. Ut minima molestias eum impedit consequuntur qui odio ullam qui possimus similique qui tenetur voluptas eos assumenda eveniet aut odit omnis. Et dicta distinctio qui autem consequatur sit iste temporibus. Vel molestiae eligendi qui vitae eligendi in totam doloribus vel Quis dolorem ad consequuntur vitae est recusandae molestiae nam voluptatibus distinctio.')
    const [input5, setInput5] = useState('')

    return (
        <KeyboardAwareScrollView
            style={styles.container}
            keyboardDismissMode='on-drag'
        >
            <View style={styles.wrapper}>
                <Text style={styles.label}>Input 1</Text>
                <TextInput
                    style={styles.input}
                    value={input1}
                    onChangeText={setInput1}
                    placeholder='Enter input'
                    multiline
                />
            </View>
            <View style={styles.wrapper}>
                <Text style={styles.label}>Input 2</Text>
                <TextInput
                    style={styles.input}
                    value={input2}
                    onChangeText={setInput2}
                    placeholder='Enter input'
                    multiline
                />
            </View>
            <View style={styles.wrapper}>
                <Text style={styles.label}>Input 3</Text>
                <TextInput
                    style={styles.input}
                    value={input3}
                    onChangeText={setInput3}
                    placeholder='Enter input'
                    multiline
                />
            </View>
            <View style={styles.wrapper}>
                <Text style={styles.label}>Input 4</Text>
                <TextInput
                    style={styles.input}
                    value={input4}
                    onChangeText={setInput4}
                    placeholder='Enter input'
                    multiline
                />
            </View>
            <View style={styles.wrapper}>
                <Text style={styles.label}>Input 5</Text>
                <TextInput
                    style={styles.input}
                    value={input5}
                    onChangeText={setInput5}
                    placeholder='Enter input'
                    multiline
                />
            </View>
        </KeyboardAwareScrollView>
    )
}
export default TestForm

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'lightgreen',
    },
    wrapper: {
        backgroundColor: 'lightgray',
        // padding: 20,
    },
    label: {
        fontSize: 30,
        fontWeight: 600,
        color: 'gray'
    },
    input: {
        fontSize: 40
    }
})