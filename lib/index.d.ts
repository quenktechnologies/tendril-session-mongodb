/// <reference path="@types/connect-mongodb-session/index.d.ts" />
import * as session from 'express-session';
import { Future } from '@quenk/noni/lib/control/monad/future';
import { SessionFunc, SessionStoreProvider } from '@quenk/tendril/lib/app/middleware/session/store/provider';
/**
 * MongoDBProvider for using MongoDB as the store for tendril session data.
 */
export declare class MongoDBProvider implements SessionStoreProvider {
    create(expressSession: SessionFunc, opts?: object): Future<session.Store>;
}
export declare const provider: MongoDBProvider;
