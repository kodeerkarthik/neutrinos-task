let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { StatusCodes as httpStatusCodes } from 'http-status-codes'; //_splitter_
import * as cookieParser from 'cookie-parser'; //_splitter_
import { Readable } from 'stream'; //_splitter_
import { setInterval } from 'timers'; //_splitter_
import { Issuer, custom } from 'openid-client'; //_splitter_
import * as crypto from 'crypto'; //_splitter_
import * as url from 'url'; //_splitter_
import { SDBaseService } from '../services/SDBaseService'; //_splitter_
import { Middleware } from '../middleware/Middleware'; //_splitter_
import * as settings from '../config/config'; //_splitter_
import log from '../utils/Logger'; //_splitter_
import { GenericRDBMSOperations } from '../utils/ndefault-sql/ExecuteSql/GenericRDBMSOperations'; //_splitter_
//append_imports_end
export class task {
  private sdService = new SDBaseService();
  private app;
  private serviceBasePath: string;
  private generatedMiddlewares: Object;
  private serviceName: string;
  private swaggerDocument: Object;
  private globalTimers: any;
  private constructor(
    app,
    generatedeMiddlewares,
    routeCall,
    middlewareCall,
    swaggerDocument,
    globalTimers
  ) {
    this.serviceName = 'task';
    this.app = app;
    this.serviceBasePath = this.app.settings.base;
    this.generatedMiddlewares = generatedeMiddlewares;
    this.swaggerDocument = swaggerDocument;
    this.globalTimers = globalTimers;
  }

  static getInstance(
    app?,
    generatedeMiddlewares?,
    routeCall?,
    middlewareCall?,
    swaggerDocument?,
    globalTimers?
  ) {
    if (!instance) {
      instance = new task(
        app,
        generatedeMiddlewares,
        routeCall,
        middlewareCall,
        swaggerDocument,
        globalTimers
      );
    }
    instance.mountCalls(routeCall, middlewareCall);
    return instance;
  }

  private mountCalls(routeCall, middlewareCall) {
    if (routeCall) {
      this.mountAllPaths();
      this.mountAllListeners();
    }
    if (middlewareCall) {
      this.generatedMiddlewares[this.serviceName] = {};
      this.mountAllMiddlewares();
      this.mountTimers();
    }
  }

  async mountAllListeners() {
    try {
      //append_listeners
    } catch (e) {
      throw e;
    }
  }

  async mountTimers() {
    try {
      //appendnew_flow_task_TimerStart
    } catch (e) {
      throw e;
    }
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: task');

    //appendnew_flow_task_MiddlewareStart
  }
  private mountAllPaths() {
    log.debug('mounting all paths for service :: task');

    if (!this.swaggerDocument['paths']['/add']) {
      this.swaggerDocument['paths']['/add'] = {
        post: {
          summary: '',
          description: '',
          consumes: [],
          produces: [],
          parameters: [],
          responses: {},
        },
      };
    } else {
      this.swaggerDocument['paths']['/add']['post'] = {
        summary: '',
        description: '',
        consumes: [],
        produces: [],
        parameters: [],
        responses: {},
      };
    }
    this.app['post'](
      `${this.serviceBasePath}/add`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          bh = await this.sd_1edukCxjKckFHy4Z(bh);
          //appendnew_next_sd_PUA8WsB5DhTc8189
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_PUA8WsB5DhTc8189');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_task_HttpIn
  }
  //   service flows_task

  //appendnew_flow_task_start

  async sd_1edukCxjKckFHy4Z(bh) {
    try {
      bh.local.query =
        'INSERT INTO users(firstName,lastName,email,phone,dob,gender,pan,adhar,password,nationality,maritialStatus,address,city,state,country,pincode) VALUES(' +
        "'" +
        bh.input.body.firstName +
        "','" +
        bh.input.body.lastName +
        "','" +
        bh.input.body.email +
        "','" +
        bh.input.body.phone +
        "','" +
        bh.input.body.dob +
        "','" +
        bh.input.body.gender +
        "','" +
        bh.input.body.pan +
        "','" +
        bh.input.body.adhar +
        "','" +
        bh.input.body.password +
        "','" +
        bh.input.body.nationality +
        "','" +
        bh.input.body.maritialStatus +
        "','" +
        bh.input.body.adhar +
        "','" +
        bh.input.body.city +
        "','" +
        bh.input.body.state +
        "','" +
        bh.input.body.country +
        "','" +
        bh.input.body.pincode +
        "')";

      bh = await this.sd_3e2CpDH04lLOgPqm(bh);
      //appendnew_next_sd_1edukCxjKckFHy4Z
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_1edukCxjKckFHy4Z');
    }
  }

  async sd_3e2CpDH04lLOgPqm(bh) {
    try {
      let configObj = this.sdService.getConfigObj(
        'db-config',
        'sd_p4AN1BhGXQgojdxk'
      );
      let connectionName;
      if (
        configObj &&
        configObj.hasOwnProperty('dbOption') &&
        configObj.dbOption.hasOwnProperty('name')
      ) {
        connectionName = configObj.dbOption.name;
      } else {
        throw new Error('Cannot find the selected config name');
      }
      let params = [];
      params = params ? params : [];
      bh.local.result = await new GenericRDBMSOperations().executeSQL(
        connectionName,
        bh.local.query,
        params
      );
      await this.sd_Bw57zd3h22SZEEmL(bh);
      //appendnew_next_sd_3e2CpDH04lLOgPqm
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_3e2CpDH04lLOgPqm');
    }
  }

  async sd_Bw57zd3h22SZEEmL(bh) {
    try {
      bh.web.res.status(200).send('inserting user data successfully');

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_Bw57zd3h22SZEEmL');
    }
  }

  //appendnew_node

  async errorHandler(bh, e, src) {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;

    if (
      false
      /*appendnew_next_Catch*/
    ) {
      return bh;
    } else {
      if (bh.web.next) {
        bh.web.next(e);
      } else {
        throw e;
      }
    }
  }
  //appendnew_flow_task_Catch
}
