import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class Relayout extends Component {    
    render() {
       const {id, aim, layout, style} = this.props;
       if (document.getElementById(aim) && layout.disable == null) {
         var gd = document.getElementById(aim);
         Plotly.relayout(gd, layout);
       
       }
         
       return (
            <div id = {id} style = {style}></div>
        );
    }
}

Relayout.propTypes = {
    id : PropTypes.string.isRequired,
    aim : PropTypes.string.isRequired,
    layout : PropTypes.object,
    style: PropTypes.object
};

Relayout.defaultProps = {
    layout : {'title':''}  
}        