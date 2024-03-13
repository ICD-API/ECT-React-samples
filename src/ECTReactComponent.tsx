import React from 'react';

// import the ECT package and style
import * as ECT from '@whoicd/icd11ect';
import '@whoicd/icd11ect/style.css';

// import the interface defining the selectedEntity object
import { ISelectedEntity } from './selectedEntity';

class ECTReactComponent extends React.Component {
  iNo = 1;

  constructor(props: any) {
    super(props);

    // configure the ECT
    const settings = {
      // the API located at the URL below should be used only for software development and testing
      apiServerUrl: 'https://icd11restapi-developer-test.azurewebsites.net',
      autoBind: false, // in React we recommend using the manual binding
    };
    const callbacks = {
      selectedEntityFunction: (selectedEntity: ISelectedEntity) => {
        // shows an alert with the code selected by the user and then clears the search results
        alert('ICD-11 code selected: ' + selectedEntity.code);
        ECT.Handler.clear(this.iNo);
      },
    };
    ECT.Handler.configure(settings, callbacks);
  }

  componentDidMount() {
    console.log('componentDidMount()');
    // manual binding only after the component has been mounted
    ECT.Handler.bind(this.iNo);
  }

  render() {
    return (
      <div>
        <h1>React v18.2 + ECT v1.7</h1>
        Type for starting search:
        {/* input element used for typing the search */}
        <input
          type="text"
          className="ctw-input"
          autoComplete="off"
          data-ctw-ino={this.iNo}
        />
        {/* div element used for showing the search results */}
        <div className="ctw-window" data-ctw-ino={this.iNo}></div>
      </div>
    );
  }
}

export default ECTReactComponent;
