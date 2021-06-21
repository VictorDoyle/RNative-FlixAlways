import React, { Component } from "react";
import MovieCard from "../MovieCard/MovieCard";
import { FlatList } from "react-native";

export default class InfiniteRecommendations extends Component {
    state = {
      data: [],
      page: 1,
      loading: true,
      loadingMore: false,
      error: null
    }; 
  
   // fetch movies and update state
  
    _handleLoadMore = () => {
      this.setState(
        (prevState, nextProps) => ({
          page: prevState.page + 1,
          loadingMore: true
        }),
        () => {
            /* change to gql */
          this._fetchAllMovies();
        }
      );
    };
  
   render() {
      return (
        
           <FlatList
            contentContainerStyle={{
              flex: 1,
              flexDirection: 'column',
              height: '100%',
              width: '100%'
            }}
            data={this.state.data}
            renderItem={({ item }) => (
              <View
                style={{
                  marginTop: 25,
                  width: '50%'
                }}
              >
                <MovieCard  {...movie} name={item.name} imageUrl={item.image_url} />
              </View>
              
            )}
            onEndReached={this._handleLoadMore}
            onEndReachedThreshold={0.5}
            initialNumToRender={10}
          />
      );
    }
  }