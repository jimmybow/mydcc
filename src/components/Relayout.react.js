import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class Relayout extends Component { 
    constructor(props) {
        super(props);
        this.gd = 0   
        this.if_update = 0         
    }  
    
    componentDidMount() { 
        const {aim, layout, setProps} = this.props;
        this.gd = document.getElementById(aim)
    }
 
    componentWillReceiveProps(nextProps) {
        const {layout, setProps} = this.props
        if ( JSON.stringify(nextProps.layout) != JSON.stringify(layout) ){
            this.if_update = 1
        }
    }
    
    render() {
       const {id, layout, style} = this.props;
       if ( this.if_update == 1 & this.gd != 0 ){
           this.if_update = 0
           Plotly.relayout(this.gd , layout)
       }
       return (
            <div id = {id} style = {style}></div>
        )
    }
}

Relayout.propTypes = {
    id : PropTypes.string.isRequired,
    aim : PropTypes.string.isRequired,
    layout : PropTypes.object,
    style: PropTypes.object
};
