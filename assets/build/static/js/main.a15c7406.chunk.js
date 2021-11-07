(this["webpackJsonpreact-simulator"]=this["webpackJsonpreact-simulator"]||[]).push([[0],{16:function(e,t,a){},18:function(e,t,a){},29:function(e,t,a){},31:function(e,t,a){"use strict";a.r(t);var n,s,l=a(1),c=a.n(l),i=a(10),o=a.n(i),r="http://localhost:97",d="wp-json/simulador/v1/getOptions",u=(a(16),a(2));!function(e){e.LIBRE_INVERSION="LIBRE_INVERSION",e.VIVIENDA="VIVIENDA",e.VEHICULO="VEHICULO",e.VEHICULO1="VEHICULO1",e.VEHICULO2="VEHICULO2",e.VEHICULO3="VEHICULO3"}(n||(n={})),function(e){e.DE_12_36_MESES="12 - 36 meses",e.DE_37_120_MESES="37 - 120 meses",e.MAS_120_MESES="M\xe1s de 120 meses"}(s||(s={}));var j=[{id:n.LIBRE_INVERSION,tasa:1.6,nombre:"Libre Invers\xedon (especial)",antiguedad:"",helpText:"",montoMax:5269451,plazos:[18,24]},{id:n.VIVIENDA,tasa:1.3,nombre:"Vivienda",antiguedad:"",helpText:"Antiguedad minima de 12 meses",montoMax:181705200,plazos:[84,96,108,120]},{id:n.VEHICULO,tasa:1.3,nombre:"Vehiculo",antiguedad:"12 - 36 meses",helpText:"",montoMax:45426300,plazos:[12,24,36,48,60],antiguedades:[s.DE_12_36_MESES,s.DE_37_120_MESES,s.MAS_120_MESES]}],b=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:",",a=e.toString().split(t);return a[0]=a[0].replace(/\B(?=(\d{3})+(?!\d))/g,t),a.join(",")},m=Object(l.createContext)({tasaData:{}}),O=a(0),v=function(e){var t=e.data,a=t.montoSolicitado,n=t.plazo,s=t.tasa,l=Math.round(function(e,t,a){return console.log(e,t,a),e*a/(100*(1-Math.pow(1+a/100,-1*t)))}(a,n,s)),c=Math.round(function(e,t,a){return console.log(e,t,a),e*a/(100*(1-Math.pow(1+a/100,-1*t)))*t-e}(a,n,s));return Object(O.jsxs)("div",{"data-testid":"FormDetalle",className:"",children:[Object(O.jsxs)("div",{className:"d-flex justify-content-between my-2",children:[Object(O.jsx)("span",{children:Object(O.jsx)("b",{className:"simulador-color-valor",children:"Tasa de Interes"})}),Object(O.jsx)("span",{children:Object(O.jsxs)("b",{className:"simulador-color-valor",children:[s.toFixed(2)," %"]})})]}),Object(O.jsxs)("div",{className:"d-flex justify-content-between my-2",children:[Object(O.jsx)("span",{children:Object(O.jsx)("b",{className:"simulador-color-valor",children:"Valor Cuota Mensual"})}),Object(O.jsx)("span",{children:Object(O.jsxs)("b",{className:"simulador-color-valor",children:["$",b(l,".")]})})]}),Object(O.jsxs)("div",{className:"d-flex justify-content-between my-2",children:[Object(O.jsx)("span",{children:Object(O.jsx)("b",{children:"Valor Total Intereses"})}),Object(O.jsx)("span",{children:Object(O.jsxs)("b",{children:["$",b(c,".")]})})]}),Object(O.jsxs)("div",{className:"mt-4",children:[Object(O.jsx)("span",{children:Object(O.jsx)("b",{children:"Nota:"})}),Object(O.jsx)("p",{className:"my-0 text-muted simulador-text-muted",children:"Si tienes la opci\xf3n de realizar abonos extras, consulta con un asesor y revisa tu proyecci\xf3n"})]})]})},h=(a(18),function(e){var t=e.data,a=e.visible,n=e.setVisible,s=a?"is-visible":"";return Object(O.jsx)("div",{children:Object(O.jsx)("div",{className:"modal ".concat(s),"data-animation":"slideInOutLeft",children:Object(O.jsxs)("div",{className:"modal-dialog",children:[Object(O.jsxs)("header",{className:"modal-header",children:[Object(O.jsx)("h3",{className:"my-0",children:Object(O.jsx)("b",{className:"simulador-titulo-detalle",children:"Detalle del Prestamo"})}),Object(O.jsx)("button",{className:"close-modal simulador-btn-hidden-modal","aria-label":"close modal","data-close":!0,onClick:function(){n("")},children:"\u2715"})]}),Object(O.jsx)("section",{className:"modal-content",children:Object(O.jsx)(v,{data:t})})]})})})}),x=a(5),f=a.n(x),p=function(e){var t,a,c,i=Object(l.useContext)(m).tasaData,o=Object(l.useState)(n.LIBRE_INVERSION),r=Object(u.a)(o,2),d=r[0],x=r[1],p=Object(l.useState)(!1),N=Object(u.a)(p,2),S=N[0],E=N[1],g=Object(l.useState)(!1),I=Object(u.a)(g,2),_=I[0],C=I[1],V=Object(l.useState)(1),M=Object(u.a)(V,2),L=M[0],y=M[1],D=Object(l.useState)([]),w=Object(u.a)(D,2),F=w[0],z=w[1],A=Object(l.useState)(18),H=Object(u.a)(A,2),R=H[0],U=H[1],k=Object(l.useState)(!1),T=Object(u.a)(k,2),B=T[0],P=T[1],$=Object(l.useState)(""),J=Object(u.a)($,2),q=J[0],G=J[1],K=Object(l.useState)(0),Q=Object(u.a)(K,2),W=Q[0],X=Q[1],Y=Object(l.useState)({}),Z=Object(u.a)(Y,2),ee=Z[0],te=Z[1];Object(l.useEffect)((function(){var e=function(e,t){var a,s,l;return parseInt(null!==(a=t.sim_libre_inversion)&&void 0!==a?a:"")||(e=e.filter((function(e){return e.id!==n.LIBRE_INVERSION}))),parseInt(null!==(s=t.sim_vehiculo)&&void 0!==s?s:"")||(e=e.filter((function(e){return e.id!==n.VEHICULO}))),parseInt(null!==(l=t.sim_vivienda)&&void 0!==l?l:"")||(e=e.filter((function(e){return e.id!==n.VIVIENDA}))),e}(j,i);z(e)}),[i]),Object(l.useEffect)((function(){var e,t,a=function(e,t){var a,n,s,l,c,i;return e[0].tasa=parseFloat(null!==(a=null===(n=t.tasa_libre_inversion)||void 0===n?void 0:n.toString())&&void 0!==a?a:"1.6"),e[1].tasa=parseFloat(null!==(s=null===(l=t.tasa_vivienda)||void 0===l?void 0:l.toString())&&void 0!==s?s:"1.3"),e[2].tasa=parseFloat(null!==(c=null===(i=t.tasa_vehiculo_1)||void 0===i?void 0:i.toString())&&void 0!==c?c:"1.3"),e}(j,i),n=a.find((function(e){return e.id===d}));X(parseFloat((null!==(e=null===n||void 0===n?void 0:n.tasa)&&void 0!==e?e:0).toString())),U(null!==(t=null===n||void 0===n?void 0:n.plazos[0])&&void 0!==t?t:0),te(null!==n&&void 0!==n?n:{})}),[d,i]);return Object(O.jsxs)("div",{className:"container-simulador",children:[Object(O.jsxs)("div",{className:"simulador-formulario",children:[Object(O.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(O.jsx)("span",{children:Object(O.jsx)("b",{className:"simulador-titulo-formulario",children:"Monto Solicitado"})}),Object(O.jsx)("span",{children:Object(O.jsxs)("b",{className:"simulador-caja-monto",children:["$ ",b(L,".")]})})]}),Object(O.jsxs)("div",{className:"",children:[Object(O.jsx)("input",{onChange:function(e){var t,a,n,s=null!==(t=null===ee||void 0===ee?void 0:ee.montoMax)&&void 0!==t?t:1,l=parseFloat(e.target.value),c=(a=l,n=1e4,Math.ceil(a/n)*n);c<=s?y(c):(f.a.fire({icon:"error",title:"Oops...",text:"Te haz pasado el limite de monto para este Tipo de Credito"}),y(0))},type:"range",className:"w-100 range simulador-scroll-input  ",min:"0",max:null!==(t=null===ee||void 0===ee?void 0:ee.montoMax)&&void 0!==t?t:1,value:L}),Object(O.jsx)("small",{className:"text-muted simulador-text-muted",children:"Desliza para elegir el monto deseado de su pr\xe9stamo"})]}),Object(O.jsxs)("div",{className:"form-group",children:[Object(O.jsx)("label",{htmlFor:"idSelectCredito",className:"d-flex my-2",children:Object(O.jsx)("b",{className:"simulador-titulo-formulario",children:"Cr\xe9dito"})}),Object(O.jsx)("select",{id:"idSelectCredito",className:"w-100 simulador-select",onChange:function(e){y(0);var t=e.target.value;x(t),P(t===n.VEHICULO),C(!1)},value:d,children:F.map((function(e){return Object(O.jsx)("option",{value:e.id,children:e.nombre},e.id)}))})]}),Object(O.jsxs)("div",{className:"form-group",children:[Object(O.jsx)("label",{htmlFor:"idSelectPlazo",className:"d-flex my-2",children:Object(O.jsx)("b",{className:"simulador-titulo-formulario",children:"Plazos / Cuotas"})}),Object(O.jsx)("select",{id:"idSelectPlazo",className:"w-100 simulador-select",onChange:function(e){U(parseInt(e.target.value)),C(!1)},value:R,children:null===ee||void 0===ee||null===(a=ee.plazos)||void 0===a?void 0:a.map((function(e,t){return Object(O.jsx)("option",{value:e,children:e},e)}))})]}),B&&Object(O.jsxs)("div",{className:"form-group",children:[Object(O.jsx)("label",{htmlFor:"idSelectAntiguedad",className:"d-flex my-2",children:Object(O.jsx)("b",{children:"Antiguedad"})}),Object(O.jsx)("select",{id:"idSelectAntiguedad",className:"w-100",onChange:function(e){var t=function(e,t){var a,n,l,c=0;switch(e){case s.DE_12_36_MESES:c=null!==(a=t.tasa_vehiculo_1)&&void 0!==a?a:1.3;break;case s.DE_37_120_MESES:c=null!==(n=t.tasa_vehiculo_2)&&void 0!==n?n:1.2;break;case s.MAS_120_MESES:c=null!==(l=t.tasa_vehiculo_3)&&void 0!==l?l:1.1}return c}(e.target.value,i);X(parseFloat(t.toString())),G(e.target.value),C(!1)},value:q,children:null===ee||void 0===ee||null===(c=ee.antiguedades)||void 0===c?void 0:c.map((function(e,t){return Object(O.jsx)("option",{value:e,children:e},e)}))}),Object(O.jsx)("small",{className:"text-muted my-2 d-block",children:"Selecciona la Antiguedad como asociado de la cooperativa"})]}),Object(O.jsx)("button",{onClick:function(){0!==L?(C(!0),E(!0)):f.a.fire({icon:"error",title:"Oops...",text:"No puedes hacer una prestamo con Monto: 0"})},className:"my-2 w-100 simulador-button",children:"Calcular"})]}),Object(O.jsx)("div",{className:"my-auto",children:_?Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("h2",{className:"text-center",children:"Detalle del Prestamo"}),Object(O.jsx)(v,{data:{tasa:W,plazo:R,montoSolicitado:L}}),Object(O.jsx)(h,{data:{tasa:W,plazo:R,montoSolicitado:L},visible:S,setVisible:E})]}):Object(O.jsx)("p",{})})]})},N=function(e){return Object(O.jsx)("div",{"data-testid":"Simulador",className:"container",children:Object(O.jsx)(p,{})})},S=a(7),E=(a(29),{text:"Loading..."}),g=function(e){var t=(e=Object(S.a)(Object(S.a)({},E),e)).text;return Object(O.jsx)("div",{className:"loader",children:t})},I=a(6),_=a.n(I),C=a(11);var V=function(){var e=function(e){var t=Object(l.useRef)(!0),a=Object(l.useState)({data:null,loading:!0,error:null}),n=Object(u.a)(a,2),s=n[0],c=n[1];return Object(l.useEffect)((function(){return function(){t.current=!1}}),[]),Object(l.useEffect)((function(){Object(C.a)(_.a.mark((function a(){var n;return _.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,fetch(e);case 3:return a.next=5,a.sent.json();case 5:n=a.sent,t.current&&c({loading:!1,data:n,error:null}),a.next=12;break;case 9:a.prev=9,a.t0=a.catch(0),c({loading:!0,data:null,error:"No se pudo cargar la info"});case 12:case"end":return a.stop()}}),a,null,[[0,9]])})))()}),[e]),s}(function(){var e=d,t=r,a=location.host,n=location.protocol+"//"+a+(location.href.includes("test")?"/test":"");return a.includes("localhost")&&(n=t),"".concat(n,"/").concat(e)}()),t=e.data;return e.loading?Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("h4",{className:"text-center",children:"Cargando Simulador ..."}),Object(O.jsx)(g,{})]}):Object(O.jsx)(m.Provider,{value:{tasaData:t},children:Object(O.jsx)(N,{})})},M=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,32)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,l=t.getLCP,c=t.getTTFB;a(e),n(e),s(e),l(e),c(e)}))};o.a.render(Object(O.jsx)(c.a.StrictMode,{children:Object(O.jsx)(V,{})}),document.getElementById("root-simulador")),M()}},[[31,1,2]]]);
//# sourceMappingURL=main.a15c7406.chunk.js.map