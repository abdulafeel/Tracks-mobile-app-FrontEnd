import React,{useContext} from "react";
import {Context as TrackContext} from '../context/TrackContext';
import { FlatList,TouchableOpacity,StyleSheet,Text } from "react-native";
import { ListItem } from "react-native-elements";
import { NavigationEvents } from "react-navigation";


const TrackListScreen=({navigation})=>{
    const {state,fetchTracks}= useContext(TrackContext);

    return (
        <>
        <NavigationEvents onWillFocus={fetchTracks}/>
        {/*<Text style={{fontSize:48}}>TrackList Screen</Text>*/}
        <FlatList
        data={state}
        keyExtractor={item=>item._id}
        renderItem={({item})=>{
            return(
                <TouchableOpacity onPress={()=>
                    navigation.navigate('TrackDetail',{_id:item._id})
                }>
                    <ListItem>
                        <ListItem.Content>
                            <ListItem.Title>{item.name}</ListItem.Title>
                        </ListItem.Content>
                        <ListItem.Chevron/>
                    </ListItem>
                  
                </TouchableOpacity>
            )
        }}
        
        />

        </>
    )
};

TrackListScreen.navigationOptions={
    title:'Tracks'
};
const styles= StyleSheet.create({});

export default TrackListScreen;