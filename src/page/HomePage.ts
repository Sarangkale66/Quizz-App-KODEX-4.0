import { Button } from "../component/button.js";
import { Page } from "../core/Page.js";

// Component --  Page  -- HomePage
// onMount();     onPageReady();
// onUMount();
export class HomePage extends Page {
    private _button = new Button();

    render(): string {
        return `<div>
          <h1> Hello World </h1>
          ${this._button.render()}
        </div>`
    }
    style(): string {
        return ``
    }
    onPageReady(): void {
       this._button.onMount();
    }
}