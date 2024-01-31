
import React from "react";
import { View, Text, StyleSheet } from "react-native";
// import { Table, Row, Rows } from 'react-native-table-component';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
    marginTop: 120,
    
  },
  card: {
    width: 200,
    height: 100,
    margin: 10,
    backgroundColor: "green",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 8,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 7,
  },
  cardText: {
    fontSize: 20,
    color: "white",
  },
  
 
 
  
});

export const Home = () => {

  
    

    
  const digits = ["Courses", "Teachers","Timetable", "Feedback"];
  

  return (
    <View style={styles.container}>
      
      {digits.map((digit) => (
        <View key={digit} style={styles.card}>
          <Text style={styles.cardText}>{digit}</Text>
        </View>
      ))}
       
    </View>
  );
};
