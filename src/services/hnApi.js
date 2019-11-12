import axios from 'axios'
import {selectFields} from '../utils/selectFields'

export const baseUrl = "https://hacker-news.firebaseio.com/";
export const newStoriesUrl = `${baseUrl}v0/newstories.json`;
export const storyUrl = `${baseUrl}v0/item/`;

export const getStory = async (storyId) => {
    const result = await axios
        .get(`${storyUrl + storyId}.json`)
        .then(({data}) => data && selectFields(data));
        return result;
}

export const getStoryIds = async () => {
    const result = await axios.get(newStoriesUrl).then( ({data}) => data);
    return result;
}