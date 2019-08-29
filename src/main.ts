import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUserSecret } from "@fortawesome/free-solid-svg-icons";
import { faTwitterSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import * as firebase from "firebase";

library.add(faUserSecret, faTwitterSquare, faLinkedin);

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

// Initialize Firebase
const config = {
  apiKey: "<API-KEY>",
  authDomain: "<PROJECT-ID>.firebaseapp.com",
  databaseURL: "https://<PROJECT-ID>.firebaseio.com",
  projectId: "<PROJECT-ID>",
  storageBucket: "<PROJECT-ID>.appspot.com",
  messagingSenderId: "<messagingSenderId>",
  appId: "<appID>"
};
firebase.initializeApp(config);

// Retrieve Firebase Messaging object.
const messaging = firebase.messaging();

// Add the public key generated from the console here.
messaging.usePublicVapidKey("<public-key>");

messaging.requestPermission().then(() => {
  console.log('Notification permission granted.');
  messaging.getToken().then((token) => {
    console.log(token);
  });
}).catch((err) => {
  console.log('Unable to get permission to notify.', err);
});

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount("#app");
