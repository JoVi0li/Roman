import React, { Component } from 'react';
import { FlatList, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import api from '../services/api';

export default class ProjectRegister extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            theme: '',
            description: ''
        }
    }

    // postProjects = async () => {
    //     const resposta = await api.post('/projetos');
    //     this.setState({ projectList: resposta.data })

    // };

    // componentDidMount() {        
    //     this.postProjects();
    // };


    render() {

        return (

            <View style={styles.main}>

                {/* Cabeçalho - Header */}
                <View style={styles.mainHeader}>
                    <View style={styles.mainHeaderRow}>
                        <Text style={styles.mainHeaderText}>Cadastro</Text>
                    </View>

                    <View style={styles.mainHeaderLine} />

                    <Image
                        source={require('../../assets/img/logout1.png')}
                        style={styles.tabBarIcon}
                    />

                </View>                

                <View style={styles.mainHeader}>

                    <TextInput
                        style={styles.inputRegister}
                        placeholder='Título'
                        placeholderTextColor='#8D2DC2'
                        keyboardType='text'
                        onChangeText=''
                    />

                    <TextInput
                        style={styles.inputRegister}
                        placeholder='Tema'
                        placeholderTextColor='#8D2DC2'
                        keyboardType='text'                    
                        onChangeText=''
                    />

                    <TextInput
                        style={styles.inputRegister}
                        placeholder='Descrição'
                        placeholderTextColor='#8D2DC2'
                        keyboardType='text'                    
                        onChangeText=''
                    />

                    <TouchableOpacity
                        style={styles.btnRegister}
                        onPress={this.realizarLogin}
                    >
                        <Image
                            source={require('../../assets/img/cadastro.png')}
                            style={styles.imgBtnRegister}
                        />

                    </TouchableOpacity>
                </View>


            </View>





        );
    }
}

const styles = StyleSheet.create({

    main: {
        flex: 1,
        backgroundColor: '#FFF'
    },

    // cabeçalho
    mainHeader: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'blue',
        top: -100

    },

    mainHeaderRow: {
        flexDirection: 'row'
    },

    tabBarIcon: {
        width: 25,
        height: 25,
        marginTop: 15,
        tintColor: '#8D2DC2'
    },

    imgBtnRegister: {
        width: 20,
        height: 20,  
              
    },

    // imagem do cabeçalho
    mainHeaderImg: {
        width: 22,
        height: 22,
        tintColor: '#ccc',
        marginRight: -5,
        marginTop: -12
    },
    // texto do cabeçalho
    mainHeaderText: {
        fontSize: 16,
        letterSpacing: 2,
        color: '#8D2DC2',
        fontFamily: 'Open Sans'
    },
    // linha de separação do cabeçalho
    mainHeaderLine: {
        width: 180,
        paddingTop: 10,
        borderBottomColor: '#B338F5',
        borderBottomWidth: 1,

    },


    // conteúdo do body
    mainBody: {
        flex: 4,
        // backgroundColor: 'red'
    },
    // conteúdo da lista
    mainBodyContent: {
        paddingTop: 30,
        paddingRight: 50,
        paddingLeft: 50
    },
    flatItemRow: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        marginTop: 30
    },
    flatItemContainer: {
        flex: 1
    },
    flatItemTitle: {
        fontSize: 16,
        color: 'black',
        fontFamily: 'Open Sans Light'
    },
    flatItemInfo: {
        fontSize: 12,
        // #RRGGBB
        // #RGB
        color: '#999',
        lineHeight: 20
    },
    flatItemImg: {
        justifyContent: 'center'
    },
    flatItemImgIcon: {
        width: 26,
        height: 26,
        tintColor: '#B727FF'
    },

    inputRegister: {
        width: 200,
        marginBottom: 40,
        fontSize: 16,
        color: '#8D2DC2',
        borderColor: '#8D2DC2',
        borderBottomWidth: 2
    },

    btnRegister: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 38,
        width: 200,
        backgroundColor: '#561B75',
        borderColor: '#8D2DC2',
        borderWidth: 1,
        borderRadius: 4,
    },

    btnLoginRegister: {
        fontSize: 12,
        color: '#FFF',
        letterSpacing: 6,
        textTransform: 'uppercase'
    }

});