var PageTemplate = React.createClass({

  render: function(){
    var pageData = this.props.data;
    
    return (
      <div className='right-container-header'>
        <p className='right-container-header-text'>{ pageData.name }</p>
      </div>
    );
  }

});

module.exports = PageTemplate;