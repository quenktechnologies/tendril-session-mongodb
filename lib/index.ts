///<reference path="@types/connect-mongodb-session/index.d.ts"/>
import * as cmongo from 'connect-mongodb-session';
import * as express from 'express';
import s = require('express-session');
import { MongoDBStore } from 'connect-mongodb-session';
import { merge } from '@quenk/noni/lib/data/record';

const Cons: MongoDBStore = cmongo(s);

/**
 * Options
 */
export interface Options {

    store: cmongo.ConnectionInfo,

    session: s.SessionOptions
}

/**
 * session middleware.
 */
export const session = (opts: Options): express.Handler =>
    s(merge(opts.session, {
        store: new Cons(opts.store)
    }));
