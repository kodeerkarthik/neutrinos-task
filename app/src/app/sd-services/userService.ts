/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Injectable, Injector } from '@angular/core'; //_splitter_
import {
  Router,
  NavigationEnd,
  NavigationStart,
  Resolve,
  ActivatedRouteSnapshot,
} from '@angular/router'; //_splitter_
import { MatSnackBar } from '@angular/material/snack-bar'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
//append_imports_end

declare const window: any;
declare const cordova: any;

@Injectable({
  providedIn: 'root',
})
export class userService {
  constructor(
    private sdService: SDBaseService,
    private router: Router,
    private matSnackBar: MatSnackBar,
    private __service_injector__: Injector
  ) {
    this.registerListeners();
  }
  private registerListeners() {
    let bh = this.sdService.__constructDefault({});

    //append_listeners
  }

  //   service flows_userService

  async insertUser(userData: any = undefined, ...others) {
    try {
      var bh: any = {
        input: {
          userData: userData,
        },
        local: {},
      };
      bh = this.sdService.__constructDefault(bh);
      bh = await this.sd_zvitSCBZq5Ywsh6s(bh);
      //appendnew_next_insertUser
      return (
        // formatting output variables
        {
          input: {},
          local: {},
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_ei4C9L1Wys8jvycT');
    }
  }

  //appendnew_flow_userService_start

  async sd_zvitSCBZq5Ywsh6s(bh) {
    try {
      console.log(bh.input.userData, 'hii');
      bh = await this.sd_DsPaMjrUF8xG1H0a(bh);
      //appendnew_next_sd_zvitSCBZq5Ywsh6s
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_zvitSCBZq5Ywsh6s');
    }
  }

  async sd_DsPaMjrUF8xG1H0a(bh) {
    try {
      let basePath = bh.system.environment.properties.ssdURL.endsWith('/')
        ? bh.system.environment.properties.ssdURL
        : bh.system.environment.properties.ssdURL + '/';
      let url = `add/`;
      let finalUrl = basePath + url;
      let requestOptions = {
        url: finalUrl,
        method: 'post',
        responseType: 'json',
        reportProgress: undefined,
        headers: {},
        params: {},
        body: bh.input.userData,
      };
      bh.local.result = await this.sdService.nHttpRequest(requestOptions);
      bh = await this.sd_i5DucyFzaF2La9zr(bh);
      //appendnew_next_sd_DsPaMjrUF8xG1H0a
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_DsPaMjrUF8xG1H0a');
    }
  }

  async sd_i5DucyFzaF2La9zr(bh) {
    try {
      this.matSnackBar.open(bh.local.result, '', {
        duration: 200,
        direction: 'ltr',
        horizontalPosition: 'center',
        verticalPosition: 'top',
      });
      //appendnew_next_sd_i5DucyFzaF2La9zr
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_i5DucyFzaF2La9zr');
    }
  }

  //appendnew_node

  private async errorHandler(bh, e, src) {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;

    if (
      false
      /*appendnew_next_Catch*/
    ) {
      return bh;
    } else {
      throw e;
    }
  }
  //appendnew_flow_userService_Catch
}
