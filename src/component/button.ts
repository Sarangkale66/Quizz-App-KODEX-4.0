import { Component } from "../core/Component.js";

export class Button extends Component {
    render(): string {
        this._InjectStyle();
        return `
         <button id="btn">Click Me!!!</button>
        `;
    }
    style(): string {
        return `
          #btn {
            padding: 3px 5px;
            border-radius: 1vh;
            border: 1px solid black;
          }
        `
    }
    override onMount(): void {
      document.querySelector("#btn")?.addEventListener("click",()=>{
        console.log("clicked")
      })
    }
}