import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {Directory, Paths} from 'expo-file-system';

const Test = () => {
    useEffect(() => {
        function printDirectory(directory: Directory, indent = 0) {
            console.log(`${' '.repeat(indent)} DIR ${directory.name}`);

            const contents = directory.list();

            for (const item of contents) {
                if (item instanceof Directory) {
                    printDirectory(item, indent + 4);
                } else {
                    console.log(`${' '.repeat(indent + 4)} FILE ${item.name} (${item.size} bytes)`);
                }
            }
        }

        try {
            printDirectory(new Directory(Paths.bundle));
        } catch (e) {
            console.error(e);
        }
    }, []);
    
    return (
        <View>
            <Text>Hello</Text>
        </View>
    );
}

export default Test;
