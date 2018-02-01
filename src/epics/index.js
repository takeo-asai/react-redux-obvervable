import 'rxjs'

import { combineEpics } from 'redux-observable';
import { pong } from '../containers/PingPong/service';

const pongEpic = (action$) => action$.ofType('PING')
    .mergeMap(x => pong(2))
    .map(_ => {return {type: 'PONG'}})

export const epics = combineEpics(pongEpic);

