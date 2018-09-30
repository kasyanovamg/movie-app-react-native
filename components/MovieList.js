import React from 'react';
import { Text, View, Image, ActivityIndicator, StyleSheet, Dimensions, TouchableOpacity, Alert } from 'react-native';

export class MovieList extends React.Component {
    constructor(props) {
        super(props);
        this.state = { current: '' }
    }

    render() {

        if (this.props.loading) {
            return (
                <View style={{ flex: 1, padding: 20 }}>
                    <ActivityIndicator />
                </View>
            )
        }

        return (
            <View style={{ alignItems: 'center' }}>

                <View style={styles.movieList}>
                    {this.props.movies.length > 0 ?
                        this.props.movies.map(item =>
                            <View key={item.id} style={{ paddingTop: 20 }} >
                                <TouchableOpacity onPress={() =>
                                    this.props.navigate('CurrentMovie', { item }) } >
                                    <View>
                                    <Image style={{ width: Dimensions.get('window').width / 2 - 40, height: 150 }}
                                        // if posterUrl is empty shows random grey square that should appear when the movie doesn't have a poster
                                        source={{ uri: item.posterUrl || "http://www.arenakettering.co.uk/wp-content/uploads/grey-square.png" }}
                                        defaultSource={{ uri: item.posterUrl || "http://www.arenakettering.co.uk/wp-content/uploads/grey-square.png" }}
                                    />
                                    <Text style={{ width: 150 }}>{item.title}, {item.year}</Text>
                                </View>
                                </TouchableOpacity>
                            </View>
                ) :
                        <Text>No movies found</Text>
                    }
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    movieList: {
        flex: 1,
        padding: 20,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
})