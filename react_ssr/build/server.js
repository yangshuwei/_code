/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/client/request.js":
/*!*******************************!*\
  !*** ./src/client/request.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (axios__WEBPACK_IMPORTED_MODULE_0___default().create({
  baseURL: '/'
}));

/***/ }),

/***/ "./src/components/Header/index.js":
/*!****************************************!*\
  !*** ./src/components/Header/index.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);



var Header = function Header(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "/"
  }, "Home")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "/counter"
  }, "Counter")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "/user"
  }, "user")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "/user/detail"
  }, "detail")))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);

/***/ }),

/***/ "./src/containers/App.js":
/*!*******************************!*\
  !*** ./src/containers/App.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-config */ "react-router-config");
/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_config__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Header */ "./src/components/Header/index.js");




var App = function App(props) {
  console.log(props.route.components);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Header__WEBPACK_IMPORTED_MODULE_2__.default, null), (0,react_router_config__WEBPACK_IMPORTED_MODULE_1__.renderRoutes)(props.route.routes));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);

/***/ }),

/***/ "./src/containers/Counter/index.js":
/*!*****************************************!*\
  !*** ./src/containers/Counter/index.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store_actions_counter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store/actions/counter */ "./src/store/actions/counter.js");




var Counter = function Counter(props) {
  // const [number,setNumber] = useState(0)
  var countHandler = function countHandler() {
    console.log(111);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, props.number), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: props.add
  }, "+"));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(function (state) {
  return state.counter;
}, _store_actions_counter__WEBPACK_IMPORTED_MODULE_2__.default)(Counter));

/***/ }),

/***/ "./src/containers/Home/index.js":
/*!**************************************!*\
  !*** ./src/containers/Home/index.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store_actions_home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store/actions/home */ "./src/store/actions/home.js");


 // class Home extends React.Component{
//   componentDidMount(){
//     this.props.getHomeList()
//   }
//   render(){
//     return(
//       <div>
//         <ul>
//           {props.list.map(item=>(
//             <li key={item.name}>name:{item.name},age:{item.age}</li>
//           ))
//           }
//         </ul>
//       </div>
//     )
//   }
// }

var Home = function Home(props) {
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (props.list.length == 0) {
      props.getHomeList();
    }
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, props.list.map(function (item) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
      key: item.name
    }, "name:", item.name, ",age:", item.age);
  })));
}; //此方法用来异步加载数据，将数据放到仓库中去


Home = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(function (state) {
  return state.home;
}, _store_actions_home__WEBPACK_IMPORTED_MODULE_2__.default)(Home);

Home.loadData = function (store) {
  console.log('store--', store); // dispatch 派发的 就是一个action  return store.dispatch =>  return axios.get()  是一个promise

  return store.dispatch(_store_actions_home__WEBPACK_IMPORTED_MODULE_2__.default.getHomeList());
}; // Home = 


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);

/***/ }),

/***/ "./src/containers/User/detail.js":
/*!***************************************!*\
  !*** ./src/containers/User/detail.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var UserDetail = function UserDetail() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "user d");
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserDetail);

/***/ }),

/***/ "./src/containers/User/index.js":
/*!**************************************!*\
  !*** ./src/containers/User/index.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var User = function User() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "user list");
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (User);

/***/ }),

/***/ "./src/routes.js":
/*!***********************!*\
  !*** ./src/routes.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _containers_Home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./containers/Home */ "./src/containers/Home/index.js");
/* harmony import */ var _containers_Counter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./containers/Counter */ "./src/containers/Counter/index.js");
/* harmony import */ var _containers_User_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./containers/User/index */ "./src/containers/User/index.js");
/* harmony import */ var _containers_User_detail__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./containers/User/detail */ "./src/containers/User/detail.js");
/* harmony import */ var _containers_App__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./containers/App */ "./src/containers/App.js");







/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([{
  path: '/',
  component: _containers_App__WEBPACK_IMPORTED_MODULE_6__.default,
  routes: [{
    path: '/',
    component: _containers_Home__WEBPACK_IMPORTED_MODULE_2__.default,
    exact: true,
    key: 'home',
    loadData: _containers_Home__WEBPACK_IMPORTED_MODULE_2__.default.loadData //服务端渲染需要加载异步数据

  }, {
    path: '/counter',
    component: _containers_Counter__WEBPACK_IMPORTED_MODULE_3__.default,
    key: 'login'
  } // {
  //   path: '/user',
  //   component: User,
  //   key: '/user',
  //   routes: [
  //     {
  //       path: '/user/detail',
  //       component: UserDetail,
  //       key: '/user/detail',
  //       exact: true,
  //     }
  //   ]
  // },
  ]
}]); // export default (
//   <Fragment>
//     <Route path="/" exact component={Home}></Route>
//     <Route path="/counter" exact component={Counter}></Route>
//   </Fragment>
// )

/***/ }),

/***/ "./src/server/render.js":
/*!******************************!*\
  !*** ./src/server/render.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom/server */ "react-dom/server");
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../routes */ "./src/routes.js");
/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-config */ "react-router-config");
/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_router_config__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../store */ "./src/store/index.js");









/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(_x, _x2) {
  return _ref.apply(this, arguments);
}

function _ref() {
  _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(ctx, next) {
    var store, matchedRoutes, promises, html;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            store = (0,_store__WEBPACK_IMPORTED_MODULE_8__.getServerStore)(ctx);
            matchedRoutes = (0,react_router_config__WEBPACK_IMPORTED_MODULE_6__.matchRoutes)(_routes__WEBPACK_IMPORTED_MODULE_5__.default, ctx.path);
            promises = [];
            console.log('matchedRoutes', matchedRoutes);
            matchedRoutes.forEach(function (item) {
              if (item.route.loadData) {
                // console.dir(route.loadData())
                promises.push(item.route.loadData(store));
              }
            });
            _context.next = 7;
            return Promise.all(promises);

          case 7:
            _context.next = 9;
            return Promise.resolve((0,react_dom_server__WEBPACK_IMPORTED_MODULE_3__.renderToString)( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(react_redux__WEBPACK_IMPORTED_MODULE_7__.Provider, {
              store: store
            }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.StaticRouter, {
              context: {},
              location: ctx.path
            }, (0,react_router_config__WEBPACK_IMPORTED_MODULE_6__.renderRoutes)(_routes__WEBPACK_IMPORTED_MODULE_5__.default)))));

          case 9:
            html = _context.sent;
            ctx.body = "\n      <!DOCTYPE html>\n        <html lang=\"en\">\n        <head>\n          <meta charset=\"UTF-8\">\n          <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n          <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n          <title>Document</title>\n        </head>\n        <body>\n            <div id=\"root\">".concat(html, "</div>\n            <script>\n              window.context = {\n                state:").concat(JSON.stringify(store.getState()), "\n              }\n            </script>\n            <script src=\"/index.js\"></script>\n        </body>\n        </html>\n    ");

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _ref.apply(this, arguments);
}

/***/ }),

/***/ "./src/server/request.js":
/*!*******************************!*\
  !*** ./src/server/request.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (axios__WEBPACK_IMPORTED_MODULE_0___default().create({
  baseURL: 'http://loacalhost:4000/'
}));

/***/ }),

/***/ "./src/store/action-type.js":
/*!**********************************!*\
  !*** ./src/store/action-type.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ADD": () => (/* binding */ ADD),
/* harmony export */   "SET_HOME_LIST": () => (/* binding */ SET_HOME_LIST)
/* harmony export */ });
var ADD = 'ADD';
var SET_HOME_LIST = 'SET_HOME_LIST';

/***/ }),

/***/ "./src/store/actions/counter.js":
/*!**************************************!*\
  !*** ./src/store/actions/counter.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _action_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../action-type */ "./src/store/action-type.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  add: function add() {
    return {
      type: _action_type__WEBPACK_IMPORTED_MODULE_0__.ADD
    };
  }
});

/***/ }),

/***/ "./src/store/actions/home.js":
/*!***********************************!*\
  !*** ./src/store/actions/home.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _action_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../action-type */ "./src/store/action-type.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  getHomeList: function getHomeList() {
    //返回一个函数  store.dispatch(action)
    return function (dispatch, getState, request) {
      //redux-thunk 中间件
      return request.get('/api/users').then(function (result) {
        // console.log(result)
        var list = result.data;
        dispatch({
          type: _action_type__WEBPACK_IMPORTED_MODULE_0__.SET_HOME_LIST,
          payload: list
        });
      });
    };
  }
});

/***/ }),

/***/ "./src/store/index.js":
/*!****************************!*\
  !*** ./src/store/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getClientStore": () => (/* binding */ getClientStore),
/* harmony export */   "getServerStore": () => (/* binding */ getServerStore)
/* harmony export */ });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-thunk */ "redux-thunk");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-logger */ "redux-logger");
/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_logger__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reducers */ "./src/store/reducers/index.js");
/* harmony import */ var _client_request__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../client/request */ "./src/client/request.js");
/* harmony import */ var _server_request__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../server/request */ "./src/server/request.js");






function getClientStore() {
  var initState = window.context.state;
  return (0,redux__WEBPACK_IMPORTED_MODULE_0__.createStore)(_reducers__WEBPACK_IMPORTED_MODULE_3__.default, initState, (0,redux__WEBPACK_IMPORTED_MODULE_0__.applyMiddleware)(redux_thunk__WEBPACK_IMPORTED_MODULE_1___default().withExtraArgument(_client_request__WEBPACK_IMPORTED_MODULE_4__.default), (redux_logger__WEBPACK_IMPORTED_MODULE_2___default())));
}
function getServerStore() {
  return (0,redux__WEBPACK_IMPORTED_MODULE_0__.createStore)(_reducers__WEBPACK_IMPORTED_MODULE_3__.default, (0,redux__WEBPACK_IMPORTED_MODULE_0__.applyMiddleware)(redux_thunk__WEBPACK_IMPORTED_MODULE_1___default().withExtraArgument(_server_request__WEBPACK_IMPORTED_MODULE_5__.default), (redux_logger__WEBPACK_IMPORTED_MODULE_2___default())));
}

/***/ }),

/***/ "./src/store/reducers/counter.js":
/*!***************************************!*\
  !*** ./src/store/reducers/counter.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _action_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../action-type */ "./src/store/action-type.js");

var initState = {
  number: 0
};
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _action_type__WEBPACK_IMPORTED_MODULE_0__.ADD:
      return {
        number: state.number + 1
      };

    default:
      return state;
  }
}

