npm i -D nodemon // command for downloading nodemon as developer packeage
npm i -D prettier // add prettier for consistent code writing accross all members
npm i mongoose express dotenv // install these packages

"dev": "nodemon src/index.js" // this was created so that serves loades again or connectes again whenever our work is done or saved
-r dotenv/config --experimental-json-modules // added to the dev script to load dotenv configs with the server