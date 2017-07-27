import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class Change_trace extends Component {    
    render() {
       const {id, aim, data, style} = this.props;
       if (document.getElementById(aim) && data.disable == null) {
         var gd = document.getElementById(aim);
         if (gd.data[0] != null) Plotly.deleteTraces(gd, 0);
         Plotly.addTraces(gd, data);
       }
       return (
            <div id = {id} style = {style}></div>
        );
    }
}

Change_trace.propTypes = {
    id : PropTypes.string.isRequired,
    aim : PropTypes.string.isRequired,
    data : PropTypes.object,
    style: PropTypes.object
};

Change_trace.defaultProps = {
    data : {x:[0], y:[0]}  
}        