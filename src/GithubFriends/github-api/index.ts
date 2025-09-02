import {Octokit} from '@octokit/rest';
import {Info} from '../types';

let octokit: Octokit;

const sleep = (n: number) => new Promise(resolve => setTimeout(resolve, n));

const withDelayAndRetry = <T>(asyncFunction: T): T => {
    // let retry = 0;
    const func = async (params: any) => {
        try {
            // 为了防止 github ban ip，所有请求先 delay 一段时间
            await sleep(100);
            // @ts-ignore
            const result = await asyncFunction(params);
            return result;
        }
        catch {
            // test retry
            // if (retry < 3) {
            //     retry ++;
            //     func(params);
            // }
        }
    };
    return func as T;
};

export const getMeInfo = async (token: string) => {
    octokit = new Octokit({auth: token});
    const {data: me} = await octokit.rest.users.getAuthenticated();
    return me;
};

export const getUserApi = (id: string) => {
    const apiGetInfo = async (): Promise<Info> => {
        const {data: info} = await octokit.rest.users.getByUsername({username: id});
        return info;
    };
    const apiGetFollowers = async (page = 1): Promise<string[]> => {
        const {data: list} = await octokit.rest.users.listFollowersForUser({
            username: id,
            page,
            per_page: 100,
        });
        return list.map((item: any) => item.login);
    };
    const apiGetFollowings = async (page = 1): Promise<string[]> => {
        const {data: list} = await octokit.rest.users.listFollowingForUser({
            username: id,
            page,
            per_page: 100,
        });
        return list.map((item: any) => item.login);
    };
    return {
        apiGetInfo: withDelayAndRetry(apiGetInfo),
        apiGetFollowers: withDelayAndRetry(apiGetFollowers),
        apiGetFollowings: withDelayAndRetry(apiGetFollowings),
    };
};
