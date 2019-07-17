"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
///<reference path="@types/connect-mongodb-session/index.d.ts"/>
var cmongo = require("connect-mongodb-session");
var s = require("express-session");
var record_1 = require("@quenk/noni/lib/data/record");
var Cons = cmongo(s);
/**
 * session middleware.
 */
exports.session = function (opts) {
    return s(record_1.merge(opts.session, {
        store: new Cons(opts.store)
    }));
};
//# sourceMappingURL=index.js.map