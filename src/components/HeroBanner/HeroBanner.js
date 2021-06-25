import React, { useEffect, useState } from 'react';
import { Container, Text, Item, Input, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
import { Link, useHistory } from "react-router-native";
import { useLazyQuery } from "@apollo/client";
import { StyleSheet, SafeAreaView} from 'react-native';
import { MOVIESEARCH } from "../../graphql/operations";
import { auto } from 'async';

function HeroBanner(props) {
  const [isHidden, setIsHidden] = useState(true)
  const [searchTerm, setSearchTerm] = useState(undefined);
  const [results, setResults] = useState();


  const history = useHistory();
  function handleClick(path) {
    history.push(path);
  }
  const [movieSearch, { loading, data }] = useLazyQuery(MOVIESEARCH, {
    fetchPolicy: "no-cache",
  });


  useEffect(() => {
    if (searchTerm != undefined) {
      if (data && !loading) {
        setResults(data);
      }
    }
  }, [data, loading]);

  const onChangeTerm = (e) => {
    setSearchTerm(e.target.value);
    movieSearch({ variables: { movieSearchMovieTitle: searchTerm } });
  };

  const onClickLink = () => {
    setSearchTerm(undefined);
  };

  const SearchMapper = () => (
    <>
      {results ? (
        <>
          {results.movieSearch.map((movie, i) => (
            <>
              <Link to={`/movie/${movie.id}`}>
              <List>
                <ListItem 
                style={styles.searchItemResult}
                {...movie}
                key={i + 1}>
                  {movie.title}
                </ListItem>
              </List>
              </Link>
            </>
          ))}
        </>
      ) : null}
    </>
  );



    return(
        <>
        <SafeAreaView>

        
        <Header transparent>
          {/* if history.props has back[0] or past, show below */}
          {/* <Left>
            <Button transparent>
              <Icon name='arrow-back'/>
            </Button>
          </Left> */}
     {/*      <Body>
            <Title>{props.headerTitle}</Title>
          </Body> */}
          <Right>
            
            {/* SearchBar */}
            {isHidden === true ? 
              <Button transparent>
              <Icon name='search' onPress={() => {setIsHidden(false)}}/>
            </Button>
                :
                <>
                <Item style={styles.searchBarInput}>
                  <Input placeholder="Search" 
                  onChange={(e) => onChangeTerm(e)}
                  style={styles.searchBarInput}/>
              
                <SearchMapper />
                </Item>
                <Button transparent onPress={() => {onClickLink; setIsHidden(true)}}>
                  <Text>Search</Text>
                </Button>
              </>
              
              }
            
            {/* send to Liked Movies */}
            {isHidden === false ? <>
            </> : 
            <>
            <Button transparent onPress={() => handleClick("saved")}>
           
                  <Icon name="bookmark"/>
     
            </Button>
            </>}
         
            {/* Send To App Tutorial */}
            <Button transparent>
              <Icon name='help-circle' />
            </Button>
          </Right>
        </Header>
        </SafeAreaView>
    
        </>
    )
}


const styles = StyleSheet.create({

  searchItemResult: {
   
  },
  searchBarInput: {
    maxWidth: "70%",
  },

})
export default HeroBanner