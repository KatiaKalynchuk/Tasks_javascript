const argToObject = (arg) => {
    let arr = arg.split('.'),
        obj = {},
        buff = {};
    obj[arr.pop()] = null;

    while(arr.length) {
        buff = obj;
        obj = {};
        obj[arr.pop()] = buff;
    }
    return obj;
};

console.log(argToObject('a.b.c.d'));
