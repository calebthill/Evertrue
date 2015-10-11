var React = require('react')

var MainApp = React.createClass({

  render: function(){
    return (
      <div className='container'>
        <div className='left-container'>
          <div className='left-container-content'>
            <div className='left-container-header'>
              <p className='left-container-header-text'>FIELD GROUPS</p>
            </div>
            <div className='left-container-content-tab-expanded'>
              <p className="left-container-content-tab-text-expanded">General Info</p>

              <div className='left-container-content-tab-expanded-tab'>
                <p className="expanded-tab-text">Unique Record ID</p>
              </div>

              <div className='left-container-content-tab-expanded-tab'>
                <p className="expanded-tab-text">Roles</p>
              </div>

              <div className='left-container-content-tab-expanded-tab'>
                <p className="expanded-tab-text">Prefix</p>
              </div>

              <div className='left-container-content-tab-expanded-tab'>
                <p className="expanded-tab-text">First Name</p>
              </div>

            </div>
            <div className='left-container-content-tab'>
              <p className="left-container-content-tab-text">Address</p>
            </div>
            <div className='left-container-content-tab'>
              <p className="left-container-content-tab-text">Email</p>
            </div>
            <div className='left-container-content-tab'>
              <p className="left-container-content-tab-text">Education</p>
            </div>
            <div className='left-container-content-tab'>
              <p className="left-container-content-tab-text">Phone</p>
            </div>
            <div className='left-container-content-tab'>
              <p className="left-container-content-tab-text">Work</p>
            </div>
            <div className='left-container-content-tab'>
              <p className="left-container-content-tab-text">Giving</p>
            </div>
            <div className='left-container-content-tab'>
              <p className="left-container-content-tab-text">Custom</p>
            </div>
            
          </div>
          <div className='left-container-footer'>
            <p className='left-container-footer-text'>EverTrue</p>
          </div>
        </div>
        <div className='right-container'>
          <div className='right-container-header'>
            <p className='right-container-header-text'>General Info</p>
          </div>

          <div className='right-container-content-block'>
            
          </div>

          <div className='right-container-content-block'>
            
          </div>

          <div className='right-container-content-block'>
            
          </div>
        </div>
      </div>
    );
  },
});

module.exports = MainApp;