function groupBy( array , f ) {
    let groups = {};
    array.forEach( function( o,index ) {
        let group = JSON.stringify( f(o) );
        groups[group] = groups[group] || [];
        groups[group].push( o );
        console.log('`````````````')
      console.log(groups,`----`,index)
    });
    return Object.keys(groups).map( function( group ) {
        return groups[group];
    });
}

let list = [
    {"name": "John","Average":15,"High":10,"DtmStamp":1358226000000},
    {"name": "Jane","Average":16,"High":92,"DtmStamp":1358226000000},
    {"name": "Jane","Average":17,"High":45,"DtmStamp":1358226000000},
    {"name": "John","Average":18,"High":87,"DtmStamp":1358226000000},
    {"name": "Jane","Average":15,"High":10,"DtmStamp":1358226060000},
    {"name": "John","Average":16,"High":87,"DtmStamp":1358226060000},
    {"name": "John","Average":17,"High":45,"DtmStamp":1358226060000},
    {"name": "Jane","Average":18,"High":92,"DtmStamp":1358226060000}
];

let sorted = groupBy(list, function(item){
    return [item.name];
});
// console.log(sorted)

Object.create = function(obj){
  function Fn(){}
  Fn.prototype = obj;
  return new Fn();
}

function new1(Fn){
  let obj = {}
  
}