/***/ }),

/***/ "./src/store/reducers/home.js":
/*!************************************!*\
  !*** ./src/store/reducers/home.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _action_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../action-type */ "./src/store/action-type.js");

var initState = {
  list: []
};
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _action_type__WEBPACK_IMPORTED_MODULE_0__.SET_HOME_LIST:
      return {
        list: action.payload
      };

    default:
      return state;
  }
}

/***/ }),

/***/ "./src/store/reducers/index.js":
/*!*************************************!*\
  !*** ./src/store/reducers/index.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _counter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./counter */ "./src/store/reducers/counter.js");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home */ "./src/store/reducers/home.js");



var reducers = (0,redux__WEBPACK_IMPORTED_MODULE_0__.combineReducers)({
  counter: _counter__WEBPACK_IMPORTED_MODULE_1__.default,
  home: _home__WEBPACK_IMPORTED_MODULE_2__.default
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (reducers);

/***/ }),

/***/ "./node_modules/eventemitter3/index.js":
/*!*********************************************!*\
  !*** ./node_modules/eventemitter3/index.js ***!
  \*********************************************/
/***/ ((module) => {

"use strict";


var has = Object.prototype.hasOwnProperty
  , prefix = '~';

/**
 * Constructor to create a storage for our `EE` objects.
 * An `Events` instance is a plain object whose properties are event names.
 *
 * @constructor
 * @private
 */
function Events() {}

//
// We try to not inherit from `Object.prototype`. In some engines creating an
// instance in this way is faster than calling `Object.create(null)` directly.
// If `Object.create(null)` is not supported we prefix the event names with a
// character to make sure that the built-in object properties are not
// overridden or used as an attack vector.
//
if (Object.create) {
  Events.prototype = Object.create(null);

  //
  // This hack is needed because the `__proto__` property is still inherited in
  // some old browsers like Android 4, iPhone 5.1, Opera 11 and Safari 5.
  //
  if (!new Events().__proto__) prefix = false;
}

/**
 * Representation of a single event listener.
 *
 * @param {Function} fn The listener function.
 * @param {*} context The context to invoke the listener with.
 * @param {Boolean} [once=false] Specify if the listener is a one-time listener.
 * @constructor
 * @private
 */
function EE(fn, context, once) {
  this.fn = fn;
  this.context = context;
  this.once = once || false;
}

/**
 * Add a listener for a given event.
 *
 * @param {EventEmitter} emitter Reference to the `EventEmitter` instance.
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn The listener function.
 * @param {*} context The context to invoke the listener with.
 * @param {Boolean} once Specify if the listener is a one-time listener.
 * @returns {EventEmitter}
 * @private
 */
function addListener(emitter, event, fn, context, once) {
  if (typeof fn !== 'function') {
    throw new TypeError('The listener must be a function');
  }

  var listener = new EE(fn, context || emitter, once)
    , evt = prefix ? prefix + event : event;

  if (!emitter._events[evt]) emitter._events[evt] = listener, emitter._eventsCount++;
  else if (!emitter._events[evt].fn) emitter._events[evt].push(listener);
  else emitter._events[evt] = [emitter._events[evt], listener];

  return emitter;
}

/**
 * Clear event by name.
 *
 * @param {EventEmitter} emitter Reference to the `EventEmitter` instance.
 * @param {(String|Symbol)} evt The Event name.
 * @private
 */
function clearEvent(emitter, evt) {
  if (--emitter._eventsCount === 0) emitter._events = new Events();
  else delete emitter._events[evt];
}

/**
 * Minimal `EventEmitter` interface that is molded against the Node.js
 * `EventEmitter` interface.
 *
 * @constructor
 * @public
 */
function EventEmitter() {
  this._events = new Events();
  this._eventsCount = 0;
}

/**
 * Return an array listing the events for which the emitter has registered
 * listeners.
 *
 * @returns {Array}
 * @public
 */
EventEmitter.prototype.eventNames = function eventNames() {
  var names = []
    , events
    , name;

  if (this._eventsCount === 0) return names;

  for (name in (events = this._events)) {
    if (has.call(events, name)) names.push(prefix ? name.slice(1) : name);
  }

  if (Object.getOwnPropertySymbols) {
    return names.concat(Object.getOwnPropertySymbols(events));
  }

  return names;
};

/**
 * Return the listeners registered for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @returns {Array} The registered listeners.
 * @public
 */
EventEmitter.prototype.listeners = function listeners(event) {
  var evt = prefix ? prefix + event : event
    , handlers = this._events[evt];

  if (!handlers) return [];
  if (handlers.fn) return [handlers.fn];

  for (var i = 0, l = handlers.length, ee = new Array(l); i < l; i++) {
    ee[i] = handlers[i].fn;
  }

  return ee;
};

/**
 * Return the number of listeners listening to a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @returns {Number} The number of listeners.
 * @public
 */
EventEmitter.prototype.listenerCount = function listenerCount(event) {
  var evt = prefix ? prefix + event : event
    , listeners = this._events[evt];

  if (!listeners) return 0;
  if (listeners.fn) return 1;
  return listeners.length;
};

/**
 * Calls each of the listeners registered for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @returns {Boolean} `true` if the event had listeners, else `false`.
 * @public
 */
EventEmitter.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {
  var evt = prefix ? prefix + event : event;

  if (!this._events[evt]) return false;

  var listeners = this._events[evt]
    , len = arguments.length
    , args
    , i;

  if (listeners.fn) {
    if (listeners.once) this.removeListener(event, listeners.fn, undefined, true);

    switch (len) {
      case 1: return listeners.fn.call(listeners.context), true;
      case 2: return listeners.fn.call(listeners.context, a1), true;
      case 3: return listeners.fn.call(listeners.context, a1, a2), true;
      case 4: return listeners.fn.call(listeners.context, a1, a2, a3), true;
      case 5: return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;
      case 6: return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
    }

    for (i = 1, args = new Array(len -1); i < len; i++) {
      args[i - 1] = arguments[i];
    }

    listeners.fn.apply(listeners.context, args);
  } else {
    var length = listeners.length
      , j;

    for (i = 0; i < length; i++) {
      if (listeners[i].once) this.removeListener(event, listeners[i].fn, undefined, true);

      switch (len) {
        case 1: listeners[i].fn.call(listeners[i].context); break;
        case 2: listeners[i].fn.call(listeners[i].context, a1); break;
        case 3: listeners[i].fn.call(listeners[i].context, a1, a2); break;
        case 4: listeners[i].fn.call(listeners[i].context, a1, a2, a3); break;
        default:
          if (!args) for (j = 1, args = new Array(len -1); j < len; j++) {
            args[j - 1] = arguments[j];
          }

          listeners[i].fn.apply(listeners[i].context, args);
      }
    }
  }

  return true;
};

/**
 * Add a listener for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn The listener function.
 * @param {*} [context=this] The context to invoke the listener with.
 * @returns {EventEmitter} `this`.
 * @public
 */
EventEmitter.prototype.on = function on(event, fn, context) {
  return addListener(this, event, fn, context, false);
};

/**
 * Add a one-time listener for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn The listener function.
 * @param {*} [context=this] The context to invoke the listener with.
 * @returns {EventEmitter} `this`.
 * @public
 */
EventEmitter.prototype.once = function once(event, fn, context) {
  return addListener(this, event, fn, context, true);
};

/**
 * Remove the listeners of a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn Only remove the listeners that match this function.
 * @param {*} context Only remove the listeners that have this context.
 * @param {Boolean} once Only remove one-time listeners.
 * @returns {EventEmitter} `this`.
 * @public
 */
EventEmitter.prototype.removeListener = function removeListener(event, fn, context, once) {
  var evt = prefix ? prefix + event : event;

  if (!this._events[evt]) return this;
  if (!fn) {
    clearEvent(this, evt);
    return this;
  }

  var listeners = this._events[evt];

  if (listeners.fn) {
    if (
      listeners.fn === fn &&
      (!once || listeners.once) &&
      (!context || listeners.context === context)
    ) {
      clearEvent(this, evt);
    }
  } else {
    for (var i = 0, events = [], length = listeners.length; i < length; i++) {
      if (
        listeners[i].fn !== fn ||
        (once && !listeners[i].once) ||
        (context && listeners[i].context !== context)
      ) {
        events.push(listeners[i]);
      }
    }

    //
    // Reset the array, or remove it completely if we have no more listeners.
    //
    if (events.length) this._events[evt] = events.length === 1 ? events[0] : events;
    else clearEvent(this, evt);
  }

  return this;
};

/**
 * Remove all listeners, or those of the specified event.
 *
 * @param {(String|Symbol)} [event] The event name.
 * @returns {EventEmitter} `this`.
 * @public
 */
EventEmitter.prototype.removeAllListeners = function removeAllListeners(event) {
  var evt;

  if (event) {
    evt = prefix ? prefix + event : event;
    if (this._events[evt]) clearEvent(this, evt);
  } else {
    this._events = new Events();
    this._eventsCount = 0;
  }

  return this;
};

//
// Alias methods names because people roll like that.
//
EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
EventEmitter.prototype.addListener = EventEmitter.prototype.on;

//
// Expose the prefix.
//
EventEmitter.prefixed = prefix;

//
// Allow `EventEmitter` to be imported as module namespace.
//
EventEmitter.EventEmitter = EventEmitter;

//
// Expose the module.
//
if (true) {
  module.exports = EventEmitter;
}


/***/ }),

/***/ "./node_modules/http-proxy-middleware/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/http-proxy-middleware/index.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var HPM = __webpack_require__(/*! ./lib */ "./node_modules/http-proxy-middleware/lib/index.js")

module.exports = function (context, opts) {
  return new HPM(context, opts)
}


/***/ }),

/***/ "./node_modules/http-proxy-middleware/lib/config-factory.js":
/*!******************************************************************!*\
  !*** ./node_modules/http-proxy-middleware/lib/config-factory.js ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var _ = __webpack_require__(/*! lodash */ "lodash")
var url = __webpack_require__(/*! url */ "url")
var ERRORS = __webpack_require__(/*! ./errors */ "./node_modules/http-proxy-middleware/lib/errors.js")
var logger = __webpack_require__(/*! ./logger */ "./node_modules/http-proxy-middleware/lib/logger.js").getInstance()

module.exports = {
  createConfig: createConfig
}

