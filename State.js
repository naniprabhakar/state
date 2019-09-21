import React from 'react';  

class State extends React.Component {  
 constructor() {  
      super();        
      this.state = { displayBio: false };  
      console.log('Component this', this);  
      this.toggleDisplayBio = this.toggleDisplayBio.bind(this);  
      }  
      toggleDisplayBio(){  
          this.setState({displayBio: !this.state.displayBio});  
          }  
      render() {  
          return (  
              <div>  
                  <h1>Welcome to India!!</h1>  
                  {  
                      this.state.displayBio ? (   
                          <div>  
                              <p><h4>Apple at present sells its products such as iPhones,
                                   MacBooks and iPads in India via third party resellers and via e-retail platforms such as 
                                   Amazon India and Flipkart</h4></p>  
                              <button onClick={this.toggleDisplayBio}> Show Less </button>  
                        </div>  
                          ) : (  
                              <div>  
                                  <button onClick={this.toggleDisplayBio}> Read More </button>  
                              </div>  
                          )  
                  }  
             </div>  
        )  
    }  
}  
export default State;