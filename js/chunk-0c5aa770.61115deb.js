(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0c5aa770"],{"0b24":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{staticClass:"mx-auto",attrs:{"max-width":"800"}},[a("v-img",{staticClass:"white--text",attrs:{height:"400px",src:t.dynamicPicture}},[a("v-card-title",{staticClass:"align-end fill-height"},[t._v(t._s(t.selectedItem.name))])],1),a("v-card-text",[a("span",{staticClass:"text--primary"},[a("span",[t._v("Gender: "+t._s(t.selectedItem.gender))]),a("br"),a("span",[t._v("Weight: "+t._s(t.selectedItem.weight)+" lb")]),a("br"),a("span",[t._v("Age: "+t._s(t.selectedItem.age)+" months")]),a("br"),a("span",[t._v("Friendly with other animals: "+t._s(t.selectedItem.friendly))])])]),a("v-card-actions",[a("v-btn",{attrs:{text:"",color:"orange"},on:{click:t.adopt}},[t._v("\n      Adopt\n    ")]),a("v-btn",{attrs:{text:"",color:"orange"},on:{click:t.back}},[t._v("\n      Back\n    ")])],1)],1)},n=[],c=a("2f62"),r=a("6e30"),i={name:"pet",data(){return{id:null}},computed:{...Object(c["b"])(["selectedItem"]),dynamicPicture(){return"Dog"===this.selectedItem.species?a("8d66"):a("3a15")}},mounted(){this.getId()},methods:{adopt(){alert("Go to your local shelter and save some life.")},back(){this.$router.push(""+r["a"].BASE_URL)},getId(){this.$route.params.id&&(this.id=this.$route.params.id)}}},d=i,o=a("2877"),l=a("6544"),u=a.n(l),m=a("8336"),p=a("b0af"),_=a("99d9"),b=a("adda"),h=Object(o["a"])(d,s,n,!1,null,null,null);e["default"]=h.exports;u()(h,{VBtn:m["a"],VCard:p["a"],VCardActions:_["a"],VCardText:_["b"],VCardTitle:_["c"],VImg:b["a"]})},"3a15":function(t,e,a){t.exports=a.p+"img/cat.eb4a6832.jpeg"},"6e30":function(t,e,a){"use strict";const s="/",n="/pet";e["a"]={BASE_URL:s,PET_URL:n}},"99d9":function(t,e,a){"use strict";a.d(e,"a",(function(){return c})),a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return d}));var s=a("b0af"),n=a("80d2");const c=Object(n["g"])("v-card__actions"),r=Object(n["g"])("v-card__subtitle"),i=Object(n["g"])("v-card__text"),d=Object(n["g"])("v-card__title");s["a"]}}]);
//# sourceMappingURL=chunk-0c5aa770.61115deb.js.map