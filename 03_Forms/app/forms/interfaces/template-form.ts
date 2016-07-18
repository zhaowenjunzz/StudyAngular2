interface ITemplateForm {
    name: string;

    isSaved: boolean;

    selectedCode: number;

    option: string;
}

class MyTemplateForm implements ITemplateForm {

    constructor(
        public name: string,
        public isSaved: boolean,
        public selectedCode: number,
        public option: string
    ) { }

}

export {
ITemplateForm,
MyTemplateForm,
};
