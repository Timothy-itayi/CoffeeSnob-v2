import { StyleSheet } from 'react-native';

export default StyleSheet.create({
////////  APP.js //////

    statusBar: {
        style: 'dark', // Default style
        backgroundColor: '#000', // Default background color
    },
 
    ////// Home.js//////
   ////'#FFFDFC'
   headerRowContainer:{
  
    marginTop: 0,
   
    
   },
    headerTitleContainer: {
  
        marginVertical: 0,
        marginTop: 0,
        paddingBottom: 0,
        paddingTop: 4,
       paddingLeft: 5,
        
    },

    headerText: {
        color: 'black',
        fontSize: 30,
        paddingLeft: 16,
       fontFamily: 'SlingBold',
       letterSpacing: -1, 
    },
///////Modal Selector STYLING /////////////// 
HeaderRowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
     // Adjust as needed
    marginleft: 5,
  },   
rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5, // Adjust as needed
    marginLeft: 10,
  },
    modalContainer: {
  flex: 1,
     
      
    },
    modalPickerSelectStyle:{
    fontFamily: 'Inter-SemiBold',
    
  },

  selectedCityMessage:{
    marginTop: -20,
    marginBottom: 15,

  },
// /// ///CAFE FILTER STYLING   ////
   
    buttonText: {
        fontFamily: 'Inter-SemiBold',
        fontSize: 20,
        color: 'grey',
        marginRight: 16,
    },
    cafeFilterContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginVertical: 2,
        marginHorizontal: 40,
        marginTop: -10,
       
    },

    cafeFilterButton: {
    padding: 10 ,
    borderWidth: 1, 
    borderRadius: 30, 
    
    },
    cafeFilterButtonText: {
        fontFamily: 'Inter-SemiBold',
    },
    activeCafeFilterButtonText: {
        fontFamily: 'Inter-SemiBold',
    },
        activeCafeFilterButton: {
        backgroundColor: '#315F72',
    },
    ///// CafeCard.js Styles////// 
    cardContainer: {
        backgroundColor: '#fff',
       marginBottom: 20,
       marginTop: 0,
       zindex: 1,
     
    },
    cardImage: { 
        width: '100%',
        height: 361,
   
    },
  
    cardTitle: { 
        fontSize: 50,
       
        fontFamily: 'SlingBold',
        color: 'black',
        marginLeft: 16,
        marginTop: 20,
        marginBottom: 0,
        marginRight: 16,
    },
    cardDescription: { 
        marginTop: 10,
        marginBottom: 6,
        fontSize: 18,
        color: '#171414',
        fontFamily: 'Inter-SemiBold',
        marginLeft: 16,
        marginRight: 16,
       
        
    },
    cafeCardRating: {
        color: '#A6A2A0',
        marginTop: 2,
        fontSize: 16,
    },
    cardReviews: {
      color: '#A6A2A0',
      fontSize: 16,
    },
    cardRating: { 
      
        fontSize: 16,
        color: '#A6A2A0',
        flexDirection: 'row',
        marginLeft: 16,
        alignItems: 'center',
        marginTop: 0
    },
    cardLocation: { 
        marginTop: 5,
        fontSize: 16,
        color: '#A6A2A0',
        fontFamily: 'Inter-Regular',
        marginLeft: 16,
        width:'60%',
        flexWrap: 'wrap'
    },
 ///// CafeCard.js Styles////////// 
    
 ////////////Opening/ Closing styles ////////
    hoursContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5,
        marginLeft: 16,
    },
    cardOpeningHours: { 
        marginTop: 0,
        fontSize: 16,
    
        fontFamily: 'Inter-SemiBold',
       
    },
   
    space: {
        marginHorizontal: 5,
    },

    cardCloses: { 
        marginTop: 0,
        fontSize: 16,
        color: '#A6A2A0',
        fontFamily: 'Inter-Regular',
        
    },

   /// // Rating / Stars styles ////
    ratingContainer: {
        flexDirection: 'row',
        marginLeft: 16,
        alignItems: 'center',
        marginTop: 0,
       
    },
    starStyle: {
        flexDirection: 'row',
        marginLeft: 5,
        alignItems: 'center',
        marginTop: 0,
        
   
    },
 //   /// // Rating / Stars styles ////
  

    // CafeList styles 
 
 
    listContent: {
       backgroundColor: '#fff',
        paddingBottom: 200,
    },
});