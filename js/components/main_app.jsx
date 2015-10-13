var React = require('react');
var LeftNavigation = require('./left_navigation')
require('../../schema.js');

var MainApp = React.createClass({

  getInitialState: function() {
    return {
      jsonData: {}
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
        />

        <div className='right-container'>
          <div className='right-container-header'>
            <p className='right-container-header-text'>General Info</p>
          </div>

          <div className='right-container-content-block'>
            <div className='right-content-block-header'>
              <p className='right-content-block-header-text'>Unique Record ID</p>
            </div>
            <div className='right-content-block-details-container'>
              <div className='details-container-left'>
                <p className='details-container-text'> KEY</p>
              </div>

              <div className='details-container-right'>
                <p className='details-container-text'> KEY</p>
              </div>
            </div>
          </div>

          <div className='right-container-content-block'>
            <div className='right-content-block-header'>
              <p className='right-content-block-header-text'>Unique Record ID</p>
            </div>
            <div className='right-content-block-details-container'>
              <div className='details-container-left'>
                <p className='details-container-text'> KEY</p>
                <p className='details-container-text'> KEY</p>
                <p className='details-container-text'> KEY</p>
              </div>

              <div className='details-container-right'>
                <p className='details-container-text'> There are suprisingly few attributes that are specific to tables. Of course you can use class and ID and all the typical global attributes. There used to be quite a few, but most of them were specific to styling and thus deprecated (as that is CSS's job).</p>
                <p className='details-container-text'> KEY</p>
                <p className='details-container-text'> KEY</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = MainApp;