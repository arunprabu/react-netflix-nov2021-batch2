import React, { Component } from 'react'

class LifecycleDemo extends Component {

  // Lifecycle hooks are available to class components
  constructor(){
    super();
    console.log('=============== 1. Inside Constructor ================');

    this.state = {
      isLoaded: false,
      featureName: ''
    }
  }

  // lifecycle hooks
  componentDidMount(){ 
    // upon successfull rendering of the JSX -- this method would be called. 
    // whenever the comp is coming into view -- this method would be called. 
    console.log("===============3. Inside componentDidMount");

    // ideal place for you to make ajax calls
    // upon successful ajax call -- change the state here
    // mocking ajax call w/ timeout 
    setTimeout( () => {
      // assuming that we will have 2 sec delay to get the res from backend REST API
      // you need to update the state only if prev state and new state are diff. 
      this.setState( {
        isLoaded: true,
        featureName: 'Lifecycle Hooks Demo by Arun'
      });
    }, 4000);
    
  }

  shouldComponentUpdate(){  
    // when state is updated this method would be called
    // it has to return true or false;
    // compare the prev state and new state.. if changes are there
    // return true; else return false 

    // if true... render would be called
    // else... render would not be called

    console.log("======== 4. Inside shouldComponentUpdate ============");
    return true; // if returns true render woule be called
  }

  componentDidUpdate(){
   // called immeditely after the update in JSX
   // NOT CALLED AFTR THE INITIAL RENDERING
   console.log("========6. Inside componentDidUpdate ========== ") ;
  }

  // whenever the comp goes out of view 
  componentWillUnmount(){
    // called after this comp goes out of view. 
    // ideal place for clear intervals, remove timeouts, clear data

    console.log("========7. Inside componentWillUnmount =======")
  }

  render() {

    // NEVER EVER call setState() here. 
    // if you do so, it will re-render infinitely 
    console.log('=============== 2 / 5. Inside Render ================');
    return (
      <div>
        { this.state.isLoaded ? 
            <div>
              <h4>Learn more about {this.state.featureName }</h4>
              <p>https://reactjs.org/docs/state-and-lifecycle.html#adding-lifecycle-methods-to-a-class</p>
            </div>
            :
            <div className="spinner-border text-success" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
        }
        
      </div>
    )
  }
}

export default LifecycleDemo;