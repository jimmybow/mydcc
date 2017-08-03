import React, {Component} from 'react';
import PropTypes from 'prop-types';


export default class Listener_mapbox extends Component {    
    render() {
       const {id, aim , style, data, setProps} = this.props;
       if (document.getElementById(aim) && data.x == '') {
         var gd = document.getElementById(aim);
         var xaxis = gd._fullLayout.mapbox._subplot.xaxis;
         var yaxis = gd._fullLayout.mapbox._subplot.yaxis;
         var l = gd._fullLayout.margin.l;
         var t = gd._fullLayout.margin.t; 
         if (setProps) setProps( {data: {x : 'act', y : 'act' }} );
         gd.addEventListener('mousemove', function(evt) {
               var xInDataCoord = xaxis.p2c(evt.x - l);
               var yInDataCoord = yaxis.p2c(evt.y - t);                        
               if (setProps) setProps( {data: {x : xInDataCoord,
                                               y : yInDataCoord } }  ); 
         });   
       }
         
       return (
            <div id = {id} style = {style}></div>
        );
    }
}

Listener_mapbox.propTypes = {
    id : PropTypes.string.isRequired,
    aim : PropTypes.string.isRequired,
    style: PropTypes.object,
    data : PropTypes.object
};

Listener_mapbox.defaultProps = {
    data : {x : '', y : '' }   
}        