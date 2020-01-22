const obj = {
    name:'7yue',
    age:18,
    toJSON: function(){
       return {
           name1:'8yue'
       }
    }
}

console.log(JSON.stringify(obj))