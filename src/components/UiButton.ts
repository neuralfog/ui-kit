import { Component, html, type Template } from '@neuralfog/elemix';
import { component } from '@neuralfog/elemix/decorators';
import { UiInput } from '#src/components/UiInput';

type Emits = {
    click: () => void;
};

@component()
export class UiButton extends Component<unknown, Emits> {
    test = 'hello uibutton';
    template(): Template {
        return html`
            <button @click="${this.emits.click}">Button</button>
            <UiInput />
        `;
    }
}
