import { Button } from "../component/button.js";
import { Card } from "../component/card.js";
import { Page } from "../core/Page.js";

// Component --  Page  -- HomePage
// onMount();     onPageReady();
// onUMount();
export class HomePage extends Page {
    private _button = new Button();
    private _card = new Card();

    render(): string {

        this._card._props = { buttonName: "Abdur Bhai kaa Card" };

        return `<div>
          <h1> Hello World </h1>
          ${this._button.render()}
          ${this._card.render()}
        </div>`
    }
    style(): string {
        return ``
    }
    onPageReady(): void {
       this._button.onMount();
       this._card.onMount();
    }
}