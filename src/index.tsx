import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from "./App";

const rootEl = document.getElementById( 'root' );
const main = ( /*Root: React.ComponentClass<any>*/ ) => {
  ReactDOM.render(
    <AppContainer>
      <App/>
    </AppContainer>,
    rootEl
  );
};

main(/* App */);


// Hot Module Replacement API
if ( module.hot ) {
  module.hot.accept( './App', ( ...args: any[] ) => {
    console.log( args );
    // const NextApp = require( './App' ).default;
    // main( NextApp );
    main();
  } );
}