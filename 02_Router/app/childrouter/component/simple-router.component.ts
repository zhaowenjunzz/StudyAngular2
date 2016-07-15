import { Component, OnInit, OnDestroy} from "@angular/core";
import {Router, ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs/Subscription";
import {Observable} from "rxjs/Observable";
import {PageLogService} from "../../shared/shared";
import {ICanComponentDeactivate} from "../routers/child-router-guards";

@Component({
    selector: "simple-router",
    templateUrl: "app/childrouter/component/child-router.component.html",
})
export default class SimpleRouterComponent implements OnInit, OnDestroy, ICanComponentDeactivate {

    public urlString: string;
    public paramsString: string;
    public dataString: string;

    public componentString: string;
    public outletString: string;

    public routeUrl: string;
    public queryParamsString: string;
    public fragment: string;

    private paramsSub: Subscription;
    private urlSub: Subscription;
    private dataSub: Subscription;
    private queryParamsSub: Subscription;
    private fragmentSub: Subscription;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private _log: PageLogService) {

    }

    public canDeactivate(): boolean | Observable<boolean> {
        console.log("canDeactivate called!");
        return true;
    }

    public ngOnInit(): void {

        this._log.debug("ngOnInit start.");

        this.paramsSub = this.route.params.subscribe(params => {
            this.paramsString = JSON.stringify(params);
        });

        this.urlSub = this.route.url.subscribe(url => {
            this.urlString = JSON.stringify(url);
        });

        this.dataSub = this.route.data.subscribe(data => {
            this.dataString = JSON.stringify(data);
            this.componentString = JSON.stringify(this.route.component);
            this.outletString = this.route.outlet;
        });

        this.routeUrl = this.router.url;

        this.queryParamsSub = this.router.routerState.queryParams.subscribe(params => {
            this.queryParamsString = JSON.stringify(params);
        });

        this.fragmentSub = this.router.routerState.fragment.subscribe(fragment => {
            this.fragment = fragment;
        });

        this._log.debug("ngOnInit end.");
    }

    public ngOnDestroy(): void {
        this._log.debug("ngOnDestroy start.");

        this.paramsSub.unsubscribe();
        this.urlSub.unsubscribe();
        this.dataSub.unsubscribe();
        this.queryParamsSub.unsubscribe();
        this.fragmentSub.unsubscribe();

        this._log.debug("ngOnDestroy end.");
    }
}
