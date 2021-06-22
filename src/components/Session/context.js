import React from 'react';
import {FirebaseContext} from '../Firebase'  
const AuthUserContext = React.createContext(null);
export const withFirebase = Component => props => (
    <FirebaseContext.Consumer>
      {firebase => <Component {...props} firebase={firebase} />}
    </FirebaseContext.Consumer>
  );
  export { AuthUserContext };

  export default FirebaseContext;
  
