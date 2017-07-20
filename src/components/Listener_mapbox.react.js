import React, {Component} from 'react';
import PropTypes from 'prop-types';


export default class Listener_mapbox extends Component {    
    render() {
       const {id, aim , style, data, setProps} = this.props;
       if (document.getElementById(aim) && data == '') {
         var gd = document.getElementById(aim);
         var xaxis = gd._fullLayout.mapbox._subplot.xaxis;
         var yaxis = gd._fullLayout.mapbox._subplot.yaxis;
         var l = gd._fullLayout.margin.l;
         var t = gd._fullLayout.margin.t; 
         setProps( {data: 'activate'} );
         gd.addEventListener('mousemove', function(evt) {
               var xInDataCoord = xaxis.p2c(evt.x - l);
               var yInDataCoord = yaxis.p2c(evt.y - t);                        
               setProps( {data: xInDataCoord +' and '+ yInDataCoord}  ); 
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
    data : PropTypes.string
};

Listener_mapbox.defaultProps = {
    data : ''  
}        