function createConfig (context, opts) {
  // structure of config object to be returned
  var config = {
    context: undefined,
    options: {}
  }

  // app.use('/api', proxy({target:'http://localhost:9000'}));
  if (isContextless(context, opts)) {
    config.context = '/'
    config.options = _.assign(config.options, context)

  // app.use('/api', proxy('http://localhost:9000'));
  // app.use(proxy('http://localhost:9000/api'));
  } else if (isStringShortHand(context)) {
    var oUrl = url.parse(context)
    var target = [oUrl.protocol, '//', oUrl.host].join('')

    config.context = oUrl.pathname || '/'
    config.options = _.assign(config.options, {target: target}, opts)

    if (oUrl.protocol === 'ws:' || oUrl.protocol === 'wss:') {
      config.options.ws = true
    }
  // app.use('/api', proxy({target:'http://localhost:9000'}));
  } else {
    config.context = context
    config.options = _.assign(config.options, opts)
  }

  configureLogger(config.options)

  if (!config.options.target) {
    throw new Error(ERRORS.ERR_CONFIG_FACTORY_TARGET_MISSING)
  }

  // Legacy option.proxyHost
  config.options = mapLegacyProxyHostOption(config.options)

  // Legacy option.proxyTable > option.router
  config.options = mapLegacyProxyTableOption(config.options)

  return config
}

/**
 * Checks if a String only target/config is provided.
 * This can be just the host or with the optional path.
 *
 * @example
 *      app.use('/api', proxy('http://localhost:9000'));
        app.use(proxy('http://localhost:9000/api'));
 *
 * @param  {String}  context [description]
 * @return {Boolean}         [description]
 */
function isStringShortHand (context) {
  if (_.isString(context)) {
    return !!(url.parse(context).host)
  }
}

/**
 * Checks if a Object only config is provided, without a context.
 * In this case the all paths will be proxied.
 *
 * @example
 *     app.use('/api', proxy({target:'http://localhost:9000'}));
 *
 * @param  {Object}  context [description]
 * @param  {*}       opts    [description]
 * @return {Boolean}         [description]
 */
function isContextless (context, opts) {
  return (_.isPlainObject(context) && _.isEmpty(opts))
}

function mapLegacyProxyHostOption (options) {
  // set options.headers.host when option.proxyHost is provided
  if (options.proxyHost) {
    logger.warn('*************************************')
    logger.warn('[HPM] Deprecated "option.proxyHost"')
    logger.warn('      Use "option.changeOrigin" or "option.headers.host" instead')
    logger.warn('      "option.proxyHost" will be removed in future release.')
    logger.warn('*************************************')

    options.headers = options.headers || {}
    options.headers.host = options.proxyHost
  }

  return options
}

// Warn deprecated proxyTable api usage
function mapLegacyProxyTableOption (options) {
  if (options.proxyTable) {
    logger.warn('*************************************')
    logger.warn('[HPM] Deprecated "option.proxyTable"')
    logger.warn('      Use "option.router" instead')
    logger.warn('      "option.proxyTable" will be removed in future release.')
    logger.warn('*************************************')

    options.router = _.clone(options.proxyTable)
    _.omit(options, 'proxyTable')
  }

  return options
}

function configureLogger (options) {
  if (options.logLevel) {
    logger.setLevel(options.logLevel)
  }

  if (options.logProvider) {
    logger.setProvider(options.logProvider)
  }
}


/***/ }),

/***/ "./node_modules/http-proxy-middleware/lib/context-matcher.js":
/*!*******************************************************************!*\
  !*** ./node_modules/http-proxy-middleware/lib/context-matcher.js ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var _ = __webpack_require__(/*! lodash */ "lodash")
var url = __webpack_require__(/*! url */ "url")
var isGlob = __webpack_require__(/*! is-glob */ "is-glob")
var micromatch = __webpack_require__(/*! micromatch */ "micromatch")
var ERRORS = __webpack_require__(/*! ./errors */ "./node_modules/http-proxy-middleware/lib/errors.js")

module.exports = {
  match: matchContext
}

function matchContext (context, uri, req) {
  // single path
  if (isStringPath(context)) {
    return matchSingleStringPath(context, uri)
  }

  // single glob path
  if (isGlobPath(context)) {
    return matchSingleGlobPath(context, uri)
  }

  // multi path
  if (Array.isArray(context)) {
    if (context.every(isStringPath)) {
      return matchMultiPath(context, uri)
    }
    if (context.every(isGlobPath)) {
      return matchMultiGlobPath(context, uri)
    }

    throw new Error(ERRORS.ERR_CONTEXT_MATCHER_INVALID_ARRAY)
  }

  // custom matching
  if (_.isFunction(context)) {
    var pathname = getUrlPathName(uri)
    return context(pathname, req)
  }

  throw new Error(ERRORS.ERR_CONTEXT_MATCHER_GENERIC)
}

/**
 * @param  {String} context '/api'
 * @param  {String} uri     'http://example.org/api/b/c/d.html'
 * @return {Boolean}
 */
function matchSingleStringPath (context, uri) {
  var pathname = getUrlPathName(uri)
  return pathname.indexOf(context) === 0
}

function matchSingleGlobPath (pattern, uri) {
  var pathname = getUrlPathName(uri)
  var matches = micromatch(pathname, pattern)
  return matches && (matches.length > 0)
}

function matchMultiGlobPath (patternList, uri) {
  return matchSingleGlobPath(patternList, uri)
}

/**
 * @param  {String} contextList ['/api', '/ajax']
 * @param  {String} uri     'http://example.org/api/b/c/d.html'
 * @return {Boolean}
 */
function matchMultiPath (contextList, uri) {
  for (var i = 0; i < contextList.length; i++) {
    var context = contextList[i]
    if (matchSingleStringPath(context, uri)) {
      return true
    }
  }
  return false
}

/**
 * Parses URI and returns RFC 3986 path
 *
 * @param  {String} uri from req.url
 * @return {String}     RFC 3986 path
 */
function getUrlPathName (uri) {
  return uri && url.parse(uri).pathname
}

function isStringPath (context) {
  return _.isString(context) && !isGlob(context)
}

function isGlobPath (context) {
  return isGlob(context)
}


/***/ }),

/***/ "./node_modules/http-proxy-middleware/lib/errors.js":
/*!**********************************************************!*\
  !*** ./node_modules/http-proxy-middleware/lib/errors.js ***!
  \**********************************************************/
/***/ ((module) => {

/* eslint-disable max-len */

module.exports = {
  ERR_CONFIG_FACTORY_TARGET_MISSING: '[HPM] Missing "target" option. Example: {target: "http://www.example.org"}',
  ERR_CONTEXT_MATCHER_GENERIC: '[HPM] Invalid context. Expecting something like: "/api" or ["/api", "/ajax"]',
  ERR_CONTEXT_MATCHER_INVALID_ARRAY: '[HPM] Invalid context. Expecting something like: ["/api", "/ajax"] or ["/api/**", "!**.html"]',
  ERR_PATH_REWRITER_CONFIG: '[HPM] Invalid pathRewrite config. Expecting object with pathRewrite config or a rewrite function'
}


/***/ }),

/***/ "./node_modules/http-proxy-middleware/lib/handlers.js":
/*!************************************************************!*\
  !*** ./node_modules/http-proxy-middleware/lib/handlers.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var _ = __webpack_require__(/*! lodash */ "lodash")
var logger = __webpack_require__(/*! ./logger */ "./node_modules/http-proxy-middleware/lib/logger.js").getInstance()

module.exports = {
  init: init,
  getHandlers: getProxyEventHandlers
}

function init (proxy, opts) {
  var handlers = getProxyEventHandlers(opts)

  _.forIn(handlers, function (handler, eventName) {
    proxy.on(eventName, handlers[eventName])
  })

  logger.debug('[HPM] Subscribed to http-proxy events: ', _.keys(handlers))
}

function getProxyEventHandlers (opts) {
  // https://github.com/nodejitsu/node-http-proxy#listening-for-proxy-events
  var proxyEvents = ['error', 'proxyReq', 'proxyReqWs', 'proxyRes', 'open', 'close']
  var handlers = {}

  _.forEach(proxyEvents, function (event) {
    // all handlers for the http-proxy events are prefixed with 'on'.
    // loop through options and try to find these handlers
    // and add them to the handlers object for subscription in init().
    var eventName = _.camelCase('on ' + event)
    var fnHandler = _.get(opts, eventName)

    if (_.isFunction(fnHandler)) {
      handlers[event] = fnHandler
    }
  })

  // add default error handler in absence of error handler
  if (!_.isFunction(handlers.error)) {
    handlers.error = defaultErrorHandler
  }

  // add default close handler in absence of close handler
  if (!_.isFunction(handlers.close)) {
    handlers.close = logClose
  }

  return handlers
}

function defaultErrorHandler (err, req, res) {
  var host = (req.headers && req.headers.host)
  var code = err.code

  if (res.writeHead && !res.headersSent) {
    if (/HPE_INVALID/.test(code)) {
      res.writeHead(502)
    } else {
      switch (code) {
        case 'ECONNRESET':
        case 'ENOTFOUND':
        case 'ECONNREFUSED':
          res.writeHead(504)
          break
        default: res.writeHead(500)
      }
    }
  }

  res.end('Error occured while trying to proxy to: ' + host + req.url)
}

function logClose (req, socket, head) {
  // view disconnected websocket connections
  logger.info('[HPM] Client disconnected')
}


/***/ }),

/***/ "./node_modules/http-proxy-middleware/lib/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/http-proxy-middleware/lib/index.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var _ = __webpack_require__(/*! lodash */ "lodash")
var httpProxy = __webpack_require__(/*! http-proxy */ "./node_modules/http-proxy/index.js")
var configFactory = __webpack_require__(/*! ./config-factory */ "./node_modules/http-proxy-middleware/lib/config-factory.js")
var handlers = __webpack_require__(/*! ./handlers */ "./node_modules/http-proxy-middleware/lib/handlers.js")
var contextMatcher = __webpack_require__(/*! ./context-matcher */ "./node_modules/http-proxy-middleware/lib/context-matcher.js")
var PathRewriter = __webpack_require__(/*! ./path-rewriter */ "./node_modules/http-proxy-middleware/lib/path-rewriter.js")
var Router = __webpack_require__(/*! ./router */ "./node_modules/http-proxy-middleware/lib/router.js")
var logger = __webpack_require__(/*! ./logger */ "./node_modules/http-proxy-middleware/lib/logger.js").getInstance()
var getArrow = __webpack_require__(/*! ./logger */ "./node_modules/http-proxy-middleware/lib/logger.js").getArrow

