/// <reference path="@types/connect-mongodb-session/index.d.ts" />
import * as session from 'express-session';
import * as cmongo from 'connect-mongodb-session';
import { Maybe } from '@quenk/noni/lib/data/maybe';
import { Future } from '@quenk/noni/lib/control/monad/future';
import { SessionFunc, SessionStoreConnection } from '@quenk/tendril/lib/app/middleware/session/store/connection';
/**
 * MongoDBConnection allows MongoDB to be used as tendril session stores.
 */
export declare class MongoDBConnection implements SessionStoreConnection {
    expressSession: SessionFunc;
    opts?: object | undefined;
    constructor(expressSession: SessionFunc, opts?: object | undefined);
    client: Maybe<cmongo.MongoDBStore>;
    open(): Future<void>;
    checkout(): Future<session.Store>;
    close(): Future<void>;
}
export declare const provider: (expressSession: SessionFunc, opts?: object | undefined) => MongoDBConnection;
