import { StyleSheet } from "react-native-web"

const styles = StyleSheet.create({
    cartao: {
        marginTop: '20px',
        marginBottom: '10px',
        flexDirection: 'column',
        width: "90%",
        height: '300px',
        backgroundColor: '#909090',
        borderRadius: 15
    },
    
    imagem: {
        marginTop: "25px",
        marginBottom: "75px",
        marginLeft: "15px",
        width: "150px",
        height: "200px",
        borderRadius: 15
    },
    
    textos: {
        flexDirection: 'column',
        alignItens: 'center',
        justifyContent: 'center',
        marginLeft: "10px",
        height: '250px'
    },
    
    nomeItem: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: '50px'
    },
    
    descritivo: {
        flexDirection: 'row',
        height: '250px'
    },
    
    botaoView: {
        width: '250px',
        marginRight: '45px',
        marginLeft: '45px',
        marginBottom: '20px'
    },
    
    botao: {
        height: '40px',
        borderRadius: 20,
        marginBottom: '10px'
    },
    poder: {
        fontSize: '19px',
        fontWeight: 'normal'
    },

});

export default styles;