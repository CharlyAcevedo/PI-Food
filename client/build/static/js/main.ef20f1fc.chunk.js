(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{40:function(e,t,a){},55:function(e,t,a){},77:function(e,t,a){},85:function(e,t,a){},86:function(e,t,a){},87:function(e,t,a){},88:function(e,t,a){},89:function(e,t,a){},90:function(e,t,a){},91:function(e,t,a){},95:function(e,t,a){"use strict";a.r(t);var c=a(1),s=a.n(c),n=a(22),r=a.n(n),i=(a(54),a(55),a(13)),l=a(5),o=a(41),u=a(42),j=a(43),d=a(49),b=a(3),m=a(20),p=a(14),h=a.n(p),O=a(16),v=a.n(O),g="GET_ALL_TYPES",f="GET_ALL_RECIPES",x="SEARCH_RECIPE",_="GET_RECIPE_DETAILS",y="CREATE_RECIPE",N="RECIPES_ORDER_AND_FILTER",S="SET_CURRENT_PAGE",T="SET_PAGE_NUMBER",w="SET_CURRENT_LIMIT";function C(){return function(){var e=Object(m.a)(h.a.mark((function e(t){var a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v.a.get("/types");case 3:a=e.sent,t({type:g,payload:a.data}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),t({type:g,payload:{error:e.t0.message}});case 10:case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()}function k(){return function(){var e=Object(m.a)(h.a.mark((function e(t){var a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v.a.get("/recipes");case 3:a=e.sent,t({type:f,payload:a}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),t({type:f,payload:{error:e.t0.message}});case 10:case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()}function A(e){return function(t){try{t({type:N,payload:e})}catch(a){t({type:N,payload:{error:a.message}})}}}function D(e){return function(t){try{t({type:S,payload:e})}catch(a){t({type:S,payload:{error:a.message}})}}}function F(e){return function(t){try{t({type:T,payload:e})}catch(a){t({type:T,payload:{error:a.message}})}}}a(77);var E=a(0),P=function(e){Object(j.a)(a,e);var t=Object(d.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return Object(E.jsx)("div",{className:"landing_page",children:Object(E.jsxs)("div",{className:"container",children:[Object(E.jsx)("div",{className:"title_app",children:"The International Cuisine's App"}),Object(E.jsx)("h4",{className:"subtitle_app",children:"Here you will find the best recipes in the world, classified by cuisine, dish type and diet"}),Object(E.jsx)(i.b,{className:"link_Home",to:"/home",children:Object(E.jsx)("button",{className:"btn_w",children:"Wellcome"})})]})})}}]),a}(c.Component),R=Object(b.b)(null,(function(e){return{getAllTypes:function(){return e(C())},getAllRecipes:function(){return e(k())}}}))(P),L=a(10);a(85);function B(e){var t=e.image,a=e.name,c=e.diets.join(" - ");return Object(E.jsxs)("figure",{className:"recipe_card",children:[Object(E.jsx)("img",{src:t,alt:a,className:"card_image"}),Object(E.jsx)("figcaption",{className:"card_name",children:a}),Object(E.jsx)("figcaption",{className:"card_diets",children:c})]})}var I=a.p+"static/media/sirvecerveza.69895862.gif",H=a.p+"static/media/ensaladaprepara.d8e83541.gif";a(86);function z(){var e=Object(b.c)(),t=Object(b.d)((function(e){return e.pageToShow})),a=Object(b.d)((function(e){return e.currentOrder})),s=Object(b.d)((function(e){return e.currentFilter})),n=Object(c.useState)({prop:"name",value:"ASC"}),r=Object(L.a)(n,2),l=r[0],o=r[1],u=Object(c.useState)({prop:"name",value:"all"}),j=Object(L.a)(u,2),d=j[0],m=j[1];return Object(c.useEffect)((function(){e(A({order:l.value,orderBy:l.prop,filter:d.value,field:d.prop})),e(k())}),[]),Object(c.useEffect)((function(){o(a),m(s)}),[a,s]),Object(E.jsxs)("div",{children:[Object(E.jsx)("div",{className:"main_title",children:"The International Cuisine's App"}),Object(E.jsx)("img",{className:"back_image",src:I,alt:"Sirve cerveza"}),Object(E.jsx)("div",{className:"card_container",children:t.length?t.map((function(e){return Object(E.jsx)("div",{className:"cards",children:Object(E.jsx)(i.b,{className:"card_link",to:"/details/".concat(e.id),children:Object(E.jsx)(B,{image:e.image,name:e.name,diets:e.diets},e.id)})},e.id)})):Object(E.jsx)("img",{src:H,alt:"loading..."})})]})}var M=a.p+"static/media/corazon.0aeb6b78.gif",Y=a.p+"static/media/arrow.169b80b1.svg",Z=a.p+"static/media/search.43441226.svg";a(40);function G(){var e=Object(b.c)(),t=Object(b.d)((function(e){return e.allDiets})),a=Object(b.d)((function(e){return e.allCuisines})),s=Object(b.d)((function(e){return e.allDishTypes})),n=Object(b.d)((function(e){return e.currentOrder})),r=Object(b.d)((function(e){return e.currentFilter})),l=Object(c.useState)("ASC"),o=Object(L.a)(l,2),u=o[0],j=o[1],d=Object(c.useState)("name"),m=Object(L.a)(d,2),p=m[0],h=m[1],O=Object(c.useState)(""),v=Object(L.a)(O,2),g=v[0],f=v[1];Object(c.useEffect)((function(){e(C())}),[e]);var _=function(t){if("order"===t.target.name){var a={order:t.target.value,orderBy:p};j(t.target.value),e(A(a))}else if("orderBy"===t.target.name){var c={order:u,orderBy:t.target.value};h(t.target.value),e(A(c))}},y=function(t){var a={field:t.target.name,filter:t.target.value};e(A(a))},N=function(t){var a;t.preventDefault(),""===t.target.value?f(t.target.value):(f(t.target.value),e((a=t.target.value,function(e){try{e({type:x,payload:a})}catch(t){e({type:x,payload:{error:t.message}})}})))};return Object(E.jsx)("nav",{className:"nav_home",children:Object(E.jsxs)("section",{className:"nav_logo_container",children:[Object(E.jsx)("img",{src:M,alt:"",className:"nav_logo"}),Object(E.jsxs)("ul",{className:"links_container",children:[Object(E.jsx)("li",{className:"nav_list",children:Object(E.jsx)(i.b,{className:"nav_link",to:"/home",children:"Home"})}),Object(E.jsx)("li",{className:"nav_list",children:Object(E.jsx)(i.b,{className:"nav_link",to:"/create_recipe",children:"Create Recipe"})}),Object(E.jsxs)("li",{className:"nav_list nav_list--show",children:[Object(E.jsxs)("p",{className:"nav_link",children:["Order",Object(E.jsx)("img",{className:"menu_arrow",src:Y,alt:"an arrow"})]}),Object(E.jsxs)("ul",{className:"nav_nesting_menu",children:[Object(E.jsxs)("li",{className:"nav_link list_inside",children:["Order:",Object(E.jsxs)("select",{onChange:function(e){return _(e)},className:"select_nav",name:"order",value:n.value,children:[Object(E.jsx)("option",{value:"ASC",children:"Ascendant"}),Object(E.jsx)("option",{value:"DESC",children:"Descendant"})]})]}),Object(E.jsxs)("li",{className:"nav_link list_inside",children:["Order By:",Object(E.jsxs)("select",{onChange:function(e){return _(e)},className:"select_nav",name:"orderBy",value:n.prop,children:[Object(E.jsx)("option",{value:"name",children:"Title"}),Object(E.jsx)("option",{value:"score",children:"Score"}),Object(E.jsx)("option",{value:"healthScore",children:"Healt Score"})]})]})]})]}),Object(E.jsxs)("li",{className:"nav_list",children:[Object(E.jsxs)("p",{className:"nav_link",children:["Filter",Object(E.jsx)("img",{className:"menu_arrow",src:Y,alt:"an arrow"})]}),Object(E.jsxs)("ul",{className:"nav_nesting_menu",children:[Object(E.jsxs)("li",{className:"nav_link list_inside",children:["Diet:",Object(E.jsxs)("select",{onChange:function(e){return y(e)},className:"select_nav",name:"diets",value:"diets"===r.prop?r.value:"all",children:[Object(E.jsx)("option",{value:"all",children:"All Diets"}),t&&t.map((function(e){return Object(E.jsx)("option",{value:e.diet_name,children:e.diet_name},e.id)}))]})]}),Object(E.jsxs)("li",{className:"nav_link list_inside",children:["Cuisine:",Object(E.jsxs)("select",{onChange:function(e){return y(e)},className:"select_nav",name:"cuisines",value:"cuisines"===r.prop?r.value:"all",children:[Object(E.jsx)("option",{value:"all",children:"All Cuisines"}),a&&a.map((function(e){return Object(E.jsx)("option",{value:e.cuisine,children:e.cuisine},e.id)}))]})]}),Object(E.jsxs)("li",{className:"nav_link list_inside",children:["Dish Type:",Object(E.jsxs)("select",{onChange:function(e){return y(e)},className:"select_nav",name:"dishTypes",value:"dishTypes"===r.prop?r.value:"all",children:[Object(E.jsx)("option",{value:"all",children:"All Dish Types"}),s&&s.map((function(e){return Object(E.jsx)("option",{value:e.dishType,children:e.dishType},e.id)}))]})]})]})]})]}),Object(E.jsx)("input",{onChange:function(e){return N(e)},className:"nav_input",type:"search",value:g}),Object(E.jsx)("img",{className:"img_search",src:Z,alt:"search"})]})})}var U=a.p+"static/media/leftArrows.340a69e4.svg",K=a.p+"static/media/rightArrows.e6b54060.svg",V=a.p+"static/media/firstPage.b9816cec.svg",W=a.p+"static/media/lastPage.8d9f759f.svg";a(87);function J(){var e=Object(b.c)(),t=Object(b.d)((function(e){return e.currentLimit})),a=Object(b.d)((function(e){return e.recipesToShow})),s=Object(b.d)((function(e){return e.currentPage})),n=Object(c.useState)(t),r=Object(L.a)(n,2),i=r[0],l=r[1],o=Math.ceil(a.length/i),u=s*i,j=u-i;Object(c.useEffect)((function(){e(D({currentPage:s,offset:j,limit:u}))}),[e,j,u,s]);for(var d=Math.ceil(3),m=o<=6?o:s+d<=o&&s>=d?s+d:s<d?6:o,p=[],h=o<=6?1:s+d<=o&&s>=d?s-d+1:s<d?1:o-6+1;h<=m;h++)p.push(h);function O(t){var a;t.preventDefault(),e(F(1)),e((a=t.target.value,function(e){try{e({type:w,payload:a})}catch(t){e({type:w,payload:{error:t.message}})}})),l(t.target.value)}return Object(E.jsxs)("div",{className:"general_container",children:[Object(E.jsxs)("section",{className:"label_pagOf_container",children:[Object(E.jsxs)("div",{className:"label_current_page",children:["Pag: ",Object(E.jsx)("div",{className:"current_page_input",children:s})]}),Object(E.jsxs)("div",{className:"label_current_page",children:["Of: ",Object(E.jsx)("div",{className:"current_page_input",children:o})]})]}),Object(E.jsxs)("ul",{className:"paginated_container",children:[Object(E.jsx)("li",{className:"btn_paginated btn_pn_container",onClick:function(){1!==s&&e(F(1))},children:Object(E.jsx)("button",{className:"btn_primary btn_prev_next",children:Object(E.jsx)("img",{src:V,alt:"last Page"})})}),Object(E.jsx)("li",{className:"btn_paginated btn_pn_container",onClick:function(){1!==s&&1!==s&&e(F(s-1))},children:Object(E.jsx)("button",{className:"btn_primary btn_prev_next",children:Object(E.jsx)("img",{src:U,alt:"previous"})})}),p?p.map((function(t){return Object(E.jsx)("li",{className:"btn_paginated btn_main_paginated",children:Object(E.jsx)("button",{className:s===t?"btn_primary_active":"btn_primary",onClick:function(){e(D({currentPage:t,offset:0,limit:i}))},value:t,children:t})},t)})):Object(E.jsx)("li",{}),Object(E.jsx)("li",{className:"btn_paginated btn_pn_container",onClick:function(){s!==o&&s<a.length&&e(F(s+1))},children:Object(E.jsx)("button",{className:"btn_primary btn_prev_next",children:Object(E.jsx)("img",{src:K,alt:"next"})})}),Object(E.jsx)("li",{className:"btn_paginated btn_pn_container",onClick:function(){s!==o&&e(F(o))},children:Object(E.jsx)("button",{className:"btn_primary btn_prev_next",children:Object(E.jsx)("img",{src:W,alt:"last Page"})})})]}),Object(E.jsx)("section",{className:"toShow_selector",children:Object(E.jsxs)("label",{className:"select_page_label",children:["Pages to show:"," ",Object(E.jsxs)("select",{className:"select_page",value:i,onChange:function(e){return O(e)},children:[Object(E.jsx)("option",{value:"6",children:"6"}),Object(E.jsx)("option",{value:"7",children:"7"}),Object(E.jsx)("option",{value:"8",children:"8"}),Object(E.jsx)("option",{value:"9",children:"9"}),Object(E.jsx)("option",{value:"10",children:"10"}),Object(E.jsx)("option",{value:"11",children:"11"}),Object(E.jsx)("option",{value:"12",children:"12"})]})]})})]})}function q(){return Object(E.jsxs)("div",{className:"home",children:[Object(E.jsx)(G,{}),Object(E.jsx)(J,{}),Object(E.jsx)(z,{})]})}var Q=a.p+"static/media/batehuevo.c0af0331.gif";a(88);function X(){var e=Object(b.d)((function(e){return e.recipeDetails}));return Object(E.jsxs)("div",{className:"main_container",children:[Object(E.jsx)("img",{className:"back_image",src:Q,alt:"batehuevo"}),e?Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)("img",{className:"main_image",src:e.image,alt:"The Recipe"}),Object(E.jsx)("h1",{className:"main_title_details",children:e.name}),Object(E.jsxs)("div",{className:"symary_container",children:[Object(E.jsx)("h3",{children:"Sumary"}),Object(E.jsx)("p",{className:"summary",dangerouslySetInnerHTML:{__html:e.summary}})]}),Object(E.jsxs)("div",{className:"steps_container",children:[Object(E.jsx)("h3",{className:"steps_title",children:"Preparation steps"}),Object(E.jsx)("div",{className:"inher_container_steps",children:e.steps?e.steps.map((function(e){return Object(E.jsxs)("div",{className:"step_inher",children:[Object(E.jsxs)("div",{children:[e.number,".-"]}),Object(E.jsx)("div",{children:e.step})]},e.number)})):Object(E.jsx)("div",{children:"There are no steps listed for this recipe"})})]}),Object(E.jsxs)("div",{className:"diets_container",children:[Object(E.jsx)("h3",{className:"types_titles",children:"Diet Types"}),Object(E.jsx)("div",{className:"inher_container_diets",children:e.diets&&e.diets.map((function(e){return Object(E.jsx)("div",{className:"step_inher",children:e},e)}))})]}),Object(E.jsxs)("div",{className:"diets_container",children:[Object(E.jsx)("h3",{className:"types_titles",children:"Cuisine Types"}),Object(E.jsx)("div",{className:"inher_container_diets",children:e.cuisines&&e.cuisines.map((function(e){return Object(E.jsx)("div",{className:"step_inher",children:e},e)}))})]}),Object(E.jsxs)("div",{className:"diets_container",children:[Object(E.jsx)("h3",{className:"types_titles",children:"Dish Types"}),Object(E.jsx)("div",{className:"inher_container_diets",children:e.dishTypes&&e.dishTypes.map((function(e){return Object(E.jsx)("div",{className:"step_inher",children:e},e)}))})]}),Object(E.jsxs)("div",{className:"extras_container",children:[Object(E.jsx)("h3",{className:"extras_titles",children:"Aditional Info"}),Object(E.jsxs)("div",{className:"inher_container_extras scores",children:[Object(E.jsxs)("div",{children:["Score: ",e.score]}),Object(E.jsxs)("div",{children:["Healt Score: ",e.healthScore]})]}),Object(E.jsxs)("div",{className:"inher_container_extras others",children:[Object(E.jsxs)("div",{children:["Vegetarian: ",e.vegetarian?Object(E.jsx)("input",{checked:!0,type:"checkbox"}):Object(E.jsx)("input",{type:"checkbox"})]}),Object(E.jsxs)("div",{children:["Vegan: ",e.vegan?Object(E.jsx)("input",{checked:!0,type:"checkbox"}):Object(E.jsx)("input",{type:"checkbox"})]}),Object(E.jsxs)("div",{children:["Gluten Free: ",e.glutenFree?Object(E.jsx)("input",{checked:!0,type:"checkbox"}):Object(E.jsx)("input",{type:"checkbox"})]})]})]})]}):Object(E.jsx)("img",{src:H,alt:"loading..."})]})}function $(){return Object(E.jsx)("nav",{className:"nav_home",children:Object(E.jsxs)("section",{className:"nav_logo_container",children:[Object(E.jsx)("img",{src:M,alt:"",className:"nav_logo"}),Object(E.jsxs)("ul",{className:"links_container",children:[Object(E.jsx)("li",{className:"nav_list",children:Object(E.jsx)(i.b,{className:"nav_link",to:"/home",children:"Home"})}),Object(E.jsx)("li",{className:"nav_list",children:Object(E.jsx)(i.b,{className:"nav_link",to:"/create_recipe",children:"Create Recipe"})})]})]})})}a(89);function ee(e){var t=e.match.params.id,a=Object(b.c)();Object(c.useEffect)((function(){var e;a((e=t,function(){var t=Object(m.a)(h.a.mark((function t(a){var c;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,v.a.get("/recipes/".concat(e));case 3:c=t.sent,a({type:_,payload:c.data}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),a({type:_,payload:{error:t.t0.message}});case 10:case 11:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()))}),[a,t]);var s=Object(b.d)((function(e){return e.recipeDetails}));return Object(E.jsxs)("div",{className:"recipe_details_container",children:[Object(E.jsx)($,{}),Number(t)===Number(s.id)?Object(E.jsx)(X,{id:t}):Object(E.jsx)("img",{className:"image_loading",src:H,alt:"loading..."})]})}var te=a(15),ae=a(6),ce=a(2),se=a.p+"static/media/cafehumo.cbbf6865.gif",ne=/^[a-zA-Z0-9][a-zA-Z0-9]+\s[a-zA-Z0-9]+\s[a-zA-Z0-9]+/,re=/^[a-zA-Z0-9]{2}[a-zA-Z0-9]*\s*\w*/,ie=/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/,le=/[0-9]/;function oe(e,t){return!("name"!==e||!re.test(t))||(!("summary"!==e||!ne.test(t))||(!("image"!==e||!ie.test(t))||("healthScore"===e||"score"===e?le.test(t):"vegetarian"===e||"vegan"===e||"glutenFree"===e||(!("step"!==e||!ne.test(t))||("diets"===e||"cuisines"===e||"dishTypes"===e)))))}function ue(e){return e.name.length>0||(e.summary.length>0||(e.score.length>0||(e.healthScore.length>0||(e.image.length>0||(e.steps.length>0||(e.cuisines.length>0||(e.dishTypes.length>0||e.diets.length>0)))))))}a(90);function je(){var e=Object(b.c)();Object(c.useEffect)((function(){e(k()),e(C())}),[e]);var t=Object(b.d)((function(e){return e.allRecipes})),a=Object(b.d)((function(e){return e.allDiets})),s=Object(b.d)((function(e){return e.allCuisines})),n=Object(b.d)((function(e){return e.allDishTypes})),r=/^DBC-[0-9]/,i=t.filter((function(e){return r.test(e.id)})),l=i.length<10?"BDC-00".concat(i.length+1):i.length<100?"BDC-0".concat(i.length+1):"BDC-".concat(i.length+1),o=Object(c.useState)({id:l,name:"",summary:"",score:0,healthScore:0,image:"",vegetarian:!1,vegan:!1,glutenFree:!1,steps:[],actualStep:{number:1,step:""},cuisines:[],actualCuisine:"",dishTypes:[],actualDishType:"",diets:[],actualDiet:""}),u=Object(L.a)(o,2),j=u[0],d=u[1],p=Object(c.useState)({name:"Title must have at least 3 characters, which can only be letters or numbers",summary:"You must write a sentence with a minimum of three words",score:"You must write a number between 1 and 100",healthScore:"You must write a number between 1 and 100",image:"A valid HTML address must be entered for the image",step:"Step must be a sentence with at least 3 words",steps:"At least one step must be written, and it must be a sentence with at least 3 words",cuisines:"At least one type of cuisine must be selected",dishTypes:"At least one type of dish type must be selected",diets:"At least one type of diet must be selected"}),O=Object(L.a)(p,2),g=O[0],f=O[1],x=Object(c.useState)(!1),_=Object(L.a)(x,2),N=_[0],S=_[1];function T(e){if(oe(e.target.name,e.target.value))f((function(t){return Object(ce.a)(Object(ce.a)({},t),{},Object(ae.a)({},e.target.name,""))}));else switch(e.target.name){case"name":f((function(t){return Object(ce.a)(Object(ce.a)({},t),{},Object(ae.a)({},e.target.name,"Title must have at least 3 characters, which can only be letters or numbers"))}));break;case"summary":f((function(t){return Object(ce.a)(Object(ce.a)({},t),{},Object(ae.a)({},e.target.name,"You must write a sentence with a minimum of three words"))}));break;case"image":f((function(t){return Object(ce.a)(Object(ce.a)({},t),{},Object(ae.a)({},e.target.name,"A valid HTML address must be entered for the image"))}));break;case"score":case"healthScore":f((function(t){return Object(ce.a)(Object(ce.a)({},t),{},Object(ae.a)({},e.target.name,"You must write a number between 1 and 100"))}));break;case"steps":f((function(t){return Object(ce.a)(Object(ce.a)({},t),{},Object(ae.a)({},e.target.name,"At least one step must be written, and it must be a sentence with at least 3 words"))}));break;case"diets":f((function(t){return Object(ce.a)(Object(ce.a)({},t),{},Object(ae.a)({},e.target.name,"At least one type of diets must be selected"))}));break;case"cuisines":f((function(t){return Object(ce.a)(Object(ce.a)({},t),{},Object(ae.a)({},e.target.name,"At least one type of cuisine must be selected"))}));break;case"dishTypes":f((function(t){return Object(ce.a)(Object(ce.a)({},t),{},Object(ae.a)({},e.target.name,"At least one type of dish type must be selected"))}));break;case"step":f((function(t){return Object(ce.a)(Object(ce.a)({},t),{},Object(ae.a)({},e.target.name,"Step must be a sentence with at least 3 words"))}))}if("vegetarian"===e.target.name||"vegan"===e.target.name||"glutenFree"===e.target.name)d((function(t){return Object(ce.a)(Object(ce.a)({},t),{},Object(ae.a)({},e.target.name,e.target.checked))}));else if("step"===e.target.name)d((function(t){return Object(ce.a)(Object(ce.a)({},t),{},{actualStep:Object(ce.a)(Object(ce.a)({},t.actualStep),{},{step:e.target.value})})}));else if("diets"===e.target.name||"cuisines"===e.target.name||"dishTypes"===e.target.name){var t="diets"===e.target.name?"actualDiet":"cuisines"===e.target.name?"actualCuisine":"actualDishType";d((function(a){var c;return Object(ce.a)(Object(ce.a)({},a),{},(c={},Object(ae.a)(c,e.target.name,a[e.target.name].includes(e.target.value)?Object(te.a)(a[e.target.name]):[].concat(Object(te.a)(a[e.target.name]),[e.target.value])),Object(ae.a)(c,t,e.target.value),c))}))}else d((function(t){return Object(ce.a)(Object(ce.a)({},t),{},Object(ae.a)({},e.target.name,e.target.value))}));console.log(ue(g)),S(ue(g))}function w(){S(!0),f({name:"Title must have at least 3 characters, which can only be letters or numbers",summary:"You must write a sentence with a minimum of three words",score:"You must write a number between 1 and 100",healthScore:"You must write a number between 1 and 100",image:"A valid HTML address must be entered for the image",step:"Step must be a sentence with at least 3 words",steps:"At least one step must be written, and it must be a sentence with at least 3 words",cuisines:"At least one type of cuisine must be selected",dishTypes:"At least one type of dish type must be selected",diets:"At least one type of diet must be selected"}),d({id:l,name:"",summary:"",score:0,healthScore:0,image:"",vegetarian:!1,vegan:!1,glutenFree:!1,steps:[],actualStep:{number:1,step:""},cuisines:[],actualCuisine:"",dishTypes:[],actualDishType:"",diets:[],actualDiet:""})}return Object(E.jsxs)("div",{className:"form_page_container",children:[Object(E.jsx)("img",{className:"back_image",src:se,alt:"cafe humeante"}),Object(E.jsx)("div",{className:"form_container",children:Object(E.jsxs)("form",{action:"",children:[Object(E.jsxs)("section",{className:"form_sections",id:"section_title",children:[Object(E.jsx)("label",{className:"form_labels",htmlFor:"name",children:"Please, write a Title for your recipe:"}),Object(E.jsx)("input",{className:"input_form",type:"text",name:"name",value:j.name,onChange:T}),g.name.length>0?Object(E.jsx)("div",{className:"errors_alert",children:g.name}):Object(E.jsx)("div",{className:"ok_alert",children:"Title is OK"})]}),Object(E.jsxs)("section",{className:"form_sections",id:"section_summary",children:[Object(E.jsx)("label",{className:"form_labels",htmlFor:"summary",children:"Summary:"}),Object(E.jsx)("textarea",{className:"form_textArea",name:"summary",rows:"4",cols:"50",value:j.summary,onChange:T}),g.summary.length>0?Object(E.jsx)("div",{className:"errors_alert",children:g.summary}):Object(E.jsx)("div",{className:"ok_alert",children:"Sumary is OK"})]}),Object(E.jsxs)("section",{className:"form_sections",id:"section_inputs",children:[Object(E.jsx)("label",{htmlFor:"image",children:"Image:"}),Object(E.jsx)("input",{className:"input_form",type:"text",name:"image",value:j.image,onChange:T}),g.image.length>0?Object(E.jsx)("div",{className:"errors_alert",children:g.image}):Object(E.jsx)("div",{className:"ok_alert",children:"Image URL is OK"}),Object(E.jsx)("label",{htmlFor:"score",children:"Score:"}),Object(E.jsx)("input",{className:"input_form",type:"text",name:"score",value:j.score,onChange:T}),Object(E.jsx)("label",{htmlFor:"healthScore",children:"Healt Score:"}),Object(E.jsx)("input",{className:"input_form",type:"text",name:"healthScore",value:j.healthScore,onChange:T})]}),Object(E.jsxs)("section",{className:"form_sections",id:"section_checkbox",children:[Object(E.jsx)("label",{htmlFor:"vegetarian",children:"Vegetarian:"}),Object(E.jsx)("input",{className:"check_form",type:"checkbox",name:"vegetarian",checked:j.vegetarian,onChange:T}),Object(E.jsx)("label",{htmlFor:"vegan",children:"Vegan:"}),Object(E.jsx)("input",{className:"check_form",type:"checkbox",name:"vegan",checked:j.vegan,onChange:T}),Object(E.jsx)("label",{htmlFor:"glutenFree",children:"Gluten Free"}),Object(E.jsx)("input",{className:"check_form",type:"checkbox",name:"glutenFree",checked:j.glutenFree,onChange:T})]}),Object(E.jsxs)("section",{className:"steps_container",id:"section_steps",children:[Object(E.jsx)("label",{htmlFor:"step",children:"Steps"}),Object(E.jsx)("input",{className:"input_form",name:"number",type:"text",value:j.actualStep.number,readOnly:!0}),Object(E.jsx)("textarea",{className:"input_form",name:"step",id:"step",cols:"50",rows:"2",value:j.actualStep.step,onChange:T}),Object(E.jsx)("button",{className:"btn_form",id:"btn_addStep",disable:g.step.length>0?"true":"false",onClick:function(e){e.preventDefault(),oe("step",j.actualStep.step)&&(console.log("llega hasta aqui",oe("step",j.actualStep.step)),S(ue(g)),d((function(e){var t=e.actualStep.number+1,a=e.actualStep;return Object(ce.a)(Object(ce.a)({},e),{},{steps:[].concat(Object(te.a)(e.steps),[a]),actualStep:{number:t,step:""}})})),f((function(e){return Object(ce.a)(Object(ce.a)({},e),{},{step:"Step must be a sentence with at least 3 words",steps:""})})))},children:"Add Step"}),Object(E.jsx)("div",{className:"steps_container",children:j.steps.length>0?j.steps.map((function(e){return Object(E.jsxs)("div",{children:[e.number,".- ",e.step]},e.number)})):Object(E.jsx)("div",{className:"alert_msg",children:g.steps})})]}),Object(E.jsxs)("section",{className:"form_sections",id:"section_types",children:[Object(E.jsx)("label",{htmlFor:"diets",children:"Diet"}),Object(E.jsxs)("select",{className:"input_form",name:"diets",id:"diets",value:j.actualDiet,onChange:T,children:[Object(E.jsx)("option",{value:"",children:"Select one or more Diets"}),a&&a.map((function(e){return Object(E.jsx)("option",{value:e.diet_name,children:e.diet_name},e.id)}))]}),Object(E.jsx)("div",{children:j.diets.length>0?j.diets.map((function(e){return Object(E.jsx)("div",{children:e},e)})):Object(E.jsx)("div",{className:"alert_msg",children:g.diets})}),Object(E.jsx)("label",{htmlFor:"cuisines",children:"Cuisine"}),Object(E.jsxs)("select",{className:"input_form",name:"cuisines",id:"cuisines",value:j.actualCuisine,onChange:T,children:[Object(E.jsx)("option",{value:"",children:"Select one or more Cuisines"}),s&&s.map((function(e){return Object(E.jsx)("option",{value:e.cuisine,children:e.cuisine},e.id)}))]}),Object(E.jsx)("div",{children:j.cuisines.length>0?j.cuisines.map((function(e){return Object(E.jsx)("div",{children:e},e)})):Object(E.jsx)("div",{className:"alert_msg",children:g.cuisines})}),Object(E.jsx)("label",{htmlFor:"dishTypes",children:"DishType"}),Object(E.jsxs)("select",{className:"input_form",name:"dishTypes",id:"dishTypes",value:j.actualDishType,onChange:T,children:[Object(E.jsx)("option",{value:"",children:"Select one or more DishTypes"}),n&&n.map((function(e){return Object(E.jsx)("option",{value:e.dishType,children:e.dishType},e.id)}))]}),Object(E.jsx)("div",{children:j.dishTypes.length>0?j.dishTypes.map((function(e){return Object(E.jsx)("div",{children:e},e)})):Object(E.jsx)("div",{className:"alert_msg",children:g.dishTypes})})]}),Object(E.jsxs)("section",{className:"form_sections",id:"section_btns",children:[Object(E.jsx)("input",{className:"btn_form",id:"btn_reset",type:"button",value:"Reset",onClick:w}),Object(E.jsx)("input",{className:"btn_form",id:"btn_submit",type:"submit",value:"Send Recipe",disabled:N,onClick:function(t){t.preventDefault();var a,c={id:j.id,name:j.name,summary:j.summary,score:j.score,healthScore:j.healthScore,image:j.image,vegetarian:j.vegetarian,vegan:j.vegan,glutenFree:j.glutenFree,steps:j.steps,cuisines:j.cuisines,dishTypes:j.dishTypes,diets:j.diets};e((a=c,function(){var e=Object(m.a)(h.a.mark((function e(t){var c;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,console.log("este es el payload",a),e.next=4,v.a.post("/recipe",a);case 4:c=e.sent,console.log("respuesta",c),t({type:y,payload:c}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),t({type:y,payload:{error:e.t0.message}});case 12:case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}())),w()}})]})]})})]})}function de(){return Object(E.jsxs)("div",{children:[Object(E.jsx)($,{}),Object(E.jsx)(je,{})]})}a(91);var be=function(){return Object(E.jsx)(i.a,{children:Object(E.jsx)("div",{className:"App",children:Object(E.jsxs)(l.c,{children:[Object(E.jsx)(l.a,{exact:!0,path:"/",component:R}),Object(E.jsx)(l.a,{exact:!0,path:"/home",component:q}),Object(E.jsx)(l.a,{exact:!0,path:"/create_recipe",component:de}),Object(E.jsx)(l.a,{exact:!0,path:"/details/:id",component:ee})]})})})},me=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,96)).then((function(t){var a=t.getCLS,c=t.getFID,s=t.getFCP,n=t.getLCP,r=t.getTTFB;a(e),c(e),s(e),n(e),r(e)}))},pe=a(25),he=a(46),Oe=a(47);function ve(e){return e.map((function(e){if("string"!==typeof e.diets[0]){for(var t=[],a=e.diets.length,c=0;c<a;c++)t.push(e.diets[c].diet_name);e.diets=t}if("string"!==typeof e.cuisines[0]){for(var s=[],n=e.cuisines.length,r=0;r<n;r++)s.push(e.cuisines[r].cuisine);e.cuisines=s}if("string"!==typeof e.dishTypes[0]){for(var i=[],l=e.dishTypes.length,o=0;o<l;o++)i.push(e.dishTypes[o].dishType);e.dishTypes=i}return e}))}function ge(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"name",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"all",c=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"ASC",s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"name",n="all"===a?e:e.filter((function(e){return"name"===e[t]?e.name.toLowerCase().includes(a.toLowerCase()):e[t].includes(a)}));return n="ASC"===c?n.sort((function(e,t){return e[s]>t[s]?1:e[s]<t[s]?-1:0})):n.sort((function(e,t){return e[s]<t[s]?1:e[s]>t[s]?-1:0}))}var fe={recipesToShow:[],pageToShow:[],allRecipes:[],allDiets:[],allCuisines:[],allDishTypes:[],recipeDetails:{},currentFilter:{prop:"name",value:"all"},currentOrder:{prop:"name",value:"ASC"},currentLimit:9,currentPage:1,created:"",errors:""},xe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:fe,t=arguments.length>1?arguments[1]:void 0,a=t.type,c=t.payload;switch(a){case g:return c.error?Object(ce.a)(Object(ce.a)({},e),{},{errors:c.error}):Object(ce.a)(Object(ce.a)({},e),{},{allCuisines:Object(te.a)(c[0].cuisines),allDiets:Object(te.a)(c[0].diets),allDishTypes:Object(te.a)(c[0].dishTypes)});case f:if(c.error)return Object(ce.a)(Object(ce.a)({},e),{},{errors:c.error});var s=ve(c.data),n=(s=ge(s,e.currentFilter.prop,e.currentFilter.value,e.currentOrder.value,e.currentOrder.prop)).slice(0,e.currentLimit);return Object(ce.a)(Object(ce.a)({},e),{},{allRecipes:s,recipesToShow:s,pageToShow:n,currentPage:1});case N:if(c.error)return Object(ce.a)(Object(ce.a)({},e),{},{errors:c.error});var r=ge(e.allRecipes,c.field?c.field:e.currentFilter.prop,c.filter?c.filter:e.currentFilter.value,c.order?c.order:e.currentOrder.value,c.orderBy?c.orderBy:e.currentOrder.prop),i=r.slice(0,e.currentLimit);return Object(ce.a)(Object(ce.a)({},e),{},{recipesToShow:r,pageToShow:i,currentPage:1,currentOrder:{prop:c.orderBy?c.orderBy:e.currentOrder.prop,value:c.order?c.order:e.currentOrder.value},currentFilter:{prop:c.field?c.field:e.currentFilter.prop,value:c.filter?c.filter:e.currentFilter.value}});case S:if(c.error)return Object(ce.a)(Object(ce.a)({},e),{},{errors:c.error});var l=e.recipesToShow.slice(c.offset,c.limit);return Object(ce.a)(Object(ce.a)({},e),{},{pageToShow:l,currentPage:c.currentPage});case T:return c.error?Object(ce.a)(Object(ce.a)({},e),{},{errors:c.error}):Object(ce.a)(Object(ce.a)({},e),{},{currentPage:c});case w:return c.error?Object(ce.a)(Object(ce.a)({},e),{},{errors:c.error}):Object(ce.a)(Object(ce.a)({},e),{},{currentLimit:c});case x:if(c.error)return Object(ce.a)(Object(ce.a)({},e),{},{errors:c.error});var o=ge(e.allRecipes,"name",c||e.currentFilter.value,"ASC","name"),u=o.slice(0,e.currentLimit);return Object(ce.a)(Object(ce.a)({},e),{},{recipesToShow:o,pageToShow:u,currentPage:1,currentOrder:{prop:"name",value:"ASC"},currentFilter:{prop:"name",value:c}});case _:if(c.error)return Object(ce.a)(Object(ce.a)({},e),{},{errors:c.error});var j=/^DBC-[0-9]/;if("string"===typeof c.id&&j.test(c.id)){var d=[c];return d=ve(d),Object(ce.a)(Object(ce.a)({},e),{},{recipeDetails:d[0]})}return Object(ce.a)(Object(ce.a)({},e),{},{recipeDetails:c});case y:return c.error?Object(ce.a)(Object(ce.a)({},e),{},{errors:c.error}):Object(ce.a)(Object(ce.a)({},e),{},{created:c});default:return e}},_e=Object(pe.createStore)(xe,Object(he.composeWithDevTools)(Object(pe.applyMiddleware)(Oe.a))),ye=a(48);a.n(ye).a.config(),v.a.defaults.baseURL=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_API||"http://localhost:3001",r.a.render(Object(E.jsx)(b.a,{store:_e,children:Object(E.jsx)(s.a.StrictMode,{children:Object(E.jsx)(be,{})})}),document.getElementById("root")),me()}},[[95,1,2]]]);
//# sourceMappingURL=main.ef20f1fc.chunk.js.map