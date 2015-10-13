var React = require('react');
var LeftNavigation = require('./left_navigation')
var PageTemplate = require('./page_template')

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
    });
  },

  render: function() {
    var currentPage = this.state.currentPage;
    var pageData = this._getPageData(window.data, currentPage);

    return (
      <div className='container'>
        <LeftNavigation 
          data={this.state.jsonData}
          currentPage={this.state.currentPage}
          setCurrentPage={this._setCurrentPage}
        />

        <PageTemplate 
          data={pageData}
        />
      </div>
    );
  },

  _setCurrentPage: function(currentPage) {
    this.setState({
      currentPage: currentPage
    });
  },

  _getPageData: function(data, currentPage) {
    var pageData;
    $.each(data, function(index, value) {
      if (value.containing_object !== undefined) {
        if (value.containing_object.name === currentPage) {
          pageData = value.containing_object
          return pageData;
        }
      }
    });
    return pageData;
  }
});

module.exports = MainApp;