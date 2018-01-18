const baseType = {
    DOING:'DOING',
    DONE:'DONE',
    ERROR:'ERROR'
};

const fastCreateActionType = (baseStr) => {
    let obj = {};
    for(let typeName in baseType) {
        obj[typeName] = baseStr + '_' + typeName
    }
    return obj;
};

export const LOGIN = fastCreateActionType("LOGIN");
export const CHAT = fastCreateActionType("CHAT");









