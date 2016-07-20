import {Directive, HostListener, Input, ElementRef, OnDestroy } from "@angular/core";

@Directive({
    selector: "[simple-tooltip]",
})
export default class SimpleTooltipDirective implements OnDestroy {
    @Input("simple-tooltip") public tooltipMessage: string;

    private _div: HTMLDivElement;

    constructor(private _ele: ElementRef) {
    }

    @HostListener("mouseover", ["$event"])
    public onMouseOver(event: MouseEvent): void {
        if (!this._div) {
            const height = this._ele.nativeElement.offsetHeight;
            const width = this._ele.nativeElement.offsetWidth;
            const div = document.createElement("div");

            div.setAttribute("class", "tooltip fade top in");
            div.setAttribute("style", `padding:10;
            background-color:#f1f1f1;display:block;
            top:${event.clientY - event.offsetY - height};
            left:${event.clientX - event.offsetX + width / 2}`);
            div.innerHTML = this.tooltipMessage;

            this._div = div;
            document.documentElement.appendChild(div);
        }
    }

    @HostListener("mouseout", ["$event"])
    public onMouseOut(event: MouseEvent): void {
        this.removeTooltip();
    }

    public ngOnDestroy(): void {
        this.removeTooltip();
    }

    private removeTooltip(): void {
        document.documentElement.removeChild(this._div);
        this._div = null;
    }
}
