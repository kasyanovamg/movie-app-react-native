import React from 'react';
import { ScrollView, StyleSheet, Image, Text, View, Dimensions } from 'react-native';

export default class CurrentMovieScreen extends React.Component {
  static navigationOptions = {
    title: 'Current Movie',
  };

  render() {
    const movie = this.props.navigation.state.params ? this.props.navigation.state.params.item : '';

    return (
      <ScrollView>

        {(movie !== '') ?
          <View style={styles.container}>
            <Image style={{ width: Dimensions.get('window').width - 40, height: 400 }}
              // if posterUrl is empty shows random grey square that should appear when the movie doesn't have a poster
              source={{ uri: movie.posterUrl || "http://www.arenakettering.co.uk/wp-content/uploads/grey-square.png" }}
              defaultSource={{ uri: movie.posterUrl || "http://www.arenakettering.co.uk/wp-content/uploads/grey-square.png" }}
            />
            <Text style={styles.title}>{movie.title}, {movie.year}</Text>
            <Text style={styles.discription}>Director: {movie.director.join(", ")}</Text>
            <Text style={styles.discription}>Actors: {movie.actors}</Text>
            <Text >{movie.plot}</Text>
          </View>
          :
          <View style={styles.container}>
            <Text style={styles.title} >Tap on the movie in the search screen to see info</Text>
          </View>
        }

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
  },
  discription: {
    fontSize: 12,
  },
});
