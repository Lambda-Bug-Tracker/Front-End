// sets default backend URL to "production" backend environment URL

// to set a custom backendURL, set the .env variable, `REACT_APP_backendURL`

//                     *************
//                     do not make changes to the URL unless you are updating the master
//                     backend URL address!!
//                     *************
const productionURL = `http://localhost:4000`;
//                     STOP! MOVE AWAY FROM THE COOKIE JAR!
//                     ARE YOU SURE YOU SHOULD BE EDITING THIS VALUE?

//                     If you need to point to a different URL for testing
//                     or development, simply edit the `.env` file, eg set:
//                     REACT_APP_backendURL=http://the-backend-you-want-to-use.com

export const backendURL = process.env.REACT_APP_BACKEND_URL || productionURL;
