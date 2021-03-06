'use strict';

var React = require('react');

module.exports = React.createClass({

  displayName: 'Wick',

  propTypes: {
    className: React.PropTypes.string,
    shapeRendering: React.PropTypes.string,
    stroke: React.PropTypes.string,
    strokeWidth: React.PropTypes.number
  },

  getDefaultProps: function getDefaultProps() {
    return {
      className: 'rd3-candlestick-wick',
      stroke: '#000',
      strokeWidth: 1,
      shapeRendering: 'crispEdges'
    };
  },
  render: function render() {
    var props = this.props;
    return React.createElement('line', {
      stroke: props.stroke,
      strokeWidth: props.strokeWidth,
      style: { shapeRendering: props.shapeRendering },
      className: props.className,
      x1: props.wickX1,
      y1: props.wickY1,
      x2: props.wickX2,
      y2: props.wickY2
    });
  }
});