module.exports = HttpProxyMiddleware

function HttpProxyMiddleware (context, opts) {
  // https://github.com/chimurai/http-proxy-middleware/issues/57
  var wsUpgradeDebounced = _.debounce(handleUpgrade)
  var wsInitialized = false
  var config = configFactory.createConfig(context, opts)
  var proxyOptions = config.options

  // create proxy
  var proxy = httpProxy.createProxyServer({})
  logger.info('[HPM] Proxy created:', config.context, ' -> ', proxyOptions.target)

  var pathRewriter = PathRewriter.create(proxyOptions.pathRewrite) // returns undefined when "pathRewrite" is not provided

  // attach handler to http-proxy events
  handlers.init(proxy, proxyOptions)

  // log errors for debug purpose
  proxy.on('error', logError)

  // https://github.com/chimurai/http-proxy-middleware/issues/19
  // expose function to upgrade externally
  middleware.upgrade = wsUpgradeDebounced

  return middleware

  function middleware (req, res, next) {
    if (shouldProxy(config.context, req)) {
      var activeProxyOptions = prepareProxyRequest(req)
      proxy.web(req, res, activeProxyOptions)
    } else {
      next()
    }

    if (proxyOptions.ws === true) {
      // use initial request to access the server object to subscribe to http upgrade event
      catchUpgradeRequest(req.connection.server)
    }
  }

  function catchUpgradeRequest (server) {
    // subscribe once; don't subscribe on every request...
    // https://github.com/chimurai/http-proxy-middleware/issues/113
    if (!wsInitialized) {
      server.on('upgrade', wsUpgradeDebounced)
      wsInitialized = true
    }
  }

  function handleUpgrade (req, socket, head) {
    // set to initialized when used externally
    wsInitialized = true

    if (shouldProxy(config.context, req)) {
      var activeProxyOptions = prepareProxyRequest(req)
      proxy.ws(req, socket, head, activeProxyOptions)
      logger.info('[HPM] Upgrading to WebSocket')
    }
  }

  /**
   * Determine whether request should be proxied.
   *
   * @private
   * @param  {String} context [description]
   * @param  {Object} req     [description]
   * @return {Boolean}
   */
  function shouldProxy (context, req) {
    var path = (req.originalUrl || req.url)
    return contextMatcher.match(context, path, req)
  }

  /**
   * Apply option.router and option.pathRewrite
   * Order matters:
   *    Router uses original path for routing;
   *    NOT the modified path, after it has been rewritten by pathRewrite
   * @param {Object} req
   * @return {Object} proxy options
   */
  function prepareProxyRequest (req) {
    // https://github.com/chimurai/http-proxy-middleware/issues/17
    // https://github.com/chimurai/http-proxy-middleware/issues/94
    req.url = (req.originalUrl || req.url)

    // store uri before it gets rewritten for logging
    var originalPath = req.url
    var newProxyOptions = _.assign({}, proxyOptions)

    // Apply in order:
    // 1. option.router
    // 2. option.pathRewrite
    __applyRouter(req, newProxyOptions)
    __applyPathRewrite(req, pathRewriter)

    // debug logging for both http(s) and websockets
    if (proxyOptions.logLevel === 'debug') {
      var arrow = getArrow(originalPath, req.url, proxyOptions.target, newProxyOptions.target)
      logger.debug('[HPM] %s %s %s %s', req.method, originalPath, arrow, newProxyOptions.target)
    }

    return newProxyOptions
  }

  // Modify option.target when router present.
  function __applyRouter (req, options) {
    var newTarget

    if (options.router) {
      newTarget = Router.getTarget(req, options)

      if (newTarget) {
        logger.debug('[HPM] Router new target: %s -> "%s"', options.target, newTarget)
        options.target = newTarget
      }
    }
  }

  // rewrite path
  function __applyPathRewrite (req, pathRewriter) {
    if (pathRewriter) {
      var path = pathRewriter(req.url, req)

      if (typeof path === 'string') {
        req.url = path
      } else {
        logger.info('[HPM] pathRewrite: No rewritten path found. (%s)', req.url)
      }
    }
  }

  function logError (err, req, res) {
    var hostname = (req.headers && req.headers.host) || (req.hostname || req.host) // (websocket) || (node0.10 || node 4/5)
    var target = proxyOptions.target.host || proxyOptions.target
    var errorMessage = '[HPM] Error occurred while trying to proxy request %s from %s to %s (%s) (%s)'
    var errReference = 'https://nodejs.org/api/errors.html#errors_common_system_errors' // link to Node Common Systems Errors page

    logger.error(errorMessage, req.url, hostname, target, err.code, errReference)
  }
}


/***/ }),

/***/ "./node_modules/http-proxy-middleware/lib/logger.js":
/*!**********************************************************!*\
  !*** ./node_modules/http-proxy-middleware/lib/logger.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var util = __webpack_require__(/*! util */ "util")
var _ = __webpack_require__(/*! lodash */ "lodash")

var loggerInstance

var defaultProvider = {
  log: console.log,
  debug: console.log, // use .log(); since console does not have .debug()
  info: console.info,
  warn: console.warn,
  error: console.error
}

// log level 'weight'
var LEVELS = {
  debug: 10,
  info: 20,
  warn: 30,
  error: 50,
  silent: 80
}

module.exports = {
  // singleton
  getInstance: function () {
    if (!loggerInstance) {
      loggerInstance = new Logger()
    }

    return loggerInstance
  },
  getArrow: getArrow
}

function Logger () {
  var logLevel
  var provider

  var api = {
    log: log,
    debug: debug,
    info: info,
    warn: warn,
    error: error,
    setLevel: function (v) {
      if (isValidLevel(v)) {
        logLevel = v
      }
    },
    setProvider: function (fn) {
      if (fn && isValidProvider(fn)) {
        provider = fn(defaultProvider)
      }
    }
  }

  init()

  return api

  function init () {
    api.setLevel('info')
    api.setProvider(function () {
      return defaultProvider
    })
  }

  // log will log messages, regardless of logLevels
  function log () {
    provider.log(_interpolate.apply(null, arguments))
  }

  function debug () {
    if (_showLevel('debug')) {
      provider.debug(_interpolate.apply(null, arguments))
    }
  }

  function info () {
    if (_showLevel('info')) {
      provider.info(_interpolate.apply(null, arguments))
    }
  }

  function warn () {
    if (_showLevel('warn')) {
      provider.warn(_interpolate.apply(null, arguments))
    }
  }

  function error () {
    if (_showLevel('error')) {
      provider.error(_interpolate.apply(null, arguments))
    }
  }

  /**
   * Decide to log or not to log, based on the log levels 'weight'
   * @param  {String}  showLevel [debug, info, warn, error, silent]
   * @return {Boolean}
   */
  function _showLevel (showLevel) {
    var result = false
    var currentLogLevel = LEVELS[logLevel]

    if (currentLogLevel && (currentLogLevel <= LEVELS[showLevel])) {
      result = true
    }

    return result
  }

  // make sure logged messages and its data are return interpolated
  // make it possible for additional log data, such date/time or custom prefix.
  function _interpolate () {
    var fn = _.spread(util.format)
    var result = fn(_.slice(arguments))

    return result
  }

  function isValidProvider (fnProvider) {
    var result = true

    if (fnProvider && !_.isFunction(fnProvider)) {
      throw new Error('[HPM] Log provider config error. Expecting a function.')
    }

    return result
  }

  function isValidLevel (levelName) {
    var validLevels = _.keys(LEVELS)
    var isValid = _.includes(validLevels, levelName)

    if (!isValid) {
      throw new Error('[HPM] Log level error. Invalid logLevel.')
    }

    return isValid
  }
}

/**
 * -> normal proxy
 * => router
 * ~> pathRewrite
 * ≈> router + pathRewrite
 *
 * @param  {String} originalPath
 * @param  {String} newPath
 * @param  {String} originalTarget
 * @param  {String} newTarget
 * @return {String}
 */
function getArrow (originalPath, newPath, originalTarget, newTarget) {
  var arrow = ['>']
  var isNewTarget = (originalTarget !== newTarget) // router
  var isNewPath = (originalPath !== newPath) // pathRewrite

  if (isNewPath && !isNewTarget) {
    arrow.unshift('~')
  } else if (!isNewPath && isNewTarget) {
    arrow.unshift('=')
  } else if (isNewPath && isNewTarget) {
    arrow.unshift('≈')
  } else {
    arrow.unshift('-')
  }

  return arrow.join('')
}


/***/ }),

/***/ "./node_modules/http-proxy-middleware/lib/path-rewriter.js":
/*!*****************************************************************!*\
  !*** ./node_modules/http-proxy-middleware/lib/path-rewriter.js ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var _ = __webpack_require__(/*! lodash */ "lodash")
var logger = __webpack_require__(/*! ./logger */ "./node_modules/http-proxy-middleware/lib/logger.js").getInstance()
var ERRORS = __webpack_require__(/*! ./errors */ "./node_modules/http-proxy-middleware/lib/errors.js")

module.exports = {
  create: createPathRewriter
}

/**
 * Create rewrite function, to cache parsed rewrite rules.
 *
 * @param {Object} rewriteConfig
 * @return {Function} Function to rewrite paths; This function should accept `path` (request.url) as parameter
 */
function createPathRewriter (rewriteConfig) {
  var rulesCache

  if (!isValidRewriteConfig(rewriteConfig)) {
    return
  }

  if (_.isFunction(rewriteConfig)) {
    var customRewriteFn = rewriteConfig
    return customRewriteFn
  } else {
    rulesCache = parsePathRewriteRules(rewriteConfig)
    return rewritePath
  }

  function rewritePath (path) {
    var result = path

    _.forEach(rulesCache, function (rule) {
      if (rule.regex.test(path)) {
        result = result.replace(rule.regex, rule.value)
        logger.debug('[HPM] Rewriting path from "%s" to "%s"', path, result)
        return false
      }
    })

    return result
  }
}

function isValidRewriteConfig (rewriteConfig) {
  if (_.isFunction(rewriteConfig)) {
    return true
  } else if (!_.isEmpty(rewriteConfig) && _.isPlainObject(rewriteConfig)) {
    return true
  } else if (_.isUndefined(rewriteConfig) ||
               _.isNull(rewriteConfig) ||
               _.isEqual(rewriteConfig, {})) {
    return false
  } else {
    throw new Error(ERRORS.ERR_PATH_REWRITER_CONFIG)
  }
}

