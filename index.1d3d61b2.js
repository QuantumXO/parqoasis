function e(e){return e&&e.__esModule?e.default:e}var t,n,o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={},r={},a=o.parcelRequirebfda;null==a&&((a=function(e){if(e in i)return i[e].exports;if(e in r){var t=r[e];delete r[e];var n={id:e,exports:{}};return i[e]=n,t.call(n.exports,n,n.exports),n.exports}var o=Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){r[e]=t},o.parcelRequirebfda=a),a.register("fa1Gd",function(e,t){var n,o;n="undefined"!=typeof window?window:e.exports,o=function(e,t){var n,o=[],i=Object.getPrototypeOf,r=o.slice,a=o.flat?function(e){return o.flat.call(e)}:function(e){return o.concat.apply([],e)},s=o.push,l=o.indexOf,c={},u=c.toString,f=c.hasOwnProperty,d=f.toString,p=d.call(Object),h={},m=function(e){// Support: Chrome <=57, Firefox <=52
// In some browsers, typeof returns "function" for HTML <object> elements
// (i.e., `typeof document.createElement( "object" ) === "function"`).
// We don't want to classify *any* DOM node as a function.
// Support: QtWeb <=3.8.5, WebKit <=534.34, wkhtmltopdf tool <=0.12.5
// Plus for old WebKit, typeof returns "function" for HTML collections
// (e.g., `typeof document.getElementsByTagName("div") === "function"`). (gh-4756)
return"function"==typeof e&&"number"!=typeof e.nodeType&&"function"!=typeof e.item},g=function(e){return null!=e&&e===e.window},v=e.document,y={type:!0,src:!0,nonce:!0,noModule:!0};function x(e,t,n){var o,i,r=(n=n||v).createElement("script");if(r.text=e,t)for(o in y)// Support: Firefox 64+, Edge 18+
// Some browsers don't support the "nonce" property on scripts.
// On the other hand, just using `getAttribute` is not enough as
// the `nonce` attribute is reset to an empty string whenever it
// becomes browsing-context connected.
// See https://github.com/whatwg/html/issues/2369
// See https://html.spec.whatwg.org/#nonce-attributes
// The `node.getAttribute` check was added for the sake of
// `jQuery.globalEval` so that it can fake a nonce-containing node
// via an object.
(i=t[o]||t.getAttribute&&t.getAttribute(o))&&r.setAttribute(o,i);n.head.appendChild(r).parentNode.removeChild(r)}function b(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?c[u.call(e)]||"object":typeof e}/* global Symbol */// Defining this global in .eslintrc.json would create a danger of using the global
// unguarded in another place, it seems safer to define global only for this module
var w="3.7.1",T=/HTML$/i,S=function(e,t){// The jQuery object is actually just the init constructor 'enhanced'
// Need init if jQuery is called (just allow error to be thrown if not included)
return new S.fn.init(e,t)};function C(e){// Support: real iOS 8.2 only (not reproducible in simulator)
// `in` check used to prevent JIT error (gh-2145)
// hasOwn isn't used here due to false negatives
// regarding Nodelist length in IE
var t=!!e&&"length"in e&&e.length,n=b(e);return!(m(e)||g(e))&&("array"===n||0===t||"number"==typeof t&&t>0&&t-1 in e)}function k(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}S.fn=S.prototype={// The current version of jQuery being used
jquery:w,constructor:S,// The default length of a jQuery object is 0
length:0,toArray:function(){return r.call(this)},// Get the Nth element in the matched element set OR
// Get the whole matched element set as a clean array
get:function(e){return(// Return all the elements in a clean array
null==e?r.call(this):e<0?this[e+this.length]:this[e])},// Take an array of elements and push it onto the stack
// (returning the new matched element set)
pushStack:function(e){// Build a new jQuery matched element set
var t=S.merge(this.constructor(),e);// Return the newly-formed element set
return(// Add the old object onto the stack (as a reference)
t.prevObject=this,t)},// Execute a callback for every element in the matched set.
each:function(e){return S.each(this,e)},map:function(e){return this.pushStack(S.map(this,function(t,n){return e.call(t,n,t)}))},slice:function(){return this.pushStack(r.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(S.grep(this,function(e,t){return(t+1)%2}))},odd:function(){return this.pushStack(S.grep(this,function(e,t){return t%2}))},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(n>=0&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},// For internal use only.
// Behaves like an Array's method, not like a jQuery method.
push:s,sort:o.sort,splice:o.splice},S.extend=S.fn.extend=function(){var e,t,n,o,i,r,a=arguments[0]||{},s=1,l=arguments.length,c=!1;for("boolean"==typeof a&&(c=a,// Skip the boolean and the target
a=arguments[s]||{},s++),"object"==typeof a||m(a)||(a={}),s===l&&(a=this,s--);s<l;s++)// Only deal with non-null/undefined values
if(null!=(e=arguments[s]))for(t in e)o=e[t],"__proto__"!==t&&a!==o&&(c&&o&&(S.isPlainObject(o)||(i=Array.isArray(o)))?(n=a[t],r=i&&!Array.isArray(n)?[]:i||S.isPlainObject(n)?n:{},i=!1,// Never move original objects, clone them
a[t]=S.extend(c,r,o)):void 0!==o&&(a[t]=o));// Return the modified object
return a},S.extend({// Unique for each copy of jQuery on the page
expando:"jQuery"+(w+Math.random()).replace(/\D/g,""),// Assume jQuery is ready without the ready module
isReady:!0,error:function(e){throw Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return(// Detect obvious negatives
// Use toString instead of jQuery.type to catch host objects
!!e&&"[object Object]"===u.call(e)&&(!(t=i(e))||"function"==typeof// Objects with prototype are plain iff they were constructed by a global Object function
(n=f.call(t,"constructor")&&t.constructor)&&d.call(n)===p))},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},// Evaluates a script in a provided context; falls back to the global one
// if not specified.
globalEval:function(e,t,n){x(e,{nonce:t&&t.nonce},n)},each:function(e,t){var n,o=0;if(C(e))for(n=e.length;o<n&&!1!==t.call(e[o],o,e[o]);o++);else for(o in e)if(!1===t.call(e[o],o,e[o]))break;return e},// Retrieve the text value of an array of DOM nodes
text:function(e){var t,n="",o=0,i=e.nodeType;if(!i)for(;t=e[o++];)n+=S.text(t);return 1===i||11===i?e.textContent:9===i?e.documentElement.textContent:3===i||4===i?e.nodeValue:n},// results is for internal usage only
makeArray:function(e,t){var n=t||[];return null!=e&&(C(Object(e))?S.merge(n,"string"==typeof e?[e]:e):s.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:l.call(t,e,n)},isXMLDoc:function(e){var t=e&&e.namespaceURI,n=e&&(e.ownerDocument||e).documentElement;// Assume HTML when documentElement doesn't yet exist, such as inside
// document fragments.
return!T.test(t||n&&n.nodeName||"HTML")},// Support: Android <=4.0 only, PhantomJS 1 only
// push.apply(_, arraylike) throws on ancient WebKit
merge:function(e,t){for(var n=+t.length,o=0,i=e.length;o<n;o++)e[i++]=t[o];return e.length=i,e},grep:function(e,t,n){// Go through the array, only saving the items
// that pass the validator function
for(var o=[],i=0,r=e.length,a=!n;i<r;i++)!t(e[i],i)!==a&&o.push(e[i]);return o},// arg is for internal usage only
map:function(e,t,n){var o,i,r=0,s=[];// Go through the array, translating each of the items to their new values
if(C(e))for(o=e.length;r<o;r++)null!=(i=t(e[r],r,n))&&s.push(i);else for(r in e)null!=(i=t(e[r],r,n))&&s.push(i);// Flatten any nested arrays
return a(s)},// A global GUID counter for objects
guid:1,// jQuery.support is not used in Core but other projects attach their
// properties to it so it needs to exist.
support:h}),"function"==typeof Symbol&&(S.fn[Symbol.iterator]=o[Symbol.iterator]),// Populate the class2type map
S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){c["[object "+t+"]"]=t.toLowerCase()});var E=o.pop,A=o.sort,D=o.splice,j="[\\x20\\t\\r\\n\\f]",L=RegExp("^"+j+"+|((?:^|[^\\\\])(?:\\\\.)*)"+j+"+$","g");// Note: an element does not contain itself
S.contains=function(e,t){var n=t&&t.parentNode;return e===n||!!(n&&1===n.nodeType&&// Support: IE 9 - 11+
// IE doesn't have `contains` on SVG.
(e.contains?e.contains(n):e.compareDocumentPosition&&16&e.compareDocumentPosition(n)))};// CSS string/identifier serialization
// https://drafts.csswg.org/cssom/#common-serializing-idioms
var P=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;function I(e,t){return t?// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
"\x00"===e?"�":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e}S.escapeSelector=function(e){return(e+"").replace(P,I)},function(){var t,n,i,a,c,u,d,p,m,g,y=s,x=S.expando,b=0,w=0,T=ee(),C=ee(),P=ee(),I=ee(),O=function(e,t){return e===t&&(c=!0),0},N="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",// https://www.w3.org/TR/css-syntax-3/#ident-token-diagram
R="(?:\\\\[\\da-fA-F]{1,6}"+j+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\x00-\\x7f])+",z="\\["+j+"*("+R+")(?:"+j+// Operator (capture 2)
"*([*^$|!~]?=)"+j+// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+R+"))|)"+j+"*\\]",H=":("+R+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+z+")*)|.*)\\)|)",M=RegExp(j+"+","g"),q=RegExp("^"+j+"*,"+j+"*"),B=RegExp("^"+j+"*([>+~]|"+j+")"+j+"*"),F=RegExp(j+"|>"),W=new RegExp(H),_=RegExp("^"+R+"$"),$={ID:RegExp("^#("+R+")"),CLASS:RegExp("^\\.("+R+")"),TAG:RegExp("^("+R+"|[*])"),ATTR:RegExp("^"+z),PSEUDO:RegExp("^"+H),CHILD:RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+j+"*(even|odd|(([+-]|)(\\d*)n|)"+j+"*(?:([+-]|)"+j+"*(\\d+)|))"+j+"*\\)|)","i"),bool:RegExp("^(?:"+N+")$","i"),// For use in libraries implementing .is()
// We use this for POS matching in `select`
needsContext:RegExp("^"+j+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+j+"*((?:-\\d)?\\d*)"+j+"*\\)|)(?=[^-]|$)","i")},V=/^(?:input|select|textarea|button)$/i,U=/^h\d$/i,X=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,G=/[+~]/,// https://www.w3.org/TR/CSS21/syndata.html#escaped-characters
Y=RegExp("\\\\[\\da-fA-F]{1,6}"+j+"?|\\\\([^\\r\\n\\f])","g"),K=function(e,t){var n="0x"+e.slice(1)-65536;return t||(n<0?String.fromCharCode(n+65536):String.fromCharCode(n>>10|55296,1023&n|56320))},// Support: IE 9 - 11+, Edge 12 - 18+
// Removing the function wrapper causes a "Permission Denied"
// error in IE/Edge.
Q=function(){ea()},J=eu(function(e){return!0===e.disabled&&k(e,"fieldset")},{dir:"parentNode",next:"legend"});// Optimize for push.apply( _, NodeList )
try{y.apply(o=r.call(v.childNodes),v.childNodes),// Support: Android <=4.0
// Detect silently failing push.apply
// eslint-disable-next-line no-unused-expressions
o[v.childNodes.length].nodeType}catch(e){y={apply:function(e,t){s.apply(e,r.call(t))},call:function(e){s.apply(e,r.call(arguments,1))}}}function Z(e,t,n,o){var i,r,a,s,l,c,f,d=t&&t.ownerDocument,g=t?t.nodeType:9;// Return early from calls with invalid selector or context
if(n=n||[],"string"!=typeof e||!e||1!==g&&9!==g&&11!==g)return n;// Try to shortcut find operations (as opposed to filters) in HTML documents
if(!o&&(ea(t),t=t||u,p)){// If the selector is sufficiently simple, try using a "get*By*" DOM method
// (excepting DocumentFragment context, where the methods don't exist)
if(11!==g&&(l=X.exec(e))){// ID selector
if(i=l[1]){// Document context
if(9===g){if(!(a=t.getElementById(i)))return n;if(a.id===i)return y.call(n,a),n;// Element context
}else // getElementById can match elements by name instead of ID
if(d&&(a=d.getElementById(i))&&Z.contains(t,a)&&a.id===i)return y.call(n,a),n}else if(l[2])return y.apply(n,t.getElementsByTagName(e)),n;else if((i=l[3])&&t.getElementsByClassName)return y.apply(n,t.getElementsByClassName(i)),n}// Take advantage of querySelectorAll
if(!I[e+" "]&&(!m||!m.test(e))){// qSA considers elements outside a scoping root when evaluating child or
// descendant combinators, which is not what we want.
// In such cases, we work around the behavior by prefixing every selector in the
// list with an ID selector referencing the scope context.
// The technique has to be used as well when a leading combinator is used
// as such selectors are not recognized by querySelectorAll.
// Thanks to Andrew Dupont for this technique.
if(f=e,d=t,1===g&&(F.test(e)||B.test(e))){for(// Expand context for sibling selectors
(d=G.test(e)&&er(t.parentNode)||t)==t&&h.scope||((s=t.getAttribute("id"))?s=S.escapeSelector(s):t.setAttribute("id",s=x)),r=// Prefix every selector in the list
(c=el(e)).length;r--;)c[r]=(s?"#"+s:":scope")+" "+ec(c[r]);f=c.join(",")}try{return y.apply(n,d.querySelectorAll(f)),n}catch(t){I(e,!0)}finally{s===x&&t.removeAttribute("id")}}}// All others
return eh(e.replace(L,"$1"),t,n,o)}/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */function ee(){var e=[];function t(o,i){return e.push(o+" ")>n.cacheLength&&delete t[e.shift()],t[o+" "]=i}return t}/**
 * Mark a function for special use by jQuery selector module
 * @param {Function} fn The function to mark
 */function et(e){return e[x]=!0,e}/**
 * Support testing using an element
 * @param {Function} fn Passed the created element and returns a boolean result
 */function en(e){var t=u.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),// release memory in IE
t=null}}/**
 * Returns a function to use in pseudos for :enabled/:disabled
 * @param {Boolean} disabled true for :disabled; false for :enabled
 */function eo(e){// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
return function(t){// Only certain elements can match :enabled or :disabled
// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
if("form"in t)return(// Check for inherited disabledness on relevant non-disabled elements:
// * listed form-associated elements in a disabled fieldset
//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
// * option elements in a disabled optgroup
//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
// All such elements have a "form" property.
t.parentNode&&!1===t.disabled?// Option elements defer to a parent optgroup if present
"label"in t?"label"in t.parentNode?t.parentNode.disabled===e:t.disabled===e:t.isDisabled===e||// Where there is no isDisabled, check manually
!e!==t.isDisabled&&J(t)===e:t.disabled===e);return"label"in t&&t.disabled===e}}/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */function ei(e){return et(function(t){return t=+t,et(function(n,o){// Match elements found at the specified indexes
for(var i,r=e([],n.length,t),a=r.length;a--;)n[i=r[a]]&&(n[i]=!(o[i]=n[i]))})})}/**
 * Checks a node for validity as a jQuery selector context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */function er(e){return e&&void 0!==e.getElementsByTagName&&e}/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [node] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */function ea(e){var t,o=e?e.ownerDocument||e:v;return o!=u&&9===o.nodeType&&o.documentElement&&(d=// Update global variables
(u=o).documentElement,p=!S.isXMLDoc(u),// Support: iOS 7 only, IE 9 - 11+
// Older browsers didn't support unprefixed `matches`.
g=d.matches||d.webkitMatchesSelector||d.msMatchesSelector,d.msMatchesSelector&&// Support: IE 11+, Edge 17 - 18+
// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
// two documents; shallow comparisons work.
// eslint-disable-next-line eqeqeq
v!=u&&(t=u.defaultView)&&t.top!==t&&t.addEventListener("unload",Q),// Support: IE <10
// Check if getElementById returns elements by name
// The broken getElementById methods don't pick up programmatically-set names,
// so use a roundabout getElementsByName test
h.getById=en(function(e){return d.appendChild(e).id=S.expando,!u.getElementsByName||!u.getElementsByName(S.expando).length}),// Support: IE 9 only
// Check to see if it's possible to do matchesSelector
// on a disconnected node.
h.disconnectedMatch=en(function(e){return g.call(e,"*")}),// Support: IE 9 - 11+, Edge 12 - 18+
// IE/Edge don't support the :scope pseudo-class.
h.scope=en(function(){return u.querySelectorAll(":scope")}),// Support: Chrome 105 - 111 only, Safari 15.4 - 16.3 only
// Make sure the `:has()` argument is parsed unforgivingly.
// We include `*` in the test to detect buggy implementations that are
// _selectively_ forgiving (specifically when the list includes at least
// one valid selector).
// Note that we treat complete lack of support for `:has()` as if it were
// spec-compliant support, which is fine because use of `:has()` in such
// environments will fail in the qSA path and fall back to jQuery traversal
// anyway.
h.cssHas=en(function(){try{return u.querySelector(":has(*,:jqfake)"),!1}catch(e){return!0}}),h.getById?(n.filter.ID=function(e){var t=e.replace(Y,K);return function(e){return e.getAttribute("id")===t}},n.find.ID=function(e,t){if(void 0!==t.getElementById&&p){var n=t.getElementById(e);return n?[n]:[]}}):(n.filter.ID=function(e){var t=e.replace(Y,K);return function(e){var n=void 0!==e.getAttributeNode&&e.getAttributeNode("id");return n&&n.value===t}},// Support: IE 6 - 7 only
// getElementById is not reliable as a find shortcut
n.find.ID=function(e,t){if(void 0!==t.getElementById&&p){var n,o,i,r=t.getElementById(e);if(r){if(// Verify the id attribute
(n=r.getAttributeNode("id"))&&n.value===e)return[r];for(// Fall back on getElementsByName
i=t.getElementsByName(e),o=0;r=i[o++];)if((n=r.getAttributeNode("id"))&&n.value===e)return[r]}return[]}}),// Tag
n.find.TAG=function(e,t){return void 0!==t.getElementsByTagName?t.getElementsByTagName(e):t.querySelectorAll(e)},// Class
n.find.CLASS=function(e,t){if(void 0!==t.getElementsByClassName&&p)return t.getElementsByClassName(e)},/* QSA/matchesSelector
	---------------------------------------------------------------------- */// QSA and matchesSelector support
m=[],// Build QSA regex
// Regex strategy adopted from Diego Perini
en(function(e){var t;d.appendChild(e).innerHTML="<a id='"+x+"' href='' disabled='disabled'></a><select id='"+x+"-\r\\' disabled='disabled'><option selected=''></option></select>",e.querySelectorAll("[selected]").length||m.push("\\["+j+"*(?:value|"+N+")"),e.querySelectorAll("[id~="+x+"-]").length||m.push("~="),e.querySelectorAll("a#"+x+"+*").length||m.push(".#.+[+~]"),e.querySelectorAll(":checked").length||m.push(":checked"),// Support: Windows 8 Native Apps
// The type and name attributes are restricted during .innerHTML assignment
(t=u.createElement("input")).setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),// Support: IE 9 - 11+
// IE's :disabled selector does not pick up the children of disabled fieldsets
// Support: Chrome <=105+, Firefox <=104+, Safari <=15.4+
// In some of the document kinds, these selectors wouldn't work natively.
// This is probably OK but for backwards compatibility we want to maintain
// handling them through jQuery traversal in jQuery 3.x.
d.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&m.push(":enabled",":disabled"),// Support: IE 11+, Edge 15 - 18+
// IE 11/Edge don't find elements on a `[name='']` query in some cases.
// Adding a temporary attribute to the document before the selection works
// around the issue.
// Interestingly, IE 10 & older don't seem to have the issue.
(t=u.createElement("input")).setAttribute("name",""),e.appendChild(t),e.querySelectorAll("[name='']").length||m.push("\\["+j+"*name"+j+"*="+j+"*(?:''|\"\")")}),h.cssHas||// Our regular `try-catch` mechanism fails to detect natively-unsupported
// pseudo-classes inside `:has()` (such as `:has(:contains("Foo"))`)
// in browsers that parse the `:has()` argument as a forgiving selector list.
// https://drafts.csswg.org/selectors/#relational now requires the argument
// to be parsed unforgivingly, but browsers have not yet fully adjusted.
m.push(":has"),m=m.length&&new RegExp(m.join("|")),/* Sorting
	---------------------------------------------------------------------- */// Document order sorting
O=function(e,t){// Flag for duplicate removal
if(e===t)return c=!0,0;// Sort on method existence if only one input has compareDocumentPosition
var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(1&// Calculate position if both inputs belong to the same document
// Support: IE 11+, Edge 17 - 18+
// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
// two documents; shallow comparisons work.
// eslint-disable-next-line eqeqeq
(n=(e.ownerDocument||e)==(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!h.sortDetached&&t.compareDocumentPosition(e)===n?// Choose the first element that is related to our preferred document
// Support: IE 11+, Edge 17 - 18+
// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
// two documents; shallow comparisons work.
// eslint-disable-next-line eqeqeq
e===u||e.ownerDocument==v&&Z.contains(v,e)?-1:t===u||t.ownerDocument==v&&Z.contains(v,t)?1:a?l.call(a,e)-l.call(a,t):0:4&n?-1:1)}),u}// Add button/input type pseudos
for(t in Z.matches=function(e,t){return Z(e,null,null,t)},Z.matchesSelector=function(e,t){if(ea(e),p&&!I[t+" "]&&(!m||!m.test(t)))try{var n=g.call(e,t);// IE 9's matchesSelector returns false on disconnected nodes
if(n||h.disconnectedMatch||// As well, disconnected nodes are said to be in a document
// fragment in IE 9
e.document&&11!==e.document.nodeType)return n}catch(e){I(t,!0)}return Z(t,u,null,[e]).length>0},Z.contains=function(e,t){return(e.ownerDocument||e)!=u&&ea(e),S.contains(e,t)},Z.attr=function(e,t){// Set document vars if needed
// Support: IE 11+, Edge 17 - 18+
// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
// two documents; shallow comparisons work.
// eslint-disable-next-line eqeqeq
(e.ownerDocument||e)!=u&&ea(e);var o=n.attrHandle[t.toLowerCase()],i=o&&f.call(n.attrHandle,t.toLowerCase())?o(e,t,!p):void 0;return void 0!==i?i:e.getAttribute(t)},Z.error=function(e){throw Error("Syntax error, unrecognized expression: "+e)},/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */S.uniqueSort=function(e){var t,n=[],o=0,i=0;if(// Unless we *know* we can detect duplicates, assume their presence
//
// Support: Android <=4.0+
// Testing for detecting duplicates is unpredictable so instead assume we can't
// depend on duplicate detection in all browsers without a stable sort.
c=!h.sortStable,a=!h.sortStable&&r.call(e,0),A.call(e,O),c){for(;t=e[i++];)t===e[i]&&(o=n.push(i));for(;o--;)D.call(e,n[o],1)}return(// Clear input after sorting to release objects
// See https://github.com/jquery/sizzle/pull/225
a=null,e)},S.fn.uniqueSort=function(){return this.pushStack(S.uniqueSort(r.apply(this)))},(n=S.expr={// Can be adjusted by the user
cacheLength:50,createPseudo:et,match:$,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(Y,K),// Move the given value to match[3] whether quoted or unquoted
e[3]=(e[3]||e[4]||e[5]||"").replace(Y,K),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return(/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||Z.error(e[0]),// numeric x and y parameters for Expr.filter.CHILD
// remember that false/true cast respectively to 0/1
e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&Z.error(e[0]),e)},PSEUDO:function(e){var t,n=!e[6]&&e[2];return $.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&W.test(n)&&// Get excess from tokenize (recursively)
(t=el(n,!0))&&// advance to the next closing parenthesis
(t=n.indexOf(")",n.length-t)-n.length)&&(// excess is a negative index
e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(Y,K).toLowerCase();return"*"===e?function(){return!0}:function(e){return k(e,t)}},CLASS:function(e){var t=T[e+" "];return t||(t=RegExp("(^|"+j+")"+e+"("+j+"|$)"),T(e,function(e){return t.test("string"==typeof e.className&&e.className||void 0!==e.getAttribute&&e.getAttribute("class")||"")}))},ATTR:function(e,t,n){return function(o){var i=Z.attr(o,e);return null==i?"!="===t:!t||((i+="","="===t)?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i.replace(M," ")+" ").indexOf(n)>-1:"|="===t&&(i===n||i.slice(0,n.length+1)===n+"-"))}},CHILD:function(e,t,n,o,i){var r="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;return 1===o&&0===i?function(e){return!!e.parentNode}:function(t,n,l){var c,u,f,d,p,h=r!==a?"nextSibling":"previousSibling",m=t.parentNode,g=s&&t.nodeName.toLowerCase(),v=!l&&!s,y=!1;if(m){// :(first|last|only)-(child|of-type)
if(r){for(;h;){for(f=t;f=f[h];)if(s?k(f,g):1===f.nodeType)return!1;// Reverse direction for :only-* (if we haven't yet done so)
p=h="only"===e&&!p&&"nextSibling"}return!0}// non-xml :nth-child(...) stores cache data on `parent`
if(p=[a?m.firstChild:m.lastChild],a&&v){for(y=(d=(c=// Seek `elem` from a previously-cached index
(u=m[x]||(m[x]={}))[e]||[])[0]===b&&c[1])&&c[2],f=d&&m.childNodes[d];f=++d&&f&&f[h]||// Fallback to seeking `elem` from the start
(y=d=0)||p.pop();)if(1===f.nodeType&&++y&&f===t){u[e]=[b,d,y];break}}else // xml :nth-child(...)
// or :nth-last-child(...) or :nth(-last)?-of-type(...)
if(v&&(y=d=(c=(u=t[x]||(t[x]={}))[e]||[])[0]===b&&c[1]),!1===y)// Use the same loop as above to seek `elem` from the start
for(;(f=++d&&f&&f[h]||(y=d=0)||p.pop())&&(!((s?k(f,g):1===f.nodeType)&&++y)||(v&&((u=f[x]||(f[x]={}))[e]=[b,y]),f!==t)););return(// Incorporate the offset, then check against cycle size
(y-=i)===o||y%o==0&&y/o>=0)}}},PSEUDO:function(e,t){// pseudo-class names are case-insensitive
// https://www.w3.org/TR/selectors/#pseudo-classes
// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
// Remember that setFilters inherits from pseudos
var o,i=n.pseudos[e]||n.setFilters[e.toLowerCase()]||Z.error("unsupported pseudo: "+e);return(// The user may use createPseudo to indicate that
// arguments are needed to create the filter function
// just as jQuery does
i[x]?i(t):i.length>1?(o=[e,e,"",t],n.setFilters.hasOwnProperty(e.toLowerCase())?et(function(e,n){for(var o,r=i(e,t),a=r.length;a--;)o=l.call(e,r[a]),e[o]=!(n[o]=r[a])}):function(e){return i(e,0,o)}):i)}},pseudos:{// Potentially complex pseudos
not:et(function(e){// Trim the selector passed to compile
// to avoid treating leading and trailing
// spaces as combinators
var t=[],n=[],o=ep(e.replace(L,"$1"));return o[x]?et(function(e,t,n,i){// Match elements unmatched by `matcher`
for(var r,a=o(e,null,i,[]),s=e.length;s--;)(r=a[s])&&(e[s]=!(t[s]=r))}):function(e,i,r){return t[0]=e,o(t,null,r,n),// Don't keep the element
// (see https://github.com/jquery/sizzle/issues/299)
t[0]=null,!n.pop()}}),has:et(function(e){return function(t){return Z(e,t).length>0}}),contains:et(function(e){return e=e.replace(Y,K),function(t){return(t.textContent||S.text(t)).indexOf(e)>-1}}),// "Whether an element is represented by a :lang() selector
// is based solely on the element's language value
// being equal to the identifier C,
// or beginning with the identifier C immediately followed by "-".
// The matching of C against the element's language value is performed case-insensitively.
// The identifier C does not have to be a valid language name."
// https://www.w3.org/TR/selectors/#lang-pseudo
lang:et(function(e){return _.test(e||"")||Z.error("unsupported lang: "+e),e=e.replace(Y,K).toLowerCase(),function(t){var n;do if(n=p?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return(n=n.toLowerCase())===e||0===n.indexOf(e+"-");while((t=t.parentNode)&&1===t.nodeType)return!1}}),// Miscellaneous
target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===d},focus:function(e){return e===// Support: IE <=9 only
// Accessing document.activeElement can throw unexpectedly
// https://bugs.jquery.com/ticket/13393
function(){try{return u.activeElement}catch(e){}}()&&u.hasFocus()&&!!(e.type||e.href||~e.tabIndex)},// Boolean properties
enabled:eo(!1),disabled:eo(!0),checked:function(e){// In CSS3, :checked should return both checked and selected elements
// https://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
return k(e,"input")&&!!e.checked||k(e,"option")&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},// Contents
empty:function(e){// https://www.w3.org/TR/selectors/#empty-pseudo
// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
//   but not by others (comment: 8; processing instruction: 7; etc.)
// nodeType < 6 works because attributes (2) do not appear as children
for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!n.pseudos.empty(e)},// Element/input types
header:function(e){return U.test(e.nodeName)},input:function(e){return V.test(e.nodeName)},button:function(e){return k(e,"input")&&"button"===e.type||k(e,"button")},text:function(e){var t;return k(e,"input")&&"text"===e.type&&// Support: IE <10 only
// New HTML5 attribute values (e.g., "search") appear
// with elem.type === "text"
(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},// Position-in-collection
first:ei(function(){return[0]}),last:ei(function(e,t){return[t-1]}),eq:ei(function(e,t,n){return[n<0?n+t:n]}),even:ei(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:ei(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:ei(function(e,t,n){var o;for(o=n<0?n+t:n>t?t:n;--o>=0;)e.push(o);return e}),gt:ei(function(e,t,n){for(var o=n<0?n+t:n;++o<t;)e.push(o);return e})}}).pseudos.nth=n.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})n.pseudos[t]=/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */function(e){return function(t){return k(t,"input")&&t.type===e}}(t);for(t in{submit:!0,reset:!0})n.pseudos[t]=/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */function(e){return function(t){return(k(t,"input")||k(t,"button"))&&t.type===e}}(t);// Easy API for creating new setFilters
function es(){}function el(e,t){var o,i,r,a,s,l,c,u=C[e+" "];if(u)return t?0:u.slice(0);for(s=e,l=[],c=n.preFilter;s;){// Filters
for(a in(!o||(i=q.exec(s)))&&(i&&(s=s.slice(i[0].length)||s),l.push(r=[])),o=!1,(i=B.exec(s))&&(o=i.shift(),r.push({value:o,// Cast descendant combinators to space
type:i[0].replace(L," ")}),s=s.slice(o.length)),n.filter)(i=$[a].exec(s))&&(!c[a]||(i=c[a](i)))&&(o=i.shift(),r.push({value:o,type:a,matches:i}),s=s.slice(o.length));if(!o)break}return(// Return the length of the invalid excess
// if we're just parsing
// Otherwise, throw an error or return tokens
t?s.length:s?Z.error(e):C(e,l).slice(0))}function ec(e){for(var t=0,n=e.length,o="";t<n;t++)o+=e[t].value;return o}function eu(e,t,n){var o=t.dir,i=t.next,r=i||o,a=n&&"parentNode"===r,s=w++;return t.first?function(t,n,i){for(;t=t[o];)if(1===t.nodeType||a)return e(t,n,i);return!1}:function(t,n,l){var c,u,f=[b,s];// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
if(l){for(;t=t[o];)if((1===t.nodeType||a)&&e(t,n,l))return!0}else for(;t=t[o];)if(1===t.nodeType||a){if(u=t[x]||(t[x]={}),i&&k(t,i))t=t[o]||t;else{if((c=u[r])&&c[0]===b&&c[1]===s)return f[2]=c[2];// A match means we're done; a fail means we have to keep checking
if(// Reuse newcache so results back-propagate to previous elements
u[r]=f,f[2]=e(t,n,l))return!0}}return!1}}function ef(e){return e.length>1?function(t,n,o){for(var i=e.length;i--;)if(!e[i](t,n,o))return!1;return!0}:e[0]}function ed(e,t,n,o,i){for(var r,a=[],s=0,l=e.length,c=null!=t;s<l;s++)(r=e[s])&&(!n||n(r,o,i))&&(a.push(r),c&&t.push(s));return a}function ep(e,t/* Internal Use Only */){var o,r,a,s,c=[],f=[],d=P[e+" "];if(!d){for(t||(t=el(e)),s=t.length;s--;)(d=function e(t){for(var o,r,a,s=t.length,c=n.relative[t[0].type],u=c||n.relative[" "],f=c?1:0,d=eu(function(e){return e===o},u,!0),p=eu(function(e){return l.call(o,e)>-1},u,!0),h=[function(e,t,n){// Support: IE 11+, Edge 17 - 18+
// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
// two documents; shallow comparisons work.
// eslint-disable-next-line eqeqeq
var r=!c&&(n||t!=i)||((o=t).nodeType?d(e,t,n):p(e,t,n));return(// Avoid hanging onto element
// (see https://github.com/jquery/sizzle/issues/299)
o=null,r)}];f<s;f++)if(r=n.relative[t[f].type])h=[eu(ef(h),r)];else{// Return special upon seeing a positional matcher
if((r=n.filter[t[f].type].apply(null,t[f].matches))[x]){for(// Find the next relative operator (if any) for proper handling
a=++f;a<s&&!n.relative[t[a].type];a++);return function e(t,n,o,i,r,a){return i&&!i[x]&&(i=e(i)),r&&!r[x]&&(r=e(r,a)),et(function(e,a,s,c){var u,f,d,p,h=[],m=[],g=a.length,v=e||function(e,t,n){for(var o=0,i=t.length;o<i;o++)Z(e,t[o],n);return n}(n||"*",s.nodeType?[s]:s,[]),x=t&&(e||!n)?ed(v,h,t,s,c):v;// Apply postFilter
if(o?// Find primary matches
o(x,// If we have a postFinder, or filtered seed, or non-seed postFilter
// or preexisting results,
p=r||(e?t:g||i)?[]:a,s,c):p=x,i)for(u=ed(p,m),i(u,[],s,c),// Un-match failing elements by moving them back to matcherIn
f=u.length;f--;)(d=u[f])&&(p[m[f]]=!(x[m[f]]=d));if(e){if(r||t){if(r){for(// Get the final matcherOut by condensing this intermediate into postFinder contexts
u=[],f=p.length;f--;)(d=p[f])&&u.push(x[f]=d);r(null,p=[],u,c)}for(// Move matched elements from seed to results to keep them synchronized
f=p.length;f--;)(d=p[f])&&(u=r?l.call(e,d):h[f])>-1&&(e[u]=!(a[u]=d))}}else p=ed(p===a?p.splice(g,p.length):p),r?r(null,a,p,c):y.apply(a,p)})}(f>1&&ef(h),f>1&&ec(t.slice(0,f-1).concat({value:" "===t[f-2].type?"*":""})).replace(L,"$1"),r,f<a&&e(t.slice(f,a)),a<s&&e(t=t.slice(a)),a<s&&ec(t))}h.push(r)}return ef(h)}(t[s]))[x]?c.push(d):f.push(d);// Save selector and tokenization
// Cache the compiled function
(d=P(e,(o=c.length>0,r=f.length>0,a=function(e,t,a,s,l){var d,h,m,g=0,v="0",x=e&&[],w=[],T=i,C=e||r&&n.find.TAG("*",l),k=b+=null==T?1:Math.random()||.1,A=C.length;// Add elements passing elementMatchers directly to results
// Support: iOS <=7 - 9 only
// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching
// elements by id. (see trac-14142)
for(l&&// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
// two documents; shallow comparisons work.
// eslint-disable-next-line eqeqeq
(i=t==u||t||l);v!==A&&null!=(d=C[v]);v++){if(r&&d){for(h=0,t||d.ownerDocument==u||(ea(d),a=!p);m=f[h++];)if(m(d,t||u,a)){y.call(s,d);break}l&&(b=k)}// Track unmatched elements for set filters
o&&((d=!m&&d)&&g--,e&&x.push(d))}// Apply set filters to unmatched elements
// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
// no element matchers and no seed.
// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
// case, which will result in a "00" `matchedCount` that differs from `i` but is also
// numerically zero.
if(// `i` is now the count of elements visited above, and adding it to `matchedCount`
// makes the latter nonnegative.
g+=v,o&&v!==g){for(h=0;m=c[h++];)m(x,w,t,a);if(e){// Reintegrate element matches to eliminate the need for sorting
if(g>0)for(;v--;)x[v]||w[v]||(w[v]=E.call(s));// Discard index placeholder values to get only actual matches
w=ed(w)}// Add matches to results
y.apply(s,w),l&&!e&&w.length>0&&g+c.length>1&&S.uniqueSort(s)}return l&&(b=k,i=T),x},o?et(a):a))).selector=e}return d}/**
 * A low-level selection function that works with jQuery's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with jQuery selector compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */function eh(e,t,o,i){var r,a,s,l,c,u="function"==typeof e&&e,f=!i&&el(e=u.selector||e);// Try to minimize operations if there is only one selector in the list and no seed
// (the latter of which guarantees us context)
if(o=o||[],1===f.length){if(// Reduce context if the leading compound selector is an ID
(a=f[0]=f[0].slice(0)).length>2&&"ID"===(s=a[0]).type&&9===t.nodeType&&p&&n.relative[a[1].type]){if(!(t=(n.find.ID(s.matches[0].replace(Y,K),t)||[])[0]))return o;u&&(t=t.parentNode),e=e.slice(a.shift().value.length)}for(// Fetch a seed set for right-to-left matching
r=$.needsContext.test(e)?0:a.length;// Abort if we hit a combinator
r--&&(s=a[r],!n.relative[l=s.type]);)if((c=n.find[l])&&(i=c(s.matches[0].replace(Y,K),G.test(a[0].type)&&er(t.parentNode)||t))){if(// If seed is empty or no tokens remain, we can return early
a.splice(r,1),!(e=i.length&&ec(a)))return y.apply(o,i),o;break}}return(// Compile and execute a filtering function if one is not provided
// Provide `match` to avoid retokenization if we modified the selector above
(u||ep(e,f))(i,t,!p,o,!t||G.test(e)&&er(t.parentNode)||t),o)}es.prototype=n.filters=n.pseudos,n.setFilters=new es,// One-time assignments
// Support: Android <=4.0 - 4.1+
// Sort stability
h.sortStable=x.split("").sort(O).join("")===x,// Initialize against the default document
ea(),// Support: Android <=4.0 - 4.1+
// Detached nodes confoundingly follow *each other*
h.sortDetached=en(function(e){// Should return 1, but returns 4 (following)
return 1&e.compareDocumentPosition(u.createElement("fieldset"))}),S.find=Z,// Deprecated
S.expr[":"]=S.expr.pseudos,S.unique=S.uniqueSort,// These have always been private, but they used to be documented as part of
// Sizzle so let's maintain them for now for backwards compatibility purposes.
Z.compile=ep,Z.select=eh,Z.setDocument=ea,Z.tokenize=el,Z.escape=S.escapeSelector,Z.getText=S.text,Z.isXML=S.isXMLDoc,Z.selectors=S.expr,Z.support=S.support,Z.uniqueSort=S.uniqueSort;/* eslint-enable */}();var O=function(e,t,n){for(var o=[],i=void 0!==n;(e=e[t])&&9!==e.nodeType;)if(1===e.nodeType){if(i&&S(e).is(n))break;o.push(e)}return o},N=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},R=S.expr.match.needsContext,z=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;// Implement the identical functionality for filter and not
function H(e,t,n){return m(t)?S.grep(e,function(e,o){return!!t.call(e,o,e)!==n}):t.nodeType?S.grep(e,function(e){return e===t!==n}):"string"!=typeof t?S.grep(e,function(e){return l.call(t,e)>-1!==n}):S.filter(t,e,n)}S.filter=function(e,t,n){var o=t[0];return(n&&(e=":not("+e+")"),1===t.length&&1===o.nodeType)?S.find.matchesSelector(o,e)?[o]:[]:S.find.matches(e,S.grep(t,function(e){return 1===e.nodeType}))},S.fn.extend({find:function(e){var t,n,o=this.length,i=this;if("string"!=typeof e)return this.pushStack(S(e).filter(function(){for(t=0;t<o;t++)if(S.contains(i[t],this))return!0}));for(t=0,n=this.pushStack([]);t<o;t++)S.find(e,i[t],n);return o>1?S.uniqueSort(n):n},filter:function(e){return this.pushStack(H(this,e||[],!1))},not:function(e){return this.pushStack(H(this,e||[],!0))},is:function(e){return!!H(this,// so $("p:first").is("p:last") won't return true for a doc with two "p".
"string"==typeof e&&R.test(e)?S(e):e||[],!1).length}});// Initialize a jQuery object
// A central reference to the root jQuery(document)
var M,// Prioritize #id over <tag> to avoid XSS via location.hash (trac-9521)
// Strict HTML recognition (trac-11290: must start with <)
// Shortcut simple #id case for speed
q=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;// Give the init function the jQuery prototype for later instantiation
(S.fn.init=function(e,t,n){var o,i;// HANDLE: $(""), $(null), $(undefined), $(false)
if(!e)return this;// Handle HTML strings
if(// Method init() accepts an alternate rootjQuery
// so migrate can support jQuery.sub (gh-2101)
n=n||M,"string"==typeof e){// Match html or make sure no context is specified for #id
if((o="<"===e[0]&&">"===e[e.length-1]&&e.length>=3?[null,e,null]:q.exec(e))&&(o[1]||!t)){// HANDLE: $(html) -> $(array)
if(!o[1])return(i=v.getElementById(o[2]))&&(// Inject the element directly into the jQuery object
this[0]=i,this.length=1),this;// HANDLE: $(html, props)
if(t=t instanceof S?t[0]:t,// Option to run scripts is true for back-compat
// Intentionally let the error be thrown if parseHTML is not present
S.merge(this,S.parseHTML(o[1],t&&t.nodeType?t.ownerDocument||t:v,!0)),z.test(o[1])&&S.isPlainObject(t))for(o in t)m(this[o])?this[o](t[o]):this.attr(o,t[o]);return this}return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);// HANDLE: $(DOMElement)
}return e.nodeType?(this[0]=e,this.length=1,this):m(e)?void 0!==n.ready?n.ready(e):e(S):S.makeArray(e,this)}).prototype=S.fn,// Initialize central reference
M=S(v);var B=/^(?:parents|prev(?:Until|All))/,F={children:!0,contents:!0,next:!0,prev:!0};function W(e,t){for(;(e=e[t])&&1!==e.nodeType;);return e}S.fn.extend({has:function(e){var t=S(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(S.contains(this,t[e]))return!0})},closest:function(e,t){var n,o=0,i=this.length,r=[],a="string"!=typeof e&&S(e);// Positional selectors never match, since there's no _selection_ context
if(!R.test(e)){for(;o<i;o++)for(n=this[o];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?a.index(n)>-1:1===n.nodeType&&S.find.matchesSelector(n,e))){r.push(n);break}}return this.pushStack(r.length>1?S.uniqueSort(r):r)},// Determine the position of an element within the set
index:function(e){return(// No argument, return index in parent
e?"string"==typeof e?l.call(S(e),this[0]):l.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1)},add:function(e,t){return this.pushStack(S.uniqueSort(S.merge(this.get(),S(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),S.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return O(e,"parentNode")},parentsUntil:function(e,t,n){return O(e,"parentNode",n)},next:function(e){return W(e,"nextSibling")},prev:function(e){return W(e,"previousSibling")},nextAll:function(e){return O(e,"nextSibling")},prevAll:function(e){return O(e,"previousSibling")},nextUntil:function(e,t,n){return O(e,"nextSibling",n)},prevUntil:function(e,t,n){return O(e,"previousSibling",n)},siblings:function(e){return N((e.parentNode||{}).firstChild,e)},children:function(e){return N(e.firstChild)},contents:function(e){return null!=e.contentDocument&&// Support: IE 11+
// <object> elements with no `data` attribute has an object
// `contentDocument` with a `null` prototype.
i(e.contentDocument)?e.contentDocument:(k(e,"template")&&(e=e.content||e),S.merge([],e.childNodes))}},function(e,t){S.fn[e]=function(n,o){var i=S.map(this,t,n);return"Until"!==e.slice(-5)&&(o=n),o&&"string"==typeof o&&(i=S.filter(o,i)),this.length>1&&(F[e]||S.uniqueSort(i),B.test(e)&&i.reverse()),this.pushStack(i)}});var _=/[^\x20\t\r\n\f]+/g;function $(e){return e}function V(e){throw e}function U(e,t,n,o){var i;try{// Check for promise aspect first to privilege synchronous behavior
e&&m(i=e.promise)?i.call(e).done(t).fail(n):e&&m(i=e.then)?i.call(e,t,n):// * false: [ value ].slice( 0 ) => resolve( value )
// * true: [ value ].slice( 1 ) => resolve()
t.apply(void 0,[e].slice(o));// For Promises/A+, convert exceptions into rejections
// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
// Deferred#then to conditionally suppress rejection.
}catch(e){// Support: Android 4.0 only
// Strict mode functions invoked without .call/.apply get global-object context
n.apply(void 0,[e])}}/*
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
 */S.Callbacks=function(e){// Convert options from String-formatted to Object-formatted if needed
// (we check in cache first)
e="string"==typeof e?(t=e,n={},S.each(t.match(_)||[],function(e,t){n[t]=!0}),n):S.extend({},e);var t,n,o,i,r,a,s=[],l=[],c=-1,u=function(){for(// Enforce single-firing
a=a||e.once,// Execute callbacks for all pending executions,
// respecting firingIndex overrides and runtime changes
r=o=!0;l.length;c=-1)for(i=l.shift();++c<s.length;)!1===s[c].apply(i[0],i[1])&&e.stopOnFalse&&(// Jump to end and forget the data so .add doesn't re-fire
c=s.length,i=!1);e.memory||(i=!1),o=!1,a&&(s=i?[]:"")},f={// Add a callback or a collection of callbacks to the list
add:function(){return s&&(i&&!o&&(c=s.length-1,l.push(i)),function t(n){S.each(n,function(n,o){m(o)?e.unique&&f.has(o)||s.push(o):o&&o.length&&"string"!==b(o)&&t(o)})}(arguments),i&&!o&&u()),this},// Remove a callback from the list
remove:function(){return S.each(arguments,function(e,t){for(var n;(n=S.inArray(t,s,n))>-1;)s.splice(n,1),n<=c&&c--}),this},// Check if a given callback is in the list.
// If no argument is given, return whether or not list has callbacks attached.
has:function(e){return e?S.inArray(e,s)>-1:s.length>0},// Remove all callbacks from the list
empty:function(){return s&&(s=[]),this},// Disable .fire and .add
// Abort any current/pending executions
// Clear all callbacks and values
disable:function(){return a=l=[],s=i="",this},disabled:function(){return!s},// Disable .fire
// Also disable .add unless we have memory (since it would have no effect)
// Abort any pending executions
lock:function(){return a=l=[],i||o||(s=i=""),this},locked:function(){return!!a},// Call all callbacks with the given context and arguments
fireWith:function(e,t){return a||(t=[e,(t=t||[]).slice?t.slice():t],l.push(t),o||u()),this},// Call all the callbacks with the given arguments
fire:function(){return f.fireWith(this,arguments),this},// To know if the callbacks have already been called at least once
fired:function(){return!!r}};return f},S.extend({Deferred:function(t){var n=[// action, add listener, callbacks,
// ... .then handlers, argument index, [final state]
["notify","progress",S.Callbacks("memory"),S.Callbacks("memory"),2],["resolve","done",S.Callbacks("once memory"),S.Callbacks("once memory"),0,"resolved"],["reject","fail",S.Callbacks("once memory"),S.Callbacks("once memory"),1,"rejected"]],o="pending",i={state:function(){return o},always:function(){return r.done(arguments).fail(arguments),this},catch:function(e){return i.then(null,e)},// Keep pipe for back-compat
pipe:function(){var e=arguments;return S.Deferred(function(t){S.each(n,function(n,o){// Map tuples (progress, done, fail) to arguments (done, fail, progress)
var i=m(e[o[4]])&&e[o[4]];// deferred.progress(function() { bind to newDefer or newDefer.notify })
// deferred.done(function() { bind to newDefer or newDefer.resolve })
// deferred.fail(function() { bind to newDefer or newDefer.reject })
r[o[1]](function(){var e=i&&i.apply(this,arguments);e&&m(e.promise)?e.promise().progress(t.notify).done(t.resolve).fail(t.reject):t[o[0]+"With"](this,i?[e]:arguments)})}),e=null}).promise()},then:function(t,o,i){var r=0;function a(t,n,o,i){return function(){var s=this,l=arguments,c=function(){var e,c;// Support: Promises/A+ section 2.3.3.3.3
// https://promisesaplus.com/#point-59
// Ignore double-resolution attempts
if(!(t<r)){// Support: Promises/A+ section 2.3.1
// https://promisesaplus.com/#point-48
if((e=o.apply(s,l))===n.promise())throw TypeError("Thenable self-resolution");// Handle a returned thenable
m(// Support: Promises/A+ sections 2.3.3.1, 3.5
// https://promisesaplus.com/#point-54
// https://promisesaplus.com/#point-75
// Retrieve `then` only once
c=e&&// Support: Promises/A+ section 2.3.4
// https://promisesaplus.com/#point-64
// Only check objects and functions for thenability
("object"==typeof e||"function"==typeof e)&&e.then)?i?c.call(e,a(r,n,$,i),a(r,n,V,i)):(// ...and disregard older resolution values
r++,c.call(e,a(r,n,$,i),a(r,n,V,i),a(r,n,$,n.notifyWith))):(o!==$&&(s=void 0,l=[e]),// Process the value(s)
// Default process is resolve
(i||n.resolveWith)(s,l))}},u=i?c:function(){try{c()}catch(e){S.Deferred.exceptionHook&&S.Deferred.exceptionHook(e,u.error),t+1>=r&&(o!==V&&(s=void 0,l=[e]),n.rejectWith(s,l))}};// Support: Promises/A+ section 2.3.3.3.1
// https://promisesaplus.com/#point-57
// Re-resolve promises immediately to dodge false rejection from
// subsequent errors
t?u():(S.Deferred.getErrorHook?u.error=S.Deferred.getErrorHook():S.Deferred.getStackHook&&(u.error=S.Deferred.getStackHook()),e.setTimeout(u))}}return S.Deferred(function(e){// progress_handlers.add( ... )
n[0][3].add(a(0,e,m(i)?i:$,e.notifyWith)),// fulfilled_handlers.add( ... )
n[1][3].add(a(0,e,m(t)?t:$)),// rejected_handlers.add( ... )
n[2][3].add(a(0,e,m(o)?o:V))}).promise()},// Get a promise for this deferred
// If obj is provided, the promise aspect is added to the object
promise:function(e){return null!=e?S.extend(e,i):i}},r={};// All done!
return(// Add list-specific methods
S.each(n,function(e,t){var a=t[2],s=t[5];// promise.progress = list.add
// promise.done = list.add
// promise.fail = list.add
i[t[1]]=a.add,s&&a.add(function(){// state = "resolved" (i.e., fulfilled)
// state = "rejected"
o=s},// fulfilled_callbacks.disable
n[3-e][2].disable,// fulfilled_handlers.disable
n[3-e][3].disable,n[0][2].lock,n[0][3].lock),// progress_handlers.fire
// fulfilled_handlers.fire
// rejected_handlers.fire
a.add(t[3].fire),// deferred.notify = function() { deferred.notifyWith(...) }
// deferred.resolve = function() { deferred.resolveWith(...) }
// deferred.reject = function() { deferred.rejectWith(...) }
r[t[0]]=function(){return r[t[0]+"With"](this===r?void 0:this,arguments),this},// deferred.notifyWith = list.fireWith
// deferred.resolveWith = list.fireWith
// deferred.rejectWith = list.fireWith
r[t[0]+"With"]=a.fireWith}),// Make the deferred a promise
i.promise(r),t&&t.call(r,r),r)},// Deferred helper
when:function(e){var t=arguments.length,n=t,o=Array(n),i=r.call(arguments),a=S.Deferred(),s=function(e){return function(n){o[e]=this,i[e]=arguments.length>1?r.call(arguments):n,--t||a.resolveWith(o,i)}};// Single- and empty arguments are adopted like Promise.resolve
if(t<=1&&(U(e,a.done(s(n)).resolve,a.reject,!t),"pending"===a.state()||m(i[n]&&i[n].then)))return a.then();// Multiple arguments are aggregated like Promise.all array elements
for(;n--;)U(i[n],s(n),a.reject);return a.promise()}});// These usually indicate a programmer mistake during development,
// warn about them ASAP rather than swallowing them by default.
var X=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;// If `jQuery.Deferred.getErrorHook` is defined, `asyncError` is an error
// captured before the async barrier to get the original error cause
// which may otherwise be hidden.
S.Deferred.exceptionHook=function(t,n){// Support: IE 8 - 9 only
// Console exists when dev tools are open, which can happen at any time
e.console&&e.console.warn&&t&&X.test(t.name)&&e.console.warn("jQuery.Deferred exception: "+t.message,t.stack,n)},S.readyException=function(t){e.setTimeout(function(){throw t})};// The deferred used on DOM ready
var G=S.Deferred();// The ready event handler and self cleanup method
function Y(){v.removeEventListener("DOMContentLoaded",Y),e.removeEventListener("load",Y),S.ready()}S.fn.ready=function(e){return G.then(e)// Wrap jQuery.readyException in a function so that the lookup
// happens at the time of error handling instead of callback
// registration.
.catch(function(e){S.readyException(e)}),this},S.extend({// Is the DOM ready to be used? Set to true once it occurs.
isReady:!1,// A counter to track how many items to wait for before
// the ready event fires. See trac-6781
readyWait:1,// Handle when the DOM is ready
ready:function(e){// Abort if there are pending holds or we're already ready
!(!0===e?--S.readyWait:S.isReady)&&(// Remember that the DOM is ready
S.isReady=!0,!0!==e&&--S.readyWait>0||// If there are functions bound, to execute
G.resolveWith(v,[S]))}}),S.ready.then=G.then,"complete"!==v.readyState&&("loading"===v.readyState||v.documentElement.doScroll)?(// Use the handy event callback
v.addEventListener("DOMContentLoaded",Y),// A fallback to window.onload, that will always work
e.addEventListener("load",Y)):e.setTimeout(S.ready);// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var K=function(e,t,n,o,i,r,a){var s=0,l=e.length,c=null==n;// Sets many values
if("object"===b(n))for(s in i=!0,n)K(e,t,s,n[s],!0,r,a);else if(void 0!==o&&(i=!0,m(o)||(a=!0),c&&(a?(t.call(e,o),t=null):(c=t,t=function(e,t,n){return c.call(S(e),n)})),t))for(;s<l;s++)t(e[s],n,a?o:o.call(e[s],s,t(e[s],n)));return i?e:c?t.call(e):l?t(e[0],n):r},Q=/^-ms-/,J=/-([a-z])/g;// Used by camelCase as callback to replace()
function Z(e,t){return t.toUpperCase()}// Convert dashed to camelCase; used by the css and data modules
// Support: IE <=9 - 11, Edge 12 - 15
// Microsoft forgot to hump their vendor prefix (trac-9572)
function ee(e){return e.replace(Q,"ms-").replace(J,Z)}var et=function(e){// Accepts only:
//  - Node
//    - Node.ELEMENT_NODE
//    - Node.DOCUMENT_NODE
//  - Object
//    - Any
return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function en(){this.expando=S.expando+en.uid++}en.uid=1,en.prototype={cache:function(e){// Check if the owner object already has a cache
var t=e[this.expando];return!t&&(t={},et(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var o,i=this.cache(e);// Handle: [ owner, key, value ] args
// Always use camelCase key (gh-2257)
if("string"==typeof t)i[ee(t)]=n;else for(o in t)i[ee(o)]=t[o];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][ee(t)]},access:function(e,t,n){return(// In cases where either:
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
void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(// When the key is not a string, or both a key and value
// are specified, set or extend (existing objects) with either:
//
//   1. An object of properties
//   2. A key and value
//
this.set(e,t,n),void 0!==n?n:t))},remove:function(e,t){var n,o=e[this.expando];if(void 0!==o){if(void 0!==t)for(n=(// We always set camelCase keys, so remove that.
t=Array.isArray(t)?t.map(ee):((t=ee(t))in o)?[t]:t.match(_)||[]).length;n--;)delete o[t[n]];// Remove the expando if there's no more data
(void 0===t||S.isEmptyObject(o))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!S.isEmptyObject(t)}};var eo=new en,ei=new en,er=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,ea=/[A-Z]/g;function es(e,t,n){var o,i;// If nothing was found internally, try to fetch any
// data from the HTML5 data-* attribute
if(void 0===n&&1===e.nodeType){if(o="data-"+t.replace(ea,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(o))){try{i=n,n="true"===i||"false"!==i&&("null"===i?null:i===+i+""?+i:er.test(i)?JSON.parse(i):i)}catch(e){}// Make sure we set the data so it isn't changed later
ei.set(e,t,n)}else n=void 0}return n}S.extend({hasData:function(e){return ei.hasData(e)||eo.hasData(e)},data:function(e,t,n){return ei.access(e,t,n)},removeData:function(e,t){ei.remove(e,t)},// TODO: Now that all calls to _data and _removeData have been replaced
// with direct calls to dataPriv methods, these can be deprecated.
_data:function(e,t,n){return eo.access(e,t,n)},_removeData:function(e,t){eo.remove(e,t)}}),S.fn.extend({data:function(e,t){var n,o,i,r=this[0],a=r&&r.attributes;// Gets all values
if(void 0===e){if(this.length&&(i=ei.get(r),1===r.nodeType&&!eo.get(r,"hasDataAttrs"))){for(n=a.length;n--;)// The attrs elements can be null (trac-14894)
a[n]&&0===(o=a[n].name).indexOf("data-")&&es(r,o=ee(o.slice(5)),i[o]);eo.set(r,"hasDataAttrs",!0)}return i}return(// Sets multiple values
"object"==typeof e?this.each(function(){ei.set(this,e)}):K(this,function(t){var n;// The calling jQuery object (element matches) is not empty
// (and therefore has an element appears at this[ 0 ]) and the
// `value` parameter was not undefined. An empty jQuery object
// will result in `undefined` for elem = this[ 0 ] which will
// throw an exception if an attempt to read a data cache is made.
if(r&&void 0===t)return void 0!==// Attempt to get data from the cache
// The key will always be camelCased in Data
(n=ei.get(r,e))||void 0!==// Attempt to "discover" the data in
// HTML5 custom data-* attrs
(n=es(r,e))?n:// We tried really hard, but the data doesn't exist.
void 0;// Set the data...
this.each(function(){// We always store the camelCased key
ei.set(this,e,t)})},null,t,arguments.length>1,null,!0))},removeData:function(e){return this.each(function(){ei.remove(this,e)})}}),S.extend({queue:function(e,t,n){var o;if(e)return t=(t||"fx")+"queue",o=eo.get(e,t),n&&(!o||Array.isArray(n)?o=eo.access(e,t,S.makeArray(n)):o.push(n)),o||[]},dequeue:function(e,t){t=t||"fx";var n=S.queue(e,t),o=n.length,i=n.shift(),r=S._queueHooks(e,t);"inprogress"===i&&(i=n.shift(),o--),i&&("fx"===t&&n.unshift("inprogress"),// Clear up the last queue stop function
delete r.stop,i.call(e,function(){S.dequeue(e,t)},r)),!o&&r&&r.empty.fire()},// Not public - generate a queueHooks object, or return the current one
_queueHooks:function(e,t){var n=t+"queueHooks";return eo.get(e,n)||eo.access(e,n,{empty:S.Callbacks("once memory").add(function(){eo.remove(e,[t+"queue",n])})})}}),S.fn.extend({queue:function(e,t){var n=2;return("string"!=typeof e&&(t=e,e="fx",n--),arguments.length<n)?S.queue(this[0],e):void 0===t?this:this.each(function(){var n=S.queue(this,e,t);// Ensure a hooks for this queue
S._queueHooks(this,e),"fx"===e&&"inprogress"!==n[0]&&S.dequeue(this,e)})},dequeue:function(e){return this.each(function(){S.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},// Get a promise resolved when queues of a certain type
// are emptied (fx is the type by default)
promise:function(e,t){var n,o=1,i=S.Deferred(),r=this,a=this.length,s=function(){--o||i.resolveWith(r,[r])};for("string"!=typeof e&&(t=e,e=void 0),e=e||"fx";a--;)(n=eo.get(r[a],e+"queueHooks"))&&n.empty&&(o++,n.empty.add(s));return s(),i.promise(t)}});var el=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,ec=RegExp("^(?:([+-])=|)("+el+")([a-z%]*)$","i"),eu=["Top","Right","Bottom","Left"],ef=v.documentElement,ed=function(e){return S.contains(e.ownerDocument,e)},ep={composed:!0};ef.getRootNode&&(ed=function(e){return S.contains(e.ownerDocument,e)||e.getRootNode(ep)===e.ownerDocument});var eh=function(e,t){// Inline style trumps all
return"none"===// isHiddenWithinTree might be called from jQuery#filter function;
// in that case, element will be second argument
(e=t||e).style.display||""===e.style.display&&// Otherwise, check computed style
// Support: Firefox <=43 - 45
// Disconnected elements can have computed display: none, so first confirm that elem is
// in the document.
ed(e)&&"none"===S.css(e,"display")};function em(e,t,n,o){var i,r,a=20,s=o?function(){return o.cur()}:function(){return S.css(e,t,"")},l=s(),c=n&&n[3]||(S.cssNumber[t]?"":"px"),u=e.nodeType&&(S.cssNumber[t]||"px"!==c&&+l)&&ec.exec(S.css(e,t));if(u&&u[3]!==c){for(// Support: Firefox <=54
// Halve the iteration target value to prevent interference from CSS upper bounds (gh-2144)
l/=2,// Trust units reported by jQuery.css
c=c||u[3],// Iteratively approximate from a nonzero starting point
u=+l||1;a--;)// Evaluate and update our best guess (doubling guesses that zero out).
// Finish if the scale equals or crosses 1 (making the old*new product non-positive).
S.style(e,t,u+c),(1-r)*(1-(r=s()/l||.5))<=0&&(a=0),u/=r;u*=2,S.style(e,t,u+c),// Make sure we update the tween properties later on
n=n||[]}return n&&(u=+u||+l||0,// Apply relative offset (+=/-=) if specified
i=n[1]?u+(n[1]+1)*n[2]:+n[2],o&&(o.unit=c,o.start=u,o.end=i)),i}var eg={};function ev(e,t){// Determine new display value for elements that need to change
for(var n,o,i=[],r=0,a=e.length;r<a;r++)(o=e[r]).style&&(n=o.style.display,t?("none"!==n||(i[r]=eo.get(o,"display")||null,i[r]||(o.style.display="")),""===o.style.display&&eh(o)&&(i[r]=function(e){var t,n=e.ownerDocument,o=e.nodeName,i=eg[o];return i||(t=n.body.appendChild(n.createElement(o)),i=S.css(t,"display"),t.parentNode.removeChild(t),"none"===i&&(i="block"),eg[o]=i),i}(o))):"none"!==n&&(i[r]="none",// Remember what we're overwriting
eo.set(o,"display",n)));// Set the display of the elements in a second loop to avoid constant reflow
for(r=0;r<a;r++)null!=i[r]&&(e[r].style.display=i[r]);return e}S.fn.extend({show:function(){return ev(this,!0)},hide:function(){return ev(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){eh(this)?S(this).show():S(this).hide()})}});var ey=/^(?:checkbox|radio)$/i,ex=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,eb=/^$|^module$|\/(?:java|ecma)script/i;e5=v.createDocumentFragment().appendChild(v.createElement("div")),// Support: Android 4.0 - 4.3 only
// Check state lost if the name is set (trac-11217)
// Support: Windows Web Apps (WWA)
// `name` and `type` must use .setAttribute for WWA (trac-14901)
(e4=v.createElement("input")).setAttribute("type","radio"),e4.setAttribute("checked","checked"),e4.setAttribute("name","t"),e5.appendChild(e4),// Support: Android <=4.1 only
// Older WebKit doesn't clone checked state correctly in fragments
h.checkClone=e5.cloneNode(!0).cloneNode(!0).lastChild.checked,// Support: IE <=11 only
// Make sure textarea (and checkbox) defaultValue is properly cloned
e5.innerHTML="<textarea>x</textarea>",h.noCloneChecked=!!e5.cloneNode(!0).lastChild.defaultValue,// Support: IE <=9 only
// IE <=9 replaces <option> tags with their contents when inserted outside of
// the select element.
e5.innerHTML="<option></option>",h.option=!!e5.lastChild;// We have to close these tags to support XHTML (trac-13200)
var ew={// XHTML parsers do not magically insert elements in the
// same way that tag soup parsers do. So we cannot shorten
// this by omitting <tbody> or other required elements.
thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function eT(e,t){// Support: IE <=9 - 11 only
// Use typeof to avoid zero-argument method invocation on host objects (trac-15151)
var n;return(n=void 0!==e.getElementsByTagName?e.getElementsByTagName(t||"*"):void 0!==e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&k(e,t))?S.merge([e],n):n}// Mark scripts as having already been evaluated
function eS(e,t){for(var n=0,o=e.length;n<o;n++)eo.set(e[n],"globalEval",!t||eo.get(t[n],"globalEval"))}ew.tbody=ew.tfoot=ew.colgroup=ew.caption=ew.thead,ew.th=ew.td,h.option||(ew.optgroup=ew.option=[1,"<select multiple='multiple'>","</select>"]);var eC=/<|&#?\w+;/;function ek(e,t,n,o,i){for(var r,a,s,l,c,u=t.createDocumentFragment(),f=[],d=0,p=e.length;d<p;d++)if((r=e[d])||0===r){// Add nodes directly
if("object"===b(r))// push.apply(_, arraylike) throws on ancient WebKit
S.merge(f,r.nodeType?[r]:r);else if(eC.test(r)){for(a=a||u.appendChild(t.createElement("div")),s=ew[(ex.exec(r)||["",""])[1].toLowerCase()]||ew._default,a.innerHTML=s[1]+S.htmlPrefilter(r)+s[2],// Descend through wrappers to the right content
c=s[0];c--;)a=a.lastChild;// Support: Android <=4.0 only, PhantomJS 1 only
// push.apply(_, arraylike) throws on ancient WebKit
S.merge(f,a.childNodes),// Ensure the created nodes are orphaned (trac-12392)
// Remember the top-level container
(a=u.firstChild).textContent=""}else f.push(t.createTextNode(r))}for(// Remove wrapper from fragment
u.textContent="",d=0;r=f[d++];){// Skip elements already in the context collection (trac-4087)
if(o&&S.inArray(r,o)>-1){i&&i.push(r);continue}// Capture executables
if(l=ed(r),// Append to fragment
a=eT(u.appendChild(r),"script"),l&&eS(a),n)for(c=0;r=a[c++];)eb.test(r.type||"")&&n.push(r)}return u}var eE=/^([^.]*)(?:\.(.+)|)/;function eA(){return!0}function eD(){return!1}function ej(e,t,n,o,i,r){var a,s;// Types can be a map of types/handlers
if("object"==typeof t){for(s in"string"!=typeof n&&(// ( types-Object, data )
o=o||n,n=void 0),t)ej(e,s,n,o,t[s],r);return e}if(null==o&&null==i?(// ( types, fn )
i=n,o=n=void 0):null==i&&("string"==typeof n?(// ( types, selector, fn )
i=o,o=void 0):(// ( types, data, fn )
i=o,o=n,n=void 0)),!1===i)i=eD;else if(!i)return e;return 1===r&&(a=i,// Use same guid so caller can remove using origFn
(i=function(e){return(// Can use an empty set, since event contains the info
S().off(e),a.apply(this,arguments))}).guid=a.guid||(a.guid=S.guid++)),e.each(function(){S.event.add(this,t,i,o,n)})}// Ensure the presence of an event listener that handles manually-triggered
// synthetic events by interrupting progress until reinvoked in response to
// *native* events that it fires directly, ensuring that state changes have
// already occurred before other listeners are invoked.
function eL(e,t,n){// Missing `isSetup` indicates a trigger call, which must force setup through jQuery.event.add
if(!n){void 0===eo.get(e,t)&&S.event.add(e,t,eA);return}// Register the controller as a special universal handler for all event namespaces
eo.set(e,t,!1),S.event.add(e,t,{namespace:!1,handler:function(e){var n,o=eo.get(this,t);if(1&e.isTrigger&&this[t]){// Interrupt processing of the outer synthetic .trigger()ed event
if(o)(S.event.special[t]||{}).delegateType&&e.stopPropagation();else if(// Store arguments for use when handling the inner native event
// There will always be at least one argument (an event object), so this array
// will not be confused with a leftover capture object.
o=r.call(arguments),eo.set(this,t,o),// Trigger the native event and capture its result
this[t](),n=eo.get(this,t),eo.set(this,t,!1),o!==n)return(// Cancel the outer synthetic event
e.stopImmediatePropagation(),e.preventDefault(),n)}else o&&(// ...and capture the result
eo.set(this,t,S.event.trigger(o[0],o.slice(1),this)),// Abort handling of the native event by all jQuery handlers while allowing
// native handlers on the same element to run. On target, this is achieved
// by stopping immediate propagation just on the jQuery event. However,
// the native event is re-wrapped by a jQuery one on each level of the
// propagation so the only way to stop it for jQuery is to stop it for
// everyone via native `stopPropagation()`. This is not a problem for
// focus/blur which don't bubble, but it does also stop click on checkboxes
// and radios. We accept this limitation.
e.stopPropagation(),e.isImmediatePropagationStopped=eA)}})}/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */S.event={global:{},add:function(e,t,n,o,i){var r,a,s,l,c,u,f,d,p,h,m,g=eo.get(e);// Only attach events to objects that accept data
if(et(e))for(n.handler&&(n=(r=n).handler,i=r.selector),i&&S.find.matchesSelector(ef,i),n.guid||(n.guid=S.guid++),(l=g.events)||(l=g.events=Object.create(null)),(a=g.handle)||(a=g.handle=function(t){// Discard the second event of a jQuery.event.trigger() and
// when an event is called after a page has unloaded
return S.event.triggered!==t.type?S.event.dispatch.apply(e,arguments):void 0}),c=// Handle multiple events separated by a space
(t=(t||"").match(_)||[""]).length;c--;)// There *must* be a type, no attaching namespace-only handlers
p=m=(s=eE.exec(t[c])||[])[1],h=(s[2]||"").split(".").sort(),p&&(// If event changes its type, use the special event handlers for the changed type
f=S.event.special[p]||{},// If selector defined, determine special event api type, otherwise given type
p=(i?f.delegateType:f.bindType)||p,// Update special based on newly reset type
f=S.event.special[p]||{},// handleObj is passed to all event handlers
u=S.extend({type:p,origType:m,data:o,handler:n,guid:n.guid,selector:i,needsContext:i&&S.expr.match.needsContext.test(i),namespace:h.join(".")},r),(d=l[p])||((d=l[p]=[]).delegateCount=0,(!f.setup||!1===f.setup.call(e,o,h,a))&&e.addEventListener&&e.addEventListener(p,a)),f.add&&(f.add.call(e,u),u.handler.guid||(u.handler.guid=n.guid)),i?d.splice(d.delegateCount++,0,u):d.push(u),// Keep track of which events have ever been used, for event optimization
S.event.global[p]=!0)},// Detach an event or set of events from an element
remove:function(e,t,n,o,i){var r,a,s,l,c,u,f,d,p,h,m,g=eo.hasData(e)&&eo.get(e);if(g&&(l=g.events)){for(c=// Once for each type.namespace in types; type may be omitted
(t=(t||"").match(_)||[""]).length;c--;){// Unbind all events (on this namespace, if provided) for the element
if(p=m=(s=eE.exec(t[c])||[])[1],h=(s[2]||"").split(".").sort(),!p){for(p in l)S.event.remove(e,p+t[c],n,o,!0);continue}for(f=S.event.special[p]||{},d=l[p=(o?f.delegateType:f.bindType)||p]||[],s=s[2]&&RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),// Remove matching events
a=r=d.length;r--;)u=d[r],(i||m===u.origType)&&(!n||n.guid===u.guid)&&(!s||s.test(u.namespace))&&(!o||o===u.selector||"**"===o&&u.selector)&&(d.splice(r,1),u.selector&&d.delegateCount--,f.remove&&f.remove.call(e,u));a&&!d.length&&(f.teardown&&!1!==f.teardown.call(e,h,g.handle)||S.removeEvent(e,p,g.handle),delete l[p])}S.isEmptyObject(l)&&eo.remove(e,"handle events")}},dispatch:function(e){var t,n,o,i,r,a,s=Array(arguments.length),l=S.event.fix(e),c=(eo.get(this,"events")||Object.create(null))[l.type]||[],u=S.event.special[l.type]||{};for(t=1,// Use the fix-ed jQuery.Event rather than the (read-only) native event
s[0]=l;t<arguments.length;t++)s[t]=arguments[t];// Call the preDispatch hook for the mapped type, and let it bail if desired
if(l.delegateTarget=this,!u.preDispatch||!1!==u.preDispatch.call(this,l)){for(// Determine handlers
a=S.event.handlers.call(this,l,c),// Run delegates first; they may want to stop propagation beneath us
t=0;(i=a[t++])&&!l.isPropagationStopped();)for(l.currentTarget=i.elem,n=0;(r=i.handlers[n++])&&!l.isImmediatePropagationStopped();)// specially universal or its namespaces are a superset of the event's.
(!l.rnamespace||!1===r.namespace||l.rnamespace.test(r.namespace))&&(l.handleObj=r,l.data=r.data,void 0!==(o=((S.event.special[r.origType]||{}).handle||r.handler).apply(i.elem,s))&&!1===(l.result=o)&&(l.preventDefault(),l.stopPropagation()));return u.postDispatch&&u.postDispatch.call(this,l),l.result}},handlers:function(e,t){var n,o,i,r,a,s=[],l=t.delegateCount,c=e.target;// Find delegate handlers
if(l&&// Support: IE <=9
// Black-hole SVG <use> instance trees (trac-13180)
c.nodeType&&// Support: Firefox <=42
// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
// Support: IE 11 only
// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
!("click"===e.type&&e.button>=1)){for(;c!==this;c=c.parentNode||this)// Don't process clicks on disabled elements (trac-6911, trac-8165, trac-11382, trac-11764)
if(1===c.nodeType&&!("click"===e.type&&!0===c.disabled)){for(n=0,r=[],a={};n<l;n++)void 0===a[// Don't conflict with Object.prototype properties (trac-13203)
i=(o=t[n]).selector+" "]&&(a[i]=o.needsContext?S(i,this).index(c)>-1:S.find(i,this,null,[c]).length),a[i]&&r.push(o);r.length&&s.push({elem:c,handlers:r})}}return(// Add the remaining (directly-bound) handlers
c=this,l<t.length&&s.push({elem:c,handlers:t.slice(l)}),s)},addProp:function(e,t){Object.defineProperty(S.Event.prototype,e,{enumerable:!0,configurable:!0,get:m(t)?function(){if(this.originalEvent)return t(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[e]},set:function(t){Object.defineProperty(this,e,{enumerable:!0,configurable:!0,writable:!0,value:t})}})},fix:function(e){return e[S.expando]?e:new S.Event(e)},special:{load:{// Prevent triggered image.load events from bubbling to window.load
noBubble:!0},click:{// Utilize native event to ensure correct state for checkable inputs
setup:function(e){// For mutual compressibility with _default, replace `this` access with a local var.
// `|| data` is dead code meant only to preserve the variable through minification.
var t=this||e;// Return false to allow normal processing in the caller
return ey.test(t.type)&&t.click&&k(t,"input")&&eL(t,"click",!0),!1},trigger:function(e){// For mutual compressibility with _default, replace `this` access with a local var.
// `|| data` is dead code meant only to preserve the variable through minification.
var t=this||e;// Return non-false to allow normal event-path propagation
return ey.test(t.type)&&t.click&&k(t,"input")&&eL(t,"click"),!0},// For cross-browser consistency, suppress native .click() on links
// Also prevent it if we're currently inside a leveraged native-event stack
_default:function(e){var t=e.target;return ey.test(t.type)&&t.click&&k(t,"input")&&eo.get(t,"click")||k(t,"a")}},beforeunload:{postDispatch:function(e){// Support: Firefox 20+
// Firefox doesn't alert if the returnValue field is not set.
void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},S.removeEvent=function(e,t,n){// This "if" is needed for plain objects
e.removeEventListener&&e.removeEventListener(t,n)},S.Event=function(e,t){// Allow instantiation without the 'new' keyword
if(!(this instanceof S.Event))return new S.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,// Events bubbling up the document may have been marked as prevented
// by a handler lower down the tree; reflect the correct value.
this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&// Support: Android <=2.3 only
!1===e.returnValue?eA:eD,// Create target properties
// Support: Safari <=6 - 7 only
// Target should not be a text node (trac-504, trac-13143)
this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&S.extend(this,t),// Create a timestamp if incoming event doesn't have one
this.timeStamp=e&&e.timeStamp||Date.now(),// Mark it as fixed
this[S.expando]=!0},// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
S.Event.prototype={constructor:S.Event,isDefaultPrevented:eD,isPropagationStopped:eD,isImmediatePropagationStopped:eD,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=eA,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=eA,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=eA,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},// Includes all common event props including KeyEvent and MouseEvent specific props
S.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,char:!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},S.event.addProp),S.each({focus:"focusin",blur:"focusout"},function(e,t){function n(e){if(v.documentMode){// Support: IE 11+
// Attach a single focusin/focusout handler on the document while someone wants
// focus/blur. This is because the former are synchronous in IE while the latter
// are async. In other browsers, all those handlers are invoked synchronously.
// `handle` from private data would already wrap the event, but we need
// to change the `type` here.
var n=eo.get(this,"handle"),o=S.event.fix(e);o.type="focusin"===e.type?"focus":"blur",o.isSimulated=!0,// First, handle focusin/focusout
n(e),o.target===o.currentTarget&&// `jQuery.event.add`, so event handle will already have been set
// by this point.
n(o)}else // while someone wants focusin/focusout.
S.event.simulate(t,e.target,S.event.fix(e))}S.event.special[e]={// Utilize native event if possible so blur/focus sequence is correct
setup:function(){var o;if(// Claim the first handler
// dataPriv.set( this, "focus", ... )
// dataPriv.set( this, "blur", ... )
eL(this,e,!0),!v.documentMode)return!1;// Support: IE 9 - 11+
// We use the same native handler for focusin & focus (and focusout & blur)
// so we need to coordinate setup & teardown parts between those events.
// Use `delegateType` as the key as `type` is already used by `leverageNative`.
(o=eo.get(this,t))||this.addEventListener(t,n),eo.set(this,t,(o||0)+1)},trigger:function(){// Return non-false to allow normal event-path propagation
return(// Force setup before trigger
eL(this,e),!0)},teardown:function(){var e;if(!v.documentMode)return!1;(e=eo.get(this,t)-1)?eo.set(this,t,e):(this.removeEventListener(t,n),eo.remove(this,t))},// Suppress native focus or blur if we're currently inside
// a leveraged native-event stack
_default:function(t){return eo.get(t.target,e)},delegateType:t},// Support: Firefox <=44
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
S.event.special[t]={setup:function(){// Handle: regular nodes (via `this.ownerDocument`), window
// (via `this.document`) & document (via `this`).
var o=this.ownerDocument||this.document||this,i=v.documentMode?this:o,r=eo.get(i,t);r||(v.documentMode?this.addEventListener(t,n):o.addEventListener(e,n,!0)),eo.set(i,t,(r||0)+1)},teardown:function(){var o=this.ownerDocument||this.document||this,i=v.documentMode?this:o,r=eo.get(i,t)-1;r?eo.set(i,t,r):(v.documentMode?this.removeEventListener(t,n):o.removeEventListener(e,n,!0),eo.remove(i,t))}}}),// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
S.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,t){S.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,o=e.relatedTarget,i=e.handleObj;return o&&(o===this||S.contains(this,o))||(e.type=i.origType,n=i.handler.apply(this,arguments),e.type=t),n}}}),S.fn.extend({on:function(e,t,n,o){return ej(this,e,t,n,o)},one:function(e,t,n,o){return ej(this,e,t,n,o,1)},off:function(e,t,n){var o,i;if(e&&e.preventDefault&&e.handleObj)return(// ( event )  dispatched jQuery.Event
o=e.handleObj,S(e.delegateTarget).off(o.namespace?o.origType+"."+o.namespace:o.origType,o.selector,o.handler),this);if("object"==typeof e){// ( types-object [, selector] )
for(i in e)this.off(i,t,e[i]);return this}return(!1===t||"function"==typeof t)&&(// ( types [, fn] )
n=t,t=void 0),!1===n&&(n=eD),this.each(function(){S.event.remove(this,e,n,t)})}});var // In IE/Edge using regex groups here causes severe slowdowns.
// See https://connect.microsoft.com/IE/feedback/details/1736512/
eP=/<script|<style|<link/i,eI=/checked\s*(?:[^=]|=\s*.checked.)/i,eO=/^\s*<!\[CDATA\[|\]\]>\s*$/g;// Prefer a tbody over its parent table for containing new rows
function eN(e,t){return k(e,"table")&&k(11!==t.nodeType?t:t.firstChild,"tr")&&S(e).children("tbody")[0]||e}// Replace/restore the type attribute of script elements for safe DOM manipulation
function eR(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function ez(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function eH(e,t){var n,o,i,r,a,s;if(1===t.nodeType){// 1. Copy private data: events, handlers, etc.
if(eo.hasData(e)&&(s=eo.get(e).events))for(i in eo.remove(t,"handle events"),s)for(n=0,o=s[i].length;n<o;n++)S.event.add(t,i,s[i][n]);// 2. Copy user data
ei.hasData(e)&&(r=ei.access(e),a=S.extend({},r),ei.set(t,a))}}function eM(e,t,n,o){// Flatten any nested arrays
t=a(t);var i,r,s,l,c,u,f=0,d=e.length,p=d-1,g=t[0],v=m(g);// We can't cloneNode fragments that contain checked, in WebKit
if(v||d>1&&"string"==typeof g&&!h.checkClone&&eI.test(g))return e.each(function(i){var r=e.eq(i);v&&(t[0]=g.call(this,i,r.html())),eM(r,t,n,o)});if(d&&(r=(i=ek(t,e[0].ownerDocument,!1,e,o)).firstChild,1===i.childNodes.length&&(i=r),r||o)){// Use the original fragment for the last item
// instead of the first because it can end up
// being emptied incorrectly in certain situations (trac-8070).
for(l=(s=S.map(eT(i,"script"),eR)).length;f<d;f++)c=i,f!==p&&(c=S.clone(c,!0,!0),l&&// push.apply(_, arraylike) throws on ancient WebKit
S.merge(s,eT(c,"script"))),n.call(e[f],c,f);if(l)// Evaluate executable scripts on first document insertion
for(u=s[s.length-1].ownerDocument,// Re-enable scripts
S.map(s,ez),f=0;f<l;f++)c=s[f],eb.test(c.type||"")&&!eo.access(c,"globalEval")&&S.contains(u,c)&&(c.src&&"module"!==(c.type||"").toLowerCase()?S._evalUrl&&!c.noModule&&S._evalUrl(c.src,{nonce:c.nonce||c.getAttribute("nonce")},u):// needed as in XML documents they're already not visible when
// inspecting element contents and in HTML documents they have no
// meaning but we're preserving that logic for backwards compatibility.
// This will be removed completely in 4.0. See gh-4904.
x(c.textContent.replace(eO,""),c,u))}return e}function eq(e,t,n){for(var o,i=t?S.filter(t,e):e,r=0;null!=(o=i[r]);r++)n||1!==o.nodeType||S.cleanData(eT(o)),o.parentNode&&(n&&ed(o)&&eS(eT(o,"script")),o.parentNode.removeChild(o));return e}S.extend({htmlPrefilter:function(e){return e},clone:function(e,t,n){var o,i,r,a,s=e.cloneNode(!0),l=ed(e);// Fix IE cloning issues
if(!h.noCloneChecked&&(1===e.nodeType||11===e.nodeType)&&!S.isXMLDoc(e))for(o=0,// We eschew jQuery#find here for performance reasons:
// https://jsperf.com/getall-vs-sizzle/2
a=eT(s),i=(r=eT(e)).length;o<i;o++)!// Fix IE bugs, see support tests
function(e,t){var n=t.nodeName.toLowerCase();// Fails to persist the checked state of a cloned checkbox or radio button.
"input"===n&&ey.test(e.type)?t.checked=e.checked:("input"===n||"textarea"===n)&&(t.defaultValue=e.defaultValue)}(r[o],a[o]);// Copy the events from the original to the clone
if(t){if(n)for(o=0,r=r||eT(e),a=a||eT(s),i=r.length;o<i;o++)eH(r[o],a[o]);else eH(e,s)}// Return the cloned set
return(// Preserve script evaluation history
(a=eT(s,"script")).length>0&&eS(a,!l&&eT(e,"script")),s)},cleanData:function(e){for(var t,n,o,i=S.event.special,r=0;void 0!==(n=e[r]);r++)if(et(n)){if(t=n[eo.expando]){if(t.events)for(o in t.events)i[o]?S.event.remove(n,o):S.removeEvent(n,o,t.handle);// Support: Chrome <=35 - 45+
// Assign undefined instead of using delete, see Data#remove
n[eo.expando]=void 0}n[ei.expando]&&// Assign undefined instead of using delete, see Data#remove
(n[ei.expando]=void 0)}}}),S.fn.extend({detach:function(e){return eq(this,e,!0)},remove:function(e){return eq(this,e)},text:function(e){return K(this,function(e){return void 0===e?S.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=e)})},null,e,arguments.length)},append:function(){return eM(this,arguments,function(e){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&eN(this,e).appendChild(e)})},prepend:function(){return eM(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=eN(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return eM(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return eM(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(// Prevent memory leaks
S.cleanData(eT(e,!1)),// Remove any remaining nodes
e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return S.clone(this,e,t)})},html:function(e){return K(this,function(e){var t=this[0]||{},n=0,o=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;// See if we can take a shortcut and just use innerHTML
if("string"==typeof e&&!eP.test(e)&&!ew[(ex.exec(e)||["",""])[1].toLowerCase()]){e=S.htmlPrefilter(e);try{for(;n<o;n++)t=this[n]||{},1===t.nodeType&&(S.cleanData(eT(t,!1)),t.innerHTML=e);t=0;// If using innerHTML throws an exception, use the fallback method
}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=[];// Make the changes, replacing each non-ignored context element with the new content
return eM(this,arguments,function(t){var n=this.parentNode;0>S.inArray(this,e)&&(S.cleanData(eT(this)),n&&n.replaceChild(t,this));// Force callback invocation
},e)}}),S.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){S.fn[e]=function(e){for(var n,o=[],i=S(e),r=i.length-1,a=0;a<=r;a++)n=a===r?this:this.clone(!0),S(i[a])[t](n),// Support: Android <=4.0 only, PhantomJS 1 only
// .get() because push.apply(_, arraylike) throws on ancient WebKit
s.apply(o,n.get());return this.pushStack(o)}});var eB=RegExp("^("+el+")(?!px)[a-z%]+$","i"),eF=/^--/,eW=function(t){// Support: IE <=11 only, Firefox <=30 (trac-15098, trac-14150)
// IE throws on elements created in popups
// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
var n=t.ownerDocument.defaultView;return n&&n.opener||(n=e),n.getComputedStyle(t)},e_=function(e,t,n){var o,i,r={};// Remember the old values, and insert the new ones
for(i in t)r[i]=e.style[i],e.style[i]=t[i];// Revert the old values
for(i in o=n.call(e),t)e.style[i]=r[i];return o},e$=RegExp(eu.join("|"),"i");function eV(e,t,n){var o,i,r,a,s=eF.test(t),// Retrieving style before computed somehow
// fixes an issue with getting wrong values
// on detached elements
l=e.style;return(n=n||eW(e))&&(// Support: IE <=9 - 11+
// IE only supports `"float"` in `getPropertyValue`; in computed styles
// it's only available as `"cssFloat"`. We no longer modify properties
// sent to `.css()` apart from camelCasing, so we need to check both.
// Normally, this would create difference in behavior: if
// `getPropertyValue` returns an empty string, the value returned
// by `.css()` would be `undefined`. This is usually the case for
// disconnected elements. However, in IE even disconnected elements
// with no styles return `"none"` for `getPropertyValue( "float" )`
a=n.getPropertyValue(t)||n[t],s&&a&&// Spec requires trimming whitespace for custom properties (gh-4926).
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
(a=a.replace(L,"$1")||void 0),""!==a||ed(e)||(a=S.style(e,t)),!h.pixelBoxStyles()&&eB.test(a)&&e$.test(t)&&(// Remember the original values
o=l.width,i=l.minWidth,r=l.maxWidth,// Put in the new values to get a computed value out
l.minWidth=l.maxWidth=l.width=a,a=n.width,// Revert the changed values
l.width=o,l.minWidth=i,l.maxWidth=r)),void 0!==a?// IE returns zIndex value as an integer.
a+"":a}function eU(e,t){// Define the hook, we'll check on the first run if it's really needed.
return{get:function(){if(e()){// Hook not needed (or it's not possible to use it due
// to missing dependency), remove it.
delete this.get;return}// Hook needed; redefine it so that the support test is not executed again.
return(this.get=t).apply(this,arguments)}}}!function(){// Executing both pixelPosition & boxSizingReliable tests require only one layout
// so they're executed at the same time to save the second computation.
function t(){// This is a singleton, we need to execute it only once
if(u){c.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",u.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",ef.appendChild(c).appendChild(u);var t=e.getComputedStyle(u);o="1%"!==t.top,// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
l=12===n(t.marginLeft),// Support: Android 4.0 - 4.3 only, Safari <=9.1 - 10.1, iOS <=7.0 - 9.3
// Some styles come back with percentage values, even though they shouldn't
u.style.right="60%",a=36===n(t.right),// Support: IE 9 - 11 only
// Detect misreporting of content dimensions for box-sizing:border-box elements
i=36===n(t.width),// Support: IE 9 only
// Detect overflow:scroll screwiness (gh-3699)
// Support: Chrome <=64
// Don't get tricked when zoom affects offsetWidth (gh-4029)
u.style.position="absolute",r=12===n(u.offsetWidth/3),ef.removeChild(c),// Nullify the div so it wouldn't be stored in the memory and
// it will also be a sign that checks already performed
u=null}}function n(e){return Math.round(parseFloat(e))}var o,i,r,a,s,l,c=v.createElement("div"),u=v.createElement("div");// Finish early in limited (non-browser) environments
u.style&&(// Support: IE <=9 - 11 only
// Style of cloned element affects source element cloned (trac-8908)
u.style.backgroundClip="content-box",u.cloneNode(!0).style.backgroundClip="",h.clearCloneStyle="content-box"===u.style.backgroundClip,S.extend(h,{boxSizingReliable:function(){return t(),i},pixelBoxStyles:function(){return t(),a},pixelPosition:function(){return t(),o},reliableMarginLeft:function(){return t(),l},scrollboxSize:function(){return t(),r},// Support: IE 9 - 11+, Edge 15 - 18+
// IE/Edge misreport `getComputedStyle` of table rows with width/height
// set in CSS while `offset*` properties report correct values.
// Behavior in IE 9 is more subtle than in newer versions & it passes
// some versions of this test; make sure not to make it pass there!
//
// Support: Firefox 70+
// Only Firefox includes border widths
// in computed dimensions. (gh-4529)
reliableTrDimensions:function(){var t,n,o,i;return null==s&&(t=v.createElement("table"),n=v.createElement("tr"),o=v.createElement("div"),t.style.cssText="position:absolute;left:-11111px;border-collapse:separate",n.style.cssText="box-sizing:content-box;border:1px solid",// Support: Chrome 86+
// Height set through cssText does not get applied.
// Computed height then comes back as 0.
n.style.height="1px",o.style.height="9px",// Support: Android 8 Chrome 86+
// In our bodyBackground.html iframe,
// display for all div elements is set to "inline",
// which causes a problem only in Android 8 Chrome 86.
// Ensuring the div is `display: block`
// gets around this issue.
o.style.display="block",ef.appendChild(t).appendChild(n).appendChild(o),s=parseInt((i=e.getComputedStyle(n)).height,10)+parseInt(i.borderTopWidth,10)+parseInt(i.borderBottomWidth,10)===n.offsetHeight,ef.removeChild(t)),s}}))}();var eX=["Webkit","Moz","ms"],eG=v.createElement("div").style,eY={};// Return a potentially-mapped jQuery.cssProps or vendor prefixed property
function eK(e){return S.cssProps[e]||eY[e]||(e in eG?e:eY[e]=// Return a vendor-prefixed property or undefined
function(e){for(// Check for vendor prefixed names
var t=e[0].toUpperCase()+e.slice(1),n=eX.length;n--;)if((e=eX[n]+t)in eG)return e}(e)||e)}var // except "table", "table-cell", or "table-caption"
// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
eQ=/^(none|table(?!-c[ea]).+)/,eJ={position:"absolute",visibility:"hidden",display:"block"},eZ={letterSpacing:"0",fontWeight:"400"};function e0(e,t,n){// Any relative (+/-) values have already been
// normalized at this point
var o=ec.exec(t);return o?Math.max(0,o[2]-(n||0))+(o[3]||"px"):t}function e1(e,t,n,o,i,r){var a="width"===t?1:0,s=0,l=0,c=0;// Adjustment may not be necessary
if(n===(o?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(c+=S.css(e,n+eu[a],!0,i)),o?("content"===n&&(l-=S.css(e,"padding"+eu[a],!0,i)),"margin"!==n&&(l-=S.css(e,"border"+eu[a]+"Width",!0,i))):(// Add padding
l+=S.css(e,"padding"+eu[a],!0,i),"padding"!==n?l+=S.css(e,"border"+eu[a]+"Width",!0,i):s+=S.css(e,"border"+eu[a]+"Width",!0,i));return!o&&r>=0&&// Assuming integer scroll gutter, subtract the rest and round down
(l+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-r-l-s-.5))||0),l+c}function e3(e,t,n){// Start with computed style
var o=eW(e),i=(!h.boxSizingReliable()||n)&&"border-box"===S.css(e,"boxSizing",!1,o),r=i,a=eV(e,t,o),s="offset"+t[0].toUpperCase()+t.slice(1);// Support: Firefox <=54
// Return a confounding non-pixel value or feign ignorance, as appropriate.
if(eB.test(a)){if(!n)return a;a="auto"}// Adjust for the element's box model
return(!h.boxSizingReliable()&&i||// Support: IE 10 - 11+, Edge 15 - 18+
// IE/Edge misreport `getComputedStyle` of table rows with width/height
// set in CSS while `offset*` properties report correct values.
// Interestingly, in some cases IE 9 doesn't suffer from this issue.
!h.reliableTrDimensions()&&k(e,"tr")||// Fall back to offsetWidth/offsetHeight when value is "auto"
// This happens for inline elements with no explicit setting (gh-3571)
"auto"===a||// Support: Android <=4.1 - 4.3 only
// Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
!parseFloat(a)&&"inline"===S.css(e,"display",!1,o))&&// Make sure the element is visible & connected
e.getClientRects().length&&(i="border-box"===S.css(e,"boxSizing",!1,o),// Where available, offsetWidth/offsetHeight approximate border box dimensions.
// Where not available (e.g., SVG), assume unreliable box-sizing and interpret the
// retrieved value as a content box dimension.
(r=s in e)&&(a=e[s])),// Normalize "" and auto
(a=parseFloat(a)||0)+e1(e,t,n||(i?"border":"content"),r,o,a)+"px"}function e2(e,t,n,o,i){return new e2.prototype.init(e,t,n,o,i)}S.extend({// Add in style property hooks for overriding the default
// behavior of getting and setting a style property
cssHooks:{opacity:{get:function(e,t){if(t){// We should always get a number back from opacity
var n=eV(e,"opacity");return""===n?"1":n}}}},// Don't automatically add "px" to these possibly-unitless properties
cssNumber:{animationIterationCount:!0,aspectRatio:!0,borderImageSlice:!0,columnCount:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,scale:!0,widows:!0,zIndex:!0,zoom:!0,// SVG-related
fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeMiterlimit:!0,strokeOpacity:!0},// Add in properties whose names you wish to fix before
// setting or getting the value
cssProps:{},// Get and set the style property on a DOM Node
style:function(e,t,n,o){// Don't set styles on text and comment nodes
if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){// Make sure that we're working with the right name
var i,r,a,s=ee(t),l=eF.test(t),c=e.style;// Check if we're setting a value
if(l||(t=eK(s)),// Gets hook for the prefixed version, then unprefixed version
a=S.cssHooks[t]||S.cssHooks[s],void 0===n)return(// If a hook was provided get the non-computed value from there
a&&"get"in a&&void 0!==(i=a.get(e,!1,o))?i:c[t]);// Make sure that null and NaN values aren't set (trac-7116)
"string"==(r=typeof n)&&(i=ec.exec(n))&&i[1]&&(n=em(e,t,i),// Fixes bug trac-9237
r="number"),null!=n&&n==n&&("number"!==r||l||(n+=i&&i[3]||(S.cssNumber[s]?"":"px")),h.clearCloneStyle||""!==n||0!==t.indexOf("background")||(c[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,o))||(l?c.setProperty(t,n):c[t]=n))}},css:function(e,t,n,o){var i,r,a,s=ee(t);return(// Make numeric if forced or a qualifier was provided and val looks numeric
(eF.test(t)||(t=eK(s)),// Try prefixed name followed by the unprefixed name
(a=S.cssHooks[t]||S.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=eV(e,t,o)),"normal"===i&&t in eZ&&(i=eZ[t]),""===n||n)?(r=parseFloat(i),!0===n||isFinite(r)?r||0:i):i)}}),S.each(["height","width"],function(e,t){S.cssHooks[t]={get:function(e,n,o){if(n)// but it must have a current display style that would benefit
return!eQ.test(S.css(e,"display"))||// Support: Safari 8+
// Table columns in Safari have non-zero offsetWidth & zero
// getBoundingClientRect().width unless display is changed.
// Support: IE <=11 only
// Running getBoundingClientRect on a disconnected node
// in IE throws an error.
e.getClientRects().length&&e.getBoundingClientRect().width?e3(e,t,o):e_(e,eJ,function(){return e3(e,t,o)})},set:function(e,n,o){var i,r=eW(e),// to avoid forcing a reflow.
a=!h.scrollboxSize()&&"absolute"===r.position,s=(a||o)&&"border-box"===S.css(e,"boxSizing",!1,r),l=o?e1(e,t,o,s,r):0;return s&&a&&(l-=Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-parseFloat(r[t])-e1(e,t,"border",!1,r)-.5)),l&&(i=ec.exec(n))&&"px"!==(i[3]||"px")&&(e.style[t]=n,n=S.css(e,t)),e0(e,n,l)}}}),S.cssHooks.marginLeft=eU(h.reliableMarginLeft,function(e,t){if(t)return(parseFloat(eV(e,"marginLeft"))||e.getBoundingClientRect().left-e_(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),// These hooks are used by animate to expand properties
S.each({margin:"",padding:"",border:"Width"},function(e,t){S.cssHooks[e+t]={expand:function(n){for(var o=0,i={},r="string"==typeof n?n.split(" "):[n];o<4;o++)i[e+eu[o]+t]=r[o]||r[o-2]||r[0];return i}},"margin"!==e&&(S.cssHooks[e+t].set=e0)}),S.fn.extend({css:function(e,t){return K(this,function(e,t,n){var o,i,r={},a=0;if(Array.isArray(t)){for(o=eW(e),i=t.length;a<i;a++)r[t[a]]=S.css(e,t[a],!1,o);return r}return void 0!==n?S.style(e,t,n):S.css(e,t)},e,t,arguments.length>1)}}),S.Tween=e2,e2.prototype={constructor:e2,init:function(e,t,n,o,i,r){this.elem=e,this.prop=n,this.easing=i||S.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=o,this.unit=r||(S.cssNumber[n]?"":"px")},cur:function(){var e=e2.propHooks[this.prop];return e&&e.get?e.get(this):e2.propHooks._default.get(this)},run:function(e){var t,n=e2.propHooks[this.prop];return this.options.duration?this.pos=t=S.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):e2.propHooks._default.set(this),this}},e2.prototype.init.prototype=e2.prototype,e2.propHooks={_default:{get:function(e){var t;return(// Use a property on the element directly when it is not a DOM element,
// or when there is no matching style property that exists.
1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:// Passing an empty string as a 3rd parameter to .css will automatically
// attempt a parseFloat and fallback to a string if the parse fails.
// Simple values such as "10px" are parsed to Float;
// complex values such as "rotate(1rad)" are returned as-is.
(t=S.css(e.elem,e.prop,""))&&"auto"!==t?t:0)},set:function(e){// Use step hook for back compat.
// Use cssHook if its there.
// Use .style if available and use plain properties where available.
S.fx.step[e.prop]?S.fx.step[e.prop](e):1===e.elem.nodeType&&(S.cssHooks[e.prop]||null!=e.elem.style[eK(e.prop)])?S.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},// Support: IE <=9 only
// Panic based approach to setting things on disconnected nodes
e2.propHooks.scrollTop=e2.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},S.easing={linear:function(e){return e},swing:function(e){return .5-Math.cos(e*Math.PI)/2},_default:"swing"},S.fx=e2.prototype.init,// Back compat <1.8 extension point
S.fx.step={};var e5,e4,e6,e8,e7=/^(?:toggle|show|hide)$/,e9=/queueHooks$/;// Animations created synchronously will run synchronously
function te(){return e.setTimeout(function(){e6=void 0}),e6=Date.now()}// Generate parameters to create a standard animation
function tt(e,t){var n,o=0,i={height:e};for(// If we include width, step value is 1 to do all cssExpand values,
// otherwise step value is 2 to skip over Left and Right
t=t?1:0;o<4;o+=2-t)i["margin"+(n=eu[o])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function tn(e,t,n){for(var o,i=(to.tweeners[t]||[]).concat(to.tweeners["*"]),r=0,a=i.length;r<a;r++)if(o=i[r].call(n,t,e))return o}function to(e,t,n){var o,i,r=0,a=to.prefilters.length,s=S.Deferred().always(function(){// Don't match elem in the :animated selector
delete l.elem}),l=function(){if(i)return!1;for(var t=e6||te(),n=Math.max(0,c.startTime+c.duration-t),o=1-(n/c.duration||0),r=0,a=c.tweens.length;r<a;r++)c.tweens[r].run(o);return(// If there's more to do, yield
(s.notifyWith(e,[c,o,n]),o<1&&a)?n:(a||s.notifyWith(e,[c,1,0]),// Resolve the animation and report its conclusion
s.resolveWith(e,[c]),!1))},c=s.promise({elem:e,props:S.extend({},t),opts:S.extend(!0,{specialEasing:{},easing:S.easing._default},n),originalProperties:t,originalOptions:n,startTime:e6||te(),duration:n.duration,tweens:[],createTween:function(t,n){var o=S.Tween(e,c.opts,t,n,c.opts.specialEasing[t]||c.opts.easing);return c.tweens.push(o),o},stop:function(t){var n=0,// otherwise we skip this part
o=t?c.tweens.length:0;if(i)return this;for(i=!0;n<o;n++)c.tweens[n].run(1);return t?(s.notifyWith(e,[c,1,0]),s.resolveWith(e,[c,t])):s.rejectWith(e,[c,t]),this}}),u=c.props;for(function(e,t){var n,o,i,r,a;// camelCase, specialEasing and expand cssHook pass
for(n in e)if(i=t[o=ee(n)],Array.isArray(r=e[n])&&(i=r[1],r=e[n]=r[0]),n!==o&&(e[o]=r,delete e[n]),(a=S.cssHooks[o])&&("expand"in a))// Not quite $.extend, this won't overwrite existing keys.
// Reusing 'index' because we have the correct "name"
for(n in r=a.expand(r),delete e[o],r)(n in e)||(e[n]=r[n],t[n]=i);else t[o]=i}(u,c.opts.specialEasing);r<a;r++)if(o=to.prefilters[r].call(c,e,u,c.opts))return m(o.stop)&&(S._queueHooks(c.elem,c.opts.queue).stop=o.stop.bind(o)),o;return S.map(u,tn,c),m(c.opts.start)&&c.opts.start.call(e,c),// Attach callbacks from options
c.progress(c.opts.progress).done(c.opts.done,c.opts.complete).fail(c.opts.fail).always(c.opts.always),S.fx.timer(S.extend(l,{elem:e,anim:c,queue:c.opts.queue})),c}S.Animation=S.extend(to,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return em(n.elem,e,ec.exec(t),n),n}]},tweener:function(e,t){m(e)?(t=e,e=["*"]):e=e.match(_);for(var n,o=0,i=e.length;o<i;o++)n=e[o],to.tweeners[n]=to.tweeners[n]||[],to.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var o,i,r,a,s,l,c,u,f="width"in t||"height"in t,d=this,p={},h=e.style,m=e.nodeType&&eh(e),g=eo.get(e,"fxshow");// Detect show/hide animations
for(o in n.queue||(null==(a=S._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,d.always(function(){// Ensure the complete handler is called before this completes
d.always(function(){a.unqueued--,S.queue(e,"fx").length||a.empty.fire()})})),t)if(i=t[o],e7.test(i)){if(delete t[o],r=r||"toggle"===i,i===(m?"hide":"show")){// Pretend to be hidden if this is a "show" and
// there is still data from a stopped show/hide
if("show"!==i||!g||void 0===g[o])continue;m=!0}p[o]=g&&g[o]||S.style(e,o)}if(!(!// Bail out if this is a no-op like .hide().hide()
(l=!S.isEmptyObject(t))&&S.isEmptyObject(p)))for(o in f&&1===e.nodeType&&(// Support: IE <=9 - 11, Edge 12 - 15
// Record all 3 overflow attributes because IE does not infer the shorthand
// from identically-valued overflowX and overflowY and Edge just mirrors
// the overflowX value there.
n.overflow=[h.overflow,h.overflowX,h.overflowY],null==// Identify a display type, preferring old show/hide data over the CSS cascade
(c=g&&g.display)&&(c=eo.get(e,"display")),"none"===(u=S.css(e,"display"))&&(c?u=c:(// Get nonempty value(s) by temporarily forcing visibility
ev([e],!0),c=e.style.display||c,u=S.css(e,"display"),ev([e]))),("inline"===u||"inline-block"===u&&null!=c)&&"none"===S.css(e,"float")&&(l||(d.done(function(){h.display=c}),null!=c||(c="none"===(u=h.display)?"":u)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",d.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),// Implement show/hide animations
l=!1,p)l||(g?"hidden"in g&&(m=g.hidden):g=eo.access(e,"fxshow",{display:c}),r&&(g.hidden=!m),m&&ev([e],!0),/* eslint-disable no-loop-func */d.done(function(){for(o in m||ev([e]),eo.remove(e,"fxshow"),p)S.style(e,o,p[o])})),// Per-property setup
l=tn(m?g[o]:0,o,d),o in g||(g[o]=l.start,m&&(l.end=l.start,l.start=0))}],prefilter:function(e,t){t?to.prefilters.unshift(e):to.prefilters.push(e)}}),S.speed=function(e,t,n){var o=e&&"object"==typeof e?S.extend({},e):{complete:n||!n&&t||m(e)&&e,duration:e,easing:n&&t||t&&!m(t)&&t};return S.fx.off?o.duration=0:"number"!=typeof o.duration&&(o.duration in S.fx.speeds?o.duration=S.fx.speeds[o.duration]:o.duration=S.fx.speeds._default),(null==o.queue||!0===o.queue)&&(o.queue="fx"),// Queueing
o.old=o.complete,o.complete=function(){m(o.old)&&o.old.call(this),o.queue&&S.dequeue(this,o.queue)},o},S.fn.extend({fadeTo:function(e,t,n,o){// Show any hidden elements after setting opacity to 0
return this.filter(eh).css("opacity",0).show()// Animate to the value specified
.end().animate({opacity:t},e,n,o)},animate:function(e,t,n,o){var i=S.isEmptyObject(e),r=S.speed(t,n,o),a=function(){// Operate on a copy of prop so per-property easing won't be lost
var t=to(this,S.extend({},e),r);// Empty animations, or finishing resolves immediately
(i||eo.get(this,"finish"))&&t.stop(!0)};return a.finish=a,i||!1===r.queue?this.each(a):this.queue(r.queue,a)},stop:function(e,t,n){var o=function(e){var t=e.stop;delete e.stop,t(n)};return"string"!=typeof e&&(n=t,t=e,e=void 0),t&&this.queue(e||"fx",[]),this.each(function(){var t=!0,i=null!=e&&e+"queueHooks",r=S.timers,a=eo.get(this);if(i)a[i]&&a[i].stop&&o(a[i]);else for(i in a)a[i]&&a[i].stop&&e9.test(i)&&o(a[i]);for(i=r.length;i--;)r[i].elem===this&&(null==e||r[i].queue===e)&&(r[i].anim.stop(n),t=!1,r.splice(i,1));// Start the next in the queue if the last step wasn't forced.
// Timers currently will call their complete callbacks, which
// will dequeue but only if they were gotoEnd.
(t||!n)&&S.dequeue(this,e)})},finish:function(e){return!1!==e&&(e=e||"fx"),this.each(function(){var t,n=eo.get(this),o=n[e+"queue"],i=n[e+"queueHooks"],r=S.timers,a=o?o.length:0;// Look for any active animations, and finish them
for(// Enable finishing flag on private data
n.finish=!0,// Empty the queue first
S.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=r.length;t--;)r[t].elem===this&&r[t].queue===e&&(r[t].anim.stop(!0),r.splice(t,1));// Look for any animations in the old queue and finish them
for(t=0;t<a;t++)o[t]&&o[t].finish&&o[t].finish.call(this);// Turn off finishing flag
delete n.finish})}}),S.each(["toggle","show","hide"],function(e,t){var n=S.fn[t];S.fn[t]=function(e,o,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(tt(t,!0),e,o,i)}}),// Generate shortcuts for custom animations
S.each({slideDown:tt("show"),slideUp:tt("hide"),slideToggle:tt("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){S.fn[e]=function(e,n,o){return this.animate(t,e,n,o)}}),S.timers=[],S.fx.tick=function(){var e,t=0,n=S.timers;for(e6=Date.now();t<n.length;t++)// Run the timer and safely remove it when done (allowing for external removal)
(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||S.fx.stop(),e6=void 0},S.fx.timer=function(e){S.timers.push(e),S.fx.start()},S.fx.interval=13,S.fx.start=function(){e8||(e8=!0,function t(){e8&&(!1===v.hidden&&e.requestAnimationFrame?e.requestAnimationFrame(t):e.setTimeout(t,S.fx.interval),S.fx.tick())}())},S.fx.stop=function(){e8=null},S.fx.speeds={slow:600,fast:200,// Default speed
_default:400},// Based off of the plugin by Clint Helfers, with permission.
S.fn.delay=function(t,n){return t=S.fx&&S.fx.speeds[t]||t,n=n||"fx",this.queue(n,function(n,o){var i=e.setTimeout(n,t);o.stop=function(){e.clearTimeout(i)}})},ti=v.createElement("input"),tr=v.createElement("select").appendChild(v.createElement("option")),ti.type="checkbox",// Support: Android <=4.3 only
// Default value for a checkbox should be "on"
h.checkOn=""!==ti.value,// Support: IE <=11 only
// Must access selectedIndex to make default options select
h.optSelected=tr.selected,// Support: IE <=11 only
// An input loses its value after becoming a radio
(ti=v.createElement("input")).value="t",ti.type="radio",h.radioValue="t"===ti.value;var ti,tr,ta,ts=S.expr.attrHandle;S.fn.extend({attr:function(e,t){return K(this,S.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){S.removeAttr(this,e)})}}),S.extend({attr:function(e,t,n){var o,i,r=e.nodeType;// Don't get/set attributes on text, comment and attribute nodes
if(3!==r&&8!==r&&2!==r){// Fallback to prop when attributes are not supported
if(void 0===e.getAttribute)return S.prop(e,t,n);if(1===r&&S.isXMLDoc(e)||(i=S.attrHooks[t.toLowerCase()]||(S.expr.match.bool.test(t)?ta:void 0)),void 0!==n){if(null===n){S.removeAttr(e,t);return}return i&&"set"in i&&void 0!==(o=i.set(e,n,t))?o:(e.setAttribute(t,n+""),n)}return i&&"get"in i&&null!==(o=i.get(e,t))?o:null==(o=S.find.attr(e,t))?void 0:o}},attrHooks:{type:{set:function(e,t){if(!h.radioValue&&"radio"===t&&k(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,o=0,// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
i=t&&t.match(_);if(i&&1===e.nodeType)for(;n=i[o++];)e.removeAttribute(n)}}),// Hooks for boolean attributes
ta={set:function(e,t,n){return!1===t?S.removeAttr(e,n):e.setAttribute(n,n),n}},S.each(S.expr.match.bool.source.match(/\w+/g),function(e,t){var n=ts[t]||S.find.attr;ts[t]=function(e,t,o){var i,r,a=t.toLowerCase();return o||(// Avoid an infinite loop by temporarily removing this function from the getter
r=ts[a],ts[a]=i,i=null!=n(e,t,o)?a:null,ts[a]=r),i}});var tl=/^(?:input|select|textarea|button)$/i,tc=/^(?:a|area)$/i;// Strip and collapse whitespace according to HTML spec
// https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace
function tu(e){return(e.match(_)||[]).join(" ")}function tf(e){return e.getAttribute&&e.getAttribute("class")||""}function td(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(_)||[]}S.fn.extend({prop:function(e,t){return K(this,S.prop,e,t,arguments.length>1)},removeProp:function(e){return this.each(function(){delete this[S.propFix[e]||e]})}}),S.extend({prop:function(e,t,n){var o,i,r=e.nodeType;// Don't get/set properties on text, comment and attribute nodes
if(3!==r&&8!==r&&2!==r)return(1===r&&S.isXMLDoc(e)||(// Fix name and attach hooks
t=S.propFix[t]||t,i=S.propHooks[t]),void 0!==n)?i&&"set"in i&&void 0!==(o=i.set(e,n,t))?o:e[t]=n:i&&"get"in i&&null!==(o=i.get(e,t))?o:e[t]},propHooks:{tabIndex:{get:function(e){// Support: IE <=9 - 11 only
// elem.tabIndex doesn't always return the
// correct value when it hasn't been explicitly set
// Use proper attribute retrieval (trac-12072)
var t=S.find.attr(e,"tabindex");return t?parseInt(t,10):tl.test(e.nodeName)||tc.test(e.nodeName)&&e.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),h.optSelected||(S.propHooks.selected={get:function(e){/* eslint no-unused-expressions: "off" */var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){/* eslint no-unused-expressions: "off" */var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),S.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){S.propFix[this.toLowerCase()]=this}),S.fn.extend({addClass:function(e){var t,n,o,i,r,a;return m(e)?this.each(function(t){S(this).addClass(e.call(this,t,tf(this)))}):(t=td(e)).length?this.each(function(){if(o=tf(this),n=1===this.nodeType&&" "+tu(o)+" "){for(r=0;r<t.length;r++)i=t[r],0>n.indexOf(" "+i+" ")&&(n+=i+" ");o!==// Only assign if different to avoid unneeded rendering.
(a=tu(n))&&this.setAttribute("class",a)}}):this},removeClass:function(e){var t,n,o,i,r,a;return m(e)?this.each(function(t){S(this).removeClass(e.call(this,t,tf(this)))}):arguments.length?(t=td(e)).length?this.each(function(){if(o=tf(this),// This expression is here for better compressibility (see addClass)
n=1===this.nodeType&&" "+tu(o)+" "){for(r=0;r<t.length;r++)// Remove *all* instances
for(i=t[r];n.indexOf(" "+i+" ")>-1;)n=n.replace(" "+i+" "," ");o!==// Only assign if different to avoid unneeded rendering.
(a=tu(n))&&this.setAttribute("class",a)}}):this:this.attr("class","")},toggleClass:function(e,t){var n,o,i,r,a=typeof e,s="string"===a||Array.isArray(e);return m(e)?this.each(function(n){S(this).toggleClass(e.call(this,n,tf(this),t),t)}):"boolean"==typeof t&&s?t?this.addClass(e):this.removeClass(e):(n=td(e),this.each(function(){if(s)for(i=0,// Toggle individual class names
r=S(this);i<n.length;i++)o=n[i],r.hasClass(o)?r.removeClass(o):r.addClass(o);else(void 0===e||"boolean"===a)&&((o=tf(this))&&eo.set(this,"__className__",o),this.setAttribute&&this.setAttribute("class",o||!1===e?"":eo.get(this,"__className__")||""))}))},hasClass:function(e){var t,n,o=0;for(t=" "+e+" ";n=this[o++];)if(1===n.nodeType&&(" "+tu(tf(n))+" ").indexOf(t)>-1)return!0;return!1}});var tp=/\r/g;S.fn.extend({val:function(e){var t,n,o,i=this[0];return arguments.length?(o=m(e),this.each(function(n){var i;1!==this.nodeType||(null==(i=o?e.call(this,n,S(this).val()):e)?i="":"number"==typeof i?i+="":Array.isArray(i)&&(i=S.map(i,function(e){return null==e?"":e+""})),(t=S.valHooks[this.type]||S.valHooks[this.nodeName.toLowerCase()])&&"set"in t&&void 0!==t.set(this,i,"value")||(this.value=i))})):i?(t=S.valHooks[i.type]||S.valHooks[i.nodeName.toLowerCase()])&&"get"in t&&void 0!==(n=t.get(i,"value"))?n:"string"==typeof(n=i.value)?n.replace(tp,""):null==n?"":n:void 0}}),S.extend({valHooks:{option:{get:function(e){var t=S.find.attr(e,"value");return null!=t?t:// option.text throws exceptions (trac-14686, trac-14858)
// Strip and collapse whitespace
// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
tu(S.text(e))}},select:{get:function(e){var t,n,o,i=e.options,r=e.selectedIndex,a="select-one"===e.type,s=a?null:[],l=a?r+1:i.length;// Loop through all the selected options
for(o=r<0?l:a?r:0;o<l;o++)// Support: IE <=9 only
// IE8-9 doesn't update selected after form reset (trac-2551)
if(((n=i[o]).selected||o===r)&&// Don't return options that are disabled or in a disabled optgroup
!n.disabled&&(!n.parentNode.disabled||!k(n.parentNode,"optgroup"))){// We don't need an array for one selects
if(// Get the specific value for the option
t=S(n).val(),a)return t;// Multi-Selects return an array
s.push(t)}return s},set:function(e,t){for(var n,o,i=e.options,r=S.makeArray(t),a=i.length;a--;)/* eslint-disable no-cond-assign */((o=i[a]).selected=S.inArray(S.valHooks.option.get(o),r)>-1)&&(n=!0);return n||(e.selectedIndex=-1),r}}}}),// Radios and checkboxes getter/setter
S.each(["radio","checkbox"],function(){S.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=S.inArray(S(e).val(),t)>-1}},h.checkOn||(S.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})});// Return jQuery for attributes-only inclusion
var th=e.location,tm={guid:Date.now()},tg=/\?/;// Cross-browser xml parsing
S.parseXML=function(t){var n,o;if(!t||"string"!=typeof t)return null;// Support: IE 9 - 11 only
// IE throws on parseFromString with invalid input.
try{n=new e.DOMParser().parseFromString(t,"text/xml")}catch(e){}return o=n&&n.getElementsByTagName("parsererror")[0],(!n||o)&&S.error("Invalid XML: "+(o?S.map(o.childNodes,function(e){return e.textContent}).join("\n"):t)),n};var tv=/^(?:focusinfocus|focusoutblur)$/,ty=function(e){e.stopPropagation()};S.extend(S.event,{trigger:function(t,n,o,i){var r,a,s,l,c,u,d,p,h=[o||v],y=f.call(t,"type")?t.type:t,x=f.call(t,"namespace")?t.namespace.split("."):[];// Don't do events on text and comment nodes
if(a=p=s=o=o||v,!(3===o.nodeType||8===o.nodeType||tv.test(y+S.event.triggered))&&(y.indexOf(".")>-1&&(y=// Namespaced trigger; create a regexp to match event type in handle()
(x=y.split(".")).shift(),x.sort()),c=0>y.indexOf(":")&&"on"+y,// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
// Caller can pass in a jQuery.Event object, Object, or just an event type string
(t=t[S.expando]?t:new S.Event(y,"object"==typeof t&&t)).isTrigger=i?2:3,t.namespace=x.join("."),t.rnamespace=t.namespace?RegExp("(^|\\.)"+x.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,// Clean up the event in case it is being reused
t.result=void 0,t.target||(t.target=o),// Clone any incoming data and prepend the event, creating the handler arg list
n=null==n?[t]:S.makeArray(n,[t]),// Allow special events to draw outside the lines
d=S.event.special[y]||{},i||!d.trigger||!1!==d.trigger.apply(o,n))){// Determine event propagation path in advance, per W3C events spec (trac-9951)
// Bubble up to document, then to window; watch for a global ownerDocument var (trac-9724)
if(!i&&!d.noBubble&&!g(o)){for(l=d.delegateType||y,tv.test(l+y)||(a=a.parentNode);a;a=a.parentNode)h.push(a),s=a;s===(o.ownerDocument||v)&&h.push(s.defaultView||s.parentWindow||e)}for(// Fire handlers on the event path
r=0;(a=h[r++])&&!t.isPropagationStopped();)p=a,t.type=r>1?l:d.bindType||y,// jQuery handler
(u=(eo.get(a,"events")||Object.create(null))[t.type]&&eo.get(a,"handle"))&&u.apply(a,n),// Native handler
(u=c&&a[c])&&u.apply&&et(a)&&(t.result=u.apply(a,n),!1===t.result&&t.preventDefault());return t.type=y,!i&&!t.isDefaultPrevented()&&(!d._default||!1===d._default.apply(h.pop(),n))&&et(o)&&c&&m(o[y])&&!g(o)&&(// Don't re-trigger an onFOO event when we call its FOO() method
(s=o[c])&&(o[c]=null),// Prevent re-triggering of the same event, since we already bubbled it above
S.event.triggered=y,t.isPropagationStopped()&&p.addEventListener(y,ty),o[y](),t.isPropagationStopped()&&p.removeEventListener(y,ty),S.event.triggered=void 0,s&&(o[c]=s)),t.result}},// Piggyback on a donor event to simulate a different one
// Used only for `focus(in | out)` events
simulate:function(e,t,n){var o=S.extend(new S.Event,n,{type:e,isSimulated:!0});S.event.trigger(o,null,t)}}),S.fn.extend({trigger:function(e,t){return this.each(function(){S.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return S.event.trigger(e,t,n,!0)}});var tx=/\[\]$/,tb=/\r?\n/g,tw=/^(?:submit|button|image|reset|file)$/i,tT=/^(?:input|select|textarea|keygen)/i;// Serialize an array of form elements or a set of
// key/values into a query string
S.param=function(e,t){var n,o=[],i=function(e,t){// If value is a function, invoke it and use its return value
var n=m(t)?t():t;o[o.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(null==e)return"";// If an array was passed in, assume that it is an array of form elements.
if(Array.isArray(e)||e.jquery&&!S.isPlainObject(e))S.each(e,function(){i(this.name,this.value)});else // did it), otherwise encode params recursively.
for(n in e)!function e(t,n,o,i){var r;if(Array.isArray(n))S.each(n,function(n,r){o||tx.test(t)?i(t,r):e(t+"["+("object"==typeof r&&null!=r?n:"")+"]",r,o,i)});else if(o||"object"!==b(n))i(t,n);else for(r in n)e(t+"["+r+"]",n[r],o,i)}(n,e[n],t,i);// Return the resulting serialization
return o.join("&")},S.fn.extend({serialize:function(){return S.param(this.serializeArray())},serializeArray:function(){return this.map(function(){// Can add propHook for "elements" to filter or add form elements
var e=S.prop(this,"elements");return e?S.makeArray(e):this}).filter(function(){var e=this.type;// Use .is( ":disabled" ) so that fieldset[disabled] works
return this.name&&!S(this).is(":disabled")&&tT.test(this.nodeName)&&!tw.test(e)&&(this.checked||!ey.test(e))}).map(function(e,t){var n=S(this).val();return null==n?null:Array.isArray(n)?S.map(n,function(e){return{name:t.name,value:e.replace(tb,"\r\n")}}):{name:t.name,value:n.replace(tb,"\r\n")}}).get()}});var tS=/%20/g,tC=/#.*$/,tk=/([?&])_=[^&]*/,tE=/^(.*?):[ \t]*([^\r\n]*)$/mg,tA=/^(?:GET|HEAD)$/,tD=/^\/\//,/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */tj={},/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */tL={},tP="*/".concat("*"),tI=v.createElement("a");// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function tO(e){// dataTypeExpression is optional and defaults to "*"
return function(t,n){"string"!=typeof t&&(n=t,t="*");var o,i=0,r=t.toLowerCase().match(_)||[];if(m(n))// For each dataType in the dataTypeExpression
for(;o=r[i++];)"+"===o[0]?(e[o=o.slice(1)||"*"]=e[o]||[]).unshift(n):(e[o]=e[o]||[]).push(n)}}// Base inspection function for prefilters and transports
function tN(e,t,n,o){var i={},r=e===tL;function a(s){var l;return i[s]=!0,S.each(e[s]||[],function(e,s){var c=s(t,n,o);return"string"!=typeof c||r||i[c]?r?!(l=c):void 0:(t.dataTypes.unshift(c),a(c),!1)}),l}return a(t.dataTypes[0])||!i["*"]&&a("*")}// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes trac-9887
function tR(e,t){var n,o,i=S.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:o||(o={}))[n]=t[n]);return o&&S.extend(!0,e,o),e}tI.href=th.href,S.extend({// Counter for holding the number of active queries
active:0,// Last-Modified header cache for next request
lastModified:{},etag:{},ajaxSettings:{url:th.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(th.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/accepts:{"*":tP,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},// Data converters
// Keys separate source (or catchall "*") and destination types with a single space
converters:{// Convert anything to text
"* text":String,// Text to html (true = no transformation)
"text html":!0,// Evaluate text as a json expression
"text json":JSON.parse,// Parse text as xml
"text xml":S.parseXML},// For options that shouldn't be deep extended:
// you can add your own custom options here if
// and when you create one that shouldn't be
// deep extended (see ajaxExtend)
flatOptions:{url:!0,context:!0}},// Creates a full fledged settings object into target
// with both ajaxSettings and settings fields.
// If target is omitted, writes into ajaxSettings.
ajaxSetup:function(e,t){return t?tR(tR(e,S.ajaxSettings),t):tR(S.ajaxSettings,e)},ajaxPrefilter:tO(tj),ajaxTransport:tO(tL),// Main method
ajax:function(t,n){"object"==typeof t&&(n=t,t=void 0),// Force options to be an object
n=n||{};var o,i,r,a,s,l,c,u,f,d,p=S.ajaxSetup({},n),h=p.context||p,m=p.context&&(h.nodeType||h.jquery)?S(h):S.event,g=S.Deferred(),y=S.Callbacks("once memory"),x=p.statusCode||{},b={},w={},T="canceled",C={readyState:0,// Builds headers hashtable if needed
getResponseHeader:function(e){var t;if(c){if(!a)for(a={};t=tE.exec(r);)a[t[1].toLowerCase()+" "]=(a[t[1].toLowerCase()+" "]||[]).concat(t[2]);t=a[e.toLowerCase()+" "]}return null==t?null:t.join(", ")},// Raw string
getAllResponseHeaders:function(){return c?r:null},// Caches the header
setRequestHeader:function(e,t){return null==c&&(b[e=w[e.toLowerCase()]=w[e.toLowerCase()]||e]=t),this},// Overrides response content-type header
overrideMimeType:function(e){return null==c&&(p.mimeType=e),this},// Status-dependent callbacks
statusCode:function(e){var t;if(e){if(c)C.always(e[C.status]);else for(t in e)x[t]=[x[t],e[t]]}return this},// Cancel the request
abort:function(e){var t=e||T;return o&&o.abort(t),k(0,t),this}};// A cross-domain request is in order when the origin doesn't match the current origin.
if(// Attach deferreds
g.promise(C),// Add protocol if not provided (prefilters might expect it)
// Handle falsy url in the settings object (trac-10093: consistency with old signature)
// We also use the url parameter if available
p.url=((t||p.url||th.href)+"").replace(tD,th.protocol+"//"),// Alias method option to type as per ticket trac-12004
p.type=n.method||n.type||p.method||p.type,// Extract dataTypes list
p.dataTypes=(p.dataType||"*").toLowerCase().match(_)||[""],null==p.crossDomain){l=v.createElement("a");// Support: IE <=8 - 11, Edge 12 - 15
// IE throws exception on accessing the href property if url is malformed,
// e.g. http://example.com:80x/
try{l.href=p.url,// Support: IE <=8 - 11 only
// Anchor's host property isn't correctly set when s.url is relative
l.href=l.href,p.crossDomain=tI.protocol+"//"+tI.host!=l.protocol+"//"+l.host}catch(e){// If there is an error parsing the URL, assume it is crossDomain,
// it can be rejected by the transport if it is invalid
p.crossDomain=!0}}// If request was aborted inside a prefilter, stop there
if(p.data&&p.processData&&"string"!=typeof p.data&&(p.data=S.param(p.data,p.traditional)),// Apply prefilters
tN(tj,p,n,C),c)return C;// Check for headers option
for(f in// We can fire global events as of now if asked to
// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (trac-15118)
(u=S.event&&p.global)&&0==S.active++&&S.event.trigger("ajaxStart"),// Uppercase the type
p.type=p.type.toUpperCase(),// Determine if request has content
p.hasContent=!tA.test(p.type),// Save the URL in case we're toying with the If-Modified-Since
// and/or If-None-Match header later on
// Remove hash to simplify url manipulation
i=p.url.replace(tC,""),p.hasContent?p.data&&p.processData&&0===(p.contentType||"").indexOf("application/x-www-form-urlencoded")&&(p.data=p.data.replace(tS,"+")):(// Remember the hash so we can put it back
d=p.url.slice(i.length),p.data&&(p.processData||"string"==typeof p.data)&&(i+=(tg.test(i)?"&":"?")+p.data,// trac-9682: remove data so that it's not used in an eventual retry
delete p.data),!1===p.cache&&(i=i.replace(tk,"$1"),d=(tg.test(i)?"&":"?")+"_="+tm.guid+++d),// Put hash and anti-cache on the URL that will be requested (gh-1732)
p.url=i+d),p.ifModified&&(S.lastModified[i]&&C.setRequestHeader("If-Modified-Since",S.lastModified[i]),S.etag[i]&&C.setRequestHeader("If-None-Match",S.etag[i])),(p.data&&p.hasContent&&!1!==p.contentType||n.contentType)&&C.setRequestHeader("Content-Type",p.contentType),// Set the Accepts header for the server, depending on the dataType
C.setRequestHeader("Accept",p.dataTypes[0]&&p.accepts[p.dataTypes[0]]?p.accepts[p.dataTypes[0]]+("*"!==p.dataTypes[0]?", "+tP+"; q=0.01":""):p.accepts["*"]),p.headers)C.setRequestHeader(f,p.headers[f]);// Allow custom headers/mimetypes and early abort
if(p.beforeSend&&(!1===p.beforeSend.call(h,C,p)||c))return C.abort();// If no transport, we auto-abort
if(// Aborting is no longer a cancellation
T="abort",// Install callbacks on deferreds
y.add(p.complete),C.done(p.success),C.fail(p.error),// Get transport
o=tN(tL,p,n,C)){// If request was aborted inside ajaxSend, stop there
if(C.readyState=1,u&&m.trigger("ajaxSend",[C,p]),c)return C;p.async&&p.timeout>0&&(s=e.setTimeout(function(){C.abort("timeout")},p.timeout));try{c=!1,o.send(b,k)}catch(e){// Rethrow post-completion exceptions
if(c)throw e;// Propagate others as results
k(-1,e)}}else k(-1,"No Transport");// Callback for when everything is done
function k(t,n,a,l){var f,d,v,b,w,T=n;// Ignore repeat invocations
c||(c=!0,s&&e.clearTimeout(s),// Dereference transport for early garbage collection
// (no matter how long the jqXHR object will be used)
o=void 0,// Cache response headers
r=l||"",// Set readyState
C.readyState=t>0?4:0,// Determine if successful
f=t>=200&&t<300||304===t,a&&(b=/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */function(e,t,n){// Remove auto dataType and get content-type in the process
for(var o,i,r,a,s=e.contents,l=e.dataTypes;"*"===l[0];)l.shift(),void 0===o&&(o=e.mimeType||t.getResponseHeader("Content-Type"));// Check if we're dealing with a known content-type
if(o){for(i in s)if(s[i]&&s[i].test(o)){l.unshift(i);break}}// Check to see if we have a response for the expected dataType
if(l[0]in n)r=l[0];else{// Try convertible dataTypes
for(i in n){if(!l[0]||e.converters[i+" "+l[0]]){r=i;break}a||(a=i)}// Or just use first one
r=r||a}// If we found a dataType
// We add the dataType to the list if needed
// and return the corresponding response
if(r)return r!==l[0]&&l.unshift(r),n[r]}(p,C,a)),!f&&S.inArray("script",p.dataTypes)>-1&&0>S.inArray("json",p.dataTypes)&&(p.converters["text script"]=function(){}),// Convert no matter what (that way responseXXX fields are always set)
b=/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */function(e,t,n,o){var i,r,a,s,l,c={},u=e.dataTypes.slice();// Create converters map with lowercased keys
if(u[1])for(a in e.converters)c[a.toLowerCase()]=e.converters[a];// Convert to each sequential dataType
for(r=u.shift();r;)if(e.responseFields[r]&&(n[e.responseFields[r]]=t),!l&&o&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),l=r,r=u.shift()){// There's only work to do if current dataType is non-auto
if("*"===r)r=l;else if("*"!==l&&l!==r){// If none found, seek a pair
if(!// Seek a direct converter
(a=c[l+" "+r]||c["* "+r])){for(i in c)if(// If conv2 outputs current
(s=i.split(" "))[1]===r&&// If prev can be converted to accepted input
(a=c[l+" "+s[0]]||c["* "+s[0]])){// Condense equivalence converters
!0===a?a=c[i]:!0!==c[i]&&(r=s[0],u.unshift(s[1]));break}}// Apply converter (if not an equivalence)
if(!0!==a){// Unless errors are allowed to bubble, catch and return them
if(a&&e.throws)t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+l+" to "+r}}}}}return{state:"success",data:t}}(p,b,C,f),f?(p.ifModified&&((w=C.getResponseHeader("Last-Modified"))&&(S.lastModified[i]=w),(w=C.getResponseHeader("etag"))&&(S.etag[i]=w)),204===t||"HEAD"===p.type?T="nocontent":304===t?T="notmodified":(T=b.state,d=b.data,f=!(v=b.error))):(// Extract error from statusText and normalize for non-aborts
v=T,(t||!T)&&(T="error",t<0&&(t=0))),// Set data for the fake xhr object
C.status=t,C.statusText=(n||T)+"",f?g.resolveWith(h,[d,T,C]):g.rejectWith(h,[C,T,v]),// Status-dependent callbacks
C.statusCode(x),x=void 0,u&&m.trigger(f?"ajaxSuccess":"ajaxError",[C,p,f?d:v]),// Complete
y.fireWith(h,[C,T]),!u||(m.trigger("ajaxComplete",[C,p]),--S.active||S.event.trigger("ajaxStop")))}return C},getJSON:function(e,t,n){return S.get(e,t,n,"json")},getScript:function(e,t){return S.get(e,void 0,t,"script")}}),S.each(["get","post"],function(e,t){S[t]=function(e,n,o,i){// The url can be an options object (which then must have .url)
return m(n)&&(i=i||o,o=n,n=void 0),S.ajax(S.extend({url:e,type:t,dataType:i,data:n,success:o},S.isPlainObject(e)&&e))}}),S.ajaxPrefilter(function(e){var t;for(t in e.headers)"content-type"===t.toLowerCase()&&(e.contentType=e.headers[t]||"")}),S._evalUrl=function(e,t,n){return S.ajax({url:e,// Make this explicit, since user can override this through ajaxSetup (trac-11264)
type:"GET",dataType:"script",cache:!0,async:!1,global:!1,// Only evaluate the response if it is successful (gh-4126)
// dataFilter is not invoked for failure responses, so using it instead
// of the default converter is kludgy but it works.
converters:{"text script":function(){}},dataFilter:function(e){S.globalEval(e,t,n)}})},S.fn.extend({wrapAll:function(e){var t;return this[0]&&(m(e)&&(e=e.call(this[0])),// The elements to wrap the target around
t=S(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){for(var e=this;e.firstElementChild;)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(e){return m(e)?this.each(function(t){S(this).wrapInner(e.call(this,t))}):this.each(function(){var t=S(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=m(e);return this.each(function(n){S(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(e){return this.parent(e).not("body").each(function(){S(this).replaceWith(this.childNodes)}),this}}),S.expr.pseudos.hidden=function(e){return!S.expr.pseudos.visible(e)},S.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},S.ajaxSettings.xhr=function(){try{return new e.XMLHttpRequest}catch(e){}};var tz={// File protocol always yields status code 0, assume 200
0:200,// Support: IE <=9 only
// trac-1450: sometimes IE returns 1223 when it should be 204
1223:204},tH=S.ajaxSettings.xhr();h.cors=!!tH&&"withCredentials"in tH,h.ajax=tH=!!tH,S.ajaxTransport(function(t){var n,o;// Cross domain only allowed if supported through XMLHttpRequest
if(h.cors||tH&&!t.crossDomain)return{send:function(i,r){var a,s=t.xhr();// Apply custom fields if provided
if(s.open(t.type,t.url,t.async,t.username,t.password),t.xhrFields)for(a in t.xhrFields)s[a]=t.xhrFields[a];// Set headers
for(a in t.mimeType&&s.overrideMimeType&&s.overrideMimeType(t.mimeType),t.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest"),i)s.setRequestHeader(a,i[a]);// Callback
n=function(e){return function(){n&&(n=o=s.onload=s.onerror=s.onabort=s.ontimeout=s.onreadystatechange=null,"abort"===e?s.abort():"error"===e?"number"!=typeof s.status?r(0,"error"):r(s.status,s.statusText):r(tz[s.status]||s.status,s.statusText,"text"!==// IE9 has no XHR2 but throws on binary (trac-11426)
// For XHR2 non-text, let the caller handle it (gh-2498)
(s.responseType||"text")||"string"!=typeof s.responseText?{binary:s.response}:{text:s.responseText},s.getAllResponseHeaders()))}},// Listen to events
s.onload=n(),o=s.onerror=s.ontimeout=n("error"),void 0!==s.onabort?s.onabort=o:s.onreadystatechange=function(){// Check readyState before timeout as it changes
4===s.readyState&&// but that will not handle a native abort
// Also, save errorCallback to a variable
// as xhr.onerror cannot be accessed
e.setTimeout(function(){n&&o()})},// Create the abort callback
n=n("abort");try{// Do send the request (this may raise an exception)
s.send(t.hasContent&&t.data||null)}catch(e){// trac-14683: Only rethrow if this hasn't been notified as an error yet
if(n)throw e}},abort:function(){n&&n()}}}),// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
S.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),// Install script dataType
S.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return S.globalEval(e),e}}}),// Handle cache's special case and crossDomain
S.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),// Bind script tag hack transport
S.ajaxTransport("script",function(e){// This transport only deals with cross domain or forced-by-attrs requests
if(e.crossDomain||e.scriptAttrs){var t,n;return{send:function(o,i){t=S("<script>").attr(e.scriptAttrs||{}).prop({charset:e.scriptCharset,src:e.url}).on("load error",n=function(e){t.remove(),n=null,e&&i("error"===e.type?404:200,e.type)}),// Use native DOM manipulation to avoid our domManip AJAX trickery
v.head.appendChild(t[0])},abort:function(){n&&n()}}}});var tM=[],tq=/(=)\?(?=&|$)|\?\?/;// Default jsonp settings
S.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=tM.pop()||S.expando+"_"+tm.guid++;return this[e]=!0,e}}),// Detect, normalize options and install callbacks for jsonp requests
S.ajaxPrefilter("json jsonp",function(t,n,o){var i,r,a,s=!1!==t.jsonp&&(tq.test(t.url)?"url":"string"==typeof t.data&&0===(t.contentType||"").indexOf("application/x-www-form-urlencoded")&&tq.test(t.data)&&"data");// Handle iff the expected data type is "jsonp" or we have a parameter to set
if(s||"jsonp"===t.dataTypes[0])// Delegate to script
return(// Get callback name, remembering preexisting value associated with it
i=t.jsonpCallback=m(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback,s?t[s]=t[s].replace(tq,"$1"+i):!1!==t.jsonp&&(t.url+=(tg.test(t.url)?"&":"?")+t.jsonp+"="+i),// Use data converter to retrieve json after script execution
t.converters["script json"]=function(){return a||S.error(i+" was not called"),a[0]},// Force json dataType
t.dataTypes[0]="json",// Install callback
r=e[i],e[i]=function(){a=arguments},// Clean-up function (fires after converters)
o.always(function(){void 0===r?S(e).removeProp(i):e[i]=r,t[i]&&(// Make sure that re-using the options doesn't screw things around
t.jsonpCallback=n.jsonpCallback,// Save the callback name for future use
tM.push(i)),a&&m(r)&&r(a[0]),a=r=void 0}),"script")}),// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
h.createHTMLDocument=((n=v.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===n.childNodes.length),// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
S.parseHTML=function(e,t,n){var o,i,r;return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(h.createHTMLDocument?(// Set the base href for the created document
// so any parsed elements with URLs
// are based on the document's URL (gh-2965)
(o=(t=v.implementation.createHTMLDocument("")).createElement("base")).href=v.location.href,t.head.appendChild(o)):t=v),i=z.exec(e),r=!n&&[],i)?[t.createElement(i[1])]:(i=ek([e],t,r),r&&r.length&&S(r).remove(),S.merge([],i.childNodes))},/**
 * Load a url into a page
 */S.fn.load=function(e,t,n){var o,i,r,a=this,s=e.indexOf(" ");return s>-1&&(o=tu(e.slice(s)),e=e.slice(0,s)),m(t)?(// We assume that it's the callback
n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),a.length>0&&S.ajax({url:e,// If "type" variable is undefined, then "GET" method will be used.
// Make value of this field explicit since
// user can override it through ajaxSetup method
type:i||"GET",dataType:"html",data:t}).done(function(e){// Save response for use in complete callback
r=arguments,a.html(o?// Exclude scripts to avoid IE 'Permission Denied' errors
S("<div>").append(S.parseHTML(e)).find(o):e);// If the request succeeds, this function gets "data", "status", "jqXHR"
// but they are ignored because response was set above.
// If it fails, this function gets "jqXHR", "status", "error"
}).always(n&&function(e,t){a.each(function(){n.apply(this,r||[e.responseText,t,e])})}),this},S.expr.pseudos.animated=function(e){return S.grep(S.timers,function(t){return e===t.elem}).length},S.offset={setOffset:function(e,t,n){var o,i,r,a,s,l,c=S.css(e,"position"),u=S(e),f={};"static"===c&&(e.style.position="relative"),s=u.offset(),r=S.css(e,"top"),l=S.css(e,"left"),("absolute"===c||"fixed"===c)&&(r+l).indexOf("auto")>-1?(a=(o=u.position()).top,i=o.left):(a=parseFloat(r)||0,i=parseFloat(l)||0),m(t)&&(t=t.call(e,n,S.extend({},s))),null!=t.top&&(f.top=t.top-s.top+a),null!=t.left&&(f.left=t.left-s.left+i),"using"in t?t.using.call(e,f):u.css(f)}},S.fn.extend({// offset() relates an element's border box to the document origin
offset:function(e){// Preserve chaining for setter
if(arguments.length)return void 0===e?this:this.each(function(t){S.offset.setOffset(this,e,t)});var t,n,o=this[0];if(o)return(// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
// Support: IE <=11 only
// Running getBoundingClientRect on a
// disconnected node in IE throws an error
o.getClientRects().length?(// Get document-relative position by adding viewport scroll to viewport-relative gBCR
t=o.getBoundingClientRect(),n=o.ownerDocument.defaultView,{top:t.top+n.pageYOffset,left:t.left+n.pageXOffset}):{top:0,left:0})},// position() relates an element's margin box to its offset parent's padding box
// This corresponds to the behavior of CSS absolute positioning
position:function(){if(this[0]){var e,t,n,o=this[0],i={top:0,left:0};// position:fixed elements are offset from the viewport, which itself always has zero offset
if("fixed"===S.css(o,"position"))t=o.getBoundingClientRect();else{for(t=this.offset(),// Account for the *real* offset parent, which can be the document or its root element
// when a statically positioned element is identified
n=o.ownerDocument,e=o.offsetParent||n.documentElement;e&&(e===n.body||e===n.documentElement)&&"static"===S.css(e,"position");)e=e.parentNode;e&&e!==o&&1===e.nodeType&&(// Incorporate borders into its offset, since they are outside its content origin
i=S(e).offset(),i.top+=S.css(e,"borderTopWidth",!0),i.left+=S.css(e,"borderLeftWidth",!0))}// Subtract parent offsets and element margins
return{top:t.top-i.top-S.css(o,"marginTop",!0),left:t.left-i.left-S.css(o,"marginLeft",!0)}}},// This method will return documentElement in the following cases:
// 1) For the element inside the iframe without offsetParent, this method will return
//    documentElement of the parent window
// 2) For the hidden or detached element
// 3) For body or html element, i.e. in case of the html node - it will return itself
//
// but those exceptions were never presented as a real life use-cases
// and might be considered as more preferable results.
//
// This logic, however, is not guaranteed and can change at any point in the future
offsetParent:function(){return this.map(function(){for(var e=this.offsetParent;e&&"static"===S.css(e,"position");)e=e.offsetParent;return e||ef})}}),// Create scrollLeft and scrollTop methods
S.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,t){var n="pageYOffset"===t;S.fn[e]=function(o){return K(this,function(e,o,i){// Coalesce documents and windows
var r;if(g(e)?r=e:9===e.nodeType&&(r=e.defaultView),void 0===i)return r?r[t]:e[o];r?r.scrollTo(n?r.pageXOffset:i,n?i:r.pageYOffset):e[o]=i},e,o,arguments.length)}}),// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
S.each(["top","left"],function(e,t){S.cssHooks[t]=eU(h.pixelPosition,function(e,n){if(n)// If curCSS returns percentage, fallback to offset
return n=eV(e,t),eB.test(n)?S(e).position()[t]+"px":n})}),// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
S.each({Height:"height",Width:"width"},function(e,t){S.each({padding:"inner"+e,content:t,"":"outer"+e},function(n,o){// Margin is only for outerHeight, outerWidth
S.fn[o]=function(i,r){var a=arguments.length&&(n||"boolean"!=typeof i),s=n||(!0===i||!0===r?"margin":"border");return K(this,function(t,n,i){var r;return g(t)?0===o.indexOf("outer")?t["inner"+e]:t.document.documentElement["client"+e]:9===t.nodeType?(r=t.documentElement,Math.max(t.body["scroll"+e],r["scroll"+e],t.body["offset"+e],r["offset"+e],r["client"+e])):void 0===i?S.css(t,n,s):S.style(t,n,i,s)},t,a?i:void 0,a)}})}),S.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){S.fn[t]=function(e){return this.on(t,e)}}),S.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,o){return this.on(t,e,n,o)},undelegate:function(e,t,n){// ( namespace ) or ( selector, types [, fn] )
return 1==arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},hover:function(e,t){return this.on("mouseenter",e).on("mouseleave",t||e)}}),S.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,t){// Handle event binding
S.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}});// Support: Android <=4.0 only
// Make sure we trim BOM and NBSP
// Require that the "whitespace run" starts from a non-whitespace
// to avoid O(N^2) behavior when the engine would try matching "\s+$" at each space position.
var tB=/^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;// Bind a function to a context, optionally partially applying any
// arguments.
// jQuery.proxy is deprecated to promote standards (specifically Function#bind)
// However, it is not slated for removal any time soon
S.proxy=function(e,t){var n,o,i;// Quick check to determine if target is callable, in the spec
// this throws a TypeError, but we will just return undefined.
if("string"==typeof t&&(n=e[t],t=e,e=n),m(e))return(// Simulated bind
o=r.call(arguments,2),// Set the guid of unique handler to the same of original handler, so it can be removed
(i=function(){return e.apply(t||this,o.concat(r.call(arguments)))}).guid=e.guid=e.guid||S.guid++,i)},S.holdReady=function(e){e?S.readyWait++:S.ready(!0)},S.isArray=Array.isArray,S.parseJSON=JSON.parse,S.nodeName=k,S.isFunction=m,S.isWindow=g,S.camelCase=ee,S.type=b,S.now=Date.now,S.isNumeric=function(e){// As of jQuery 3.0, isNumeric is limited to
// strings and numbers (primitives or objects)
// that can be coerced to finite numbers (gh-2662)
var t=S.type(e);return("number"===t||"string"===t)&&// parseFloat NaNs numeric-cast false positives ("")
// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
// subtraction forces infinities to NaN
!isNaN(e-parseFloat(e))},S.trim=function(e){return null==e?"":(e+"").replace(tB,"$1")},"function"==typeof define&&define.amd&&define("jquery",[],function(){return S});var tF=e.jQuery,tW=e.$;return S.noConflict=function(t){return e.$===S&&(e.$=tW),t&&e.jQuery===S&&(e.jQuery=tF),S},void 0===t&&(e.jQuery=e.$=S),S},"object"==typeof e.exports?// is present, execute the factory and get jQuery.
// For environments that do not have a `window` with a `document`
// (such as Node.js), expose a factory as module.exports.
// This accentuates the need for the creation of a real `window`.
// e.g. var jQuery = require("jquery")(window);
// See ticket trac-14549 for more info.
e.exports=n.document?o(n,!0):function(e){if(!e.document)throw Error("jQuery requires a window with a document");return o(e)}:o(n)});var s=a("fa1Gd"),l={en:{START:"Start:","pre-sale":"25.09.2023 pre-sale","от 8 до 14 месяцев":"8 to 14 months","First payment":"First payment:","от $5000":"from $5000","about project":"about project",PROJECT_DESCRIPTION:"Oasis by PARQ is a modern complex with the best infrastructure in Bali, located on 37 hectares, which will include 560 infrastructure facilities, namely:",villas:"villas",apartments:"apartments","guest houses":"guest houses",///////////////////////////////////////////
"guest house":"guest house","Payment is made in cryptocurrency":"*Payment is made in cryptocurrency","Area:":"Area:",Area:"Area","1-3 floor of 3":"1-3 floor of 3","Ceiling height":"Ceiling height:",Laundry:"Laundry",Garden:"Garden",Description:"Description:",GUEST_HOUSE_DESCRIPTION:"The ideal small-sized housing format for tourists. The finish of the facade contrasts beautifully with the surrounding greenery. the surrounding greenery.","Investment scheme":"Investment scheme","Minimum entry from $5000 - 1/7th of the cost of a guest house":"Minimum entry from $5000 - 1/7th of the cost of a guest house","1st floor":"1st floor","Private pool":"Private pool","Private entrance":"Private entrance","Minimum admission is 10% of the value of the dwelling":"Minimum admission is 10% of the value of the dwelling","Plot area":"Plot area",VILLA_150_DESCRIPTION:"Elegant medium-sized housing format, where the fa\xe7ade finishes contrast spectacularly with the surrounding greenery.",villa:"villa",VILLA_100_DESCRIPTION:"Elegant medium-sized housing format, where the fa\xe7ade finishes contrast spectacularly with the surrounding greenery.","1 living room":"1 living room","2 bedrooms":"2 bedrooms","Contact Us":"Contact Us",Phone:"Phone",Email:"Email","6-8 h.":"6-8 h.",Placement:"Placement","3 bedrooms":"3 bedrooms",VILLA_200_DESCRIPTION:"Elegant medium-sized housing format, where the fa\xe7ade finishes contrast spectacularly with the surrounding greenery.","3 bedrooms and cabinet":"3 bedrooms and cabinet","invest and profit":"invest and profit","passive income":"passive income","annual passive income from long-term renting out":"annual passive income from long-term renting out","annual passive income from daily rentals":"annual passive income from daily rentals","expected price increase after completion of construction":"expected price increase after completion of construction","Why choose Bali for property investment":"Why choose Bali for property investment","Residential complex":"Residential complex","Real estate":"Real estate",Price:"Price",Apartments:"Apartments",bedroom:"bedroom",bedrooms:"bedrooms",Villa:"Villa",Layouts:"Layouts:",Terrace:"Terrace","Installment plan":"Installment plan"},pl:{START:"Początek:","pre-sale":"Przedsprzedaż 25.09.2023","от 8 до 14 месяцев":"od 8 do 14 miesięcy","First payment":"Pierwsza wpłata:","от $5000":"od $5000","about project":"O projekcie",PROJECT_DESCRIPTION:"Oasis by PARQ to nowoczesny kompleks z najlepszą infrastrukturą na Bali, położony na 37 hektarach, kt\xf3ry będzie obejmował 560 obiekt\xf3w infrastrukturalnych, mianowicie:",villas:"wille",apartments:"apartamenty","guest houses":"domki gościnne","guest house":"dom gościnny","Payment is made in cryptocurrency":"*Płatność jest dokonywana w kryptowalucie","Area:":"Powierzchnia:",Area:"Powierzchnia","1-3 floor of 3":"1-3 piętro z 3","Ceiling height":"Wysokość sufitu:",Laundry:"Pralnia",Garden:"Ogr\xf3d",Description:"Opis:",GUEST_HOUSE_DESCRIPTION:"To idealny format niewielkiego mieszkania dla turyst\xf3w. Wykończenie elewacji pięknie kontrastuje z otaczającą zielenią.","Investment scheme":"Schemat inwestycji","Minimum entry from $5000 - 1/7th of the cost of a guest house":"Minimalna wpłata od $5000 - 1/7 kosztu domu gościnnego","1st floor":"1 piętro","Private pool":"Prywatny basen","Private entrance":"Prywatne wejście","Minimum admission is 10% of the value of the dwelling":"Minimalna wpłata wynosi 10% wartości mieszkania","Plot area":"Powierzchnia działki",VILLA_150_DESCRIPTION:"Elegancki średni format mieszkania, gdzie wykończenie elewacji imponująco kontrastuje z otaczającą zielenią.",villa:"willa",VILLA_100_DESCRIPTION:"Elegancki średni format mieszkania, gdzie wykończenie elewacji imponująco kontrastuje z otaczającą zielenią.","1 living room":"1 salon","2 bedrooms":"2 sypialnie","Contact Us":"Skontaktuj się z nami",Phone:"Telefon",Email:"E-mail","6-8 h.":"6-8 g.",Placement:"Umieszczenie","3 bedrooms":"3 sypialnie",VILLA_200_DESCRIPTION:"Elegancki średni format mieszkania, gdzie wykończenie elewacji imponująco kontrastuje z otaczającą zielenią.","3 bedrooms and cabinet":"3 sypialnie i gabinet","invest and profit":"Inwestuj i zyskuj","passive income":"Doch\xf3d pasywny","annual passive income from long-term renting out":"Roczny doch\xf3d pasywny z wynajmu długoterminowego","annual passive income from daily rentals":"Roczny doch\xf3d pasywny z wynajmu kr\xf3tkoterminowego","expected price increase after completion of construction":"Oczekiwany wzrost ceny po zakończeniu budowy","Why choose Bali for property investment":"Dlaczego wybrać Bali na inwestycję w nieruchomości","Residential complex":"Kompleks mieszkalny","Real estate":"Nieruchomość",Price:"Cena",Apartments:"Apartamenty",bedroom:"sypialnia",bedrooms:"sypialnie",Villa:"Willa",Layouts:"Układy:",Terrace:"Taras","Installment plan":"Plan ratalny"},de:{START:"Anfang:","pre-sale":"Vorverkauf ab 25.09.2023","от 8 до 14 месяцев":"von 8 bis 14 Monaten","First payment":"Erste Zahlung:","от $5000":"ab $5000","about project":"\xdcber das Projekt",PROJECT_DESCRIPTION:"Oasis by PARQ ist eine moderne Anlage mit bester Infrastruktur auf Bali, die auf 37 Hektar Fl\xe4che liegt und 560 Infrastruktureinrichtungen umfassen wird, n\xe4mlich:",villas:"Villen",apartments:"Apartments","guest houses":"G\xe4steh\xe4user","guest house":"G\xe4stehaus","Payment is made in cryptocurrency":"*Zahlung erfolgt in Kryptow\xe4hrung","Area:":"Fl\xe4che:",Area:"Fl\xe4che","1-3 floor of 3":"1-3 Stock von 3","Ceiling height":"Deckenh\xf6he:",Laundry:"W\xe4scherei",Garden:"Garten",Description:"Beschreibung:",GUEST_HOUSE_DESCRIPTION:"Das ideale kleine Wohnformat f\xfcr Touristen. Die Fassadenveredelung kontrastiert wundersch\xf6n mit der umgebenden Gr\xfcnfl\xe4che.","Investment scheme":"Investitionsschema","Minimum entry from $5000 - 1/7th of the cost of a guest house":"Mindesteinstieg ab $5000 - 1/7 der Kosten f\xfcr ein G\xe4stehaus","1st floor":"1 Stock","Private pool":"Privater Pool","Private entrance":"Privater Eingang","Minimum admission is 10% of the value of the dwelling":"Mindestzulassung betr\xe4gt 10% des Wertes der Wohnung","Plot area":"Grundst\xfccksfl\xe4che",VILLA_150_DESCRIPTION:"Elegantes mittelgro\xdfes Wohnformat, bei dem die Fassadenveredelung spektakul\xe4r mit der umgebenden Gr\xfcnfl\xe4che kontrastiert.",villa:"Villa",VILLA_100_DESCRIPTION:"Elegantes mittelgro\xdfes Wohnformat, bei dem die Fassadenveredelung spektakul\xe4r mit der umgebenden Gr\xfcnfl\xe4che kontrastiert.","1 living room":"1 Wohnzimmer","2 bedrooms":"2 Schlafzimmer","Contact Us":"Kontaktiere uns",Phone:"Telefon",Email:"E-Mail","6-8 h.":"6-8 Stunden",Placement:"Platzierung","3 bedrooms":"3 Schlafzimmer",VILLA_200_DESCRIPTION:"Elegantes mittelgro\xdfes Wohnformat, bei dem die Fassadenveredelung spektakul\xe4r mit der umgebenden Gr\xfcnfl\xe4che kontrastiert.","3 bedrooms and cabinet":"3 Schlafzimmer und Kabinett","invest and profit":"Investieren und profitieren","passive income":"Passives Einkommen","annual passive income from long-term renting out":"J\xe4hrliches passives Einkommen aus langfristiger Vermietung","annual passive income from daily rentals":"J\xe4hrliches passives Einkommen aus t\xe4glicher Vermietung","expected price increase after completion of construction":"Erwartete Preissteigerung nach Fertigstellung des Baus","Why choose Bali for property investment":"Warum Bali f\xfcr Immobilieninvestitionen w\xe4hlen","Residential complex":"Wohnanlage","Real estate":"Immobilien",Price:"Preis",Apartments:"Wohnungen",bedroom:"Schlafzimmer",bedrooms:"Schlafzimmer",Villa:"Villa",Layouts:"Layouts:",Terrace:"Terrasse","Installment plan":"Ratenzahlungsplan"},it:{START:"Inizio:","pre-sale":"Pre-vendita dal 25.09.2023","от 8 до 14 месяцев":"da 8 a 14 mesi","First payment":"Primo pagamento:","от $5000":"da $5000","about project":"Riguardo al progetto",PROJECT_DESCRIPTION:"Oasis by PARQ \xe8 un complesso moderno con la migliore infrastruttura a Bali, situato su 37 ettari, che includer\xe0 560 strutture infrastrutturali, precisamente:",villas:"ville",apartments:"appartamenti","guest houses":"case per gli ospiti","guest house":"casa per gli ospiti","Payment is made in cryptocurrency":"*Il pagamento avviene in criptovaluta","Area:":"Superficie:",Area:"Superficie","1-3 floor of 3":"1-3 piano di 3","Ceiling height":"Altezza del soffitto:",Laundry:"Lavanderia",Garden:"Giardino",Description:"Descrizione:",GUEST_HOUSE_DESCRIPTION:"Il formato di alloggio ideale per i turisti. La finitura della facciata contrasta splendidamente con la vegetazione circostante.","Investment scheme":"Schema di investimento","Minimum entry from $5000 - 1/7th of the cost of a guest house":"Ingresso minimo da $5000 - 1/7 del costo di una casa per gli ospiti","1st floor":"1 piano","Private pool":"Piscina privata","Private entrance":"Ingresso privato","Minimum admission is 10% of the value of the dwelling":"L'ammissione minima \xe8 il 10% del valore dell'abitazione","Plot area":"Superficie del terreno",VILLA_150_DESCRIPTION:"Elegante formato di alloggio di medie dimensioni, dove la finitura della facciata contrasta spettacolarmente con la vegetazione circostante.",villa:"villa",VILLA_100_DESCRIPTION:"Elegante formato di alloggio di medie dimensioni, dove la finitura della facciata contrasta spettacolarmente con la vegetazione circostante.","1 living room":"1 soggiorno","2 bedrooms":"2 camere da letto","Contact Us":"Contattaci",Phone:"Telefono",Email:"E-mail","6-8 h.":"6-8 ore",Placement:"Posizionamento","3 bedrooms":"3 camere da letto",VILLA_200_DESCRIPTION:"Elegante formato di alloggio di medie dimensioni, dove la finitura della facciata contrasta spettacolarmente con la vegetazione circostante.","3 bedrooms and cabinet":"3 camere da letto e armadio","invest and profit":"Investire e guadagnare","passive income":"Entrata passiva","annual passive income from long-term renting out":"Entrata passiva annuale dalla locazione a lungo termine","annual passive income from daily rentals":"Entrata passiva annuale dalle locazioni giornaliere","expected price increase after completion of construction":"Aumento previsto del prezzo dopo il completamento della costruzione","Why choose Bali for property investment":"Perch\xe9 scegliere Bali per gli investimenti immobiliari","Residential complex":"Complesso residenziale","Real estate":"Immobiliare",Price:"Prezzo",Apartments:"Appartamenti",bedroom:"camera da letto",bedrooms:"camere da letto",Villa:"Villa",Layouts:"Layout:",Terrace:"Terrazza","Installment plan":"Piano di pagamento a rate"}};window.$=window.jQuery=/*@__PURE__*/e(s);var c={};t="undefined"!=typeof window?window:c,n=function(e,t,n,o,i){// keeping central set of classnames and selectors
var r="fullpage-wrapper",a="."+r,s="fp-responsive",l="fp-notransition",c="fp-destroyed",u="fp-enabled",f="fp-viewing",d="active",p="."+d,h="fp-completely",m="."+h,g="fp-section",v="."+g,y=v+p,x=v+":first",b=v+":last",w="fp-tableCell",T="."+w,S="fp-nav",C="#"+S,k="fp-tooltip",E="."+k,A="fp-slide",D="."+A,j=D+p,L="fp-slides",P="."+L,I="fp-slidesContainer",O="."+I,N="fp-table",R="fp-slidesNav",z="."+R,H=z+" a",M="fp-controlArrow",q="."+M,B="fp-prev",F="."+B,W=M+" "+B,_=q+F,$="fp-next",V=M+" "+$,U=q+"."+$,X=e(t),G=e(n);e.fn.fullpage=function(M){//only once my friend!
if(e("html").hasClass(u)){tN();return}// common jQuery objects
var F,$,Y,K,Q,J,Z,ee,et,en,eo,ei,er=e("html, body"),ea=e("body"),es=e.fn.fullpage;// Creating some defaults, extending them with any options that were provided
M=e.extend({//navigation
menu:!1,anchors:[],lockAnchors:!1,navigation:!1,navigationPosition:"right",navigationTooltips:[],showActiveTooltip:!1,slidesNavigation:!1,slidesNavPosition:"bottom",scrollBar:!1,hybrid:!1,//scrolling
css3:!0,scrollingSpeed:700,autoScrolling:!0,fitToSection:!0,fitToSectionDelay:1e3,easing:"easeInOutCubic",easingcss3:"ease",loopBottom:!1,loopTop:!1,loopHorizontal:!0,continuousVertical:!1,continuousHorizontal:!1,scrollHorizontally:!1,interlockedSlides:!1,dragAndMove:!1,offsetSections:!1,resetSliders:!1,fadingEffect:!1,normalScrollElements:null,scrollOverflow:!1,scrollOverflowReset:!1,scrollOverflowHandler:e.fn.fp_scrolloverflow?e.fn.fp_scrolloverflow.iscrollHandler:null,scrollOverflowOptions:null,touchSensitivity:5,normalScrollElementTouchThreshold:5,bigSectionsDestination:null,//Accessibility
keyboardScrolling:!0,animateAnchor:!0,recordHistory:!0,//design
controlArrows:!0,controlArrowColor:"#fff",verticalCentered:!0,sectionsColor:[],paddingTop:0,paddingBottom:0,fixedElements:null,responsive:0,responsiveWidth:0,responsiveHeight:0,responsiveSlides:!1,parallax:!1,parallaxOptions:{type:"reveal",percentage:62,property:"translate"},//Custom selectors
sectionSelector:".section",slideSelector:".slide",//events
afterLoad:null,onLeave:null,afterRender:null,afterResize:null,afterReBuild:null,afterSlideLoad:null,onSlideLeave:null,afterResponsive:null,lazyLoading:!0},M);//flag to avoid very fast sliding for landscape sliders
var el=!1,ec=navigator.userAgent.match(/(iPhone|iPod|iPad|Android|playbook|silk|BlackBerry|BB10|Windows Phone|Tizen|Bada|webOS|IEMobile|Opera Mini)/),eu="ontouchstart"in t||navigator.msMaxTouchPoints>0||navigator.maxTouchPoints,ef=e(this),ed=X.height(),ep=!1,eh=!0,em=!0,eg=[],ev={};ev.m={up:!0,down:!0,left:!0,right:!0},ev.k=e.extend(!0,{},ev.m);var ey=t.PointerEvent?{down:"pointerdown",move:"pointermove"}:{down:"MSPointerDown",move:"MSPointerMove"},ex={touchmove:"ontouchmove"in t?"touchmove":ey.move,touchstart:"ontouchstart"in t?"touchstart":ey.down},eb=e.extend(!0,{},M);/**
        * Sets the autoScroll option.
        * It changes the scroll bar visibility and the history of the site as a result.
        */function ew(t,n){t||tL(0),tO("autoScrolling",t,n);var o=e(y);M.autoScrolling&&!M.scrollBar?(er.css({overflow:"hidden",height:"100%"}),eT(eb.recordHistory,"internal"),//for IE touch devices
ef.css({"-ms-touch-action":"none","touch-action":"none"}),o.length&&tL(o.position().top)):(er.css({overflow:"visible",height:"initial"}),eT(!1,"internal"),//for IE touch devices
ef.css({"-ms-touch-action":"","touch-action":""}),o.length&&er.scrollTop(o.position().top))}/**
        * Defines wheter to record the history for each hash change in the URL.
        */function eT(e,t){tO("recordHistory",e,t)}/**
        * Defines the scrolling speed
        */function eS(e,t){tO("scrollingSpeed",e,t)}/**
        * Sets fitToSection
        */function eC(e,t){tO("fitToSection",e,t)}/**
        * Adds or remove the possibility of scrolling through sections by using the mouse wheel or the trackpad.
        */function ek(e){var o,r,a;e?(r="",t.addEventListener?o="addEventListener":(o="attachEvent",r="on"),"DOMMouseScroll"==(a="onwheel"in n.createElement("div")?"wheel":n.onmousewheel!==i?"mousewheel":"DOMMouseScroll")?n[o](r+"MozMousePixelScroll",eJ,!1):n[o](r+a,eJ,!1),ef.on("mousedown",tr).on("mouseup",ta)):(n.addEventListener?(n.removeEventListener("mousewheel",eJ,!1),n.removeEventListener("wheel",eJ,!1),n.removeEventListener("MozMousePixelScroll",eJ,!1)):n.detachEvent("onmousewheel",eJ),ef.off("mousedown",tr).off("mouseup",ta))}/**
        * Adds or remove the possibility of scrolling through sections by using the mouse wheel/trackpad or touch gestures.
        * Optionally a second parameter can be used to specify the direction for which the action will be applied.
        *
        * @param directions string containing the direction or directions separated by comma.
        */function eE(t,n){void 0!==n?(n=n.replace(/ /g,"").split(","),e.each(n,function(e,n){tI(t,n,"m")})):(tI(t,"all","m"),t?(ek(!0),(ec||eu)&&(M.autoScrolling&&ea.off(ex.touchmove).on(ex.touchmove,eW),e(a).off(ex.touchstart).on(ex.touchstart,eY).off(ex.touchmove).on(ex.touchmove,eX))):(ek(!1),(ec||eu)&&(M.autoScrolling&&ea.off(ex.touchmove),e(a).off(ex.touchstart).off(ex.touchmove))))}/**
        * Adds or remove the possibility of scrolling through sections by using the keyboard arrow keys
        */function eA(t,n){void 0!==n?(n=n.replace(/ /g,"").split(","),e.each(n,function(e,n){tI(t,n,"k")})):(tI(t,"all","k"),M.keyboardScrolling=t)}/**
        * Moves the page up one section.
        */function eD(){var t=e(y).prev(v);!t.length&&(M.loopTop||M.continuousVertical)&&(t=e(v).last()),t.length&&e3(t,null,!0)}/**
        * Moves the page down one section.
        */function ej(){var t=e(y).next(v);!t.length&&(M.loopBottom||M.continuousVertical)&&(t=e(v).first()),t.length&&e3(t,null,!1)}/**
        * Moves the page to the given section and slide with no animation.
        * Anchors or index positions can be used as params.
        */function eL(e,t){eS(0,"internal"),eP(e,t),eS(eb.scrollingSpeed,"internal")}/**
        * Moves the page to the given section and slide.
        * Anchors or index positions can be used as params.
        */function eP(e,t){var n=tw(e);void 0!==t?tT(e,t):n.length>0&&e3(n)}/**
        * Slides right the slider of the active section.
        * Optional `section` param.
        */function eI(e){eZ("right",e)}/**
        * Slides left the slider of the active section.
        * Optional `section` param.
        */function eO(e){eZ("left",e)}/**
         * When resizing is finished, we adjust the slides sizes and positions
         */function eN(t){if(!ef.hasClass(c)){//nothing to do if the plugin was destroyed
ep=!0,ed=X.height(),e(v).each(function(){var t=e(this).find(P),n=e(this).find(D);M.verticalCentered&&e(this).find(T).css("height",tx(e(this))+"px"),e(this).css("height",ed+"px"),n.length>1&&tc(t,t.find(j))}),M.scrollOverflow&&J.createScrollBarForAll();var n=e(y).index(v);n&&eL(n+1),ep=!1,e.isFunction(M.afterResize)&&t&&M.afterResize.call(ef),e.isFunction(M.afterReBuild)&&!t&&M.afterReBuild.call(ef)}}/**
        * Turns fullPage.js to normal scrolling mode when the viewport `width` or `height`
        * are smaller than the set limit values.
        */function eR(t){var n=ea.hasClass(s);t?!n&&(ew(!1,"internal"),eC(!1,"internal"),e(C).hide(),ea.addClass(s),e.isFunction(M.afterResponsive)&&M.afterResponsive.call(ef,t)):n&&(ew(eb.autoScrolling,"internal"),eC(eb.autoScrolling,"internal"),e(C).show(),ea.removeClass(s),e.isFunction(M.afterResponsive)&&M.afterResponsive.call(ef,t))}/**
        * Actions and callbacks to fire afterRender
        */function ez(){var t,n=e(y);n.addClass(h),e4(n),e6(n),M.scrollOverflow&&M.scrollOverflowHandler.afterLoad(),(!(t=tw(tn().section))||t.length&&t.index()===Q.index())&&e.isFunction(M.afterLoad)&&M.afterLoad.call(n,n.data("anchor"),n.index(v)+1),e.isFunction(M.afterRender)&&M.afterRender.call(ef)}tN(),//easeInOutCubic animation included in the plugin
e.extend(e.easing,{easeInOutCubic:function(e,t,n,o,i){return(t/=i/2)<1?o/2*t*t*t+n:o/2*((t-=2)*t*t+2)+n}}),e(this).length&&(//public functions
es.version="2.9.6",es.setAutoScrolling=ew,es.setRecordHistory=eT,es.setScrollingSpeed=eS,es.setFitToSection=eC,es.setLockAnchors=/**
        * Sets lockAnchors
        */function(e){M.lockAnchors=e},es.setMouseWheelScrolling=ek,es.setAllowScrolling=eE,es.setKeyboardScrolling=eA,es.moveSectionUp=eD,es.moveSectionDown=ej,es.silentMoveTo=eL,es.moveTo=eP,es.moveSlideRight=eI,es.moveSlideLeft=eO,es.fitToSection=eB,es.reBuild=eN,es.setResponsive=eR,es.destroy=/*
        * Destroys fullpage.js plugin events and optinally its html markup and styles
        */function(t){//removing selectors
var n;ew(!1,"internal"),eE(!1),eA(!1),ef.addClass(c),clearTimeout(et),clearTimeout(ee),clearTimeout(Z),clearTimeout(en),clearTimeout(eo),X.off("scroll",eq).off("hashchange",tt).off("resize",td),G.off("keydown",to).off("keyup",ti).off("click touchstart",C+" a").off("mouseenter",C+" li").off("mouseleave",C+" li").off("click touchstart",H).off("mouseover",M.normalScrollElements).off("mouseout",M.normalScrollElements),e(v).off("click touchstart",q),clearTimeout(et),clearTimeout(ee),t&&(//reseting the `top` or `translate` properties to 0
tL(0),//loading all the lazy load content
ef.find("img[data-src], source[data-src], audio[data-src], iframe[data-src]").each(function(){e5(e(this),"src")}),ef.find("img[data-srcset]").each(function(){e5(e(this),"srcset")}),e(C+", "+z+", "+q).remove(),//removing inline styles
e(v).css({height:"","background-color":"",padding:""}),e(D).css({width:""}),ef.css({height:"",position:"","-ms-touch-action":"","touch-action":""}),er.css({overflow:"",height:""}),// remove .fp-enabled class
e("html").removeClass(u),// remove .fp-responsive class
ea.removeClass(s),// remove all of the .fp-viewing- classes
e.each(ea.get(0).className.split(/\s+/),function(e,t){0===t.indexOf(f)&&ea.removeClass(t)}),//removing added classes
e(v+", "+D).each(function(){M.scrollOverflowHandler&&M.scrollOverflowHandler.remove(e(this)),e(this).removeClass(N+" "+d),e(this).attr("style",e(this).data("fp-styles"))}),tm(ef),//Unwrapping content
ef.find(T+", "+O+", "+P).each(function(){//unwrap not being use in case there's no child element inside and its just text
e(this).replaceWith(this.childNodes)}),//removing the applied transition from the fullpage wrapper
ef.css({"-webkit-transition":"none",transition:"none"}),//scrolling the page to the top with no animation
er.scrollTop(0),n=[g,A,I],e.each(n,function(t,n){e("."+n).removeClass(n)}))},//functions we want to share across files but which are not
//mean to be used on their own by developers
es.shared={afterRenderActions:ez},M.css3&&(M.css3=/**
        * Checks for translate3d support
        * @return boolean
        * http://stackoverflow.com/questions/5661671/detecting-transform-translate3d-support
        */function(){var e,o=n.createElement("p"),r={webkitTransform:"-webkit-transform",OTransform:"-o-transform",msTransform:"-ms-transform",MozTransform:"-moz-transform",transform:"transform"};for(var a in // Add it to the body to get the computed style.
n.body.insertBefore(o,null),r)o.style[a]!==i&&(o.style[a]="translate3d(1px,1px,1px)",e=t.getComputedStyle(o).getPropertyValue(r[a]));return n.body.removeChild(o),e!==i&&e.length>0&&"none"!==e}()),M.scrollBar=M.scrollBar||M.hybrid,F=ef.find(M.sectionSelector),M.anchors.length||(M.anchors=F.filter("[data-anchor]").map(function(){return e(this).data("anchor").toString()}).get()),M.navigationTooltips.length||(M.navigationTooltips=F.filter("[data-tooltip]").map(function(){return e(this).data("tooltip").toString()}).get()),ef.css({height:"100%",position:"relative"}),//adding a class to recognize the container internally in the code
ef.addClass(r),e("html").addClass(u),//due to https://github.com/alvarotrigo/fullPage.js/issues/1502
ed=X.height(),ef.removeClass(c),ef.find(M.sectionSelector).addClass(g),ef.find(M.slideSelector).addClass(A),//styling the sections / slides / menu
e(v).each(function(t){var n,o,i,r=e(this),s=r.find(D),l=s.length;//caching the original styles to add them back on destroy('all')
r.data("fp-styles",r.attr("style")),t||0!==e(y).length||r.addClass(d),Q=e(y),r.css("height",ed+"px"),M.paddingTop&&r.css("padding-top",M.paddingTop),M.paddingBottom&&r.css("padding-bottom",M.paddingBottom),void 0!==M.sectionsColor[t]&&r.css("background-color",M.sectionsColor[t]),void 0!==M.anchors[t]&&r.attr("data-anchor",M.anchors[t]),void 0!==M.anchors[t]&&r.hasClass(d)&&tg(M.anchors[t],t),M.menu&&M.css3&&e(M.menu).closest(a).length&&e(M.menu).appendTo(ea),l>0?(n=100*l,o=100/l,s.wrapAll('<div class="'+I+'" />'),s.parent().wrap('<div class="'+L+'" />'),r.find(O).css("width",n+"%"),l>1&&(M.controlArrows&&(r.find(P).after('<div class="'+W+'"></div><div class="'+V+'"></div>'),"#fff"!=M.controlArrowColor&&(r.find(U).css("border-color","transparent transparent transparent "+M.controlArrowColor),r.find(_).css("border-color","transparent "+M.controlArrowColor+" transparent transparent")),M.loopHorizontal||r.find(_).hide()),M.slidesNavigation&&/**
        * Creates a landscape navigation bar with dots for horizontal sliders.
        */function(e,t){e.append('<div class="'+R+'"><ul></ul></div>');var n=e.find(z);//top or bottom
n.addClass(M.slidesNavPosition);for(var o=0;o<t;o++)n.find("ul").append('<li><a href="#"><span></span></a></li>');//centering it
n.css("margin-left","-"+n.width()/2+"px"),n.find("li").first().find("a").addClass(d)}(r,l)),s.each(function(t){e(this).css("width",o+"%"),M.verticalCentered&&ty(e(this))}),(i=r.find(j)).length&&(0!==e(y).index(v)||0===e(y).index(v)&&0!==i.index())?tj(i,"internal"):s.eq(0).addClass(d)):M.verticalCentered&&ty(r)}),M.fixedElements&&M.css3&&e(M.fixedElements).appendTo(ea),M.navigation&&/**
        * Creates a vertical navigation bar.
        */function(){ea.append('<div id="'+S+'"><ul></ul></div>');var t=e(C);t.addClass(function(){return M.showActiveTooltip?"fp-show-active "+M.navigationPosition:M.navigationPosition});for(var n=0;n<e(v).length;n++){var o="";M.anchors.length&&(o=M.anchors[n]);var i='<li><a href="#'+o+'"><span></span></a>',r=M.navigationTooltips[n];void 0!==r&&""!==r&&(i+='<div class="'+k+" "+M.navigationPosition+'">'+r+"</div>"),i+="</li>",t.find("ul").append(i)}//centering it vertically
e(C).css("margin-top","-"+e(C).height()/2+"px"),//activating the current active section
e(C).find("li").eq(e(y).index(v)).find("a").addClass(d)}(),ef.find('iframe[src*="youtube.com/embed/"]').each(function(){/**
        * Adds a new parameter and its value to the `src` of a given element
        */(function(e,t){var n=e.attr("src");e.attr("src",n+(/\?/.test(n)?"&":"?")+t)})(e(this),"enablejsapi=1")}),M.scrollOverflow?J=M.scrollOverflowHandler.init(M):ez(),eE(!0),ew(M.autoScrolling,"internal"),tp(),//setting the class for the body element
tA(),"complete"===n.readyState&&te(),X.on("load",te),X//when scrolling...
.on("scroll",eq)//detecting any change on the URL to scroll to the given anchor link
//(a way to detect back history button as we play with the hashes on the URL)
.on("hashchange",tt)//when opening a new tab (ctrl + t), `control` won't be pressed when coming back.
.blur(//when opening a new tab (ctrl + t), `control` won't be pressed when coming back.
function(){eh=!1,K=!1})//when resizing the site, we adjust the heights of the sections, slimScroll...
.resize(td),G//Sliding with arrow keys, both, vertical and horizontal
.keydown(to)//to prevent scrolling while zooming
.keyup(ti)//Scrolls to the section when clicking the navigation bullet
.on("click touchstart",C+" a",//Scrolls to the section when clicking the navigation bullet
function(t){t.preventDefault();var n=e(this).parent().index();e3(e(v).eq(n))})//Scrolls the slider to the given slide destination for the given section
.on("click touchstart",H,//Scrolls the slider to the given slide destination for the given section
function(t){t.preventDefault();var n=e(this).closest(v).find(P),o=n.find(D).eq(e(this).closest("li").index());tc(n,o)}).on("click",E,function(){e(this).prev().trigger("click")}),//Scrolling horizontally when clicking on the slider controls.
e(v).on("click touchstart",q,//Scrolling horizontally when clicking on the slider controls.
function(){var t=e(this).closest(v);e(this).hasClass(B)?ev.m.left&&eO(t):ev.m.right&&eI(t)}),M.normalScrollElements&&(G.on("mouseenter touchstart",M.normalScrollElements,function(){eE(!1)}),G.on("mouseleave touchend",M.normalScrollElements,function(){eE(!0)})));var eH=!1,eM=0;//when scrolling...
function eq(){var t;if(!M.autoScrolling||M.scrollBar){var o=X.scrollTop(),i=(u=o>eM?"down":"up",eM=o,//needed for auto-height sections to determine if we want to scroll to the top or bottom of the destination
e1=o,u),r=0,a=o+X.height()/2,s=ea.height()-X.height()===o,l=n.querySelectorAll(v);//when using `auto-height` for a small last section it won't be centered in the viewport
if(s)r=l.length-1;else if(o)for(var c=0;c<l.length;++c)// Pick the the last section which passes the middle line of the screen.
l[c].offsetTop<=a&&(r=c);else r=0;//setting the visible section as active when manually scrolling
//executing only once the first time we reach the section
if(p=(f=e(y).position().top)+X.height(),("up"==i?p>=X.scrollTop()+X.height():f<=X.scrollTop())&&!e(y).hasClass(h)&&e(y).addClass(h).siblings().removeClass(h),!//geting the last one, the current one on the screen
(t=e(l).eq(r)).hasClass(d)){eH=!0;var u,f,p,m,g,x=e(y),b=x.index(v)+1,w=tv(t),T=t.data("anchor"),S=t.index(v)+1,C=t.find(j);C.length&&(g=C.data("anchor"),m=C.index()),em&&(t.addClass(d).siblings().removeClass(d),e.isFunction(M.onLeave)&&M.onLeave.call(x,b,S,w),e.isFunction(M.afterLoad)&&M.afterLoad.call(t,T,S),e7(x),e4(t),e6(t),tg(T,S-1),M.anchors.length&&($=T),tC(m,g,T,S)),//small timeout in order to avoid entering in hashChange event when scrolling is not finished yet
clearTimeout(en),en=setTimeout(function(){eH=!1},100)}M.fitToSection&&(//for the auto adjust of the viewport to fit a whole section
clearTimeout(eo),eo=setTimeout(function(){//checking it again in case it changed during the delay
M.fitToSection&&//is the destination element bigger than the viewport?
e(y).outerHeight()<=ed&&eB()},M.fitToSectionDelay))}}/**
        * Fits the site to the nearest active section
        */function eB(){//checking fitToSection again in case it was set to false before the timeout delay
em&&(//allows to scroll to an active section and
//if the section is already active, we prevent firing callbacks
ep=!0,e3(e(y)),ep=!1)}/**
        * Determines the way of scrolling up or down:
        * by 'automatically' scrolling a section or by using the default and normal scrolling.
        */function eF(t){if(ev.m[t]){var n="down"===t?ej:eD;if(M.scrollOverflow){var o=M.scrollOverflowHandler.scrollable(e(y));if(o.length>0){//is the scrollbar at the start/end of the scroll?
if(!M.scrollOverflowHandler.isScrolled("down"===t?"bottom":"top",o))return!0;n()}else n()}else n()}}/*
        * Preventing bouncing in iOS #2285
        */function eW(e){var t=e.originalEvent;M.autoScrolling&&eG(t)&&e.preventDefault()}var e_=0,e$=0,eV=0,eU=0;/* Detecting touch events

        * As we are changing the top property of the page on scrolling, we can not use the traditional way to detect it.
        * This way, the touchstart and the touch moves shows an small difference between them which is the
        * used one to determine the direction.
        */function eX(t){var n=t.originalEvent,i=e(n.target).closest(v);// additional: if one of the normalScrollElements isn't within options.normalScrollElementTouchThreshold hops up the DOM chain
if(eG(n)){M.autoScrolling&&t.preventDefault();var r=tD(n);eV=r.y,eU=r.x,i.find(P).length&&o.abs(e$-eU)>o.abs(e_-eV)?!el&&o.abs(e$-eU)>X.outerWidth()/100*M.touchSensitivity&&(e$>eU?ev.m.right&&eI(i):ev.m.left&&eO(i)):M.autoScrolling&&em&&o.abs(e_-eV)>X.height()/100*M.touchSensitivity&&(e_>eV?eF("down"):eV>e_&&eF("up"))}}/**
        * As IE >= 10 fires both touch and mouse events when using a mouse in a touchscreen
        * this way we make sure that is really a touch event what IE is detecting.
        */function eG(e){//if is not IE   ||  IE is detecting `touch` or `pen`
return void 0===e.pointerType||"mouse"!=e.pointerType}/**
        * Handler for the touch start event.
        */function eY(e){var t=e.originalEvent;if(M.fitToSection&&er.stop(),eG(t)){var n=tD(t);e_=n.y,e$=n.x}}/**
        * Gets the average of the last `number` elements of the given array.
        */function eK(e,t){for(var n=0,i=e.slice(o.max(e.length-t,1)),r=0;r<i.length;r++)n+=i[r];return o.ceil(n/t)}/**
         * Detecting mousewheel scrolling
         *
         * http://blogs.sitepointstatic.com/examples/tech/mouse-wheel/index.html
         * http://www.sitepoint.com/html5-javascript-mouse-wheel/
         */var eQ=new Date().getTime();function eJ(n){var i=new Date().getTime(),r=e(m).hasClass("fp-normal-scroll");//autoscrolling and not zooming?
if(M.autoScrolling&&!K&&!r){var a=// cross-browser wheel delta
(n=n||t.event).wheelDelta||-n.deltaY||-n.detail,s=o.max(-1,o.min(1,a)),l=void 0!==n.wheelDeltaX||void 0!==n.deltaX,c=o.abs(n.wheelDeltaX)<o.abs(n.wheelDelta)||o.abs(n.deltaX)<o.abs(n.deltaY)||!l;eg.length>149&&eg.shift(),//keeping record of the previous scrollings
eg.push(o.abs(a)),M.scrollBar&&(n.preventDefault?n.preventDefault():n.returnValue=!1);//time difference between the last scroll and the current one
var u=i-eQ;return eQ=i,u>200&&(eg=[]),em&&eK(eg,10)>=eK(eg,70)&&c&&(s<0?eF("down"):eF("up")),!1}M.fitToSection&&er.stop()}/**
        * Slides a slider to the given direction.
        * Optional `section` param.
        */function eZ(t,n){var o=(void 0===n?e(y):n).find(P),i=o.find(D).length;// more than one slide needed and nothing should be sliding
if(o.length&&!el&&!(i<2)){var r=o.find(j),a=null;//isn't there a next slide in the secuence?
if(!(a="left"===t?r.prev(D):r.next(D)).length){//respect loopHorizontal settin
if(!M.loopHorizontal)return;a="left"===t?r.siblings(":last"):r.siblings(":first")}el=!0,tc(o,a,t)}}/**
        * Maintains the active slides in the viewport
        * (Because the `scroll` animation might get lost with some actions, such as when using continuousVertical)
        */function e0(){e(j).each(function(){tj(e(this),"internal")})}var e1=0;/**
        * Scrolls the site to the given element and scrolls to the slide if a callback is given.
        */function e3(t,n,i){if(void 0!==t){//there's no element to scroll, leaving the function
var r,s,l,c,u,f,p,h=(s=(r=t.position()).top,l=r.top>e1,c=s-ed+t.outerHeight(),u=M.bigSectionsDestination,t.outerHeight()>ed?(l||u)&&"bottom"!==u||(s=c):(l||ep&&t.is(":last-child"))&&(s=c),/*
            Keeping record of the last scrolled position to determine the scrolling direction.
            No conventional methods can be used as the scroll bar might not be present
            AND the section might not be active if it is auto-height and didnt reach the middle
            of the viewport.
            */e1=s,s),m={element:t,callback:n,isMovementUp:i,dtop:h,yMovement:tv(t),anchorLink:t.data("anchor"),sectionIndex:t.index(v),activeSlide:t.find(j),activeSection:e(y),leavingSection:e(y).index(v)+1,//caching the value of isResizing at the momment the function is called
//because it will be checked later inside a setTimeout and the value might change
localIsResizing:ep};//quiting when destination scroll is the same as the current one
if((!m.activeSection.is(t)||ep)&&(!M.scrollBar||X.scrollTop()!==m.dtop||t.hasClass("fp-auto-height"))){//callback (onLeave) if the site is not just resizing and readjusting the slides
if(m.activeSlide.length&&(f=m.activeSlide.data("anchor"),p=m.activeSlide.index()),e.isFunction(M.onLeave)&&!m.localIsResizing){var g,x=m.yMovement;if(void 0!==i&&(x=i?"up":"down"),!1===M.onLeave.call(m.activeSection,m.leavingSection,m.sectionIndex+1,x))return}M.autoScrolling&&M.continuousVertical&&void 0!==m.isMovementUp&&(!m.isMovementUp&&"up"==m.yMovement||// Intending to scroll down but about to go up or
m.isMovementUp&&"down"==m.yMovement)&&((g=m).isMovementUp?e(y).before(g.activeSection.nextAll(v)):e(y).after(g.activeSection.prevAll(v).get().reverse()),// Maintain the displayed position (now that we changed the element order)
tL(e(y).position().top),// Maintain the active slides visible in the viewport
e0(),// save for later the elements that still need to be reordered
g.wrapAroundElements=g.activeSection,// Recalculate animation variables
g.dtop=g.element.position().top,g.yMovement=tv(g.element),//sections will temporally have another position in the DOM
//updating this values in case we need them
g.leavingSection=g.activeSection.index(v)+1,g.sectionIndex=g.element.index(v),m=g),m.localIsResizing||e7(m.activeSection),M.scrollOverflow&&M.scrollOverflowHandler.beforeLeave(),t.addClass(d).siblings().removeClass(d),e4(t),M.scrollOverflow&&M.scrollOverflowHandler.onLeave(),//preventing from activating the MouseWheelHandler event
//more than once if the page is scrolling
em=!1,tC(p,f,m.anchorLink,m.sectionIndex),/**
        * Performs the vertical movement (by CSS3 or by jQuery)
        */function(t){// using CSS3 translate functionality
if(M.css3&&M.autoScrolling&&!M.scrollBar)tb("translate3d(0px, -"+o.round(t.dtop)+"px, 0px)",!0),M.scrollingSpeed?(clearTimeout(ee),ee=setTimeout(function(){e2(t)},M.scrollingSpeed)):e2(t);else{var n,i=(n={},M.autoScrolling&&!M.scrollBar?(n.options={top:-t.dtop},n.element=a):(n.options={scrollTop:t.dtop},n.element="html, body"),n);e(i.element).animate(i.options,M.scrollingSpeed,M.easing).promise().done(function(){M.scrollBar?/* Hack!
                        The timeout prevents setting the most dominant section in the viewport as "active" when the user
                        scrolled to a smaller section by using the mousewheel (auto scrolling) rather than draging the scroll bar.

                        When using scrollBar:true It seems like the scroll events still getting propagated even after the scrolling animation has finished.
                        */setTimeout(function(){e2(t)},30):e2(t)})}}(m),//flag to avoid callingn `scrollPage()` twice in case of using anchor links
$=m.anchorLink,//avoid firing it twice (as it does also on scroll)
tg(m.anchorLink,m.sectionIndex)}}}/**
        * Actions to do once the section is loaded.
        */function e2(t){t.wrapAroundElements&&t.wrapAroundElements.length&&(t.isMovementUp?e(x).before(t.wrapAroundElements):e(b).after(t.wrapAroundElements),tL(e(y).position().top),// Maintain the active slides visible in the viewport
e0()),//callback (afterLoad) if the site is not just resizing and readjusting the slides
e.isFunction(M.afterLoad)&&!t.localIsResizing&&M.afterLoad.call(t.element,t.anchorLink,t.sectionIndex+1),M.scrollOverflow&&M.scrollOverflowHandler.afterLoad(),t.localIsResizing||e6(t.element),t.element.addClass(h).siblings().removeClass(h),em=!0,e.isFunction(t.callback)&&t.callback.call(this)}/**
        * Sets the value for the given attribute from the `data-` attribute with the same suffix
        * ie: data-srcset ==> srcset  |  data-src ==> src
        */function e5(e,t){e.attr(t,e.data(t)).removeAttr("data-"+t)}/**
        * Lazy loads image, video and audio elements.
        */function e4(t){if(M.lazyLoading){var n;e9(t).find("img[data-src], img[data-srcset], source[data-src], source[data-srcset], video[data-src], audio[data-src], iframe[data-src]").each(function(){if(n=e(this),e.each(["src","srcset"],function(e,t){var o=n.attr("data-"+t);void 0!==o&&o&&e5(n,t)}),n.is("source")){var t=n.closest("video").length?"video":"audio";n.closest(t).get(0).load()}})}}/**
        * Plays video and audio elements.
        */function e6(t){var n=e9(t);//playing HTML5 media elements
n.find("video, audio").each(function(){var t=e(this).get(0);t.hasAttribute("data-autoplay")&&"function"==typeof t.play&&t.play()}),//youtube videos
n.find('iframe[src*="youtube.com/embed/"]').each(function(){var t=e(this).get(0);t.hasAttribute("data-autoplay")&&e8(t),//in case the URL was not loaded yet. On page load we need time for the new URL (with the API string) to load.
t.onload=function(){t.hasAttribute("data-autoplay")&&e8(t)}})}/**
        * Plays a youtube video
        */function e8(e){e.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}',"*")}/**
        * Stops video and audio elements.
        */function e7(t){var n=e9(t);//stopping HTML5 media elements
n.find("video, audio").each(function(){var t=e(this).get(0);t.hasAttribute("data-keepplaying")||"function"!=typeof t.pause||t.pause()}),//youtube videos
n.find('iframe[src*="youtube.com/embed/"]').each(function(){var t=e(this).get(0);/youtube\.com\/embed\//.test(e(this).attr("src"))&&!t.hasAttribute("data-keepplaying")&&e(this).get(0).contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}',"*")})}/**
        * Gets the active slide (or section) for the given section
        */function e9(t){var n=t.find(j);return n.length&&(t=e(n)),t}/**
        * Scrolls to the anchor in the URL when loading the site
        */function te(){var e=tn(),t=e.section,n=e.slide;t&&(M.animateAnchor?tT(t,n):eL(t,n))}/**
        * Detecting any change on the URL to scroll to the given anchor link
        * (a way to detect back history button as we play with the hashes on the URL)
        */function tt(){if(!eH&&!M.lockAnchors){var e=tn(),t=e.section,n=e.slide,o=void 0===$,i=void 0===$&&void 0===n&&!el;t&&t.length&&(t&&t!==$&&!o||i||!el&&Y!=n)&&tT(t,n)}}//gets the URL anchors (section and slide)
function tn(){var e,n,o=t.location.hash;if(o.length){//getting the anchor link in the URL and deleting the `#`
var i=o.replace("#","").split("/"),r=o.indexOf("#/")>-1;e=r?"/"+i[1]:decodeURIComponent(i[0]);var a=r?i[2]:i[1];a&&a.length&&(n=decodeURIComponent(a))}return{section:e,slide:n}}//Sliding with arrow keys, both, vertical and horizontal
function to(t){clearTimeout(ei);var n=e(":focus"),o=t.which;//tab?
9===o?/**
        * Makes sure the tab key will only focus elements within the current section/slide
        * preventing this way from breaking the page.
        * Based on "Modals and keyboard traps"
        * from https://developers.google.com/web/fundamentals/accessibility/focus/using-tabindex
        */function(t){var n=t.shiftKey,o=e(":focus"),i=e(y),r=i.find(j),a=(r.length?r:i).find('a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]').not('[tabindex="-1"]');function s(e){return e.preventDefault(),a.first().focus()}o.length?o.closest(y,j).length||(o=s(t)):s(t),(!n&&o.is(a.last())||n&&o.is(a.first()))&&t.preventDefault()}(t):n.is("textarea")||n.is("input")||n.is("select")||"true"===n.attr("contentEditable")||""===n.attr("contentEditable")||!M.keyboardScrolling||!M.autoScrolling||(e.inArray(o,[40,38,32,33,34])>-1&&t.preventDefault(),K=t.ctrlKey,ei=setTimeout(function(){/**
        * Keydown event
        */(function(t){var n=t.shiftKey;//do nothing if we can not scroll or we are not using horizotnal key arrows.
if(!(!em&&0>[37,39].indexOf(t.which)))switch(t.which){//up
case 38:case 33:ev.k.up&&eD();break;//down
case 32:if(n&&ev.k.up){eD();break}/* falls through */case 40:case 34:ev.k.down&&ej();break;//Home
case 36:ev.k.up&&eP(1);break;//End
case 35:ev.k.down&&eP(e(v).length);break;//left
case 37:ev.k.left&&eO();break;//right
case 39:ev.k.right&&eI();break;default:return;// exit this handler for other keys
}})(t)},150))}//to prevent scrolling while zooming
function ti(e){eh&&(K=e.ctrlKey)}//binding the mousemove when the mouse's middle button is released
function tr(e){//middle button
2==e.which&&(ts=e.pageY,ef.on("mousemove",tl))}//unbinding the mousemove when the mouse's middle button is released
function ta(e){//middle button
2==e.which&&ef.off("mousemove")}/**
        * Detecting the direction of the mouse movement.
        * Used only for the middle button of the mouse.
        */var ts=0;function tl(e){em&&(e.pageY<ts&&ev.m.up?eD():e.pageY>ts&&ev.m.down&&ej()),ts=e.pageY}/**
        * Scrolls horizontal sliders.
        */function tc(t,n,i){var r,a,s=t.closest(v),l={slides:t,destiny:n,direction:i,destinyPos:n.position(),slideIndex:n.index(),section:s,sectionIndex:s.index(v),anchorLink:s.data("anchor"),slidesNav:s.find(z),slideAnchor:tE(n),prevSlide:s.find(j),prevSlideIndex:s.find(j).index(),//caching the value of isResizing at the momment the function is called
//because it will be checked later inside a setTimeout and the value might change
localIsResizing:ep};if(l.xMovement=(r=l.prevSlideIndex)==(a=l.slideIndex)?"none":r>a?"left":"right",l.localIsResizing||(em=!1),M.onSlideLeave&&!l.localIsResizing&&"none"!==l.xMovement&&e.isFunction(M.onSlideLeave)&&!1===M.onSlideLeave.call(l.prevSlide,l.anchorLink,l.sectionIndex+1,l.prevSlideIndex,l.direction,l.slideIndex)){el=!1;return}n.addClass(d).siblings().removeClass(d),l.localIsResizing||(e7(l.prevSlide),e4(n)),!M.loopHorizontal&&M.controlArrows&&(//hidding it for the fist slide, showing for the rest
s.find(_).toggle(0!==l.slideIndex),//hidding it for the last slide, showing for the rest
s.find(U).toggle(!n.is(":last-child"))),s.hasClass(d)&&!l.localIsResizing&&tC(l.slideIndex,l.slideAnchor,l.anchorLink,l.sectionIndex),/**
        * Performs the horizontal movement. (CSS3 or jQuery)
        *
        * @param fireCallback {Bool} - determines whether or not to fire the callback
        */function(e,t,n){var i=t.destinyPos;if(M.css3){var r="translate3d(-"+o.round(i.left)+"px, 0px, 0px)";th(e.find(O)).css(tP(r)),et=setTimeout(function(){n&&tu(t)},M.scrollingSpeed,M.easing)}else e.animate({scrollLeft:o.round(i.left)},M.scrollingSpeed,M.easing,function(){n&&tu(t)})}(t,l,!0)}function tu(t){var n,o;n=t.slidesNav,o=t.slideIndex,n.find(p).removeClass(d),n.find("li").eq(o).find("a").addClass(d),t.localIsResizing||(e.isFunction(M.afterSlideLoad)&&M.afterSlideLoad.call(t.destiny,t.anchorLink,t.sectionIndex+1,t.slideAnchor,t.slideIndex),//needs to be inside the condition to prevent problems with continuousVertical and scrollHorizontally
//and to prevent double scroll right after a windows resize
em=!0,e6(t.destiny)),//letting them slide again
el=!1}var tf=ed;//when resizing the site, we adjust the heights of the sections, slimScroll...
function td(){// rebuild immediately on touch devices
if(//checking if it needs to get responsive
tp(),ec){var t=e(n.activeElement);//if the keyboard is NOT visible
if(!t.is("textarea")&&!t.is("input")&&!t.is("select")){var i=X.height();//making sure the change in the viewport size is enough to force a rebuild. (20 % of the window to avoid problems when hidding scroll bars)
o.abs(i-tf)>20*o.max(tf,i)/100&&(eN(!0),tf=i)}}else //in order to call the functions only when the resize is finished
//http://stackoverflow.com/questions/4298612/jquery-how-to-call-resize-event-only-once-its-finished-resizing
clearTimeout(Z),Z=setTimeout(function(){eN(!0)},350)}/**
        * Checks if the site needs to get responsive and disables autoScrolling if so.
        * A class `fp-responsive` is added to the plugin's container in case the user wants to use it for his own responsive CSS.
        */function tp(){var e=M.responsive||M.responsiveWidth,t=M.responsiveHeight,n=e&&X.outerWidth()<e,o=t&&X.height()<t;//backwards compatiblity
e&&t?eR(n||o):e?eR(n):t&&eR(o)}/**
        * Adds transition animations for the given element
        */function th(e){var t="all "+M.scrollingSpeed+"ms "+M.easingcss3;return e.removeClass(l),e.css({"-webkit-transition":t,transition:t})}/**
        * Remove transition animations for the given element
        */function tm(e){return e.addClass(l)}/**
        * Sets to active the current menu and vertical nav items.
        */function tg(t,n){M.menu&&(e(M.menu).find(p).removeClass(d),e(M.menu).find('[data-menuanchor="'+t+'"]').addClass(d)),M.navigation&&(e(C).find(p).removeClass(d),t?e(C).find('a[href="#'+t+'"]').addClass(d):e(C).find("li").eq(n).find("a").addClass(d))}/**
        * Retuns `up` or `down` depending on the scrolling movement to reach its destination
        * from the current section.
        */function tv(t){var n=e(y).index(v),o=t.index(v);return n==o?"none":n>o?"up":"down"}function ty(t){//In case we are styling for the 2nd time as in with reponsiveSlides
if(!t.hasClass(N)){var n=e('<div class="'+w+'" />').height(tx(t));t.addClass(N).wrapInner(n)}}function tx(e){var t=ed;if(M.paddingTop||M.paddingBottom){var n=e;n.hasClass(g)||(n=e.closest(v));var o=parseInt(n.css("padding-top"))+parseInt(n.css("padding-bottom"));t=ed-o}return t}/**
        * Adds a css3 transform property to the container class with or without animation depending on the animated param.
        */function tb(e,t){t?th(ef):tm(ef),ef.css(tP(e)),//syncronously removing the class after the animation has been applied.
setTimeout(function(){ef.removeClass(l)},10)}/**
        * Gets a section by its anchor / index
        */function tw(t){var n=ef.find(v+'[data-anchor="'+t+'"]');if(!n.length){var o=void 0!==t?t-1:0;n=e(v).eq(o)}return n}/**
        * Scrolls to the given section and slide anchors
        */function tT(e,t){var n=tw(e);//do nothing if there's no section with the given anchor name
if(n.length){var o,i,r=(o=t,(i=n.find(D+'[data-anchor="'+o+'"]')).length||(o=void 0!==o?o:0,i=n.find(D).eq(o)),i);//we need to scroll to the section and then to the slide
e===$||n.hasClass(d)?tS(r):e3(n,function(){tS(r)})}}/**
        * Scrolls the slider to the given slide destination for the given section
        */function tS(e){e.length&&tc(e.closest(P),e)}/**
        * Sets the state of the website depending on the active section/slide.
        * It changes the URL hash when needed and updates the body class.
        */function tC(e,t,n,o){var i="";M.anchors.length&&!M.lockAnchors&&(e?(void 0!==n&&(i=n),void 0===t&&(t=e),Y=t,tk(i+"/"+t)):(void 0!==e&&(Y=t),tk(n))),tA()}/**
        * Sets the URL hash.
        */function tk(e){if(M.recordHistory)location.hash=e;else if(ec||eu)t.history.replaceState(i,i,"#"+e);else{var n=t.location.href.split("#")[0];t.location.replace(n+"#"+e)}}/**
        * Gets the anchor for the given slide / section. Its index will be used if there's none.
        */function tE(e){var t=e.data("anchor"),n=e.index();return void 0===t&&(t=n),t}/**
        * Sets a class for the body of the page depending on the active section / slide
        */function tA(){var t=e(y),n=t.find(j),o=tE(t),i=tE(n),r=String(o);n.length&&(r=r+"-"+i),//changing slash for dash to make it a valid CSS style
r=r.replace("/","-").replace("#","");//removing previous anchor classes
var a=RegExp("\\b\\s?"+f+"-[^\\s]+\\b","g");ea[0].className=ea[0].className.replace(a,""),//adding the current anchor
ea.addClass(f+"-"+r)}/**
        * Gets the pageX and pageY properties depending on the browser.
        * https://github.com/alvarotrigo/fullPage.js/issues/194#issuecomment-34069854
        */function tD(e){var t=[];return t.y=void 0!==e.pageY&&(e.pageY||e.pageX)?e.pageY:e.touches[0].pageY,t.x=void 0!==e.pageX&&(e.pageY||e.pageX)?e.pageX:e.touches[0].pageX,eu&&eG(e)&&(M.scrollBar||!M.autoScrolling)&&(t.y=e.touches[0].pageY,t.x=e.touches[0].pageX),t}/**
        * Slides silently (with no animation) the active slider to the given slide.
        * @param noCallback {bool} true or defined -> no callbacks
        */function tj(e,t){eS(0,"internal"),void 0!==t&&(ep=!0),tc(e.closest(P),e),void 0!==t&&(ep=!1),eS(eb.scrollingSpeed,"internal")}/**
        * Scrolls silently (with no animation) the page to the given Y position.
        */function tL(e){// The first section can have a negative value in iOS 10. Not quite sure why: -0.0142822265625
// that's why we round it to 0.
var t=o.round(e);M.css3&&M.autoScrolling&&!M.scrollBar?tb("translate3d(0px, -"+t+"px, 0px)",!1):M.autoScrolling&&!M.scrollBar?ef.css("top",-t):er.scrollTop(t)}/**
        * Returns the cross-browser transform string.
        */function tP(e){return{"-webkit-transform":e,"-moz-transform":e,"-ms-transform":e,transform:e}}/**
        * Allowing or disallowing the mouse/swipe scroll in a given direction. (not for keyboard)
        * @type  m (mouse) or k (keyboard)
        */function tI(t,n,o){//up, down, left, right
"all"!==n?ev[o][n]=t:e.each(Object.keys(ev[o]),function(e,n){ev[o][n]=t})}/*
        * Sets the state for a variable with multiple states (original, and temporal)
        * Some variables such as `autoScrolling` or `recordHistory` might change automatically its state when using `responsive` or `autoScrolling:false`.
        * This function is used to keep track of both states, the original and the temporal one.
        * If type is not 'internal', then we assume the user is globally changing the variable.
        */function tO(e,t,n){M[e]=t,"internal"!==n&&(eb[e]=t)}/**
        * Displays warnings
        */function tN(){if(e("html").hasClass(u)){tR("error","Fullpage.js can only be initialized once and you are doing it multiple times!");return}M.continuousVertical&&(M.loopTop||M.loopBottom)&&(M.continuousVertical=!1,tR("warn","Option `loopTop/loopBottom` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled")),M.scrollBar&&M.scrollOverflow&&tR("warn","Option `scrollBar` is mutually exclusive with `scrollOverflow`. Sections with scrollOverflow might not work well in Firefox"),M.continuousVertical&&(M.scrollBar||!M.autoScrolling)&&(M.continuousVertical=!1,tR("warn","Scroll bars (`scrollBar:true` or `autoScrolling:false`) are mutually exclusive with `continuousVertical`; `continuousVertical` disabled")),M.scrollOverflow&&!M.scrollOverflowHandler&&(M.scrollOverflow=!1,tR("error","The option `scrollOverflow:true` requires the file `scrolloverflow.min.js`. Please include it before fullPage.js.")),//using extensions? Wrong file!
e.each(["fadingEffect","continuousHorizontal","scrollHorizontally","interlockedSlides","resetSliders","responsiveSlides","offsetSections","dragAndMove","scrollOverflowReset","parallax"],function(e,t){//is the option set to true?
M[t]&&tR("warn","fullpage.js extensions require jquery.fullpage.extensions.min.js file instead of the usual jquery.fullpage.js. Requested: "+t)}),//anchors can not have the same value as any element ID or NAME
e.each(M.anchors,function(t,n){//case insensitive selectors (http://stackoverflow.com/a/19465187/1081396)
var o=G.find("[name]").filter(function(){return e(this).attr("name")&&e(this).attr("name").toLowerCase()==n.toLowerCase()}),i=G.find("[id]").filter(function(){return e(this).attr("id")&&e(this).attr("id").toLowerCase()==n.toLowerCase()});(i.length||o.length)&&(tR("error","data-anchor tags can not have the same value as any `id` element on the site (or `name` element for IE)."),i.length&&tR("error",'"'+n+'" is is being used by another element `id` property'),o.length&&tR("error",'"'+n+'" is is being used by another element `name` property'))})}/**
        * Shows a message in the console of the given type.
        */function tR(e,t){console&&console[e]&&console[e]("fullPage: "+t)}};//end of $.fn.fullpage
},"function"==typeof define&&define.amd?define(["jquery"],function(e){return n(e,t,t.document,t.Math)}):c?c=n(a("fa1Gd"),t,t.document,t.Math):n(jQuery,t,t.document,t.Math);const u=["en","de","it","pl"],f={en:"+6285654885575",de:"+6285654885575",it:"+6281536085809",pl:"+6285654885575"};function d(){let t=/*@__PURE__*/e(s)(this),n=t.attr("data-lng");/*@__PURE__*/e(s).html5Translate(n),p(n),localStorage.setItem("language",n)}function p(t="en"){let n=f[t];/*@__PURE__*/e(s)("#telephone").html(`<a href="tel:${n}" class="phone">${n}</a>`)}/*@__PURE__*/e(s).html5Translate=function(t){/*@__PURE__*/e(s)("[data-translate-key]").each(function(){let n=/*@__PURE__*/e(s)(this);n.html(l[t][n.data("translateKey")])})},/*@__PURE__*/e(s)(function(){let t=navigator?.language||navigator?.userLanguage,n=t?.split("-")[0],o=u.includes(n),i=localStorage.getItem("language"),r=i;i||(r=o?n:"en"),/*@__PURE__*/e(s).html5Translate(r),p(r),window.innerWidth>=768&&/*@__PURE__*/e(s)("#fullpage").fullpage({paddingTop:"48px",autoScrolling:!0,scrollHorizontally:!1,navigation:!0,scrollBar:!0,sectionSelector:".scroll",lazyLoading:!0}),/*@__PURE__*/e(s)(".language").on("click",d)});//# sourceMappingURL=index.1d3d61b2.js.map

//# sourceMappingURL=index.1d3d61b2.js.map
