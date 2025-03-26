import { Component, html, type Template } from '@neuralfog/elemix';
import { component } from '@neuralfog/elemix/decorators';

type Emits = {
    click: () => void;
};

@component()
export class UiButton extends Component<unknown, Emits> {
    template(): Template {
        return html`<button @click="${this.emits.click}">Button</button>`;
    }
}