function parsePathRewriteRules (rewriteConfig) {
  var rules = []

  if (_.isPlainObject(rewriteConfig)) {
    _.forIn(rewriteConfig, function (value, key) {
      rules.push({
        regex: new RegExp(key),
        value: rewriteConfig[key]
      })
      logger.info('[HPM] Proxy rewrite rule created: "%s" ~> "%s"', key, rewriteConfig[key])
    })
  }

  return rules
}


/***/ }),

/***/ "./node_modules/http-proxy-middleware/lib/router.js":
/*!**********************************************************!*\
  !*** ./node_modules/http-proxy-middleware/lib/router.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var _ = __webpack_require__(/*! lodash */ "lodash")
var logger = __webpack_require__(/*! ./logger.js */ "./node_modules/http-proxy-middleware/lib/logger.js").getInstance()

module.exports = {
  getTarget: getTarget
}

function getTarget (req, config) {
  var newTarget
  var router = config.router

  if (_.isPlainObject(router)) {
    newTarget = getTargetFromProxyTable(req, router)
  } else if (_.isFunction(router)) {
    newTarget = router(req)
  }

  return newTarget
}

function getTargetFromProxyTable (req, table) {
  var result
  var host = req.headers.host
  var path = req.url

  var hostAndPath = host + path

  _.forIn(table, function (value, key) {
    if (containsPath(key)) {
      if (hostAndPath.indexOf(key) > -1) { // match 'localhost:3000/api'
        result = table[key]
        logger.debug('[HPM] Router table match: "%s"', key)
        return false
      }
    } else {
      if (key === host) { // match 'localhost:3000'
        result = table[key]
        logger.debug('[HPM] Router table match: "%s"', host)
        return false
      }
    }
  })

  return result
}

function containsPath (v) {
  return v.indexOf('/') > -1
}


/***/ }),

/***/ "./node_modules/http-proxy/index.js":
/*!******************************************!*\
  !*** ./node_modules/http-proxy/index.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/*!
 * Caron dimonio, con occhi di bragia
 * loro accennando, tutte le raccoglie;
 * batte col remo qualunque s’adagia 
 *
 * Charon the demon, with the eyes of glede,
 * Beckoning to them, collects them all together,
 * Beats with his oar whoever lags behind
 *          
 *          Dante - The Divine Comedy (Canto III)
 */

module.exports = __webpack_require__(/*! ./lib/http-proxy */ "./node_modules/http-proxy/lib/http-proxy.js");

/***/ }),

/***/ "./node_modules/http-proxy/lib/http-proxy.js":
/*!***************************************************!*\
  !*** ./node_modules/http-proxy/lib/http-proxy.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

 // Use explicit /index.js to help browserify negociation in require '/lib/http-proxy' (!)
var ProxyServer = __webpack_require__(/*! ./http-proxy/index.js */ "./node_modules/http-proxy/lib/http-proxy/index.js").Server;


/**
 * Creates the proxy server.
 *
 * Examples:
 *
 *    httpProxy.createProxyServer({ .. }, 8000)
 *    // => '{ web: [Function], ws: [Function] ... }'
 *
 * @param {Object} Options Config object passed to the proxy
 *
 * @return {Object} Proxy Proxy object with handlers for `ws` and `web` requests
 *
 * @api public
 */


function createProxyServer(options) {
  /*
   *  `options` is needed and it must have the following layout:
   *
   *  {
   *    target : <url string to be parsed with the url module>
   *    forward: <url string to be parsed with the url module>
   *    agent  : <object to be passed to http(s).request>
   *    ssl    : <object to be passed to https.createServer()>
   *    ws     : <true/false, if you want to proxy websockets>
   *    xfwd   : <true/false, adds x-forward headers>
   *    secure : <true/false, verify SSL certificate>
   *    toProxy: <true/false, explicitly specify if we are proxying to another proxy>
   *    prependPath: <true/false, Default: true - specify whether you want to prepend the target's path to the proxy path>
   *    ignorePath: <true/false, Default: false - specify whether you want to ignore the proxy path of the incoming request>
   *    localAddress : <Local interface string to bind for outgoing connections>
   *    changeOrigin: <true/false, Default: false - changes the origin of the host header to the target URL>
   *    preserveHeaderKeyCase: <true/false, Default: false - specify whether you want to keep letter case of response header key >
   *    auth   : Basic authentication i.e. 'user:password' to compute an Authorization header.
   *    hostRewrite: rewrites the location hostname on (201/301/302/307/308) redirects, Default: null.
   *    autoRewrite: rewrites the location host/port on (201/301/302/307/308) redirects based on requested host/port. Default: false.
   *    protocolRewrite: rewrites the location protocol on (201/301/302/307/308) redirects to 'http' or 'https'. Default: null.
   *  }
   *
   *  NOTE: `options.ws` and `options.ssl` are optional.
   *    `options.target and `options.forward` cannot be
   *    both missing
   *  }
   */

  return new ProxyServer(options);
}


ProxyServer.createProxyServer = createProxyServer;
ProxyServer.createServer      = createProxyServer;
ProxyServer.createProxy       = createProxyServer;




/**
 * Export the proxy "Server" as the main export.
 */
module.exports = ProxyServer;



/***/ }),

/***/ "./node_modules/http-proxy/lib/http-proxy/common.js":
/*!**********************************************************!*\
  !*** ./node_modules/http-proxy/lib/http-proxy/common.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var common   = exports,
    url      = __webpack_require__(/*! url */ "url"),
    extend   = __webpack_require__(/*! util */ "util")._extend,
    required = __webpack_require__(/*! requires-port */ "./node_modules/requires-port/index.js");

var upgradeHeader = /(^|,)\s*upgrade\s*($|,)/i,
    isSSL = /^https|wss/;

/**
 * Simple Regex for testing if protocol is https
 */
common.isSSL = isSSL;
/**
 * Copies the right headers from `options` and `req` to
 * `outgoing` which is then used to fire the proxied
 * request.
 *
 * Examples:
 *
 *    common.setupOutgoing(outgoing, options, req)
 *    // => { host: ..., hostname: ...}
 *
 * @param {Object} Outgoing Base object to be filled with required properties
 * @param {Object} Options Config object passed to the proxy
 * @param {ClientRequest} Req Request Object
 * @param {String} Forward String to select forward or target
 * 
 * @return {Object} Outgoing Object with all required properties set
 *
 * @api private
 */

common.setupOutgoing = function(outgoing, options, req, forward) {
  outgoing.port = options[forward || 'target'].port ||
                  (isSSL.test(options[forward || 'target'].protocol) ? 443 : 80);

  ['host', 'hostname', 'socketPath', 'pfx', 'key',
    'passphrase', 'cert', 'ca', 'ciphers', 'secureProtocol'].forEach(
    function(e) { outgoing[e] = options[forward || 'target'][e]; }
  );

  outgoing.method = options.method || req.method;
  outgoing.headers = extend({}, req.headers);

  if (options.headers){
    extend(outgoing.headers, options.headers);
  }

  if (options.auth) {
    outgoing.auth = options.auth;
  }
  
  if (options.ca) {
      outgoing.ca = options.ca;
  }

  if (isSSL.test(options[forward || 'target'].protocol)) {
    outgoing.rejectUnauthorized = (typeof options.secure === "undefined") ? true : options.secure;
  }


  outgoing.agent = options.agent || false;
  outgoing.localAddress = options.localAddress;

  //
  // Remark: If we are false and not upgrading, set the connection: close. This is the right thing to do
  // as node core doesn't handle this COMPLETELY properly yet.
  //
  if (!outgoing.agent) {
    outgoing.headers = outgoing.headers || {};
    if (typeof outgoing.headers.connection !== 'string'
        || !upgradeHeader.test(outgoing.headers.connection)
       ) { outgoing.headers.connection = 'close'; }
  }


  // the final path is target path + relative path requested by user:
  var target = options[forward || 'target'];
  var targetPath = target && options.prependPath !== false
    ? (target.path || '')
    : '';

  //
  // Remark: Can we somehow not use url.parse as a perf optimization?
  //
  var outgoingPath = !options.toProxy
    ? (url.parse(req.url).path || '')
    : req.url;

  //
  // Remark: ignorePath will just straight up ignore whatever the request's
  // path is. This can be labeled as FOOT-GUN material if you do not know what
  // you are doing and are using conflicting options.
  //
  outgoingPath = !options.ignorePath ? outgoingPath : '';

  outgoing.path = common.urlJoin(targetPath, outgoingPath);

  if (options.changeOrigin) {
    outgoing.headers.host =
      required(outgoing.port, options[forward || 'target'].protocol) && !hasPort(outgoing.host)
        ? outgoing.host + ':' + outgoing.port
        : outgoing.host;
  }
  return outgoing;
};

/**
 * Set the proper configuration for sockets,
 * set no delay and set keep alive, also set
 * the timeout to 0.
 *
 * Examples:
 *
 *    common.setupSocket(socket)
 *    // => Socket
 *
 * @param {Socket} Socket instance to setup
 * 
 * @return {Socket} Return the configured socket.
 *
 * @api private
 */

common.setupSocket = function(socket) {
  socket.setTimeout(0);
  socket.setNoDelay(true);

  socket.setKeepAlive(true, 0);

  return socket;
};

/**
 * Get the port number from the host. Or guess it based on the connection type.
 *
 * @param {Request} req Incoming HTTP request.
 *
 * @return {String} The port number.
 *
 * @api private
 */
common.getPort = function(req) {
  var res = req.headers.host ? req.headers.host.match(/:(\d+)/) : '';

  return res ?
    res[1] :
    common.hasEncryptedConnection(req) ? '443' : '80';
};

/**
 * Check if the request has an encrypted connection.
 *
 * @param {Request} req Incoming HTTP request.
 *
 * @return {Boolean} Whether the connection is encrypted or not.
 *
 * @api private
 */
common.hasEncryptedConnection = function(req) {
  return Boolean(req.connection.encrypted || req.connection.pair);
};

/**
 * OS-agnostic join (doesn't break on URLs like path.join does on Windows)>
 *
 * @return {String} The generated path.
 *
 * @api private
 */

