import {get} from './index';

export default {
    getTopics: () => {
        return get('/topics', {})
    }
}