/// <reference path="@types/connect-mongodb-session/index.d.ts" />
import * as cmongo from 'connect-mongodb-session';
import * as express from 'express';
import s = require('express-session');
/**
 * Options
 */
export interface Options {
    store: cmongo.ConnectionInfo;
    session: s.SessionOptions;
}
/**
 * session middleware.
 */
export declare const session: (opts: Options) => express.Handler;
