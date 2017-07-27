import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class Change_trace_mapbox extends Component {    
    render() {
       const {id, aim, data, style} = this.props;
       if (document.getElementById(aim) && data.disable == null) {
         var gd = document.getElementById(aim);
         Plotly.addTraces(gd, data);
         Plotly.deleteTraces(gd, 0);
       }
       return (
            <div id = {id} style = {style}></div>
        );
    }
}

Change_trace_mapbox.propTypes = {
    id : PropTypes.string.isRequired,
    aim : PropTypes.string.isRequired,
    data : PropTypes.object,
    style: PropTypes.object
};

Change_trace_mapbox.defaultProps = {
    data : {lat:[1], lon:[1], type: 'scattermapbox'}  
}        