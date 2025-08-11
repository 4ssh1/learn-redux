export interface Post{
    id: string;
    title: string;
    content: string;
}

export interface FormField extends HTMLFormControlsCollection {
    title: HTMLInputElement
    content: HTMLTextAreaElement
}

export interface FormElement extends HTMLFormElement {
    readonly elements: FormField
}