common.urlJoin = function() {
    //
    // We do not want to mess with the query string. All we want to touch is the path.
    //
  var args = Array.prototype.slice.call(arguments),
      lastIndex = args.length - 1,
      last = args[lastIndex],
      lastSegs = last.split('?'),
      retSegs;

  args[lastIndex] = lastSegs.shift();

  //
  // Join all strings, but remove empty strings so we don't get extra slashes from
  // joining e.g. ['', 'am']
  //
  retSegs = [
    args.filter(Boolean).join('/')
        .replace(/\/+/g, '/')
        .replace('http:/', 'http://')
        .replace('https:/', 'https://')
  ];

  // Only join the query string if it exists so we don't have trailing a '?'
  // on every request

  // Handle case where there could be multiple ? in the URL.
  retSegs.push.apply(retSegs, lastSegs);

  return retSegs.join('?')
};

/**
 * Rewrites or removes the domain of a cookie header
 *
 * @param {String|Array} Header
 * @param {Object} Config, mapping of domain to rewritten domain.
 *                 '*' key to match any domain, null value to remove the domain.
 *
 * @api private
 */
common.rewriteCookieProperty = function rewriteCookieProperty(header, config, property) {
  if (Array.isArray(header)) {
    return header.map(function (headerElement) {
      return rewriteCookieProperty(headerElement, config, property);
    });
  }
  return header.replace(new RegExp("(;\\s*" + property + "=)([^;]+)", 'i'), function(match, prefix, previousValue) {
    var newValue;
    if (previousValue in config) {
      newValue = config[previousValue];
    } else if ('*' in config) {
      newValue = config['*'];
    } else {
      //no match, return previous value
      return match;
    }
    if (newValue) {
      //replace value
      return prefix + newValue;
    } else {
      //remove value
      return '';
    }
  });
};

/**
 * Check the host and see if it potentially has a port in it (keep it simple)
 *
 * @returns {Boolean} Whether we have one or not
 *
 * @api private
 */
function hasPort(host) {
  return !!~host.indexOf(':');
};


/***/ }),

/***/ "./node_modules/http-proxy/lib/http-proxy/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/http-proxy/lib/http-proxy/index.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var httpProxy = module.exports,
    extend    = __webpack_require__(/*! util */ "util")._extend,
    parse_url = __webpack_require__(/*! url */ "url").parse,
    EE3       = __webpack_require__(/*! eventemitter3 */ "./node_modules/eventemitter3/index.js"),
    http      = __webpack_require__(/*! http */ "http"),
    https     = __webpack_require__(/*! https */ "https"),
    web       = __webpack_require__(/*! ./passes/web-incoming */ "./node_modules/http-proxy/lib/http-proxy/passes/web-incoming.js"),
    ws        = __webpack_require__(/*! ./passes/ws-incoming */ "./node_modules/http-proxy/lib/http-proxy/passes/ws-incoming.js");

httpProxy.Server = ProxyServer;

/**
 * Returns a function that creates the loader for
 * either `ws` or `web`'s  passes.
 *
 * Examples:
 *
 *    httpProxy.createRightProxy('ws')
 *    // => [Function]
 *
 * @param {String} Type Either 'ws' or 'web'
 * 
 * @return {Function} Loader Function that when called returns an iterator for the right passes
 *
 * @api private
 */

function createRightProxy(type) {

  return function(options) {
    return function(req, res /*, [head], [opts] */) {
      var passes = (type === 'ws') ? this.wsPasses : this.webPasses,
          args = [].slice.call(arguments),
          cntr = args.length - 1,
          head, cbl;

      /* optional args parse begin */
      if(typeof args[cntr] === 'function') {
        cbl = args[cntr];

        cntr--;
      }

      var requestOptions = options;
      if(
        !(args[cntr] instanceof Buffer) &&
        args[cntr] !== res
      ) {
        //Copy global options
        requestOptions = extend({}, options);
        //Overwrite with request options
        extend(requestOptions, args[cntr]);

        cntr--;
      }

      if(args[cntr] instanceof Buffer) {
        head = args[cntr];
      }

      /* optional args parse end */

      ['target', 'forward'].forEach(function(e) {
        if (typeof requestOptions[e] === 'string')
          requestOptions[e] = parse_url(requestOptions[e]);
      });

      if (!requestOptions.target && !requestOptions.forward) {
        return this.emit('error', new Error('Must provide a proper URL as target'));
      }

      for(var i=0; i < passes.length; i++) {
        /**
         * Call of passes functions
         * pass(req, res, options, head)
         *
         * In WebSockets case the `res` variable
         * refer to the connection socket
         * pass(req, socket, options, head)
         */
        if(passes[i](req, res, requestOptions, head, this, cbl)) { // passes can return a truthy value to halt the loop
          break;
        }
      }
    };
  };
}
httpProxy.createRightProxy = createRightProxy;

function ProxyServer(options) {
  EE3.call(this);

  options = options || {};
  options.prependPath = options.prependPath === false ? false : true;

  this.web = this.proxyRequest           = createRightProxy('web')(options);
  this.ws  = this.proxyWebsocketRequest  = createRightProxy('ws')(options);
  this.options = options;

  this.webPasses = Object.keys(web).map(function(pass) {
    return web[pass];
  });

  this.wsPasses = Object.keys(ws).map(function(pass) {
    return ws[pass];
  });

  this.on('error', this.onError, this);

}

__webpack_require__(/*! util */ "util").inherits(ProxyServer, EE3);

ProxyServer.prototype.onError = function (err) {
  //
  // Remark: Replicate node core behavior using EE3
  // so we force people to handle their own errors
  //
  if(this.listeners('error').length === 1) {
    throw err;
  }
};

ProxyServer.prototype.listen = function(port, hostname) {
  var self    = this,
      closure = function(req, res) { self.web(req, res); };

  this._server  = this.options.ssl ?
    https.createServer(this.options.ssl, closure) :
    http.createServer(closure);

  if(this.options.ws) {
    this._server.on('upgrade', function(req, socket, head) { self.ws(req, socket, head); });
  }

  this._server.listen(port, hostname);

  return this;
};

ProxyServer.prototype.close = function(callback) {
  var self = this;
  if (this._server) {
    this._server.close(done);
  }

  // Wrap callback to nullify server after all open connections are closed.
  function done() {
    self._server = null;
    if (callback) {
      callback.apply(null, arguments);
    }
  };
};

ProxyServer.prototype.before = function(type, passName, callback) {
  if (type !== 'ws' && type !== 'web') {
    throw new Error('type must be `web` or `ws`');
  }
  var passes = (type === 'ws') ? this.wsPasses : this.webPasses,
      i = false;

  passes.forEach(function(v, idx) {
    if(v.name === passName) i = idx;
  })

  if(i === false) throw new Error('No such pass');

  passes.splice(i, 0, callback);
};
ProxyServer.prototype.after = function(type, passName, callback) {
  if (type !== 'ws' && type !== 'web') {
    throw new Error('type must be `web` or `ws`');
  }
  var passes = (type === 'ws') ? this.wsPasses : this.webPasses,
      i = false;

  passes.forEach(function(v, idx) {
    if(v.name === passName) i = idx;
  })

  if(i === false) throw new Error('No such pass');

  passes.splice(i++, 0, callback);
};


/***/ }),

/***/ "./node_modules/http-proxy/lib/http-proxy/passes/web-incoming.js":
/*!***********************************************************************!*\
  !*** ./node_modules/http-proxy/lib/http-proxy/passes/web-incoming.js ***!
  \***********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var httpNative   = __webpack_require__(/*! http */ "http"),
    httpsNative  = __webpack_require__(/*! https */ "https"),
    web_o  = __webpack_require__(/*! ./web-outgoing */ "./node_modules/http-proxy/lib/http-proxy/passes/web-outgoing.js"),
    common = __webpack_require__(/*! ../common */ "./node_modules/http-proxy/lib/http-proxy/common.js"),
    followRedirects = __webpack_require__(/*! follow-redirects */ "follow-redirects");

web_o = Object.keys(web_o).map(function(pass) {
  return web_o[pass];
});

var nativeAgents = { http: httpNative, https: httpsNative };

/*!
 * Array of passes.
 *
 * A `pass` is just a function that is executed on `req, res, options`
 * so that you can easily add new checks while still keeping the base
 * flexible.
 */


