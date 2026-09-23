// grand parent
export abstract class Component {
    protected _element:HTMLElement|null = null ;
    protected _customCss:HTMLStyleElement|null = null;

    abstract render():string // html string return hogi
    abstract style():string // css string return hogi

    // life cycle method
    mount(parent: HTMLElement) { // root <---- htmlElement
        this._InjectStyle();
        const el = this._createElement();
        if(el) {
            parent.appendChild(el);
            this._element = el;
        }
        this.onMount();
    }

    unmount() {
        this.onUnMount();
        this._element?.remove();
        this._element = null;
    }
    // unmount mount
    // replace
    rerender(): void {
        this.onUnMount();

        const newElement = this._createElement();

        if (!newElement) return;

        this._element?.replaceWith(newElement);

        this._element = newElement;

        this.onMount();
    }
    
    // decleration of method
    onMount() {}

    onUnMount() {}

    private _createElement(): HTMLElement | null {
        // template
        const template = document.createElement("template");
        template.innerHTML = this.render().trim(); // string
        return template.content.firstElementChild as HTMLElement;
    }

    protected _InjectStyle():void {
        const css = this.style().trim();
        if(!css) return;
        const key = this.constructor.name;
        if(document.querySelector(`style[data-id=${key}]`)) return;
        this._customCss = document.createElement("style");
        this._customCss.dataset["id"] = key;
        this._customCss.textContent = css;
        document.head.appendChild(this._customCss);
    }

}

