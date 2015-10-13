var React = require('react');
var SubNavigation = require('./sub_navigation')

var LeftNavigation = React.createClass({

  render: function(){
    var that = this
    navigationContainingObjects = []
    navigationHtml = []

    $.each(this.props.data, function(index, value) {
      if (value.containing_object !== undefined) {
        return navigationContainingObjects.push(value.containing_object)
      }
    });

    $.each(navigationContainingObjects, function(index, containingObject) {
      navigationHtml.push(that._navigationRowTemplate(containingObject, index));
    });

    return (
      <div className='left-container'>
        <div className='left-container-content'>
          <div className='left-container-header'>
            <p className='left-container-header-text'>FIELD GROUPS</p>
          </div>

          { navigationHtml }

        </div>
        <div className='left-container-footer'>
          <p className='left-container-footer-text'>EverTrue</p>
        </div>
      </div>
    );
  },

  _navigationRowTemplate: function(containingObject, index) {

    return (
      <div className='left-container-content-tab' onClick={this.props.setCurrentPage.bind(null, containingObject.name)} key={index}>
        <p className="left-container-content-tab-text">{ containingObject.name }</p>
        <SubNavigation 
          properties={containingObject.properties}
        />
      </div>
    );
  }
});

module.exports = LeftNavigation;