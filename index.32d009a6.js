function t(t){return t&&t.__esModule?t.default:t}var e,i,n,o,s,r,a,l,c,h,u,p,d="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},f={},m={},g=d.parcelRequirebfda;null==g&&((g=function(t){if(t in f)return f[t].exports;if(t in m){var e=m[t];delete m[t];var i={id:t,exports:{}};return f[t]=i,e.call(i.exports,i,i.exports),i.exports}var n=Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(t,e){m[t]=e},d.parcelRequirebfda=g),g.register("fa1Gd",function(t,e){var i,n;i="undefined"!=typeof window?window:t.exports,n=function(t,e){var i,n=[],o=Object.getPrototypeOf,s=n.slice,r=n.flat?function(t){return n.flat.call(t)}:function(t){return n.concat.apply([],t)},a=n.push,l=n.indexOf,c={},h=c.toString,u=c.hasOwnProperty,p=u.toString,d=p.call(Object),f={},m=function(t){// Support: Chrome <=57, Firefox <=52
// In some browsers, typeof returns "function" for HTML <object> elements
// (i.e., `typeof document.createElement( "object" ) === "function"`).
// We don't want to classify *any* DOM node as a function.
// Support: QtWeb <=3.8.5, WebKit <=534.34, wkhtmltopdf tool <=0.12.5
// Plus for old WebKit, typeof returns "function" for HTML collections
// (e.g., `typeof document.getElementsByTagName("div") === "function"`). (gh-4756)
return"function"==typeof t&&"number"!=typeof t.nodeType&&"function"!=typeof t.item},g=function(t){return null!=t&&t===t.window},v=t.document,y={type:!0,src:!0,nonce:!0,noModule:!0};function x(t,e,i){var n,o,s=(i=i||v).createElement("script");if(s.text=t,e)for(n in y)// Support: Firefox 64+, Edge 18+
// Some browsers don't support the "nonce" property on scripts.
// On the other hand, just using `getAttribute` is not enough as
// the `nonce` attribute is reset to an empty string whenever it
// becomes browsing-context connected.
// See https://github.com/whatwg/html/issues/2369
// See https://html.spec.whatwg.org/#nonce-attributes
// The `node.getAttribute` check was added for the sake of
// `jQuery.globalEval` so that it can fake a nonce-containing node
// via an object.
(o=e[n]||e.getAttribute&&e.getAttribute(n))&&s.setAttribute(n,o);i.head.appendChild(s).parentNode.removeChild(s)}function b(t){return null==t?t+"":"object"==typeof t||"function"==typeof t?c[h.call(t)]||"object":typeof t}/* global Symbol */// Defining this global in .eslintrc.json would create a danger of using the global
// unguarded in another place, it seems safer to define global only for this module
var S="3.7.1",w=/HTML$/i,T=function(t,e){// The jQuery object is actually just the init constructor 'enhanced'
// Need init if jQuery is called (just allow error to be thrown if not included)
return new T.fn.init(t,e)};function E(t){// Support: real iOS 8.2 only (not reproducible in simulator)
// `in` check used to prevent JIT error (gh-2145)
// hasOwn isn't used here due to false negatives
// regarding Nodelist length in IE
var e=!!t&&"length"in t&&t.length,i=b(t);return!(m(t)||g(t))&&("array"===i||0===e||"number"==typeof e&&e>0&&e-1 in t)}function k(t,e){return t.nodeName&&t.nodeName.toLowerCase()===e.toLowerCase()}T.fn=T.prototype={// The current version of jQuery being used
jquery:S,constructor:T,// The default length of a jQuery object is 0
length:0,toArray:function(){return s.call(this)},// Get the Nth element in the matched element set OR
// Get the whole matched element set as a clean array
get:function(t){return(// Return all the elements in a clean array
null==t?s.call(this):t<0?this[t+this.length]:this[t])},// Take an array of elements and push it onto the stack
// (returning the new matched element set)
pushStack:function(t){// Build a new jQuery matched element set
var e=T.merge(this.constructor(),t);// Return the newly-formed element set
return(// Add the old object onto the stack (as a reference)
e.prevObject=this,e)},// Execute a callback for every element in the matched set.
each:function(t){return T.each(this,t)},map:function(t){return this.pushStack(T.map(this,function(e,i){return t.call(e,i,e)}))},slice:function(){return this.pushStack(s.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(T.grep(this,function(t,e){return(e+1)%2}))},odd:function(){return this.pushStack(T.grep(this,function(t,e){return e%2}))},eq:function(t){var e=this.length,i=+t+(t<0?e:0);return this.pushStack(i>=0&&i<e?[this[i]]:[])},end:function(){return this.prevObject||this.constructor()},// For internal use only.
// Behaves like an Array's method, not like a jQuery method.
push:a,sort:n.sort,splice:n.splice},T.extend=T.fn.extend=function(){var t,e,i,n,o,s,r=arguments[0]||{},a=1,l=arguments.length,c=!1;for("boolean"==typeof r&&(c=r,// Skip the boolean and the target
r=arguments[a]||{},a++),"object"==typeof r||m(r)||(r={}),a===l&&(r=this,a--);a<l;a++)// Only deal with non-null/undefined values
if(null!=(t=arguments[a]))for(e in t)n=t[e],"__proto__"!==e&&r!==n&&(c&&n&&(T.isPlainObject(n)||(o=Array.isArray(n)))?(i=r[e],s=o&&!Array.isArray(i)?[]:o||T.isPlainObject(i)?i:{},o=!1,// Never move original objects, clone them
r[e]=T.extend(c,s,n)):void 0!==n&&(r[e]=n));// Return the modified object
return r},T.extend({// Unique for each copy of jQuery on the page
expando:"jQuery"+(S+Math.random()).replace(/\D/g,""),// Assume jQuery is ready without the ready module
isReady:!0,error:function(t){throw Error(t)},noop:function(){},isPlainObject:function(t){var e,i;return(// Detect obvious negatives
// Use toString instead of jQuery.type to catch host objects
!!t&&"[object Object]"===h.call(t)&&(!(e=o(t))||"function"==typeof// Objects with prototype are plain iff they were constructed by a global Object function
(i=u.call(e,"constructor")&&e.constructor)&&p.call(i)===d))},isEmptyObject:function(t){var e;for(e in t)return!1;return!0},// Evaluates a script in a provided context; falls back to the global one
// if not specified.
globalEval:function(t,e,i){x(t,{nonce:e&&e.nonce},i)},each:function(t,e){var i,n=0;if(E(t))for(i=t.length;n<i&&!1!==e.call(t[n],n,t[n]);n++);else for(n in t)if(!1===e.call(t[n],n,t[n]))break;return t},// Retrieve the text value of an array of DOM nodes
text:function(t){var e,i="",n=0,o=t.nodeType;if(!o)for(;e=t[n++];)i+=T.text(e);return 1===o||11===o?t.textContent:9===o?t.documentElement.textContent:3===o||4===o?t.nodeValue:i},// results is for internal usage only
makeArray:function(t,e){var i=e||[];return null!=t&&(E(Object(t))?T.merge(i,"string"==typeof t?[t]:t):a.call(i,t)),i},inArray:function(t,e,i){return null==e?-1:l.call(e,t,i)},isXMLDoc:function(t){var e=t&&t.namespaceURI,i=t&&(t.ownerDocument||t).documentElement;// Assume HTML when documentElement doesn't yet exist, such as inside
// document fragments.
return!w.test(e||i&&i.nodeName||"HTML")},// Support: Android <=4.0 only, PhantomJS 1 only
// push.apply(_, arraylike) throws on ancient WebKit
merge:function(t,e){for(var i=+e.length,n=0,o=t.length;n<i;n++)t[o++]=e[n];return t.length=o,t},grep:function(t,e,i){// Go through the array, only saving the items
// that pass the validator function
for(var n=[],o=0,s=t.length,r=!i;o<s;o++)!e(t[o],o)!==r&&n.push(t[o]);return n},// arg is for internal usage only
map:function(t,e,i){var n,o,s=0,a=[];// Go through the array, translating each of the items to their new values
if(E(t))for(n=t.length;s<n;s++)null!=(o=e(t[s],s,i))&&a.push(o);else for(s in t)null!=(o=e(t[s],s,i))&&a.push(o);// Flatten any nested arrays
return r(a)},// A global GUID counter for objects
guid:1,// jQuery.support is not used in Core but other projects attach their
// properties to it so it needs to exist.
support:f}),"function"==typeof Symbol&&(T.fn[Symbol.iterator]=n[Symbol.iterator]),// Populate the class2type map
T.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(t,e){c["[object "+e+"]"]=e.toLowerCase()});var P=n.pop,C=n.sort,A=n.splice,D="[\\x20\\t\\r\\n\\f]",I=RegExp("^"+D+"+|((?:^|[^\\\\])(?:\\\\.)*)"+D+"+$","g");// Note: an element does not contain itself
T.contains=function(t,e){var i=e&&e.parentNode;return t===i||!!(i&&1===i.nodeType&&// Support: IE 9 - 11+
// IE doesn't have `contains` on SVG.
(t.contains?t.contains(i):t.compareDocumentPosition&&16&t.compareDocumentPosition(i)))};// CSS string/identifier serialization
// https://drafts.csswg.org/cssom/#common-serializing-idioms
var _=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;function H(t,e){return e?// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
"\x00"===t?"�":t.slice(0,-1)+"\\"+t.charCodeAt(t.length-1).toString(16)+" ":"\\"+t}T.escapeSelector=function(t){return(t+"").replace(_,H)},function(){var e,i,o,r,c,h,p,d,m,g,y=a,x=T.expando,b=0,S=0,w=tt(),E=tt(),_=tt(),H=tt(),X=function(t,e){return t===e&&(c=!0),0},L="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",// https://www.w3.org/TR/css-syntax-3/#ident-token-diagram
O="(?:\\\\[\\da-fA-F]{1,6}"+D+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\x00-\\x7f])+",Y="\\["+D+"*("+O+")(?:"+D+// Operator (capture 2)
"*([*^$|!~]?=)"+D+// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+O+"))|)"+D+"*\\]",z=":("+O+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+Y+")*)|.*)\\)|)",M=RegExp(D+"+","g"),N=RegExp("^"+D+"*,"+D+"*"),R=RegExp("^"+D+"*([>+~]|"+D+")"+D+"*"),j=RegExp(D+"|>"),W=new RegExp(z),B=RegExp("^"+O+"$"),q={ID:RegExp("^#("+O+")"),CLASS:RegExp("^\\.("+O+")"),TAG:RegExp("^("+O+"|[*])"),ATTR:RegExp("^"+Y),PSEUDO:RegExp("^"+z),CHILD:RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+D+"*(even|odd|(([+-]|)(\\d*)n|)"+D+"*(?:([+-]|)"+D+"*(\\d+)|))"+D+"*\\)|)","i"),bool:RegExp("^(?:"+L+")$","i"),// For use in libraries implementing .is()
// We use this for POS matching in `select`
needsContext:RegExp("^"+D+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+D+"*((?:-\\d)?\\d*)"+D+"*\\)|)(?=[^-]|$)","i")},F=/^(?:input|select|textarea|button)$/i,V=/^h\d$/i,U=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,$=/[+~]/,// https://www.w3.org/TR/CSS21/syndata.html#escaped-characters
G=RegExp("\\\\[\\da-fA-F]{1,6}"+D+"?|\\\\([^\\r\\n\\f])","g"),K=function(t,e){var i="0x"+t.slice(1)-65536;return e||(i<0?String.fromCharCode(i+65536):String.fromCharCode(i>>10|55296,1023&i|56320))},// Support: IE 9 - 11+, Edge 12 - 18+
// Removing the function wrapper causes a "Permission Denied"
// error in IE/Edge.
Q=function(){tr()},Z=th(function(t){return!0===t.disabled&&k(t,"fieldset")},{dir:"parentNode",next:"legend"});// Optimize for push.apply( _, NodeList )
try{y.apply(n=s.call(v.childNodes),v.childNodes),// Support: Android <=4.0
// Detect silently failing push.apply
// eslint-disable-next-line no-unused-expressions
n[v.childNodes.length].nodeType}catch(t){y={apply:function(t,e){a.apply(t,s.call(e))},call:function(t){a.apply(t,s.call(arguments,1))}}}function J(t,e,i,n){var o,s,r,a,l,c,u,p=e&&e.ownerDocument,g=e?e.nodeType:9;// Return early from calls with invalid selector or context
if(i=i||[],"string"!=typeof t||!t||1!==g&&9!==g&&11!==g)return i;// Try to shortcut find operations (as opposed to filters) in HTML documents
if(!n&&(tr(e),e=e||h,d)){// If the selector is sufficiently simple, try using a "get*By*" DOM method
// (excepting DocumentFragment context, where the methods don't exist)
if(11!==g&&(l=U.exec(t))){// ID selector
if(o=l[1]){// Document context
if(9===g){if(!(r=e.getElementById(o)))return i;if(r.id===o)return y.call(i,r),i;// Element context
}else // getElementById can match elements by name instead of ID
if(p&&(r=p.getElementById(o))&&J.contains(e,r)&&r.id===o)return y.call(i,r),i}else if(l[2])return y.apply(i,e.getElementsByTagName(t)),i;else if((o=l[3])&&e.getElementsByClassName)return y.apply(i,e.getElementsByClassName(o)),i}// Take advantage of querySelectorAll
if(!H[t+" "]&&(!m||!m.test(t))){// qSA considers elements outside a scoping root when evaluating child or
// descendant combinators, which is not what we want.
// In such cases, we work around the behavior by prefixing every selector in the
// list with an ID selector referencing the scope context.
// The technique has to be used as well when a leading combinator is used
// as such selectors are not recognized by querySelectorAll.
// Thanks to Andrew Dupont for this technique.
if(u=t,p=e,1===g&&(j.test(t)||R.test(t))){for(// Expand context for sibling selectors
(p=$.test(t)&&ts(e.parentNode)||e)==e&&f.scope||((a=e.getAttribute("id"))?a=T.escapeSelector(a):e.setAttribute("id",a=x)),s=// Prefix every selector in the list
(c=tl(t)).length;s--;)c[s]=(a?"#"+a:":scope")+" "+tc(c[s]);u=c.join(",")}try{return y.apply(i,p.querySelectorAll(u)),i}catch(e){H(t,!0)}finally{a===x&&e.removeAttribute("id")}}}// All others
return tf(t.replace(I,"$1"),e,i,n)}/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */function tt(){var t=[];function e(n,o){return t.push(n+" ")>i.cacheLength&&delete e[t.shift()],e[n+" "]=o}return e}/**
 * Mark a function for special use by jQuery selector module
 * @param {Function} fn The function to mark
 */function te(t){return t[x]=!0,t}/**
 * Support testing using an element
 * @param {Function} fn Passed the created element and returns a boolean result
 */function ti(t){var e=h.createElement("fieldset");try{return!!t(e)}catch(t){return!1}finally{e.parentNode&&e.parentNode.removeChild(e),// release memory in IE
e=null}}/**
 * Returns a function to use in pseudos for :enabled/:disabled
 * @param {Boolean} disabled true for :disabled; false for :enabled
 */function tn(t){// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
return function(e){// Only certain elements can match :enabled or :disabled
// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
if("form"in e)return(// Check for inherited disabledness on relevant non-disabled elements:
// * listed form-associated elements in a disabled fieldset
//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
// * option elements in a disabled optgroup
//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
// All such elements have a "form" property.
e.parentNode&&!1===e.disabled?// Option elements defer to a parent optgroup if present
"label"in e?"label"in e.parentNode?e.parentNode.disabled===t:e.disabled===t:e.isDisabled===t||// Where there is no isDisabled, check manually
!t!==e.isDisabled&&Z(e)===t:e.disabled===t);return"label"in e&&e.disabled===t}}/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */function to(t){return te(function(e){return e=+e,te(function(i,n){// Match elements found at the specified indexes
for(var o,s=t([],i.length,e),r=s.length;r--;)i[o=s[r]]&&(i[o]=!(n[o]=i[o]))})})}/**
 * Checks a node for validity as a jQuery selector context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */function ts(t){return t&&void 0!==t.getElementsByTagName&&t}/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [node] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */function tr(t){var e,n=t?t.ownerDocument||t:v;return n!=h&&9===n.nodeType&&n.documentElement&&(p=// Update global variables
(h=n).documentElement,d=!T.isXMLDoc(h),// Support: iOS 7 only, IE 9 - 11+
// Older browsers didn't support unprefixed `matches`.
g=p.matches||p.webkitMatchesSelector||p.msMatchesSelector,p.msMatchesSelector&&// Support: IE 11+, Edge 17 - 18+
// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
// two documents; shallow comparisons work.
// eslint-disable-next-line eqeqeq
v!=h&&(e=h.defaultView)&&e.top!==e&&e.addEventListener("unload",Q),// Support: IE <10
// Check if getElementById returns elements by name
// The broken getElementById methods don't pick up programmatically-set names,
// so use a roundabout getElementsByName test
f.getById=ti(function(t){return p.appendChild(t).id=T.expando,!h.getElementsByName||!h.getElementsByName(T.expando).length}),// Support: IE 9 only
// Check to see if it's possible to do matchesSelector
// on a disconnected node.
f.disconnectedMatch=ti(function(t){return g.call(t,"*")}),// Support: IE 9 - 11+, Edge 12 - 18+
// IE/Edge don't support the :scope pseudo-class.
f.scope=ti(function(){return h.querySelectorAll(":scope")}),// Support: Chrome 105 - 111 only, Safari 15.4 - 16.3 only
// Make sure the `:has()` argument is parsed unforgivingly.
// We include `*` in the test to detect buggy implementations that are
// _selectively_ forgiving (specifically when the list includes at least
// one valid selector).
// Note that we treat complete lack of support for `:has()` as if it were
// spec-compliant support, which is fine because use of `:has()` in such
// environments will fail in the qSA path and fall back to jQuery traversal
// anyway.
f.cssHas=ti(function(){try{return h.querySelector(":has(*,:jqfake)"),!1}catch(t){return!0}}),f.getById?(i.filter.ID=function(t){var e=t.replace(G,K);return function(t){return t.getAttribute("id")===e}},i.find.ID=function(t,e){if(void 0!==e.getElementById&&d){var i=e.getElementById(t);return i?[i]:[]}}):(i.filter.ID=function(t){var e=t.replace(G,K);return function(t){var i=void 0!==t.getAttributeNode&&t.getAttributeNode("id");return i&&i.value===e}},// Support: IE 6 - 7 only
// getElementById is not reliable as a find shortcut
i.find.ID=function(t,e){if(void 0!==e.getElementById&&d){var i,n,o,s=e.getElementById(t);if(s){if(// Verify the id attribute
(i=s.getAttributeNode("id"))&&i.value===t)return[s];for(// Fall back on getElementsByName
o=e.getElementsByName(t),n=0;s=o[n++];)if((i=s.getAttributeNode("id"))&&i.value===t)return[s]}return[]}}),// Tag
i.find.TAG=function(t,e){return void 0!==e.getElementsByTagName?e.getElementsByTagName(t):e.querySelectorAll(t)},// Class
i.find.CLASS=function(t,e){if(void 0!==e.getElementsByClassName&&d)return e.getElementsByClassName(t)},/* QSA/matchesSelector
	---------------------------------------------------------------------- */// QSA and matchesSelector support
m=[],// Build QSA regex
// Regex strategy adopted from Diego Perini
ti(function(t){var e;p.appendChild(t).innerHTML="<a id='"+x+"' href='' disabled='disabled'></a><select id='"+x+"-\r\\' disabled='disabled'><option selected=''></option></select>",t.querySelectorAll("[selected]").length||m.push("\\["+D+"*(?:value|"+L+")"),t.querySelectorAll("[id~="+x+"-]").length||m.push("~="),t.querySelectorAll("a#"+x+"+*").length||m.push(".#.+[+~]"),t.querySelectorAll(":checked").length||m.push(":checked"),// Support: Windows 8 Native Apps
// The type and name attributes are restricted during .innerHTML assignment
(e=h.createElement("input")).setAttribute("type","hidden"),t.appendChild(e).setAttribute("name","D"),// Support: IE 9 - 11+
// IE's :disabled selector does not pick up the children of disabled fieldsets
// Support: Chrome <=105+, Firefox <=104+, Safari <=15.4+
// In some of the document kinds, these selectors wouldn't work natively.
// This is probably OK but for backwards compatibility we want to maintain
// handling them through jQuery traversal in jQuery 3.x.
p.appendChild(t).disabled=!0,2!==t.querySelectorAll(":disabled").length&&m.push(":enabled",":disabled"),// Support: IE 11+, Edge 15 - 18+
// IE 11/Edge don't find elements on a `[name='']` query in some cases.
// Adding a temporary attribute to the document before the selection works
// around the issue.
// Interestingly, IE 10 & older don't seem to have the issue.
(e=h.createElement("input")).setAttribute("name",""),t.appendChild(e),t.querySelectorAll("[name='']").length||m.push("\\["+D+"*name"+D+"*="+D+"*(?:''|\"\")")}),f.cssHas||// Our regular `try-catch` mechanism fails to detect natively-unsupported
// pseudo-classes inside `:has()` (such as `:has(:contains("Foo"))`)
// in browsers that parse the `:has()` argument as a forgiving selector list.
// https://drafts.csswg.org/selectors/#relational now requires the argument
// to be parsed unforgivingly, but browsers have not yet fully adjusted.
m.push(":has"),m=m.length&&new RegExp(m.join("|")),/* Sorting
	---------------------------------------------------------------------- */// Document order sorting
X=function(t,e){// Flag for duplicate removal
if(t===e)return c=!0,0;// Sort on method existence if only one input has compareDocumentPosition
var i=!t.compareDocumentPosition-!e.compareDocumentPosition;return i||(1&// Calculate position if both inputs belong to the same document
// Support: IE 11+, Edge 17 - 18+
// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
// two documents; shallow comparisons work.
// eslint-disable-next-line eqeqeq
(i=(t.ownerDocument||t)==(e.ownerDocument||e)?t.compareDocumentPosition(e):1)||!f.sortDetached&&e.compareDocumentPosition(t)===i?// Choose the first element that is related to our preferred document
// Support: IE 11+, Edge 17 - 18+
// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
// two documents; shallow comparisons work.
// eslint-disable-next-line eqeqeq
t===h||t.ownerDocument==v&&J.contains(v,t)?-1:e===h||e.ownerDocument==v&&J.contains(v,e)?1:r?l.call(r,t)-l.call(r,e):0:4&i?-1:1)}),h}// Add button/input type pseudos
for(e in J.matches=function(t,e){return J(t,null,null,e)},J.matchesSelector=function(t,e){if(tr(t),d&&!H[e+" "]&&(!m||!m.test(e)))try{var i=g.call(t,e);// IE 9's matchesSelector returns false on disconnected nodes
if(i||f.disconnectedMatch||// As well, disconnected nodes are said to be in a document
// fragment in IE 9
t.document&&11!==t.document.nodeType)return i}catch(t){H(e,!0)}return J(e,h,null,[t]).length>0},J.contains=function(t,e){return(t.ownerDocument||t)!=h&&tr(t),T.contains(t,e)},J.attr=function(t,e){// Set document vars if needed
// Support: IE 11+, Edge 17 - 18+
// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
// two documents; shallow comparisons work.
// eslint-disable-next-line eqeqeq
(t.ownerDocument||t)!=h&&tr(t);var n=i.attrHandle[e.toLowerCase()],o=n&&u.call(i.attrHandle,e.toLowerCase())?n(t,e,!d):void 0;return void 0!==o?o:t.getAttribute(e)},J.error=function(t){throw Error("Syntax error, unrecognized expression: "+t)},/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */T.uniqueSort=function(t){var e,i=[],n=0,o=0;if(// Unless we *know* we can detect duplicates, assume their presence
//
// Support: Android <=4.0+
// Testing for detecting duplicates is unpredictable so instead assume we can't
// depend on duplicate detection in all browsers without a stable sort.
c=!f.sortStable,r=!f.sortStable&&s.call(t,0),C.call(t,X),c){for(;e=t[o++];)e===t[o]&&(n=i.push(o));for(;n--;)A.call(t,i[n],1)}return(// Clear input after sorting to release objects
// See https://github.com/jquery/sizzle/pull/225
r=null,t)},T.fn.uniqueSort=function(){return this.pushStack(T.uniqueSort(s.apply(this)))},(i=T.expr={// Can be adjusted by the user
cacheLength:50,createPseudo:te,match:q,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(t){return t[1]=t[1].replace(G,K),// Move the given value to match[3] whether quoted or unquoted
t[3]=(t[3]||t[4]||t[5]||"").replace(G,K),"~="===t[2]&&(t[3]=" "+t[3]+" "),t.slice(0,4)},CHILD:function(t){return(/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/t[1]=t[1].toLowerCase(),"nth"===t[1].slice(0,3)?(t[3]||J.error(t[0]),// numeric x and y parameters for Expr.filter.CHILD
// remember that false/true cast respectively to 0/1
t[4]=+(t[4]?t[5]+(t[6]||1):2*("even"===t[3]||"odd"===t[3])),t[5]=+(t[7]+t[8]||"odd"===t[3])):t[3]&&J.error(t[0]),t)},PSEUDO:function(t){var e,i=!t[6]&&t[2];return q.CHILD.test(t[0])?null:(t[3]?t[2]=t[4]||t[5]||"":i&&W.test(i)&&// Get excess from tokenize (recursively)
(e=tl(i,!0))&&// advance to the next closing parenthesis
(e=i.indexOf(")",i.length-e)-i.length)&&(// excess is a negative index
t[0]=t[0].slice(0,e),t[2]=i.slice(0,e)),t.slice(0,3))}},filter:{TAG:function(t){var e=t.replace(G,K).toLowerCase();return"*"===t?function(){return!0}:function(t){return k(t,e)}},CLASS:function(t){var e=w[t+" "];return e||(e=RegExp("(^|"+D+")"+t+"("+D+"|$)"),w(t,function(t){return e.test("string"==typeof t.className&&t.className||void 0!==t.getAttribute&&t.getAttribute("class")||"")}))},ATTR:function(t,e,i){return function(n){var o=J.attr(n,t);return null==o?"!="===e:!e||((o+="","="===e)?o===i:"!="===e?o!==i:"^="===e?i&&0===o.indexOf(i):"*="===e?i&&o.indexOf(i)>-1:"$="===e?i&&o.slice(-i.length)===i:"~="===e?(" "+o.replace(M," ")+" ").indexOf(i)>-1:"|="===e&&(o===i||o.slice(0,i.length+1)===i+"-"))}},CHILD:function(t,e,i,n,o){var s="nth"!==t.slice(0,3),r="last"!==t.slice(-4),a="of-type"===e;return 1===n&&0===o?function(t){return!!t.parentNode}:function(e,i,l){var c,h,u,p,d,f=s!==r?"nextSibling":"previousSibling",m=e.parentNode,g=a&&e.nodeName.toLowerCase(),v=!l&&!a,y=!1;if(m){// :(first|last|only)-(child|of-type)
if(s){for(;f;){for(u=e;u=u[f];)if(a?k(u,g):1===u.nodeType)return!1;// Reverse direction for :only-* (if we haven't yet done so)
d=f="only"===t&&!d&&"nextSibling"}return!0}// non-xml :nth-child(...) stores cache data on `parent`
if(d=[r?m.firstChild:m.lastChild],r&&v){for(y=(p=(c=// Seek `elem` from a previously-cached index
(h=m[x]||(m[x]={}))[t]||[])[0]===b&&c[1])&&c[2],u=p&&m.childNodes[p];u=++p&&u&&u[f]||// Fallback to seeking `elem` from the start
(y=p=0)||d.pop();)if(1===u.nodeType&&++y&&u===e){h[t]=[b,p,y];break}}else // xml :nth-child(...)
// or :nth-last-child(...) or :nth(-last)?-of-type(...)
if(v&&(y=p=(c=(h=e[x]||(e[x]={}))[t]||[])[0]===b&&c[1]),!1===y)// Use the same loop as above to seek `elem` from the start
for(;(u=++p&&u&&u[f]||(y=p=0)||d.pop())&&(!((a?k(u,g):1===u.nodeType)&&++y)||(v&&((h=u[x]||(u[x]={}))[t]=[b,y]),u!==e)););return(// Incorporate the offset, then check against cycle size
(y-=o)===n||y%n==0&&y/n>=0)}}},PSEUDO:function(t,e){// pseudo-class names are case-insensitive
// https://www.w3.org/TR/selectors/#pseudo-classes
// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
// Remember that setFilters inherits from pseudos
var n,o=i.pseudos[t]||i.setFilters[t.toLowerCase()]||J.error("unsupported pseudo: "+t);return(// The user may use createPseudo to indicate that
// arguments are needed to create the filter function
// just as jQuery does
o[x]?o(e):o.length>1?(n=[t,t,"",e],i.setFilters.hasOwnProperty(t.toLowerCase())?te(function(t,i){for(var n,s=o(t,e),r=s.length;r--;)n=l.call(t,s[r]),t[n]=!(i[n]=s[r])}):function(t){return o(t,0,n)}):o)}},pseudos:{// Potentially complex pseudos
not:te(function(t){// Trim the selector passed to compile
// to avoid treating leading and trailing
// spaces as combinators
var e=[],i=[],n=td(t.replace(I,"$1"));return n[x]?te(function(t,e,i,o){// Match elements unmatched by `matcher`
for(var s,r=n(t,null,o,[]),a=t.length;a--;)(s=r[a])&&(t[a]=!(e[a]=s))}):function(t,o,s){return e[0]=t,n(e,null,s,i),// Don't keep the element
// (see https://github.com/jquery/sizzle/issues/299)
e[0]=null,!i.pop()}}),has:te(function(t){return function(e){return J(t,e).length>0}}),contains:te(function(t){return t=t.replace(G,K),function(e){return(e.textContent||T.text(e)).indexOf(t)>-1}}),// "Whether an element is represented by a :lang() selector
// is based solely on the element's language value
// being equal to the identifier C,
// or beginning with the identifier C immediately followed by "-".
// The matching of C against the element's language value is performed case-insensitively.
// The identifier C does not have to be a valid language name."
// https://www.w3.org/TR/selectors/#lang-pseudo
lang:te(function(t){return B.test(t||"")||J.error("unsupported lang: "+t),t=t.replace(G,K).toLowerCase(),function(e){var i;do if(i=d?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return(i=i.toLowerCase())===t||0===i.indexOf(t+"-");while((e=e.parentNode)&&1===e.nodeType)return!1}}),// Miscellaneous
target:function(e){var i=t.location&&t.location.hash;return i&&i.slice(1)===e.id},root:function(t){return t===p},focus:function(t){return t===// Support: IE <=9 only
// Accessing document.activeElement can throw unexpectedly
// https://bugs.jquery.com/ticket/13393
function(){try{return h.activeElement}catch(t){}}()&&h.hasFocus()&&!!(t.type||t.href||~t.tabIndex)},// Boolean properties
enabled:tn(!1),disabled:tn(!0),checked:function(t){// In CSS3, :checked should return both checked and selected elements
// https://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
return k(t,"input")&&!!t.checked||k(t,"option")&&!!t.selected},selected:function(t){return t.parentNode&&t.parentNode.selectedIndex,!0===t.selected},// Contents
empty:function(t){// https://www.w3.org/TR/selectors/#empty-pseudo
// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
//   but not by others (comment: 8; processing instruction: 7; etc.)
// nodeType < 6 works because attributes (2) do not appear as children
for(t=t.firstChild;t;t=t.nextSibling)if(t.nodeType<6)return!1;return!0},parent:function(t){return!i.pseudos.empty(t)},// Element/input types
header:function(t){return V.test(t.nodeName)},input:function(t){return F.test(t.nodeName)},button:function(t){return k(t,"input")&&"button"===t.type||k(t,"button")},text:function(t){var e;return k(t,"input")&&"text"===t.type&&// Support: IE <10 only
// New HTML5 attribute values (e.g., "search") appear
// with elem.type === "text"
(null==(e=t.getAttribute("type"))||"text"===e.toLowerCase())},// Position-in-collection
first:to(function(){return[0]}),last:to(function(t,e){return[e-1]}),eq:to(function(t,e,i){return[i<0?i+e:i]}),even:to(function(t,e){for(var i=0;i<e;i+=2)t.push(i);return t}),odd:to(function(t,e){for(var i=1;i<e;i+=2)t.push(i);return t}),lt:to(function(t,e,i){var n;for(n=i<0?i+e:i>e?e:i;--n>=0;)t.push(n);return t}),gt:to(function(t,e,i){for(var n=i<0?i+e:i;++n<e;)t.push(n);return t})}}).pseudos.nth=i.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})i.pseudos[e]=/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */function(t){return function(e){return k(e,"input")&&e.type===t}}(e);for(e in{submit:!0,reset:!0})i.pseudos[e]=/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */function(t){return function(e){return(k(e,"input")||k(e,"button"))&&e.type===t}}(e);// Easy API for creating new setFilters
function ta(){}function tl(t,e){var n,o,s,r,a,l,c,h=E[t+" "];if(h)return e?0:h.slice(0);for(a=t,l=[],c=i.preFilter;a;){// Filters
for(r in(!n||(o=N.exec(a)))&&(o&&(a=a.slice(o[0].length)||a),l.push(s=[])),n=!1,(o=R.exec(a))&&(n=o.shift(),s.push({value:n,// Cast descendant combinators to space
type:o[0].replace(I," ")}),a=a.slice(n.length)),i.filter)(o=q[r].exec(a))&&(!c[r]||(o=c[r](o)))&&(n=o.shift(),s.push({value:n,type:r,matches:o}),a=a.slice(n.length));if(!n)break}return(// Return the length of the invalid excess
// if we're just parsing
// Otherwise, throw an error or return tokens
e?a.length:a?J.error(t):E(t,l).slice(0))}function tc(t){for(var e=0,i=t.length,n="";e<i;e++)n+=t[e].value;return n}function th(t,e,i){var n=e.dir,o=e.next,s=o||n,r=i&&"parentNode"===s,a=S++;return e.first?function(e,i,o){for(;e=e[n];)if(1===e.nodeType||r)return t(e,i,o);return!1}:function(e,i,l){var c,h,u=[b,a];// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
if(l){for(;e=e[n];)if((1===e.nodeType||r)&&t(e,i,l))return!0}else for(;e=e[n];)if(1===e.nodeType||r){if(h=e[x]||(e[x]={}),o&&k(e,o))e=e[n]||e;else{if((c=h[s])&&c[0]===b&&c[1]===a)return u[2]=c[2];// A match means we're done; a fail means we have to keep checking
if(// Reuse newcache so results back-propagate to previous elements
h[s]=u,u[2]=t(e,i,l))return!0}}return!1}}function tu(t){return t.length>1?function(e,i,n){for(var o=t.length;o--;)if(!t[o](e,i,n))return!1;return!0}:t[0]}function tp(t,e,i,n,o){for(var s,r=[],a=0,l=t.length,c=null!=e;a<l;a++)(s=t[a])&&(!i||i(s,n,o))&&(r.push(s),c&&e.push(a));return r}function td(t,e/* Internal Use Only */){var n,s,r,a,c=[],u=[],p=_[t+" "];if(!p){for(e||(e=tl(t)),a=e.length;a--;)(p=function t(e){for(var n,s,r,a=e.length,c=i.relative[e[0].type],h=c||i.relative[" "],u=c?1:0,p=th(function(t){return t===n},h,!0),d=th(function(t){return l.call(n,t)>-1},h,!0),f=[function(t,e,i){// Support: IE 11+, Edge 17 - 18+
// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
// two documents; shallow comparisons work.
// eslint-disable-next-line eqeqeq
var s=!c&&(i||e!=o)||((n=e).nodeType?p(t,e,i):d(t,e,i));return(// Avoid hanging onto element
// (see https://github.com/jquery/sizzle/issues/299)
n=null,s)}];u<a;u++)if(s=i.relative[e[u].type])f=[th(tu(f),s)];else{// Return special upon seeing a positional matcher
if((s=i.filter[e[u].type].apply(null,e[u].matches))[x]){for(// Find the next relative operator (if any) for proper handling
r=++u;r<a&&!i.relative[e[r].type];r++);return function t(e,i,n,o,s,r){return o&&!o[x]&&(o=t(o)),s&&!s[x]&&(s=t(s,r)),te(function(t,r,a,c){var h,u,p,d,f=[],m=[],g=r.length,v=t||function(t,e,i){for(var n=0,o=e.length;n<o;n++)J(t,e[n],i);return i}(i||"*",a.nodeType?[a]:a,[]),x=e&&(t||!i)?tp(v,f,e,a,c):v;// Apply postFilter
if(n?// Find primary matches
n(x,// If we have a postFinder, or filtered seed, or non-seed postFilter
// or preexisting results,
d=s||(t?e:g||o)?[]:r,a,c):d=x,o)for(h=tp(d,m),o(h,[],a,c),// Un-match failing elements by moving them back to matcherIn
u=h.length;u--;)(p=h[u])&&(d[m[u]]=!(x[m[u]]=p));if(t){if(s||e){if(s){for(// Get the final matcherOut by condensing this intermediate into postFinder contexts
h=[],u=d.length;u--;)(p=d[u])&&h.push(x[u]=p);s(null,d=[],h,c)}for(// Move matched elements from seed to results to keep them synchronized
u=d.length;u--;)(p=d[u])&&(h=s?l.call(t,p):f[u])>-1&&(t[h]=!(r[h]=p))}}else d=tp(d===r?d.splice(g,d.length):d),s?s(null,r,d,c):y.apply(r,d)})}(u>1&&tu(f),u>1&&tc(e.slice(0,u-1).concat({value:" "===e[u-2].type?"*":""})).replace(I,"$1"),s,u<r&&t(e.slice(u,r)),r<a&&t(e=e.slice(r)),r<a&&tc(e))}f.push(s)}return tu(f)}(e[a]))[x]?c.push(p):u.push(p);// Save selector and tokenization
// Cache the compiled function
(p=_(t,(n=c.length>0,s=u.length>0,r=function(t,e,r,a,l){var p,f,m,g=0,v="0",x=t&&[],S=[],w=o,E=t||s&&i.find.TAG("*",l),k=b+=null==w?1:Math.random()||.1,C=E.length;// Add elements passing elementMatchers directly to results
// Support: iOS <=7 - 9 only
// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching
// elements by id. (see trac-14142)
for(l&&// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
// two documents; shallow comparisons work.
// eslint-disable-next-line eqeqeq
(o=e==h||e||l);v!==C&&null!=(p=E[v]);v++){if(s&&p){for(f=0,e||p.ownerDocument==h||(tr(p),r=!d);m=u[f++];)if(m(p,e||h,r)){y.call(a,p);break}l&&(b=k)}// Track unmatched elements for set filters
n&&((p=!m&&p)&&g--,t&&x.push(p))}// Apply set filters to unmatched elements
// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
// no element matchers and no seed.
// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
// case, which will result in a "00" `matchedCount` that differs from `i` but is also
// numerically zero.
if(// `i` is now the count of elements visited above, and adding it to `matchedCount`
// makes the latter nonnegative.
g+=v,n&&v!==g){for(f=0;m=c[f++];)m(x,S,e,r);if(t){// Reintegrate element matches to eliminate the need for sorting
if(g>0)for(;v--;)x[v]||S[v]||(S[v]=P.call(a));// Discard index placeholder values to get only actual matches
S=tp(S)}// Add matches to results
y.apply(a,S),l&&!t&&S.length>0&&g+c.length>1&&T.uniqueSort(a)}return l&&(b=k,o=w),x},n?te(r):r))).selector=t}return p}/**
 * A low-level selection function that works with jQuery's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with jQuery selector compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */function tf(t,e,n,o){var s,r,a,l,c,h="function"==typeof t&&t,u=!o&&tl(t=h.selector||t);// Try to minimize operations if there is only one selector in the list and no seed
// (the latter of which guarantees us context)
if(n=n||[],1===u.length){if(// Reduce context if the leading compound selector is an ID
(r=u[0]=u[0].slice(0)).length>2&&"ID"===(a=r[0]).type&&9===e.nodeType&&d&&i.relative[r[1].type]){if(!(e=(i.find.ID(a.matches[0].replace(G,K),e)||[])[0]))return n;h&&(e=e.parentNode),t=t.slice(r.shift().value.length)}for(// Fetch a seed set for right-to-left matching
s=q.needsContext.test(t)?0:r.length;// Abort if we hit a combinator
s--&&(a=r[s],!i.relative[l=a.type]);)if((c=i.find[l])&&(o=c(a.matches[0].replace(G,K),$.test(r[0].type)&&ts(e.parentNode)||e))){if(// If seed is empty or no tokens remain, we can return early
r.splice(s,1),!(t=o.length&&tc(r)))return y.apply(n,o),n;break}}return(// Compile and execute a filtering function if one is not provided
// Provide `match` to avoid retokenization if we modified the selector above
(h||td(t,u))(o,e,!d,n,!e||$.test(t)&&ts(e.parentNode)||e),n)}ta.prototype=i.filters=i.pseudos,i.setFilters=new ta,// One-time assignments
// Support: Android <=4.0 - 4.1+
// Sort stability
f.sortStable=x.split("").sort(X).join("")===x,// Initialize against the default document
tr(),// Support: Android <=4.0 - 4.1+
// Detached nodes confoundingly follow *each other*
f.sortDetached=ti(function(t){// Should return 1, but returns 4 (following)
return 1&t.compareDocumentPosition(h.createElement("fieldset"))}),T.find=J,// Deprecated
T.expr[":"]=T.expr.pseudos,T.unique=T.uniqueSort,// These have always been private, but they used to be documented as part of
// Sizzle so let's maintain them for now for backwards compatibility purposes.
J.compile=td,J.select=tf,J.setDocument=tr,J.tokenize=tl,J.escape=T.escapeSelector,J.getText=T.text,J.isXML=T.isXMLDoc,J.selectors=T.expr,J.support=T.support,J.uniqueSort=T.uniqueSort;/* eslint-enable */}();var X=function(t,e,i){for(var n=[],o=void 0!==i;(t=t[e])&&9!==t.nodeType;)if(1===t.nodeType){if(o&&T(t).is(i))break;n.push(t)}return n},L=function(t,e){for(var i=[];t;t=t.nextSibling)1===t.nodeType&&t!==e&&i.push(t);return i},O=T.expr.match.needsContext,Y=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;// Implement the identical functionality for filter and not
function z(t,e,i){return m(e)?T.grep(t,function(t,n){return!!e.call(t,n,t)!==i}):e.nodeType?T.grep(t,function(t){return t===e!==i}):"string"!=typeof e?T.grep(t,function(t){return l.call(e,t)>-1!==i}):T.filter(e,t,i)}T.filter=function(t,e,i){var n=e[0];return(i&&(t=":not("+t+")"),1===e.length&&1===n.nodeType)?T.find.matchesSelector(n,t)?[n]:[]:T.find.matches(t,T.grep(e,function(t){return 1===t.nodeType}))},T.fn.extend({find:function(t){var e,i,n=this.length,o=this;if("string"!=typeof t)return this.pushStack(T(t).filter(function(){for(e=0;e<n;e++)if(T.contains(o[e],this))return!0}));for(e=0,i=this.pushStack([]);e<n;e++)T.find(t,o[e],i);return n>1?T.uniqueSort(i):i},filter:function(t){return this.pushStack(z(this,t||[],!1))},not:function(t){return this.pushStack(z(this,t||[],!0))},is:function(t){return!!z(this,// so $("p:first").is("p:last") won't return true for a doc with two "p".
"string"==typeof t&&O.test(t)?T(t):t||[],!1).length}});// Initialize a jQuery object
// A central reference to the root jQuery(document)
var M,// Prioritize #id over <tag> to avoid XSS via location.hash (trac-9521)
// Strict HTML recognition (trac-11290: must start with <)
// Shortcut simple #id case for speed
N=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;// Give the init function the jQuery prototype for later instantiation
(T.fn.init=function(t,e,i){var n,o;// HANDLE: $(""), $(null), $(undefined), $(false)
if(!t)return this;// Handle HTML strings
if(// Method init() accepts an alternate rootjQuery
// so migrate can support jQuery.sub (gh-2101)
i=i||M,"string"==typeof t){// Match html or make sure no context is specified for #id
if((n="<"===t[0]&&">"===t[t.length-1]&&t.length>=3?[null,t,null]:N.exec(t))&&(n[1]||!e)){// HANDLE: $(html) -> $(array)
if(!n[1])return(o=v.getElementById(n[2]))&&(// Inject the element directly into the jQuery object
this[0]=o,this.length=1),this;// HANDLE: $(html, props)
if(e=e instanceof T?e[0]:e,// Option to run scripts is true for back-compat
// Intentionally let the error be thrown if parseHTML is not present
T.merge(this,T.parseHTML(n[1],e&&e.nodeType?e.ownerDocument||e:v,!0)),Y.test(n[1])&&T.isPlainObject(e))for(n in e)m(this[n])?this[n](e[n]):this.attr(n,e[n]);return this}return!e||e.jquery?(e||i).find(t):this.constructor(e).find(t);// HANDLE: $(DOMElement)
}return t.nodeType?(this[0]=t,this.length=1,this):m(t)?void 0!==i.ready?i.ready(t):t(T):T.makeArray(t,this)}).prototype=T.fn,// Initialize central reference
M=T(v);var R=/^(?:parents|prev(?:Until|All))/,j={children:!0,contents:!0,next:!0,prev:!0};function W(t,e){for(;(t=t[e])&&1!==t.nodeType;);return t}T.fn.extend({has:function(t){var e=T(t,this),i=e.length;return this.filter(function(){for(var t=0;t<i;t++)if(T.contains(this,e[t]))return!0})},closest:function(t,e){var i,n=0,o=this.length,s=[],r="string"!=typeof t&&T(t);// Positional selectors never match, since there's no _selection_ context
if(!O.test(t)){for(;n<o;n++)for(i=this[n];i&&i!==e;i=i.parentNode)if(i.nodeType<11&&(r?r.index(i)>-1:1===i.nodeType&&T.find.matchesSelector(i,t))){s.push(i);break}}return this.pushStack(s.length>1?T.uniqueSort(s):s)},// Determine the position of an element within the set
index:function(t){return(// No argument, return index in parent
t?"string"==typeof t?l.call(T(t),this[0]):l.call(this,t.jquery?t[0]:t):this[0]&&this[0].parentNode?this.first().prevAll().length:-1)},add:function(t,e){return this.pushStack(T.uniqueSort(T.merge(this.get(),T(t,e))))},addBack:function(t){return this.add(null==t?this.prevObject:this.prevObject.filter(t))}}),T.each({parent:function(t){var e=t.parentNode;return e&&11!==e.nodeType?e:null},parents:function(t){return X(t,"parentNode")},parentsUntil:function(t,e,i){return X(t,"parentNode",i)},next:function(t){return W(t,"nextSibling")},prev:function(t){return W(t,"previousSibling")},nextAll:function(t){return X(t,"nextSibling")},prevAll:function(t){return X(t,"previousSibling")},nextUntil:function(t,e,i){return X(t,"nextSibling",i)},prevUntil:function(t,e,i){return X(t,"previousSibling",i)},siblings:function(t){return L((t.parentNode||{}).firstChild,t)},children:function(t){return L(t.firstChild)},contents:function(t){return null!=t.contentDocument&&// Support: IE 11+
// <object> elements with no `data` attribute has an object
// `contentDocument` with a `null` prototype.
o(t.contentDocument)?t.contentDocument:(k(t,"template")&&(t=t.content||t),T.merge([],t.childNodes))}},function(t,e){T.fn[t]=function(i,n){var o=T.map(this,e,i);return"Until"!==t.slice(-5)&&(n=i),n&&"string"==typeof n&&(o=T.filter(n,o)),this.length>1&&(j[t]||T.uniqueSort(o),R.test(t)&&o.reverse()),this.pushStack(o)}});var B=/[^\x20\t\r\n\f]+/g;function q(t){return t}function F(t){throw t}function V(t,e,i,n){var o;try{// Check for promise aspect first to privilege synchronous behavior
t&&m(o=t.promise)?o.call(t).done(e).fail(i):t&&m(o=t.then)?o.call(t,e,i):// * false: [ value ].slice( 0 ) => resolve( value )
// * true: [ value ].slice( 1 ) => resolve()
e.apply(void 0,[t].slice(n));// For Promises/A+, convert exceptions into rejections
// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
// Deferred#then to conditionally suppress rejection.
}catch(t){// Support: Android 4.0 only
// Strict mode functions invoked without .call/.apply get global-object context
i.apply(void 0,[t])}}/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */T.Callbacks=function(t){// Convert options from String-formatted to Object-formatted if needed
// (we check in cache first)
t="string"==typeof t?(e=t,i={},T.each(e.match(B)||[],function(t,e){i[e]=!0}),i):T.extend({},t);var e,i,n,o,s,r,a=[],l=[],c=-1,h=function(){for(// Enforce single-firing
r=r||t.once,// Execute callbacks for all pending executions,
// respecting firingIndex overrides and runtime changes
s=n=!0;l.length;c=-1)for(o=l.shift();++c<a.length;)!1===a[c].apply(o[0],o[1])&&t.stopOnFalse&&(// Jump to end and forget the data so .add doesn't re-fire
c=a.length,o=!1);t.memory||(o=!1),n=!1,r&&(a=o?[]:"")},u={// Add a callback or a collection of callbacks to the list
add:function(){return a&&(o&&!n&&(c=a.length-1,l.push(o)),function e(i){T.each(i,function(i,n){m(n)?t.unique&&u.has(n)||a.push(n):n&&n.length&&"string"!==b(n)&&e(n)})}(arguments),o&&!n&&h()),this},// Remove a callback from the list
remove:function(){return T.each(arguments,function(t,e){for(var i;(i=T.inArray(e,a,i))>-1;)a.splice(i,1),i<=c&&c--}),this},// Check if a given callback is in the list.
// If no argument is given, return whether or not list has callbacks attached.
has:function(t){return t?T.inArray(t,a)>-1:a.length>0},// Remove all callbacks from the list
empty:function(){return a&&(a=[]),this},// Disable .fire and .add
// Abort any current/pending executions
// Clear all callbacks and values
disable:function(){return r=l=[],a=o="",this},disabled:function(){return!a},// Disable .fire
// Also disable .add unless we have memory (since it would have no effect)
// Abort any pending executions
lock:function(){return r=l=[],o||n||(a=o=""),this},locked:function(){return!!r},// Call all callbacks with the given context and arguments
fireWith:function(t,e){return r||(e=[t,(e=e||[]).slice?e.slice():e],l.push(e),n||h()),this},// Call all the callbacks with the given arguments
fire:function(){return u.fireWith(this,arguments),this},// To know if the callbacks have already been called at least once
fired:function(){return!!s}};return u},T.extend({Deferred:function(e){var i=[// action, add listener, callbacks,
// ... .then handlers, argument index, [final state]
["notify","progress",T.Callbacks("memory"),T.Callbacks("memory"),2],["resolve","done",T.Callbacks("once memory"),T.Callbacks("once memory"),0,"resolved"],["reject","fail",T.Callbacks("once memory"),T.Callbacks("once memory"),1,"rejected"]],n="pending",o={state:function(){return n},always:function(){return s.done(arguments).fail(arguments),this},catch:function(t){return o.then(null,t)},// Keep pipe for back-compat
pipe:function(){var t=arguments;return T.Deferred(function(e){T.each(i,function(i,n){// Map tuples (progress, done, fail) to arguments (done, fail, progress)
var o=m(t[n[4]])&&t[n[4]];// deferred.progress(function() { bind to newDefer or newDefer.notify })
// deferred.done(function() { bind to newDefer or newDefer.resolve })
// deferred.fail(function() { bind to newDefer or newDefer.reject })
s[n[1]](function(){var t=o&&o.apply(this,arguments);t&&m(t.promise)?t.promise().progress(e.notify).done(e.resolve).fail(e.reject):e[n[0]+"With"](this,o?[t]:arguments)})}),t=null}).promise()},then:function(e,n,o){var s=0;function r(e,i,n,o){return function(){var a=this,l=arguments,c=function(){var t,c;// Support: Promises/A+ section 2.3.3.3.3
// https://promisesaplus.com/#point-59
// Ignore double-resolution attempts
if(!(e<s)){// Support: Promises/A+ section 2.3.1
// https://promisesaplus.com/#point-48
if((t=n.apply(a,l))===i.promise())throw TypeError("Thenable self-resolution");// Handle a returned thenable
m(// Support: Promises/A+ sections 2.3.3.1, 3.5
// https://promisesaplus.com/#point-54
// https://promisesaplus.com/#point-75
// Retrieve `then` only once
c=t&&// Support: Promises/A+ section 2.3.4
// https://promisesaplus.com/#point-64
// Only check objects and functions for thenability
("object"==typeof t||"function"==typeof t)&&t.then)?o?c.call(t,r(s,i,q,o),r(s,i,F,o)):(// ...and disregard older resolution values
s++,c.call(t,r(s,i,q,o),r(s,i,F,o),r(s,i,q,i.notifyWith))):(n!==q&&(a=void 0,l=[t]),// Process the value(s)
// Default process is resolve
(o||i.resolveWith)(a,l))}},h=o?c:function(){try{c()}catch(t){T.Deferred.exceptionHook&&T.Deferred.exceptionHook(t,h.error),e+1>=s&&(n!==F&&(a=void 0,l=[t]),i.rejectWith(a,l))}};// Support: Promises/A+ section 2.3.3.3.1
// https://promisesaplus.com/#point-57
// Re-resolve promises immediately to dodge false rejection from
// subsequent errors
e?h():(T.Deferred.getErrorHook?h.error=T.Deferred.getErrorHook():T.Deferred.getStackHook&&(h.error=T.Deferred.getStackHook()),t.setTimeout(h))}}return T.Deferred(function(t){// progress_handlers.add( ... )
i[0][3].add(r(0,t,m(o)?o:q,t.notifyWith)),// fulfilled_handlers.add( ... )
i[1][3].add(r(0,t,m(e)?e:q)),// rejected_handlers.add( ... )
i[2][3].add(r(0,t,m(n)?n:F))}).promise()},// Get a promise for this deferred
// If obj is provided, the promise aspect is added to the object
promise:function(t){return null!=t?T.extend(t,o):o}},s={};// All done!
return(// Add list-specific methods
T.each(i,function(t,e){var r=e[2],a=e[5];// promise.progress = list.add
// promise.done = list.add
// promise.fail = list.add
o[e[1]]=r.add,a&&r.add(function(){// state = "resolved" (i.e., fulfilled)
// state = "rejected"
n=a},// fulfilled_callbacks.disable
i[3-t][2].disable,// fulfilled_handlers.disable
i[3-t][3].disable,i[0][2].lock,i[0][3].lock),// progress_handlers.fire
// fulfilled_handlers.fire
// rejected_handlers.fire
r.add(e[3].fire),// deferred.notify = function() { deferred.notifyWith(...) }
// deferred.resolve = function() { deferred.resolveWith(...) }
// deferred.reject = function() { deferred.rejectWith(...) }
s[e[0]]=function(){return s[e[0]+"With"](this===s?void 0:this,arguments),this},// deferred.notifyWith = list.fireWith
// deferred.resolveWith = list.fireWith
// deferred.rejectWith = list.fireWith
s[e[0]+"With"]=r.fireWith}),// Make the deferred a promise
o.promise(s),e&&e.call(s,s),s)},// Deferred helper
when:function(t){var e=arguments.length,i=e,n=Array(i),o=s.call(arguments),r=T.Deferred(),a=function(t){return function(i){n[t]=this,o[t]=arguments.length>1?s.call(arguments):i,--e||r.resolveWith(n,o)}};// Single- and empty arguments are adopted like Promise.resolve
if(e<=1&&(V(t,r.done(a(i)).resolve,r.reject,!e),"pending"===r.state()||m(o[i]&&o[i].then)))return r.then();// Multiple arguments are aggregated like Promise.all array elements
for(;i--;)V(o[i],a(i),r.reject);return r.promise()}});// These usually indicate a programmer mistake during development,
// warn about them ASAP rather than swallowing them by default.
var U=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;// If `jQuery.Deferred.getErrorHook` is defined, `asyncError` is an error
// captured before the async barrier to get the original error cause
// which may otherwise be hidden.
T.Deferred.exceptionHook=function(e,i){// Support: IE 8 - 9 only
// Console exists when dev tools are open, which can happen at any time
t.console&&t.console.warn&&e&&U.test(e.name)&&t.console.warn("jQuery.Deferred exception: "+e.message,e.stack,i)},T.readyException=function(e){t.setTimeout(function(){throw e})};// The deferred used on DOM ready
var $=T.Deferred();// The ready event handler and self cleanup method
function G(){v.removeEventListener("DOMContentLoaded",G),t.removeEventListener("load",G),T.ready()}T.fn.ready=function(t){return $.then(t)// Wrap jQuery.readyException in a function so that the lookup
// happens at the time of error handling instead of callback
// registration.
.catch(function(t){T.readyException(t)}),this},T.extend({// Is the DOM ready to be used? Set to true once it occurs.
isReady:!1,// A counter to track how many items to wait for before
// the ready event fires. See trac-6781
readyWait:1,// Handle when the DOM is ready
ready:function(t){// Abort if there are pending holds or we're already ready
!(!0===t?--T.readyWait:T.isReady)&&(// Remember that the DOM is ready
T.isReady=!0,!0!==t&&--T.readyWait>0||// If there are functions bound, to execute
$.resolveWith(v,[T]))}}),T.ready.then=$.then,"complete"!==v.readyState&&("loading"===v.readyState||v.documentElement.doScroll)?(// Use the handy event callback
v.addEventListener("DOMContentLoaded",G),// A fallback to window.onload, that will always work
t.addEventListener("load",G)):t.setTimeout(T.ready);// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var K=function(t,e,i,n,o,s,r){var a=0,l=t.length,c=null==i;// Sets many values
if("object"===b(i))for(a in o=!0,i)K(t,e,a,i[a],!0,s,r);else if(void 0!==n&&(o=!0,m(n)||(r=!0),c&&(r?(e.call(t,n),e=null):(c=e,e=function(t,e,i){return c.call(T(t),i)})),e))for(;a<l;a++)e(t[a],i,r?n:n.call(t[a],a,e(t[a],i)));return o?t:c?e.call(t):l?e(t[0],i):s},Q=/^-ms-/,Z=/-([a-z])/g;// Used by camelCase as callback to replace()
function J(t,e){return e.toUpperCase()}// Convert dashed to camelCase; used by the css and data modules
// Support: IE <=9 - 11, Edge 12 - 15
// Microsoft forgot to hump their vendor prefix (trac-9572)
function tt(t){return t.replace(Q,"ms-").replace(Z,J)}var te=function(t){// Accepts only:
//  - Node
//    - Node.ELEMENT_NODE
//    - Node.DOCUMENT_NODE
//  - Object
//    - Any
return 1===t.nodeType||9===t.nodeType||!+t.nodeType};function ti(){this.expando=T.expando+ti.uid++}ti.uid=1,ti.prototype={cache:function(t){// Check if the owner object already has a cache
var e=t[this.expando];return!e&&(e={},te(t)&&(t.nodeType?t[this.expando]=e:Object.defineProperty(t,this.expando,{value:e,configurable:!0}))),e},set:function(t,e,i){var n,o=this.cache(t);// Handle: [ owner, key, value ] args
// Always use camelCase key (gh-2257)
if("string"==typeof e)o[tt(e)]=i;else for(n in e)o[tt(n)]=e[n];return o},get:function(t,e){return void 0===e?this.cache(t):t[this.expando]&&t[this.expando][tt(e)]},access:function(t,e,i){return(// In cases where either:
//
//   1. No key was specified
//   2. A string key was specified, but no value provided
//
// Take the "read" path and allow the get method to determine
// which value to return, respectively either:
//
//   1. The entire cache object
//   2. The data stored at the key
//
void 0===e||e&&"string"==typeof e&&void 0===i?this.get(t,e):(// When the key is not a string, or both a key and value
// are specified, set or extend (existing objects) with either:
//
//   1. An object of properties
//   2. A key and value
//
this.set(t,e,i),void 0!==i?i:e))},remove:function(t,e){var i,n=t[this.expando];if(void 0!==n){if(void 0!==e)for(i=(// We always set camelCase keys, so remove that.
e=Array.isArray(e)?e.map(tt):((e=tt(e))in n)?[e]:e.match(B)||[]).length;i--;)delete n[e[i]];// Remove the expando if there's no more data
(void 0===e||T.isEmptyObject(n))&&(t.nodeType?t[this.expando]=void 0:delete t[this.expando])}},hasData:function(t){var e=t[this.expando];return void 0!==e&&!T.isEmptyObject(e)}};var tn=new ti,to=new ti,ts=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,tr=/[A-Z]/g;function ta(t,e,i){var n,o;// If nothing was found internally, try to fetch any
// data from the HTML5 data-* attribute
if(void 0===i&&1===t.nodeType){if(n="data-"+e.replace(tr,"-$&").toLowerCase(),"string"==typeof(i=t.getAttribute(n))){try{o=i,i="true"===o||"false"!==o&&("null"===o?null:o===+o+""?+o:ts.test(o)?JSON.parse(o):o)}catch(t){}// Make sure we set the data so it isn't changed later
to.set(t,e,i)}else i=void 0}return i}T.extend({hasData:function(t){return to.hasData(t)||tn.hasData(t)},data:function(t,e,i){return to.access(t,e,i)},removeData:function(t,e){to.remove(t,e)},// TODO: Now that all calls to _data and _removeData have been replaced
// with direct calls to dataPriv methods, these can be deprecated.
_data:function(t,e,i){return tn.access(t,e,i)},_removeData:function(t,e){tn.remove(t,e)}}),T.fn.extend({data:function(t,e){var i,n,o,s=this[0],r=s&&s.attributes;// Gets all values
if(void 0===t){if(this.length&&(o=to.get(s),1===s.nodeType&&!tn.get(s,"hasDataAttrs"))){for(i=r.length;i--;)// The attrs elements can be null (trac-14894)
r[i]&&0===(n=r[i].name).indexOf("data-")&&ta(s,n=tt(n.slice(5)),o[n]);tn.set(s,"hasDataAttrs",!0)}return o}return(// Sets multiple values
"object"==typeof t?this.each(function(){to.set(this,t)}):K(this,function(e){var i;// The calling jQuery object (element matches) is not empty
// (and therefore has an element appears at this[ 0 ]) and the
// `value` parameter was not undefined. An empty jQuery object
// will result in `undefined` for elem = this[ 0 ] which will
// throw an exception if an attempt to read a data cache is made.
if(s&&void 0===e)return void 0!==// Attempt to get data from the cache
// The key will always be camelCased in Data
(i=to.get(s,t))||void 0!==// Attempt to "discover" the data in
// HTML5 custom data-* attrs
(i=ta(s,t))?i:// We tried really hard, but the data doesn't exist.
void 0;// Set the data...
this.each(function(){// We always store the camelCased key
to.set(this,t,e)})},null,e,arguments.length>1,null,!0))},removeData:function(t){return this.each(function(){to.remove(this,t)})}}),T.extend({queue:function(t,e,i){var n;if(t)return e=(e||"fx")+"queue",n=tn.get(t,e),i&&(!n||Array.isArray(i)?n=tn.access(t,e,T.makeArray(i)):n.push(i)),n||[]},dequeue:function(t,e){e=e||"fx";var i=T.queue(t,e),n=i.length,o=i.shift(),s=T._queueHooks(t,e);"inprogress"===o&&(o=i.shift(),n--),o&&("fx"===e&&i.unshift("inprogress"),// Clear up the last queue stop function
delete s.stop,o.call(t,function(){T.dequeue(t,e)},s)),!n&&s&&s.empty.fire()},// Not public - generate a queueHooks object, or return the current one
_queueHooks:function(t,e){var i=e+"queueHooks";return tn.get(t,i)||tn.access(t,i,{empty:T.Callbacks("once memory").add(function(){tn.remove(t,[e+"queue",i])})})}}),T.fn.extend({queue:function(t,e){var i=2;return("string"!=typeof t&&(e=t,t="fx",i--),arguments.length<i)?T.queue(this[0],t):void 0===e?this:this.each(function(){var i=T.queue(this,t,e);// Ensure a hooks for this queue
T._queueHooks(this,t),"fx"===t&&"inprogress"!==i[0]&&T.dequeue(this,t)})},dequeue:function(t){return this.each(function(){T.dequeue(this,t)})},clearQueue:function(t){return this.queue(t||"fx",[])},// Get a promise resolved when queues of a certain type
// are emptied (fx is the type by default)
promise:function(t,e){var i,n=1,o=T.Deferred(),s=this,r=this.length,a=function(){--n||o.resolveWith(s,[s])};for("string"!=typeof t&&(e=t,t=void 0),t=t||"fx";r--;)(i=tn.get(s[r],t+"queueHooks"))&&i.empty&&(n++,i.empty.add(a));return a(),o.promise(e)}});var tl=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,tc=RegExp("^(?:([+-])=|)("+tl+")([a-z%]*)$","i"),th=["Top","Right","Bottom","Left"],tu=v.documentElement,tp=function(t){return T.contains(t.ownerDocument,t)},td={composed:!0};tu.getRootNode&&(tp=function(t){return T.contains(t.ownerDocument,t)||t.getRootNode(td)===t.ownerDocument});var tf=function(t,e){// Inline style trumps all
return"none"===// isHiddenWithinTree might be called from jQuery#filter function;
// in that case, element will be second argument
(t=e||t).style.display||""===t.style.display&&// Otherwise, check computed style
// Support: Firefox <=43 - 45
// Disconnected elements can have computed display: none, so first confirm that elem is
// in the document.
tp(t)&&"none"===T.css(t,"display")};function tm(t,e,i,n){var o,s,r=20,a=n?function(){return n.cur()}:function(){return T.css(t,e,"")},l=a(),c=i&&i[3]||(T.cssNumber[e]?"":"px"),h=t.nodeType&&(T.cssNumber[e]||"px"!==c&&+l)&&tc.exec(T.css(t,e));if(h&&h[3]!==c){for(// Support: Firefox <=54
// Halve the iteration target value to prevent interference from CSS upper bounds (gh-2144)
l/=2,// Trust units reported by jQuery.css
c=c||h[3],// Iteratively approximate from a nonzero starting point
h=+l||1;r--;)// Evaluate and update our best guess (doubling guesses that zero out).
// Finish if the scale equals or crosses 1 (making the old*new product non-positive).
T.style(t,e,h+c),(1-s)*(1-(s=a()/l||.5))<=0&&(r=0),h/=s;h*=2,T.style(t,e,h+c),// Make sure we update the tween properties later on
i=i||[]}return i&&(h=+h||+l||0,// Apply relative offset (+=/-=) if specified
o=i[1]?h+(i[1]+1)*i[2]:+i[2],n&&(n.unit=c,n.start=h,n.end=o)),o}var tg={};function tv(t,e){// Determine new display value for elements that need to change
for(var i,n,o=[],s=0,r=t.length;s<r;s++)(n=t[s]).style&&(i=n.style.display,e?("none"!==i||(o[s]=tn.get(n,"display")||null,o[s]||(n.style.display="")),""===n.style.display&&tf(n)&&(o[s]=function(t){var e,i=t.ownerDocument,n=t.nodeName,o=tg[n];return o||(e=i.body.appendChild(i.createElement(n)),o=T.css(e,"display"),e.parentNode.removeChild(e),"none"===o&&(o="block"),tg[n]=o),o}(n))):"none"!==i&&(o[s]="none",// Remember what we're overwriting
tn.set(n,"display",i)));// Set the display of the elements in a second loop to avoid constant reflow
for(s=0;s<r;s++)null!=o[s]&&(t[s].style.display=o[s]);return t}T.fn.extend({show:function(){return tv(this,!0)},hide:function(){return tv(this)},toggle:function(t){return"boolean"==typeof t?t?this.show():this.hide():this.each(function(){tf(this)?T(this).show():T(this).hide()})}});var ty=/^(?:checkbox|radio)$/i,tx=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,tb=/^$|^module$|\/(?:java|ecma)script/i;t5=v.createDocumentFragment().appendChild(v.createElement("div")),// Support: Android 4.0 - 4.3 only
// Check state lost if the name is set (trac-11217)
// Support: Windows Web Apps (WWA)
// `name` and `type` must use .setAttribute for WWA (trac-14901)
(t4=v.createElement("input")).setAttribute("type","radio"),t4.setAttribute("checked","checked"),t4.setAttribute("name","t"),t5.appendChild(t4),// Support: Android <=4.1 only
// Older WebKit doesn't clone checked state correctly in fragments
f.checkClone=t5.cloneNode(!0).cloneNode(!0).lastChild.checked,// Support: IE <=11 only
// Make sure textarea (and checkbox) defaultValue is properly cloned
t5.innerHTML="<textarea>x</textarea>",f.noCloneChecked=!!t5.cloneNode(!0).lastChild.defaultValue,// Support: IE <=9 only
// IE <=9 replaces <option> tags with their contents when inserted outside of
// the select element.
t5.innerHTML="<option></option>",f.option=!!t5.lastChild;// We have to close these tags to support XHTML (trac-13200)
var tS={// XHTML parsers do not magically insert elements in the
// same way that tag soup parsers do. So we cannot shorten
// this by omitting <tbody> or other required elements.
thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function tw(t,e){// Support: IE <=9 - 11 only
// Use typeof to avoid zero-argument method invocation on host objects (trac-15151)
var i;return(i=void 0!==t.getElementsByTagName?t.getElementsByTagName(e||"*"):void 0!==t.querySelectorAll?t.querySelectorAll(e||"*"):[],void 0===e||e&&k(t,e))?T.merge([t],i):i}// Mark scripts as having already been evaluated
function tT(t,e){for(var i=0,n=t.length;i<n;i++)tn.set(t[i],"globalEval",!e||tn.get(e[i],"globalEval"))}tS.tbody=tS.tfoot=tS.colgroup=tS.caption=tS.thead,tS.th=tS.td,f.option||(tS.optgroup=tS.option=[1,"<select multiple='multiple'>","</select>"]);var tE=/<|&#?\w+;/;function tk(t,e,i,n,o){for(var s,r,a,l,c,h=e.createDocumentFragment(),u=[],p=0,d=t.length;p<d;p++)if((s=t[p])||0===s){// Add nodes directly
if("object"===b(s))// push.apply(_, arraylike) throws on ancient WebKit
T.merge(u,s.nodeType?[s]:s);else if(tE.test(s)){for(r=r||h.appendChild(e.createElement("div")),a=tS[(tx.exec(s)||["",""])[1].toLowerCase()]||tS._default,r.innerHTML=a[1]+T.htmlPrefilter(s)+a[2],// Descend through wrappers to the right content
c=a[0];c--;)r=r.lastChild;// Support: Android <=4.0 only, PhantomJS 1 only
// push.apply(_, arraylike) throws on ancient WebKit
T.merge(u,r.childNodes),// Ensure the created nodes are orphaned (trac-12392)
// Remember the top-level container
(r=h.firstChild).textContent=""}else u.push(e.createTextNode(s))}for(// Remove wrapper from fragment
h.textContent="",p=0;s=u[p++];){// Skip elements already in the context collection (trac-4087)
if(n&&T.inArray(s,n)>-1){o&&o.push(s);continue}// Capture executables
if(l=tp(s),// Append to fragment
r=tw(h.appendChild(s),"script"),l&&tT(r),i)for(c=0;s=r[c++];)tb.test(s.type||"")&&i.push(s)}return h}var tP=/^([^.]*)(?:\.(.+)|)/;function tC(){return!0}function tA(){return!1}function tD(t,e,i,n,o,s){var r,a;// Types can be a map of types/handlers
if("object"==typeof e){for(a in"string"!=typeof i&&(// ( types-Object, data )
n=n||i,i=void 0),e)tD(t,a,i,n,e[a],s);return t}if(null==n&&null==o?(// ( types, fn )
o=i,n=i=void 0):null==o&&("string"==typeof i?(// ( types, selector, fn )
o=n,n=void 0):(// ( types, data, fn )
o=n,n=i,i=void 0)),!1===o)o=tA;else if(!o)return t;return 1===s&&(r=o,// Use same guid so caller can remove using origFn
(o=function(t){return(// Can use an empty set, since event contains the info
T().off(t),r.apply(this,arguments))}).guid=r.guid||(r.guid=T.guid++)),t.each(function(){T.event.add(this,e,o,n,i)})}// Ensure the presence of an event listener that handles manually-triggered
// synthetic events by interrupting progress until reinvoked in response to
// *native* events that it fires directly, ensuring that state changes have
// already occurred before other listeners are invoked.
function tI(t,e,i){// Missing `isSetup` indicates a trigger call, which must force setup through jQuery.event.add
if(!i){void 0===tn.get(t,e)&&T.event.add(t,e,tC);return}// Register the controller as a special universal handler for all event namespaces
tn.set(t,e,!1),T.event.add(t,e,{namespace:!1,handler:function(t){var i,n=tn.get(this,e);if(1&t.isTrigger&&this[e]){// Interrupt processing of the outer synthetic .trigger()ed event
if(n)(T.event.special[e]||{}).delegateType&&t.stopPropagation();else if(// Store arguments for use when handling the inner native event
// There will always be at least one argument (an event object), so this array
// will not be confused with a leftover capture object.
n=s.call(arguments),tn.set(this,e,n),// Trigger the native event and capture its result
this[e](),i=tn.get(this,e),tn.set(this,e,!1),n!==i)return(// Cancel the outer synthetic event
t.stopImmediatePropagation(),t.preventDefault(),i)}else n&&(// ...and capture the result
tn.set(this,e,T.event.trigger(n[0],n.slice(1),this)),// Abort handling of the native event by all jQuery handlers while allowing
// native handlers on the same element to run. On target, this is achieved
// by stopping immediate propagation just on the jQuery event. However,
// the native event is re-wrapped by a jQuery one on each level of the
// propagation so the only way to stop it for jQuery is to stop it for
// everyone via native `stopPropagation()`. This is not a problem for
// focus/blur which don't bubble, but it does also stop click on checkboxes
// and radios. We accept this limitation.
t.stopPropagation(),t.isImmediatePropagationStopped=tC)}})}/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */T.event={global:{},add:function(t,e,i,n,o){var s,r,a,l,c,h,u,p,d,f,m,g=tn.get(t);// Only attach events to objects that accept data
if(te(t))for(i.handler&&(i=(s=i).handler,o=s.selector),o&&T.find.matchesSelector(tu,o),i.guid||(i.guid=T.guid++),(l=g.events)||(l=g.events=Object.create(null)),(r=g.handle)||(r=g.handle=function(e){// Discard the second event of a jQuery.event.trigger() and
// when an event is called after a page has unloaded
return T.event.triggered!==e.type?T.event.dispatch.apply(t,arguments):void 0}),c=// Handle multiple events separated by a space
(e=(e||"").match(B)||[""]).length;c--;)// There *must* be a type, no attaching namespace-only handlers
d=m=(a=tP.exec(e[c])||[])[1],f=(a[2]||"").split(".").sort(),d&&(// If event changes its type, use the special event handlers for the changed type
u=T.event.special[d]||{},// If selector defined, determine special event api type, otherwise given type
d=(o?u.delegateType:u.bindType)||d,// Update special based on newly reset type
u=T.event.special[d]||{},// handleObj is passed to all event handlers
h=T.extend({type:d,origType:m,data:n,handler:i,guid:i.guid,selector:o,needsContext:o&&T.expr.match.needsContext.test(o),namespace:f.join(".")},s),(p=l[d])||((p=l[d]=[]).delegateCount=0,(!u.setup||!1===u.setup.call(t,n,f,r))&&t.addEventListener&&t.addEventListener(d,r)),u.add&&(u.add.call(t,h),h.handler.guid||(h.handler.guid=i.guid)),o?p.splice(p.delegateCount++,0,h):p.push(h),// Keep track of which events have ever been used, for event optimization
T.event.global[d]=!0)},// Detach an event or set of events from an element
remove:function(t,e,i,n,o){var s,r,a,l,c,h,u,p,d,f,m,g=tn.hasData(t)&&tn.get(t);if(g&&(l=g.events)){for(c=// Once for each type.namespace in types; type may be omitted
(e=(e||"").match(B)||[""]).length;c--;){// Unbind all events (on this namespace, if provided) for the element
if(d=m=(a=tP.exec(e[c])||[])[1],f=(a[2]||"").split(".").sort(),!d){for(d in l)T.event.remove(t,d+e[c],i,n,!0);continue}for(u=T.event.special[d]||{},p=l[d=(n?u.delegateType:u.bindType)||d]||[],a=a[2]&&RegExp("(^|\\.)"+f.join("\\.(?:.*\\.|)")+"(\\.|$)"),// Remove matching events
r=s=p.length;s--;)h=p[s],(o||m===h.origType)&&(!i||i.guid===h.guid)&&(!a||a.test(h.namespace))&&(!n||n===h.selector||"**"===n&&h.selector)&&(p.splice(s,1),h.selector&&p.delegateCount--,u.remove&&u.remove.call(t,h));r&&!p.length&&(u.teardown&&!1!==u.teardown.call(t,f,g.handle)||T.removeEvent(t,d,g.handle),delete l[d])}T.isEmptyObject(l)&&tn.remove(t,"handle events")}},dispatch:function(t){var e,i,n,o,s,r,a=Array(arguments.length),l=T.event.fix(t),c=(tn.get(this,"events")||Object.create(null))[l.type]||[],h=T.event.special[l.type]||{};for(e=1,// Use the fix-ed jQuery.Event rather than the (read-only) native event
a[0]=l;e<arguments.length;e++)a[e]=arguments[e];// Call the preDispatch hook for the mapped type, and let it bail if desired
if(l.delegateTarget=this,!h.preDispatch||!1!==h.preDispatch.call(this,l)){for(// Determine handlers
r=T.event.handlers.call(this,l,c),// Run delegates first; they may want to stop propagation beneath us
e=0;(o=r[e++])&&!l.isPropagationStopped();)for(l.currentTarget=o.elem,i=0;(s=o.handlers[i++])&&!l.isImmediatePropagationStopped();)// specially universal or its namespaces are a superset of the event's.
(!l.rnamespace||!1===s.namespace||l.rnamespace.test(s.namespace))&&(l.handleObj=s,l.data=s.data,void 0!==(n=((T.event.special[s.origType]||{}).handle||s.handler).apply(o.elem,a))&&!1===(l.result=n)&&(l.preventDefault(),l.stopPropagation()));return h.postDispatch&&h.postDispatch.call(this,l),l.result}},handlers:function(t,e){var i,n,o,s,r,a=[],l=e.delegateCount,c=t.target;// Find delegate handlers
if(l&&// Support: IE <=9
// Black-hole SVG <use> instance trees (trac-13180)
c.nodeType&&// Support: Firefox <=42
// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
// Support: IE 11 only
// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
!("click"===t.type&&t.button>=1)){for(;c!==this;c=c.parentNode||this)// Don't process clicks on disabled elements (trac-6911, trac-8165, trac-11382, trac-11764)
if(1===c.nodeType&&!("click"===t.type&&!0===c.disabled)){for(i=0,s=[],r={};i<l;i++)void 0===r[// Don't conflict with Object.prototype properties (trac-13203)
o=(n=e[i]).selector+" "]&&(r[o]=n.needsContext?T(o,this).index(c)>-1:T.find(o,this,null,[c]).length),r[o]&&s.push(n);s.length&&a.push({elem:c,handlers:s})}}return(// Add the remaining (directly-bound) handlers
c=this,l<e.length&&a.push({elem:c,handlers:e.slice(l)}),a)},addProp:function(t,e){Object.defineProperty(T.Event.prototype,t,{enumerable:!0,configurable:!0,get:m(e)?function(){if(this.originalEvent)return e(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[t]},set:function(e){Object.defineProperty(this,t,{enumerable:!0,configurable:!0,writable:!0,value:e})}})},fix:function(t){return t[T.expando]?t:new T.Event(t)},special:{load:{// Prevent triggered image.load events from bubbling to window.load
noBubble:!0},click:{// Utilize native event to ensure correct state for checkable inputs
setup:function(t){// For mutual compressibility with _default, replace `this` access with a local var.
// `|| data` is dead code meant only to preserve the variable through minification.
var e=this||t;// Return false to allow normal processing in the caller
return ty.test(e.type)&&e.click&&k(e,"input")&&tI(e,"click",!0),!1},trigger:function(t){// For mutual compressibility with _default, replace `this` access with a local var.
// `|| data` is dead code meant only to preserve the variable through minification.
var e=this||t;// Return non-false to allow normal event-path propagation
return ty.test(e.type)&&e.click&&k(e,"input")&&tI(e,"click"),!0},// For cross-browser consistency, suppress native .click() on links
// Also prevent it if we're currently inside a leveraged native-event stack
_default:function(t){var e=t.target;return ty.test(e.type)&&e.click&&k(e,"input")&&tn.get(e,"click")||k(e,"a")}},beforeunload:{postDispatch:function(t){// Support: Firefox 20+
// Firefox doesn't alert if the returnValue field is not set.
void 0!==t.result&&t.originalEvent&&(t.originalEvent.returnValue=t.result)}}}},T.removeEvent=function(t,e,i){// This "if" is needed for plain objects
t.removeEventListener&&t.removeEventListener(e,i)},T.Event=function(t,e){// Allow instantiation without the 'new' keyword
if(!(this instanceof T.Event))return new T.Event(t,e);t&&t.type?(this.originalEvent=t,this.type=t.type,// Events bubbling up the document may have been marked as prevented
// by a handler lower down the tree; reflect the correct value.
this.isDefaultPrevented=t.defaultPrevented||void 0===t.defaultPrevented&&// Support: Android <=2.3 only
!1===t.returnValue?tC:tA,// Create target properties
// Support: Safari <=6 - 7 only
// Target should not be a text node (trac-504, trac-13143)
this.target=t.target&&3===t.target.nodeType?t.target.parentNode:t.target,this.currentTarget=t.currentTarget,this.relatedTarget=t.relatedTarget):this.type=t,e&&T.extend(this,e),// Create a timestamp if incoming event doesn't have one
this.timeStamp=t&&t.timeStamp||Date.now(),// Mark it as fixed
this[T.expando]=!0},// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
T.Event.prototype={constructor:T.Event,isDefaultPrevented:tA,isPropagationStopped:tA,isImmediatePropagationStopped:tA,isSimulated:!1,preventDefault:function(){var t=this.originalEvent;this.isDefaultPrevented=tC,t&&!this.isSimulated&&t.preventDefault()},stopPropagation:function(){var t=this.originalEvent;this.isPropagationStopped=tC,t&&!this.isSimulated&&t.stopPropagation()},stopImmediatePropagation:function(){var t=this.originalEvent;this.isImmediatePropagationStopped=tC,t&&!this.isSimulated&&t.stopImmediatePropagation(),this.stopPropagation()}},// Includes all common event props including KeyEvent and MouseEvent specific props
T.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,char:!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},T.event.addProp),T.each({focus:"focusin",blur:"focusout"},function(t,e){function i(t){if(v.documentMode){// Support: IE 11+
// Attach a single focusin/focusout handler on the document while someone wants
// focus/blur. This is because the former are synchronous in IE while the latter
// are async. In other browsers, all those handlers are invoked synchronously.
// `handle` from private data would already wrap the event, but we need
// to change the `type` here.
var i=tn.get(this,"handle"),n=T.event.fix(t);n.type="focusin"===t.type?"focus":"blur",n.isSimulated=!0,// First, handle focusin/focusout
i(t),n.target===n.currentTarget&&// `jQuery.event.add`, so event handle will already have been set
// by this point.
i(n)}else // while someone wants focusin/focusout.
T.event.simulate(e,t.target,T.event.fix(t))}T.event.special[t]={// Utilize native event if possible so blur/focus sequence is correct
setup:function(){var n;if(// Claim the first handler
// dataPriv.set( this, "focus", ... )
// dataPriv.set( this, "blur", ... )
tI(this,t,!0),!v.documentMode)return!1;// Support: IE 9 - 11+
// We use the same native handler for focusin & focus (and focusout & blur)
// so we need to coordinate setup & teardown parts between those events.
// Use `delegateType` as the key as `type` is already used by `leverageNative`.
(n=tn.get(this,e))||this.addEventListener(e,i),tn.set(this,e,(n||0)+1)},trigger:function(){// Return non-false to allow normal event-path propagation
return(// Force setup before trigger
tI(this,t),!0)},teardown:function(){var t;if(!v.documentMode)return!1;(t=tn.get(this,e)-1)?tn.set(this,e,t):(this.removeEventListener(e,i),tn.remove(this,e))},// Suppress native focus or blur if we're currently inside
// a leveraged native-event stack
_default:function(e){return tn.get(e.target,t)},delegateType:e},// Support: Firefox <=44
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
//
// Support: IE 9 - 11+
// To preserve relative focusin/focus & focusout/blur event order guaranteed on the 3.x branch,
// attach a single handler for both events in IE.
T.event.special[e]={setup:function(){// Handle: regular nodes (via `this.ownerDocument`), window
// (via `this.document`) & document (via `this`).
var n=this.ownerDocument||this.document||this,o=v.documentMode?this:n,s=tn.get(o,e);s||(v.documentMode?this.addEventListener(e,i):n.addEventListener(t,i,!0)),tn.set(o,e,(s||0)+1)},teardown:function(){var n=this.ownerDocument||this.document||this,o=v.documentMode?this:n,s=tn.get(o,e)-1;s?tn.set(o,e,s):(v.documentMode?this.removeEventListener(e,i):n.removeEventListener(t,i,!0),tn.remove(o,e))}}}),// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
T.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(t,e){T.event.special[t]={delegateType:e,bindType:e,handle:function(t){var i,n=t.relatedTarget,o=t.handleObj;return n&&(n===this||T.contains(this,n))||(t.type=o.origType,i=o.handler.apply(this,arguments),t.type=e),i}}}),T.fn.extend({on:function(t,e,i,n){return tD(this,t,e,i,n)},one:function(t,e,i,n){return tD(this,t,e,i,n,1)},off:function(t,e,i){var n,o;if(t&&t.preventDefault&&t.handleObj)return(// ( event )  dispatched jQuery.Event
n=t.handleObj,T(t.delegateTarget).off(n.namespace?n.origType+"."+n.namespace:n.origType,n.selector,n.handler),this);if("object"==typeof t){// ( types-object [, selector] )
for(o in t)this.off(o,e,t[o]);return this}return(!1===e||"function"==typeof e)&&(// ( types [, fn] )
i=e,e=void 0),!1===i&&(i=tA),this.each(function(){T.event.remove(this,t,i,e)})}});var // In IE/Edge using regex groups here causes severe slowdowns.
// See https://connect.microsoft.com/IE/feedback/details/1736512/
t_=/<script|<style|<link/i,tH=/checked\s*(?:[^=]|=\s*.checked.)/i,tX=/^\s*<!\[CDATA\[|\]\]>\s*$/g;// Prefer a tbody over its parent table for containing new rows
function tL(t,e){return k(t,"table")&&k(11!==e.nodeType?e:e.firstChild,"tr")&&T(t).children("tbody")[0]||t}// Replace/restore the type attribute of script elements for safe DOM manipulation
function tO(t){return t.type=(null!==t.getAttribute("type"))+"/"+t.type,t}function tY(t){return"true/"===(t.type||"").slice(0,5)?t.type=t.type.slice(5):t.removeAttribute("type"),t}function tz(t,e){var i,n,o,s,r,a;if(1===e.nodeType){// 1. Copy private data: events, handlers, etc.
if(tn.hasData(t)&&(a=tn.get(t).events))for(o in tn.remove(e,"handle events"),a)for(i=0,n=a[o].length;i<n;i++)T.event.add(e,o,a[o][i]);// 2. Copy user data
to.hasData(t)&&(s=to.access(t),r=T.extend({},s),to.set(e,r))}}function tM(t,e,i,n){// Flatten any nested arrays
e=r(e);var o,s,a,l,c,h,u=0,p=t.length,d=p-1,g=e[0],v=m(g);// We can't cloneNode fragments that contain checked, in WebKit
if(v||p>1&&"string"==typeof g&&!f.checkClone&&tH.test(g))return t.each(function(o){var s=t.eq(o);v&&(e[0]=g.call(this,o,s.html())),tM(s,e,i,n)});if(p&&(s=(o=tk(e,t[0].ownerDocument,!1,t,n)).firstChild,1===o.childNodes.length&&(o=s),s||n)){// Use the original fragment for the last item
// instead of the first because it can end up
// being emptied incorrectly in certain situations (trac-8070).
for(l=(a=T.map(tw(o,"script"),tO)).length;u<p;u++)c=o,u!==d&&(c=T.clone(c,!0,!0),l&&// push.apply(_, arraylike) throws on ancient WebKit
T.merge(a,tw(c,"script"))),i.call(t[u],c,u);if(l)// Evaluate executable scripts on first document insertion
for(h=a[a.length-1].ownerDocument,// Re-enable scripts
T.map(a,tY),u=0;u<l;u++)c=a[u],tb.test(c.type||"")&&!tn.access(c,"globalEval")&&T.contains(h,c)&&(c.src&&"module"!==(c.type||"").toLowerCase()?T._evalUrl&&!c.noModule&&T._evalUrl(c.src,{nonce:c.nonce||c.getAttribute("nonce")},h):// needed as in XML documents they're already not visible when
// inspecting element contents and in HTML documents they have no
// meaning but we're preserving that logic for backwards compatibility.
// This will be removed completely in 4.0. See gh-4904.
x(c.textContent.replace(tX,""),c,h))}return t}function tN(t,e,i){for(var n,o=e?T.filter(e,t):t,s=0;null!=(n=o[s]);s++)i||1!==n.nodeType||T.cleanData(tw(n)),n.parentNode&&(i&&tp(n)&&tT(tw(n,"script")),n.parentNode.removeChild(n));return t}T.extend({htmlPrefilter:function(t){return t},clone:function(t,e,i){var n,o,s,r,a=t.cloneNode(!0),l=tp(t);// Fix IE cloning issues
if(!f.noCloneChecked&&(1===t.nodeType||11===t.nodeType)&&!T.isXMLDoc(t))for(n=0,// We eschew jQuery#find here for performance reasons:
// https://jsperf.com/getall-vs-sizzle/2
r=tw(a),o=(s=tw(t)).length;n<o;n++)!// Fix IE bugs, see support tests
function(t,e){var i=e.nodeName.toLowerCase();// Fails to persist the checked state of a cloned checkbox or radio button.
"input"===i&&ty.test(t.type)?e.checked=t.checked:("input"===i||"textarea"===i)&&(e.defaultValue=t.defaultValue)}(s[n],r[n]);// Copy the events from the original to the clone
if(e){if(i)for(n=0,s=s||tw(t),r=r||tw(a),o=s.length;n<o;n++)tz(s[n],r[n]);else tz(t,a)}// Return the cloned set
return(// Preserve script evaluation history
(r=tw(a,"script")).length>0&&tT(r,!l&&tw(t,"script")),a)},cleanData:function(t){for(var e,i,n,o=T.event.special,s=0;void 0!==(i=t[s]);s++)if(te(i)){if(e=i[tn.expando]){if(e.events)for(n in e.events)o[n]?T.event.remove(i,n):T.removeEvent(i,n,e.handle);// Support: Chrome <=35 - 45+
// Assign undefined instead of using delete, see Data#remove
i[tn.expando]=void 0}i[to.expando]&&// Assign undefined instead of using delete, see Data#remove
(i[to.expando]=void 0)}}}),T.fn.extend({detach:function(t){return tN(this,t,!0)},remove:function(t){return tN(this,t)},text:function(t){return K(this,function(t){return void 0===t?T.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=t)})},null,t,arguments.length)},append:function(){return tM(this,arguments,function(t){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&tL(this,t).appendChild(t)})},prepend:function(){return tM(this,arguments,function(t){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var e=tL(this,t);e.insertBefore(t,e.firstChild)}})},before:function(){return tM(this,arguments,function(t){this.parentNode&&this.parentNode.insertBefore(t,this)})},after:function(){return tM(this,arguments,function(t){this.parentNode&&this.parentNode.insertBefore(t,this.nextSibling)})},empty:function(){for(var t,e=0;null!=(t=this[e]);e++)1===t.nodeType&&(// Prevent memory leaks
T.cleanData(tw(t,!1)),// Remove any remaining nodes
t.textContent="");return this},clone:function(t,e){return t=null!=t&&t,e=null==e?t:e,this.map(function(){return T.clone(this,t,e)})},html:function(t){return K(this,function(t){var e=this[0]||{},i=0,n=this.length;if(void 0===t&&1===e.nodeType)return e.innerHTML;// See if we can take a shortcut and just use innerHTML
if("string"==typeof t&&!t_.test(t)&&!tS[(tx.exec(t)||["",""])[1].toLowerCase()]){t=T.htmlPrefilter(t);try{for(;i<n;i++)e=this[i]||{},1===e.nodeType&&(T.cleanData(tw(e,!1)),e.innerHTML=t);e=0;// If using innerHTML throws an exception, use the fallback method
}catch(t){}}e&&this.empty().append(t)},null,t,arguments.length)},replaceWith:function(){var t=[];// Make the changes, replacing each non-ignored context element with the new content
return tM(this,arguments,function(e){var i=this.parentNode;0>T.inArray(this,t)&&(T.cleanData(tw(this)),i&&i.replaceChild(e,this));// Force callback invocation
},t)}}),T.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(t,e){T.fn[t]=function(t){for(var i,n=[],o=T(t),s=o.length-1,r=0;r<=s;r++)i=r===s?this:this.clone(!0),T(o[r])[e](i),// Support: Android <=4.0 only, PhantomJS 1 only
// .get() because push.apply(_, arraylike) throws on ancient WebKit
a.apply(n,i.get());return this.pushStack(n)}});var tR=RegExp("^("+tl+")(?!px)[a-z%]+$","i"),tj=/^--/,tW=function(e){// Support: IE <=11 only, Firefox <=30 (trac-15098, trac-14150)
// IE throws on elements created in popups
// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
var i=e.ownerDocument.defaultView;return i&&i.opener||(i=t),i.getComputedStyle(e)},tB=function(t,e,i){var n,o,s={};// Remember the old values, and insert the new ones
for(o in e)s[o]=t.style[o],t.style[o]=e[o];// Revert the old values
for(o in n=i.call(t),e)t.style[o]=s[o];return n},tq=RegExp(th.join("|"),"i");function tF(t,e,i){var n,o,s,r,a=tj.test(e),// Retrieving style before computed somehow
// fixes an issue with getting wrong values
// on detached elements
l=t.style;return(i=i||tW(t))&&(// Support: IE <=9 - 11+
// IE only supports `"float"` in `getPropertyValue`; in computed styles
// it's only available as `"cssFloat"`. We no longer modify properties
// sent to `.css()` apart from camelCasing, so we need to check both.
// Normally, this would create difference in behavior: if
// `getPropertyValue` returns an empty string, the value returned
// by `.css()` would be `undefined`. This is usually the case for
// disconnected elements. However, in IE even disconnected elements
// with no styles return `"none"` for `getPropertyValue( "float" )`
r=i.getPropertyValue(e)||i[e],a&&r&&// Spec requires trimming whitespace for custom properties (gh-4926).
// Firefox only trims leading whitespace. Chrome just collapses
// both leading & trailing whitespace to a single space.
//
// Fall back to `undefined` if empty string returned.
// This collapses a missing definition with property defined
// and set to an empty string but there's no standard API
// allowing us to differentiate them without a performance penalty
// and returning `undefined` aligns with older jQuery.
//
// rtrimCSS treats U+000D CARRIAGE RETURN and U+000C FORM FEED
// as whitespace while CSS does not, but this is not a problem
// because CSS preprocessing replaces them with U+000A LINE FEED
// (which *is* CSS whitespace)
// https://www.w3.org/TR/css-syntax-3/#input-preprocessing
(r=r.replace(I,"$1")||void 0),""!==r||tp(t)||(r=T.style(t,e)),!f.pixelBoxStyles()&&tR.test(r)&&tq.test(e)&&(// Remember the original values
n=l.width,o=l.minWidth,s=l.maxWidth,// Put in the new values to get a computed value out
l.minWidth=l.maxWidth=l.width=r,r=i.width,// Revert the changed values
l.width=n,l.minWidth=o,l.maxWidth=s)),void 0!==r?// IE returns zIndex value as an integer.
r+"":r}function tV(t,e){// Define the hook, we'll check on the first run if it's really needed.
return{get:function(){if(t()){// Hook not needed (or it's not possible to use it due
// to missing dependency), remove it.
delete this.get;return}// Hook needed; redefine it so that the support test is not executed again.
return(this.get=e).apply(this,arguments)}}}!function(){// Executing both pixelPosition & boxSizingReliable tests require only one layout
// so they're executed at the same time to save the second computation.
function e(){// This is a singleton, we need to execute it only once
if(h){c.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",h.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",tu.appendChild(c).appendChild(h);var e=t.getComputedStyle(h);n="1%"!==e.top,// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
l=12===i(e.marginLeft),// Support: Android 4.0 - 4.3 only, Safari <=9.1 - 10.1, iOS <=7.0 - 9.3
// Some styles come back with percentage values, even though they shouldn't
h.style.right="60%",r=36===i(e.right),// Support: IE 9 - 11 only
// Detect misreporting of content dimensions for box-sizing:border-box elements
o=36===i(e.width),// Support: IE 9 only
// Detect overflow:scroll screwiness (gh-3699)
// Support: Chrome <=64
// Don't get tricked when zoom affects offsetWidth (gh-4029)
h.style.position="absolute",s=12===i(h.offsetWidth/3),tu.removeChild(c),// Nullify the div so it wouldn't be stored in the memory and
// it will also be a sign that checks already performed
h=null}}function i(t){return Math.round(parseFloat(t))}var n,o,s,r,a,l,c=v.createElement("div"),h=v.createElement("div");// Finish early in limited (non-browser) environments
h.style&&(// Support: IE <=9 - 11 only
// Style of cloned element affects source element cloned (trac-8908)
h.style.backgroundClip="content-box",h.cloneNode(!0).style.backgroundClip="",f.clearCloneStyle="content-box"===h.style.backgroundClip,T.extend(f,{boxSizingReliable:function(){return e(),o},pixelBoxStyles:function(){return e(),r},pixelPosition:function(){return e(),n},reliableMarginLeft:function(){return e(),l},scrollboxSize:function(){return e(),s},// Support: IE 9 - 11+, Edge 15 - 18+
// IE/Edge misreport `getComputedStyle` of table rows with width/height
// set in CSS while `offset*` properties report correct values.
// Behavior in IE 9 is more subtle than in newer versions & it passes
// some versions of this test; make sure not to make it pass there!
//
// Support: Firefox 70+
// Only Firefox includes border widths
// in computed dimensions. (gh-4529)
reliableTrDimensions:function(){var e,i,n,o;return null==a&&(e=v.createElement("table"),i=v.createElement("tr"),n=v.createElement("div"),e.style.cssText="position:absolute;left:-11111px;border-collapse:separate",i.style.cssText="box-sizing:content-box;border:1px solid",// Support: Chrome 86+
// Height set through cssText does not get applied.
// Computed height then comes back as 0.
i.style.height="1px",n.style.height="9px",// Support: Android 8 Chrome 86+
// In our bodyBackground.html iframe,
// display for all div elements is set to "inline",
// which causes a problem only in Android 8 Chrome 86.
// Ensuring the div is `display: block`
// gets around this issue.
n.style.display="block",tu.appendChild(e).appendChild(i).appendChild(n),a=parseInt((o=t.getComputedStyle(i)).height,10)+parseInt(o.borderTopWidth,10)+parseInt(o.borderBottomWidth,10)===i.offsetHeight,tu.removeChild(e)),a}}))}();var tU=["Webkit","Moz","ms"],t$=v.createElement("div").style,tG={};// Return a potentially-mapped jQuery.cssProps or vendor prefixed property
function tK(t){return T.cssProps[t]||tG[t]||(t in t$?t:tG[t]=// Return a vendor-prefixed property or undefined
function(t){for(// Check for vendor prefixed names
var e=t[0].toUpperCase()+t.slice(1),i=tU.length;i--;)if((t=tU[i]+e)in t$)return t}(t)||t)}var // except "table", "table-cell", or "table-caption"
// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
tQ=/^(none|table(?!-c[ea]).+)/,tZ={position:"absolute",visibility:"hidden",display:"block"},tJ={letterSpacing:"0",fontWeight:"400"};function t0(t,e,i){// Any relative (+/-) values have already been
// normalized at this point
var n=tc.exec(e);return n?Math.max(0,n[2]-(i||0))+(n[3]||"px"):e}function t1(t,e,i,n,o,s){var r="width"===e?1:0,a=0,l=0,c=0;// Adjustment may not be necessary
if(i===(n?"border":"content"))return 0;for(;r<4;r+=2)"margin"===i&&(c+=T.css(t,i+th[r],!0,o)),n?("content"===i&&(l-=T.css(t,"padding"+th[r],!0,o)),"margin"!==i&&(l-=T.css(t,"border"+th[r]+"Width",!0,o))):(// Add padding
l+=T.css(t,"padding"+th[r],!0,o),"padding"!==i?l+=T.css(t,"border"+th[r]+"Width",!0,o):a+=T.css(t,"border"+th[r]+"Width",!0,o));return!n&&s>=0&&// Assuming integer scroll gutter, subtract the rest and round down
(l+=Math.max(0,Math.ceil(t["offset"+e[0].toUpperCase()+e.slice(1)]-s-l-a-.5))||0),l+c}function t2(t,e,i){// Start with computed style
var n=tW(t),o=(!f.boxSizingReliable()||i)&&"border-box"===T.css(t,"boxSizing",!1,n),s=o,r=tF(t,e,n),a="offset"+e[0].toUpperCase()+e.slice(1);// Support: Firefox <=54
// Return a confounding non-pixel value or feign ignorance, as appropriate.
if(tR.test(r)){if(!i)return r;r="auto"}// Adjust for the element's box model
return(!f.boxSizingReliable()&&o||// Support: IE 10 - 11+, Edge 15 - 18+
// IE/Edge misreport `getComputedStyle` of table rows with width/height
// set in CSS while `offset*` properties report correct values.
// Interestingly, in some cases IE 9 doesn't suffer from this issue.
!f.reliableTrDimensions()&&k(t,"tr")||// Fall back to offsetWidth/offsetHeight when value is "auto"
// This happens for inline elements with no explicit setting (gh-3571)
"auto"===r||// Support: Android <=4.1 - 4.3 only
// Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
!parseFloat(r)&&"inline"===T.css(t,"display",!1,n))&&// Make sure the element is visible & connected
t.getClientRects().length&&(o="border-box"===T.css(t,"boxSizing",!1,n),// Where available, offsetWidth/offsetHeight approximate border box dimensions.
// Where not available (e.g., SVG), assume unreliable box-sizing and interpret the
// retrieved value as a content box dimension.
(s=a in t)&&(r=t[a])),// Normalize "" and auto
(r=parseFloat(r)||0)+t1(t,e,i||(o?"border":"content"),s,n,r)+"px"}function t3(t,e,i,n,o){return new t3.prototype.init(t,e,i,n,o)}T.extend({// Add in style property hooks for overriding the default
// behavior of getting and setting a style property
cssHooks:{opacity:{get:function(t,e){if(e){// We should always get a number back from opacity
var i=tF(t,"opacity");return""===i?"1":i}}}},// Don't automatically add "px" to these possibly-unitless properties
cssNumber:{animationIterationCount:!0,aspectRatio:!0,borderImageSlice:!0,columnCount:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,scale:!0,widows:!0,zIndex:!0,zoom:!0,// SVG-related
fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeMiterlimit:!0,strokeOpacity:!0},// Add in properties whose names you wish to fix before
// setting or getting the value
cssProps:{},// Get and set the style property on a DOM Node
style:function(t,e,i,n){// Don't set styles on text and comment nodes
if(t&&3!==t.nodeType&&8!==t.nodeType&&t.style){// Make sure that we're working with the right name
var o,s,r,a=tt(e),l=tj.test(e),c=t.style;// Check if we're setting a value
if(l||(e=tK(a)),// Gets hook for the prefixed version, then unprefixed version
r=T.cssHooks[e]||T.cssHooks[a],void 0===i)return(// If a hook was provided get the non-computed value from there
r&&"get"in r&&void 0!==(o=r.get(t,!1,n))?o:c[e]);// Make sure that null and NaN values aren't set (trac-7116)
"string"==(s=typeof i)&&(o=tc.exec(i))&&o[1]&&(i=tm(t,e,o),// Fixes bug trac-9237
s="number"),null!=i&&i==i&&("number"!==s||l||(i+=o&&o[3]||(T.cssNumber[a]?"":"px")),f.clearCloneStyle||""!==i||0!==e.indexOf("background")||(c[e]="inherit"),r&&"set"in r&&void 0===(i=r.set(t,i,n))||(l?c.setProperty(e,i):c[e]=i))}},css:function(t,e,i,n){var o,s,r,a=tt(e);return(// Make numeric if forced or a qualifier was provided and val looks numeric
(tj.test(e)||(e=tK(a)),// Try prefixed name followed by the unprefixed name
(r=T.cssHooks[e]||T.cssHooks[a])&&"get"in r&&(o=r.get(t,!0,i)),void 0===o&&(o=tF(t,e,n)),"normal"===o&&e in tJ&&(o=tJ[e]),""===i||i)?(s=parseFloat(o),!0===i||isFinite(s)?s||0:o):o)}}),T.each(["height","width"],function(t,e){T.cssHooks[e]={get:function(t,i,n){if(i)// but it must have a current display style that would benefit
return!tQ.test(T.css(t,"display"))||// Support: Safari 8+
// Table columns in Safari have non-zero offsetWidth & zero
// getBoundingClientRect().width unless display is changed.
// Support: IE <=11 only
// Running getBoundingClientRect on a disconnected node
// in IE throws an error.
t.getClientRects().length&&t.getBoundingClientRect().width?t2(t,e,n):tB(t,tZ,function(){return t2(t,e,n)})},set:function(t,i,n){var o,s=tW(t),// to avoid forcing a reflow.
r=!f.scrollboxSize()&&"absolute"===s.position,a=(r||n)&&"border-box"===T.css(t,"boxSizing",!1,s),l=n?t1(t,e,n,a,s):0;return a&&r&&(l-=Math.ceil(t["offset"+e[0].toUpperCase()+e.slice(1)]-parseFloat(s[e])-t1(t,e,"border",!1,s)-.5)),l&&(o=tc.exec(i))&&"px"!==(o[3]||"px")&&(t.style[e]=i,i=T.css(t,e)),t0(t,i,l)}}}),T.cssHooks.marginLeft=tV(f.reliableMarginLeft,function(t,e){if(e)return(parseFloat(tF(t,"marginLeft"))||t.getBoundingClientRect().left-tB(t,{marginLeft:0},function(){return t.getBoundingClientRect().left}))+"px"}),// These hooks are used by animate to expand properties
T.each({margin:"",padding:"",border:"Width"},function(t,e){T.cssHooks[t+e]={expand:function(i){for(var n=0,o={},s="string"==typeof i?i.split(" "):[i];n<4;n++)o[t+th[n]+e]=s[n]||s[n-2]||s[0];return o}},"margin"!==t&&(T.cssHooks[t+e].set=t0)}),T.fn.extend({css:function(t,e){return K(this,function(t,e,i){var n,o,s={},r=0;if(Array.isArray(e)){for(n=tW(t),o=e.length;r<o;r++)s[e[r]]=T.css(t,e[r],!1,n);return s}return void 0!==i?T.style(t,e,i):T.css(t,e)},t,e,arguments.length>1)}}),T.Tween=t3,t3.prototype={constructor:t3,init:function(t,e,i,n,o,s){this.elem=t,this.prop=i,this.easing=o||T.easing._default,this.options=e,this.start=this.now=this.cur(),this.end=n,this.unit=s||(T.cssNumber[i]?"":"px")},cur:function(){var t=t3.propHooks[this.prop];return t&&t.get?t.get(this):t3.propHooks._default.get(this)},run:function(t){var e,i=t3.propHooks[this.prop];return this.options.duration?this.pos=e=T.easing[this.easing](t,this.options.duration*t,0,1,this.options.duration):this.pos=e=t,this.now=(this.end-this.start)*e+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),i&&i.set?i.set(this):t3.propHooks._default.set(this),this}},t3.prototype.init.prototype=t3.prototype,t3.propHooks={_default:{get:function(t){var e;return(// Use a property on the element directly when it is not a DOM element,
// or when there is no matching style property that exists.
1!==t.elem.nodeType||null!=t.elem[t.prop]&&null==t.elem.style[t.prop]?t.elem[t.prop]:// Passing an empty string as a 3rd parameter to .css will automatically
// attempt a parseFloat and fallback to a string if the parse fails.
// Simple values such as "10px" are parsed to Float;
// complex values such as "rotate(1rad)" are returned as-is.
(e=T.css(t.elem,t.prop,""))&&"auto"!==e?e:0)},set:function(t){// Use step hook for back compat.
// Use cssHook if its there.
// Use .style if available and use plain properties where available.
T.fx.step[t.prop]?T.fx.step[t.prop](t):1===t.elem.nodeType&&(T.cssHooks[t.prop]||null!=t.elem.style[tK(t.prop)])?T.style(t.elem,t.prop,t.now+t.unit):t.elem[t.prop]=t.now}}},// Support: IE <=9 only
// Panic based approach to setting things on disconnected nodes
t3.propHooks.scrollTop=t3.propHooks.scrollLeft={set:function(t){t.elem.nodeType&&t.elem.parentNode&&(t.elem[t.prop]=t.now)}},T.easing={linear:function(t){return t},swing:function(t){return .5-Math.cos(t*Math.PI)/2},_default:"swing"},T.fx=t3.prototype.init,// Back compat <1.8 extension point
T.fx.step={};var t5,t4,t8,t7,t6=/^(?:toggle|show|hide)$/,t9=/queueHooks$/;// Animations created synchronously will run synchronously
function et(){return t.setTimeout(function(){t8=void 0}),t8=Date.now()}// Generate parameters to create a standard animation
function ee(t,e){var i,n=0,o={height:t};for(// If we include width, step value is 1 to do all cssExpand values,
// otherwise step value is 2 to skip over Left and Right
e=e?1:0;n<4;n+=2-e)o["margin"+(i=th[n])]=o["padding"+i]=t;return e&&(o.opacity=o.width=t),o}function ei(t,e,i){for(var n,o=(en.tweeners[e]||[]).concat(en.tweeners["*"]),s=0,r=o.length;s<r;s++)if(n=o[s].call(i,e,t))return n}function en(t,e,i){var n,o,s=0,r=en.prefilters.length,a=T.Deferred().always(function(){// Don't match elem in the :animated selector
delete l.elem}),l=function(){if(o)return!1;for(var e=t8||et(),i=Math.max(0,c.startTime+c.duration-e),n=1-(i/c.duration||0),s=0,r=c.tweens.length;s<r;s++)c.tweens[s].run(n);return(// If there's more to do, yield
(a.notifyWith(t,[c,n,i]),n<1&&r)?i:(r||a.notifyWith(t,[c,1,0]),// Resolve the animation and report its conclusion
a.resolveWith(t,[c]),!1))},c=a.promise({elem:t,props:T.extend({},e),opts:T.extend(!0,{specialEasing:{},easing:T.easing._default},i),originalProperties:e,originalOptions:i,startTime:t8||et(),duration:i.duration,tweens:[],createTween:function(e,i){var n=T.Tween(t,c.opts,e,i,c.opts.specialEasing[e]||c.opts.easing);return c.tweens.push(n),n},stop:function(e){var i=0,// otherwise we skip this part
n=e?c.tweens.length:0;if(o)return this;for(o=!0;i<n;i++)c.tweens[i].run(1);return e?(a.notifyWith(t,[c,1,0]),a.resolveWith(t,[c,e])):a.rejectWith(t,[c,e]),this}}),h=c.props;for(function(t,e){var i,n,o,s,r;// camelCase, specialEasing and expand cssHook pass
for(i in t)if(o=e[n=tt(i)],Array.isArray(s=t[i])&&(o=s[1],s=t[i]=s[0]),i!==n&&(t[n]=s,delete t[i]),(r=T.cssHooks[n])&&("expand"in r))// Not quite $.extend, this won't overwrite existing keys.
// Reusing 'index' because we have the correct "name"
for(i in s=r.expand(s),delete t[n],s)(i in t)||(t[i]=s[i],e[i]=o);else e[n]=o}(h,c.opts.specialEasing);s<r;s++)if(n=en.prefilters[s].call(c,t,h,c.opts))return m(n.stop)&&(T._queueHooks(c.elem,c.opts.queue).stop=n.stop.bind(n)),n;return T.map(h,ei,c),m(c.opts.start)&&c.opts.start.call(t,c),// Attach callbacks from options
c.progress(c.opts.progress).done(c.opts.done,c.opts.complete).fail(c.opts.fail).always(c.opts.always),T.fx.timer(T.extend(l,{elem:t,anim:c,queue:c.opts.queue})),c}T.Animation=T.extend(en,{tweeners:{"*":[function(t,e){var i=this.createTween(t,e);return tm(i.elem,t,tc.exec(e),i),i}]},tweener:function(t,e){m(t)?(e=t,t=["*"]):t=t.match(B);for(var i,n=0,o=t.length;n<o;n++)i=t[n],en.tweeners[i]=en.tweeners[i]||[],en.tweeners[i].unshift(e)},prefilters:[function(t,e,i){var n,o,s,r,a,l,c,h,u="width"in e||"height"in e,p=this,d={},f=t.style,m=t.nodeType&&tf(t),g=tn.get(t,"fxshow");// Detect show/hide animations
for(n in i.queue||(null==(r=T._queueHooks(t,"fx")).unqueued&&(r.unqueued=0,a=r.empty.fire,r.empty.fire=function(){r.unqueued||a()}),r.unqueued++,p.always(function(){// Ensure the complete handler is called before this completes
p.always(function(){r.unqueued--,T.queue(t,"fx").length||r.empty.fire()})})),e)if(o=e[n],t6.test(o)){if(delete e[n],s=s||"toggle"===o,o===(m?"hide":"show")){// Pretend to be hidden if this is a "show" and
// there is still data from a stopped show/hide
if("show"!==o||!g||void 0===g[n])continue;m=!0}d[n]=g&&g[n]||T.style(t,n)}if(!(!// Bail out if this is a no-op like .hide().hide()
(l=!T.isEmptyObject(e))&&T.isEmptyObject(d)))for(n in u&&1===t.nodeType&&(// Support: IE <=9 - 11, Edge 12 - 15
// Record all 3 overflow attributes because IE does not infer the shorthand
// from identically-valued overflowX and overflowY and Edge just mirrors
// the overflowX value there.
i.overflow=[f.overflow,f.overflowX,f.overflowY],null==// Identify a display type, preferring old show/hide data over the CSS cascade
(c=g&&g.display)&&(c=tn.get(t,"display")),"none"===(h=T.css(t,"display"))&&(c?h=c:(// Get nonempty value(s) by temporarily forcing visibility
tv([t],!0),c=t.style.display||c,h=T.css(t,"display"),tv([t]))),("inline"===h||"inline-block"===h&&null!=c)&&"none"===T.css(t,"float")&&(l||(p.done(function(){f.display=c}),null!=c||(c="none"===(h=f.display)?"":h)),f.display="inline-block")),i.overflow&&(f.overflow="hidden",p.always(function(){f.overflow=i.overflow[0],f.overflowX=i.overflow[1],f.overflowY=i.overflow[2]})),// Implement show/hide animations
l=!1,d)l||(g?"hidden"in g&&(m=g.hidden):g=tn.access(t,"fxshow",{display:c}),s&&(g.hidden=!m),m&&tv([t],!0),/* eslint-disable no-loop-func */p.done(function(){for(n in m||tv([t]),tn.remove(t,"fxshow"),d)T.style(t,n,d[n])})),// Per-property setup
l=ei(m?g[n]:0,n,p),n in g||(g[n]=l.start,m&&(l.end=l.start,l.start=0))}],prefilter:function(t,e){e?en.prefilters.unshift(t):en.prefilters.push(t)}}),T.speed=function(t,e,i){var n=t&&"object"==typeof t?T.extend({},t):{complete:i||!i&&e||m(t)&&t,duration:t,easing:i&&e||e&&!m(e)&&e};return T.fx.off?n.duration=0:"number"!=typeof n.duration&&(n.duration in T.fx.speeds?n.duration=T.fx.speeds[n.duration]:n.duration=T.fx.speeds._default),(null==n.queue||!0===n.queue)&&(n.queue="fx"),// Queueing
n.old=n.complete,n.complete=function(){m(n.old)&&n.old.call(this),n.queue&&T.dequeue(this,n.queue)},n},T.fn.extend({fadeTo:function(t,e,i,n){// Show any hidden elements after setting opacity to 0
return this.filter(tf).css("opacity",0).show()// Animate to the value specified
.end().animate({opacity:e},t,i,n)},animate:function(t,e,i,n){var o=T.isEmptyObject(t),s=T.speed(e,i,n),r=function(){// Operate on a copy of prop so per-property easing won't be lost
var e=en(this,T.extend({},t),s);// Empty animations, or finishing resolves immediately
(o||tn.get(this,"finish"))&&e.stop(!0)};return r.finish=r,o||!1===s.queue?this.each(r):this.queue(s.queue,r)},stop:function(t,e,i){var n=function(t){var e=t.stop;delete t.stop,e(i)};return"string"!=typeof t&&(i=e,e=t,t=void 0),e&&this.queue(t||"fx",[]),this.each(function(){var e=!0,o=null!=t&&t+"queueHooks",s=T.timers,r=tn.get(this);if(o)r[o]&&r[o].stop&&n(r[o]);else for(o in r)r[o]&&r[o].stop&&t9.test(o)&&n(r[o]);for(o=s.length;o--;)s[o].elem===this&&(null==t||s[o].queue===t)&&(s[o].anim.stop(i),e=!1,s.splice(o,1));// Start the next in the queue if the last step wasn't forced.
// Timers currently will call their complete callbacks, which
// will dequeue but only if they were gotoEnd.
(e||!i)&&T.dequeue(this,t)})},finish:function(t){return!1!==t&&(t=t||"fx"),this.each(function(){var e,i=tn.get(this),n=i[t+"queue"],o=i[t+"queueHooks"],s=T.timers,r=n?n.length:0;// Look for any active animations, and finish them
for(// Enable finishing flag on private data
i.finish=!0,// Empty the queue first
T.queue(this,t,[]),o&&o.stop&&o.stop.call(this,!0),e=s.length;e--;)s[e].elem===this&&s[e].queue===t&&(s[e].anim.stop(!0),s.splice(e,1));// Look for any animations in the old queue and finish them
for(e=0;e<r;e++)n[e]&&n[e].finish&&n[e].finish.call(this);// Turn off finishing flag
delete i.finish})}}),T.each(["toggle","show","hide"],function(t,e){var i=T.fn[e];T.fn[e]=function(t,n,o){return null==t||"boolean"==typeof t?i.apply(this,arguments):this.animate(ee(e,!0),t,n,o)}}),// Generate shortcuts for custom animations
T.each({slideDown:ee("show"),slideUp:ee("hide"),slideToggle:ee("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(t,e){T.fn[t]=function(t,i,n){return this.animate(e,t,i,n)}}),T.timers=[],T.fx.tick=function(){var t,e=0,i=T.timers;for(t8=Date.now();e<i.length;e++)// Run the timer and safely remove it when done (allowing for external removal)
(t=i[e])()||i[e]!==t||i.splice(e--,1);i.length||T.fx.stop(),t8=void 0},T.fx.timer=function(t){T.timers.push(t),T.fx.start()},T.fx.interval=13,T.fx.start=function(){t7||(t7=!0,function e(){t7&&(!1===v.hidden&&t.requestAnimationFrame?t.requestAnimationFrame(e):t.setTimeout(e,T.fx.interval),T.fx.tick())}())},T.fx.stop=function(){t7=null},T.fx.speeds={slow:600,fast:200,// Default speed
_default:400},// Based off of the plugin by Clint Helfers, with permission.
T.fn.delay=function(e,i){return e=T.fx&&T.fx.speeds[e]||e,i=i||"fx",this.queue(i,function(i,n){var o=t.setTimeout(i,e);n.stop=function(){t.clearTimeout(o)}})},eo=v.createElement("input"),es=v.createElement("select").appendChild(v.createElement("option")),eo.type="checkbox",// Support: Android <=4.3 only
// Default value for a checkbox should be "on"
f.checkOn=""!==eo.value,// Support: IE <=11 only
// Must access selectedIndex to make default options select
f.optSelected=es.selected,// Support: IE <=11 only
// An input loses its value after becoming a radio
(eo=v.createElement("input")).value="t",eo.type="radio",f.radioValue="t"===eo.value;var eo,es,er,ea=T.expr.attrHandle;T.fn.extend({attr:function(t,e){return K(this,T.attr,t,e,arguments.length>1)},removeAttr:function(t){return this.each(function(){T.removeAttr(this,t)})}}),T.extend({attr:function(t,e,i){var n,o,s=t.nodeType;// Don't get/set attributes on text, comment and attribute nodes
if(3!==s&&8!==s&&2!==s){// Fallback to prop when attributes are not supported
if(void 0===t.getAttribute)return T.prop(t,e,i);if(1===s&&T.isXMLDoc(t)||(o=T.attrHooks[e.toLowerCase()]||(T.expr.match.bool.test(e)?er:void 0)),void 0!==i){if(null===i){T.removeAttr(t,e);return}return o&&"set"in o&&void 0!==(n=o.set(t,i,e))?n:(t.setAttribute(e,i+""),i)}return o&&"get"in o&&null!==(n=o.get(t,e))?n:null==(n=T.find.attr(t,e))?void 0:n}},attrHooks:{type:{set:function(t,e){if(!f.radioValue&&"radio"===e&&k(t,"input")){var i=t.value;return t.setAttribute("type",e),i&&(t.value=i),e}}}},removeAttr:function(t,e){var i,n=0,// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
o=e&&e.match(B);if(o&&1===t.nodeType)for(;i=o[n++];)t.removeAttribute(i)}}),// Hooks for boolean attributes
er={set:function(t,e,i){return!1===e?T.removeAttr(t,i):t.setAttribute(i,i),i}},T.each(T.expr.match.bool.source.match(/\w+/g),function(t,e){var i=ea[e]||T.find.attr;ea[e]=function(t,e,n){var o,s,r=e.toLowerCase();return n||(// Avoid an infinite loop by temporarily removing this function from the getter
s=ea[r],ea[r]=o,o=null!=i(t,e,n)?r:null,ea[r]=s),o}});var el=/^(?:input|select|textarea|button)$/i,ec=/^(?:a|area)$/i;// Strip and collapse whitespace according to HTML spec
// https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace
function eh(t){return(t.match(B)||[]).join(" ")}function eu(t){return t.getAttribute&&t.getAttribute("class")||""}function ep(t){return Array.isArray(t)?t:"string"==typeof t&&t.match(B)||[]}T.fn.extend({prop:function(t,e){return K(this,T.prop,t,e,arguments.length>1)},removeProp:function(t){return this.each(function(){delete this[T.propFix[t]||t]})}}),T.extend({prop:function(t,e,i){var n,o,s=t.nodeType;// Don't get/set properties on text, comment and attribute nodes
if(3!==s&&8!==s&&2!==s)return(1===s&&T.isXMLDoc(t)||(// Fix name and attach hooks
e=T.propFix[e]||e,o=T.propHooks[e]),void 0!==i)?o&&"set"in o&&void 0!==(n=o.set(t,i,e))?n:t[e]=i:o&&"get"in o&&null!==(n=o.get(t,e))?n:t[e]},propHooks:{tabIndex:{get:function(t){// Support: IE <=9 - 11 only
// elem.tabIndex doesn't always return the
// correct value when it hasn't been explicitly set
// Use proper attribute retrieval (trac-12072)
var e=T.find.attr(t,"tabindex");return e?parseInt(e,10):el.test(t.nodeName)||ec.test(t.nodeName)&&t.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),f.optSelected||(T.propHooks.selected={get:function(t){/* eslint no-unused-expressions: "off" */var e=t.parentNode;return e&&e.parentNode&&e.parentNode.selectedIndex,null},set:function(t){/* eslint no-unused-expressions: "off" */var e=t.parentNode;e&&(e.selectedIndex,e.parentNode&&e.parentNode.selectedIndex)}}),T.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){T.propFix[this.toLowerCase()]=this}),T.fn.extend({addClass:function(t){var e,i,n,o,s,r;return m(t)?this.each(function(e){T(this).addClass(t.call(this,e,eu(this)))}):(e=ep(t)).length?this.each(function(){if(n=eu(this),i=1===this.nodeType&&" "+eh(n)+" "){for(s=0;s<e.length;s++)o=e[s],0>i.indexOf(" "+o+" ")&&(i+=o+" ");n!==// Only assign if different to avoid unneeded rendering.
(r=eh(i))&&this.setAttribute("class",r)}}):this},removeClass:function(t){var e,i,n,o,s,r;return m(t)?this.each(function(e){T(this).removeClass(t.call(this,e,eu(this)))}):arguments.length?(e=ep(t)).length?this.each(function(){if(n=eu(this),// This expression is here for better compressibility (see addClass)
i=1===this.nodeType&&" "+eh(n)+" "){for(s=0;s<e.length;s++)// Remove *all* instances
for(o=e[s];i.indexOf(" "+o+" ")>-1;)i=i.replace(" "+o+" "," ");n!==// Only assign if different to avoid unneeded rendering.
(r=eh(i))&&this.setAttribute("class",r)}}):this:this.attr("class","")},toggleClass:function(t,e){var i,n,o,s,r=typeof t,a="string"===r||Array.isArray(t);return m(t)?this.each(function(i){T(this).toggleClass(t.call(this,i,eu(this),e),e)}):"boolean"==typeof e&&a?e?this.addClass(t):this.removeClass(t):(i=ep(t),this.each(function(){if(a)for(o=0,// Toggle individual class names
s=T(this);o<i.length;o++)n=i[o],s.hasClass(n)?s.removeClass(n):s.addClass(n);else(void 0===t||"boolean"===r)&&((n=eu(this))&&tn.set(this,"__className__",n),this.setAttribute&&this.setAttribute("class",n||!1===t?"":tn.get(this,"__className__")||""))}))},hasClass:function(t){var e,i,n=0;for(e=" "+t+" ";i=this[n++];)if(1===i.nodeType&&(" "+eh(eu(i))+" ").indexOf(e)>-1)return!0;return!1}});var ed=/\r/g;T.fn.extend({val:function(t){var e,i,n,o=this[0];return arguments.length?(n=m(t),this.each(function(i){var o;1!==this.nodeType||(null==(o=n?t.call(this,i,T(this).val()):t)?o="":"number"==typeof o?o+="":Array.isArray(o)&&(o=T.map(o,function(t){return null==t?"":t+""})),(e=T.valHooks[this.type]||T.valHooks[this.nodeName.toLowerCase()])&&"set"in e&&void 0!==e.set(this,o,"value")||(this.value=o))})):o?(e=T.valHooks[o.type]||T.valHooks[o.nodeName.toLowerCase()])&&"get"in e&&void 0!==(i=e.get(o,"value"))?i:"string"==typeof(i=o.value)?i.replace(ed,""):null==i?"":i:void 0}}),T.extend({valHooks:{option:{get:function(t){var e=T.find.attr(t,"value");return null!=e?e:// option.text throws exceptions (trac-14686, trac-14858)
// Strip and collapse whitespace
// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
eh(T.text(t))}},select:{get:function(t){var e,i,n,o=t.options,s=t.selectedIndex,r="select-one"===t.type,a=r?null:[],l=r?s+1:o.length;// Loop through all the selected options
for(n=s<0?l:r?s:0;n<l;n++)// Support: IE <=9 only
// IE8-9 doesn't update selected after form reset (trac-2551)
if(((i=o[n]).selected||n===s)&&// Don't return options that are disabled or in a disabled optgroup
!i.disabled&&(!i.parentNode.disabled||!k(i.parentNode,"optgroup"))){// We don't need an array for one selects
if(// Get the specific value for the option
e=T(i).val(),r)return e;// Multi-Selects return an array
a.push(e)}return a},set:function(t,e){for(var i,n,o=t.options,s=T.makeArray(e),r=o.length;r--;)/* eslint-disable no-cond-assign */((n=o[r]).selected=T.inArray(T.valHooks.option.get(n),s)>-1)&&(i=!0);return i||(t.selectedIndex=-1),s}}}}),// Radios and checkboxes getter/setter
T.each(["radio","checkbox"],function(){T.valHooks[this]={set:function(t,e){if(Array.isArray(e))return t.checked=T.inArray(T(t).val(),e)>-1}},f.checkOn||(T.valHooks[this].get=function(t){return null===t.getAttribute("value")?"on":t.value})});// Return jQuery for attributes-only inclusion
var ef=t.location,em={guid:Date.now()},eg=/\?/;// Cross-browser xml parsing
T.parseXML=function(e){var i,n;if(!e||"string"!=typeof e)return null;// Support: IE 9 - 11 only
// IE throws on parseFromString with invalid input.
try{i=new t.DOMParser().parseFromString(e,"text/xml")}catch(t){}return n=i&&i.getElementsByTagName("parsererror")[0],(!i||n)&&T.error("Invalid XML: "+(n?T.map(n.childNodes,function(t){return t.textContent}).join("\n"):e)),i};var ev=/^(?:focusinfocus|focusoutblur)$/,ey=function(t){t.stopPropagation()};T.extend(T.event,{trigger:function(e,i,n,o){var s,r,a,l,c,h,p,d,f=[n||v],y=u.call(e,"type")?e.type:e,x=u.call(e,"namespace")?e.namespace.split("."):[];// Don't do events on text and comment nodes
if(r=d=a=n=n||v,!(3===n.nodeType||8===n.nodeType||ev.test(y+T.event.triggered))&&(y.indexOf(".")>-1&&(y=// Namespaced trigger; create a regexp to match event type in handle()
(x=y.split(".")).shift(),x.sort()),c=0>y.indexOf(":")&&"on"+y,// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
// Caller can pass in a jQuery.Event object, Object, or just an event type string
(e=e[T.expando]?e:new T.Event(y,"object"==typeof e&&e)).isTrigger=o?2:3,e.namespace=x.join("."),e.rnamespace=e.namespace?RegExp("(^|\\.)"+x.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,// Clean up the event in case it is being reused
e.result=void 0,e.target||(e.target=n),// Clone any incoming data and prepend the event, creating the handler arg list
i=null==i?[e]:T.makeArray(i,[e]),// Allow special events to draw outside the lines
p=T.event.special[y]||{},o||!p.trigger||!1!==p.trigger.apply(n,i))){// Determine event propagation path in advance, per W3C events spec (trac-9951)
// Bubble up to document, then to window; watch for a global ownerDocument var (trac-9724)
if(!o&&!p.noBubble&&!g(n)){for(l=p.delegateType||y,ev.test(l+y)||(r=r.parentNode);r;r=r.parentNode)f.push(r),a=r;a===(n.ownerDocument||v)&&f.push(a.defaultView||a.parentWindow||t)}for(// Fire handlers on the event path
s=0;(r=f[s++])&&!e.isPropagationStopped();)d=r,e.type=s>1?l:p.bindType||y,// jQuery handler
(h=(tn.get(r,"events")||Object.create(null))[e.type]&&tn.get(r,"handle"))&&h.apply(r,i),// Native handler
(h=c&&r[c])&&h.apply&&te(r)&&(e.result=h.apply(r,i),!1===e.result&&e.preventDefault());return e.type=y,!o&&!e.isDefaultPrevented()&&(!p._default||!1===p._default.apply(f.pop(),i))&&te(n)&&c&&m(n[y])&&!g(n)&&(// Don't re-trigger an onFOO event when we call its FOO() method
(a=n[c])&&(n[c]=null),// Prevent re-triggering of the same event, since we already bubbled it above
T.event.triggered=y,e.isPropagationStopped()&&d.addEventListener(y,ey),n[y](),e.isPropagationStopped()&&d.removeEventListener(y,ey),T.event.triggered=void 0,a&&(n[c]=a)),e.result}},// Piggyback on a donor event to simulate a different one
// Used only for `focus(in | out)` events
simulate:function(t,e,i){var n=T.extend(new T.Event,i,{type:t,isSimulated:!0});T.event.trigger(n,null,e)}}),T.fn.extend({trigger:function(t,e){return this.each(function(){T.event.trigger(t,e,this)})},triggerHandler:function(t,e){var i=this[0];if(i)return T.event.trigger(t,e,i,!0)}});var ex=/\[\]$/,eb=/\r?\n/g,eS=/^(?:submit|button|image|reset|file)$/i,ew=/^(?:input|select|textarea|keygen)/i;// Serialize an array of form elements or a set of
// key/values into a query string
T.param=function(t,e){var i,n=[],o=function(t,e){// If value is a function, invoke it and use its return value
var i=m(e)?e():e;n[n.length]=encodeURIComponent(t)+"="+encodeURIComponent(null==i?"":i)};if(null==t)return"";// If an array was passed in, assume that it is an array of form elements.
if(Array.isArray(t)||t.jquery&&!T.isPlainObject(t))T.each(t,function(){o(this.name,this.value)});else // did it), otherwise encode params recursively.
for(i in t)!function t(e,i,n,o){var s;if(Array.isArray(i))T.each(i,function(i,s){n||ex.test(e)?o(e,s):t(e+"["+("object"==typeof s&&null!=s?i:"")+"]",s,n,o)});else if(n||"object"!==b(i))o(e,i);else for(s in i)t(e+"["+s+"]",i[s],n,o)}(i,t[i],e,o);// Return the resulting serialization
return n.join("&")},T.fn.extend({serialize:function(){return T.param(this.serializeArray())},serializeArray:function(){return this.map(function(){// Can add propHook for "elements" to filter or add form elements
var t=T.prop(this,"elements");return t?T.makeArray(t):this}).filter(function(){var t=this.type;// Use .is( ":disabled" ) so that fieldset[disabled] works
return this.name&&!T(this).is(":disabled")&&ew.test(this.nodeName)&&!eS.test(t)&&(this.checked||!ty.test(t))}).map(function(t,e){var i=T(this).val();return null==i?null:Array.isArray(i)?T.map(i,function(t){return{name:e.name,value:t.replace(eb,"\r\n")}}):{name:e.name,value:i.replace(eb,"\r\n")}}).get()}});var eT=/%20/g,eE=/#.*$/,ek=/([?&])_=[^&]*/,eP=/^(.*?):[ \t]*([^\r\n]*)$/mg,eC=/^(?:GET|HEAD)$/,eA=/^\/\//,/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */eD={},/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */eI={},e_="*/".concat("*"),eH=v.createElement("a");// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function eX(t){// dataTypeExpression is optional and defaults to "*"
return function(e,i){"string"!=typeof e&&(i=e,e="*");var n,o=0,s=e.toLowerCase().match(B)||[];if(m(i))// For each dataType in the dataTypeExpression
for(;n=s[o++];)"+"===n[0]?(t[n=n.slice(1)||"*"]=t[n]||[]).unshift(i):(t[n]=t[n]||[]).push(i)}}// Base inspection function for prefilters and transports
function eL(t,e,i,n){var o={},s=t===eI;function r(a){var l;return o[a]=!0,T.each(t[a]||[],function(t,a){var c=a(e,i,n);return"string"!=typeof c||s||o[c]?s?!(l=c):void 0:(e.dataTypes.unshift(c),r(c),!1)}),l}return r(e.dataTypes[0])||!o["*"]&&r("*")}// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes trac-9887
function eO(t,e){var i,n,o=T.ajaxSettings.flatOptions||{};for(i in e)void 0!==e[i]&&((o[i]?t:n||(n={}))[i]=e[i]);return n&&T.extend(!0,t,n),t}eH.href=ef.href,T.extend({// Counter for holding the number of active queries
active:0,// Last-Modified header cache for next request
lastModified:{},etag:{},ajaxSettings:{url:ef.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(ef.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/accepts:{"*":e_,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},// Data converters
// Keys separate source (or catchall "*") and destination types with a single space
converters:{// Convert anything to text
"* text":String,// Text to html (true = no transformation)
"text html":!0,// Evaluate text as a json expression
"text json":JSON.parse,// Parse text as xml
"text xml":T.parseXML},// For options that shouldn't be deep extended:
// you can add your own custom options here if
// and when you create one that shouldn't be
// deep extended (see ajaxExtend)
flatOptions:{url:!0,context:!0}},// Creates a full fledged settings object into target
// with both ajaxSettings and settings fields.
// If target is omitted, writes into ajaxSettings.
ajaxSetup:function(t,e){return e?eO(eO(t,T.ajaxSettings),e):eO(T.ajaxSettings,t)},ajaxPrefilter:eX(eD),ajaxTransport:eX(eI),// Main method
ajax:function(e,i){"object"==typeof e&&(i=e,e=void 0),// Force options to be an object
i=i||{};var n,o,s,r,a,l,c,h,u,p,d=T.ajaxSetup({},i),f=d.context||d,m=d.context&&(f.nodeType||f.jquery)?T(f):T.event,g=T.Deferred(),y=T.Callbacks("once memory"),x=d.statusCode||{},b={},S={},w="canceled",E={readyState:0,// Builds headers hashtable if needed
getResponseHeader:function(t){var e;if(c){if(!r)for(r={};e=eP.exec(s);)r[e[1].toLowerCase()+" "]=(r[e[1].toLowerCase()+" "]||[]).concat(e[2]);e=r[t.toLowerCase()+" "]}return null==e?null:e.join(", ")},// Raw string
getAllResponseHeaders:function(){return c?s:null},// Caches the header
setRequestHeader:function(t,e){return null==c&&(b[t=S[t.toLowerCase()]=S[t.toLowerCase()]||t]=e),this},// Overrides response content-type header
overrideMimeType:function(t){return null==c&&(d.mimeType=t),this},// Status-dependent callbacks
statusCode:function(t){var e;if(t){if(c)E.always(t[E.status]);else for(e in t)x[e]=[x[e],t[e]]}return this},// Cancel the request
abort:function(t){var e=t||w;return n&&n.abort(e),k(0,e),this}};// A cross-domain request is in order when the origin doesn't match the current origin.
if(// Attach deferreds
g.promise(E),// Add protocol if not provided (prefilters might expect it)
// Handle falsy url in the settings object (trac-10093: consistency with old signature)
// We also use the url parameter if available
d.url=((e||d.url||ef.href)+"").replace(eA,ef.protocol+"//"),// Alias method option to type as per ticket trac-12004
d.type=i.method||i.type||d.method||d.type,// Extract dataTypes list
d.dataTypes=(d.dataType||"*").toLowerCase().match(B)||[""],null==d.crossDomain){l=v.createElement("a");// Support: IE <=8 - 11, Edge 12 - 15
// IE throws exception on accessing the href property if url is malformed,
// e.g. http://example.com:80x/
try{l.href=d.url,// Support: IE <=8 - 11 only
// Anchor's host property isn't correctly set when s.url is relative
l.href=l.href,d.crossDomain=eH.protocol+"//"+eH.host!=l.protocol+"//"+l.host}catch(t){// If there is an error parsing the URL, assume it is crossDomain,
// it can be rejected by the transport if it is invalid
d.crossDomain=!0}}// If request was aborted inside a prefilter, stop there
if(d.data&&d.processData&&"string"!=typeof d.data&&(d.data=T.param(d.data,d.traditional)),// Apply prefilters
eL(eD,d,i,E),c)return E;// Check for headers option
for(u in// We can fire global events as of now if asked to
// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (trac-15118)
(h=T.event&&d.global)&&0==T.active++&&T.event.trigger("ajaxStart"),// Uppercase the type
d.type=d.type.toUpperCase(),// Determine if request has content
d.hasContent=!eC.test(d.type),// Save the URL in case we're toying with the If-Modified-Since
// and/or If-None-Match header later on
// Remove hash to simplify url manipulation
o=d.url.replace(eE,""),d.hasContent?d.data&&d.processData&&0===(d.contentType||"").indexOf("application/x-www-form-urlencoded")&&(d.data=d.data.replace(eT,"+")):(// Remember the hash so we can put it back
p=d.url.slice(o.length),d.data&&(d.processData||"string"==typeof d.data)&&(o+=(eg.test(o)?"&":"?")+d.data,// trac-9682: remove data so that it's not used in an eventual retry
delete d.data),!1===d.cache&&(o=o.replace(ek,"$1"),p=(eg.test(o)?"&":"?")+"_="+em.guid+++p),// Put hash and anti-cache on the URL that will be requested (gh-1732)
d.url=o+p),d.ifModified&&(T.lastModified[o]&&E.setRequestHeader("If-Modified-Since",T.lastModified[o]),T.etag[o]&&E.setRequestHeader("If-None-Match",T.etag[o])),(d.data&&d.hasContent&&!1!==d.contentType||i.contentType)&&E.setRequestHeader("Content-Type",d.contentType),// Set the Accepts header for the server, depending on the dataType
E.setRequestHeader("Accept",d.dataTypes[0]&&d.accepts[d.dataTypes[0]]?d.accepts[d.dataTypes[0]]+("*"!==d.dataTypes[0]?", "+e_+"; q=0.01":""):d.accepts["*"]),d.headers)E.setRequestHeader(u,d.headers[u]);// Allow custom headers/mimetypes and early abort
if(d.beforeSend&&(!1===d.beforeSend.call(f,E,d)||c))return E.abort();// If no transport, we auto-abort
if(// Aborting is no longer a cancellation
w="abort",// Install callbacks on deferreds
y.add(d.complete),E.done(d.success),E.fail(d.error),// Get transport
n=eL(eI,d,i,E)){// If request was aborted inside ajaxSend, stop there
if(E.readyState=1,h&&m.trigger("ajaxSend",[E,d]),c)return E;d.async&&d.timeout>0&&(a=t.setTimeout(function(){E.abort("timeout")},d.timeout));try{c=!1,n.send(b,k)}catch(t){// Rethrow post-completion exceptions
if(c)throw t;// Propagate others as results
k(-1,t)}}else k(-1,"No Transport");// Callback for when everything is done
function k(e,i,r,l){var u,p,v,b,S,w=i;// Ignore repeat invocations
c||(c=!0,a&&t.clearTimeout(a),// Dereference transport for early garbage collection
// (no matter how long the jqXHR object will be used)
n=void 0,// Cache response headers
s=l||"",// Set readyState
E.readyState=e>0?4:0,// Determine if successful
u=e>=200&&e<300||304===e,r&&(b=/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */function(t,e,i){// Remove auto dataType and get content-type in the process
for(var n,o,s,r,a=t.contents,l=t.dataTypes;"*"===l[0];)l.shift(),void 0===n&&(n=t.mimeType||e.getResponseHeader("Content-Type"));// Check if we're dealing with a known content-type
if(n){for(o in a)if(a[o]&&a[o].test(n)){l.unshift(o);break}}// Check to see if we have a response for the expected dataType
if(l[0]in i)s=l[0];else{// Try convertible dataTypes
for(o in i){if(!l[0]||t.converters[o+" "+l[0]]){s=o;break}r||(r=o)}// Or just use first one
s=s||r}// If we found a dataType
// We add the dataType to the list if needed
// and return the corresponding response
if(s)return s!==l[0]&&l.unshift(s),i[s]}(d,E,r)),!u&&T.inArray("script",d.dataTypes)>-1&&0>T.inArray("json",d.dataTypes)&&(d.converters["text script"]=function(){}),// Convert no matter what (that way responseXXX fields are always set)
b=/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */function(t,e,i,n){var o,s,r,a,l,c={},h=t.dataTypes.slice();// Create converters map with lowercased keys
if(h[1])for(r in t.converters)c[r.toLowerCase()]=t.converters[r];// Convert to each sequential dataType
for(s=h.shift();s;)if(t.responseFields[s]&&(i[t.responseFields[s]]=e),!l&&n&&t.dataFilter&&(e=t.dataFilter(e,t.dataType)),l=s,s=h.shift()){// There's only work to do if current dataType is non-auto
if("*"===s)s=l;else if("*"!==l&&l!==s){// If none found, seek a pair
if(!// Seek a direct converter
(r=c[l+" "+s]||c["* "+s])){for(o in c)if(// If conv2 outputs current
(a=o.split(" "))[1]===s&&// If prev can be converted to accepted input
(r=c[l+" "+a[0]]||c["* "+a[0]])){// Condense equivalence converters
!0===r?r=c[o]:!0!==c[o]&&(s=a[0],h.unshift(a[1]));break}}// Apply converter (if not an equivalence)
if(!0!==r){// Unless errors are allowed to bubble, catch and return them
if(r&&t.throws)e=r(e);else try{e=r(e)}catch(t){return{state:"parsererror",error:r?t:"No conversion from "+l+" to "+s}}}}}return{state:"success",data:e}}(d,b,E,u),u?(d.ifModified&&((S=E.getResponseHeader("Last-Modified"))&&(T.lastModified[o]=S),(S=E.getResponseHeader("etag"))&&(T.etag[o]=S)),204===e||"HEAD"===d.type?w="nocontent":304===e?w="notmodified":(w=b.state,p=b.data,u=!(v=b.error))):(// Extract error from statusText and normalize for non-aborts
v=w,(e||!w)&&(w="error",e<0&&(e=0))),// Set data for the fake xhr object
E.status=e,E.statusText=(i||w)+"",u?g.resolveWith(f,[p,w,E]):g.rejectWith(f,[E,w,v]),// Status-dependent callbacks
E.statusCode(x),x=void 0,h&&m.trigger(u?"ajaxSuccess":"ajaxError",[E,d,u?p:v]),// Complete
y.fireWith(f,[E,w]),!h||(m.trigger("ajaxComplete",[E,d]),--T.active||T.event.trigger("ajaxStop")))}return E},getJSON:function(t,e,i){return T.get(t,e,i,"json")},getScript:function(t,e){return T.get(t,void 0,e,"script")}}),T.each(["get","post"],function(t,e){T[e]=function(t,i,n,o){// The url can be an options object (which then must have .url)
return m(i)&&(o=o||n,n=i,i=void 0),T.ajax(T.extend({url:t,type:e,dataType:o,data:i,success:n},T.isPlainObject(t)&&t))}}),T.ajaxPrefilter(function(t){var e;for(e in t.headers)"content-type"===e.toLowerCase()&&(t.contentType=t.headers[e]||"")}),T._evalUrl=function(t,e,i){return T.ajax({url:t,// Make this explicit, since user can override this through ajaxSetup (trac-11264)
type:"GET",dataType:"script",cache:!0,async:!1,global:!1,// Only evaluate the response if it is successful (gh-4126)
// dataFilter is not invoked for failure responses, so using it instead
// of the default converter is kludgy but it works.
converters:{"text script":function(){}},dataFilter:function(t){T.globalEval(t,e,i)}})},T.fn.extend({wrapAll:function(t){var e;return this[0]&&(m(t)&&(t=t.call(this[0])),// The elements to wrap the target around
e=T(t,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&e.insertBefore(this[0]),e.map(function(){for(var t=this;t.firstElementChild;)t=t.firstElementChild;return t}).append(this)),this},wrapInner:function(t){return m(t)?this.each(function(e){T(this).wrapInner(t.call(this,e))}):this.each(function(){var e=T(this),i=e.contents();i.length?i.wrapAll(t):e.append(t)})},wrap:function(t){var e=m(t);return this.each(function(i){T(this).wrapAll(e?t.call(this,i):t)})},unwrap:function(t){return this.parent(t).not("body").each(function(){T(this).replaceWith(this.childNodes)}),this}}),T.expr.pseudos.hidden=function(t){return!T.expr.pseudos.visible(t)},T.expr.pseudos.visible=function(t){return!!(t.offsetWidth||t.offsetHeight||t.getClientRects().length)},T.ajaxSettings.xhr=function(){try{return new t.XMLHttpRequest}catch(t){}};var eY={// File protocol always yields status code 0, assume 200
0:200,// Support: IE <=9 only
// trac-1450: sometimes IE returns 1223 when it should be 204
1223:204},ez=T.ajaxSettings.xhr();f.cors=!!ez&&"withCredentials"in ez,f.ajax=ez=!!ez,T.ajaxTransport(function(e){var i,n;// Cross domain only allowed if supported through XMLHttpRequest
if(f.cors||ez&&!e.crossDomain)return{send:function(o,s){var r,a=e.xhr();// Apply custom fields if provided
if(a.open(e.type,e.url,e.async,e.username,e.password),e.xhrFields)for(r in e.xhrFields)a[r]=e.xhrFields[r];// Set headers
for(r in e.mimeType&&a.overrideMimeType&&a.overrideMimeType(e.mimeType),e.crossDomain||o["X-Requested-With"]||(o["X-Requested-With"]="XMLHttpRequest"),o)a.setRequestHeader(r,o[r]);// Callback
i=function(t){return function(){i&&(i=n=a.onload=a.onerror=a.onabort=a.ontimeout=a.onreadystatechange=null,"abort"===t?a.abort():"error"===t?"number"!=typeof a.status?s(0,"error"):s(a.status,a.statusText):s(eY[a.status]||a.status,a.statusText,"text"!==// IE9 has no XHR2 but throws on binary (trac-11426)
// For XHR2 non-text, let the caller handle it (gh-2498)
(a.responseType||"text")||"string"!=typeof a.responseText?{binary:a.response}:{text:a.responseText},a.getAllResponseHeaders()))}},// Listen to events
a.onload=i(),n=a.onerror=a.ontimeout=i("error"),void 0!==a.onabort?a.onabort=n:a.onreadystatechange=function(){// Check readyState before timeout as it changes
4===a.readyState&&// but that will not handle a native abort
// Also, save errorCallback to a variable
// as xhr.onerror cannot be accessed
t.setTimeout(function(){i&&n()})},// Create the abort callback
i=i("abort");try{// Do send the request (this may raise an exception)
a.send(e.hasContent&&e.data||null)}catch(t){// trac-14683: Only rethrow if this hasn't been notified as an error yet
if(i)throw t}},abort:function(){i&&i()}}}),// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
T.ajaxPrefilter(function(t){t.crossDomain&&(t.contents.script=!1)}),// Install script dataType
T.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(t){return T.globalEval(t),t}}}),// Handle cache's special case and crossDomain
T.ajaxPrefilter("script",function(t){void 0===t.cache&&(t.cache=!1),t.crossDomain&&(t.type="GET")}),// Bind script tag hack transport
T.ajaxTransport("script",function(t){// This transport only deals with cross domain or forced-by-attrs requests
if(t.crossDomain||t.scriptAttrs){var e,i;return{send:function(n,o){e=T("<script>").attr(t.scriptAttrs||{}).prop({charset:t.scriptCharset,src:t.url}).on("load error",i=function(t){e.remove(),i=null,t&&o("error"===t.type?404:200,t.type)}),// Use native DOM manipulation to avoid our domManip AJAX trickery
v.head.appendChild(e[0])},abort:function(){i&&i()}}}});var eM=[],eN=/(=)\?(?=&|$)|\?\?/;// Default jsonp settings
T.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var t=eM.pop()||T.expando+"_"+em.guid++;return this[t]=!0,t}}),// Detect, normalize options and install callbacks for jsonp requests
T.ajaxPrefilter("json jsonp",function(e,i,n){var o,s,r,a=!1!==e.jsonp&&(eN.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&eN.test(e.data)&&"data");// Handle iff the expected data type is "jsonp" or we have a parameter to set
if(a||"jsonp"===e.dataTypes[0])// Delegate to script
return(// Get callback name, remembering preexisting value associated with it
o=e.jsonpCallback=m(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,a?e[a]=e[a].replace(eN,"$1"+o):!1!==e.jsonp&&(e.url+=(eg.test(e.url)?"&":"?")+e.jsonp+"="+o),// Use data converter to retrieve json after script execution
e.converters["script json"]=function(){return r||T.error(o+" was not called"),r[0]},// Force json dataType
e.dataTypes[0]="json",// Install callback
s=t[o],t[o]=function(){r=arguments},// Clean-up function (fires after converters)
n.always(function(){void 0===s?T(t).removeProp(o):t[o]=s,e[o]&&(// Make sure that re-using the options doesn't screw things around
e.jsonpCallback=i.jsonpCallback,// Save the callback name for future use
eM.push(o)),r&&m(s)&&s(r[0]),r=s=void 0}),"script")}),// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
f.createHTMLDocument=((i=v.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===i.childNodes.length),// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
T.parseHTML=function(t,e,i){var n,o,s;return"string"!=typeof t?[]:("boolean"==typeof e&&(i=e,e=!1),e||(f.createHTMLDocument?(// Set the base href for the created document
// so any parsed elements with URLs
// are based on the document's URL (gh-2965)
(n=(e=v.implementation.createHTMLDocument("")).createElement("base")).href=v.location.href,e.head.appendChild(n)):e=v),o=Y.exec(t),s=!i&&[],o)?[e.createElement(o[1])]:(o=tk([t],e,s),s&&s.length&&T(s).remove(),T.merge([],o.childNodes))},/**
 * Load a url into a page
 */T.fn.load=function(t,e,i){var n,o,s,r=this,a=t.indexOf(" ");return a>-1&&(n=eh(t.slice(a)),t=t.slice(0,a)),m(e)?(// We assume that it's the callback
i=e,e=void 0):e&&"object"==typeof e&&(o="POST"),r.length>0&&T.ajax({url:t,// If "type" variable is undefined, then "GET" method will be used.
// Make value of this field explicit since
// user can override it through ajaxSetup method
type:o||"GET",dataType:"html",data:e}).done(function(t){// Save response for use in complete callback
s=arguments,r.html(n?// Exclude scripts to avoid IE 'Permission Denied' errors
T("<div>").append(T.parseHTML(t)).find(n):t);// If the request succeeds, this function gets "data", "status", "jqXHR"
// but they are ignored because response was set above.
// If it fails, this function gets "jqXHR", "status", "error"
}).always(i&&function(t,e){r.each(function(){i.apply(this,s||[t.responseText,e,t])})}),this},T.expr.pseudos.animated=function(t){return T.grep(T.timers,function(e){return t===e.elem}).length},T.offset={setOffset:function(t,e,i){var n,o,s,r,a,l,c=T.css(t,"position"),h=T(t),u={};"static"===c&&(t.style.position="relative"),a=h.offset(),s=T.css(t,"top"),l=T.css(t,"left"),("absolute"===c||"fixed"===c)&&(s+l).indexOf("auto")>-1?(r=(n=h.position()).top,o=n.left):(r=parseFloat(s)||0,o=parseFloat(l)||0),m(e)&&(e=e.call(t,i,T.extend({},a))),null!=e.top&&(u.top=e.top-a.top+r),null!=e.left&&(u.left=e.left-a.left+o),"using"in e?e.using.call(t,u):h.css(u)}},T.fn.extend({// offset() relates an element's border box to the document origin
offset:function(t){// Preserve chaining for setter
if(arguments.length)return void 0===t?this:this.each(function(e){T.offset.setOffset(this,t,e)});var e,i,n=this[0];if(n)return(// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
// Support: IE <=11 only
// Running getBoundingClientRect on a
// disconnected node in IE throws an error
n.getClientRects().length?(// Get document-relative position by adding viewport scroll to viewport-relative gBCR
e=n.getBoundingClientRect(),i=n.ownerDocument.defaultView,{top:e.top+i.pageYOffset,left:e.left+i.pageXOffset}):{top:0,left:0})},// position() relates an element's margin box to its offset parent's padding box
// This corresponds to the behavior of CSS absolute positioning
position:function(){if(this[0]){var t,e,i,n=this[0],o={top:0,left:0};// position:fixed elements are offset from the viewport, which itself always has zero offset
if("fixed"===T.css(n,"position"))e=n.getBoundingClientRect();else{for(e=this.offset(),// Account for the *real* offset parent, which can be the document or its root element
// when a statically positioned element is identified
i=n.ownerDocument,t=n.offsetParent||i.documentElement;t&&(t===i.body||t===i.documentElement)&&"static"===T.css(t,"position");)t=t.parentNode;t&&t!==n&&1===t.nodeType&&(// Incorporate borders into its offset, since they are outside its content origin
o=T(t).offset(),o.top+=T.css(t,"borderTopWidth",!0),o.left+=T.css(t,"borderLeftWidth",!0))}// Subtract parent offsets and element margins
return{top:e.top-o.top-T.css(n,"marginTop",!0),left:e.left-o.left-T.css(n,"marginLeft",!0)}}},// This method will return documentElement in the following cases:
// 1) For the element inside the iframe without offsetParent, this method will return
//    documentElement of the parent window
// 2) For the hidden or detached element
// 3) For body or html element, i.e. in case of the html node - it will return itself
//
// but those exceptions were never presented as a real life use-cases
// and might be considered as more preferable results.
//
// This logic, however, is not guaranteed and can change at any point in the future
offsetParent:function(){return this.map(function(){for(var t=this.offsetParent;t&&"static"===T.css(t,"position");)t=t.offsetParent;return t||tu})}}),// Create scrollLeft and scrollTop methods
T.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,e){var i="pageYOffset"===e;T.fn[t]=function(n){return K(this,function(t,n,o){// Coalesce documents and windows
var s;if(g(t)?s=t:9===t.nodeType&&(s=t.defaultView),void 0===o)return s?s[e]:t[n];s?s.scrollTo(i?s.pageXOffset:o,i?o:s.pageYOffset):t[n]=o},t,n,arguments.length)}}),// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
T.each(["top","left"],function(t,e){T.cssHooks[e]=tV(f.pixelPosition,function(t,i){if(i)// If curCSS returns percentage, fallback to offset
return i=tF(t,e),tR.test(i)?T(t).position()[e]+"px":i})}),// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
T.each({Height:"height",Width:"width"},function(t,e){T.each({padding:"inner"+t,content:e,"":"outer"+t},function(i,n){// Margin is only for outerHeight, outerWidth
T.fn[n]=function(o,s){var r=arguments.length&&(i||"boolean"!=typeof o),a=i||(!0===o||!0===s?"margin":"border");return K(this,function(e,i,o){var s;return g(e)?0===n.indexOf("outer")?e["inner"+t]:e.document.documentElement["client"+t]:9===e.nodeType?(s=e.documentElement,Math.max(e.body["scroll"+t],s["scroll"+t],e.body["offset"+t],s["offset"+t],s["client"+t])):void 0===o?T.css(e,i,a):T.style(e,i,o,a)},e,r?o:void 0,r)}})}),T.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(t,e){T.fn[e]=function(t){return this.on(e,t)}}),T.fn.extend({bind:function(t,e,i){return this.on(t,null,e,i)},unbind:function(t,e){return this.off(t,null,e)},delegate:function(t,e,i,n){return this.on(e,t,i,n)},undelegate:function(t,e,i){// ( namespace ) or ( selector, types [, fn] )
return 1==arguments.length?this.off(t,"**"):this.off(e,t||"**",i)},hover:function(t,e){return this.on("mouseenter",t).on("mouseleave",e||t)}}),T.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(t,e){// Handle event binding
T.fn[e]=function(t,i){return arguments.length>0?this.on(e,null,t,i):this.trigger(e)}});// Support: Android <=4.0 only
// Make sure we trim BOM and NBSP
// Require that the "whitespace run" starts from a non-whitespace
// to avoid O(N^2) behavior when the engine would try matching "\s+$" at each space position.
var eR=/^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;// Bind a function to a context, optionally partially applying any
// arguments.
// jQuery.proxy is deprecated to promote standards (specifically Function#bind)
// However, it is not slated for removal any time soon
T.proxy=function(t,e){var i,n,o;// Quick check to determine if target is callable, in the spec
// this throws a TypeError, but we will just return undefined.
if("string"==typeof e&&(i=t[e],e=t,t=i),m(t))return(// Simulated bind
n=s.call(arguments,2),// Set the guid of unique handler to the same of original handler, so it can be removed
(o=function(){return t.apply(e||this,n.concat(s.call(arguments)))}).guid=t.guid=t.guid||T.guid++,o)},T.holdReady=function(t){t?T.readyWait++:T.ready(!0)},T.isArray=Array.isArray,T.parseJSON=JSON.parse,T.nodeName=k,T.isFunction=m,T.isWindow=g,T.camelCase=tt,T.type=b,T.now=Date.now,T.isNumeric=function(t){// As of jQuery 3.0, isNumeric is limited to
// strings and numbers (primitives or objects)
// that can be coerced to finite numbers (gh-2662)
var e=T.type(t);return("number"===e||"string"===e)&&// parseFloat NaNs numeric-cast false positives ("")
// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
// subtraction forces infinities to NaN
!isNaN(t-parseFloat(t))},T.trim=function(t){return null==t?"":(t+"").replace(eR,"$1")},"function"==typeof define&&define.amd&&define("jquery",[],function(){return T});var ej=t.jQuery,eW=t.$;return T.noConflict=function(e){return t.$===T&&(t.$=eW),e&&t.jQuery===T&&(t.jQuery=ej),T},void 0===e&&(t.jQuery=t.$=T),T},"object"==typeof t.exports?// is present, execute the factory and get jQuery.
// For environments that do not have a `window` with a `document`
// (such as Node.js), expose a factory as module.exports.
// This accentuates the need for the creation of a real `window`.
// e.g. var jQuery = require("jquery")(window);
// See ticket trac-14549 for more info.
t.exports=i.document?n(i,!0):function(t){if(!t.document)throw Error("jQuery requires a window with a document");return n(t)}:n(i)}),g.register("2VK02",function(t,e){!/*! iScroll v5.2.0 ~ (c) 2008-2016 Matteo Spinelli ~ http://cubiq.org/license */function(e,i,n){var o=e.requestAnimationFrame||e.webkitRequestAnimationFrame||e.mozRequestAnimationFrame||e.oRequestAnimationFrame||e.msRequestAnimationFrame||function(t){e.setTimeout(t,1e3/60)},s=function(){var t={},o=i.createElement("div").style,s=function(){for(var t=["t","webkitT","MozT","msT","OT"],e=0,i=t.length;e<i;e++)if(t[e]+"ransform" in o)return t[e].substr(0,t[e].length-1);return!1}();function r(t){return!1!==s&&(""===s?t:s+t.charAt(0).toUpperCase()+t.substr(1))}t.getTime=Date.now||function(){return new Date().getTime()},t.extend=function(t,e){for(var i in e)t[i]=e[i]},t.addEvent=function(t,e,i,n){t.addEventListener(e,i,!!n)},t.removeEvent=function(t,e,i,n){t.removeEventListener(e,i,!!n)},t.prefixPointerEvent=function(t){return e.MSPointerEvent?"MSPointer"+t.charAt(7).toUpperCase()+t.substr(8):t},t.momentum=function(t,e,i,o,s,r){var a,l,c=t-e,h=n.abs(c)/i;return a=t+h*h/(2*(r=void 0===r?6e-4:r))*(c<0?-1:1),l=h/r,a<o?(a=s?o-s/2.5*(h/8):o,l=(c=n.abs(a-t))/h):a>0&&(a=s?s/2.5*(h/8):0,l=(c=n.abs(t)+a)/h),{destination:n.round(a),duration:l}};var a=r("transform");return t.extend(t,{hasTransform:!1!==a,hasPerspective:r("perspective") in o,hasTouch:"ontouchstart"in e,hasPointer:!!(e.PointerEvent||e.MSPointerEvent),hasTransition:r("transition") in o}),/*
	This should find all Android browsers lower than build 535.19 (both stock browser and webview)
	- galaxy S2 is ok
    - 2.3.6 : `AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1`
    - 4.0.4 : `AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30`
   - galaxy S3 is badAndroid (stock brower, webview)
     `AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30`
   - galaxy S4 is badAndroid (stock brower, webview)
     `AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30`
   - galaxy S5 is OK
     `AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Mobile Safari/537.36 (Chrome/)`
   - galaxy S6 is OK
     `AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Mobile Safari/537.36 (Chrome/)`
  */t.isBadAndroid=function(){var t=e.navigator.appVersion;// Android browser is not a chrome browser.
if(!/Android/.test(t)||/Chrome\/\d/.test(t))return!1;var i=t.match(/Safari\/(\d+.\d)/);return!i||"object"!=typeof i||!(i.length>=2)||535.19>parseFloat(i[1])}(),t.extend(t.style={},{transform:a,transitionTimingFunction:r("transitionTimingFunction"),transitionDuration:r("transitionDuration"),transitionDelay:r("transitionDelay"),transformOrigin:r("transformOrigin")}),t.hasClass=function(t,e){return RegExp("(^|\\s)"+e+"(\\s|$)").test(t.className)},t.addClass=function(e,i){if(!t.hasClass(e,i)){var n=e.className.split(" ");n.push(i),e.className=n.join(" ")}},t.removeClass=function(e,i){if(t.hasClass(e,i)){var n=RegExp("(^|\\s)"+i+"(\\s|$)","g");e.className=e.className.replace(n," ")}},t.offset=function(t){// jshint -W084
for(var e=-t.offsetLeft,i=-t.offsetTop;t=t.offsetParent;)e-=t.offsetLeft,i-=t.offsetTop;// jshint +W084
return{left:e,top:i}},t.preventDefaultException=function(t,e){for(var i in e)if(e[i].test(t[i]))return!0;return!1},t.extend(t.eventType={},{touchstart:1,touchmove:1,touchend:1,mousedown:2,mousemove:2,mouseup:2,pointerdown:3,pointermove:3,pointerup:3,MSPointerDown:3,MSPointerMove:3,MSPointerUp:3}),t.extend(t.ease={},{quadratic:{style:"cubic-bezier(0.25, 0.46, 0.45, 0.94)",fn:function(t){return t*(2-t)}},circular:{style:"cubic-bezier(0.1, 0.57, 0.1, 1)",fn:function(t){return n.sqrt(1- --t*t)}},back:{style:"cubic-bezier(0.175, 0.885, 0.32, 1.275)",fn:function(t){return(t-=1)*t*(5*t+4)+1}},bounce:{style:"",fn:function(t){return(t/=1)<1/2.75?7.5625*t*t:t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375}},elastic:{style:"",fn:function(t){return 0===t?0:1==t?1:.4*n.pow(2,-10*t)*n.sin((t-.055)*(2*n.PI)/.22)+1}}}),t.tap=function(t,e){var n=i.createEvent("Event");n.initEvent(e,!0,!0),n.pageX=t.pageX,n.pageY=t.pageY,t.target.dispatchEvent(n)},t.click=function(t){var e,n=t.target;/(SELECT|INPUT|TEXTAREA)/i.test(n.tagName)||((e=i.createEvent("MouseEvents")).initMouseEvent("click",!0,!0,t.view,1,n.screenX,n.screenY,n.clientX,n.clientY,t.ctrlKey,t.altKey,t.shiftKey,t.metaKey,0,null),e._constructed=!0,n.dispatchEvent(e))},t}();function r(t,n){for(var o in this.wrapper="string"==typeof t?i.querySelector(t):t,this.scroller=this.wrapper.children[0],this.scrollerStyle=this.scroller.style,this.options={resizeScrollbars:!0,mouseWheelSpeed:20,snapThreshold:.334,// INSERT POINT: OPTIONS
disablePointer:!s.hasPointer,disableTouch:s.hasPointer||!s.hasTouch,disableMouse:s.hasPointer||s.hasTouch,startX:0,startY:0,scrollY:!0,directionLockThreshold:5,momentum:!0,bounce:!0,bounceTime:600,bounceEasing:"",preventDefault:!0,preventDefaultException:{tagName:/^(INPUT|TEXTAREA|BUTTON|SELECT)$/},HWCompositing:!0,useTransition:!0,useTransform:!0,bindToWrapper:void 0===e.onmousedown},n)this.options[o]=n[o];// Normalize options
this.translateZ=this.options.HWCompositing&&s.hasPerspective?" translateZ(0)":"",this.options.useTransition=s.hasTransition&&this.options.useTransition,this.options.useTransform=s.hasTransform&&this.options.useTransform,this.options.eventPassthrough=!0===this.options.eventPassthrough?"vertical":this.options.eventPassthrough,this.options.preventDefault=!this.options.eventPassthrough&&this.options.preventDefault,// If you want eventPassthrough I have to lock one of the axes
this.options.scrollY="vertical"!=this.options.eventPassthrough&&this.options.scrollY,this.options.scrollX="horizontal"!=this.options.eventPassthrough&&this.options.scrollX,// With eventPassthrough we also need lockDirection mechanism
this.options.freeScroll=this.options.freeScroll&&!this.options.eventPassthrough,this.options.directionLockThreshold=this.options.eventPassthrough?0:this.options.directionLockThreshold,this.options.bounceEasing="string"==typeof this.options.bounceEasing?s.ease[this.options.bounceEasing]||s.ease.circular:this.options.bounceEasing,this.options.resizePolling=void 0===this.options.resizePolling?60:this.options.resizePolling,!0===this.options.tap&&(this.options.tap="tap"),"scale"==this.options.shrinkScrollbars&&(this.options.useTransition=!1),this.options.invertWheelDirection=this.options.invertWheelDirection?-1:1,// INSERT POINT: NORMALIZATION
// Some defaults
this.x=0,this.y=0,this.directionX=0,this.directionY=0,this._events={},// INSERT POINT: DEFAULTS
this._init(),this.refresh(),this.scrollTo(this.options.startX,this.options.startY),this.enable()}function a(t,e,n){var o=i.createElement("div"),s=i.createElement("div");return!0===n&&(o.style.cssText="position:absolute;z-index:9999",s.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);border-radius:3px"),s.className="iScrollIndicator","h"==t?(!0===n&&(o.style.cssText+=";height:7px;left:2px;right:2px;bottom:0",s.style.height="100%"),o.className="iScrollHorizontalScrollbar"):(!0===n&&(o.style.cssText+=";width:7px;bottom:2px;top:2px;right:1px",s.style.width="100%"),o.className="iScrollVerticalScrollbar"),o.style.cssText+=";overflow:hidden",e||(o.style.pointerEvents="none"),o.appendChild(s),o}function l(t,n){for(var r in this.wrapper="string"==typeof n.el?i.querySelector(n.el):n.el,this.wrapperStyle=this.wrapper.style,this.indicator=this.wrapper.children[0],this.indicatorStyle=this.indicator.style,this.scroller=t,this.options={listenX:!0,listenY:!0,interactive:!1,resize:!0,defaultScrollbars:!1,shrink:!1,fade:!1,speedRatioX:0,speedRatioY:0},n)this.options[r]=n[r];if(this.sizeRatioX=1,this.sizeRatioY=1,this.maxPosX=0,this.maxPosY=0,this.options.interactive&&(this.options.disableTouch||(s.addEvent(this.indicator,"touchstart",this),s.addEvent(e,"touchend",this)),this.options.disablePointer||(s.addEvent(this.indicator,s.prefixPointerEvent("pointerdown"),this),s.addEvent(e,s.prefixPointerEvent("pointerup"),this)),this.options.disableMouse||(s.addEvent(this.indicator,"mousedown",this),s.addEvent(e,"mouseup",this))),this.options.fade){this.wrapperStyle[s.style.transform]=this.scroller.translateZ;var a=s.style.transitionDuration;this.wrapperStyle[a]=s.isBadAndroid?"0.0001ms":"0ms";// remove 0.0001ms
var l=this;s.isBadAndroid&&o(function(){"0.0001ms"===l.wrapperStyle[a]&&(l.wrapperStyle[a]="0s")}),this.wrapperStyle.opacity="0"}}r.prototype={version:"5.2.0",_init:function(){this._initEvents(),(this.options.scrollbars||this.options.indicators)&&this._initIndicators(),this.options.mouseWheel&&this._initWheel(),this.options.snap&&this._initSnap(),this.options.keyBindings&&this._initKeys();// INSERT POINT: _init
},destroy:function(){this._initEvents(!0),clearTimeout(this.resizeTimeout),this.resizeTimeout=null,this._execEvent("destroy")},_transitionEnd:function(t){t.target==this.scroller&&this.isInTransition&&(this._transitionTime(),this.resetPosition(this.options.bounceTime)||(this.isInTransition=!1,this._execEvent("scrollEnd")))},_start:function(t){// React to left mouse button only
if((1==s.eventType[t.type]||0===(t.which?t.button:t.button<2?0:4==t.button?1:2))&&this.enabled&&(!this.initiated||s.eventType[t.type]===this.initiated)){!this.options.preventDefault||s.isBadAndroid||s.preventDefaultException(t.target,this.options.preventDefaultException)||t.preventDefault();var e,i=t.touches?t.touches[0]:t;this.initiated=s.eventType[t.type],this.moved=!1,this.distX=0,this.distY=0,this.directionX=0,this.directionY=0,this.directionLocked=0,this.startTime=s.getTime(),this.options.useTransition&&this.isInTransition?(this._transitionTime(),this.isInTransition=!1,e=this.getComputedPosition(),this._translate(n.round(e.x),n.round(e.y)),this._execEvent("scrollEnd")):!this.options.useTransition&&this.isAnimating&&(this.isAnimating=!1,this._execEvent("scrollEnd")),this.startX=this.x,this.startY=this.y,this.absStartX=this.x,this.absStartY=this.y,this.pointX=i.pageX,this.pointY=i.pageY,this._execEvent("beforeScrollStart")}},_move:function(t){if(this.enabled&&s.eventType[t.type]===this.initiated){this.options.preventDefault&&t.preventDefault();var e,i,o,r,a=t.touches?t.touches[0]:t,l=a.pageX-this.pointX,c=a.pageY-this.pointY,h=s.getTime();// We need to move at least 10 pixels for the scrolling to initiate
if(this.pointX=a.pageX,this.pointY=a.pageY,this.distX+=l,this.distY+=c,o=n.abs(this.distX),r=n.abs(this.distY),!(h-this.endTime>300)||!(o<10)||!(r<10)){if(this.directionLocked||this.options.freeScroll||(o>r+this.options.directionLockThreshold?this.directionLocked="h":r>=o+this.options.directionLockThreshold?this.directionLocked="v":this.directionLocked="n"),"h"==this.directionLocked){if("vertical"==this.options.eventPassthrough)t.preventDefault();else if("horizontal"==this.options.eventPassthrough){this.initiated=!1;return}c=0}else if("v"==this.directionLocked){if("horizontal"==this.options.eventPassthrough)t.preventDefault();else if("vertical"==this.options.eventPassthrough){this.initiated=!1;return}l=0}l=this.hasHorizontalScroll?l:0,c=this.hasVerticalScroll?c:0,e=this.x+l,i=this.y+c,(e>0||e<this.maxScrollX)&&(e=this.options.bounce?this.x+l/3:e>0?0:this.maxScrollX),(i>0||i<this.maxScrollY)&&(i=this.options.bounce?this.y+c/3:i>0?0:this.maxScrollY),this.directionX=l>0?-1:l<0?1:0,this.directionY=c>0?-1:c<0?1:0,this.moved||this._execEvent("scrollStart"),this.moved=!0,this._translate(e,i),h-this.startTime>300&&(this.startTime=h,this.startX=this.x,this.startY=this.y)}}/* REPLACE END: _move */},_end:function(t){if(this.enabled&&s.eventType[t.type]===this.initiated){this.options.preventDefault&&!s.preventDefaultException(t.target,this.options.preventDefaultException)&&t.preventDefault(),t.changedTouches&&t.changedTouches[0];var e,i,o=s.getTime()-this.startTime,r=n.round(this.x),a=n.round(this.y),l=n.abs(r-this.startX),c=n.abs(a-this.startY),h=0,u="";// reset if we are outside of the boundaries
if(this.isInTransition=0,this.initiated=0,this.endTime=s.getTime(),!this.resetPosition(this.options.bounceTime)){// we scrolled less than 10 pixels
if(this.scrollTo(r,a),!this.moved){this.options.tap&&s.tap(t,this.options.tap),this.options.click&&s.click(t),this._execEvent("scrollCancel");return}if(this._events.flick&&o<200&&l<100&&c<100){this._execEvent("flick");return}if(this.options.momentum&&o<300&&(e=this.hasHorizontalScroll?s.momentum(this.x,this.startX,o,this.maxScrollX,this.options.bounce?this.wrapperWidth:0,this.options.deceleration):{destination:r,duration:0},i=this.hasVerticalScroll?s.momentum(this.y,this.startY,o,this.maxScrollY,this.options.bounce?this.wrapperHeight:0,this.options.deceleration):{destination:a,duration:0},r=e.destination,a=i.destination,h=n.max(e.duration,i.duration),this.isInTransition=1),this.options.snap){var p=this._nearestSnap(r,a);this.currentPage=p,h=this.options.snapSpeed||n.max(n.max(n.min(n.abs(r-p.x),1e3),n.min(n.abs(a-p.y),1e3)),300),r=p.x,a=p.y,this.directionX=0,this.directionY=0,u=this.options.bounceEasing}// INSERT POINT: _end
if(r!=this.x||a!=this.y){(r>0||r<this.maxScrollX||a>0||a<this.maxScrollY)&&(u=s.ease.quadratic),this.scrollTo(r,a,h,u);return}this._execEvent("scrollEnd")}}},_resize:function(){var t=this;clearTimeout(this.resizeTimeout),this.resizeTimeout=setTimeout(function(){t.refresh()},this.options.resizePolling)},resetPosition:function(t){var e=this.x,i=this.y;return t=t||0,!this.hasHorizontalScroll||this.x>0?e=0:this.x<this.maxScrollX&&(e=this.maxScrollX),!this.hasVerticalScroll||this.y>0?i=0:this.y<this.maxScrollY&&(i=this.maxScrollY),(e!=this.x||i!=this.y)&&(this.scrollTo(e,i,t,this.options.bounceEasing),!0)},disable:function(){this.enabled=!1},enable:function(){this.enabled=!0},refresh:function(){this.wrapper.offsetHeight,this.wrapperWidth=this.wrapper.clientWidth,this.wrapperHeight=this.wrapper.clientHeight,/* REPLACE START: refresh */this.scrollerWidth=this.scroller.offsetWidth,this.scrollerHeight=this.scroller.offsetHeight,this.maxScrollX=this.wrapperWidth-this.scrollerWidth,this.maxScrollY=this.wrapperHeight-this.scrollerHeight,/* REPLACE END: refresh */this.hasHorizontalScroll=this.options.scrollX&&this.maxScrollX<0,this.hasVerticalScroll=this.options.scrollY&&this.maxScrollY<0,this.hasHorizontalScroll||(this.maxScrollX=0,this.scrollerWidth=this.wrapperWidth),this.hasVerticalScroll||(this.maxScrollY=0,this.scrollerHeight=this.wrapperHeight),this.endTime=0,this.directionX=0,this.directionY=0,this.wrapperOffset=s.offset(this.wrapper),this._execEvent("refresh"),this.resetPosition();// INSERT POINT: _refresh
},on:function(t,e){this._events[t]||(this._events[t]=[]),this._events[t].push(e)},off:function(t,e){if(this._events[t]){var i=this._events[t].indexOf(e);i>-1&&this._events[t].splice(i,1)}},_execEvent:function(t){if(this._events[t]){var e=0,i=this._events[t].length;if(i)for(;e<i;e++)this._events[t][e].apply(this,[].slice.call(arguments,1))}},scrollBy:function(t,e,i,n){t=this.x+t,e=this.y+e,i=i||0,this.scrollTo(t,e,i,n)},scrollTo:function(t,e,i,n){n=n||s.ease.circular,this.isInTransition=this.options.useTransition&&i>0;var o=this.options.useTransition&&n.style;!i||o?(o&&(this._transitionTimingFunction(n.style),this._transitionTime(i)),this._translate(t,e)):this._animate(t,e,i,n.fn)},scrollToElement:function(t,e,i,o,r){if(t=t.nodeType?t:this.scroller.querySelector(t)){var a=s.offset(t);a.left-=this.wrapperOffset.left,a.top-=this.wrapperOffset.top,!0===i&&(i=n.round(t.offsetWidth/2-this.wrapper.offsetWidth/2)),!0===o&&(o=n.round(t.offsetHeight/2-this.wrapper.offsetHeight/2)),a.left-=i||0,a.top-=o||0,a.left=a.left>0?0:a.left<this.maxScrollX?this.maxScrollX:a.left,a.top=a.top>0?0:a.top<this.maxScrollY?this.maxScrollY:a.top,e=null==e||"auto"===e?n.max(n.abs(this.x-a.left),n.abs(this.y-a.top)):e,this.scrollTo(a.left,a.top,e,r)}},_transitionTime:function(t){t=t||0;var e=s.style.transitionDuration;if(this.scrollerStyle[e]=t+"ms",!t&&s.isBadAndroid){this.scrollerStyle[e]="0.0001ms";// remove 0.0001ms
var i=this;o(function(){"0.0001ms"===i.scrollerStyle[e]&&(i.scrollerStyle[e]="0s")})}if(this.indicators)for(var n=this.indicators.length;n--;)this.indicators[n].transitionTime(t);// INSERT POINT: _transitionTime
},_transitionTimingFunction:function(t){if(this.scrollerStyle[s.style.transitionTimingFunction]=t,this.indicators)for(var e=this.indicators.length;e--;)this.indicators[e].transitionTimingFunction(t);// INSERT POINT: _transitionTimingFunction
},_translate:function(t,e){if(this.options.useTransform?/* REPLACE START: _translate */this.scrollerStyle[s.style.transform]="translate("+t+"px,"+e+"px)"+this.translateZ:(t=n.round(t),e=n.round(e),this.scrollerStyle.left=t+"px",this.scrollerStyle.top=e+"px"),this.x=t,this.y=e,this.indicators)for(var i=this.indicators.length;i--;)this.indicators[i].updatePosition();// INSERT POINT: _translate
},_initEvents:function(t){var i=t?s.removeEvent:s.addEvent,n=this.options.bindToWrapper?this.wrapper:e;i(e,"orientationchange",this),i(e,"resize",this),this.options.click&&i(this.wrapper,"click",this,!0),this.options.disableMouse||(i(this.wrapper,"mousedown",this),i(n,"mousemove",this),i(n,"mousecancel",this),i(n,"mouseup",this)),s.hasPointer&&!this.options.disablePointer&&(i(this.wrapper,s.prefixPointerEvent("pointerdown"),this),i(n,s.prefixPointerEvent("pointermove"),this),i(n,s.prefixPointerEvent("pointercancel"),this),i(n,s.prefixPointerEvent("pointerup"),this)),s.hasTouch&&!this.options.disableTouch&&(i(this.wrapper,"touchstart",this),i(n,"touchmove",this),i(n,"touchcancel",this),i(n,"touchend",this)),i(this.scroller,"transitionend",this),i(this.scroller,"webkitTransitionEnd",this),i(this.scroller,"oTransitionEnd",this),i(this.scroller,"MSTransitionEnd",this)},getComputedPosition:function(){var t,i,n=e.getComputedStyle(this.scroller,null);return this.options.useTransform?(t=+((n=n[s.style.transform].split(")")[0].split(", "))[12]||n[4]),i=+(n[13]||n[5])):(t=+n.left.replace(/[^-\d.]/g,""),i=+n.top.replace(/[^-\d.]/g,"")),{x:t,y:i}},_initIndicators:function(){var t,e=this.options.interactiveScrollbars,i="string"!=typeof this.options.scrollbars,n=[],o=this;this.indicators=[],this.options.scrollbars&&(this.options.scrollY&&(t={el:a("v",e,this.options.scrollbars),interactive:e,defaultScrollbars:!0,customStyle:i,resize:this.options.resizeScrollbars,shrink:this.options.shrinkScrollbars,fade:this.options.fadeScrollbars,listenX:!1},this.wrapper.appendChild(t.el),n.push(t)),this.options.scrollX&&(t={el:a("h",e,this.options.scrollbars),interactive:e,defaultScrollbars:!0,customStyle:i,resize:this.options.resizeScrollbars,shrink:this.options.shrinkScrollbars,fade:this.options.fadeScrollbars,listenY:!1},this.wrapper.appendChild(t.el),n.push(t))),this.options.indicators&&(n=n.concat(this.options.indicators));for(var s=n.length;s--;)this.indicators.push(new l(this,n[s]));// TODO: check if we can use array.map (wide compatibility and performance issues)
function r(t){if(o.indicators)for(var e=o.indicators.length;e--;)t.call(o.indicators[e])}this.options.fadeScrollbars&&(this.on("scrollEnd",function(){r(function(){this.fade()})}),this.on("scrollCancel",function(){r(function(){this.fade()})}),this.on("scrollStart",function(){r(function(){this.fade(1)})}),this.on("beforeScrollStart",function(){r(function(){this.fade(1,!0)})})),this.on("refresh",function(){r(function(){this.refresh()})}),this.on("destroy",function(){r(function(){this.destroy()}),delete this.indicators})},_initWheel:function(){s.addEvent(this.wrapper,"wheel",this),s.addEvent(this.wrapper,"mousewheel",this),s.addEvent(this.wrapper,"DOMMouseScroll",this),this.on("destroy",function(){clearTimeout(this.wheelTimeout),this.wheelTimeout=null,s.removeEvent(this.wrapper,"wheel",this),s.removeEvent(this.wrapper,"mousewheel",this),s.removeEvent(this.wrapper,"DOMMouseScroll",this)})},_wheel:function(t){if(this.enabled){t.preventDefault();var e,i,o,s,r=this;if(void 0===this.wheelTimeout&&r._execEvent("scrollStart"),// Execute the scrollEnd event after 400ms the wheel stopped scrolling
clearTimeout(this.wheelTimeout),this.wheelTimeout=setTimeout(function(){r.options.snap||r._execEvent("scrollEnd"),r.wheelTimeout=void 0},400),"deltaX"in t)1===t.deltaMode?(e=-t.deltaX*this.options.mouseWheelSpeed,i=-t.deltaY*this.options.mouseWheelSpeed):(e=-t.deltaX,i=-t.deltaY);else if("wheelDeltaX"in t)e=t.wheelDeltaX/120*this.options.mouseWheelSpeed,i=t.wheelDeltaY/120*this.options.mouseWheelSpeed;else if("wheelDelta"in t)e=i=t.wheelDelta/120*this.options.mouseWheelSpeed;else{if(!("detail"in t))return;e=i=-t.detail/3*this.options.mouseWheelSpeed}if(e*=this.options.invertWheelDirection,i*=this.options.invertWheelDirection,this.hasVerticalScroll||(e=i,i=0),this.options.snap){o=this.currentPage.pageX,s=this.currentPage.pageY,e>0?o--:e<0&&o++,i>0?s--:i<0&&s++,this.goToPage(o,s);return}o=this.x+n.round(this.hasHorizontalScroll?e:0),s=this.y+n.round(this.hasVerticalScroll?i:0),this.directionX=e>0?-1:e<0?1:0,this.directionY=i>0?-1:i<0?1:0,o>0?o=0:o<this.maxScrollX&&(o=this.maxScrollX),s>0?s=0:s<this.maxScrollY&&(s=this.maxScrollY),this.scrollTo(o,s,0)}// INSERT POINT: _wheel
},_initSnap:function(){this.currentPage={},"string"==typeof this.options.snap&&(this.options.snap=this.scroller.querySelectorAll(this.options.snap)),this.on("refresh",function(){var t,e,i,o,s,r,a=0,l=0,c=0,h=this.options.snapStepX||this.wrapperWidth,u=this.options.snapStepY||this.wrapperHeight;if(this.pages=[],this.wrapperWidth&&this.wrapperHeight&&this.scrollerWidth&&this.scrollerHeight){if(!0===this.options.snap)for(i=n.round(h/2),o=n.round(u/2);c>-this.scrollerWidth;){for(this.pages[a]=[],t=0,s=0;s>-this.scrollerHeight;)this.pages[a][t]={x:n.max(c,this.maxScrollX),y:n.max(s,this.maxScrollY),width:h,height:u,cx:c-i,cy:s-o},s-=u,t++;c-=h,a++}else for(t=(r=this.options.snap).length,e=-1;a<t;a++)(0===a||r[a].offsetLeft<=r[a-1].offsetLeft)&&(l=0,e++),this.pages[l]||(this.pages[l]=[]),c=n.max(-r[a].offsetLeft,this.maxScrollX),s=n.max(-r[a].offsetTop,this.maxScrollY),i=c-n.round(r[a].offsetWidth/2),o=s-n.round(r[a].offsetHeight/2),this.pages[l][e]={x:c,y:s,width:r[a].offsetWidth,height:r[a].offsetHeight,cx:i,cy:o},c>this.maxScrollX&&l++;this.goToPage(this.currentPage.pageX||0,this.currentPage.pageY||0,0),this.options.snapThreshold%1==0?(this.snapThresholdX=this.options.snapThreshold,this.snapThresholdY=this.options.snapThreshold):(this.snapThresholdX=n.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].width*this.options.snapThreshold),this.snapThresholdY=n.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].height*this.options.snapThreshold))}}),this.on("flick",function(){var t=this.options.snapSpeed||n.max(n.max(n.min(n.abs(this.x-this.startX),1e3),n.min(n.abs(this.y-this.startY),1e3)),300);this.goToPage(this.currentPage.pageX+this.directionX,this.currentPage.pageY+this.directionY,t)})},_nearestSnap:function(t,e){if(!this.pages.length)return{x:0,y:0,pageX:0,pageY:0};var i=0,o=this.pages.length,s=0;// Check if we exceeded the snap threshold
if(n.abs(t-this.absStartX)<this.snapThresholdX&&n.abs(e-this.absStartY)<this.snapThresholdY)return this.currentPage;for(t>0?t=0:t<this.maxScrollX&&(t=this.maxScrollX),e>0?e=0:e<this.maxScrollY&&(e=this.maxScrollY);i<o;i++)if(t>=this.pages[i][0].cx){t=this.pages[i][0].x;break}for(o=this.pages[i].length;s<o;s++)if(e>=this.pages[0][s].cy){e=this.pages[0][s].y;break}return i==this.currentPage.pageX&&((i+=this.directionX)<0?i=0:i>=this.pages.length&&(i=this.pages.length-1),t=this.pages[i][0].x),s==this.currentPage.pageY&&((s+=this.directionY)<0?s=0:s>=this.pages[0].length&&(s=this.pages[0].length-1),e=this.pages[0][s].y),{x:t,y:e,pageX:i,pageY:s}},goToPage:function(t,e,i,o){o=o||this.options.bounceEasing,t>=this.pages.length?t=this.pages.length-1:t<0&&(t=0),e>=this.pages[t].length?e=this.pages[t].length-1:e<0&&(e=0);var s=this.pages[t][e].x,r=this.pages[t][e].y;i=void 0===i?this.options.snapSpeed||n.max(n.max(n.min(n.abs(s-this.x),1e3),n.min(n.abs(r-this.y),1e3)),300):i,this.currentPage={x:s,y:r,pageX:t,pageY:e},this.scrollTo(s,r,i,o)},next:function(t,e){var i=this.currentPage.pageX,n=this.currentPage.pageY;++i>=this.pages.length&&this.hasVerticalScroll&&(i=0,n++),this.goToPage(i,n,t,e)},prev:function(t,e){var i=this.currentPage.pageX,n=this.currentPage.pageY;--i<0&&this.hasVerticalScroll&&(i=0,n--),this.goToPage(i,n,t,e)},_initKeys:function(t){// default key bindings
var i,n={pageUp:33,pageDown:34,end:35,home:36,left:37,up:38,right:39,down:40};// if you give me characters I give you keycode
if("object"==typeof this.options.keyBindings)for(i in this.options.keyBindings)"string"==typeof this.options.keyBindings[i]&&(this.options.keyBindings[i]=this.options.keyBindings[i].toUpperCase().charCodeAt(0));else this.options.keyBindings={};for(i in n)this.options.keyBindings[i]=this.options.keyBindings[i]||n[i];s.addEvent(e,"keydown",this),this.on("destroy",function(){s.removeEvent(e,"keydown",this)})},_key:function(t){if(this.enabled){var e,i=this.options.snap,o=i?this.currentPage.pageX:this.x,r=i?this.currentPage.pageY:this.y,a=s.getTime(),l=this.keyTime||0;switch(this.options.useTransition&&this.isInTransition&&(e=this.getComputedPosition(),this._translate(n.round(e.x),n.round(e.y)),this.isInTransition=!1),this.keyAcceleration=a-l<200?n.min(this.keyAcceleration+.25,50):0,t.keyCode){case this.options.keyBindings.pageUp:this.hasHorizontalScroll&&!this.hasVerticalScroll?o+=i?1:this.wrapperWidth:r+=i?1:this.wrapperHeight;break;case this.options.keyBindings.pageDown:this.hasHorizontalScroll&&!this.hasVerticalScroll?o-=i?1:this.wrapperWidth:r-=i?1:this.wrapperHeight;break;case this.options.keyBindings.end:o=i?this.pages.length-1:this.maxScrollX,r=i?this.pages[0].length-1:this.maxScrollY;break;case this.options.keyBindings.home:o=0,r=0;break;case this.options.keyBindings.left:o+=i?-1:5+this.keyAcceleration>>0;break;case this.options.keyBindings.up:r+=i?1:5+this.keyAcceleration>>0;break;case this.options.keyBindings.right:o-=i?-1:5+this.keyAcceleration>>0;break;case this.options.keyBindings.down:r-=i?1:5+this.keyAcceleration>>0;break;default:return}if(i){this.goToPage(o,r);return}o>0?(o=0,this.keyAcceleration=0):o<this.maxScrollX&&(o=this.maxScrollX,this.keyAcceleration=0),r>0?(r=0,this.keyAcceleration=0):r<this.maxScrollY&&(r=this.maxScrollY,this.keyAcceleration=0),this.scrollTo(o,r,0),this.keyTime=a}},_animate:function(t,e,i,n){var r=this,a=this.x,l=this.y,c=s.getTime(),h=c+i;this.isAnimating=!0,function u(){var p,d,f,m=s.getTime();if(m>=h){r.isAnimating=!1,r._translate(t,e),r.resetPosition(r.options.bounceTime)||r._execEvent("scrollEnd");return}p=(t-a)*(f=n(m=(m-c)/i))+a,d=(e-l)*f+l,r._translate(p,d),r.isAnimating&&o(u)}()},handleEvent:function(t){switch(t.type){case"touchstart":case"pointerdown":case"MSPointerDown":case"mousedown":this._start(t);break;case"touchmove":case"pointermove":case"MSPointerMove":case"mousemove":this._move(t);break;case"touchend":case"pointerup":case"MSPointerUp":case"mouseup":case"touchcancel":case"pointercancel":case"MSPointerCancel":case"mousecancel":this._end(t);break;case"orientationchange":case"resize":this._resize();break;case"transitionend":case"webkitTransitionEnd":case"oTransitionEnd":case"MSTransitionEnd":this._transitionEnd(t);break;case"wheel":case"DOMMouseScroll":case"mousewheel":this._wheel(t);break;case"keydown":this._key(t);break;case"click":this.enabled&&!t._constructed&&(t.preventDefault(),t.stopPropagation())}}},l.prototype={handleEvent:function(t){switch(t.type){case"touchstart":case"pointerdown":case"MSPointerDown":case"mousedown":this._start(t);break;case"touchmove":case"pointermove":case"MSPointerMove":case"mousemove":this._move(t);break;case"touchend":case"pointerup":case"MSPointerUp":case"mouseup":case"touchcancel":case"pointercancel":case"MSPointerCancel":case"mousecancel":this._end(t)}},destroy:function(){this.options.fadeScrollbars&&(clearTimeout(this.fadeTimeout),this.fadeTimeout=null),this.options.interactive&&(s.removeEvent(this.indicator,"touchstart",this),s.removeEvent(this.indicator,s.prefixPointerEvent("pointerdown"),this),s.removeEvent(this.indicator,"mousedown",this),s.removeEvent(e,"touchmove",this),s.removeEvent(e,s.prefixPointerEvent("pointermove"),this),s.removeEvent(e,"mousemove",this),s.removeEvent(e,"touchend",this),s.removeEvent(e,s.prefixPointerEvent("pointerup"),this),s.removeEvent(e,"mouseup",this)),this.options.defaultScrollbars&&this.wrapper.parentNode.removeChild(this.wrapper)},_start:function(t){var i=t.touches?t.touches[0]:t;t.preventDefault(),t.stopPropagation(),this.transitionTime(),this.initiated=!0,this.moved=!1,this.lastPointX=i.pageX,this.lastPointY=i.pageY,this.startTime=s.getTime(),this.options.disableTouch||s.addEvent(e,"touchmove",this),this.options.disablePointer||s.addEvent(e,s.prefixPointerEvent("pointermove"),this),this.options.disableMouse||s.addEvent(e,"mousemove",this),this.scroller._execEvent("beforeScrollStart")},_move:function(t){var e,i,n,o,r=t.touches?t.touches[0]:t;s.getTime(),this.moved||this.scroller._execEvent("scrollStart"),this.moved=!0,e=r.pageX-this.lastPointX,this.lastPointX=r.pageX,i=r.pageY-this.lastPointY,this.lastPointY=r.pageY,n=this.x+e,o=this.y+i,this._pos(n,o),// INSERT POINT: indicator._move
t.preventDefault(),t.stopPropagation()},_end:function(t){if(this.initiated){if(this.initiated=!1,t.preventDefault(),t.stopPropagation(),s.removeEvent(e,"touchmove",this),s.removeEvent(e,s.prefixPointerEvent("pointermove"),this),s.removeEvent(e,"mousemove",this),this.scroller.options.snap){var i=this.scroller._nearestSnap(this.scroller.x,this.scroller.y),o=this.options.snapSpeed||n.max(n.max(n.min(n.abs(this.scroller.x-i.x),1e3),n.min(n.abs(this.scroller.y-i.y),1e3)),300);(this.scroller.x!=i.x||this.scroller.y!=i.y)&&(this.scroller.directionX=0,this.scroller.directionY=0,this.scroller.currentPage=i,this.scroller.scrollTo(i.x,i.y,o,this.scroller.options.bounceEasing))}this.moved&&this.scroller._execEvent("scrollEnd")}},transitionTime:function(t){t=t||0;var e=s.style.transitionDuration;if(this.indicatorStyle[e]=t+"ms",!t&&s.isBadAndroid){this.indicatorStyle[e]="0.0001ms";// remove 0.0001ms
var i=this;o(function(){"0.0001ms"===i.indicatorStyle[e]&&(i.indicatorStyle[e]="0s")})}},transitionTimingFunction:function(t){this.indicatorStyle[s.style.transitionTimingFunction]=t},refresh:function(){this.transitionTime(),this.options.listenX&&!this.options.listenY?this.indicatorStyle.display=this.scroller.hasHorizontalScroll?"block":"none":this.options.listenY&&!this.options.listenX?this.indicatorStyle.display=this.scroller.hasVerticalScroll?"block":"none":this.indicatorStyle.display=this.scroller.hasHorizontalScroll||this.scroller.hasVerticalScroll?"block":"none",this.scroller.hasHorizontalScroll&&this.scroller.hasVerticalScroll?(s.addClass(this.wrapper,"iScrollBothScrollbars"),s.removeClass(this.wrapper,"iScrollLoneScrollbar"),this.options.defaultScrollbars&&this.options.customStyle&&(this.options.listenX?this.wrapper.style.right="8px":this.wrapper.style.bottom="8px")):(s.removeClass(this.wrapper,"iScrollBothScrollbars"),s.addClass(this.wrapper,"iScrollLoneScrollbar"),this.options.defaultScrollbars&&this.options.customStyle&&(this.options.listenX?this.wrapper.style.right="2px":this.wrapper.style.bottom="2px")),this.wrapper.offsetHeight,this.options.listenX&&(this.wrapperWidth=this.wrapper.clientWidth,this.options.resize?(this.indicatorWidth=n.max(n.round(this.wrapperWidth*this.wrapperWidth/(this.scroller.scrollerWidth||this.wrapperWidth||1)),8),this.indicatorStyle.width=this.indicatorWidth+"px"):this.indicatorWidth=this.indicator.clientWidth,this.maxPosX=this.wrapperWidth-this.indicatorWidth,"clip"==this.options.shrink?(this.minBoundaryX=-this.indicatorWidth+8,this.maxBoundaryX=this.wrapperWidth-8):(this.minBoundaryX=0,this.maxBoundaryX=this.maxPosX),this.sizeRatioX=this.options.speedRatioX||this.scroller.maxScrollX&&this.maxPosX/this.scroller.maxScrollX),this.options.listenY&&(this.wrapperHeight=this.wrapper.clientHeight,this.options.resize?(this.indicatorHeight=n.max(n.round(this.wrapperHeight*this.wrapperHeight/(this.scroller.scrollerHeight||this.wrapperHeight||1)),8),this.indicatorStyle.height=this.indicatorHeight+"px"):this.indicatorHeight=this.indicator.clientHeight,this.maxPosY=this.wrapperHeight-this.indicatorHeight,"clip"==this.options.shrink?(this.minBoundaryY=-this.indicatorHeight+8,this.maxBoundaryY=this.wrapperHeight-8):(this.minBoundaryY=0,this.maxBoundaryY=this.maxPosY),this.maxPosY=this.wrapperHeight-this.indicatorHeight,this.sizeRatioY=this.options.speedRatioY||this.scroller.maxScrollY&&this.maxPosY/this.scroller.maxScrollY),this.updatePosition()},updatePosition:function(){var t=this.options.listenX&&n.round(this.sizeRatioX*this.scroller.x)||0,e=this.options.listenY&&n.round(this.sizeRatioY*this.scroller.y)||0;this.options.ignoreBoundaries||(t<this.minBoundaryX?("scale"==this.options.shrink&&(this.width=n.max(this.indicatorWidth+t,8),this.indicatorStyle.width=this.width+"px"),t=this.minBoundaryX):t>this.maxBoundaryX?"scale"==this.options.shrink?(this.width=n.max(this.indicatorWidth-(t-this.maxPosX),8),this.indicatorStyle.width=this.width+"px",t=this.maxPosX+this.indicatorWidth-this.width):t=this.maxBoundaryX:"scale"==this.options.shrink&&this.width!=this.indicatorWidth&&(this.width=this.indicatorWidth,this.indicatorStyle.width=this.width+"px"),e<this.minBoundaryY?("scale"==this.options.shrink&&(this.height=n.max(this.indicatorHeight+3*e,8),this.indicatorStyle.height=this.height+"px"),e=this.minBoundaryY):e>this.maxBoundaryY?"scale"==this.options.shrink?(this.height=n.max(this.indicatorHeight-(e-this.maxPosY)*3,8),this.indicatorStyle.height=this.height+"px",e=this.maxPosY+this.indicatorHeight-this.height):e=this.maxBoundaryY:"scale"!=this.options.shrink||this.height==this.indicatorHeight||(this.height=this.indicatorHeight,this.indicatorStyle.height=this.height+"px")),this.x=t,this.y=e,this.scroller.options.useTransform?this.indicatorStyle[s.style.transform]="translate("+t+"px,"+e+"px)"+this.scroller.translateZ:(this.indicatorStyle.left=t+"px",this.indicatorStyle.top=e+"px")},_pos:function(t,e){t<0?t=0:t>this.maxPosX&&(t=this.maxPosX),e<0?e=0:e>this.maxPosY&&(e=this.maxPosY),t=this.options.listenX?n.round(t/this.sizeRatioX):this.scroller.x,e=this.options.listenY?n.round(e/this.sizeRatioY):this.scroller.y,this.scroller.scrollTo(t,e)},fade:function(t,e){if(!e||this.visible){clearTimeout(this.fadeTimeout),this.fadeTimeout=null;var i=t?250:500,n=t?0:300;t=t?"1":"0",this.wrapperStyle[s.style.transitionDuration]=i+"ms",this.fadeTimeout=setTimeout((function(t){this.wrapperStyle.opacity=t,this.visible=+t}).bind(this,t),n)}}},r.utils=s,t.exports?t.exports=r:"function"==typeof define&&define.amd?define(function(){return r}):e.IScroll=r}(window,document,Math)});var v=g("fa1Gd"),y={en:{START:"Start:","pre-sale":"25.09.2023 pre-sale","от 8 до 14 месяцев":"8 to 14 months","First payment":"First payment:","от $5000":"from $5000","about project":"about project",PROJECT_DESCRIPTION:"Oasis by PARQ is a modern complex with the best infrastructure in Bali, located on 37 hectares, which will include 560 infrastructure facilities, namely:",villas:"villas",apartments:"apartments","guest houses":"guest houses",///////////////////////////////////////////
"guest house":"guest house","Payment is made in cryptocurrency":"*Payment is made in cryptocurrency","Area:":"Area:",Area:"Area","1-3 floor of 3":"1-3 floor of 3","Ceiling height":"Ceiling height:",Laundry:"Laundry",Garden:"Garden",Description:"Description:",GUEST_HOUSE_DESCRIPTION:"The ideal small-sized housing format for tourists. The finish of the facade contrasts beautifully with the surrounding greenery. the surrounding greenery.","Investment scheme":"Investment scheme","Minimum entry from $5000 - 1/7th of the cost of a guest house":"Minimum entry from $5000 - 1/7th of the cost of a guest house","1st floor":"1st floor","Private pool":"Private pool","Private entrance":"Private entrance","Minimum admission is 10% of the value of the dwelling":"Minimum admission is 10% of the value of the dwelling","Plot area":"Plot area",VILLA_150_DESCRIPTION:"Elegant medium-sized housing format, where the facade finishes contrast spectacularly with the surrounding greenery.",villa:"villa",VILLA_100_DESCRIPTION:"Elegant medium-sized housing format, where the facade finishes contrast spectacularly with the surrounding greenery.","1 living room":"1 living room","2 bedrooms":"2 bedrooms","Contact Us":"Contact Us",Phone:"Phone",Email:"Email","6-8 p.":"6-8 p.",Placement:"Placement","3 bedrooms":"3 bedrooms",VILLA_200_DESCRIPTION:"Elegant medium-sized housing format, where the facade finishes contrast spectacularly with the surrounding greenery.","3 bedrooms and cabinet":"3 bedrooms and cabinet","invest and profit":"invest and profit","passive income":"passive income","annual passive income from long-term renting out":"annual passive income from long-term renting out","annual passive income from daily rentals":"annual passive income from daily rentals","expected price increase after completion of construction":"expected price increase after completion of construction","Why choose Bali for property investment":"Why choose Bali for property investment","Residential complex":"Residential complex","Real estate":"Real estate",Price:"Price",Apartments:"Apartments",bedroom:"bedroom",bedrooms:"bedrooms",Villa:"Villa",Layouts:"Layouts:",Terrace:"Terrace","Installment plan":"Installment plan:",GUEST_HOUSE_INVESTMENT_DESCRIPTION:"Minimum entry from $5000 - 1/7th of the cost of a guest house",APARTMENTS_INVESTMENT_DESCRIPTION:"Minimum admission is 10% of the value of the dwelling",VILLA_INVESTMENT_DESCRIPTION:"Minimum admission is 10% of the value of the dwelling","ROI:":"ROI:",ABOUT_ESTATE_GUEST_HOUSES:"guest houses"},pl:{START:"Start presale:","pre-sale":"25.09.2023","от 8 до 14 месяцев":"od 8 do 14 miesięcy","First payment":"Inwestycja minimalna:","от $5000":"od $5000","about project":"O projekcie",PROJECT_DESCRIPTION:"Oasis by PARQ to najnowocześniejszy projekt z najlepszą infrastrukturą na Bali, ulokowany na 37 hektarach, kt\xf3ry obejmie 560 obiekt\xf3w infrastrukturalnych, a dokładniej:",villas:"wille",apartments:"apartamenty","guest houses":"domki gościnne","guest house":"dom gościnny","Payment is made in cryptocurrency":"*Płatność jest dokonywana w kryptowalucie","Area:":"Powierzchnia:",Area:"Powierzchnia","1-3 floor of 3":"1 piętro z 3","Ceiling height":"Wysokość sufitu:",Laundry:"Pralnia",Garden:"Ogr\xf3d",Description:"Opis:",GUEST_HOUSE_DESCRIPTION:"Idealny format zakwaterowania na małą skalę dla turyst\xf3w. Wykończenia elewacji wyglądają spektakularnie w kontraście z otaczającą zielenią.","Investment scheme":"Program inwestycyjny","Minimum entry from $5000 - 1/7th of the cost of a guest house":"Minimalna wpłata od $5000 - 1/7 kosztu domu gościnnego","1st floor":"1 piętro","Private pool":"Prywatny basen","Private entrance":"Oddzielne wejście","Minimum admission is 10% of the value of the dwelling":"Minimalna wpłata wynosi 10% wartości mieszkania","Plot area":"Powierzchnia działki",VILLA_150_DESCRIPTION:"Elegancki średni format mieszkania, gdzie wykończenie elewacji imponująco kontrastuje z otaczającą zielenią.",villa:"willa",VILLA_100_DESCRIPTION:"Elegancki średni format mieszkania, gdzie wykończenie elewacji imponująco kontrastuje z otaczającą zielenią.","1 living room":"1 salon","2 bedrooms":"2 sypialnie","Contact Us":"Skontaktuj się z nami",Phone:"Telefon",Email:"E-mail","6-8 p.":"6-8 os\xf3b",Placement:"Umieszczenie","3 bedrooms":"3 sypialnie",VILLA_200_DESCRIPTION:"Elegancki średni format mieszkania, gdzie wykończenie elewacji imponująco kontrastuje z otaczającą zielenią.","3 bedrooms and cabinet":"3 sypialnie i gabinet","invest and profit":"Inwestuj i zyskuj","passive income":"Doch\xf3d pasywny","annual passive income from long-term renting out":"Roczny doch\xf3d pasywny z wynajmu długoterminowego","annual passive income from daily rentals":"Roczny doch\xf3d pasywny z wynajmu kr\xf3tkoterminowego","expected price increase after completion of construction":"Oczekiwany wzrost ceny po zakończeniu budowy","Why choose Bali for property investment":"Dlaczego wybrać Bali na inwestycję w nieruchomości","Residential complex":"Kompleks mieszkalny","Real estate":"Nieruchomość",Price:"Cena",Apartments:"Apartamenty",bedroom:"sypialnia",bedrooms:"sypialnie",Villa:"Willa",Layouts:"Układy:",Terrace:"Taras","Installment plan":"Okres trwania budowy:",GUEST_HOUSE_INVESTMENT_DESCRIPTION:"Minimalna wpłata od $5000 - 1/7 część domu gościnnego",APARTMENTS_INVESTMENT_DESCRIPTION:"Minimalna wpłata wynosi 10% wartości mieszkania",VILLA_INVESTMENT_DESCRIPTION:"Minimalna wpłata wynosi 10% wartości mieszkania","ROI:":"Roczna rentowność:",ABOUT_ESTATE_GUEST_HOUSES:"pokoj\xf3w hotelowych(Dom gościnny)","2nd floor":"2 piętro","2nd floor of 3":"2 piętro z 3",apartment:"apartamenty","3rd floor":"3 piętro"},de:{START:"Anfang:","pre-sale":"Vorverkauf ab 25.09.2023","от 8 до 14 месяцев":"von 8 bis 14 Monaten","First payment":"Erste Zahlung:","от $5000":"ab $5000","about project":"\xdcber das Projekt",PROJECT_DESCRIPTION:"Oasis by PARQ ist eine moderne Anlage mit bester Infrastruktur auf Bali, die auf 37 Hektar Fl\xe4che liegt und 560 Infrastruktureinrichtungen umfassen wird, n\xe4mlich:",villas:"Villen",apartments:"Apartments","guest houses":"G\xe4steh\xe4user","guest house":"G\xe4stehaus","Payment is made in cryptocurrency":"*Zahlung erfolgt in Kryptow\xe4hrung","Area:":"Fl\xe4che:",Area:"Fl\xe4che","1-3 floor of 3":"1-3 Stock von 3","Ceiling height":"Deckenh\xf6he:",Laundry:"W\xe4scherei",Garden:"Garten",Description:"Beschreibung:",GUEST_HOUSE_DESCRIPTION:"Das ideale kleine Wohnformat f\xfcr Touristen. Die Fassadenveredelung kontrastiert wundersch\xf6n mit der umgebenden Gr\xfcnfl\xe4che.","Investment scheme":"Investitionsschema","Minimum entry from $5000 - 1/7th of the cost of a guest house":"Mindesteinstieg ab $5000 - 1/7 der Kosten f\xfcr ein G\xe4stehaus","1st floor":"1 Stock","Private pool":"Privater Pool","Private entrance":"Privater Eingang","Minimum admission is 10% of the value of the dwelling":"Mindestzulassung betr\xe4gt 10% des Wertes der Wohnung","Plot area":"Grundst\xfccksfl\xe4che",VILLA_150_DESCRIPTION:"Elegantes mittelgro\xdfes Wohnformat, bei dem die Fassadenveredelung spektakul\xe4r mit der umgebenden Gr\xfcnfl\xe4che kontrastiert.",villa:"Villa",VILLA_100_DESCRIPTION:"Elegantes mittelgro\xdfes Wohnformat, bei dem die Fassadenveredelung spektakul\xe4r mit der umgebenden Gr\xfcnfl\xe4che kontrastiert.","1 living room":"1 Wohnzimmer","2 bedrooms":"2 Schlafzimmer","Contact Us":"Kontaktiere uns",Phone:"Telefon",Email:"E-Mail","6-8 p.":"6-8 Stunden",Placement:"Platzierung","3 bedrooms":"3 Schlafzimmer",VILLA_200_DESCRIPTION:"Elegantes mittelgro\xdfes Wohnformat, bei dem die Fassadenveredelung spektakul\xe4r mit der umgebenden Gr\xfcnfl\xe4che kontrastiert.","3 bedrooms and cabinet":"3 Schlafzimmer und Kabinett","invest and profit":"Investieren und profitieren","passive income":"Passives Einkommen","annual passive income from long-term renting out":"J\xe4hrliches passives Einkommen aus langfristiger Vermietung","annual passive income from daily rentals":"J\xe4hrliches passives Einkommen aus t\xe4glicher Vermietung","expected price increase after completion of construction":"Erwartete Preissteigerung nach Fertigstellung des Baus","Why choose Bali for property investment":"Warum Bali f\xfcr Immobilieninvestitionen w\xe4hlen","Residential complex":"Wohnanlage","Real estate":"Immobilien",Price:"Preis",Apartments:"Wohnungen",bedroom:"Schlafzimmer",bedrooms:"Schlafzimmer",Villa:"Villa",Layouts:"Layouts:",Terrace:"Terrasse","Installment plan":"Ratenzahlungsplan:",GUEST_HOUSE_INVESTMENT_DESCRIPTION:"Mindesteinstieg ab $5000 - 1/7 der Kosten f\xfcr ein G\xe4stehaus",APARTMENTS_INVESTMENT_DESCRIPTION:"Die Mindestaufnahme betr\xe4gt 10 % des Wertes der Wohnung",VILLA_INVESTMENT_DESCRIPTION:"Die Mindestaufnahme betr\xe4gt 10 % des Wertes der Wohnung","ROI:":"ROI:",ABOUT_ESTATE_GUEST_HOUSES:"g\xe4steh\xe4user"},it:{START:"Inizio:","pre-sale":"pre-vendita dal 25.09.2023","от 8 до 14 месяцев":"da 8 a 14 mesi","First payment":"A partire da:","от $5000":"$5000","about project":"informazioni sul progetto",PROJECT_DESCRIPTION:"Oasis by PARQ \xe8 un complesso moderno con la migliore infrastruttura a Bali, situato su 37 ettari, che includer\xe0 560 strutture immobiliari, precisamente:",villas:"ville",apartments:"appartamenti","guest houses":"guest houses","guest house":"guest house","Payment is made in cryptocurrency":"*Il pagamento avviene in criptovaluta","Area:":"Superficie:",Area:"Superficie","1-3 floor of 3":"1-3 piano di 3","Ceiling height":"Altezza del soffitto:",Laundry:"Lavanderia",Garden:"Giardino",Description:"Descrizione:",GUEST_HOUSE_DESCRIPTION:"Il formato di alloggio ideale per i turisti. La finitura della facciata contrasta splendidamente con la vegetazione circostante.","Investment scheme":"Schema di investimento","Minimum entry from $5000 - 1/7th of the cost of a guest house":"Ingresso minimo a partire da 5000$ - 1/7 del costo di una Guest House","1st floor":"1 piano","Private pool":"Piscina privata","Private entrance":"Ingresso privato","Minimum admission is 10% of the value of the dwelling":"Ingresso minimo \xe8 il 10% del costo di un Appartamento","Plot area":"Superficie del terreno",VILLA_150_DESCRIPTION:"Elegante formato di alloggio di medie dimensioni, dove la finitura della facciata contrasta spettacolarmente con la vegetazione circostante.",villa:"villa",VILLA_100_DESCRIPTION:"Elegante formato di alloggio di medie dimensioni, dove la finitura della facciata contrasta spettacolarmente con la vegetazione circostante.","1 living room":"1 soggiorno","2 bedrooms":"2 camere da letto","Contact Us":"Contattaci",Phone:"Telefono",Email:"E-mail","6-8 p.":"6-8 persone",Placement:"Collocamento","3 bedrooms":"3 camere da letto",VILLA_200_DESCRIPTION:"Elegante formato di alloggio di medie dimensioni, dove la finitura della facciata contrasta spettacolarmente con la vegetazione circostante.","3 bedrooms and cabinet":"3 camere da letto e armadio","invest and profit":"Reddito passivo","passive income":"investi & ottieni","annual passive income from long-term renting out":"Passivo annuo","annual passive income from daily rentals":"Reddito annuale a lungo termine","expected price increase after completion of construction":"Aumento dei prezzi previsto dopo il completamento della costruzione","Why choose Bali for property investment":"Perch\xe9 scegliere Bali per gli investimenti immobiliari","Residential complex":"Complesso residenziale","Real estate":"Immobiliare",Price:"Prezzo",Apartments:"Appartamenti",bedroom:"camera da letto",bedrooms:"camere da letto",Villa:"Villa",Layouts:"Piano:",Terrace:"Terrazza","Installment plan":"Tempo di costruzione:",GUEST_HOUSE_INVESTMENT_DESCRIPTION:"Ingresso minimo a partire da 5000$ - 1/7 del costo di una Guest House",APARTMENTS_INVESTMENT_DESCRIPTION:"Ingresso minimo \xe8 il 10% del costo di un Appartamento",VILLA_INVESTMENT_DESCRIPTION:"Ingresso minimo \xe8 il 10% del costo di una Villa","ROI:":"ROI:",ABOUT_ESTATE_GUEST_HOUSES:"guest houses"}};window.$=window.jQuery=/*@__PURE__*/t(v),window.IScroll=g("2VK02");var x={};/*!
* Customized version of iScroll.js 0.0.5
* It fixes bugs affecting its integration with fullpage.js
*//*! iScroll v5.2.0 ~ (c) 2008-2016 Matteo Spinelli ~ http://cubiq.org/license */!function(t,e,i){function n(i,n){for(var o in this.wrapper="string"==typeof i?e.querySelector(i):i,this.scroller=this.wrapper.children[0],this.scrollerStyle=this.scroller.style,this.options={resizeScrollbars:!0,mouseWheelSpeed:20,snapThreshold:.334,disablePointer:!a.hasPointer,disableTouch:a.hasPointer||!a.hasTouch,disableMouse:a.hasPointer||a.hasTouch,startX:0,startY:0,scrollY:!0,directionLockThreshold:5,momentum:!0,bounce:!0,bounceTime:600,bounceEasing:"",preventDefault:!0,preventDefaultException:{tagName:/^(INPUT|TEXTAREA|BUTTON|SELECT|LABEL)$/},HWCompositing:!0,useTransition:!0,useTransform:!0,bindToWrapper:void 0===t.onmousedown},n)this.options[o]=n[o];this.translateZ=this.options.HWCompositing&&a.hasPerspective?" translateZ(0)":"",this.options.useTransition=a.hasTransition&&this.options.useTransition,this.options.useTransform=a.hasTransform&&this.options.useTransform,this.options.eventPassthrough=!0===this.options.eventPassthrough?"vertical":this.options.eventPassthrough,this.options.preventDefault=!this.options.eventPassthrough&&this.options.preventDefault,this.options.scrollY="vertical"!=this.options.eventPassthrough&&this.options.scrollY,this.options.scrollX="horizontal"!=this.options.eventPassthrough&&this.options.scrollX,this.options.freeScroll=this.options.freeScroll&&!this.options.eventPassthrough,this.options.directionLockThreshold=this.options.eventPassthrough?0:this.options.directionLockThreshold,this.options.bounceEasing="string"==typeof this.options.bounceEasing?a.ease[this.options.bounceEasing]||a.ease.circular:this.options.bounceEasing,this.options.resizePolling=void 0===this.options.resizePolling?60:this.options.resizePolling,!0===this.options.tap&&(this.options.tap="tap"),this.options.useTransition||this.options.useTransform||/relative|absolute/i.test(this.scrollerStyle.position)||(this.scrollerStyle.position="relative"),"scale"==this.options.shrinkScrollbars&&(this.options.useTransition=!1),this.options.invertWheelDirection=this.options.invertWheelDirection?-1:1,this.x=0,this.y=0,this.directionX=0,this.directionY=0,this._events={},this._init(),this.refresh(),this.scrollTo(this.options.startX,this.options.startY),this.enable()}function o(t,i,n){var o=e.createElement("div"),s=e.createElement("div");return!0===n&&(o.style.cssText="position:absolute;z-index:9999",s.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);border-radius:3px"),s.className="iScrollIndicator","h"==t?(!0===n&&(o.style.cssText+=";height:7px;left:2px;right:2px;bottom:0",s.style.height="100%"),o.className="iScrollHorizontalScrollbar"):(!0===n&&(o.style.cssText+=";width:7px;bottom:2px;top:2px;right:1px",s.style.width="100%"),o.className="iScrollVerticalScrollbar"),o.style.cssText+=";overflow:hidden",i||(o.style.pointerEvents="none"),o.appendChild(s),o}function s(i,n){for(var o in this.wrapper="string"==typeof n.el?e.querySelector(n.el):n.el,this.wrapperStyle=this.wrapper.style,this.indicator=this.wrapper.children[0],this.indicatorStyle=this.indicator.style,this.scroller=i,this.options={listenX:!0,listenY:!0,interactive:!1,resize:!0,defaultScrollbars:!1,shrink:!1,fade:!1,speedRatioX:0,speedRatioY:0},n)this.options[o]=n[o];if(this.sizeRatioX=1,this.sizeRatioY=1,this.maxPosX=0,this.maxPosY=0,this.options.interactive&&(this.options.disableTouch||(a.addEvent(this.indicator,"touchstart",this),a.addEvent(t,"touchend",this)),this.options.disablePointer||(a.addEvent(this.indicator,a.prefixPointerEvent("pointerdown"),this),a.addEvent(t,a.prefixPointerEvent("pointerup"),this)),this.options.disableMouse||(a.addEvent(this.indicator,"mousedown",this),a.addEvent(t,"mouseup",this))),this.options.fade){this.wrapperStyle[a.style.transform]=this.scroller.translateZ;var s=a.style.transitionDuration;if(!s)return;this.wrapperStyle[s]=a.isBadAndroid?"0.0001ms":"0ms";var l=this;a.isBadAndroid&&r(function(){"0.0001ms"===l.wrapperStyle[s]&&(l.wrapperStyle[s]="0s")}),this.wrapperStyle.opacity="0"}}var r=t.requestAnimationFrame||t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||t.oRequestAnimationFrame||t.msRequestAnimationFrame||function(e){t.setTimeout(e,1e3/60)},a=function(){function n(t){return!1!==r&&(""===r?t:r+t.charAt(0).toUpperCase()+t.substr(1))}var o={},s=e.createElement("div").style,r=function(){for(var t=["t","webkitT","MozT","msT","OT"],e=0,i=t.length;e<i;e++)if(t[e]+"ransform" in s)return t[e].substr(0,t[e].length-1);return!1}();o.getTime=Date.now||function(){return(new Date).getTime()},o.extend=function(t,e){for(var i in e)t[i]=e[i]},o.addEvent=function(t,e,i,n){t.addEventListener(e,i,!!n)},o.removeEvent=function(t,e,i,n){t.removeEventListener(e,i,!!n)},o.prefixPointerEvent=function(e){return t.MSPointerEvent?"MSPointer"+e.charAt(7).toUpperCase()+e.substr(8):e},o.momentum=function(t,e,n,o,s,r){var a,l,c=t-e,h=i.abs(c)/n;return a=t+h*h/(2*(r=void 0===r?6e-4:r))*(c<0?-1:1),l=h/r,a<o?(a=s?o-s/2.5*(h/8):o,l=(c=i.abs(a-t))/h):a>0&&(a=s?s/2.5*(h/8):0,l=(c=i.abs(t)+a)/h),{destination:i.round(a),duration:l}};var a=n("transform");return o.extend(o,{hasTransform:!1!==a,hasPerspective:n("perspective") in s,hasTouch:"ontouchstart"in t,hasPointer:!(!t.PointerEvent&&!t.MSPointerEvent),hasTransition:n("transition") in s}),o.isBadAndroid=function(){var e=t.navigator.appVersion;if(/Android/.test(e)&&!/Chrome\/\d/.test(e)){var i=e.match(/Safari\/(\d+.\d)/);return!(i&&"object"==typeof i&&i.length>=2)||535.19>parseFloat(i[1])}return!1}(),o.extend(o.style={},{transform:a,transitionTimingFunction:n("transitionTimingFunction"),transitionDuration:n("transitionDuration"),transitionDelay:n("transitionDelay"),transformOrigin:n("transformOrigin")}),o.hasClass=function(t,e){return RegExp("(^|\\s)"+e+"(\\s|$)").test(t.className)},o.addClass=function(t,e){if(!o.hasClass(t,e)){var i=t.className.split(" ");i.push(e),t.className=i.join(" ")}},o.removeClass=function(t,e){if(o.hasClass(t,e)){var i=RegExp("(^|\\s)"+e+"(\\s|$)","g");t.className=t.className.replace(i," ")}},o.offset=function(t){for(var e=-t.offsetLeft,i=-t.offsetTop;t=t.offsetParent;)e-=t.offsetLeft,i-=t.offsetTop;return{left:e,top:i}},o.preventDefaultException=function(t,e){for(var i in e)if(e[i].test(t[i]))return!0;return!1},o.extend(o.eventType={},{touchstart:1,touchmove:1,touchend:1,mousedown:2,mousemove:2,mouseup:2,pointerdown:3,pointermove:3,pointerup:3,MSPointerDown:3,MSPointerMove:3,MSPointerUp:3}),o.extend(o.ease={},{quadratic:{style:"cubic-bezier(0.25, 0.46, 0.45, 0.94)",fn:function(t){return t*(2-t)}},circular:{style:"cubic-bezier(0.1, 0.57, 0.1, 1)",fn:function(t){return i.sqrt(1- --t*t)}},back:{style:"cubic-bezier(0.175, 0.885, 0.32, 1.275)",fn:function(t){return(t-=1)*t*(5*t+4)+1}},bounce:{style:"",fn:function(t){return(t/=1)<1/2.75?7.5625*t*t:t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375}},elastic:{style:"",fn:function(t){return 0===t?0:1==t?1:.4*i.pow(2,-10*t)*i.sin((t-.055)*(2*i.PI)/.22)+1}}}),o.tap=function(t,i){var n=e.createEvent("Event");n.initEvent(i,!0,!0),n.pageX=t.pageX,n.pageY=t.pageY,t.target.dispatchEvent(n)},o.click=function(i){var n,o=i.target;/(SELECT|INPUT|TEXTAREA)/i.test(o.tagName)||((n=e.createEvent(t.MouseEvent?"MouseEvents":"Event")).initEvent("click",!0,!0),n.view=i.view||t,n.detail=1,n.screenX=o.screenX||0,n.screenY=o.screenY||0,n.clientX=o.clientX||0,n.clientY=o.clientY||0,n.ctrlKey=!!i.ctrlKey,n.altKey=!!i.altKey,n.shiftKey=!!i.shiftKey,n.metaKey=!!i.metaKey,n.button=0,n.relatedTarget=null,n._constructed=!0,o.dispatchEvent(n))},o}();n.prototype={version:"5.2.0",_init:function(){this._initEvents(),(this.options.scrollbars||this.options.indicators)&&this._initIndicators(),this.options.mouseWheel&&this._initWheel(),this.options.snap&&this._initSnap(),this.options.keyBindings&&this._initKeys()},destroy:function(){this._initEvents(!0),clearTimeout(this.resizeTimeout),this.resizeTimeout=null,this._execEvent("destroy")},_transitionEnd:function(t){t.target==this.scroller&&this.isInTransition&&(this._transitionTime(),this.resetPosition(this.options.bounceTime)||(this.isInTransition=!1,this._execEvent("scrollEnd")))},_start:function(t){if((1==a.eventType[t.type]||0===(t.which?t.button:t.button<2?0:4==t.button?1:2))&&this.enabled&&(!this.initiated||a.eventType[t.type]===this.initiated)){!this.options.preventDefault||a.isBadAndroid||a.preventDefaultException(t.target,this.options.preventDefaultException)||t.preventDefault();var e,n=t.touches?t.touches[0]:t;this.initiated=a.eventType[t.type],this.moved=!1,this.distX=0,this.distY=0,this.directionX=0,this.directionY=0,this.directionLocked=0,this.startTime=a.getTime(),this.options.useTransition&&this.isInTransition?(this._transitionTime(),this.isInTransition=!1,e=this.getComputedPosition(),this._translate(i.round(e.x),i.round(e.y)),this._execEvent("scrollEnd")):!this.options.useTransition&&this.isAnimating&&(this.isAnimating=!1,this._execEvent("scrollEnd")),this.startX=this.x,this.startY=this.y,this.absStartX=this.x,this.absStartY=this.y,this.pointX=n.pageX,this.pointY=n.pageY,this._execEvent("beforeScrollStart")}},_move:function(t){if(this.enabled&&a.eventType[t.type]===this.initiated){this.options.preventDefault&&t.preventDefault();var e,n,o,s,r=t.touches?t.touches[0]:t,l=r.pageX-this.pointX,c=r.pageY-this.pointY,h=a.getTime();if(this.pointX=r.pageX,this.pointY=r.pageY,this.distX+=l,this.distY+=c,o=i.abs(this.distX),s=i.abs(this.distY),!(h-this.endTime>300&&o<10&&s<10)){if(this.directionLocked||this.options.freeScroll||(o>s+this.options.directionLockThreshold?this.directionLocked="h":s>=o+this.options.directionLockThreshold?this.directionLocked="v":this.directionLocked="n"),"h"==this.directionLocked){if("vertical"==this.options.eventPassthrough)t.preventDefault();else if("horizontal"==this.options.eventPassthrough)return void(this.initiated=!1);c=0}else if("v"==this.directionLocked){if("horizontal"==this.options.eventPassthrough)t.preventDefault();else if("vertical"==this.options.eventPassthrough)return void(this.initiated=!1);l=0}l=this.hasHorizontalScroll?l:0,c=this.hasVerticalScroll?c:0,e=this.x+l,n=this.y+c,(e>0||e<this.maxScrollX)&&(e=this.options.bounce?this.x+l/3:e>0?0:this.maxScrollX),(n>0||n<this.maxScrollY)&&(n=this.options.bounce?this.y+c/3:n>0?0:this.maxScrollY),this.directionX=l>0?-1:l<0?1:0,this.directionY=c>0?-1:c<0?1:0,this.moved||this._execEvent("scrollStart"),this.moved=!0,this._translate(e,n),h-this.startTime>300&&(this.startTime=h,this.startX=this.x,this.startY=this.y)}}},_end:function(t){if(this.enabled&&a.eventType[t.type]===this.initiated){this.options.preventDefault&&!a.preventDefaultException(t.target,this.options.preventDefaultException)&&t.preventDefault();var e,n,o=(t.changedTouches&&t.changedTouches[0],a.getTime()-this.startTime),s=i.round(this.x),r=i.round(this.y),l=i.abs(s-this.startX),c=i.abs(r-this.startY),h=0,u="";if(this.isInTransition=0,this.initiated=0,this.endTime=a.getTime(),!this.resetPosition(this.options.bounceTime)){if(this.scrollTo(s,r),!this.moved)return this.options.tap&&a.tap(t,this.options.tap),this.options.click&&a.click(t),void this._execEvent("scrollCancel");if(this._events.flick&&o<200&&l<100&&c<100)return void this._execEvent("flick");if(this.options.momentum&&o<300&&(e=this.hasHorizontalScroll?a.momentum(this.x,this.startX,o,this.maxScrollX,this.options.bounce?this.wrapperWidth:0,this.options.deceleration):{destination:s,duration:0},n=this.hasVerticalScroll?a.momentum(this.y,this.startY,o,this.maxScrollY,this.options.bounce?this.wrapperHeight:0,this.options.deceleration):{destination:r,duration:0},s=e.destination,r=n.destination,h=i.max(e.duration,n.duration),this.isInTransition=1),this.options.snap){var p=this._nearestSnap(s,r);this.currentPage=p,h=this.options.snapSpeed||i.max(i.max(i.min(i.abs(s-p.x),1e3),i.min(i.abs(r-p.y),1e3)),300),s=p.x,r=p.y,this.directionX=0,this.directionY=0,u=this.options.bounceEasing}return s!=this.x||r!=this.y?((s>0||s<this.maxScrollX||r>0||r<this.maxScrollY)&&(u=a.ease.quadratic),void this.scrollTo(s,r,h,u)):void this._execEvent("scrollEnd")}}},_resize:function(){var t=this;clearTimeout(this.resizeTimeout),this.resizeTimeout=setTimeout(function(){t.refresh()},this.options.resizePolling)},resetPosition:function(t){var e=this.x,i=this.y;return t=t||0,!this.hasHorizontalScroll||this.x>0?e=0:this.x<this.maxScrollX&&(e=this.maxScrollX),!this.hasVerticalScroll||this.y>0?i=0:this.y<this.maxScrollY&&(i=this.maxScrollY),(e!=this.x||i!=this.y)&&(this.scrollTo(e,i,t,this.options.bounceEasing),!0)},disable:function(){this.enabled=!1},enable:function(){this.enabled=!0},refresh:function(){this.wrapper.offsetHeight,this.wrapperWidth=this.wrapper.clientWidth,this.wrapperHeight=this.wrapper.clientHeight,this.scrollerWidth=this.scroller.offsetWidth,this.scrollerHeight=this.scroller.offsetHeight,this.maxScrollX=this.wrapperWidth-this.scrollerWidth,this.maxScrollY=this.wrapperHeight-this.scrollerHeight,this.hasHorizontalScroll=this.options.scrollX&&this.maxScrollX<0,this.hasVerticalScroll=this.options.scrollY&&this.maxScrollY<0,this.hasHorizontalScroll||(this.maxScrollX=0,this.scrollerWidth=this.wrapperWidth),this.hasVerticalScroll||(this.maxScrollY=0,this.scrollerHeight=this.wrapperHeight),this.endTime=0,this.directionX=0,this.directionY=0,this.wrapperOffset=a.offset(this.wrapper),this._execEvent("refresh"),this.resetPosition()},on:function(t,e){this._events[t]||(this._events[t]=[]),this._events[t].push(e)},off:function(t,e){if(this._events[t]){var i=this._events[t].indexOf(e);i>-1&&this._events[t].splice(i,1)}},_execEvent:function(t){if(this._events[t]){var e=0,i=this._events[t].length;if(i)for(;e<i;e++)this._events[t][e].apply(this,[].slice.call(arguments,1))}},scrollBy:function(t,e,i,n){t=this.x+t,e=this.y+e,i=i||0,this.scrollTo(t,e,i,n)},scrollTo:function(t,e,i,n){n=n||a.ease.circular,this.isInTransition=this.options.useTransition&&i>0;var o=this.options.useTransition&&n.style;!i||o?(o&&(this._transitionTimingFunction(n.style),this._transitionTime(i)),this._translate(t,e)):this._animate(t,e,i,n.fn)},scrollToElement:function(t,e,n,o,s){if(t=t.nodeType?t:this.scroller.querySelector(t)){var r=a.offset(t);r.left-=this.wrapperOffset.left,r.top-=this.wrapperOffset.top,!0===n&&(n=i.round(t.offsetWidth/2-this.wrapper.offsetWidth/2)),!0===o&&(o=i.round(t.offsetHeight/2-this.wrapper.offsetHeight/2)),r.left-=n||0,r.top-=o||0,r.left=r.left>0?0:r.left<this.maxScrollX?this.maxScrollX:r.left,r.top=r.top>0?0:r.top<this.maxScrollY?this.maxScrollY:r.top,e=null==e||"auto"===e?i.max(i.abs(this.x-r.left),i.abs(this.y-r.top)):e,this.scrollTo(r.left,r.top,e,s)}},_transitionTime:function(t){if(this.options.useTransition){t=t||0;var e=a.style.transitionDuration;if(e){if(this.scrollerStyle[e]=t+"ms",!t&&a.isBadAndroid){this.scrollerStyle[e]="0.0001ms";var i=this;r(function(){"0.0001ms"===i.scrollerStyle[e]&&(i.scrollerStyle[e]="0s")})}if(this.indicators)for(var n=this.indicators.length;n--;)this.indicators[n].transitionTime(t)}}},_transitionTimingFunction:function(t){if(this.scrollerStyle[a.style.transitionTimingFunction]=t,this.indicators)for(var e=this.indicators.length;e--;)this.indicators[e].transitionTimingFunction(t)},_translate:function(t,e){if(this.options.useTransform?this.scrollerStyle[a.style.transform]="translate("+t+"px,"+e+"px)"+this.translateZ:(t=i.round(t),e=i.round(e),this.scrollerStyle.left=t+"px",this.scrollerStyle.top=e+"px"),this.x=t,this.y=e,this.indicators)for(var n=this.indicators.length;n--;)this.indicators[n].updatePosition()},_initEvents:function(e){var i=e?a.removeEvent:a.addEvent,n=this.options.bindToWrapper?this.wrapper:t;i(t,"orientationchange",this),i(t,"resize",this),this.options.click&&i(this.wrapper,"click",this,!0),this.options.disableMouse||(i(this.wrapper,"mousedown",this),i(n,"mousemove",this),i(n,"mousecancel",this),i(n,"mouseup",this)),a.hasPointer&&!this.options.disablePointer&&(i(this.wrapper,a.prefixPointerEvent("pointerdown"),this),i(n,a.prefixPointerEvent("pointermove"),this),i(n,a.prefixPointerEvent("pointercancel"),this),i(n,a.prefixPointerEvent("pointerup"),this)),a.hasTouch&&!this.options.disableTouch&&(i(this.wrapper,"touchstart",this),i(n,"touchmove",this),i(n,"touchcancel",this),i(n,"touchend",this)),i(this.scroller,"transitionend",this),i(this.scroller,"webkitTransitionEnd",this),i(this.scroller,"oTransitionEnd",this),i(this.scroller,"MSTransitionEnd",this)},getComputedPosition:function(){var e,i,n=t.getComputedStyle(this.scroller,null);return this.options.useTransform?(e=+((n=n[a.style.transform].split(")")[0].split(", "))[12]||n[4]),i=+(n[13]||n[5])):(e=+n.left.replace(/[^-\d.]/g,""),i=+n.top.replace(/[^-\d.]/g,"")),{x:e,y:i}},_initIndicators:function(){function t(t){if(a.indicators)for(var e=a.indicators.length;e--;)t.call(a.indicators[e])}var e,i=this.options.interactiveScrollbars,n="string"!=typeof this.options.scrollbars,r=[],a=this;this.indicators=[],this.options.scrollbars&&(this.options.scrollY&&(e={el:o("v",i,this.options.scrollbars),interactive:i,defaultScrollbars:!0,customStyle:n,resize:this.options.resizeScrollbars,shrink:this.options.shrinkScrollbars,fade:this.options.fadeScrollbars,listenX:!1},this.wrapper.appendChild(e.el),r.push(e)),this.options.scrollX&&(e={el:o("h",i,this.options.scrollbars),interactive:i,defaultScrollbars:!0,customStyle:n,resize:this.options.resizeScrollbars,shrink:this.options.shrinkScrollbars,fade:this.options.fadeScrollbars,listenY:!1},this.wrapper.appendChild(e.el),r.push(e))),this.options.indicators&&(r=r.concat(this.options.indicators));for(var l=r.length;l--;)this.indicators.push(new s(this,r[l]));this.options.fadeScrollbars&&(this.on("scrollEnd",function(){t(function(){this.fade()})}),this.on("scrollCancel",function(){t(function(){this.fade()})}),this.on("scrollStart",function(){t(function(){this.fade(1)})}),this.on("beforeScrollStart",function(){t(function(){this.fade(1,!0)})})),this.on("refresh",function(){t(function(){this.refresh()})}),this.on("destroy",function(){t(function(){this.destroy()}),delete this.indicators})},_initWheel:function(){a.addEvent(this.wrapper,"wheel",this),a.addEvent(this.wrapper,"mousewheel",this),a.addEvent(this.wrapper,"DOMMouseScroll",this),this.on("destroy",function(){clearTimeout(this.wheelTimeout),this.wheelTimeout=null,a.removeEvent(this.wrapper,"wheel",this),a.removeEvent(this.wrapper,"mousewheel",this),a.removeEvent(this.wrapper,"DOMMouseScroll",this)})},_wheel:function(t){if(this.enabled){var e,n,o,s,r=this;if(void 0===this.wheelTimeout&&r._execEvent("scrollStart"),clearTimeout(this.wheelTimeout),this.wheelTimeout=setTimeout(function(){r.options.snap||r._execEvent("scrollEnd"),r.wheelTimeout=void 0},400),"deltaX"in t)1===t.deltaMode?(e=-t.deltaX*this.options.mouseWheelSpeed,n=-t.deltaY*this.options.mouseWheelSpeed):(e=-t.deltaX,n=-t.deltaY);else if("wheelDeltaX"in t)e=t.wheelDeltaX/120*this.options.mouseWheelSpeed,n=t.wheelDeltaY/120*this.options.mouseWheelSpeed;else if("wheelDelta"in t)e=n=t.wheelDelta/120*this.options.mouseWheelSpeed;else{if(!("detail"in t))return;e=n=-t.detail/3*this.options.mouseWheelSpeed}if(e*=this.options.invertWheelDirection,n*=this.options.invertWheelDirection,this.hasVerticalScroll||(e=n,n=0),this.options.snap)return o=this.currentPage.pageX,s=this.currentPage.pageY,e>0?o--:e<0&&o++,n>0?s--:n<0&&s++,void this.goToPage(o,s);o=this.x+i.round(this.hasHorizontalScroll?e:0),s=this.y+i.round(this.hasVerticalScroll?n:0),this.directionX=e>0?-1:e<0?1:0,this.directionY=n>0?-1:n<0?1:0,o>0?o=0:o<this.maxScrollX&&(o=this.maxScrollX),s>0?s=0:s<this.maxScrollY&&(s=this.maxScrollY),this.scrollTo(o,s,0)}},_initSnap:function(){this.currentPage={},"string"==typeof this.options.snap&&(this.options.snap=this.scroller.querySelectorAll(this.options.snap)),this.on("refresh",function(){var t,e,n,o,s,r,a=0,l=0,c=0,h=this.options.snapStepX||this.wrapperWidth,u=this.options.snapStepY||this.wrapperHeight;if(this.pages=[],this.wrapperWidth&&this.wrapperHeight&&this.scrollerWidth&&this.scrollerHeight){if(!0===this.options.snap)for(n=i.round(h/2),o=i.round(u/2);c>-this.scrollerWidth;){for(this.pages[a]=[],t=0,s=0;s>-this.scrollerHeight;)this.pages[a][t]={x:i.max(c,this.maxScrollX),y:i.max(s,this.maxScrollY),width:h,height:u,cx:c-n,cy:s-o},s-=u,t++;c-=h,a++}else for(t=(r=this.options.snap).length,e=-1;a<t;a++)(0===a||r[a].offsetLeft<=r[a-1].offsetLeft)&&(l=0,e++),this.pages[l]||(this.pages[l]=[]),c=i.max(-r[a].offsetLeft,this.maxScrollX),s=i.max(-r[a].offsetTop,this.maxScrollY),n=c-i.round(r[a].offsetWidth/2),o=s-i.round(r[a].offsetHeight/2),this.pages[l][e]={x:c,y:s,width:r[a].offsetWidth,height:r[a].offsetHeight,cx:n,cy:o},c>this.maxScrollX&&l++;this.goToPage(this.currentPage.pageX||0,this.currentPage.pageY||0,0),this.options.snapThreshold%1==0?(this.snapThresholdX=this.options.snapThreshold,this.snapThresholdY=this.options.snapThreshold):(this.snapThresholdX=i.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].width*this.options.snapThreshold),this.snapThresholdY=i.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].height*this.options.snapThreshold))}}),this.on("flick",function(){var t=this.options.snapSpeed||i.max(i.max(i.min(i.abs(this.x-this.startX),1e3),i.min(i.abs(this.y-this.startY),1e3)),300);this.goToPage(this.currentPage.pageX+this.directionX,this.currentPage.pageY+this.directionY,t)})},_nearestSnap:function(t,e){if(!this.pages.length)return{x:0,y:0,pageX:0,pageY:0};var n=0,o=this.pages.length,s=0;if(i.abs(t-this.absStartX)<this.snapThresholdX&&i.abs(e-this.absStartY)<this.snapThresholdY)return this.currentPage;for(t>0?t=0:t<this.maxScrollX&&(t=this.maxScrollX),e>0?e=0:e<this.maxScrollY&&(e=this.maxScrollY);n<o;n++)if(t>=this.pages[n][0].cx){t=this.pages[n][0].x;break}for(o=this.pages[n].length;s<o;s++)if(e>=this.pages[0][s].cy){e=this.pages[0][s].y;break}return n==this.currentPage.pageX&&((n+=this.directionX)<0?n=0:n>=this.pages.length&&(n=this.pages.length-1),t=this.pages[n][0].x),s==this.currentPage.pageY&&((s+=this.directionY)<0?s=0:s>=this.pages[0].length&&(s=this.pages[0].length-1),e=this.pages[0][s].y),{x:t,y:e,pageX:n,pageY:s}},goToPage:function(t,e,n,o){o=o||this.options.bounceEasing,t>=this.pages.length?t=this.pages.length-1:t<0&&(t=0),e>=this.pages[t].length?e=this.pages[t].length-1:e<0&&(e=0);var s=this.pages[t][e].x,r=this.pages[t][e].y;n=void 0===n?this.options.snapSpeed||i.max(i.max(i.min(i.abs(s-this.x),1e3),i.min(i.abs(r-this.y),1e3)),300):n,this.currentPage={x:s,y:r,pageX:t,pageY:e},this.scrollTo(s,r,n,o)},next:function(t,e){var i=this.currentPage.pageX,n=this.currentPage.pageY;++i>=this.pages.length&&this.hasVerticalScroll&&(i=0,n++),this.goToPage(i,n,t,e)},prev:function(t,e){var i=this.currentPage.pageX,n=this.currentPage.pageY;--i<0&&this.hasVerticalScroll&&(i=0,n--),this.goToPage(i,n,t,e)},_initKeys:function(e){var i,n={pageUp:33,pageDown:34,end:35,home:36,left:37,up:38,right:39,down:40};if("object"==typeof this.options.keyBindings)for(i in this.options.keyBindings)"string"==typeof this.options.keyBindings[i]&&(this.options.keyBindings[i]=this.options.keyBindings[i].toUpperCase().charCodeAt(0));else this.options.keyBindings={};for(i in n)this.options.keyBindings[i]=this.options.keyBindings[i]||n[i];a.addEvent(t,"keydown",this),this.on("destroy",function(){a.removeEvent(t,"keydown",this)})},_key:function(t){if(this.enabled){var e,n=this.options.snap,o=n?this.currentPage.pageX:this.x,s=n?this.currentPage.pageY:this.y,r=a.getTime(),l=this.keyTime||0;switch(this.options.useTransition&&this.isInTransition&&(e=this.getComputedPosition(),this._translate(i.round(e.x),i.round(e.y)),this.isInTransition=!1),this.keyAcceleration=r-l<200?i.min(this.keyAcceleration+.25,50):0,t.keyCode){case this.options.keyBindings.pageUp:this.hasHorizontalScroll&&!this.hasVerticalScroll?o+=n?1:this.wrapperWidth:s+=n?1:this.wrapperHeight;break;case this.options.keyBindings.pageDown:this.hasHorizontalScroll&&!this.hasVerticalScroll?o-=n?1:this.wrapperWidth:s-=n?1:this.wrapperHeight;break;case this.options.keyBindings.end:o=n?this.pages.length-1:this.maxScrollX,s=n?this.pages[0].length-1:this.maxScrollY;break;case this.options.keyBindings.home:o=0,s=0;break;case this.options.keyBindings.left:o+=n?-1:5+this.keyAcceleration>>0;break;case this.options.keyBindings.up:s+=n?1:5+this.keyAcceleration>>0;break;case this.options.keyBindings.right:o-=n?-1:5+this.keyAcceleration>>0;break;case this.options.keyBindings.down:s-=n?1:5+this.keyAcceleration>>0;break;default:return}if(n)return void this.goToPage(o,s);o>0?(o=0,this.keyAcceleration=0):o<this.maxScrollX&&(o=this.maxScrollX,this.keyAcceleration=0),s>0?(s=0,this.keyAcceleration=0):s<this.maxScrollY&&(s=this.maxScrollY,this.keyAcceleration=0),this.scrollTo(o,s,0),this.keyTime=r}},_animate:function(t,e,i,n){var o=this,s=this.x,l=this.y,c=a.getTime(),h=c+i;this.isAnimating=!0,function u(){var p,d,f,m=a.getTime();return m>=h?(o.isAnimating=!1,o._translate(t,e),void(o.resetPosition(o.options.bounceTime)||o._execEvent("scrollEnd"))):(p=(t-s)*(f=n(m=(m-c)/i))+s,d=(e-l)*f+l,o._translate(p,d),void(o.isAnimating&&r(u)))}()},handleEvent:function(t){switch(t.type){case"touchstart":case"pointerdown":case"MSPointerDown":case"mousedown":this._start(t);break;case"touchmove":case"pointermove":case"MSPointerMove":case"mousemove":this._move(t);break;case"touchend":case"pointerup":case"MSPointerUp":case"mouseup":case"touchcancel":case"pointercancel":case"MSPointerCancel":case"mousecancel":this._end(t);break;case"orientationchange":case"resize":this._resize();break;case"transitionend":case"webkitTransitionEnd":case"oTransitionEnd":case"MSTransitionEnd":this._transitionEnd(t);break;case"wheel":case"DOMMouseScroll":case"mousewheel":this._wheel(t);break;case"keydown":this._key(t);break;case"click":this.enabled&&!t._constructed&&(t.preventDefault(),t.stopPropagation())}}},s.prototype={handleEvent:function(t){switch(t.type){case"touchstart":case"pointerdown":case"MSPointerDown":case"mousedown":this._start(t);break;case"touchmove":case"pointermove":case"MSPointerMove":case"mousemove":this._move(t);break;case"touchend":case"pointerup":case"MSPointerUp":case"mouseup":case"touchcancel":case"pointercancel":case"MSPointerCancel":case"mousecancel":this._end(t)}},destroy:function(){this.options.fadeScrollbars&&(clearTimeout(this.fadeTimeout),this.fadeTimeout=null),this.options.interactive&&(a.removeEvent(this.indicator,"touchstart",this),a.removeEvent(this.indicator,a.prefixPointerEvent("pointerdown"),this),a.removeEvent(this.indicator,"mousedown",this),a.removeEvent(t,"touchmove",this),a.removeEvent(t,a.prefixPointerEvent("pointermove"),this),a.removeEvent(t,"mousemove",this),a.removeEvent(t,"touchend",this),a.removeEvent(t,a.prefixPointerEvent("pointerup"),this),a.removeEvent(t,"mouseup",this)),this.options.defaultScrollbars&&this.wrapper.parentNode.removeChild(this.wrapper)},_start:function(e){var i=e.touches?e.touches[0]:e;e.preventDefault(),e.stopPropagation(),this.transitionTime(),this.initiated=!0,this.moved=!1,this.lastPointX=i.pageX,this.lastPointY=i.pageY,this.startTime=a.getTime(),this.options.disableTouch||a.addEvent(t,"touchmove",this),this.options.disablePointer||a.addEvent(t,a.prefixPointerEvent("pointermove"),this),this.options.disableMouse||a.addEvent(t,"mousemove",this),this.scroller._execEvent("beforeScrollStart")},_move:function(t){var e,i,n,o,s=t.touches?t.touches[0]:t;a.getTime(),this.moved||this.scroller._execEvent("scrollStart"),this.moved=!0,e=s.pageX-this.lastPointX,this.lastPointX=s.pageX,i=s.pageY-this.lastPointY,this.lastPointY=s.pageY,n=this.x+e,o=this.y+i,this._pos(n,o),t.preventDefault(),t.stopPropagation()},_end:function(e){if(this.initiated){if(this.initiated=!1,e.preventDefault(),e.stopPropagation(),a.removeEvent(t,"touchmove",this),a.removeEvent(t,a.prefixPointerEvent("pointermove"),this),a.removeEvent(t,"mousemove",this),this.scroller.options.snap){var n=this.scroller._nearestSnap(this.scroller.x,this.scroller.y),o=this.options.snapSpeed||i.max(i.max(i.min(i.abs(this.scroller.x-n.x),1e3),i.min(i.abs(this.scroller.y-n.y),1e3)),300);this.scroller.x==n.x&&this.scroller.y==n.y||(this.scroller.directionX=0,this.scroller.directionY=0,this.scroller.currentPage=n,this.scroller.scrollTo(n.x,n.y,o,this.scroller.options.bounceEasing))}this.moved&&this.scroller._execEvent("scrollEnd")}},transitionTime:function(t){t=t||0;var e=a.style.transitionDuration;if(e&&(this.indicatorStyle[e]=t+"ms",!t&&a.isBadAndroid)){this.indicatorStyle[e]="0.0001ms";var i=this;r(function(){"0.0001ms"===i.indicatorStyle[e]&&(i.indicatorStyle[e]="0s")})}},transitionTimingFunction:function(t){this.indicatorStyle[a.style.transitionTimingFunction]=t},refresh:function(){this.transitionTime(),this.options.listenX&&!this.options.listenY?this.indicatorStyle.display=this.scroller.hasHorizontalScroll?"block":"none":this.options.listenY&&!this.options.listenX?this.indicatorStyle.display=this.scroller.hasVerticalScroll?"block":"none":this.indicatorStyle.display=this.scroller.hasHorizontalScroll||this.scroller.hasVerticalScroll?"block":"none",this.scroller.hasHorizontalScroll&&this.scroller.hasVerticalScroll?(a.addClass(this.wrapper,"iScrollBothScrollbars"),a.removeClass(this.wrapper,"iScrollLoneScrollbar"),this.options.defaultScrollbars&&this.options.customStyle&&(this.options.listenX?this.wrapper.style.right="8px":this.wrapper.style.bottom="8px")):(a.removeClass(this.wrapper,"iScrollBothScrollbars"),a.addClass(this.wrapper,"iScrollLoneScrollbar"),this.options.defaultScrollbars&&this.options.customStyle&&(this.options.listenX?this.wrapper.style.right="2px":this.wrapper.style.bottom="2px")),this.wrapper.offsetHeight,this.options.listenX&&(this.wrapperWidth=this.wrapper.clientWidth,this.options.resize?(this.indicatorWidth=i.max(i.round(this.wrapperWidth*this.wrapperWidth/(this.scroller.scrollerWidth||this.wrapperWidth||1)),8),this.indicatorStyle.width=this.indicatorWidth+"px"):this.indicatorWidth=this.indicator.clientWidth,this.maxPosX=this.wrapperWidth-this.indicatorWidth,"clip"==this.options.shrink?(this.minBoundaryX=-this.indicatorWidth+8,this.maxBoundaryX=this.wrapperWidth-8):(this.minBoundaryX=0,this.maxBoundaryX=this.maxPosX),this.sizeRatioX=this.options.speedRatioX||this.scroller.maxScrollX&&this.maxPosX/this.scroller.maxScrollX),this.options.listenY&&(this.wrapperHeight=this.wrapper.clientHeight,this.options.resize?(this.indicatorHeight=i.max(i.round(this.wrapperHeight*this.wrapperHeight/(this.scroller.scrollerHeight||this.wrapperHeight||1)),8),this.indicatorStyle.height=this.indicatorHeight+"px"):this.indicatorHeight=this.indicator.clientHeight,this.maxPosY=this.wrapperHeight-this.indicatorHeight,"clip"==this.options.shrink?(this.minBoundaryY=-this.indicatorHeight+8,this.maxBoundaryY=this.wrapperHeight-8):(this.minBoundaryY=0,this.maxBoundaryY=this.maxPosY),this.maxPosY=this.wrapperHeight-this.indicatorHeight,this.sizeRatioY=this.options.speedRatioY||this.scroller.maxScrollY&&this.maxPosY/this.scroller.maxScrollY),this.updatePosition()},updatePosition:function(){var t=this.options.listenX&&i.round(this.sizeRatioX*this.scroller.x)||0,e=this.options.listenY&&i.round(this.sizeRatioY*this.scroller.y)||0;this.options.ignoreBoundaries||(t<this.minBoundaryX?("scale"==this.options.shrink&&(this.width=i.max(this.indicatorWidth+t,8),this.indicatorStyle.width=this.width+"px"),t=this.minBoundaryX):t>this.maxBoundaryX?"scale"==this.options.shrink?(this.width=i.max(this.indicatorWidth-(t-this.maxPosX),8),this.indicatorStyle.width=this.width+"px",t=this.maxPosX+this.indicatorWidth-this.width):t=this.maxBoundaryX:"scale"==this.options.shrink&&this.width!=this.indicatorWidth&&(this.width=this.indicatorWidth,this.indicatorStyle.width=this.width+"px"),e<this.minBoundaryY?("scale"==this.options.shrink&&(this.height=i.max(this.indicatorHeight+3*e,8),this.indicatorStyle.height=this.height+"px"),e=this.minBoundaryY):e>this.maxBoundaryY?"scale"==this.options.shrink?(this.height=i.max(this.indicatorHeight-3*(e-this.maxPosY),8),this.indicatorStyle.height=this.height+"px",e=this.maxPosY+this.indicatorHeight-this.height):e=this.maxBoundaryY:"scale"==this.options.shrink&&this.height!=this.indicatorHeight&&(this.height=this.indicatorHeight,this.indicatorStyle.height=this.height+"px")),this.x=t,this.y=e,this.scroller.options.useTransform?this.indicatorStyle[a.style.transform]="translate("+t+"px,"+e+"px)"+this.scroller.translateZ:(this.indicatorStyle.left=t+"px",this.indicatorStyle.top=e+"px")},_pos:function(t,e){t<0?t=0:t>this.maxPosX&&(t=this.maxPosX),e<0?e=0:e>this.maxPosY&&(e=this.maxPosY),t=this.options.listenX?i.round(t/this.sizeRatioX):this.scroller.x,e=this.options.listenY?i.round(e/this.sizeRatioY):this.scroller.y,this.scroller.scrollTo(t,e)},fade:function(t,e){if(!e||this.visible){clearTimeout(this.fadeTimeout),this.fadeTimeout=null;var i=t?250:500,n=t?0:300;t=t?"1":"0",this.wrapperStyle[a.style.transitionDuration]=i+"ms",this.fadeTimeout=setTimeout((function(t){this.wrapperStyle.opacity=t,this.visible=+t}).bind(this,t),n)}}},n.utils=a,x?x=n:"function"==typeof define&&define.amd?define(function(){return n}):t.IScroll=n}(window,document,Math),e=window,i=jQuery,o=".fp-section"+(n=".active"),s=".fp-slide"+n,a="."+(r="fp-scrollable"),"undefined"!=typeof IScroll&&(IScroll.prototype.wheelOn=function(){this.wrapper.addEventListener("wheel",this),this.wrapper.addEventListener("mousewheel",this),this.wrapper.addEventListener("DOMMouseScroll",this)},IScroll.prototype.wheelOff=function(){this.wrapper.removeEventListener("wheel",this),this.wrapper.removeEventListener("mousewheel",this),this.wrapper.removeEventListener("DOMMouseScroll",this)}),e.iscrollHandler={refreshId:null,iScrollInstances:[],toggleWheel:function(t){i(o).find(a).each(function(){var e=i(this).data("iscrollInstance");void 0!==e&&e&&(t?e.wheelOn():e.wheelOff())})},onLeave:function(){iscrollHandler.toggleWheel(!1)},beforeLeave:function(){iscrollHandler.onLeave()},afterLoad:function(){iscrollHandler.toggleWheel(!0)},create:function(t,e,n){var o=t.find(a);o.height(e),o.each(function(){var t=i(this),e=t.data("iscrollInstance");e&&i.each(iscrollHandler.iScrollInstances,function(){i(this).destroy()}),(e=new IScroll(t.get(0),n)).on("scrollEnd",function(){this.fp_isAtTop=this.y>-30,this.fp_isAtEnd=this.y-this.maxScrollY<30}),iscrollHandler.iScrollInstances.push(e),e.wheelOff(),t.data("iscrollInstance",e)})},isScrolled:function(t,e){var i=e.data("iscrollInstance");return!i||("top"===t?i.y>=0&&!e.scrollTop():"bottom"===t?0-i.y+e.scrollTop()+1+e.innerHeight()>=e[0].scrollHeight:void 0)},scrollable:function(t){return t.find(".fp-slides").length?t.find(s).find(a):t.find(a)},scrollHeight:function(t){return t.find(a).children().first().get(0).scrollHeight},remove:function(t){var e=t.find(a);if(e.length){var i=e.data("iscrollInstance");i&&i.destroy(),e.data("iscrollInstance",null)}t.find(a).children().first().children().first().unwrap().unwrap()},update:function(t,e){clearTimeout(iscrollHandler.refreshId),iscrollHandler.refreshId=setTimeout(function(){i.each(iscrollHandler.iScrollInstances,function(){i(this).get(0).refresh()})},150),t.find(a).css("height",e+"px").parent().css("height",e+"px")},wrapContent:function(){return'<div class="'+r+'"><div class="fp-scroller"></div></div>'}},l=window,c=document,(h=jQuery).fn.fp_scrolloverflow=function(){function t(){function t(){var t;h("body").hasClass(p)?(t=n.options.scrollOverflowHandler,i(function(e){e.closest(o).hasClass(d)&&t.remove(e)})):i(e)}function e(t){if(!t.hasClass("fp-noscroll")){t.css("overflow","hidden");var e,i,s=n.options.scrollOverflowHandler,r=s.wrapContent(),a=t.closest(o),c=s.scrollable(t),p=(e=a.closest(o)).length?parseInt(e.css("padding-bottom"))+parseInt(e.css("padding-top")):0;c.length?i=s.scrollHeight(t):(i=t.get(0).scrollHeight-p,n.options.verticalCentered&&(i=t.find(u).get(0).scrollHeight-p));var d=h(l).height()-p;i>d?c.length?s.update(t,d):(n.options.verticalCentered?t.find(u).wrapInner(r):t.wrapInner(r),s.create(t,d,n.iscrollOptions)):s.remove(t),t.css("overflow","")}}function i(t){h(o).each(function(){var e=h(this).find(r);e.length?e.each(function(){t(h(this))}):t(h(this))})}var n=this;n.options=null,n.init=function(e,i){return n.options=e,n.iscrollOptions=i,"complete"===c.readyState&&(t(),h.fn.fullpage.shared.afterRenderActions()),h(l).on("load",function(){t(),h.fn.fullpage.shared.afterRenderActions()}),n},n.createScrollBarForAll=t}var e="fp-scrollable",i="."+e,n=".active",o=".fp-section",s=o+n,r=".fp-slide",a=r+n,u=".fp-tableCell",p="fp-responsive",d="fp-auto-height-responsive";IScroll.prototype.wheelOn=function(){this.wrapper.addEventListener("wheel",this),this.wrapper.addEventListener("mousewheel",this),this.wrapper.addEventListener("DOMMouseScroll",this)},IScroll.prototype.wheelOff=function(){this.wrapper.removeEventListener("wheel",this),this.wrapper.removeEventListener("mousewheel",this),this.wrapper.removeEventListener("DOMMouseScroll",this)};var f={refreshId:null,iScrollInstances:[],iscrollOptions:{scrollbars:!0,mouseWheel:!0,hideScrollbars:!1,fadeScrollbars:!1,disableMouse:!0,interactiveScrollbars:!0},init:function(e){var i="ontouchstart"in l||navigator.msMaxTouchPoints>0||navigator.maxTouchPoints;return f.iscrollOptions.click=i,f.iscrollOptions=h.extend(f.iscrollOptions,e.scrollOverflowOptions),(new t).init(e,f.iscrollOptions)},toggleWheel:function(t){h(s).find(i).each(function(){var e=h(this).data("iscrollInstance");void 0!==e&&e&&(t?e.wheelOn():e.wheelOff())})},onLeave:function(){f.toggleWheel(!1)},beforeLeave:function(){f.onLeave()},afterLoad:function(){f.toggleWheel(!0)},create:function(t,e,n){var o=t.find(i);o.height(e),o.each(function(){var t=h(this),e=t.data("iscrollInstance");e&&h.each(f.iScrollInstances,function(){h(this).destroy()}),e=new IScroll(t.get(0),n),f.iScrollInstances.push(e),e.wheelOff(),t.data("iscrollInstance",e)})},isScrolled:function(t,e){var i=e.data("iscrollInstance");return!i||("top"===t?i.y>=0&&!e.scrollTop():"bottom"===t?0-i.y+e.scrollTop()+1+e.innerHeight()>=e[0].scrollHeight:void 0)},scrollable:function(t){return t.find(".fp-slides").length?t.find(a).find(i):t.find(i)},scrollHeight:function(t){return t.find(i).children().first().get(0).scrollHeight},remove:function(t){var e=t.find(i);e.length&&(e.data("iscrollInstance").destroy(),e.data("iscrollInstance",null)),t.find(i).children().first().children().first().unwrap().unwrap()},update:function(t,e){clearTimeout(f.refreshId),f.refreshId=setTimeout(function(){h.each(f.iScrollInstances,function(){h(this).get(0).refresh(),h.fn.fullpage.silentMoveTo(h(s).index()+1)})},150),t.find(i).css("height",e+"px").parent().css("height",e+getPaddings(t)+"px")},wrapContent:function(){return'<div class="'+e+'"><div class="fp-scroller"></div></div>'}};return{iscrollHandler:f}}();var b={};u="undefined"!=typeof window?window:b,p=function(t,e,i,n,o){// keeping central set of classnames and selectors
var s="fullpage-wrapper",r="."+s,a="fp-responsive",l="fp-notransition",c="fp-destroyed",h="fp-enabled",u="fp-viewing",p="active",d="."+p,f="fp-completely",m="."+f,g="fp-section",v="."+g,y=v+d,x=v+":first",b=v+":last",S="fp-tableCell",w="."+S,T="fp-nav",E="#"+T,k="fp-tooltip",P="."+k,C="fp-slide",A="."+C,D=A+d,I="fp-slides",_="."+I,H="fp-slidesContainer",X="."+H,L="fp-table",O="fp-slidesNav",Y="."+O,z=Y+" a",M="fp-controlArrow",N="."+M,R="fp-prev",j="."+R,W=M+" "+R,B=N+j,q="fp-next",F=M+" "+q,V=N+"."+q,U=t(e),$=t(i);t.fn.fullpage=function(M){//only once my friend!
if(t("html").hasClass(h)){eL();return}// common jQuery objects
var j,q,G,K,Q,Z,J,tt,te,ti,tn,to,ts=t("html, body"),tr=t("body"),ta=t.fn.fullpage;// Creating some defaults, extending them with any options that were provided
M=t.extend({//navigation
menu:!1,anchors:[],lockAnchors:!1,navigation:!1,navigationPosition:"right",navigationTooltips:[],showActiveTooltip:!1,slidesNavigation:!1,slidesNavPosition:"bottom",scrollBar:!1,hybrid:!1,//scrolling
css3:!0,scrollingSpeed:700,autoScrolling:!0,fitToSection:!0,fitToSectionDelay:1e3,easing:"easeInOutCubic",easingcss3:"ease",loopBottom:!1,loopTop:!1,loopHorizontal:!0,continuousVertical:!1,continuousHorizontal:!1,scrollHorizontally:!1,interlockedSlides:!1,dragAndMove:!1,offsetSections:!1,resetSliders:!1,fadingEffect:!1,normalScrollElements:null,scrollOverflow:!1,scrollOverflowReset:!1,scrollOverflowHandler:t.fn.fp_scrolloverflow?t.fn.fp_scrolloverflow.iscrollHandler:null,scrollOverflowOptions:null,touchSensitivity:5,normalScrollElementTouchThreshold:5,bigSectionsDestination:null,//Accessibility
keyboardScrolling:!0,animateAnchor:!0,recordHistory:!0,//design
controlArrows:!0,controlArrowColor:"#fff",verticalCentered:!0,sectionsColor:[],paddingTop:0,paddingBottom:0,fixedElements:null,responsive:0,responsiveWidth:0,responsiveHeight:0,responsiveSlides:!1,parallax:!1,parallaxOptions:{type:"reveal",percentage:62,property:"translate"},//Custom selectors
sectionSelector:".section",slideSelector:".slide",//events
afterLoad:null,onLeave:null,afterRender:null,afterResize:null,afterReBuild:null,afterSlideLoad:null,onSlideLeave:null,afterResponsive:null,lazyLoading:!0},M);//flag to avoid very fast sliding for landscape sliders
var tl=!1,tc=navigator.userAgent.match(/(iPhone|iPod|iPad|Android|playbook|silk|BlackBerry|BB10|Windows Phone|Tizen|Bada|webOS|IEMobile|Opera Mini)/),th="ontouchstart"in e||navigator.msMaxTouchPoints>0||navigator.maxTouchPoints,tu=t(this),tp=U.height(),td=!1,tf=!0,tm=!0,tg=[],tv={};tv.m={up:!0,down:!0,left:!0,right:!0},tv.k=t.extend(!0,{},tv.m);var ty=e.PointerEvent?{down:"pointerdown",move:"pointermove"}:{down:"MSPointerDown",move:"MSPointerMove"},tx={touchmove:"ontouchmove"in e?"touchmove":ty.move,touchstart:"ontouchstart"in e?"touchstart":ty.down},tb=t.extend(!0,{},M);/**
        * Sets the autoScroll option.
        * It changes the scroll bar visibility and the history of the site as a result.
        */function tS(e,i){e||eI(0),eX("autoScrolling",e,i);var n=t(y);M.autoScrolling&&!M.scrollBar?(ts.css({overflow:"hidden",height:"100%"}),tw(tb.recordHistory,"internal"),//for IE touch devices
tu.css({"-ms-touch-action":"none","touch-action":"none"}),n.length&&eI(n.position().top)):(ts.css({overflow:"visible",height:"initial"}),tw(!1,"internal"),//for IE touch devices
tu.css({"-ms-touch-action":"","touch-action":""}),n.length&&ts.scrollTop(n.position().top))}/**
        * Defines wheter to record the history for each hash change in the URL.
        */function tw(t,e){eX("recordHistory",t,e)}/**
        * Defines the scrolling speed
        */function tT(t,e){eX("scrollingSpeed",t,e)}/**
        * Sets fitToSection
        */function tE(t,e){eX("fitToSection",t,e)}/**
        * Adds or remove the possibility of scrolling through sections by using the mouse wheel or the trackpad.
        */function tk(t){var n,s,r;t?(s="",e.addEventListener?n="addEventListener":(n="attachEvent",s="on"),"DOMMouseScroll"==(r="onwheel"in i.createElement("div")?"wheel":i.onmousewheel!==o?"mousewheel":"DOMMouseScroll")?i[n](s+"MozMousePixelScroll",tZ,!1):i[n](s+r,tZ,!1),tu.on("mousedown",es).on("mouseup",er)):(i.addEventListener?(i.removeEventListener("mousewheel",tZ,!1),i.removeEventListener("wheel",tZ,!1),i.removeEventListener("MozMousePixelScroll",tZ,!1)):i.detachEvent("onmousewheel",tZ),tu.off("mousedown",es).off("mouseup",er))}/**
        * Adds or remove the possibility of scrolling through sections by using the mouse wheel/trackpad or touch gestures.
        * Optionally a second parameter can be used to specify the direction for which the action will be applied.
        *
        * @param directions string containing the direction or directions separated by comma.
        */function tP(e,i){void 0!==i?(i=i.replace(/ /g,"").split(","),t.each(i,function(t,i){eH(e,i,"m")})):(eH(e,"all","m"),e?(tk(!0),(tc||th)&&(M.autoScrolling&&tr.off(tx.touchmove).on(tx.touchmove,tW),t(r).off(tx.touchstart).on(tx.touchstart,tG).off(tx.touchmove).on(tx.touchmove,tU))):(tk(!1),(tc||th)&&(M.autoScrolling&&tr.off(tx.touchmove),t(r).off(tx.touchstart).off(tx.touchmove))))}/**
        * Adds or remove the possibility of scrolling through sections by using the keyboard arrow keys
        */function tC(e,i){void 0!==i?(i=i.replace(/ /g,"").split(","),t.each(i,function(t,i){eH(e,i,"k")})):(eH(e,"all","k"),M.keyboardScrolling=e)}/**
        * Moves the page up one section.
        */function tA(){var e=t(y).prev(v);!e.length&&(M.loopTop||M.continuousVertical)&&(e=t(v).last()),e.length&&t2(e,null,!0)}/**
        * Moves the page down one section.
        */function tD(){var e=t(y).next(v);!e.length&&(M.loopBottom||M.continuousVertical)&&(e=t(v).first()),e.length&&t2(e,null,!1)}/**
        * Moves the page to the given section and slide with no animation.
        * Anchors or index positions can be used as params.
        */function tI(t,e){tT(0,"internal"),t_(t,e),tT(tb.scrollingSpeed,"internal")}/**
        * Moves the page to the given section and slide.
        * Anchors or index positions can be used as params.
        */function t_(t,e){var i=eS(t);void 0!==e?ew(t,e):i.length>0&&t2(i)}/**
        * Slides right the slider of the active section.
        * Optional `section` param.
        */function tH(t){tJ("right",t)}/**
        * Slides left the slider of the active section.
        * Optional `section` param.
        */function tX(t){tJ("left",t)}/**
         * When resizing is finished, we adjust the slides sizes and positions
         */function tL(e){if(!tu.hasClass(c)){//nothing to do if the plugin was destroyed
td=!0,tp=U.height(),t(v).each(function(){var e=t(this).find(_),i=t(this).find(A);M.verticalCentered&&t(this).find(w).css("height",ex(t(this))+"px"),t(this).css("height",tp+"px"),i.length>1&&ec(e,e.find(D))}),M.scrollOverflow&&Z.createScrollBarForAll();var i=t(y).index(v);i&&tI(i+1),td=!1,t.isFunction(M.afterResize)&&e&&M.afterResize.call(tu),t.isFunction(M.afterReBuild)&&!e&&M.afterReBuild.call(tu)}}/**
        * Turns fullPage.js to normal scrolling mode when the viewport `width` or `height`
        * are smaller than the set limit values.
        */function tO(e){var i=tr.hasClass(a);e?!i&&(tS(!1,"internal"),tE(!1,"internal"),t(E).hide(),tr.addClass(a),t.isFunction(M.afterResponsive)&&M.afterResponsive.call(tu,e)):i&&(tS(tb.autoScrolling,"internal"),tE(tb.autoScrolling,"internal"),t(E).show(),tr.removeClass(a),t.isFunction(M.afterResponsive)&&M.afterResponsive.call(tu,e))}/**
        * Actions and callbacks to fire afterRender
        */function tY(){var e,i=t(y);i.addClass(f),t4(i),t8(i),M.scrollOverflow&&M.scrollOverflowHandler.afterLoad(),(!(e=eS(ei().section))||e.length&&e.index()===Q.index())&&t.isFunction(M.afterLoad)&&M.afterLoad.call(i,i.data("anchor"),i.index(v)+1),t.isFunction(M.afterRender)&&M.afterRender.call(tu)}eL(),//easeInOutCubic animation included in the plugin
t.extend(t.easing,{easeInOutCubic:function(t,e,i,n,o){return(e/=o/2)<1?n/2*e*e*e+i:n/2*((e-=2)*e*e+2)+i}}),t(this).length&&(//public functions
ta.version="2.9.6",ta.setAutoScrolling=tS,ta.setRecordHistory=tw,ta.setScrollingSpeed=tT,ta.setFitToSection=tE,ta.setLockAnchors=/**
        * Sets lockAnchors
        */function(t){M.lockAnchors=t},ta.setMouseWheelScrolling=tk,ta.setAllowScrolling=tP,ta.setKeyboardScrolling=tC,ta.moveSectionUp=tA,ta.moveSectionDown=tD,ta.silentMoveTo=tI,ta.moveTo=t_,ta.moveSlideRight=tH,ta.moveSlideLeft=tX,ta.fitToSection=tR,ta.reBuild=tL,ta.setResponsive=tO,ta.destroy=/*
        * Destroys fullpage.js plugin events and optinally its html markup and styles
        */function(e){//removing selectors
var i;tS(!1,"internal"),tP(!1),tC(!1),tu.addClass(c),clearTimeout(te),clearTimeout(tt),clearTimeout(J),clearTimeout(ti),clearTimeout(tn),U.off("scroll",tN).off("hashchange",ee).off("resize",ep),$.off("keydown",en).off("keyup",eo).off("click touchstart",E+" a").off("mouseenter",E+" li").off("mouseleave",E+" li").off("click touchstart",z).off("mouseover",M.normalScrollElements).off("mouseout",M.normalScrollElements),t(v).off("click touchstart",N),clearTimeout(te),clearTimeout(tt),e&&(//reseting the `top` or `translate` properties to 0
eI(0),//loading all the lazy load content
tu.find("img[data-src], source[data-src], audio[data-src], iframe[data-src]").each(function(){t5(t(this),"src")}),tu.find("img[data-srcset]").each(function(){t5(t(this),"srcset")}),t(E+", "+Y+", "+N).remove(),//removing inline styles
t(v).css({height:"","background-color":"",padding:""}),t(A).css({width:""}),tu.css({height:"",position:"","-ms-touch-action":"","touch-action":""}),ts.css({overflow:"",height:""}),// remove .fp-enabled class
t("html").removeClass(h),// remove .fp-responsive class
tr.removeClass(a),// remove all of the .fp-viewing- classes
t.each(tr.get(0).className.split(/\s+/),function(t,e){0===e.indexOf(u)&&tr.removeClass(e)}),//removing added classes
t(v+", "+A).each(function(){M.scrollOverflowHandler&&M.scrollOverflowHandler.remove(t(this)),t(this).removeClass(L+" "+p),t(this).attr("style",t(this).data("fp-styles"))}),em(tu),//Unwrapping content
tu.find(w+", "+X+", "+_).each(function(){//unwrap not being use in case there's no child element inside and its just text
t(this).replaceWith(this.childNodes)}),//removing the applied transition from the fullpage wrapper
tu.css({"-webkit-transition":"none",transition:"none"}),//scrolling the page to the top with no animation
ts.scrollTop(0),i=[g,C,H],t.each(i,function(e,i){t("."+i).removeClass(i)}))},//functions we want to share across files but which are not
//mean to be used on their own by developers
ta.shared={afterRenderActions:tY},M.css3&&(M.css3=/**
        * Checks for translate3d support
        * @return boolean
        * http://stackoverflow.com/questions/5661671/detecting-transform-translate3d-support
        */function(){var t,n=i.createElement("p"),s={webkitTransform:"-webkit-transform",OTransform:"-o-transform",msTransform:"-ms-transform",MozTransform:"-moz-transform",transform:"transform"};for(var r in // Add it to the body to get the computed style.
i.body.insertBefore(n,null),s)n.style[r]!==o&&(n.style[r]="translate3d(1px,1px,1px)",t=e.getComputedStyle(n).getPropertyValue(s[r]));return i.body.removeChild(n),t!==o&&t.length>0&&"none"!==t}()),M.scrollBar=M.scrollBar||M.hybrid,j=tu.find(M.sectionSelector),M.anchors.length||(M.anchors=j.filter("[data-anchor]").map(function(){return t(this).data("anchor").toString()}).get()),M.navigationTooltips.length||(M.navigationTooltips=j.filter("[data-tooltip]").map(function(){return t(this).data("tooltip").toString()}).get()),tu.css({height:"100%",position:"relative"}),//adding a class to recognize the container internally in the code
tu.addClass(s),t("html").addClass(h),//due to https://github.com/alvarotrigo/fullPage.js/issues/1502
tp=U.height(),tu.removeClass(c),tu.find(M.sectionSelector).addClass(g),tu.find(M.slideSelector).addClass(C),//styling the sections / slides / menu
t(v).each(function(e){var i,n,o,s=t(this),a=s.find(A),l=a.length;//caching the original styles to add them back on destroy('all')
s.data("fp-styles",s.attr("style")),e||0!==t(y).length||s.addClass(p),Q=t(y),s.css("height",tp+"px"),M.paddingTop&&s.css("padding-top",M.paddingTop),M.paddingBottom&&s.css("padding-bottom",M.paddingBottom),void 0!==M.sectionsColor[e]&&s.css("background-color",M.sectionsColor[e]),void 0!==M.anchors[e]&&s.attr("data-anchor",M.anchors[e]),void 0!==M.anchors[e]&&s.hasClass(p)&&eg(M.anchors[e],e),M.menu&&M.css3&&t(M.menu).closest(r).length&&t(M.menu).appendTo(tr),l>0?(i=100*l,n=100/l,a.wrapAll('<div class="'+H+'" />'),a.parent().wrap('<div class="'+I+'" />'),s.find(X).css("width",i+"%"),l>1&&(M.controlArrows&&(s.find(_).after('<div class="'+W+'"></div><div class="'+F+'"></div>'),"#fff"!=M.controlArrowColor&&(s.find(V).css("border-color","transparent transparent transparent "+M.controlArrowColor),s.find(B).css("border-color","transparent "+M.controlArrowColor+" transparent transparent")),M.loopHorizontal||s.find(B).hide()),M.slidesNavigation&&/**
        * Creates a landscape navigation bar with dots for horizontal sliders.
        */function(t,e){t.append('<div class="'+O+'"><ul></ul></div>');var i=t.find(Y);//top or bottom
i.addClass(M.slidesNavPosition);for(var n=0;n<e;n++)i.find("ul").append('<li><a href="#"><span></span></a></li>');//centering it
i.css("margin-left","-"+i.width()/2+"px"),i.find("li").first().find("a").addClass(p)}(s,l)),a.each(function(e){t(this).css("width",n+"%"),M.verticalCentered&&ey(t(this))}),(o=s.find(D)).length&&(0!==t(y).index(v)||0===t(y).index(v)&&0!==o.index())?eD(o,"internal"):a.eq(0).addClass(p)):M.verticalCentered&&ey(s)}),M.fixedElements&&M.css3&&t(M.fixedElements).appendTo(tr),M.navigation&&/**
        * Creates a vertical navigation bar.
        */function(){tr.append('<div id="'+T+'"><ul></ul></div>');var e=t(E);e.addClass(function(){return M.showActiveTooltip?"fp-show-active "+M.navigationPosition:M.navigationPosition});for(var i=0;i<t(v).length;i++){var n="";M.anchors.length&&(n=M.anchors[i]);var o='<li><a href="#'+n+'"><span></span></a>',s=M.navigationTooltips[i];void 0!==s&&""!==s&&(o+='<div class="'+k+" "+M.navigationPosition+'">'+s+"</div>"),o+="</li>",e.find("ul").append(o)}//centering it vertically
t(E).css("margin-top","-"+t(E).height()/2+"px"),//activating the current active section
t(E).find("li").eq(t(y).index(v)).find("a").addClass(p)}(),tu.find('iframe[src*="youtube.com/embed/"]').each(function(){/**
        * Adds a new parameter and its value to the `src` of a given element
        */(function(t,e){var i=t.attr("src");t.attr("src",i+(/\?/.test(i)?"&":"?")+e)})(t(this),"enablejsapi=1")}),M.scrollOverflow?Z=M.scrollOverflowHandler.init(M):tY(),tP(!0),tS(M.autoScrolling,"internal"),ed(),//setting the class for the body element
eC(),"complete"===i.readyState&&et(),U.on("load",et),U//when scrolling...
.on("scroll",tN)//detecting any change on the URL to scroll to the given anchor link
//(a way to detect back history button as we play with the hashes on the URL)
.on("hashchange",ee)//when opening a new tab (ctrl + t), `control` won't be pressed when coming back.
.blur(//when opening a new tab (ctrl + t), `control` won't be pressed when coming back.
function(){tf=!1,K=!1})//when resizing the site, we adjust the heights of the sections, slimScroll...
.resize(ep),$//Sliding with arrow keys, both, vertical and horizontal
.keydown(en)//to prevent scrolling while zooming
.keyup(eo)//Scrolls to the section when clicking the navigation bullet
.on("click touchstart",E+" a",//Scrolls to the section when clicking the navigation bullet
function(e){e.preventDefault();var i=t(this).parent().index();t2(t(v).eq(i))})//Scrolls the slider to the given slide destination for the given section
.on("click touchstart",z,//Scrolls the slider to the given slide destination for the given section
function(e){e.preventDefault();var i=t(this).closest(v).find(_),n=i.find(A).eq(t(this).closest("li").index());ec(i,n)}).on("click",P,function(){t(this).prev().trigger("click")}),//Scrolling horizontally when clicking on the slider controls.
t(v).on("click touchstart",N,//Scrolling horizontally when clicking on the slider controls.
function(){var e=t(this).closest(v);t(this).hasClass(R)?tv.m.left&&tX(e):tv.m.right&&tH(e)}),M.normalScrollElements&&($.on("mouseenter touchstart",M.normalScrollElements,function(){tP(!1)}),$.on("mouseleave touchend",M.normalScrollElements,function(){tP(!0)})));var tz=!1,tM=0;//when scrolling...
function tN(){var e;if(!M.autoScrolling||M.scrollBar){var n=U.scrollTop(),o=(h=n>tM?"down":"up",tM=n,//needed for auto-height sections to determine if we want to scroll to the top or bottom of the destination
t1=n,h),s=0,r=n+U.height()/2,a=tr.height()-U.height()===n,l=i.querySelectorAll(v);//when using `auto-height` for a small last section it won't be centered in the viewport
if(a)s=l.length-1;else if(n)for(var c=0;c<l.length;++c)// Pick the the last section which passes the middle line of the screen.
l[c].offsetTop<=r&&(s=c);else s=0;//setting the visible section as active when manually scrolling
//executing only once the first time we reach the section
if(d=(u=t(y).position().top)+U.height(),("up"==o?d>=U.scrollTop()+U.height():u<=U.scrollTop())&&!t(y).hasClass(f)&&t(y).addClass(f).siblings().removeClass(f),!//geting the last one, the current one on the screen
(e=t(l).eq(s)).hasClass(p)){tz=!0;var h,u,d,m,g,x=t(y),b=x.index(v)+1,S=ev(e),w=e.data("anchor"),T=e.index(v)+1,E=e.find(D);E.length&&(g=E.data("anchor"),m=E.index()),tm&&(e.addClass(p).siblings().removeClass(p),t.isFunction(M.onLeave)&&M.onLeave.call(x,b,T,S),t.isFunction(M.afterLoad)&&M.afterLoad.call(e,w,T),t6(x),t4(e),t8(e),eg(w,T-1),M.anchors.length&&(q=w),eE(m,g,w,T)),//small timeout in order to avoid entering in hashChange event when scrolling is not finished yet
clearTimeout(ti),ti=setTimeout(function(){tz=!1},100)}M.fitToSection&&(//for the auto adjust of the viewport to fit a whole section
clearTimeout(tn),tn=setTimeout(function(){//checking it again in case it changed during the delay
M.fitToSection&&//is the destination element bigger than the viewport?
t(y).outerHeight()<=tp&&tR()},M.fitToSectionDelay))}}/**
        * Fits the site to the nearest active section
        */function tR(){//checking fitToSection again in case it was set to false before the timeout delay
tm&&(//allows to scroll to an active section and
//if the section is already active, we prevent firing callbacks
td=!0,t2(t(y)),td=!1)}/**
        * Determines the way of scrolling up or down:
        * by 'automatically' scrolling a section or by using the default and normal scrolling.
        */function tj(e){if(tv.m[e]){var i="down"===e?tD:tA;if(M.scrollOverflow){var n=M.scrollOverflowHandler.scrollable(t(y));if(n.length>0){//is the scrollbar at the start/end of the scroll?
if(!M.scrollOverflowHandler.isScrolled("down"===e?"bottom":"top",n))return!0;i()}else i()}else i()}}/*
        * Preventing bouncing in iOS #2285
        */function tW(t){var e=t.originalEvent;M.autoScrolling&&t$(e)&&t.preventDefault()}var tB=0,tq=0,tF=0,tV=0;/* Detecting touch events

        * As we are changing the top property of the page on scrolling, we can not use the traditional way to detect it.
        * This way, the touchstart and the touch moves shows an small difference between them which is the
        * used one to determine the direction.
        */function tU(e){var i=e.originalEvent,o=t(i.target).closest(v);// additional: if one of the normalScrollElements isn't within options.normalScrollElementTouchThreshold hops up the DOM chain
if(t$(i)){M.autoScrolling&&e.preventDefault();var s=eA(i);tF=s.y,tV=s.x,o.find(_).length&&n.abs(tq-tV)>n.abs(tB-tF)?!tl&&n.abs(tq-tV)>U.outerWidth()/100*M.touchSensitivity&&(tq>tV?tv.m.right&&tH(o):tv.m.left&&tX(o)):M.autoScrolling&&tm&&n.abs(tB-tF)>U.height()/100*M.touchSensitivity&&(tB>tF?tj("down"):tF>tB&&tj("up"))}}/**
        * As IE >= 10 fires both touch and mouse events when using a mouse in a touchscreen
        * this way we make sure that is really a touch event what IE is detecting.
        */function t$(t){//if is not IE   ||  IE is detecting `touch` or `pen`
return void 0===t.pointerType||"mouse"!=t.pointerType}/**
        * Handler for the touch start event.
        */function tG(t){var e=t.originalEvent;if(M.fitToSection&&ts.stop(),t$(e)){var i=eA(e);tB=i.y,tq=i.x}}/**
        * Gets the average of the last `number` elements of the given array.
        */function tK(t,e){for(var i=0,o=t.slice(n.max(t.length-e,1)),s=0;s<o.length;s++)i+=o[s];return n.ceil(i/e)}/**
         * Detecting mousewheel scrolling
         *
         * http://blogs.sitepointstatic.com/examples/tech/mouse-wheel/index.html
         * http://www.sitepoint.com/html5-javascript-mouse-wheel/
         */var tQ=new Date().getTime();function tZ(i){var o=new Date().getTime(),s=t(m).hasClass("fp-normal-scroll");//autoscrolling and not zooming?
if(M.autoScrolling&&!K&&!s){var r=// cross-browser wheel delta
(i=i||e.event).wheelDelta||-i.deltaY||-i.detail,a=n.max(-1,n.min(1,r)),l=void 0!==i.wheelDeltaX||void 0!==i.deltaX,c=n.abs(i.wheelDeltaX)<n.abs(i.wheelDelta)||n.abs(i.deltaX)<n.abs(i.deltaY)||!l;tg.length>149&&tg.shift(),//keeping record of the previous scrollings
tg.push(n.abs(r)),M.scrollBar&&(i.preventDefault?i.preventDefault():i.returnValue=!1);//time difference between the last scroll and the current one
var h=o-tQ;return tQ=o,h>200&&(tg=[]),tm&&tK(tg,10)>=tK(tg,70)&&c&&(a<0?tj("down"):tj("up")),!1}M.fitToSection&&ts.stop()}/**
        * Slides a slider to the given direction.
        * Optional `section` param.
        */function tJ(e,i){var n=(void 0===i?t(y):i).find(_),o=n.find(A).length;// more than one slide needed and nothing should be sliding
if(n.length&&!tl&&!(o<2)){var s=n.find(D),r=null;//isn't there a next slide in the secuence?
if(!(r="left"===e?s.prev(A):s.next(A)).length){//respect loopHorizontal settin
if(!M.loopHorizontal)return;r="left"===e?s.siblings(":last"):s.siblings(":first")}tl=!0,ec(n,r,e)}}/**
        * Maintains the active slides in the viewport
        * (Because the `scroll` animation might get lost with some actions, such as when using continuousVertical)
        */function t0(){t(D).each(function(){eD(t(this),"internal")})}var t1=0;/**
        * Scrolls the site to the given element and scrolls to the slide if a callback is given.
        */function t2(e,i,o){if(void 0!==e){//there's no element to scroll, leaving the function
var s,a,l,c,h,u,d,f=(a=(s=e.position()).top,l=s.top>t1,c=a-tp+e.outerHeight(),h=M.bigSectionsDestination,e.outerHeight()>tp?(l||h)&&"bottom"!==h||(a=c):(l||td&&e.is(":last-child"))&&(a=c),/*
            Keeping record of the last scrolled position to determine the scrolling direction.
            No conventional methods can be used as the scroll bar might not be present
            AND the section might not be active if it is auto-height and didnt reach the middle
            of the viewport.
            */t1=a,a),m={element:e,callback:i,isMovementUp:o,dtop:f,yMovement:ev(e),anchorLink:e.data("anchor"),sectionIndex:e.index(v),activeSlide:e.find(D),activeSection:t(y),leavingSection:t(y).index(v)+1,//caching the value of isResizing at the momment the function is called
//because it will be checked later inside a setTimeout and the value might change
localIsResizing:td};//quiting when destination scroll is the same as the current one
if((!m.activeSection.is(e)||td)&&(!M.scrollBar||U.scrollTop()!==m.dtop||e.hasClass("fp-auto-height"))){//callback (onLeave) if the site is not just resizing and readjusting the slides
if(m.activeSlide.length&&(u=m.activeSlide.data("anchor"),d=m.activeSlide.index()),t.isFunction(M.onLeave)&&!m.localIsResizing){var g,x=m.yMovement;if(void 0!==o&&(x=o?"up":"down"),!1===M.onLeave.call(m.activeSection,m.leavingSection,m.sectionIndex+1,x))return}M.autoScrolling&&M.continuousVertical&&void 0!==m.isMovementUp&&(!m.isMovementUp&&"up"==m.yMovement||// Intending to scroll down but about to go up or
m.isMovementUp&&"down"==m.yMovement)&&((g=m).isMovementUp?t(y).before(g.activeSection.nextAll(v)):t(y).after(g.activeSection.prevAll(v).get().reverse()),// Maintain the displayed position (now that we changed the element order)
eI(t(y).position().top),// Maintain the active slides visible in the viewport
t0(),// save for later the elements that still need to be reordered
g.wrapAroundElements=g.activeSection,// Recalculate animation variables
g.dtop=g.element.position().top,g.yMovement=ev(g.element),//sections will temporally have another position in the DOM
//updating this values in case we need them
g.leavingSection=g.activeSection.index(v)+1,g.sectionIndex=g.element.index(v),m=g),m.localIsResizing||t6(m.activeSection),M.scrollOverflow&&M.scrollOverflowHandler.beforeLeave(),e.addClass(p).siblings().removeClass(p),t4(e),M.scrollOverflow&&M.scrollOverflowHandler.onLeave(),//preventing from activating the MouseWheelHandler event
//more than once if the page is scrolling
tm=!1,eE(d,u,m.anchorLink,m.sectionIndex),/**
        * Performs the vertical movement (by CSS3 or by jQuery)
        */function(e){// using CSS3 translate functionality
if(M.css3&&M.autoScrolling&&!M.scrollBar)eb("translate3d(0px, -"+n.round(e.dtop)+"px, 0px)",!0),M.scrollingSpeed?(clearTimeout(tt),tt=setTimeout(function(){t3(e)},M.scrollingSpeed)):t3(e);else{var i,o=(i={},M.autoScrolling&&!M.scrollBar?(i.options={top:-e.dtop},i.element=r):(i.options={scrollTop:e.dtop},i.element="html, body"),i);t(o.element).animate(o.options,M.scrollingSpeed,M.easing).promise().done(function(){M.scrollBar?/* Hack!
                        The timeout prevents setting the most dominant section in the viewport as "active" when the user
                        scrolled to a smaller section by using the mousewheel (auto scrolling) rather than draging the scroll bar.

                        When using scrollBar:true It seems like the scroll events still getting propagated even after the scrolling animation has finished.
                        */setTimeout(function(){t3(e)},30):t3(e)})}}(m),//flag to avoid callingn `scrollPage()` twice in case of using anchor links
q=m.anchorLink,//avoid firing it twice (as it does also on scroll)
eg(m.anchorLink,m.sectionIndex)}}}/**
        * Actions to do once the section is loaded.
        */function t3(e){e.wrapAroundElements&&e.wrapAroundElements.length&&(e.isMovementUp?t(x).before(e.wrapAroundElements):t(b).after(e.wrapAroundElements),eI(t(y).position().top),// Maintain the active slides visible in the viewport
t0()),//callback (afterLoad) if the site is not just resizing and readjusting the slides
t.isFunction(M.afterLoad)&&!e.localIsResizing&&M.afterLoad.call(e.element,e.anchorLink,e.sectionIndex+1),M.scrollOverflow&&M.scrollOverflowHandler.afterLoad(),e.localIsResizing||t8(e.element),e.element.addClass(f).siblings().removeClass(f),tm=!0,t.isFunction(e.callback)&&e.callback.call(this)}/**
        * Sets the value for the given attribute from the `data-` attribute with the same suffix
        * ie: data-srcset ==> srcset  |  data-src ==> src
        */function t5(t,e){t.attr(e,t.data(e)).removeAttr("data-"+e)}/**
        * Lazy loads image, video and audio elements.
        */function t4(e){if(M.lazyLoading){var i;t9(e).find("img[data-src], img[data-srcset], source[data-src], source[data-srcset], video[data-src], audio[data-src], iframe[data-src]").each(function(){if(i=t(this),t.each(["src","srcset"],function(t,e){var n=i.attr("data-"+e);void 0!==n&&n&&t5(i,e)}),i.is("source")){var e=i.closest("video").length?"video":"audio";i.closest(e).get(0).load()}})}}/**
        * Plays video and audio elements.
        */function t8(e){var i=t9(e);//playing HTML5 media elements
i.find("video, audio").each(function(){var e=t(this).get(0);e.hasAttribute("data-autoplay")&&"function"==typeof e.play&&e.play()}),//youtube videos
i.find('iframe[src*="youtube.com/embed/"]').each(function(){var e=t(this).get(0);e.hasAttribute("data-autoplay")&&t7(e),//in case the URL was not loaded yet. On page load we need time for the new URL (with the API string) to load.
e.onload=function(){e.hasAttribute("data-autoplay")&&t7(e)}})}/**
        * Plays a youtube video
        */function t7(t){t.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}',"*")}/**
        * Stops video and audio elements.
        */function t6(e){var i=t9(e);//stopping HTML5 media elements
i.find("video, audio").each(function(){var e=t(this).get(0);e.hasAttribute("data-keepplaying")||"function"!=typeof e.pause||e.pause()}),//youtube videos
i.find('iframe[src*="youtube.com/embed/"]').each(function(){var e=t(this).get(0);/youtube\.com\/embed\//.test(t(this).attr("src"))&&!e.hasAttribute("data-keepplaying")&&t(this).get(0).contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}',"*")})}/**
        * Gets the active slide (or section) for the given section
        */function t9(e){var i=e.find(D);return i.length&&(e=t(i)),e}/**
        * Scrolls to the anchor in the URL when loading the site
        */function et(){var t=ei(),e=t.section,i=t.slide;e&&(M.animateAnchor?ew(e,i):tI(e,i))}/**
        * Detecting any change on the URL to scroll to the given anchor link
        * (a way to detect back history button as we play with the hashes on the URL)
        */function ee(){if(!tz&&!M.lockAnchors){var t=ei(),e=t.section,i=t.slide,n=void 0===q,o=void 0===q&&void 0===i&&!tl;e&&e.length&&(e&&e!==q&&!n||o||!tl&&G!=i)&&ew(e,i)}}//gets the URL anchors (section and slide)
function ei(){var t,i,n=e.location.hash;if(n.length){//getting the anchor link in the URL and deleting the `#`
var o=n.replace("#","").split("/"),s=n.indexOf("#/")>-1;t=s?"/"+o[1]:decodeURIComponent(o[0]);var r=s?o[2]:o[1];r&&r.length&&(i=decodeURIComponent(r))}return{section:t,slide:i}}//Sliding with arrow keys, both, vertical and horizontal
function en(e){clearTimeout(to);var i=t(":focus"),n=e.which;//tab?
9===n?/**
        * Makes sure the tab key will only focus elements within the current section/slide
        * preventing this way from breaking the page.
        * Based on "Modals and keyboard traps"
        * from https://developers.google.com/web/fundamentals/accessibility/focus/using-tabindex
        */function(e){var i=e.shiftKey,n=t(":focus"),o=t(y),s=o.find(D),r=(s.length?s:o).find('a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]').not('[tabindex="-1"]');function a(t){return t.preventDefault(),r.first().focus()}n.length?n.closest(y,D).length||(n=a(e)):a(e),(!i&&n.is(r.last())||i&&n.is(r.first()))&&e.preventDefault()}(e):i.is("textarea")||i.is("input")||i.is("select")||"true"===i.attr("contentEditable")||""===i.attr("contentEditable")||!M.keyboardScrolling||!M.autoScrolling||(t.inArray(n,[40,38,32,33,34])>-1&&e.preventDefault(),K=e.ctrlKey,to=setTimeout(function(){/**
        * Keydown event
        */(function(e){var i=e.shiftKey;//do nothing if we can not scroll or we are not using horizotnal key arrows.
if(!(!tm&&0>[37,39].indexOf(e.which)))switch(e.which){//up
case 38:case 33:tv.k.up&&tA();break;//down
case 32:if(i&&tv.k.up){tA();break}/* falls through */case 40:case 34:tv.k.down&&tD();break;//Home
case 36:tv.k.up&&t_(1);break;//End
case 35:tv.k.down&&t_(t(v).length);break;//left
case 37:tv.k.left&&tX();break;//right
case 39:tv.k.right&&tH();break;default:return;// exit this handler for other keys
}})(e)},150))}//to prevent scrolling while zooming
function eo(t){tf&&(K=t.ctrlKey)}//binding the mousemove when the mouse's middle button is released
function es(t){//middle button
2==t.which&&(ea=t.pageY,tu.on("mousemove",el))}//unbinding the mousemove when the mouse's middle button is released
function er(t){//middle button
2==t.which&&tu.off("mousemove")}/**
        * Detecting the direction of the mouse movement.
        * Used only for the middle button of the mouse.
        */var ea=0;function el(t){tm&&(t.pageY<ea&&tv.m.up?tA():t.pageY>ea&&tv.m.down&&tD()),ea=t.pageY}/**
        * Scrolls horizontal sliders.
        */function ec(e,i,o){var s,r,a=e.closest(v),l={slides:e,destiny:i,direction:o,destinyPos:i.position(),slideIndex:i.index(),section:a,sectionIndex:a.index(v),anchorLink:a.data("anchor"),slidesNav:a.find(Y),slideAnchor:eP(i),prevSlide:a.find(D),prevSlideIndex:a.find(D).index(),//caching the value of isResizing at the momment the function is called
//because it will be checked later inside a setTimeout and the value might change
localIsResizing:td};if(l.xMovement=(s=l.prevSlideIndex)==(r=l.slideIndex)?"none":s>r?"left":"right",l.localIsResizing||(tm=!1),M.onSlideLeave&&!l.localIsResizing&&"none"!==l.xMovement&&t.isFunction(M.onSlideLeave)&&!1===M.onSlideLeave.call(l.prevSlide,l.anchorLink,l.sectionIndex+1,l.prevSlideIndex,l.direction,l.slideIndex)){tl=!1;return}i.addClass(p).siblings().removeClass(p),l.localIsResizing||(t6(l.prevSlide),t4(i)),!M.loopHorizontal&&M.controlArrows&&(//hidding it for the fist slide, showing for the rest
a.find(B).toggle(0!==l.slideIndex),//hidding it for the last slide, showing for the rest
a.find(V).toggle(!i.is(":last-child"))),a.hasClass(p)&&!l.localIsResizing&&eE(l.slideIndex,l.slideAnchor,l.anchorLink,l.sectionIndex),/**
        * Performs the horizontal movement. (CSS3 or jQuery)
        *
        * @param fireCallback {Bool} - determines whether or not to fire the callback
        */function(t,e,i){var o=e.destinyPos;if(M.css3){var s="translate3d(-"+n.round(o.left)+"px, 0px, 0px)";ef(t.find(X)).css(e_(s)),te=setTimeout(function(){i&&eh(e)},M.scrollingSpeed,M.easing)}else t.animate({scrollLeft:n.round(o.left)},M.scrollingSpeed,M.easing,function(){i&&eh(e)})}(e,l,!0)}function eh(e){var i,n;i=e.slidesNav,n=e.slideIndex,i.find(d).removeClass(p),i.find("li").eq(n).find("a").addClass(p),e.localIsResizing||(t.isFunction(M.afterSlideLoad)&&M.afterSlideLoad.call(e.destiny,e.anchorLink,e.sectionIndex+1,e.slideAnchor,e.slideIndex),//needs to be inside the condition to prevent problems with continuousVertical and scrollHorizontally
//and to prevent double scroll right after a windows resize
tm=!0,t8(e.destiny)),//letting them slide again
tl=!1}var eu=tp;//when resizing the site, we adjust the heights of the sections, slimScroll...
function ep(){// rebuild immediately on touch devices
if(//checking if it needs to get responsive
ed(),tc){var e=t(i.activeElement);//if the keyboard is NOT visible
if(!e.is("textarea")&&!e.is("input")&&!e.is("select")){var o=U.height();//making sure the change in the viewport size is enough to force a rebuild. (20 % of the window to avoid problems when hidding scroll bars)
n.abs(o-eu)>20*n.max(eu,o)/100&&(tL(!0),eu=o)}}else //in order to call the functions only when the resize is finished
//http://stackoverflow.com/questions/4298612/jquery-how-to-call-resize-event-only-once-its-finished-resizing
clearTimeout(J),J=setTimeout(function(){tL(!0)},350)}/**
        * Checks if the site needs to get responsive and disables autoScrolling if so.
        * A class `fp-responsive` is added to the plugin's container in case the user wants to use it for his own responsive CSS.
        */function ed(){var t=M.responsive||M.responsiveWidth,e=M.responsiveHeight,i=t&&U.outerWidth()<t,n=e&&U.height()<e;//backwards compatiblity
t&&e?tO(i||n):t?tO(i):e&&tO(n)}/**
        * Adds transition animations for the given element
        */function ef(t){var e="all "+M.scrollingSpeed+"ms "+M.easingcss3;return t.removeClass(l),t.css({"-webkit-transition":e,transition:e})}/**
        * Remove transition animations for the given element
        */function em(t){return t.addClass(l)}/**
        * Sets to active the current menu and vertical nav items.
        */function eg(e,i){M.menu&&(t(M.menu).find(d).removeClass(p),t(M.menu).find('[data-menuanchor="'+e+'"]').addClass(p)),M.navigation&&(t(E).find(d).removeClass(p),e?t(E).find('a[href="#'+e+'"]').addClass(p):t(E).find("li").eq(i).find("a").addClass(p))}/**
        * Retuns `up` or `down` depending on the scrolling movement to reach its destination
        * from the current section.
        */function ev(e){var i=t(y).index(v),n=e.index(v);return i==n?"none":i>n?"up":"down"}function ey(e){//In case we are styling for the 2nd time as in with reponsiveSlides
if(!e.hasClass(L)){var i=t('<div class="'+S+'" />').height(ex(e));e.addClass(L).wrapInner(i)}}function ex(t){var e=tp;if(M.paddingTop||M.paddingBottom){var i=t;i.hasClass(g)||(i=t.closest(v));var n=parseInt(i.css("padding-top"))+parseInt(i.css("padding-bottom"));e=tp-n}return e}/**
        * Adds a css3 transform property to the container class with or without animation depending on the animated param.
        */function eb(t,e){e?ef(tu):em(tu),tu.css(e_(t)),//syncronously removing the class after the animation has been applied.
setTimeout(function(){tu.removeClass(l)},10)}/**
        * Gets a section by its anchor / index
        */function eS(e){var i=tu.find(v+'[data-anchor="'+e+'"]');if(!i.length){var n=void 0!==e?e-1:0;i=t(v).eq(n)}return i}/**
        * Scrolls to the given section and slide anchors
        */function ew(t,e){var i=eS(t);//do nothing if there's no section with the given anchor name
if(i.length){var n,o,s=(n=e,(o=i.find(A+'[data-anchor="'+n+'"]')).length||(n=void 0!==n?n:0,o=i.find(A).eq(n)),o);//we need to scroll to the section and then to the slide
t===q||i.hasClass(p)?eT(s):t2(i,function(){eT(s)})}}/**
        * Scrolls the slider to the given slide destination for the given section
        */function eT(t){t.length&&ec(t.closest(_),t)}/**
        * Sets the state of the website depending on the active section/slide.
        * It changes the URL hash when needed and updates the body class.
        */function eE(t,e,i,n){var o="";M.anchors.length&&!M.lockAnchors&&(t?(void 0!==i&&(o=i),void 0===e&&(e=t),G=e,ek(o+"/"+e)):(void 0!==t&&(G=e),ek(i))),eC()}/**
        * Sets the URL hash.
        */function ek(t){if(M.recordHistory)location.hash=t;else if(tc||th)e.history.replaceState(o,o,"#"+t);else{var i=e.location.href.split("#")[0];e.location.replace(i+"#"+t)}}/**
        * Gets the anchor for the given slide / section. Its index will be used if there's none.
        */function eP(t){var e=t.data("anchor"),i=t.index();return void 0===e&&(e=i),e}/**
        * Sets a class for the body of the page depending on the active section / slide
        */function eC(){var e=t(y),i=e.find(D),n=eP(e),o=eP(i),s=String(n);i.length&&(s=s+"-"+o),//changing slash for dash to make it a valid CSS style
s=s.replace("/","-").replace("#","");//removing previous anchor classes
var r=RegExp("\\b\\s?"+u+"-[^\\s]+\\b","g");tr[0].className=tr[0].className.replace(r,""),//adding the current anchor
tr.addClass(u+"-"+s)}/**
        * Gets the pageX and pageY properties depending on the browser.
        * https://github.com/alvarotrigo/fullPage.js/issues/194#issuecomment-34069854
        */function eA(t){var e=[];return e.y=void 0!==t.pageY&&(t.pageY||t.pageX)?t.pageY:t.touches[0].pageY,e.x=void 0!==t.pageX&&(t.pageY||t.pageX)?t.pageX:t.touches[0].pageX,th&&t$(t)&&(M.scrollBar||!M.autoScrolling)&&(e.y=t.touches[0].pageY,e.x=t.touches[0].pageX),e}/**
        * Slides silently (with no animation) the active slider to the given slide.
        * @param noCallback {bool} true or defined -> no callbacks
        */function eD(t,e){tT(0,"internal"),void 0!==e&&(td=!0),ec(t.closest(_),t),void 0!==e&&(td=!1),tT(tb.scrollingSpeed,"internal")}/**
        * Scrolls silently (with no animation) the page to the given Y position.
        */function eI(t){// The first section can have a negative value in iOS 10. Not quite sure why: -0.0142822265625
// that's why we round it to 0.
var e=n.round(t);M.css3&&M.autoScrolling&&!M.scrollBar?eb("translate3d(0px, -"+e+"px, 0px)",!1):M.autoScrolling&&!M.scrollBar?tu.css("top",-e):ts.scrollTop(e)}/**
        * Returns the cross-browser transform string.
        */function e_(t){return{"-webkit-transform":t,"-moz-transform":t,"-ms-transform":t,transform:t}}/**
        * Allowing or disallowing the mouse/swipe scroll in a given direction. (not for keyboard)
        * @type  m (mouse) or k (keyboard)
        */function eH(e,i,n){//up, down, left, right
"all"!==i?tv[n][i]=e:t.each(Object.keys(tv[n]),function(t,i){tv[n][i]=e})}/*
        * Sets the state for a variable with multiple states (original, and temporal)
        * Some variables such as `autoScrolling` or `recordHistory` might change automatically its state when using `responsive` or `autoScrolling:false`.
        * This function is used to keep track of both states, the original and the temporal one.
        * If type is not 'internal', then we assume the user is globally changing the variable.
        */function eX(t,e,i){M[t]=e,"internal"!==i&&(tb[t]=e)}/**
        * Displays warnings
        */function eL(){if(t("html").hasClass(h)){eO("error","Fullpage.js can only be initialized once and you are doing it multiple times!");return}M.continuousVertical&&(M.loopTop||M.loopBottom)&&(M.continuousVertical=!1,eO("warn","Option `loopTop/loopBottom` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled")),M.scrollBar&&M.scrollOverflow&&eO("warn","Option `scrollBar` is mutually exclusive with `scrollOverflow`. Sections with scrollOverflow might not work well in Firefox"),M.continuousVertical&&(M.scrollBar||!M.autoScrolling)&&(M.continuousVertical=!1,eO("warn","Scroll bars (`scrollBar:true` or `autoScrolling:false`) are mutually exclusive with `continuousVertical`; `continuousVertical` disabled")),M.scrollOverflow&&!M.scrollOverflowHandler&&(M.scrollOverflow=!1,eO("error","The option `scrollOverflow:true` requires the file `scrolloverflow.min.js`. Please include it before fullPage.js.")),//using extensions? Wrong file!
t.each(["fadingEffect","continuousHorizontal","scrollHorizontally","interlockedSlides","resetSliders","responsiveSlides","offsetSections","dragAndMove","scrollOverflowReset","parallax"],function(t,e){//is the option set to true?
M[e]&&eO("warn","fullpage.js extensions require jquery.fullpage.extensions.min.js file instead of the usual jquery.fullpage.js. Requested: "+e)}),//anchors can not have the same value as any element ID or NAME
t.each(M.anchors,function(e,i){//case insensitive selectors (http://stackoverflow.com/a/19465187/1081396)
var n=$.find("[name]").filter(function(){return t(this).attr("name")&&t(this).attr("name").toLowerCase()==i.toLowerCase()}),o=$.find("[id]").filter(function(){return t(this).attr("id")&&t(this).attr("id").toLowerCase()==i.toLowerCase()});(o.length||n.length)&&(eO("error","data-anchor tags can not have the same value as any `id` element on the site (or `name` element for IE)."),o.length&&eO("error",'"'+i+'" is is being used by another element `id` property'),n.length&&eO("error",'"'+i+'" is is being used by another element `name` property'))})}/**
        * Shows a message in the console of the given type.
        */function eO(t,e){console&&console[t]&&console[t]("fullPage: "+e)}};//end of $.fn.fullpage
},"function"==typeof define&&define.amd?define(["jquery"],function(t){return p(t,u,u.document,u.Math)}):b?b=p(g("fa1Gd"),u,u.document,u.Math):p(jQuery,u,u.document,u.Math);const S=["en","de","it","pl"],w={en:"+6285654885575",de:"+6285654885575",it:"+6281536085809",pl:"+6285654885575"};function T(){let e=/*@__PURE__*/t(v)(this),i=e.attr("data-lng");/*@__PURE__*/t(v).html5Translate(i),E(i),localStorage.setItem("language",i)}function E(e="en"){let i=w[e];/*@__PURE__*/t(v)("#telephone").html(`<a href="tel:${i}" class="phone">${i}</a>`)}/*@__PURE__*/t(v).html5Translate=function(e){/*@__PURE__*/t(v)("[data-translate-key]").each(function(){let i=/*@__PURE__*/t(v)(this);i.html(y[e][i.data("translateKey")])})},/*@__PURE__*/t(v)(function(){let e=navigator?.language||navigator?.userLanguage,i=e?.split("-")[0],n=S.includes(i),o=localStorage.getItem("language"),s=o;o||(s=n?i:"en"),/*@__PURE__*/t(v).html5Translate(s),E(s),window.innerWidth>=768&&/*@__PURE__*/t(v)("#fullpage").fullpage({paddingTop:"48px",scrollHorizontally:!1,navigation:!0,scrollBar:!0,sectionSelector:".scroll",scrollOverflow:!0}),/*@__PURE__*/t(v)(".language").on("click",T)});//# sourceMappingURL=index.32d009a6.js.map

//# sourceMappingURL=index.32d009a6.js.map
