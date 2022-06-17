import React from 'react';

import GlobalStyle from './pages/styles/global';
import SignIn from './pages/Signin'
//import SignUp from './pages/SignUp'; //
const App: React.FC = () => (
    <>
        <GlobalStyle/>

        <SignIn/>    
    </>

)

export default App;