module.exports = {

  /**
   * Sets `content-length` to '0' if request is of DELETE type.
   *
   * @param {ClientRequest} Req Request object
   * @param {IncomingMessage} Res Response object
   * @param {Object} Options Config object passed to the proxy
   *
   * @api private
   */

  deleteLength: function deleteLength(req, res, options) {
    if((req.method === 'DELETE' || req.method === 'OPTIONS')
       && !req.headers['content-length']) {
      req.headers['content-length'] = '0';
      delete req.headers['transfer-encoding'];
    }
  },

  /**
   * Sets timeout in request socket if it was specified in options.
   *
   * @param {ClientRequest} Req Request object
   * @param {IncomingMessage} Res Response object
   * @param {Object} Options Config object passed to the proxy
   *
   * @api private
   */

  timeout: function timeout(req, res, options) {
    if(options.timeout) {
      req.socket.setTimeout(options.timeout);
    }
  },

  /**
   * Sets `x-forwarded-*` headers if specified in config.
   *
   * @param {ClientRequest} Req Request object
   * @param {IncomingMessage} Res Response object
   * @param {Object} Options Config object passed to the proxy
   *
   * @api private
   */

  XHeaders: function XHeaders(req, res, options) {
    if(!options.xfwd) return;

    var encrypted = req.isSpdy || common.hasEncryptedConnection(req);
    var values = {
      for  : req.connection.remoteAddress || req.socket.remoteAddress,
      port : common.getPort(req),
      proto: encrypted ? 'https' : 'http'
    };

    ['for', 'port', 'proto'].forEach(function(header) {
      req.headers['x-forwarded-' + header] =
        (req.headers['x-forwarded-' + header] || '') +
        (req.headers['x-forwarded-' + header] ? ',' : '') +
        values[header];
    });

    req.headers['x-forwarded-host'] = req.headers['x-forwarded-host'] || req.headers['host'] || '';
  },

  /**
   * Does the actual proxying. If `forward` is enabled fires up
   * a ForwardStream, same happens for ProxyStream. The request
   * just dies otherwise.
   *
   * @param {ClientRequest} Req Request object
   * @param {IncomingMessage} Res Response object
   * @param {Object} Options Config object passed to the proxy
   *
   * @api private
   */

  stream: function stream(req, res, options, _, server, clb) {

    // And we begin!
    server.emit('start', req, res, options.target || options.forward);

    var agents = options.followRedirects ? followRedirects : nativeAgents;
    var http = agents.http;
    var https = agents.https;

    if(options.forward) {
      // If forward enable, so just pipe the request
      var forwardReq = (options.forward.protocol === 'https:' ? https : http).request(
        common.setupOutgoing(options.ssl || {}, options, req, 'forward')
      );

      // error handler (e.g. ECONNRESET, ECONNREFUSED)
      // Handle errors on incoming request as well as it makes sense to
      var forwardError = createErrorHandler(forwardReq, options.forward);
      req.on('error', forwardError);
      forwardReq.on('error', forwardError);

      (options.buffer || req).pipe(forwardReq);
      if(!options.target) { return res.end(); }
    }

    // Request initalization
    var proxyReq = (options.target.protocol === 'https:' ? https : http).request(
      common.setupOutgoing(options.ssl || {}, options, req)
    );

    // Enable developers to modify the proxyReq before headers are sent
    proxyReq.on('socket', function(socket) {
      if(server && !proxyReq.getHeader('expect')) {
        server.emit('proxyReq', proxyReq, req, res, options);
      }
    });

    // allow outgoing socket to timeout so that we could
    // show an error page at the initial request
    if(options.proxyTimeout) {
      proxyReq.setTimeout(options.proxyTimeout, function() {
         proxyReq.abort();
      });
    }

    // Ensure we abort proxy if request is aborted
    req.on('aborted', function () {
      proxyReq.abort();
    });

    // handle errors in proxy and incoming request, just like for forward proxy
    var proxyError = createErrorHandler(proxyReq, options.target);
    req.on('error', proxyError);
    proxyReq.on('error', proxyError);

    function createErrorHandler(proxyReq, url) {
      return function proxyError(err) {
        if (req.socket.destroyed && err.code === 'ECONNRESET') {
          server.emit('econnreset', err, req, res, url);
          return proxyReq.abort();
        }

        if (clb) {
          clb(err, req, res, url);
        } else {
          server.emit('error', err, req, res, url);
        }
      }
    }

    (options.buffer || req).pipe(proxyReq);

    proxyReq.on('response', function(proxyRes) {
      if(server) { server.emit('proxyRes', proxyRes, req, res); }

      if(!res.headersSent && !options.selfHandleResponse) {
        for(var i=0; i < web_o.length; i++) {
          if(web_o[i](req, res, proxyRes, options)) { break; }
        }
      }

      if (!res.finished) {
        // Allow us to listen when the proxy has completed
        proxyRes.on('end', function () {
          if (server) server.emit('end', req, res, proxyRes);
        });
        // We pipe to the response unless its expected to be handled by the user
        if (!options.selfHandleResponse) proxyRes.pipe(res);
      } else {
        if (server) server.emit('end', req, res, proxyRes);
      }
    });
  }

};


/***/ }),

/***/ "./node_modules/http-proxy/lib/http-proxy/passes/web-outgoing.js":
/*!***********************************************************************!*\
  !*** ./node_modules/http-proxy/lib/http-proxy/passes/web-outgoing.js ***!
  \***********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var url    = __webpack_require__(/*! url */ "url"),
    common = __webpack_require__(/*! ../common */ "./node_modules/http-proxy/lib/http-proxy/common.js");


var redirectRegex = /^201|30(1|2|7|8)$/;

/*!
 * Array of passes.
 *
 * A `pass` is just a function that is executed on `req, res, options`
 * so that you can easily add new checks while still keeping the base
 * flexible.
 */

module.exports = { // <--

  /**
   * If is a HTTP 1.0 request, remove chunk headers
   *
   * @param {ClientRequest} Req Request object
   * @param {IncomingMessage} Res Response object
   * @param {proxyResponse} Res Response object from the proxy request
   *
   * @api private
   */
  removeChunked: function removeChunked(req, res, proxyRes) {
    if (req.httpVersion === '1.0') {
      delete proxyRes.headers['transfer-encoding'];
    }
  },

  /**
   * If is a HTTP 1.0 request, set the correct connection header
   * or if connection header not present, then use `keep-alive`
   *
   * @param {ClientRequest} Req Request object
   * @param {IncomingMessage} Res Response object
   * @param {proxyResponse} Res Response object from the proxy request
   *
   * @api private
   */
  setConnection: function setConnection(req, res, proxyRes) {
    if (req.httpVersion === '1.0') {
      proxyRes.headers.connection = req.headers.connection || 'close';
    } else if (req.httpVersion !== '2.0' && !proxyRes.headers.connection) {
      proxyRes.headers.connection = req.headers.connection || 'keep-alive';
    }
  },

  setRedirectHostRewrite: function setRedirectHostRewrite(req, res, proxyRes, options) {
    if ((options.hostRewrite || options.autoRewrite || options.protocolRewrite)
        && proxyRes.headers['location']
        && redirectRegex.test(proxyRes.statusCode)) {
      var target = url.parse(options.target);
      var u = url.parse(proxyRes.headers['location']);

      // make sure the redirected host matches the target host before rewriting
      if (target.host != u.host) {
        return;
      }

      if (options.hostRewrite) {
        u.host = options.hostRewrite;
      } else if (options.autoRewrite) {
        u.host = req.headers['host'];
      }
      if (options.protocolRewrite) {
        u.protocol = options.protocolRewrite;
      }

      proxyRes.headers['location'] = u.format();
    }
  },
  /**
   * Copy headers from proxyResponse to response
   * set each header in response object.
   *
   * @param {ClientRequest} Req Request object
   * @param {IncomingMessage} Res Response object
   * @param {proxyResponse} Res Response object from the proxy request
   * @param {Object} Options options.cookieDomainRewrite: Config to rewrite cookie domain
   *
   * @api private
   */
  writeHeaders: function writeHeaders(req, res, proxyRes, options) {
    var rewriteCookieDomainConfig = options.cookieDomainRewrite,
        rewriteCookiePathConfig = options.cookiePathRewrite,
        preserveHeaderKeyCase = options.preserveHeaderKeyCase,
        rawHeaderKeyMap,
        setHeader = function(key, header) {
          if (header == undefined) return;
          if (rewriteCookieDomainConfig && key.toLowerCase() === 'set-cookie') {
            header = common.rewriteCookieProperty(header, rewriteCookieDomainConfig, 'domain');
          }
          if (rewriteCookiePathConfig && key.toLowerCase() === 'set-cookie') {
            header = common.rewriteCookieProperty(header, rewriteCookiePathConfig, 'path');
          }
          res.setHeader(String(key).trim(), header);
        };

    if (typeof rewriteCookieDomainConfig === 'string') { //also test for ''
      rewriteCookieDomainConfig = { '*': rewriteCookieDomainConfig };
    }

    if (typeof rewriteCookiePathConfig === 'string') { //also test for ''
      rewriteCookiePathConfig = { '*': rewriteCookiePathConfig };
    }

    // message.rawHeaders is added in: v0.11.6
    // https://nodejs.org/api/http.html#http_message_rawheaders
    if (preserveHeaderKeyCase && proxyRes.rawHeaders != undefined) {
      rawHeaderKeyMap = {};
      for (var i = 0; i < proxyRes.rawHeaders.length; i += 2) {
        var key = proxyRes.rawHeaders[i];
        rawHeaderKeyMap[key.toLowerCase()] = key;
      }
    }

    Object.keys(proxyRes.headers).forEach(function(key) {
      var header = proxyRes.headers[key];
      if (preserveHeaderKeyCase && rawHeaderKeyMap) {
        key = rawHeaderKeyMap[key] || key;
      }
      setHeader(key, header);
    });
  },

  /**
   * Set the statusCode from the proxyResponse
   *
   * @param {ClientRequest} Req Request object
   * @param {IncomingMessage} Res Response object
   * @param {proxyResponse} Res Response object from the proxy request
   *
   * @api private
   */
  writeStatusCode: function writeStatusCode(req, res, proxyRes) {
    // From Node.js docs: response.writeHead(statusCode[, statusMessage][, headers])
    if(proxyRes.statusMessage) {
      res.statusCode = proxyRes.statusCode;
      res.statusMessage = proxyRes.statusMessage;
    } else {
      res.statusCode = proxyRes.statusCode;
    }
  }

};


/***/ }),

/***/ "./node_modules/http-proxy/lib/http-proxy/passes/ws-incoming.js":
/*!**********************************************************************!*\
  !*** ./node_modules/http-proxy/lib/http-proxy/passes/ws-incoming.js ***!
  \**********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var http   = __webpack_require__(/*! http */ "http"),
    https  = __webpack_require__(/*! https */ "https"),
    common = __webpack_require__(/*! ../common */ "./node_modules/http-proxy/lib/http-proxy/common.js");

/*!
 * Array of passes.
 *
 * A `pass` is just a function that is executed on `req, socket, options`
 * so that you can easily add new checks while still keeping the base
 * flexible.
 */

/*
 * Websockets Passes
 *
 */


