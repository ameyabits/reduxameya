import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View,LayoutAnimation,Platform,UIManager } from 'react-native';
import { Connect } from 'react-redux';
import { CardSection } from '../common/CardSection';
import * as actions from '../actions';
import { connect } from 'react-redux';


class ListItem extends Component {

    componentWillUpdate(){
        if (Platform.OS === 'android') {
            UIManager.setLayoutAnimationEnabledExperimental(true)
            }
        LayoutAnimation.spring();
    }
    renderDescription() {

        const { library, expanded } = this.props;

        if (expanded) {
            return (
                <CardSection>
                <Text style={{flex:1}}>{library.description}</Text>
                </CardSection>
            );
        }
    }

    render() {
        const { titleStyle } = styles;
        const { id, title } = this.props.library;
        return (
            <TouchableWithoutFeedback
                onPress={() => this.props.selectLibrary(id)}
            >
                <View>
                    <CardSection>
                        <Text style={titleStyle} >
                            {title}
                        </Text>
                    </CardSection>
                    {this.renderDescription()}
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15
    }
}

/* here ownProps is the exactly equal to "this.props" that we are going to pass to the ListItem
at the bottom i.e export default connect(mapStateToProps, actions)(ListItem);  */
const mapStateToProps = (state, ownProps) => {
    const expanded = state.selectedLibraryId === ownProps.library.id;
    return {expanded };
};

export default connect(mapStateToProps, actions)(ListItem);