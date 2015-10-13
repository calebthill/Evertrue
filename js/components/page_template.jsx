var PageTemplate = React.createClass({

  render: function(){
    var that = this;
    var pageData = this.props.data;
    propertiesHtml = [];

    $.each(pageData.properties, function(index, property) {
      propertiesHtml.push(that._generatePropertyTemplate(property, index));
    });

    return (
      <div className='right-container'>
        <div className='right-container-header'>
          <p className='right-container-header-text'>{ pageData.name }</p>
        </div>
        { propertiesHtml }
      </div>
    );
  }, 

  _generatePropertyTemplate: function(property, index) {
    return (
      <div className='right-container-content-block' key={index}>
        <div className='right-content-block-header'>
          <p className='right-content-block-header-text'>{ property.name }</p>
        </div>
        <div className='right-content-block-details-container'>
          <div className='details-container-left'>
            <p className='details-container-text'>data_type</p>
          </div>

          <div className='details-container-right'>
            <p className='details-container-text'>{property.data_type}</p>
          </div>

          <div className='details-container-left'>
            <p className='details-container-text'>default</p>
          </div>

          <div className='details-container-right'>
            <p className='details-container-text'>{this._formatBool(property.default)}</p>
          </div>
        </div>
      </div>
    )
  }, 

  _formatBool: function(bool) {
    if (bool === true) {
      return 'true'
    } else {
      return 'false'
    }
  }
});

module.exports = PageTemplate;