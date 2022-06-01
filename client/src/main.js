import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import store from './store/index'

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import { library } from "@fortawesome/fontawesome-svg-core";

import { faEye, faSearch } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faMapMarker } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faSignInAlt } from "@fortawesome/free-solid-svg-icons";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fas, fab)
library.add(faCoffee)
library.add(faEye)
library.add(faSearch);
library.add(faEnvelope);
library.add(faMapMarker);
library.add(faPhone);
library.add(faFacebook);
library.add(faTwitter);
library.add(faSignInAlt);
library.add(faEdit);
library.add(faTrashAlt);
library.add(faExternalLinkAlt);

createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
  .use(store)
  .use(router)
  .mount('#app')