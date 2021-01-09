import { Injectable, Logger } from '@nestjs/common';
import { Cron, SchedulerRegistry } from '@nestjs/schedule';
import * as moment from 'moment';
import { CronJob } from 'cron';
import axios from 'axios';
import {LoginService} from './login.service';
import {AppService} from './app.service'
import { Console } from 'console';
interface IJdServTimeRes {
    serverTime: number;
}
import 'dotenv/config';

const env = process.env;
@Injectable()
export class TasksService {
    private readonly logger = new Logger(TasksService.name);
    constructor(
        private schedulerRegistry: SchedulerRegistry,
        private readonly loginService: LoginService,
        private readonly appSrv: AppService,
    ) {
        this.handleTimeDiff();
    }

    async handleTimeDiff() {
        const url = 'https://a.jd.com//ajax/queryServerData.html';
        const res = await axios.get<IJdServTimeRes>(url);
        const now = Date.now();
        const diff = (now - res.data.serverTime) / 1000;
        const differtime = moment.duration(Math.abs(diff), 'seconds');
        const origintime = moment(
            `${env.SEC}-${env.MINUTE}-${env.HOUR}-${env.DAY}-${env.MONTH}`,
            's-m-H-D-M',
        );
        this.logger.warn(`您设定时间为${origintime.format('M月D日H点m分s秒')}`);
        let fixStart: moment.Moment;
        if (diff > 0) {
            this.logger.warn(`您电脑时间比京东快${diff}秒`);
            fixStart = origintime.add(differtime);
        } else {
            this.logger.warn(`您的电脑时间比京东慢${-diff}秒`);
            fixStart = origintime.subtract(differtime);
        }
        this.logger.warn(`已修正启动时间为${fixStart.format('M月D日H点m分s秒')}`);
        const month = fixStart.get('month');
        const fixCornTime = fixStart.format('s m H D ') + month + ' *';
        this.addCronJob('user', fixCornTime);
    }

    async addCronJob(name: string, coreTime: string) {
        const job = new CronJob(coreTime, () => {
            this.logger.log(`执行脚本启动`);
            // this.appSrv.main();
        });

        this.schedulerRegistry.addCronJob(name, job);
        job.start();
        this.logger.log(`任务coretime为${coreTime}`);
        // 如果要提前登录就放开
        this.logger.log('检查登录情况');
        this.loginService.init();
    }



    /**
       *
       * 每分钟输出一次，方便观察
       * @memberof TasksService
       */

    @Cron(`1 * * * * *`)
    displayServerTime() {
        this.logger.debug(`${moment().format('YYYY年MM月DD日  HH时mm分ss秒')}`);
    }
}


