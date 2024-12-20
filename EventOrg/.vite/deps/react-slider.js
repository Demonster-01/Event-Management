import {
  require_react
} from "./chunk-AHEUJZNM.js";
import {
  __commonJS,
  __toESM
} from "./chunk-G3PMV62Z.js";

// ../node_modules/react-is/cjs/react-is.development.js
var require_react_is_development = __commonJS({
  "../node_modules/react-is/cjs/react-is.development.js"(exports) {
    "use strict";
    if (true) {
      (function() {
        "use strict";
        var hasSymbol = typeof Symbol === "function" && Symbol.for;
        var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for("react.element") : 60103;
        var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for("react.portal") : 60106;
        var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for("react.fragment") : 60107;
        var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for("react.strict_mode") : 60108;
        var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for("react.profiler") : 60114;
        var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for("react.provider") : 60109;
        var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for("react.context") : 60110;
        var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for("react.async_mode") : 60111;
        var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for("react.concurrent_mode") : 60111;
        var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for("react.forward_ref") : 60112;
        var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for("react.suspense") : 60113;
        var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for("react.suspense_list") : 60120;
        var REACT_MEMO_TYPE = hasSymbol ? Symbol.for("react.memo") : 60115;
        var REACT_LAZY_TYPE = hasSymbol ? Symbol.for("react.lazy") : 60116;
        var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for("react.block") : 60121;
        var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for("react.fundamental") : 60117;
        var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for("react.responder") : 60118;
        var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for("react.scope") : 60119;
        function isValidElementType(type) {
          return typeof type === "string" || typeof type === "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
          type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === "object" && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
        }
        function typeOf(object) {
          if (typeof object === "object" && object !== null) {
            var $$typeof = object.$$typeof;
            switch ($$typeof) {
              case REACT_ELEMENT_TYPE:
                var type = object.type;
                switch (type) {
                  case REACT_ASYNC_MODE_TYPE:
                  case REACT_CONCURRENT_MODE_TYPE:
                  case REACT_FRAGMENT_TYPE:
                  case REACT_PROFILER_TYPE:
                  case REACT_STRICT_MODE_TYPE:
                  case REACT_SUSPENSE_TYPE:
                    return type;
                  default:
                    var $$typeofType = type && type.$$typeof;
                    switch ($$typeofType) {
                      case REACT_CONTEXT_TYPE:
                      case REACT_FORWARD_REF_TYPE:
                      case REACT_LAZY_TYPE:
                      case REACT_MEMO_TYPE:
                      case REACT_PROVIDER_TYPE:
                        return $$typeofType;
                      default:
                        return $$typeof;
                    }
                }
              case REACT_PORTAL_TYPE:
                return $$typeof;
            }
          }
          return void 0;
        }
        var AsyncMode = REACT_ASYNC_MODE_TYPE;
        var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
        var ContextConsumer = REACT_CONTEXT_TYPE;
        var ContextProvider = REACT_PROVIDER_TYPE;
        var Element = REACT_ELEMENT_TYPE;
        var ForwardRef = REACT_FORWARD_REF_TYPE;
        var Fragment = REACT_FRAGMENT_TYPE;
        var Lazy = REACT_LAZY_TYPE;
        var Memo = REACT_MEMO_TYPE;
        var Portal = REACT_PORTAL_TYPE;
        var Profiler = REACT_PROFILER_TYPE;
        var StrictMode = REACT_STRICT_MODE_TYPE;
        var Suspense = REACT_SUSPENSE_TYPE;
        var hasWarnedAboutDeprecatedIsAsyncMode = false;
        function isAsyncMode(object) {
          {
            if (!hasWarnedAboutDeprecatedIsAsyncMode) {
              hasWarnedAboutDeprecatedIsAsyncMode = true;
              console["warn"]("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.");
            }
          }
          return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
        }
        function isConcurrentMode(object) {
          return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
        }
        function isContextConsumer(object) {
          return typeOf(object) === REACT_CONTEXT_TYPE;
        }
        function isContextProvider(object) {
          return typeOf(object) === REACT_PROVIDER_TYPE;
        }
        function isElement(object) {
          return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
        }
        function isForwardRef(object) {
          return typeOf(object) === REACT_FORWARD_REF_TYPE;
        }
        function isFragment(object) {
          return typeOf(object) === REACT_FRAGMENT_TYPE;
        }
        function isLazy(object) {
          return typeOf(object) === REACT_LAZY_TYPE;
        }
        function isMemo(object) {
          return typeOf(object) === REACT_MEMO_TYPE;
        }
        function isPortal(object) {
          return typeOf(object) === REACT_PORTAL_TYPE;
        }
        function isProfiler(object) {
          return typeOf(object) === REACT_PROFILER_TYPE;
        }
        function isStrictMode(object) {
          return typeOf(object) === REACT_STRICT_MODE_TYPE;
        }
        function isSuspense(object) {
          return typeOf(object) === REACT_SUSPENSE_TYPE;
        }
        exports.AsyncMode = AsyncMode;
        exports.ConcurrentMode = ConcurrentMode;
        exports.ContextConsumer = ContextConsumer;
        exports.ContextProvider = ContextProvider;
        exports.Element = Element;
        exports.ForwardRef = ForwardRef;
        exports.Fragment = Fragment;
        exports.Lazy = Lazy;
        exports.Memo = Memo;
        exports.Portal = Portal;
        exports.Profiler = Profiler;
        exports.StrictMode = StrictMode;
        exports.Suspense = Suspense;
        exports.isAsyncMode = isAsyncMode;
        exports.isConcurrentMode = isConcurrentMode;
        exports.isContextConsumer = isContextConsumer;
        exports.isContextProvider = isContextProvider;
        exports.isElement = isElement;
        exports.isForwardRef = isForwardRef;
        exports.isFragment = isFragment;
        exports.isLazy = isLazy;
        exports.isMemo = isMemo;
        exports.isPortal = isPortal;
        exports.isProfiler = isProfiler;
        exports.isStrictMode = isStrictMode;
        exports.isSuspense = isSuspense;
        exports.isValidElementType = isValidElementType;
        exports.typeOf = typeOf;
      })();
    }
  }
});

// ../node_modules/react-is/index.js
var require_react_is = __commonJS({
  "../node_modules/react-is/index.js"(exports, module) {
    "use strict";
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_react_is_development();
    }
  }
});

