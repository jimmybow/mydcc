import React, {Component} from 'react';
import PropTypes from 'prop-types';


export default class Listener extends Component {    
    render() {
       const {id, aim , style, data, setProps} = this.props;
       if (document.getElementById(aim) && data.x == '') {
         var gd = document.getElementById(aim);
         setProps( {data: {x : 'act', y : 'act' }} );
         gd.addEventListener('mousemove', function(evt) {
               var xaxis = gd._fullLayout.xaxis;
               var yaxis = gd._fullLayout.yaxis;
               var l = gd._fullLayout.margin.l;
               var t = gd._fullLayout.margin.t; 
               var offl = gd.offsetLeft;
               var offt = gd.offsetTop;
               var xInDataCoord = xaxis.p2c(evt.x - l - offl);
               var yInDataCoord = yaxis.p2c(evt.y - t - offt);                        
               setProps( {data: {x : xInDataCoord,
                                 y : yInDataCoord } }  ); 
         });   
       }
         
       return (
            <div id = {id} style = {style}></div>
        );
    }
}

Listener.propTypes = {
    id : PropTypes.string.isRequired,
    aim : PropTypes.string.isRequired,
    style: PropTypes.object,
    data : PropTypes.object
};

Listener.defaultProps = {
    data : {x : '', y : '' }  
}        