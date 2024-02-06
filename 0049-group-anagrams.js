var groupAnagrams = function(strs) {
    const map = {};

    strs.forEach(str => {
        const sorted = str.split('').sort().join('');
        
        if (map[sorted]) {
            map[sorted].push(str);
        } else {
            map[sorted] = [str];
        }
    });

    return Object.values(map);
};