// ../node_modules/object-assign/index.js
var require_object_assign = __commonJS({
  "../node_modules/object-assign/index.js"(exports, module) {
    "use strict";
    var getOwnPropertySymbols = Object.getOwnPropertySymbols;
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    var propIsEnumerable = Object.prototype.propertyIsEnumerable;
    function toObject(val) {
      if (val === null || val === void 0) {
        throw new TypeError("Object.assign cannot be called with null or undefined");
      }
      return Object(val);
    }
    function shouldUseNative() {
      try {
        if (!Object.assign) {
          return false;
        }
        var test1 = new String("abc");
        test1[5] = "de";
        if (Object.getOwnPropertyNames(test1)[0] === "5") {
          return false;
        }
        var test2 = {};
        for (var i = 0; i < 10; i++) {
          test2["_" + String.fromCharCode(i)] = i;
        }
        var order2 = Object.getOwnPropertyNames(test2).map(function(n) {
          return test2[n];
        });
        if (order2.join("") !== "0123456789") {
          return false;
        }
        var test3 = {};
        "abcdefghijklmnopqrst".split("").forEach(function(letter) {
          test3[letter] = letter;
        });
        if (Object.keys(Object.assign({}, test3)).join("") !== "abcdefghijklmnopqrst") {
          return false;
        }
        return true;
      } catch (err) {
        return false;
      }
    }
    module.exports = shouldUseNative() ? Object.assign : function(target, source) {
      var from;
      var to = toObject(target);
      var symbols;
      for (var s = 1; s < arguments.length; s++) {
        from = Object(arguments[s]);
        for (var key in from) {
          if (hasOwnProperty.call(from, key)) {
            to[key] = from[key];
          }
        }
        if (getOwnPropertySymbols) {
          symbols = getOwnPropertySymbols(from);
          for (var i = 0; i < symbols.length; i++) {
            if (propIsEnumerable.call(from, symbols[i])) {
              to[symbols[i]] = from[symbols[i]];
            }
          }
        }
      }
      return to;
    };
  }
});

// ../node_modules/prop-types/lib/ReactPropTypesSecret.js
var require_ReactPropTypesSecret = __commonJS({
  "../node_modules/prop-types/lib/ReactPropTypesSecret.js"(exports, module) {
    "use strict";
    var ReactPropTypesSecret = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
    module.exports = ReactPropTypesSecret;
  }
});

// ../node_modules/prop-types/lib/has.js
var require_has = __commonJS({
  "../node_modules/prop-types/lib/has.js"(exports, module) {
    module.exports = Function.call.bind(Object.prototype.hasOwnProperty);
  }
});

// ../node_modules/prop-types/checkPropTypes.js
var require_checkPropTypes = __commonJS({
  "../node_modules/prop-types/checkPropTypes.js"(exports, module) {
    "use strict";
    var printWarning = function() {
    };
    if (true) {
      ReactPropTypesSecret = require_ReactPropTypesSecret();
      loggedTypeFailures = {};
      has = require_has();
      printWarning = function(text) {
        var message = "Warning: " + text;
        if (typeof console !== "undefined") {
          console.error(message);
        }
        try {
          throw new Error(message);
        } catch (x) {
        }
      };
    }
    var ReactPropTypesSecret;
    var loggedTypeFailures;
    var has;
    function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
      if (true) {
        for (var typeSpecName in typeSpecs) {
          if (has(typeSpecs, typeSpecName)) {
            var error;
            try {
              if (typeof typeSpecs[typeSpecName] !== "function") {
                var err = Error(
                  (componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
                );
                err.name = "Invariant Violation";
                throw err;
              }
              error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
            } catch (ex) {
              error = ex;
            }
            if (error && !(error instanceof Error)) {
              printWarning(
                (componentName || "React class") + ": type specification of " + location + " `" + typeSpecName + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof error + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
              );
            }
            if (error instanceof Error && !(error.message in loggedTypeFailures)) {
              loggedTypeFailures[error.message] = true;
              var stack = getStack ? getStack() : "";
              printWarning(
                "Failed " + location + " type: " + error.message + (stack != null ? stack : "")
              );
            }
          }
        }
      }
    }
    checkPropTypes.resetWarningCache = function() {
      if (true) {
        loggedTypeFailures = {};
      }
    };
    module.exports = checkPropTypes;
  }
});

