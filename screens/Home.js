import React, {Component} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import { bindActionCreators} from 'redux'
import { connect } from 'react-redux'

import { requestApiData} from '../src/actions'
import {fetchData} from '../src/api'
import { TouchableOpacity } from 'react-native-gesture-handler';
import Lists from './Lists'


class Home extends Component {
        constructor(props){
            super(props)
            this.state= { }
        }
        componentDidMount(){
       this.props.requestApiData()
    }
    person = (x, i) => 
        <View key={x.id.value} >
            <View>
                {x.gender}
            </View>    
        </View>
    render () {
        const {results = []} = thi.props.data
         return (
            <View style={styles.container}>
                 {results.map(this.person)}
                
            </View>
        );
    }
}


const mapStateToProps = state =>({data: state.data})

const mapDispatchToProps = dispatch => 
    bindActionCreators({ requestApiData}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Home)

const styles= StyleSheet.create ({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F5FCFF',
    },
    title : {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
})


//<TouchableOpacity onPress={() => this.props.navigation.navigate('Lists')}>

{/*<TouchableOpacity onPress={() => this.props.state }>
                    <Text style={styles.title}>
                        Home Screen
                    </Text>
                </TouchableOpacity>
             */}