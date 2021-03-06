// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase : {
    apiKey: "AIzaSyCtldSISQ5w3aramOLfPFdDvSHu7mo8e-k",
    authDomain: "fs1prod-ee340.firebaseapp.com",
    databaseURL: "https://fs1prod-ee340.firebaseio.com",
    projectId: "fs1prod-ee340",
    storageBucket: "fs1prod-ee340.appspot.com",
    messagingSenderId: "644460637203"
  }
};
