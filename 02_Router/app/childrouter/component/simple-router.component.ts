import { Component, OnInit, OnDestroy} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
    selector: 'simple-router',
    templateUrl: 'app/childrouter/component/child-router.component.html'
})
export default class SimpleRouterComponent implements OnInit, OnDestroy {

    urlString: string;
    paramsString: string;
    dataString: string;

    componentString: string;
    outletString: string;
    //snapshotString:string;

    routeUrl: string
    queryParamsString: string;
    fragment: string;

    paramsSub: Subscription;
    urlSub: Subscription;
    dataSub: Subscription;
    queryParamsSub: Subscription;
    fragmentSub: Subscription;

    constructor(
        private route: ActivatedRoute,
        private router: Router) {

    }

    ngOnInit(): void {
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

    ngOnDestroy(): void {
        this.paramsSub.unsubscribe();
        this.urlSub.unsubscribe();
        this.dataSub.unsubscribe();
        this.queryParamsSub.unsubscribe();
        this.fragmentSub.unsubscribe();
    }
}