// ../node_modules/prop-types/factoryWithTypeCheckers.js
var require_factoryWithTypeCheckers = __commonJS({
  "../node_modules/prop-types/factoryWithTypeCheckers.js"(exports, module) {
    "use strict";
    var ReactIs = require_react_is();
    var assign = require_object_assign();
    var ReactPropTypesSecret = require_ReactPropTypesSecret();
    var has = require_has();
    var checkPropTypes = require_checkPropTypes();
    var printWarning = function() {
    };
    if (true) {
      printWarning = function(text) {
        var message = "Warning: " + text;
        if (typeof console !== "undefined") {
          console.error(message);
        }
        try {
          throw new Error(message);
        } catch (x) {
        }
      };
    }
    function emptyFunctionThatReturnsNull() {
      return null;
    }
    module.exports = function(isValidElement, throwOnDirectAccess) {
      var ITERATOR_SYMBOL = typeof Symbol === "function" && Symbol.iterator;
      var FAUX_ITERATOR_SYMBOL = "@@iterator";
      function getIteratorFn(maybeIterable) {
        var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
        if (typeof iteratorFn === "function") {
          return iteratorFn;
        }
      }
      var ANONYMOUS = "<<anonymous>>";
      var ReactPropTypes = {
        array: createPrimitiveTypeChecker("array"),
        bigint: createPrimitiveTypeChecker("bigint"),
        bool: createPrimitiveTypeChecker("boolean"),
        func: createPrimitiveTypeChecker("function"),
        number: createPrimitiveTypeChecker("number"),
        object: createPrimitiveTypeChecker("object"),
        string: createPrimitiveTypeChecker("string"),
        symbol: createPrimitiveTypeChecker("symbol"),
        any: createAnyTypeChecker(),
        arrayOf: createArrayOfTypeChecker,
        element: createElementTypeChecker(),
        elementType: createElementTypeTypeChecker(),
        instanceOf: createInstanceTypeChecker,
        node: createNodeChecker(),
        objectOf: createObjectOfTypeChecker,
        oneOf: createEnumTypeChecker,
        oneOfType: createUnionTypeChecker,
        shape: createShapeTypeChecker,
        exact: createStrictShapeTypeChecker
      };
      function is(x, y) {
        if (x === y) {
          return x !== 0 || 1 / x === 1 / y;
        } else {
          return x !== x && y !== y;
        }
      }
      function PropTypeError(message, data) {
        this.message = message;
        this.data = data && typeof data === "object" ? data : {};
        this.stack = "";
      }
      PropTypeError.prototype = Error.prototype;
      function createChainableTypeChecker(validate) {
        if (true) {
          var manualPropTypeCallCache = {};
          var manualPropTypeWarningCount = 0;
        }
        function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
          componentName = componentName || ANONYMOUS;
          propFullName = propFullName || propName;
          if (secret !== ReactPropTypesSecret) {
            if (throwOnDirectAccess) {
              var err = new Error(
                "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
              );
              err.name = "Invariant Violation";
              throw err;
            } else if (typeof console !== "undefined") {
              var cacheKey = componentName + ":" + propName;
              if (!manualPropTypeCallCache[cacheKey] && // Avoid spamming the console because they are often not actionable except for lib authors
              manualPropTypeWarningCount < 3) {
                printWarning(
                  "You are manually calling a React.PropTypes validation function for the `" + propFullName + "` prop on `" + componentName + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
                );
                manualPropTypeCallCache[cacheKey] = true;
                manualPropTypeWarningCount++;
              }
            }
          }
          if (props[propName] == null) {
            if (isRequired) {
              if (props[propName] === null) {
                return new PropTypeError("The " + location + " `" + propFullName + "` is marked as required " + ("in `" + componentName + "`, but its value is `null`."));
              }
              return new PropTypeError("The " + location + " `" + propFullName + "` is marked as required in " + ("`" + componentName + "`, but its value is `undefined`."));
            }
            return null;
          } else {
            return validate(props, propName, componentName, location, propFullName);
          }
        }
        var chainedCheckType = checkType.bind(null, false);
        chainedCheckType.isRequired = checkType.bind(null, true);
        return chainedCheckType;
      }
      function createPrimitiveTypeChecker(expectedType) {
        function validate(props, propName, componentName, location, propFullName, secret) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== expectedType) {
            var preciseType = getPreciseType(propValue);
            return new PropTypeError(
              "Invalid " + location + " `" + propFullName + "` of type " + ("`" + preciseType + "` supplied to `" + componentName + "`, expected ") + ("`" + expectedType + "`."),
              { expectedType }
            );
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createAnyTypeChecker() {
        return createChainableTypeChecker(emptyFunctionThatReturnsNull);
      }
      function createArrayOfTypeChecker(typeChecker) {
        function validate(props, propName, componentName, location, propFullName) {
          if (typeof typeChecker !== "function") {
            return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside arrayOf.");
          }
          var propValue = props[propName];
          if (!Array.isArray(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected an array."));
          }
          for (var i = 0; i < propValue.length; i++) {
            var error = typeChecker(propValue, i, componentName, location, propFullName + "[" + i + "]", ReactPropTypesSecret);
            if (error instanceof Error) {
              return error;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createElementTypeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          if (!isValidElement(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected a single ReactElement."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createElementTypeTypeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          if (!ReactIs.isValidElementType(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected a single ReactElement type."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createInstanceTypeChecker(expectedClass) {
        function validate(props, propName, componentName, location, propFullName) {
          if (!(props[propName] instanceof expectedClass)) {
            var expectedClassName = expectedClass.name || ANONYMOUS;
            var actualClassName = getClassName(props[propName]);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + actualClassName + "` supplied to `" + componentName + "`, expected ") + ("instance of `" + expectedClassName + "`."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createEnumTypeChecker(expectedValues) {
        if (!Array.isArray(expectedValues)) {
          if (true) {
            if (arguments.length > 1) {
              printWarning(
                "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
              );
            } else {
              printWarning("Invalid argument supplied to oneOf, expected an array.");
            }
          }
          return emptyFunctionThatReturnsNull;
        }
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          for (var i = 0; i < expectedValues.length; i++) {
            if (is(propValue, expectedValues[i])) {
              return null;
            }
          }
          var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
            var type = getPreciseType(value);
            if (type === "symbol") {
              return String(value);
            }
            return value;
          });
          return new PropTypeError("Invalid " + location + " `" + propFullName + "` of value `" + String(propValue) + "` " + ("supplied to `" + componentName + "`, expected one of " + valuesString + "."));
        }
        return createChainableTypeChecker(validate);
      }
      function createObjectOfTypeChecker(typeChecker) {
        function validate(props, propName, componentName, location, propFullName) {
          if (typeof typeChecker !== "function") {
            return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside objectOf.");
          }
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== "object") {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected an object."));
          }
          for (var key in propValue) {
            if (has(propValue, key)) {
              var error = typeChecker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
              if (error instanceof Error) {
                return error;
              }
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createUnionTypeChecker(arrayOfTypeCheckers) {
        if (!Array.isArray(arrayOfTypeCheckers)) {
          true ? printWarning("Invalid argument supplied to oneOfType, expected an instance of array.") : void 0;
          return emptyFunctionThatReturnsNull;
        }
        for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
          var checker = arrayOfTypeCheckers[i];
          if (typeof checker !== "function") {
            printWarning(
              "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + getPostfixForTypeWarning(checker) + " at index " + i + "."
            );
            return emptyFunctionThatReturnsNull;
          }
        }
        function validate(props, propName, componentName, location, propFullName) {
          var expectedTypes = [];
          for (var i2 = 0; i2 < arrayOfTypeCheckers.length; i2++) {
            var checker2 = arrayOfTypeCheckers[i2];
            var checkerResult = checker2(props, propName, componentName, location, propFullName, ReactPropTypesSecret);
            if (checkerResult == null) {
              return null;
            }
            if (checkerResult.data && has(checkerResult.data, "expectedType")) {
              expectedTypes.push(checkerResult.data.expectedType);
            }
          }
          var expectedTypesMessage = expectedTypes.length > 0 ? ", expected one of type [" + expectedTypes.join(", ") + "]" : "";
          return new PropTypeError("Invalid " + location + " `" + propFullName + "` supplied to " + ("`" + componentName + "`" + expectedTypesMessage + "."));
        }
        return createChainableTypeChecker(validate);
      }
      function createNodeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
          if (!isNode(props[propName])) {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` supplied to " + ("`" + componentName + "`, expected a ReactNode."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function invalidValidatorError(componentName, location, propFullName, key, type) {
        return new PropTypeError(
          (componentName || "React class") + ": " + location + " type `" + propFullName + "." + key + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + type + "`."
        );
      }
      function createShapeTypeChecker(shapeTypes) {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== "object") {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected `object`."));
          }
          for (var key in shapeTypes) {
            var checker = shapeTypes[key];
            if (typeof checker !== "function") {
              return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
            }
            var error = checker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
            if (error) {
              return error;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createStrictShapeTypeChecker(shapeTypes) {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== "object") {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected `object`."));
          }
          var allKeys = assign({}, props[propName], shapeTypes);
          for (var key in allKeys) {
            var checker = shapeTypes[key];
            if (has(shapeTypes, key) && typeof checker !== "function") {
              return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
            }
            if (!checker) {
              return new PropTypeError(
                "Invalid " + location + " `" + propFullName + "` key `" + key + "` supplied to `" + componentName + "`.\nBad object: " + JSON.stringify(props[propName], null, "  ") + "\nValid keys: " + JSON.stringify(Object.keys(shapeTypes), null, "  ")
              );
            }
            var error = checker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
            if (error) {
              return error;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function isNode(propValue) {
        switch (typeof propValue) {
          case "number":
          case "string":
          case "undefined":
            return true;
          case "boolean":
            return !propValue;
          case "object":
            if (Array.isArray(propValue)) {
              return propValue.every(isNode);
            }
            if (propValue === null || isValidElement(propValue)) {
              return true;
            }
            var iteratorFn = getIteratorFn(propValue);
            if (iteratorFn) {
              var iterator = iteratorFn.call(propValue);
              var step;
              if (iteratorFn !== propValue.entries) {
                while (!(step = iterator.next()).done) {
                  if (!isNode(step.value)) {
                    return false;
                  }
                }
              } else {
                while (!(step = iterator.next()).done) {
                  var entry = step.value;
                  if (entry) {
                    if (!isNode(entry[1])) {
                      return false;
                    }
                  }
                }
              }
            } else {
              return false;
            }
            return true;
          default:
            return false;
        }
      }
      function isSymbol(propType, propValue) {
        if (propType === "symbol") {
          return true;
        }
        if (!propValue) {
          return false;
        }
        if (propValue["@@toStringTag"] === "Symbol") {
          return true;
        }
        if (typeof Symbol === "function" && propValue instanceof Symbol) {
          return true;
        }
        return false;
      }
      function getPropType(propValue) {
        var propType = typeof propValue;
        if (Array.isArray(propValue)) {
          return "array";
        }
        if (propValue instanceof RegExp) {
          return "object";
        }
        if (isSymbol(propType, propValue)) {
          return "symbol";
        }
        return propType;
      }
      function getPreciseType(propValue) {
        if (typeof propValue === "undefined" || propValue === null) {
          return "" + propValue;
        }
        var propType = getPropType(propValue);
        if (propType === "object") {
          if (propValue instanceof Date) {
            return "date";
          } else if (propValue instanceof RegExp) {
            return "regexp";
          }
        }
        return propType;
      }
      function getPostfixForTypeWarning(value) {
        var type = getPreciseType(value);
        switch (type) {
          case "array":
          case "object":
            return "an " + type;
          case "boolean":
          case "date":
          case "regexp":
            return "a " + type;
          default:
            return type;
        }
      }
      function getClassName(propValue) {
        if (!propValue.constructor || !propValue.constructor.name) {
          return ANONYMOUS;
        }
        return propValue.constructor.name;
      }
      ReactPropTypes.checkPropTypes = checkPropTypes;
      ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
      ReactPropTypes.PropTypes = ReactPropTypes;
      return ReactPropTypes;
    };
  }
});

// ../node_modules/prop-types/index.js
var require_prop_types = __commonJS({
  "../node_modules/prop-types/index.js"(exports, module) {
    if (true) {
      ReactIs = require_react_is();
      throwOnDirectAccess = true;
      module.exports = require_factoryWithTypeCheckers()(ReactIs.isElement, throwOnDirectAccess);
    } else {
      module.exports = null();
    }
    var ReactIs;
    var throwOnDirectAccess;
  }
});

// ../node_modules/@babel/runtime/helpers/esm/extends.js
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function(n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}

// ../node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js
function _setPrototypeOf(t, e) {
  return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t2, e2) {
    return t2.__proto__ = e2, t2;
  }, _setPrototypeOf(t, e);
}

// ../node_modules/@babel/runtime/helpers/esm/inheritsLoose.js
function _inheritsLoose(t, o) {
  t.prototype = Object.create(o.prototype), t.prototype.constructor = t, _setPrototypeOf(t, o);
}

// ../node_modules/react-slider/dist/es/dev/components/ReactSlider/ReactSlider.mjs
var import_react = __toESM(require_react(), 1);
var import_prop_types = __toESM(require_prop_types(), 1);
var _jsxFileName = "/Users/krise/github/react-slider/src/components/ReactSlider/ReactSlider.jsx";
function pauseEvent(e) {
  if (e && e.stopPropagation) {
    e.stopPropagation();
  }
  if (e && e.preventDefault) {
    e.preventDefault();
  }
  return false;
}
function stopPropagation(e) {
  if (e.stopPropagation) {
    e.stopPropagation();
  }
}
function sanitizeInValue(x) {
  if (x == null) {
    return [];
  }
  return Array.isArray(x) ? x.slice() : [x];
}
function prepareOutValue(x) {
  return x !== null && x.length === 1 ? x[0] : x.slice();
}
function trimSucceeding(length, nextValue, minDistance, max) {
  for (let i = 0; i < length; i += 1) {
    const padding = max - i * minDistance;
    if (nextValue[length - 1 - i] > padding) {
      nextValue[length - 1 - i] = padding;
    }
  }
}
function trimPreceding(length, nextValue, minDistance, min) {
  for (let i = 0; i < length; i += 1) {
    const padding = min + i * minDistance;
    if (nextValue[i] < padding) {
      nextValue[i] = padding;
    }
  }
}
function addHandlers(eventMap) {
  Object.keys(eventMap).forEach((key) => {
    if (typeof document !== "undefined") {
      document.addEventListener(key, eventMap[key], false);
    }
  });
}
function removeHandlers(eventMap) {
  Object.keys(eventMap).forEach((key) => {
    if (typeof document !== "undefined") {
      document.removeEventListener(key, eventMap[key], false);
    }
  });
}
function trimAlignValue(val, props) {
  return alignValue(trimValue(val, props), props);
}
function alignValue(val, props) {
  const valModStep = (val - props.min) % props.step;
  let alignedValue = val - valModStep;
  if (Math.abs(valModStep) * 2 >= props.step) {
    alignedValue += valModStep > 0 ? props.step : -props.step;
  }
  return parseFloat(alignedValue.toFixed(5));
}
function trimValue(val, props) {
  let trimmed = val;
  if (trimmed <= props.min) {
    trimmed = props.min;
  }
  if (trimmed >= props.max) {
    trimmed = props.max;
  }
  return trimmed;
}
var ReactSlider = function(_React$Component) {
  _inheritsLoose(ReactSlider2, _React$Component);
  function ReactSlider2(_props) {
    var _this;
    _this = _React$Component.call(this, _props) || this;
    _this.onKeyUp = () => {
      _this.onEnd();
    };
    _this.onMouseUp = () => {
      _this.onEnd(_this.getMouseEventMap());
    };
    _this.onTouchEnd = (e) => {
      e.preventDefault();
      _this.onEnd(_this.getTouchEventMap());
    };
    _this.onBlur = () => {
      _this.setState({
        index: -1
      }, _this.onEnd(_this.getKeyDownEventMap()));
    };
    _this.onMouseMove = (e) => {
      _this.setState({
        pending: true
      });
      const position = _this.getMousePosition(e);
      const diffPosition = _this.getDiffPosition(position[0]);
      const newValue = _this.getValueFromPosition(diffPosition);
      _this.move(newValue);
    };
    _this.onTouchMove = (e) => {
      if (e.touches.length > 1) {
        return;
      }
      _this.setState({
        pending: true
      });
      const position = _this.getTouchPosition(e);
      if (typeof _this.isScrolling === "undefined") {
        const diffMainDir = position[0] - _this.startPosition[0];
        const diffScrollDir = position[1] - _this.startPosition[1];
        _this.isScrolling = Math.abs(diffScrollDir) > Math.abs(diffMainDir);
      }
      if (_this.isScrolling) {
        _this.setState({
          index: -1
        });
        return;
      }
      const diffPosition = _this.getDiffPosition(position[0]);
      const newValue = _this.getValueFromPosition(diffPosition);
      _this.move(newValue);
    };
    _this.onKeyDown = (e) => {
      if (e.ctrlKey || e.shiftKey || e.altKey || e.metaKey) {
        return;
      }
      _this.setState({
        pending: true
      });
      switch (e.key) {
        case "ArrowLeft":
        case "ArrowDown":
        case "Left":
        case "Down":
          e.preventDefault();
          _this.moveDownByStep();
          break;
        case "ArrowRight":
        case "ArrowUp":
        case "Right":
        case "Up":
          e.preventDefault();
          _this.moveUpByStep();
          break;
        case "Home":
          e.preventDefault();
          _this.move(_this.props.min);
          break;
        case "End":
          e.preventDefault();
          _this.move(_this.props.max);
          break;
        case "PageDown":
          e.preventDefault();
          _this.moveDownByStep(_this.props.pageFn(_this.props.step));
          break;
        case "PageUp":
          e.preventDefault();
          _this.moveUpByStep(_this.props.pageFn(_this.props.step));
          break;
      }
    };
    _this.onSliderMouseDown = (e) => {
      if (_this.props.disabled || e.button === 2) {
        return;
      }
      _this.setState({
        pending: true
      });
      if (!_this.props.snapDragDisabled) {
        const position = _this.getMousePosition(e);
        _this.forceValueFromPosition(position[0], (i) => {
          _this.start(i, position[0]);
          addHandlers(_this.getMouseEventMap());
        });
      }
      pauseEvent(e);
    };
    _this.onSliderClick = (e) => {
      if (_this.props.disabled) {
        return;
      }
      if (_this.props.onSliderClick && !_this.hasMoved) {
        const position = _this.getMousePosition(e);
        const valueAtPos = trimAlignValue(_this.calcValue(_this.calcOffsetFromPosition(position[0])), _this.props);
        _this.props.onSliderClick(valueAtPos);
      }
    };
    _this.createOnKeyDown = (i) => (e) => {
      if (_this.props.disabled) {
        return;
      }
      _this.start(i);
      addHandlers(_this.getKeyDownEventMap());
      pauseEvent(e);
    };
    _this.createOnMouseDown = (i) => (e) => {
      if (_this.props.disabled || e.button === 2) {
        return;
      }
      _this.setState({
        pending: true
      });
      const position = _this.getMousePosition(e);
      _this.start(i, position[0]);
      addHandlers(_this.getMouseEventMap());
      pauseEvent(e);
    };
    _this.createOnTouchStart = (i) => (e) => {
      if (_this.props.disabled || e.touches.length > 1) {
        return;
      }
      _this.setState({
        pending: true
      });
      const position = _this.getTouchPosition(e);
      _this.startPosition = position;
      _this.isScrolling = void 0;
      _this.start(i, position[0]);
      addHandlers(_this.getTouchEventMap());
      stopPropagation(e);
    };
    _this.handleResize = () => {
      const resizeTimeout = window.setTimeout(() => {
        _this.pendingResizeTimeouts.shift();
        _this.resize();
      }, 0);
      _this.pendingResizeTimeouts.push(resizeTimeout);
    };
    _this.renderThumb = (style, i) => {
      const className = _this.props.thumbClassName + " " + _this.props.thumbClassName + "-" + i + " " + (_this.state.index === i ? _this.props.thumbActiveClassName : "");
      const props = {
        "ref": (r) => {
          _this["thumb" + i] = r;
        },
        "key": _this.props.thumbClassName + "-" + i,
        className,
        style,
        "onMouseDown": _this.createOnMouseDown(i),
        "onTouchStart": _this.createOnTouchStart(i),
        "onFocus": _this.createOnKeyDown(i),
        "tabIndex": 0,
        "role": "slider",
        "aria-orientation": _this.props.orientation,
        "aria-valuenow": _this.state.value[i],
        "aria-valuemin": _this.props.min,
        "aria-valuemax": _this.props.max,
        "aria-label": Array.isArray(_this.props.ariaLabel) ? _this.props.ariaLabel[i] : _this.props.ariaLabel,
        "aria-labelledby": Array.isArray(_this.props.ariaLabelledby) ? _this.props.ariaLabelledby[i] : _this.props.ariaLabelledby,
        "aria-disabled": _this.props.disabled
      };
      const state = {
        index: i,
        value: prepareOutValue(_this.state.value),
        valueNow: _this.state.value[i]
      };
      if (_this.props.ariaValuetext) {
        props["aria-valuetext"] = typeof _this.props.ariaValuetext === "string" ? _this.props.ariaValuetext : _this.props.ariaValuetext(state);
      }
      return _this.props.renderThumb(props, state);
    };
    _this.renderTrack = (i, offsetFrom, offsetTo) => {
      const props = {
        key: _this.props.trackClassName + "-" + i,
        className: _this.props.trackClassName + " " + _this.props.trackClassName + "-" + i,
        style: _this.buildTrackStyle(offsetFrom, _this.state.upperBound - offsetTo)
      };
      const state = {
        index: i,
        value: prepareOutValue(_this.state.value)
      };
      return _this.props.renderTrack(props, state);
    };
    let value = sanitizeInValue(_props.value);
    if (!value.length) {
      value = sanitizeInValue(_props.defaultValue);
    }
    _this.pendingResizeTimeouts = [];
    const zIndices = [];
    for (let i = 0; i < value.length; i += 1) {
      value[i] = trimAlignValue(value[i], _props);
      zIndices.push(i);
    }
    _this.resizeObserver = null;
    _this.resizeElementRef = import_react.default.createRef();
    _this.state = {
      index: -1,
      upperBound: 0,
      sliderLength: 0,
      value,
      zIndices
    };
    return _this;
  }
  var _proto = ReactSlider2.prototype;
  _proto.componentDidMount = function componentDidMount() {
    if (typeof window !== "undefined") {
      this.resizeObserver = new ResizeObserver(this.handleResize);
      this.resizeObserver.observe(this.resizeElementRef.current);
      this.resize();
    }
  };
  ReactSlider2.getDerivedStateFromProps = function getDerivedStateFromProps(props, state) {
    const value = sanitizeInValue(props.value);
    if (!value.length) {
      return null;
    }
    if (state.pending) {
      return null;
    }
    return {
      value: value.map((item) => trimAlignValue(item, props))
    };
  };
  _proto.componentDidUpdate = function componentDidUpdate() {
    if (this.state.upperBound === 0) {
      this.resize();
    }
  };
  _proto.componentWillUnmount = function componentWillUnmount() {
    this.clearPendingResizeTimeouts();
    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
    }
  };
  _proto.onEnd = function onEnd(eventMap) {
    if (eventMap) {
      removeHandlers(eventMap);
    }
    if (this.hasMoved) {
      this.fireChangeEvent("onAfterChange");
    }
    this.setState({
      pending: false
    });
    this.hasMoved = false;
  };
  _proto.getValue = function getValue() {
    return prepareOutValue(this.state.value);
  };
  _proto.getClosestIndex = function getClosestIndex(pixelOffset) {
    let minDist = Number.MAX_VALUE;
    let closestIndex = -1;
    const {
      value
    } = this.state;
    const l = value.length;
    for (let i = 0; i < l; i += 1) {
      const offset = this.calcOffset(value[i]);
      const dist = Math.abs(pixelOffset - offset);
      if (dist < minDist) {
        minDist = dist;
        closestIndex = i;
      }
    }
    return closestIndex;
  };
  _proto.getMousePosition = function getMousePosition(e) {
    return [e["page" + this.axisKey()], e["page" + this.orthogonalAxisKey()]];
  };
  _proto.getTouchPosition = function getTouchPosition(e) {
    const touch = e.touches[0];
    return [touch["page" + this.axisKey()], touch["page" + this.orthogonalAxisKey()]];
  };
  _proto.getKeyDownEventMap = function getKeyDownEventMap() {
    return {
      keydown: this.onKeyDown,
      keyup: this.onKeyUp,
      focusout: this.onBlur
    };
  };
  _proto.getMouseEventMap = function getMouseEventMap() {
    return {
      mousemove: this.onMouseMove,
      mouseup: this.onMouseUp
    };
  };
  _proto.getTouchEventMap = function getTouchEventMap() {
    return {
      touchmove: this.onTouchMove,
      touchend: this.onTouchEnd
    };
  };
  _proto.getValueFromPosition = function getValueFromPosition(position) {
    const diffValue = position / (this.state.sliderLength - this.state.thumbSize) * (this.props.max - this.props.min);
    return trimAlignValue(this.state.startValue + diffValue, this.props);
  };
  _proto.getDiffPosition = function getDiffPosition(position) {
    let diffPosition = position - this.state.startPosition;
    if (this.props.invert) {
      diffPosition *= -1;
    }
    return diffPosition;
  };
  _proto.resize = function resize() {
    const {
      slider,
      thumb0: thumb
    } = this;
    if (!slider || !thumb) {
      return;
    }
    const sizeKey = this.sizeKey();
    const sliderRect = slider.getBoundingClientRect();
    const sliderSize = slider[sizeKey];
    const sliderMax = sliderRect[this.posMaxKey()];
    const sliderMin = sliderRect[this.posMinKey()];
    const thumbRect = thumb.getBoundingClientRect();
    const thumbSize = thumbRect[sizeKey.replace("client", "").toLowerCase()];
    const upperBound = sliderSize - thumbSize;
    const sliderLength = Math.abs(sliderMax - sliderMin);
    if (this.state.upperBound !== upperBound || this.state.sliderLength !== sliderLength || this.state.thumbSize !== thumbSize) {
      this.setState({
        upperBound,
        sliderLength,
        thumbSize
      });
    }
  };
  _proto.calcOffset = function calcOffset(value) {
    const range = this.props.max - this.props.min;
    if (range === 0) {
      return 0;
    }
    const ratio = (value - this.props.min) / range;
    return ratio * this.state.upperBound;
  };
  _proto.calcValue = function calcValue(offset) {
    const ratio = offset / this.state.upperBound;
    return ratio * (this.props.max - this.props.min) + this.props.min;
  };
  _proto.calcOffsetFromPosition = function calcOffsetFromPosition(position) {
    const {
      slider
    } = this;
    const sliderRect = slider.getBoundingClientRect();
    const sliderMax = sliderRect[this.posMaxKey()];
    const sliderMin = sliderRect[this.posMinKey()];
    const windowOffset = window["page" + this.axisKey() + "Offset"];
    const sliderStart = windowOffset + (this.props.invert ? sliderMax : sliderMin);
    let pixelOffset = position - sliderStart;
    if (this.props.invert) {
      pixelOffset = this.state.sliderLength - pixelOffset;
    }
    pixelOffset -= this.state.thumbSize / 2;
    return pixelOffset;
  };
  _proto.forceValueFromPosition = function forceValueFromPosition(position, callback) {
    const pixelOffset = this.calcOffsetFromPosition(position);
    const closestIndex = this.getClosestIndex(pixelOffset);
    const nextValue = trimAlignValue(this.calcValue(pixelOffset), this.props);
    const value = this.state.value.slice();
    value[closestIndex] = nextValue;
    for (let i = 0; i < value.length - 1; i += 1) {
      if (value[i + 1] - value[i] < this.props.minDistance) {
        return;
      }
    }
    this.fireChangeEvent("onBeforeChange");
    this.hasMoved = true;
    this.setState({
      value
    }, () => {
      callback(closestIndex);
      this.fireChangeEvent("onChange");
    });
  };
  _proto.clearPendingResizeTimeouts = function clearPendingResizeTimeouts() {
    do {
      const nextTimeout = this.pendingResizeTimeouts.shift();
      clearTimeout(nextTimeout);
    } while (this.pendingResizeTimeouts.length);
  };
  _proto.start = function start(i, position) {
    const thumbRef = this["thumb" + i];
    if (thumbRef) {
      thumbRef.focus();
    }
    const {
      zIndices
    } = this.state;
    zIndices.splice(zIndices.indexOf(i), 1);
    zIndices.push(i);
    this.setState((prevState) => ({
      startValue: prevState.value[i],
      startPosition: position !== void 0 ? position : prevState.startPosition,
      index: i,
      zIndices
    }));
  };
  _proto.moveUpByStep = function moveUpByStep(step) {
    if (step === void 0) {
      step = this.props.step;
    }
    const oldValue = this.state.value[this.state.index];
    const newValue = this.props.invert && this.props.orientation === "horizontal" ? oldValue - step : oldValue + step;
    const trimAlign = trimAlignValue(newValue, this.props);
    this.move(Math.min(trimAlign, this.props.max));
  };
  _proto.moveDownByStep = function moveDownByStep(step) {
    if (step === void 0) {
      step = this.props.step;
    }
    const oldValue = this.state.value[this.state.index];
    const newValue = this.props.invert && this.props.orientation === "horizontal" ? oldValue + step : oldValue - step;
    const trimAlign = trimAlignValue(newValue, this.props);
    this.move(Math.max(trimAlign, this.props.min));
  };
  _proto.move = function move(newValue) {
    const value = this.state.value.slice();
    const {
      index
    } = this.state;
    const {
      length
    } = value;
    const oldValue = value[index];
    if (newValue === oldValue) {
      return;
    }
    if (!this.hasMoved) {
      this.fireChangeEvent("onBeforeChange");
    }
    this.hasMoved = true;
    const {
      pearling,
      max,
      min,
      minDistance
    } = this.props;
    if (!pearling) {
      if (index > 0) {
        const valueBefore = value[index - 1];
        if (newValue < valueBefore + minDistance) {
          newValue = valueBefore + minDistance;
        }
      }
      if (index < length - 1) {
        const valueAfter = value[index + 1];
        if (newValue > valueAfter - minDistance) {
          newValue = valueAfter - minDistance;
        }
      }
    }
    value[index] = newValue;
    if (pearling && length > 1) {
      if (newValue > oldValue) {
        this.pushSucceeding(value, minDistance, index);
        trimSucceeding(length, value, minDistance, max);
      } else if (newValue < oldValue) {
        this.pushPreceding(value, minDistance, index);
        trimPreceding(length, value, minDistance, min);
      }
    }
    this.setState({
      value
    }, this.fireChangeEvent.bind(this, "onChange"));
  };
  _proto.pushSucceeding = function pushSucceeding(value, minDistance, index) {
    let i;
    let padding;
    for (i = index, padding = value[i] + minDistance; value[i + 1] !== null && padding > value[i + 1]; i += 1, padding = value[i] + minDistance) {
      value[i + 1] = alignValue(padding, this.props);
    }
  };
  _proto.pushPreceding = function pushPreceding(value, minDistance, index) {
    for (let i = index, padding = value[i] - minDistance; value[i - 1] !== null && padding < value[i - 1]; i -= 1, padding = value[i] - minDistance) {
      value[i - 1] = alignValue(padding, this.props);
    }
  };
  _proto.axisKey = function axisKey() {
    if (this.props.orientation === "vertical") {
      return "Y";
    }
    return "X";
  };
  _proto.orthogonalAxisKey = function orthogonalAxisKey() {
    if (this.props.orientation === "vertical") {
      return "X";
    }
    return "Y";
  };
  _proto.posMinKey = function posMinKey() {
    if (this.props.orientation === "vertical") {
      return this.props.invert ? "bottom" : "top";
    }
    return this.props.invert ? "right" : "left";
  };
  _proto.posMaxKey = function posMaxKey() {
    if (this.props.orientation === "vertical") {
      return this.props.invert ? "top" : "bottom";
    }
    return this.props.invert ? "left" : "right";
  };
  _proto.sizeKey = function sizeKey() {
    if (this.props.orientation === "vertical") {
      return "clientHeight";
    }
    return "clientWidth";
  };
  _proto.fireChangeEvent = function fireChangeEvent(event) {
    if (this.props[event]) {
      this.props[event](prepareOutValue(this.state.value), this.state.index);
    }
  };
  _proto.buildThumbStyle = function buildThumbStyle(offset, i) {
    const style = {
      position: "absolute",
      touchAction: "none",
      willChange: this.state.index >= 0 ? this.posMinKey() : void 0,
      zIndex: this.state.zIndices.indexOf(i) + 1
    };
    style[this.posMinKey()] = offset + "px";
    return style;
  };
  _proto.buildTrackStyle = function buildTrackStyle(min, max) {
    const obj = {
      position: "absolute",
      willChange: this.state.index >= 0 ? this.posMinKey() + "," + this.posMaxKey() : void 0
    };
    obj[this.posMinKey()] = min;
    obj[this.posMaxKey()] = max;
    return obj;
  };
  _proto.buildMarkStyle = function buildMarkStyle(offset) {
    var _ref;
    return _ref = {
      position: "absolute"
    }, _ref[this.posMinKey()] = offset, _ref;
  };
  _proto.renderThumbs = function renderThumbs(offset) {
    const {
      length
    } = offset;
    const styles = [];
    for (let i = 0; i < length; i += 1) {
      styles[i] = this.buildThumbStyle(offset[i], i);
    }
    const res = [];
    for (let i = 0; i < length; i += 1) {
      res[i] = this.renderThumb(styles[i], i);
    }
    return res;
  };
  _proto.renderTracks = function renderTracks(offset) {
    const tracks = [];
    const lastIndex = offset.length - 1;
    tracks.push(this.renderTrack(0, 0, offset[0]));
    for (let i = 0; i < lastIndex; i += 1) {
      tracks.push(this.renderTrack(i + 1, offset[i], offset[i + 1]));
    }
    tracks.push(this.renderTrack(lastIndex + 1, offset[lastIndex], this.state.upperBound));
    return tracks;
  };
  _proto.renderMarks = function renderMarks() {
    let {
      marks
    } = this.props;
    const range = this.props.max - this.props.min + 1;
    if (typeof marks === "boolean") {
      marks = Array.from({
        length: range
      }).map((_, key) => key);
    } else if (typeof marks === "number") {
      marks = Array.from({
        length: range
      }).map((_, key) => key).filter((key) => key % marks === 0);
    }
    return marks.map(parseFloat).sort((a, b) => a - b).map((mark) => {
      const offset = this.calcOffset(mark);
      const props = {
        key: mark,
        className: this.props.markClassName,
        style: this.buildMarkStyle(offset)
      };
      return this.props.renderMark(props);
    });
  };
  _proto.render = function render() {
    const offset = [];
    const {
      value
    } = this.state;
    const l = value.length;
    for (let i = 0; i < l; i += 1) {
      offset[i] = this.calcOffset(value[i], i);
    }
    const tracks = this.props.withTracks ? this.renderTracks(offset) : null;
    const thumbs = this.renderThumbs(offset);
    const marks = this.props.marks ? this.renderMarks() : null;
    return import_react.default.createElement("div", {
      ref: (r) => {
        this.slider = r;
        this.resizeElementRef.current = r;
      },
      style: {
        position: "relative"
      },
      className: this.props.className + (this.props.disabled ? " disabled" : ""),
      onMouseDown: this.onSliderMouseDown,
      onClick: this.onSliderClick
    }, tracks, thumbs, marks);
  };
  return ReactSlider2;
}(import_react.default.Component);
ReactSlider.displayName = "ReactSlider";
ReactSlider.defaultProps = {
  min: 0,
  max: 100,
  step: 1,
  pageFn: (step) => step * 10,
  minDistance: 0,
  defaultValue: 0,
  orientation: "horizontal",
  className: "slider",
  thumbClassName: "thumb",
  thumbActiveClassName: "active",
  trackClassName: "track",
  markClassName: "mark",
  withTracks: true,
  pearling: false,
  disabled: false,
  snapDragDisabled: false,
  invert: false,
  marks: [],
  renderThumb: (props) => import_react.default.createElement("div", _extends({}, props, {
    __self: ReactSlider,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 353,
      columnNumber: 31
    }
  })),
  renderTrack: (props) => import_react.default.createElement("div", _extends({}, props, {
    __self: ReactSlider,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 354,
      columnNumber: 31
    }
  })),
  renderMark: (props) => import_react.default.createElement("span", _extends({}, props, {
    __self: ReactSlider,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 355,
      columnNumber: 30
    }
  }))
};
ReactSlider.propTypes = true ? {
  /**
   * The minimum value of the slider.
   */
  min: import_prop_types.default.number,
  /**
   * The maximum value of the slider.
   */
  max: import_prop_types.default.number,
  /**
   * Value to be added or subtracted on each step the slider makes.
   * Must be greater than zero.
   * `max - min` should be evenly divisible by the step value.
   */
  step: import_prop_types.default.number,
  /**
   * The result of the function is the value to be added or subtracted
   * when the `Page Up` or `Page Down` keys are pressed.
   *
   * The current `step` value will be passed as the only argument.
   * By default, paging will modify `step` by a factor of 10.
   */
  pageFn: import_prop_types.default.func,
  /**
   * The minimal distance between any pair of thumbs.
   * Must be positive, but zero means they can sit on top of each other.
   */
  minDistance: import_prop_types.default.number,
  /**
   * Determines the initial positions of the thumbs and the number of thumbs.
   *
   * If a number is passed a slider with one thumb will be rendered.
   * If an array is passed each value will determine the position of one thumb.
   * The values in the array must be sorted.
   */
  defaultValue: import_prop_types.default.oneOfType([import_prop_types.default.number, import_prop_types.default.arrayOf(import_prop_types.default.number)]),
  /**
   * Like `defaultValue` but for
   * [controlled components](http://facebook.github.io/react/docs/forms.html#controlled-components).
   */
  // eslint-disable-next-line zillow/react/require-default-props
  value: import_prop_types.default.oneOfType([import_prop_types.default.number, import_prop_types.default.arrayOf(import_prop_types.default.number)]),
  /**
   * Determines whether the slider moves horizontally (from left to right)
   * or vertically (from top to bottom).
   */
  orientation: import_prop_types.default.oneOf(["horizontal", "vertical"]),
  /**
   * The css class set on the slider node.
   */
  className: import_prop_types.default.string,
  /**
   * The css class set on each thumb node.
   *
   * In addition each thumb will receive a numbered css class of the form
   * `${thumbClassName}-${i}`, e.g. `thumb-0`, `thumb-1`, ...
   */
  thumbClassName: import_prop_types.default.string,
  /**
   * The css class set on the thumb that is currently being moved.
   */
  thumbActiveClassName: import_prop_types.default.string,
  /**
   * If `true` tracks between the thumbs will be rendered.
   */
  withTracks: import_prop_types.default.bool,
  /**
   * The css class set on the tracks between the thumbs.
   * In addition track fragment will receive a numbered css class of the form
   * `${trackClassName}-${i}`, e.g. `track-0`, `track-1`, ...
   */
  trackClassName: import_prop_types.default.string,
  /**
   * If `true` the active thumb will push other thumbs
   * within the constraints of `min`, `max`, `step` and `minDistance`.
   */
  pearling: import_prop_types.default.bool,
  /**
   * If `true` the thumbs can't be moved.
   */
  disabled: import_prop_types.default.bool,
  /**
   * Disables thumb move when clicking the slider track
   */
  snapDragDisabled: import_prop_types.default.bool,
  /**
   * Inverts the slider.
   */
  invert: import_prop_types.default.bool,
  /**
   * Shows passed marks on the track, if true it shows all the marks,
   * if an array of numbers it shows just the passed marks, if a number is passed
   * it shows just the marks in that steps: like passing 3 shows the marks 3, 6, 9
   */
  marks: import_prop_types.default.oneOfType([import_prop_types.default.arrayOf(import_prop_types.default.number), import_prop_types.default.bool, import_prop_types.default.number]),
  /**
   * The css class set on the marks.
   */
  markClassName: import_prop_types.default.string,
  /**
   * Callback called before starting to move a thumb. The callback will only be called if the
   * action will result in a change. The function will be called with two arguments, the first
   * being the initial value(s) the second being thumb index.
   */
  // eslint-disable-next-line max-len
  // eslint-disable-next-line zillow/react/require-default-props, zillow/react/no-unused-prop-types
  onBeforeChange: import_prop_types.default.func,
  /**
   * Callback called on every value change.
   * The function will be called with two arguments, the first being the new value(s)
   * the second being thumb index.
   */
  // eslint-disable-next-line max-len
  // eslint-disable-next-line zillow/react/require-default-props, zillow/react/no-unused-prop-types
  onChange: import_prop_types.default.func,
  /**
   * Callback called only after moving a thumb has ended. The callback will only be called if
   * the action resulted in a change. The function will be called with two arguments, the
   * first being the result value(s) the second being thumb index.
   */
  // eslint-disable-next-line max-len
  // eslint-disable-next-line zillow/react/require-default-props, zillow/react/no-unused-prop-types
  onAfterChange: import_prop_types.default.func,
  /**
   * Callback called when the the slider is clicked (thumb or tracks).
   * Receives the value at the clicked position as argument.
   */
  // eslint-disable-next-line zillow/react/require-default-props
  onSliderClick: import_prop_types.default.func,
  /**
   * aria-label for screen-readers to apply to the thumbs.
   * Use an array for more than one thumb.
   * The length of the array must match the number of thumbs in the value array.
   */
  // eslint-disable-next-line zillow/react/require-default-props
  ariaLabel: import_prop_types.default.oneOfType([import_prop_types.default.string, import_prop_types.default.arrayOf(import_prop_types.default.string)]),
  /**
   * aria-labelledby for screen-readers to apply to the thumbs.
   * Used when slider rendered with separate label.
   * Use an array for more than one thumb.
   * The length of the array must match the number of thumbs in the value array.
   */
  // eslint-disable-next-line zillow/react/require-default-props
  ariaLabelledby: import_prop_types.default.oneOfType([import_prop_types.default.string, import_prop_types.default.arrayOf(import_prop_types.default.string)]),
  /**
   * aria-valuetext for screen-readers.
   * Can be a static string, or a function that returns a string.
   * The function will be passed a single argument,
   * an object with the following properties:
   *
   *     state => `Value: ${state.value}`
   *
   * - `state.index` {`number`} the index of the thumb
   * - `state.value` {`number` | `array`} the current value state
   * - `state.valueNow` {`number`} the value of the thumb (i.e. aria-valuenow)
   */
  // eslint-disable-next-line zillow/react/require-default-props
  ariaValuetext: import_prop_types.default.oneOfType([import_prop_types.default.string, import_prop_types.default.func]),
  /**
   * Provide a custom render function for the track node.
   * The render function will be passed two arguments,
   * an object with props that should be added to your handle node,
   * and an object with track and slider state:
   *
   *     (props, state) => <div {...props} />
   *
   * - `props` {`object`} props to be spread into your track node
   * - `state.index` {`number`} the index of the track
   * - `state.value` {`number` | `array`} the current value state
   */
  renderTrack: import_prop_types.default.func,
  /**
   * Provide a custom render function for dynamic thumb content.
   * The render function will be passed two arguments,
   * an object with props that should be added to your thumb node,
   * and an object with thumb and slider state:
   *
   *     (props, state) => <div {...props} />
   *
   * - `props` {`object`} props to be spread into your thumb node
   * - `state.index` {`number`} the index of the thumb
   * - `state.value` {`number` | `array`} the current value state
   * - `state.valueNow` {`number`} the value of the thumb (i.e. aria-valuenow)
   */
  // eslint-disable-next-line zillow/react/require-default-props
  renderThumb: import_prop_types.default.func,
  /**
   * Provide a custom render function for the mark node.
   * The render function will be passed one argument,
   * an object with props that should be added to your handle node
   *
   *     (props) => <span {...props} />
   *
   * - `props` {`object`} props to be spread into your track node
   */
  renderMark: import_prop_types.default.func
} : {};
var ReactSlider$1 = ReactSlider;
export {
  ReactSlider$1 as default
};
/*! Bundled license information:

react-is/cjs/react-is.development.js:
  (** @license React v16.13.1
   * react-is.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

object-assign/index.js:
  (*
  object-assign
  (c) Sindre Sorhus
  @license MIT
  *)
*/
//# sourceMappingURL=react-slider.js.map
