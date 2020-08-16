"use strict";
///<reference path="@types/connect-mongodb-session/index.d.ts"/>
Object.defineProperty(exports, "__esModule", { value: true });
exports.provider = exports.MongoDBProvider = void 0;
var cmongo = require("connect-mongodb-session");
var type_1 = require("@quenk/noni/lib/data/type");
var future_1 = require("@quenk/noni/lib/control/monad/future");
/**
 * MongoDBProvider for using MongoDB as the store for tendril session data.
 */
var MongoDBProvider = /** @class */ (function () {
    function MongoDBProvider() {
    }
    MongoDBProvider.prototype.create = function (expressSession, opts) {
        var Cons = cmongo(expressSession);
        opts = opts ? opts : {};
        if (!type_1.isString(opts.uri))
            return uriNotConfiguredError();
        return future_1.pure(new Cons(opts));
    };
    return MongoDBProvider;
}());
exports.MongoDBProvider = MongoDBProvider;
var uriNotConfiguredError = function () {
    return future_1.raise(new Error('tendril-session-mongodb: No uri specified!'));
};
exports.provider = new MongoDBProvider();
//# sourceMappingURL=index.js.map