import { StyleSheet, View } from "react-native";
import React from "react";
import { BottomNav } from "../common/bottomNavbar";
import { NavigationProvider } from "../context/NavigationContext";
import { LayoutController } from "./layoutController";

const Timetable = ({ navigation }) => {
    const tableHead= ["Crypto", "Value", "Mkt Cap"];
    const  tableData= [['Bitcoin', '$44,331', '$839,702,328,904'],
                 ['Ethereum', '$3000.9', '$359,080,563,225'],
                 ['Tether', '$1', '$79,470,820,738'],
                 ['BNB', '$413.44', '$69,446,144,361'],
                 ['USD Coin', '$1', '$53,633,260,549'],
     ];
  return (
    
     <View style={styles.container}>
        <Table borderStyle={styles.border}>
          <Row data={tableHead} style={styles.head} textStyle={styles.headText} />
          <Rows data={tableData} style={styles.rows} textStyle={styles.cellText} />
      </Table>
      <NavigationProvider>
              <View style={styles.container}>
                  <LayoutController />
                  <BottomNav navigation={navigation} />
              </View>
          </NavigationProvider>
          </View>
        );


};

export default Timetable;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  
});