module.exports = {
  /**
   * WebSocket requests must have the `GET` method and
   * the `upgrade:websocket` header
   *
   * @param {ClientRequest} Req Request object
   * @param {Socket} Websocket
   *
   * @api private
   */

  checkMethodAndHeader : function checkMethodAndHeader(req, socket) {
    if (req.method !== 'GET' || !req.headers.upgrade) {
      socket.destroy();
      return true;
    }

    if (req.headers.upgrade.toLowerCase() !== 'websocket') {
      socket.destroy();
      return true;
    }
  },

  /**
   * Sets `x-forwarded-*` headers if specified in config.
   *
   * @param {ClientRequest} Req Request object
   * @param {Socket} Websocket
   * @param {Object} Options Config object passed to the proxy
   *
   * @api private
   */

  XHeaders : function XHeaders(req, socket, options) {
    if(!options.xfwd) return;

    var values = {
      for  : req.connection.remoteAddress || req.socket.remoteAddress,
      port : common.getPort(req),
      proto: common.hasEncryptedConnection(req) ? 'wss' : 'ws'
    };

    ['for', 'port', 'proto'].forEach(function(header) {
      req.headers['x-forwarded-' + header] =
        (req.headers['x-forwarded-' + header] || '') +
        (req.headers['x-forwarded-' + header] ? ',' : '') +
        values[header];
    });
  },

  /**
   * Does the actual proxying. Make the request and upgrade it
   * send the Switching Protocols request and pipe the sockets.
   *
   * @param {ClientRequest} Req Request object
   * @param {Socket} Websocket
   * @param {Object} Options Config object passed to the proxy
   *
   * @api private
   */
  stream : function stream(req, socket, options, head, server, clb) {

    var createHttpHeader = function(line, headers) {
      return Object.keys(headers).reduce(function (head, key) {
        var value = headers[key];

        if (!Array.isArray(value)) {
          head.push(key + ': ' + value);
          return head;
        }

        for (var i = 0; i < value.length; i++) {
          head.push(key + ': ' + value[i]);
        }
        return head;
      }, [line])
      .join('\r\n') + '\r\n\r\n';
    }

    common.setupSocket(socket);

    if (head && head.length) socket.unshift(head);


    var proxyReq = (common.isSSL.test(options.target.protocol) ? https : http).request(
      common.setupOutgoing(options.ssl || {}, options, req)
    );

    // Enable developers to modify the proxyReq before headers are sent
    if (server) { server.emit('proxyReqWs', proxyReq, req, socket, options, head); }

    // Error Handler
    proxyReq.on('error', onOutgoingError);
    proxyReq.on('response', function (res) {
      // if upgrade event isn't going to happen, close the socket
      if (!res.upgrade) {
        socket.write(createHttpHeader('HTTP/' + res.httpVersion + ' ' + res.statusCode + ' ' + res.statusMessage, res.headers));
        res.pipe(socket);
      }
    });

    proxyReq.on('upgrade', function(proxyRes, proxySocket, proxyHead) {
      proxySocket.on('error', onOutgoingError);

      // Allow us to listen when the websocket has completed
      proxySocket.on('end', function () {
        server.emit('close', proxyRes, proxySocket, proxyHead);
      });

      // The pipe below will end proxySocket if socket closes cleanly, but not
      // if it errors (eg, vanishes from the net and starts returning
      // EHOSTUNREACH). We need to do that explicitly.
      socket.on('error', function () {
        proxySocket.end();
      });

      common.setupSocket(proxySocket);

      if (proxyHead && proxyHead.length) proxySocket.unshift(proxyHead);

      //
      // Remark: Handle writing the headers to the socket when switching protocols
      // Also handles when a header is an array
      //
      socket.write(createHttpHeader('HTTP/1.1 101 Switching Protocols', proxyRes.headers));

      proxySocket.pipe(socket).pipe(proxySocket);

      server.emit('open', proxySocket);
      server.emit('proxySocket', proxySocket);  //DEPRECATED.
    });

    return proxyReq.end(); // XXX: CHECK IF THIS IS THIS CORRECT

    function onOutgoingError(err) {
      if (clb) {
        clb(err, req, socket);
      } else {
        server.emit('error', err, req, socket);
      }
      socket.end();
    }
  }
};


/***/ }),

/***/ "./node_modules/koa-server-http-proxy/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/koa-server-http-proxy/index.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const koaConnect = __webpack_require__(/*! koa2-connect */ "./node_modules/koa2-connect/dist/index.js")
const httpProxy = __webpack_require__(/*! http-proxy-middleware */ "./node_modules/http-proxy-middleware/index.js")

module.exports = function(context, options) {
  var proxy

  if (typeof options == 'string') {
    options = { target: options }
  }

  proxy = httpProxy(context, options)

  return async function(ctx, next) {
    await koaConnect(proxy)(ctx, next)
  }
}



/***/ }),

/***/ "./node_modules/koa2-connect/dist/index.js":
/*!*************************************************!*\
  !*** ./node_modules/koa2-connect/dist/index.js ***!
  \*************************************************/
/***/ (function(module) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t;
    return { next: verb(0), "throw": verb(1), "return": verb(2) };
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
/**
 * Inject raw response, so we can know if middleware has responsed.
 */
function makeInjectedResponse(koaCtx, /*markHandled,*/ whenEnded) {
    var res = koaCtx.res;
    res.on('close', whenEnded).on('finish', whenEnded);
    var dummyRes = Object.create(res);
    [
        'setHeader',
        'writeHead',
        'write',
        'end'
    ].forEach(function (name) {
        dummyRes[name] = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            res[name].apply(res, args);
            // koa2.0 initial assign statusCode to 404, reset to 200
            if (res.statusCode === 404) {
                res.statusCode = 200;
            }
            // markHandled();
        };
    });
    [
        'statusCode',
        'statusMessage'
    ].forEach(function (name) {
        dummyRes.__defineSetter__(name, function (value) {
            res[name] = value;
            // markHandled();
        });
    });
    return dummyRes;
}
/**
 * The middleware function does include the `next` callback so only resolve
 * the Promise when it's called. If it's never called, the middleware stack
 * completion will stall
 */
function handler(ctx, connectMiddleware) {
    return new Promise(function (resolve, reject) {
        // let hasHandled = false;
        // (req, res)
        var args = [
            ctx.req,
            makeInjectedResponse(ctx, 
            // () => {
            //   // hasHandled = true;
            // },
            function () {
                resolve(false);
            })
        ];
        var assumeSync = true;
        // (req, res, next) or (err, req, res, next)
        if (connectMiddleware.length >= 3) {
            args.push(function (err) {
                if (err)
                    reject(err);
                else
                    resolve(true);
            });
            assumeSync = false;
        }
        // (err, req, res, next)
        if (connectMiddleware.length >= 4) {
            args.unshift(null);
        }
        connectMiddleware.apply(void 0, args);
        /**
         * If the middleware function does not declare receiving the `next` callback
         * assume that it's synchronous.
         */
        if (assumeSync /*&& !hasHandled*/) {
            resolve(true);
        }
    });
}
/**
 * Returns a Koa middleware function that varies its async logic based on if the
 * given middleware function declares at least 3 parameters, i.e. includes
 * the `next` callback function
 */
function koaConnect(connectMiddleware) {
    var _this = this;
    return function (ctx, next) { return __awaiter(_this, void 0, void 0, function () {
        var goNext, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    ctx.respond = false;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, handler(ctx, connectMiddleware)];
                case 2:
                    goNext = _a.sent();
                    if (goNext) {
                        ctx.respond = true;
                        return [2 /*return*/, next()];
                    }
                    return [3 /*break*/, 4];
                case 3:
                    err_1 = _a.sent();
                    ctx.respond = true;
                    throw err_1;
                case 4:
                    ;
                    return [2 /*return*/];
            }
        });
    }); };
}
module.exports = koaConnect;


/***/ }),

/***/ "./node_modules/requires-port/index.js":
/*!*********************************************!*\
  !*** ./node_modules/requires-port/index.js ***!
  \*********************************************/
/***/ ((module) => {

"use strict";


/**
 * Check if we're required to add a port number.
 *
 * @see https://url.spec.whatwg.org/#default-port
 * @param {Number|String} port Port number we need to check
 * @param {String} protocol Protocol we need to check against.
 * @returns {Boolean} Is it a default port for the given protocol
 * @api private
 */
module.exports = function required(port, protocol) {
  protocol = protocol.split(':')[0];
  port = +port;

  if (!port) return false;

  switch (protocol) {
    case 'http':
    case 'ws':
    return port !== 80;

    case 'https':
    case 'wss':
    return port !== 443;

    case 'ftp':
    return port !== 21;

    case 'gopher':
    return port !== 70;

    case 'file':
    return false;
  }

  return port !== 0;
};


/***/ }),

/***/ "@babel/runtime/helpers/asyncToGenerator":
/*!**********************************************************!*\
  !*** external "@babel/runtime/helpers/asyncToGenerator" ***!
  \**********************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@babel/runtime/helpers/asyncToGenerator");;

/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@babel/runtime/regenerator");;

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("axios");;

/***/ }),

/***/ "follow-redirects":
/*!***********************************!*\
  !*** external "follow-redirects" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("follow-redirects");;

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("http");;

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("https");;

/***/ }),

/***/ "is-glob":
/*!**************************!*\
  !*** external "is-glob" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("is-glob");;

/***/ }),

/***/ "koa":
/*!**********************!*\
  !*** external "koa" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("koa");;

/***/ }),

/***/ "koa-router":
/*!*****************************!*\
  !*** external "koa-router" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = require("koa-router");;

/***/ }),

/***/ "koa-static":
/*!*****************************!*\
  !*** external "koa-static" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = require("koa-static");;

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("lodash");;

/***/ }),

/***/ "micromatch":
/*!*****************************!*\
  !*** external "micromatch" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = require("micromatch");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom/server");;

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");;

/***/ }),

/***/ "react-router-config":
/*!**************************************!*\
  !*** external "react-router-config" ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-router-config");;

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-router-dom");;

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("redux");;

/***/ }),

/***/ "redux-logger":
/*!*******************************!*\
  !*** external "redux-logger" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = require("redux-logger");;

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("redux-thunk");;

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("url");;

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("util");;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*****************************!*\
  !*** ./src/server/index.js ***!
  \*****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var koa__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! koa */ "koa");
/* harmony import */ var koa__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(koa__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var koa_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! koa-router */ "koa-router");
/* harmony import */ var koa_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(koa_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var koa_static__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! koa-static */ "koa-static");
/* harmony import */ var koa_static__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(koa_static__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./render */ "./src/server/render.js");
/* harmony import */ var koa_server_http_proxy__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! koa-server-http-proxy */ "./node_modules/koa-server-http-proxy/index.js");
/* harmony import */ var koa_server_http_proxy__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(koa_server_http_proxy__WEBPACK_IMPORTED_MODULE_6__);







var app = new (koa__WEBPACK_IMPORTED_MODULE_2___default())();
var router = new (koa_router__WEBPACK_IMPORTED_MODULE_3___default())();
app.use(koa_server_http_proxy__WEBPACK_IMPORTED_MODULE_6___default()("/api", {
  target: "http://localhost:4000",
  pathRewrite: {
    '^/api': '/api'
  },
  changeOrigin: true
}));
app.use(koa_static__WEBPACK_IMPORTED_MODULE_4___default()(process.cwd() + '/public'));
app.use( /*#__PURE__*/function () {
  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(ctx, next) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            console.log('=======', ctx.path);

            if (!(ctx.path != '/favicon.ico')) {
              _context.next = 4;
              break;
            }

            _context.next = 4;
            return (0,_render__WEBPACK_IMPORTED_MODULE_5__.default)(ctx, next);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}()); // app.use(router.routes())
// app.use(router.allowedMethods());
// console.log(process.cwd())

app.listen(9000, function () {
  console.log('start');
});
})();

/******/ })()
;
//# sourceMappingURL=server.js.map