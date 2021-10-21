//append_imports_start

import * as sd_ItRt8MlOoCMFHalm from 'app/sd-services/userService'; //_splitter_
import { Injectable } from '@angular/core'; //_splitter_
//append_imports_end
@Injectable({ providedIn: 'root' })
export class __NEU_ServiceInvokerService__ {
  constructor(private sd_ItRt8MlOoCMFHalm: sd_ItRt8MlOoCMFHalm.userService) {}
  invoke(
    injectedServiceId: string,
    methodName: string,
    ...methodArguments: any[]
  ) {
    return this[injectedServiceId][methodName](...methodArguments);
  }
}
