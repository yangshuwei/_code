

const obj = {
    name: 123,
    age:null,
    child: {
        name: 'child'
    }
};

function deepClone(obj) {
    const data = {}
    const arr = [{
        parent: data,
        key: null,
        data: obj
    }];

    while (arr.length) {
        const node = arr.shift();
        let parent = node.parent;
        let data = node.data;
        let key = node.key;

        let result = parent;
        if (key) {
            result = parent[key] = {};
        }

        for (let i in data) {
            if (typeof data[i] && typeof data[i] === 'object') {
                arr.push({
                    key: i,
                    parent: result,
                    data: data[i]
                })
            } else {
                result[i] = data[i];
            }
        }

    }

    return data;



}

console.log(deepClone(obj));