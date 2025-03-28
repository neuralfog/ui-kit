import { Component, html, type Template } from '@neuralfog/elemix';
import { component } from '@neuralfog/elemix/decorators';

@component()
export class UiInput extends Component {
    test = 'hello uiinput';
    template(): Template {
        return html`<input type="text" placeholder="hello there!" />`;
    }
}
