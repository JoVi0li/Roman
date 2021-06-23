import React, { Component } from 'react';
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import api from '../services/api';

export default class ProjectList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            projectList: []
        }
    }

    // getProjects = async () => {
    //     const resposta = await api.get('/projetos');
    //     this.setState({ projectList: resposta.data })

    // };

    // componentDidMount() {        
    //     this.getProjects();
    // };


    render() {

        return (

            <View style={styles.main}>

                {/* Cabeçalho - Header */}
                <View style={styles.mainHeader}>
                    <View style={styles.mainHeaderRow}>
                        <Text style={styles.mainHeaderText}>Lista de Projetos</Text>
                    </View>

                    <View style={styles.mainHeaderLine} />

                    <Image
                        source={require('../../assets/img/logout1.png')}
                        style={styles.tabBarIcon}
                    />

                </View>

                {/* Corpo - Body - Section
                <View style={styles.mainBody}>
                    <FlatList
                        contentContainerStyle={styles.mainBodyContent}
                        data={this.state.projectList}
                        keyExtractor={item => item.nomeProjeto}
                        renderItem={this.renderItem}
                    />
                </View> */}

            </View>
        );
    }

    renderItem = ({ item }) => (

        <View style={styles.flatItemRow}>
            <View style={styles.flatItemContainer}>
                <Text style={styles.flatItemTitle}>Projeto Gufi</Text>
                <Text style={styles.flatItemInfo}>Tema React Native</Text>
                <Text style={styles.flatItemInfo}>Projeto da sprint Front End para mobile</Text>
            </View>

        </View>
    )

}

const styles = StyleSheet.create({

    main: {
        flex: 1,
        backgroundColor: '#F1F1F1'
    },

    // cabeçalho
    mainHeader: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'blue'
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
    }

});