/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import {
  Component,
  Injector,
  Input,
  Output,
  EventEmitter,
} from '@angular/core'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { __NEU_ServiceInvokerService__ } from 'app/n-services/service-caller.service'; //_splitter_
import { FormBuilder, Validators, FormControl } from '@angular/forms'; //_splitter_
import { userService } from 'app/sd-services/userService'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-Form',
  templateUrl: './Form.template.html',
})
export class FormComponent {
  page: any = { dep: {} };
  constructor(
    private __page_injector__: Injector,
    private sdService: SDBaseService,
    public __serviceInvoker__: __NEU_ServiceInvokerService__
  ) {
    this.__page_injector__.get(SDPageCommonService).addPageDefaults(this.page);
    this.registerListeners();
    this.page.dep.FormBuilder = this.__page_injector__.get(FormBuilder); //FormBuilder
    //appendnew_element_inject
  }

  ngOnInit() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    {
      this.sd_IXBWzhJFyVUomnZU(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_IXBWzhJFyVUomnZU(bh) {
    try {
      bh = this.sd_pcSoiDHdisqRmAZA(bh);
      //appendnew_next_sd_IXBWzhJFyVUomnZU
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_IXBWzhJFyVUomnZU');
    }
  }

  submitUser(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_tjdQ03RZSzcvScUM(bh);
      //appendnew_next_submitUser
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_KcQx3P1i6iraz8nn');
    }
  }

  //appendnew_flow_FormComponent_start

  sd_pcSoiDHdisqRmAZA(bh) {
    try {
      this.page.userform = undefined;
      bh = this.sd_ooluufDtwXWHbROw(bh);
      //appendnew_next_sd_pcSoiDHdisqRmAZA
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_pcSoiDHdisqRmAZA');
    }
  }

  sd_ooluufDtwXWHbROw(bh) {
    try {
      this.page.fb = this.__page_injector__.get(FormBuilder);
      bh = this.sd_9fSXGWfC43Iu3JXe(bh);
      //appendnew_next_sd_ooluufDtwXWHbROw
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ooluufDtwXWHbROw');
    }
  }

  sd_9fSXGWfC43Iu3JXe(bh) {
    try {
      const page = this.page;
      page.userform = page.fb.group({
        firstName: ['', [Validators.required]],
        lastName: [''],
        email: [
          '',
          [
            Validators.required,
            Validators.email,
            Validators.pattern(
              '[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,3}'
            ),
          ],
        ],
        phone: [
          '',
          [
            Validators.required,
            Validators.pattern('^([0|+[0-9]{1,5})?([7-9][0-9]{9})$'),
          ],
        ],
        dob: [new Date(), [Validators.required]],
        gender: ['', [Validators.required]],
        pan: [
          '',
          [
            Validators.required,
            Validators.pattern('^([A-Z,a-z]{5}[0-9]{4}[A-Z,a-z]{1})$'),
          ],
        ],
        adhar: [
          '',
          [
            Validators.required,
            Validators.pattern('^[2-9]{1}[0-9]{3}[0-9]{4}[0-9]{4}$'),
          ],
        ],
        password: [
          '',
          [
            Validators.required,
            Validators.pattern(
              '^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$'
            ),
          ],
        ],
        nationality: ['', [Validators.required]],
        maritialStatus: ['', [Validators.required]],
        address: ['', [Validators.required]],
        city: ['', [Validators.required]],
        state: ['', [Validators.required]],
        country: ['', [Validators.required]],
        pincode: ['', [Validators.required]],
      });

      //appendnew_next_sd_9fSXGWfC43Iu3JXe
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_9fSXGWfC43Iu3JXe');
    }
  }

  sd_tjdQ03RZSzcvScUM(bh) {
    try {
      this.page.userservice = this.__page_injector__.get(userService);
      bh = this.sd_kw5NNIL0wGESRm8P(bh);
      //appendnew_next_sd_tjdQ03RZSzcvScUM
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_tjdQ03RZSzcvScUM');
    }
  }

  sd_kw5NNIL0wGESRm8P(bh) {
    try {
      const page = this.page;
      if (page.userform.invalid) {
        console.log('invalid form');
        return;
      }
      page.userservice.insertUser(page.userform.value);
      //appendnew_next_sd_kw5NNIL0wGESRm8P
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_kw5NNIL0wGESRm8P');
    }
  }

  //appendnew_node

  ngOnDestroy() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    this.__page_injector__.get(SDPageCommonService).deletePageFromMap(this);
  }

  errorHandler(bh, e, src) {
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
  //appendnew_flow_FormComponent_Catch
}
