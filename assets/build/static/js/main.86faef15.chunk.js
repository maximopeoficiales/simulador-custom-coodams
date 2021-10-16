(this["webpackJsonpreact-simulator"]=this["webpackJsonpreact-simulator"]||[]).push([[0],{16:function(e,t,a){},18:function(e,t,a){},29:function(e,t,a){},31:function(e,t,a){"use strict";a.r(t);var n,s,c=a(1),l=a.n(c),i=a(10),o=a.n(i),r="http://localhost:97",d="wp-json/simulador/v1/getOptions",u=(a(16),a(2));!function(e){e.LIBRE_INVERSION="LIBRE_INVERSION",e.VIVIENDA="VIVIENDA",e.VEHICULO="VEHICULO",e.VEHICULO1="VEHICULO1",e.VEHICULO2="VEHICULO2",e.VEHICULO3="VEHICULO3"}(n||(n={})),function(e){e.DE_12_36_MESES="12 - 36 meses",e.DE_37_120_MESES="37 - 120 meses",e.MAS_120_MESES="M\xe1s de 120 meses"}(s||(s={}));var j=[{id:n.LIBRE_INVERSION,tasa:1.6,nombre:"Libre Invers\xedon (especial)",antiguedad:"",helpText:"",montoMax:5269451,plazos:[18,24]},{id:n.VIVIENDA,tasa:1.3,nombre:"Vivienda",antiguedad:"",helpText:"Antiguedad minima de 12 meses",montoMax:181705200,plazos:[84,96,108,120]},{id:n.VEHICULO,tasa:1.3,nombre:"Vehiculo",antiguedad:"12 - 36 meses",helpText:"",montoMax:45426300,plazos:[12,24,36,48,60],antiguedades:[s.DE_12_36_MESES,s.DE_37_120_MESES,s.MAS_120_MESES]}],b=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:",",a=e.toString().split(t);return a[0]=a[0].replace(/\B(?=(\d{3})+(?!\d))/g,t),a.join(",")},m=Object(c.createContext)({tasaData:{}}),O=function(e,t,a){var n=a/100;return e*(n/(1-Math.pow(1+n,-t)))},v=a(0),h=function(e){var t=e.data,a=t.montoSolicitado,n=t.plazo,s=t.tasa,c=Math.round(O(a,n,s)),l=Math.round(function(e,t,a){return O(e,t,a)*t-e}(a,n,s));return Object(v.jsxs)("div",{"data-testid":"FormDetalle",className:"",children:[Object(v.jsxs)("div",{className:"d-flex justify-content-between my-2",children:[Object(v.jsx)("span",{children:Object(v.jsx)("b",{className:"simulador-color-valor",children:"Tasa de Interes"})}),Object(v.jsx)("span",{children:Object(v.jsxs)("b",{className:"simulador-color-valor",children:[s," %"]})})]}),Object(v.jsxs)("div",{className:"d-flex justify-content-between my-2",children:[Object(v.jsx)("span",{children:Object(v.jsx)("b",{className:"simulador-color-valor",children:"Valor Cuota Mensual"})}),Object(v.jsx)("span",{children:Object(v.jsxs)("b",{className:"simulador-color-valor",children:["$",b(c,".")]})})]}),Object(v.jsxs)("div",{className:"d-flex justify-content-between my-2",children:[Object(v.jsx)("span",{children:Object(v.jsx)("b",{children:"Valor Total Intereses"})}),Object(v.jsx)("span",{children:Object(v.jsxs)("b",{children:["$",b(l,".")]})})]}),Object(v.jsxs)("div",{className:"mt-4",children:[Object(v.jsx)("span",{children:Object(v.jsx)("b",{children:"Nota:"})}),Object(v.jsx)("p",{className:"my-0 text-muted simulador-text-muted",children:"Si tienes la opci\xf3n de realizar abonos extras, consulta con un asesor y revisa tu proyecci\xf3n"})]})]})},x=(a(18),function(e){var t=e.data,a=e.visible,n=e.setVisible,s=a?"is-visible":"";return Object(v.jsx)("div",{children:Object(v.jsx)("div",{className:"modal ".concat(s),"data-animation":"slideInOutLeft",children:Object(v.jsxs)("div",{className:"modal-dialog",children:[Object(v.jsxs)("header",{className:"modal-header",children:[Object(v.jsx)("h3",{className:"my-0",children:Object(v.jsx)("b",{className:"simulador-titulo-detalle",children:"Detalle del Prestamo"})}),Object(v.jsx)("button",{className:"close-modal simulador-btn-hidden-modal","aria-label":"close modal","data-close":!0,onClick:function(){n("")},children:"\u2715"})]}),Object(v.jsx)("section",{className:"modal-content",children:Object(v.jsx)(h,{data:t})})]})})})}),f=a(5),p=a.n(f),N=function(e){var t,a,l,i=Object(c.useContext)(m).tasaData,o=Object(c.useState)(n.LIBRE_INVERSION),r=Object(u.a)(o,2),d=r[0],O=r[1],f=Object(c.useState)(!1),N=Object(u.a)(f,2),S=N[0],E=N[1],g=Object(c.useState)(!1),I=Object(u.a)(g,2),_=I[0],C=I[1],V=Object(c.useState)(1),M=Object(u.a)(V,2),L=M[0],y=M[1],D=Object(c.useState)([]),w=Object(u.a)(D,2),F=w[0],z=w[1],A=Object(c.useState)(1),H=Object(u.a)(A,2),R=H[0],U=H[1],k=Object(c.useState)(!1),T=Object(u.a)(k,2),B=T[0],P=T[1],$=Object(c.useState)(""),J=Object(u.a)($,2),q=J[0],G=J[1],K=Object(c.useState)(0),Q=Object(u.a)(K,2),W=Q[0],X=Q[1],Y=Object(c.useState)({}),Z=Object(u.a)(Y,2),ee=Z[0],te=Z[1];Object(c.useEffect)((function(){var e=function(e,t){var a,s,c;return parseInt(null!==(a=t.sim_libre_inversion)&&void 0!==a?a:"")||(e=e.filter((function(e){return e.id!==n.LIBRE_INVERSION}))),parseInt(null!==(s=t.sim_vehiculo)&&void 0!==s?s:"")||(e=e.filter((function(e){return e.id!==n.VEHICULO}))),parseInt(null!==(c=t.sim_vivienda)&&void 0!==c?c:"")||(e=e.filter((function(e){return e.id!==n.VIVIENDA}))),e}(j,i);z(e)}),[i]),Object(c.useEffect)((function(){var e,t=function(e,t){var a,n,s,c,l,i;return e[0].tasa=parseFloat(null!==(a=null===(n=t.tasa_libre_inversion)||void 0===n?void 0:n.toString())&&void 0!==a?a:"1.6"),e[1].tasa=parseFloat(null!==(s=null===(c=t.tasa_vivienda)||void 0===c?void 0:c.toString())&&void 0!==s?s:"1.3"),e[2].tasa=parseFloat(null!==(l=null===(i=t.tasa_vehiculo_1)||void 0===i?void 0:i.toString())&&void 0!==l?l:"1.3"),e}(j,i),a=t.find((function(e){return e.id===d}));X(null!==(e=null===a||void 0===a?void 0:a.tasa)&&void 0!==e?e:0),te(null!==a&&void 0!==a?a:{})}),[d,i]);return Object(v.jsxs)("div",{className:"container-simulador",children:[Object(v.jsxs)("div",{className:"simulador-formulario",children:[Object(v.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(v.jsx)("span",{children:Object(v.jsx)("b",{className:"simulador-titulo-formulario",children:"Monto Solicitado"})}),Object(v.jsx)("span",{children:Object(v.jsxs)("b",{className:"simulador-caja-monto",children:["$ ",b(L,".")]})})]}),Object(v.jsxs)("div",{className:"",children:[Object(v.jsx)("input",{onChange:function(e){var t,a,n,s=null!==(t=null===ee||void 0===ee?void 0:ee.montoMax)&&void 0!==t?t:1,c=parseFloat(e.target.value),l=(a=c,n=1e4,Math.ceil(a/n)*n);l<=s?y(l):(p.a.fire({icon:"error",title:"Oops...",text:"Te haz pasado el limite de monto para este Tipo de Credito"}),y(0))},type:"range",className:"w-100 range simulador-scroll-input  ",min:"0",max:null!==(t=null===ee||void 0===ee?void 0:ee.montoMax)&&void 0!==t?t:1,value:L}),Object(v.jsx)("small",{className:"text-muted simulador-text-muted",children:"Desliza para elegir el monto deseado de su pr\xe9stamo"})]}),Object(v.jsxs)("div",{className:"form-group",children:[Object(v.jsx)("label",{htmlFor:"idSelectCredito",className:"d-flex my-2",children:Object(v.jsx)("b",{className:"simulador-titulo-formulario",children:"Cr\xe9dito"})}),Object(v.jsx)("select",{id:"idSelectCredito",className:"w-100 simulador-select",onChange:function(e){y(0);var t=e.target.value;O(t),P(t===n.VEHICULO),C(!1)},value:d,children:F.map((function(e){return Object(v.jsx)("option",{value:e.id,children:e.nombre},e.id)}))})]}),Object(v.jsxs)("div",{className:"form-group",children:[Object(v.jsx)("label",{htmlFor:"idSelectPlazo",className:"d-flex my-2",children:Object(v.jsx)("b",{className:"simulador-titulo-formulario",children:"Plazos / Cuotas"})}),Object(v.jsx)("select",{id:"idSelectPlazo",className:"w-100 simulador-select",onChange:function(e){U(parseInt(e.target.value)),C(!1)},value:R,children:null===ee||void 0===ee||null===(a=ee.plazos)||void 0===a?void 0:a.map((function(e,t){return Object(v.jsx)("option",{value:e,children:e},e)}))})]}),B&&Object(v.jsxs)("div",{className:"form-group",children:[Object(v.jsx)("label",{htmlFor:"idSelectAntiguedad",className:"d-flex my-2",children:Object(v.jsx)("b",{children:"Antiguedad"})}),Object(v.jsx)("select",{id:"idSelectAntiguedad",className:"w-100",onChange:function(e){var t=function(e,t){var a,n,c,l=0;switch(e){case s.DE_12_36_MESES:l=null!==(a=t.tasa_vehiculo_1)&&void 0!==a?a:1.3;break;case s.DE_37_120_MESES:l=null!==(n=t.tasa_vehiculo_2)&&void 0!==n?n:1.2;break;case s.MAS_120_MESES:l=null!==(c=t.tasa_vehiculo_3)&&void 0!==c?c:1.1}return l}(e.target.value,i);X(t),G(e.target.value),C(!1)},value:q,children:null===ee||void 0===ee||null===(l=ee.antiguedades)||void 0===l?void 0:l.map((function(e,t){return Object(v.jsx)("option",{value:e,children:e},e)}))}),Object(v.jsx)("small",{className:"text-muted my-2 d-block",children:"Selecciona la Antiguedad como asociado de la cooperativa"})]}),Object(v.jsx)("button",{onClick:function(){0!==L?(C(!0),E(!0)):p.a.fire({icon:"error",title:"Oops...",text:"No puedes hacer una prestamo con Monto: 0"})},className:"my-2 w-100 simulador-button",children:"Calcular"})]}),Object(v.jsx)("div",{className:"my-auto",children:_?Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("h2",{className:"text-center",children:"Detalle del Prestamo"}),Object(v.jsx)(h,{data:{tasa:W,plazo:R,montoSolicitado:L}}),Object(v.jsx)(x,{data:{tasa:W,plazo:R,montoSolicitado:L},visible:S,setVisible:E})]}):Object(v.jsx)("p",{})})]})},S=function(e){return Object(v.jsx)("div",{"data-testid":"Simulador",className:"container",children:Object(v.jsx)(N,{})})},E=a(7),g=(a(29),{text:"Loading..."}),I=function(e){var t=(e=Object(E.a)(Object(E.a)({},g),e)).text;return Object(v.jsx)("div",{className:"loader",children:t})},_=a(6),C=a.n(_),V=a(11);var M=function(){var e=function(e){var t=Object(c.useRef)(!0),a=Object(c.useState)({data:null,loading:!0,error:null}),n=Object(u.a)(a,2),s=n[0],l=n[1];return Object(c.useEffect)((function(){return function(){t.current=!1}}),[]),Object(c.useEffect)((function(){Object(V.a)(C.a.mark((function a(){var n;return C.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,fetch(e);case 3:return a.next=5,a.sent.json();case 5:n=a.sent,t.current&&l({loading:!1,data:n,error:null}),a.next=12;break;case 9:a.prev=9,a.t0=a.catch(0),l({loading:!0,data:null,error:"No se pudo cargar la info"});case 12:case"end":return a.stop()}}),a,null,[[0,9]])})))()}),[e]),s}(function(){var e=d,t=r,a=location.host,n=location.protocol+"//"+a+(location.href.includes("test")?"/test":"");return a.includes("localhost")&&(n=t),"".concat(n,"/").concat(e)}()),t=e.data;return e.loading?Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("h4",{className:"text-center",children:"Cargando Simulador ..."}),Object(v.jsx)(I,{})]}):Object(v.jsx)(m.Provider,{value:{tasaData:t},children:Object(v.jsx)(S,{})})},L=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,32)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,c=t.getLCP,l=t.getTTFB;a(e),n(e),s(e),c(e),l(e)}))};o.a.render(Object(v.jsx)(l.a.StrictMode,{children:Object(v.jsx)(M,{})}),document.getElementById("root-simulador")),L()}},[[31,1,2]]]);
//# sourceMappingURL=main.86faef15.chunk.js.map