(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function t(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(o){if(o.ep)return;o.ep=!0;const r=t(o);fetch(o.href,r)}})();var O,a,c_,P,X,f_,q,S={},s_=[],b_=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,G=Array.isArray;function $(_,e){for(var t in e)_[t]=e[t];return _}function a_(_){var e=_.parentNode;e&&e.removeChild(_)}function k_(_,e,t){var n,o,r,c={};for(r in e)r=="key"?n=e[r]:r=="ref"?o=e[r]:c[r]=e[r];if(arguments.length>2&&(c.children=arguments.length>3?O.call(arguments,2):t),typeof _=="function"&&_.defaultProps!=null)for(r in _.defaultProps)c[r]===void 0&&(c[r]=_.defaultProps[r]);return L(_,c,n,o,null)}function L(_,e,t,n,o){var r={type:_,props:e,key:t,ref:n,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:o??++c_,__i:-1,__u:0};return o==null&&a.vnode!=null&&a.vnode(r),r}function N(_){return _.children}function U(_,e){this.props=_,this.context=e}function w(_,e){if(e==null)return _.__?w(_.__,_.__i+1):null;for(var t;e<_.__k.length;e++)if((t=_.__k[e])!=null&&t.__e!=null)return t.__e;return typeof _.type=="function"?w(_):null}function p_(_){var e,t;if((_=_.__)!=null&&_.__c!=null){for(_.__e=_.__c.base=null,e=0;e<_.__k.length;e++)if((t=_.__k[e])!=null&&t.__e!=null){_.__e=_.__c.base=t.__e;break}return p_(_)}}function Y(_){(!_.__d&&(_.__d=!0)&&P.push(_)&&!M.__r++||X!==a.debounceRendering)&&((X=a.debounceRendering)||f_)(M)}function M(){var _,e,t,n,o,r,c,l,f;for(P.sort(q);_=P.shift();)_.__d&&(e=P.length,n=void 0,r=(o=(t=_).__v).__e,l=[],f=[],(c=t.__P)&&((n=$({},o)).__v=o.__v+1,a.vnode&&a.vnode(n),K(c,n,o,t.__n,c.ownerSVGElement!==void 0,32&o.__u?[r]:null,l,r??w(o),!!(32&o.__u),f),n.__.__k[n.__i]=n,v_(l,n,f),n.__e!=r&&p_(n)),P.length>e&&P.sort(q));M.__r=0}function d_(_,e,t,n,o,r,c,l,f,u,p){var i,d,s,y,k,m=n&&n.__k||s_,h=e.length;for(t.__d=f,H_(t,e,m),f=t.__d,i=0;i<h;i++)(s=t.__k[i])!=null&&typeof s!="boolean"&&typeof s!="function"&&(d=s.__i===-1?S:m[s.__i]||S,s.__i=i,K(_,s,d,o,r,c,l,f,u,p),y=s.__e,s.ref&&d.ref!=s.ref&&(d.ref&&J(d.ref,null,s),p.push(s.ref,s.__c||y,s)),k==null&&y!=null&&(k=y),65536&s.__u||d.__k===s.__k?f=h_(s,f,_):typeof s.type=="function"&&s.__d!==void 0?f=s.__d:y&&(f=y.nextSibling),s.__d=void 0,s.__u&=-196609);t.__d=f,t.__e=k}function H_(_,e,t){var n,o,r,c,l,f=e.length,u=t.length,p=u,i=0;for(_.__k=[],n=0;n<f;n++)(o=_.__k[n]=(o=e[n])==null||typeof o=="boolean"||typeof o=="function"?null:typeof o=="string"||typeof o=="number"||typeof o=="bigint"||o.constructor==String?L(null,o,null,null,o):G(o)?L(N,{children:o},null,null,null):o.__b>0?L(o.type,o.props,o.key,o.ref?o.ref:null,o.__v):o)!=null?(o.__=_,o.__b=_.__b+1,l=$_(o,t,c=n+i,p),o.__i=l,r=null,l!==-1&&(p--,(r=t[l])&&(r.__u|=131072)),r==null||r.__v===null?(l==-1&&i--,typeof o.type!="function"&&(o.__u|=65536)):l!==c&&(l===c+1?i++:l>c?p>f-c?i+=l-c:i--:i=l<c&&l==c-1?l-c:0,l!==n+i&&(o.__u|=65536))):(r=t[n])&&r.key==null&&r.__e&&(r.__e==_.__d&&(_.__d=w(r)),B(r,r,!1),t[n]=null,p--);if(p)for(n=0;n<u;n++)(r=t[n])!=null&&!(131072&r.__u)&&(r.__e==_.__d&&(_.__d=w(r)),B(r,r))}function h_(_,e,t){var n,o;if(typeof _.type=="function"){for(n=_.__k,o=0;n&&o<n.length;o++)n[o]&&(n[o].__=_,e=h_(n[o],e,t));return e}return _.__e!=e&&(t.insertBefore(_.__e,e||null),e=_.__e),e&&e.nextSibling}function $_(_,e,t,n){var o=_.key,r=_.type,c=t-1,l=t+1,f=e[t];if(f===null||f&&o==f.key&&r===f.type)return t;if(n>(f!=null&&!(131072&f.__u)?1:0))for(;c>=0||l<e.length;){if(c>=0){if((f=e[c])&&!(131072&f.__u)&&o==f.key&&r===f.type)return c;c--}if(l<e.length){if((f=e[l])&&!(131072&f.__u)&&o==f.key&&r===f.type)return l;l++}}return-1}function Z(_,e,t){e[0]==="-"?_.setProperty(e,t??""):_[e]=t==null?"":typeof t!="number"||b_.test(e)?t:t+"px"}function D(_,e,t,n,o){var r;_:if(e==="style")if(typeof t=="string")_.style.cssText=t;else{if(typeof n=="string"&&(_.style.cssText=n=""),n)for(e in n)t&&e in t||Z(_.style,e,"");if(t)for(e in t)n&&t[e]===n[e]||Z(_.style,e,t[e])}else if(e[0]==="o"&&e[1]==="n")r=e!==(e=e.replace(/(PointerCapture)$|Capture$/,"$1")),e=e.toLowerCase()in _?e.toLowerCase().slice(2):e.slice(2),_.l||(_.l={}),_.l[e+r]=t,t?n?t.u=n.u:(t.u=Date.now(),_.addEventListener(e,r?e_:__,r)):_.removeEventListener(e,r?e_:__,r);else{if(o)e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(e!=="width"&&e!=="height"&&e!=="href"&&e!=="list"&&e!=="form"&&e!=="tabIndex"&&e!=="download"&&e!=="rowSpan"&&e!=="colSpan"&&e!=="role"&&e in _)try{_[e]=t??"";break _}catch{}typeof t=="function"||(t==null||t===!1&&e[4]!=="-"?_.removeAttribute(e):_.setAttribute(e,t))}}function __(_){var e=this.l[_.type+!1];if(_.t){if(_.t<=e.u)return}else _.t=Date.now();return e(a.event?a.event(_):_)}function e_(_){return this.l[_.type+!0](a.event?a.event(_):_)}function K(_,e,t,n,o,r,c,l,f,u){var p,i,d,s,y,k,m,h,g,H,x,E,Q,C,I,b=e.type;if(e.constructor!==void 0)return null;128&t.__u&&(f=!!(32&t.__u),r=[l=e.__e=t.__e]),(p=a.__b)&&p(e);_:if(typeof b=="function")try{if(h=e.props,g=(p=b.contextType)&&n[p.__c],H=p?g?g.props.value:p.__:n,t.__c?m=(i=e.__c=t.__c).__=i.__E:("prototype"in b&&b.prototype.render?e.__c=i=new b(h,H):(e.__c=i=new U(h,H),i.constructor=b,i.render=w_),g&&g.sub(i),i.props=h,i.state||(i.state={}),i.context=H,i.__n=n,d=i.__d=!0,i.__h=[],i._sb=[]),i.__s==null&&(i.__s=i.state),b.getDerivedStateFromProps!=null&&(i.__s==i.state&&(i.__s=$({},i.__s)),$(i.__s,b.getDerivedStateFromProps(h,i.__s))),s=i.props,y=i.state,i.__v=e,d)b.getDerivedStateFromProps==null&&i.componentWillMount!=null&&i.componentWillMount(),i.componentDidMount!=null&&i.__h.push(i.componentDidMount);else{if(b.getDerivedStateFromProps==null&&h!==s&&i.componentWillReceiveProps!=null&&i.componentWillReceiveProps(h,H),!i.__e&&(i.shouldComponentUpdate!=null&&i.shouldComponentUpdate(h,i.__s,H)===!1||e.__v===t.__v)){for(e.__v!==t.__v&&(i.props=h,i.state=i.__s,i.__d=!1),e.__e=t.__e,e.__k=t.__k,e.__k.forEach(function(T){T&&(T.__=e)}),x=0;x<i._sb.length;x++)i.__h.push(i._sb[x]);i._sb=[],i.__h.length&&c.push(i);break _}i.componentWillUpdate!=null&&i.componentWillUpdate(h,i.__s,H),i.componentDidUpdate!=null&&i.__h.push(function(){i.componentDidUpdate(s,y,k)})}if(i.context=H,i.props=h,i.__P=_,i.__e=!1,E=a.__r,Q=0,"prototype"in b&&b.prototype.render){for(i.state=i.__s,i.__d=!1,E&&E(e),p=i.render(i.props,i.state,i.context),C=0;C<i._sb.length;C++)i.__h.push(i._sb[C]);i._sb=[]}else do i.__d=!1,E&&E(e),p=i.render(i.props,i.state,i.context),i.state=i.__s;while(i.__d&&++Q<25);i.state=i.__s,i.getChildContext!=null&&(n=$($({},n),i.getChildContext())),d||i.getSnapshotBeforeUpdate==null||(k=i.getSnapshotBeforeUpdate(s,y)),d_(_,G(I=p!=null&&p.type===N&&p.key==null?p.props.children:p)?I:[I],e,t,n,o,r,c,l,f,u),i.base=e.__e,e.__u&=-161,i.__h.length&&c.push(i),m&&(i.__E=i.__=null)}catch(T){e.__v=null,f||r!=null?(e.__e=l,e.__u|=f?160:32,r[r.indexOf(l)]=null):(e.__e=t.__e,e.__k=t.__k),a.__e(T,e,t)}else r==null&&e.__v===t.__v?(e.__k=t.__k,e.__e=t.__e):e.__e=P_(t.__e,e,t,n,o,r,c,f,u);(p=a.diffed)&&p(e)}function v_(_,e,t){e.__d=void 0;for(var n=0;n<t.length;n++)J(t[n],t[++n],t[++n]);a.__c&&a.__c(e,_),_.some(function(o){try{_=o.__h,o.__h=[],_.some(function(r){r.call(o)})}catch(r){a.__e(r,o.__v)}})}function P_(_,e,t,n,o,r,c,l,f){var u,p,i,d,s,y,k,m=t.props,h=e.props,g=e.type;if(g==="svg"&&(o=!0),r!=null){for(u=0;u<r.length;u++)if((s=r[u])&&"setAttribute"in s==!!g&&(g?s.localName===g:s.nodeType===3)){_=s,r[u]=null;break}}if(_==null){if(g===null)return document.createTextNode(h);_=o?document.createElementNS("http://www.w3.org/2000/svg",g):document.createElement(g,h.is&&h),r=null,l=!1}if(g===null)m===h||l&&_.data===h||(_.data=h);else{if(r=r&&O.call(_.childNodes),m=t.props||S,!l&&r!=null)for(m={},u=0;u<_.attributes.length;u++)m[(s=_.attributes[u]).name]=s.value;for(u in m)s=m[u],u=="children"||(u=="dangerouslySetInnerHTML"?i=s:u==="key"||u in h||D(_,u,null,s,o));for(u in h)s=h[u],u=="children"?d=s:u=="dangerouslySetInnerHTML"?p=s:u=="value"?y=s:u=="checked"?k=s:u==="key"||l&&typeof s!="function"||m[u]===s||D(_,u,s,m[u],o);if(p)l||i&&(p.__html===i.__html||p.__html===_.innerHTML)||(_.innerHTML=p.__html),e.__k=[];else if(i&&(_.innerHTML=""),d_(_,G(d)?d:[d],e,t,n,o&&g!=="foreignObject",r,c,r?r[0]:t.__k&&w(t,0),l,f),r!=null)for(u=r.length;u--;)r[u]!=null&&a_(r[u]);l||(u="value",y!==void 0&&(y!==_[u]||g==="progress"&&!y||g==="option"&&y!==m[u])&&D(_,u,y,m[u],!1),u="checked",k!==void 0&&k!==_[u]&&D(_,u,k,m[u],!1))}return _}function J(_,e,t){try{typeof _=="function"?_(e):_.current=e}catch(n){a.__e(n,t)}}function B(_,e,t){var n,o;if(a.unmount&&a.unmount(_),(n=_.ref)&&(n.current&&n.current!==_.__e||J(n,null,e)),(n=_.__c)!=null){if(n.componentWillUnmount)try{n.componentWillUnmount()}catch(r){a.__e(r,e)}n.base=n.__P=null,_.__c=void 0}if(n=_.__k)for(o=0;o<n.length;o++)n[o]&&B(n[o],e,t||typeof _.type!="function");t||_.__e==null||a_(_.__e),_.__=_.__e=_.__d=void 0}function w_(_,e,t){return this.constructor(_,t)}function E_(_,e,t){var n,o,r,c;a.__&&a.__(_,e),o=(n=typeof t=="function")?null:t&&t.__k||e.__k,r=[],c=[],K(e,_=(!n&&t||e).__k=k_(N,null,[_]),o||S,S,e.ownerSVGElement!==void 0,!n&&t?[t]:o?null:e.firstChild?O.call(e.childNodes):null,r,!n&&t?t:o?o.__e:e.firstChild,n,c),v_(r,_,c)}O=s_.slice,a={__e:function(_,e,t,n){for(var o,r,c;e=e.__;)if((o=e.__c)&&!o.__)try{if((r=o.constructor)&&r.getDerivedStateFromError!=null&&(o.setState(r.getDerivedStateFromError(_)),c=o.__d),o.componentDidCatch!=null&&(o.componentDidCatch(_,n||{}),c=o.__d),c)return o.__E=o}catch(l){_=l}throw _}},c_=0,U.prototype.setState=function(_,e){var t;t=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=$({},this.state),typeof _=="function"&&(_=_($({},t),this.props)),_&&$(t,_),_!=null&&this.__v&&(e&&this._sb.push(e),Y(this))},U.prototype.forceUpdate=function(_){this.__v&&(this.__e=!0,_&&this.__h.push(_),Y(this))},U.prototype.render=N,P=[],f_=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,q=function(_,e){return _.__v.__b-e.__v.__b},M.__r=0;var W,v,V,t_,j=0,y_=[],A=[],n_=a.__b,o_=a.__r,r_=a.diffed,i_=a.__c,l_=a.unmount;function m_(_,e){a.__h&&a.__h(v,_,j||e),j=0;var t=v.__H||(v.__H={__:[],__h:[]});return _>=t.__.length&&t.__.push({__V:A}),t.__[_]}function S_(_){return j=1,N_(g_,_)}function N_(_,e,t){var n=m_(W++,2);if(n.t=_,!n.__c&&(n.__=[t?t(e):g_(void 0,e),function(l){var f=n.__N?n.__N[0]:n.__[0],u=n.t(f,l);f!==u&&(n.__N=[u,n.__[1]],n.__c.setState({}))}],n.__c=v,!v.u)){var o=function(l,f,u){if(!n.__c.__H)return!0;var p=n.__c.__H.__.filter(function(d){return d.__c});if(p.every(function(d){return!d.__N}))return!r||r.call(this,l,f,u);var i=!1;return p.forEach(function(d){if(d.__N){var s=d.__[0];d.__=d.__N,d.__N=void 0,s!==d.__[0]&&(i=!0)}}),!(!i&&n.__c.props===l)&&(!r||r.call(this,l,f,u))};v.u=!0;var r=v.shouldComponentUpdate,c=v.componentWillUpdate;v.componentWillUpdate=function(l,f,u){if(this.__e){var p=r;r=void 0,o(l,f,u),r=p}c&&c.call(this,l,f,u)},v.shouldComponentUpdate=o}return n.__N||n.__}function x_(_,e){var t=m_(W++,3);!a.__s&&D_(t.__H,e)&&(t.__=_,t.i=e,v.__H.__h.push(t))}function C_(){for(var _;_=y_.shift();)if(_.__P&&_.__H)try{_.__H.__h.forEach(F),_.__H.__h.forEach(R),_.__H.__h=[]}catch(e){_.__H.__h=[],a.__e(e,_.__v)}}a.__b=function(_){v=null,n_&&n_(_)},a.__r=function(_){o_&&o_(_),W=0;var e=(v=_.__c).__H;e&&(V===v?(e.__h=[],v.__h=[],e.__.forEach(function(t){t.__N&&(t.__=t.__N),t.__V=A,t.__N=t.i=void 0})):(e.__h.forEach(F),e.__h.forEach(R),e.__h=[],W=0)),V=v},a.diffed=function(_){r_&&r_(_);var e=_.__c;e&&e.__H&&(e.__H.__h.length&&(y_.push(e)!==1&&t_===a.requestAnimationFrame||((t_=a.requestAnimationFrame)||T_)(C_)),e.__H.__.forEach(function(t){t.i&&(t.__H=t.i),t.__V!==A&&(t.__=t.__V),t.i=void 0,t.__V=A})),V=v=null},a.__c=function(_,e){e.some(function(t){try{t.__h.forEach(F),t.__h=t.__h.filter(function(n){return!n.__||R(n)})}catch(n){e.some(function(o){o.__h&&(o.__h=[])}),e=[],a.__e(n,t.__v)}}),i_&&i_(_,e)},a.unmount=function(_){l_&&l_(_);var e,t=_.__c;t&&t.__H&&(t.__H.__.forEach(function(n){try{F(n)}catch(o){e=o}}),t.__H=void 0,e&&a.__e(e,t.__v))};var u_=typeof requestAnimationFrame=="function";function T_(_){var e,t=function(){clearTimeout(n),u_&&cancelAnimationFrame(e),setTimeout(_)},n=setTimeout(t,100);u_&&(e=requestAnimationFrame(t))}function F(_){var e=v,t=_.__c;typeof t=="function"&&(_.__c=void 0,t()),v=e}function R(_){var e=v;_.__c=_.__(),v=e}function D_(_,e){return!_||_.length!==e.length||e.some(function(t,n){return t!==_[n]})}function g_(_,e){return typeof e=="function"?e(_):e}var L_=0;function z(_,e,t,n,o,r){var c,l,f={};for(l in e)l=="ref"?c=e[l]:f[l]=e[l];var u={type:_,props:f,key:t,ref:c,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:--L_,__i:-1,__u:0,__source:o,__self:r};if(typeof _=="function"&&(c=_.defaultProps))for(l in c)f[l]===void 0&&(f[l]=c[l]);return a.vnode&&a.vnode(u),u}function U_(){return S_(0),x_(()=>{fetch("http://localhost:3000/",{method:"GET"}).then(_=>_.json()).then(_=>console.log(_))},[]),z(N,{children:z("h1",{children:"Hello World!"})})}E_(z(U_,{}),document.getElementById("app"));
