import e,{Service as n,MapField as r}from"protobufjs";var t={double:"number",float:"number",int32:"number",int64:"number",uint32:"number",uint64:"number",sint32:"number",sint64:"number",fixed32:"number",fixed64:"number",sfixed32:"number",sfixed64:"number",bool:"boolean",string:"string",bytes:"string"},a="google.protobuf.Empty";function u(r){var t,a,u=e.parse(r,{keepCase:!0,alternateCommentMode:!0});return a=(t=u.package?u.root.lookup(u.package):u.root).nestedArray.find(function(e){return e instanceof n}),t.lookupService(a.name).methods}function o(e){switch(e){case"string":return"Hello";case"number":return 10;case"bool":return!0;case"int32":return 10;case"int64":return 20;case"uint32":case"uint64":case"sint32":return 100;case"sint64":return 1200;case"fixed32":return 1400;case"fixed64":return 1500;case"sfixed32":return 1600;case"sfixed64":return 1700;case"double":return 1.4;case"float":return 1.1;case"bytes":return new Buffer("Hello");default:return null}}function s(t,a){var u=e.parse(t,{keepCase:!0,alternateCommentMode:!0});return function(e,t){var a=e.nestedArray.find(function(e){return e instanceof n}),u=e.lookupService(a.name);return function e(n,t){return n.lookupType(t).fieldsArray.reduce(function(t,a){var u,s,i,c,p,m,f,y;if(a instanceof r){var d=o(a.keyType),l=o(a.type),b=l?((s={})[a.name]=((u={})[d]=l,u),s):((c={})[a.name]=((i={})[d]=e(n,a.type),i),c);return Object.assign({},t,b)}if("repeated"===a.rule){var k=o(a.type),g=k?((p={})[a.name]=[k],p):((m={})[a.name]=[e(n,a.type)],m);return Object.assign({},t,g)}var v=o(a.type),j=v?((f={})[a.name]=v,f):((y={})[a.name]=e(n,a.type),y);return Object.assign({},t,j)},{})}(e,u.methods[t].responseType)}(u.package?u.root.lookup(u.package):u.root,a)}function i(e){var n=e.nested;return n?Object.keys(n).map(function(e){var r=n[e];return Object.keys(r).map(function(n){return"fields"===n?function(e,n){var r=function(e,n){return{category:"fields",name:e,params:Object.keys(n).map(function(e){var r,a=n[e];return{type:t[a.type]||a.type,keyType:(r=a,r.keyType?t[r.keyType]||r.keyType:""),name:e,rule:a.rule,id:a.id}}).sort(function(e,n){return e.id-n.id})}}(e,n.fields),a=r.params.map(function(e){return"repeated"===e.rule?"  "+e.name+": "+e.type+"[];\n":e.keyType?"  "+e.name+": {[key: "+e.keyType+"]: "+e.type+"};\n":"  "+e.name+": "+e.type+";\n"});return n.nested&&Object.keys(n.nested).forEach(function(e){a.push("  "+e+": "+e+";\n")}),"interface "+r.name+" {\n"+a.join("")+"}\n\n"}(e,r):"methods"===n?function(e,n){return""+function(e,n){return{category:"methods",name:e,params:Object.keys(n).map(function(e){return Object.assign({},{name:e},n[e])})}}(e,r.methods).params.map(function(e){return"interface "+e.name+" {\n  ("+(e.requestType===a?"":"params: "+e.requestType)+"): Promise<"+(e.responseType===a?"{}":e.responseType)+">;\n}\n\n"}).join("")}(e):"values"===n?function(e,n){var t=r.values;return"enum "+e+" {\n"+Object.keys(t).map(function(e){return{name:e,id:t[e]}}).sort(function(e,n){return e.id-n.id}).map(function(e){return"  "+e.name+" = "+e.id+",\n"}).join("")+"}\n\n"}(e):"nested"===n?i(r):void 0})}).reduce(function(e,n){return e.concat(n)},[]).join(""):""}function c(n){var r=e.parse(n,{keepCase:!0});return i(r.package?r.root.lookup(r.package).toJSON():r.root.toJSON())}export default{parseProto:c,getAllMethods:u,mockResponse:s};export{i as printTypescript,c as parseProto,u as getAllMethods,s as mockResponse};
//# sourceMappingURL=index.esm.js.map
