import Vue from "vue";
import VueI18n from "vue-i18n";
import en from "../../public/lang/en";
import hr from "../../public/lang/hr";

Vue.use(VueI18n);

let lang = localStorage.getItem("doroLANG");
let locale = "en";
if (lang !== undefined && lang !== null) {
  locale = lang;
}

const i18n = new VueI18n({
  locale,
  messages: { en, hr },
});
export default i18n;
