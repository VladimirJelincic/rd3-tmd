'use strict';

var d3 = require('d3');
var React = require('react');
var Chart = require('../common').Chart;
var DataSeries = require('./DataSeries');

module.exports = React.createClass({

  displayName: 'Treemap',

  propTypes: {
    data: React.PropTypes.array,
    margins: React.PropTypes.object,
    width: React.PropTypes.number,
    height: React.PropTypes.number,
    title: React.PropTypes.string,
    textColor: React.PropTypes.string,
    fontSize: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number]),
    colors: React.PropTypes.func,
    colorAccessor: React.PropTypes.func,
    hoverAnimation: React.PropTypes.bool
  },

  getDefaultProps: function getDefaultProps() {
    return {
      hoverAnimation: true,
      data: [],
      width: 400,
      heigth: 200,
      title: '',
      textColor: '#f7f7f7',
      fontSize: '0.85em',
      colors: d3.scale.category20c(),
      colorAccessor: function colorAccessor(d, idx) {
        return idx;
      }
    };
  },
  render: function render() {
    var props = this.props;
    if (this.props.data && this.props.data.length < 1) {
      return null;
    }

    return React.createElement(
      Chart,
      {
        title: props.title,
        width: props.width,
        height: props.height
      },
      React.createElement(
        'g',
        { className: 'rd3-treemap' },
        React.createElement(DataSeries, {
          data: props.data,
          width: props.width,
          height: props.height,
          colors: props.colors,
          colorAccessor: props.colorAccessor,
          textColor: props.textColor,
          fontSize: props.fontSize,
          hoverAnimation: props.hoverAnimation
        })
      )
    );
  }
});