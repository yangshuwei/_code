
export function lifecycleMixin(Vue){
    Vue.prototype._update = function(){
        const vm = this;
        // vm._render()
    }
}

export function mountComponent(vm,el){
    vm._update(vm._render());
}