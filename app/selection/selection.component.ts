import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';

@Component({
    selector: 'my-selection',
    templateUrl: 'app/selection/selection.component.html',
    styleUrls: [ 'app/selection/selection.component.css' ]
})
export class SelectionComponent implements OnInit {

    private svg;

    constructor() { }

    ngOnInit() {
      this.svg = d3.select('svg');
    }

    public changeFill() {

    }

    public addCircles() {
      let cl = this.svg.append('g').attr('class', 'circles');
      //.attr('transform', 'translate(200,200)');
      cl.append('circle').attr('cx', 200).attr('cy', 200).attr('r', 30);
      cl.append('circle').attr('cx', 290).attr('cy', 210).attr('r', 30).style('fill', 'green');
    }

    public removeRectangles() {
      this.svg.selectAll('rect').remove();
    }

    public removeAll() {
      this.svg.selectAll('rect').remove();
    }
}
