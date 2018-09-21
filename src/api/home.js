import {get} from './index';

export default {
    getTopics: (payload)=> {
        return get('/topics', payload)
    }
}