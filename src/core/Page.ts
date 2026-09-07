import { Component } from "./Component.js";

export abstract class Page extends Component {
    override onMount(): void {
        this.onPageReady();
    }
    override onUnMount(): void {}

    onPageReady() {
        // js ko execute karta hai
    }
}