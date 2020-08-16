///<reference path="@types/connect-mongodb-session/index.d.ts"/>

import * as session from 'express-session';
import * as cmongo from 'connect-mongodb-session';

import { MongoDBStore } from 'connect-mongodb-session';

import { isString } from '@quenk/noni/lib/data/type';
import { Future, raise, pure } from '@quenk/noni/lib/control/monad/future';
import {
    SessionFunc,
    SessionStoreProvider
} from '@quenk/tendril/lib/app/middleware/session/store/provider';

/**
 * MongoDBProvider for using MongoDB as the store for tendril session data.
 */
export class MongoDBProvider implements SessionStoreProvider {

    create(expressSession: SessionFunc, opts?: object): Future<session.Store> {

        let Cons: MongoDBStore = cmongo(expressSession);

        opts = opts ? opts : {};

        if (!isString((<{ uri: string }>opts).uri))
            return uriNotConfiguredError();

        return pure(<session.Store>new Cons(<cmongo.ConnectionInfo>opts));

    }

}

const uriNotConfiguredError = (): Future<session.Store> =>
    raise(new Error('tendril-session-mongodb: No uri specified!'));

export const provider = new MongoDBProvider();
