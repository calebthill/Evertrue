var React = require('react');
var LeftNavigation = require('./left_navigation')
require('../../schema.js');

var MainApp = React.createClass({

  getInitialState: function() {
    return {
      jsonData: {},
      currentPage: 'address'
    }
  },

  componentDidMount: function() {
    this.setState({
      jsonData: window.data
    })
    $(".expanded-tab-text").hide();
  },

  render: function(){
    return (
      <div className='container'>
        <LeftNavigation 
          data={this.state.jsonData}
          currentPage={this.state.currentPage}
          setCurrentPage={this._setCurrentPage}
        />

        <div className='right-container'>
          
        </div>
      </div>
    );
  },

  _setCurrentPage: function(currentPage) {
    console.log("setting current page to: " + currentPage)
    this.setState({
      currentPage: currentPage
    });
  }
});

module.exports = MainApp;