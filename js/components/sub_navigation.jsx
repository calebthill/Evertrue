var SubNavigation = React.createClass({

  render: function(){
    var that = this;
    var subNavigationHtml = []

    $.each(this.props.properties, function(index, property) {
      subNavigationHtml.push(that._subNavigationTemplate(property.name, index))
    });

    return (
      <div className='expanded-tab-container'>
        { subNavigationHtml }
      </div>
    );
  },

  _subNavigationTemplate: function(name, index) {
    return (
      <p className="expanded-tab-text" key={index}>{ name }</p>
    );
  },
});

module.exports = SubNavigation;