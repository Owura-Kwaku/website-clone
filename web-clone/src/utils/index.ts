
const buildQueryParams = (filter) => {
    const queryParams: string[] = [];

    for (const key in filter) {
        if (filter[key] === null || filter[key] === '' || filter[key] === undefined) {
            continue;
        }
        const format = `${key}=${filter[key]}`;
        queryParams.push(format);
    }

    return queryParams;
};

const filterQueryParams = (query) => {
    const obj = {} as any;
    for (const param in query) {
        if (query[param]) {
            obj[param] = query[param];
        }
    }
    return obj;
};

export {
    buildQueryParams,
    filterQueryParams
}
