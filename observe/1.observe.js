class Subject{
    constructor(name){
        this.name = name;
        this.observes = [];
        this.state = "";
    }
    attach(o){
        this.observes.push(o)
    }
    setState(newState){
        this.state = newState
        this.observes.forEach(o=>o.update(this))
    }
}
class Observe{
    constructor(name){
        this.name = name
    }
    update(p){
        console.log(`${p.name}跟${this.name}说：${p.state}`)
    }
}

const p = new Subject('大屁');
const o1 = new Observe('爸爸');
const o2 = new Observe('妈妈');

p.attach(o1)
p.attach(o2)
p.setState('我饿了')
p.setState('我想撒尿')