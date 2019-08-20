import { Injectable } from '@angular/core';
import * as Highcharts from 'highcharts';


@Injectable()
export class HighchartsService {
    constructor() {
    }

    createChart(el, cfg) {
      Highcharts.chart(el, cfg);
    }
}
