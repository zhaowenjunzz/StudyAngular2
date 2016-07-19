interface IDynamicForm {
    name: string;
    confirmName: string;
}

class MyDynamicForm implements IDynamicForm {
    constructor(
        public name: string,
        public confirmName: string
    ) { }
}

export {
IDynamicForm,
MyDynamicForm,
}
