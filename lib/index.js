"use strict";
///<reference path="@types/connect-mongodb-session/index.d.ts"/>
Object.defineProperty(exports, "__esModule", { value: true });
exports.provider = exports.MongoDBConnection = void 0;
var cmongo = require("connect-mongodb-session");
var type_1 = require("@quenk/noni/lib/data/type");
var maybe_1 = require("@quenk/noni/lib/data/maybe");
var future_1 = require("@quenk/noni/lib/control/monad/future");
/**
 * MongoDBConnection allows MongoDB to be used as tendril session stores.
 */
var MongoDBConnection = /** @class */ (function () {
    function MongoDBConnection(expressSession, opts) {
        this.expressSession = expressSession;
        this.opts = opts;
        this.client = maybe_1.nothing();
    }
    MongoDBConnection.prototype.open = function () {
        var _this = this;
        var _a = this, opts = _a.opts, expressSession = _a.expressSession;
        return future_1.fromCallback(function (cb) {
            var Cons = cmongo(expressSession);
            if (!type_1.isString(opts.uri))
                return cb(uriNotConfiguredErr());
            _this.client = maybe_1.just(new Cons(opts));
            cb(null);
        });
    };
    MongoDBConnection.prototype.checkout = function () {
        return (this.client.isNothing() ?
            future_1.raise(notConnectedErr()) :
            future_1.pure(this.client.get()));
    };
    MongoDBConnection.prototype.close = function () {
        var _this = this;
        if (this.client.isNothing())
            return future_1.pure(undefined);
        return future_1.fromCallback(function (cb) { return _this.client.get().client.close(cb); });
    };
    return MongoDBConnection;
}());
exports.MongoDBConnection = MongoDBConnection;
var uriNotConfiguredErr = function () { return new Error('tendril-session-mongodb: No uri specified!'); };
var notConnectedErr = function () { return new Error('tendril-session-mongodb: Cannot checkout client, not initialized!'); };
var provider = function (expressSession, opts) {
    return new MongoDBConnection(expressSession, opts);
};
exports.provider = provider;
//# sourceMappingURL=index.js.map