import { Component } from "../core/Component.js";
import { Button } from "./button.js";

interface ICardProps {
    buttonName: string;
}

export class Card extends Component {
    public _props: ICardProps | null = null 
    private _button = new Button();

    render(): string {
        if( !this._props || !this._props?.buttonName) return '';

       return  `<div class="h-100 w-1/3 border-border border-1 bg-zinc-300 border-black">
            <h1>${this._props?.buttonName}</h1>
            ${this._button.render()}
       </div>`; 
    }
    style(): string {
        return ``;
    }

    onMount(): void {
        this._button.onMount();
    }

}