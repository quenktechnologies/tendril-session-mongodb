/// <reference types="express-session" />
declare module 'connect-mongodb-session' {

import session = require('express-session');
import * as express from 'express';
import { MongoClient, MongoClientOptions } from 'mongodb'

declare function connect(fn: (options?: session.SessionOptions) =>
    express.RequestHandler): connectMongodbSession.MongoDBStore

export interface MongoDBStore extends session.Store {
    client: MongoClient
    new(connection?: ConnectionInfo, callback?: (error: Error) => void): MongoDBStore
}

export interface ConnectionInfo {
    idField?: string
    collection: string
    connectionOptions?: MongoClientOptions
    databaseName?: string
    expires?: number
    uri: string
}

export = connect;

}
