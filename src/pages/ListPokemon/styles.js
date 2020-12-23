import {StyleSheet} from 'react-native'

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    presentationFont: {
        color: 'white', 
        fontSize: 22, 
        fontWeight: 'bold'
    },
    imagemArrow: {
        backgroundColor: 'transparent',
        height: 30,
        width: 30,
    },
    backgroundColor: {
        backgroundColor: 'transparent',
        height: '100%',
        width: '100%',
        position: 'absolute',
    },
    imagemSearch: {
        backgroundColor: 'transparent',
        height: 20,
        width: 20,
        marginRight: 20,
    },
    arrowButton: {
        backgroundColor: 'transparent', 
        marginTop: '2.55%', 
        marginHorizontal: '5%',
        padding: '2%', 
        marginBottom: '2.5%'
    },
    containerArrows: {
        flexDirection: 'row', 
        justifyContent: 'space-between', 
    },
    count: {
        fontWeight: 'bold', 
        fontSize: 25, 
        color: '#c3c3c3'
    },
    header: {
        height: 50, 
        width: '100%', 
        justifyContent: 'center', 
        alignItems: 'center'
    },
    containerHeader: {
        flex: 1, 
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'center'
    },
    search: {
        color: 'white', 
        fontSize: 17, 
        fontWeight: 'bold', 
        marginLeft: '2%'
    },
    input: {
        height: 80, 
        color: 'white', 
        fontSize: 17
    }
});