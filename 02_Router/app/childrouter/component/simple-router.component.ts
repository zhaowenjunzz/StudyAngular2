import { Component, OnInit, OnDestroy} from "@angular/core";
import {Router, ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
    selector: "simple-router",
    templateUrl: "app/childrouter/component/child-router.component.html",
})
export default class SimpleRouterComponent implements OnInit, OnDestroy {

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
        private router: Router) {

    }

    public ngOnInit(): void {
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
    }

    public ngOnDestroy(): void {
        this.paramsSub.unsubscribe();
        this.urlSub.unsubscribe();
        this.dataSub.unsubscribe();
        this.queryParamsSub.unsubscribe();
        this.fragmentSub.unsubscribe();
    }
}
