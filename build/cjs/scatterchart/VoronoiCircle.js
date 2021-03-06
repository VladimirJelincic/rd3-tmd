'use strict';

var React = require('react');

module.exports = React.createClass({

  displayName: 'VoronoiCircle',

  propTypes: {
    circleFill: React.PropTypes.string.isRequired,
    circleRadius: React.PropTypes.number.isRequired,
    className: React.PropTypes.string,
    cx: React.PropTypes.number.isRequired,
    cy: React.PropTypes.number.isRequired,
    handleMouseLeave: React.PropTypes.func.isRequired,
    handleMouseOver: React.PropTypes.func.isRequired,
    pathFill: React.PropTypes.string,
    voronoiPath: React.PropTypes.string.isRequired
  },

  getDefaultProps: function getDefaultProps() {
    return {
      className: 'rd3-scatterchart-voronoi-circle',
      pathFill: 'transparent'
    };
  },
  render: function render() {
    var props = this.props;

    return React.createElement(
      'g',
      null,
      React.createElement('path', {
        d: props.voronoiPath,
        fill: props.pathFill,
        onMouseLeave: props.handleMouseLeave,
        onMouseOver: props.handleMouseOver
      }),
      React.createElement('circle', {
        cx: props.cx,
        cy: props.cy,
        className: props.className,
        fill: props.circleFill,
        onMouseLeave: props.handleMouseLeave,
        onMouseOver: props.handleMouseOver,
        r: props.circleRadius
      })
    );
  }
});