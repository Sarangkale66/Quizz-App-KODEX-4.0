import { Component } from "../core/Component.js";
import { useState } from "../core/useState.js";

export class Button extends Component {
    private static _counter = 0;
    private _id = `btn-${++Button._counter}`;
    private _count = useState(0, this);

    render(): string {
        // style inject karo
        this._InjectStyle();
        return `
         <button id="${this._id}" class="btn">Click Me!!!: ${this._count.get()}</button>
        `;
    }
    style(): string {
        return `
          .btn {
            padding: 3px 5px;
            border-radius: 1vh;
            border: 1px solid black;
          }
        `
    }
    override onMount(): void {
      this._element = document.querySelector(`#${this._id}`);
      const el = this._element;
      el?.addEventListener("click", () => {
        console.log("clicked");
        const count = this._count.get() as unknown as number;
        this._count.set(count + 1);
      })
    }
}