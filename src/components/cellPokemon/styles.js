import {StyleSheet} from 'react-native'

export default StyleSheet.create({

    gridButton: {
        backgroundColor: 'transparent', 
        width: '50%'
    },
    grid: {
        flex: 1,
        margin: '5%',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
        elevation: 5.5,
        borderBottomWidth: 0
    },
    fonte: {  
        color: 'white',
        fontSize: 22,
        fontWeight: 'bold',
        marginHorizontal: '7%',
        marginBottom: '10%'
    },
    indexFont: {
        alignSelf: 'flex-start', 
        marginLeft: '3%',
        marginTop: '2%', 
        color: 'white'
    },
    imagem: {
        backgroundColor: 'transparent',
        height: 100,
        width: 100
    },
});