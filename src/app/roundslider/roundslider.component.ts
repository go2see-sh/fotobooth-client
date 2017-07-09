import { Component, Input, Output, EventEmitter, ViewChild, ElementRef, OnInit, AfterViewInit } from '@angular/core';
//import * as jQuery from 'jquery';

declare var jQuery: any;

@Component({
  selector: 'fotomat-roundslider',
  templateUrl: './roundslider.component.html',
  styleUrls: ['./roundslider.component.css']
})
export class RoundsliderComponent implements AfterViewInit {
  _values: Array<string>;
  _selected: string;

  @Input() 
  set values(values: Array<string>) {
    this._values = values;
    this.initValues();
  }

  @Input()
  set selected(selected: string) {
    this._selected = selected;
    this.initValues();
  }

  @Output() changed = new EventEmitter();

  @ViewChild('slider') sliderEl: ElementRef;

  constructor(private el: ElementRef) { 
  }

  $slider: any;
  obj: any;

  ngAfterViewInit() {
    let tmp = <any>jQuery(this.sliderEl.nativeElement);
    let self = this;
    this.$slider = tmp.roundSlider({
        radius: 120,
        sliderType: "min-range",
        value: 1,
        min: 0,
        max: 11,
        editableTooltip: false,
        tooltipFormat: function(args) {
          if(self._values && args.value > -1 && args.value < self._values.length) {
            return self._values[args.value];
          }
          return '';
        },
        change: function(event) {
          self.changed.emit(self._values[event.value]);
        }
    });
    this.obj = this.$slider.data("roundSlider");
  }

  tooltopFormatValues(args) {
    if(this._values && args.value > -1 && args.value < this._values.length) {
      return this._values[args.value];
    }
    return '';
  }

  initValues() {
    if(this._values !== undefined && this.$slider) {
      this.obj.option({min: 0, max: this._values.length});
    }
    if(this._selected && this._values) {
      this.obj.option({value: this._values.indexOf(this._selected)})
    }
  }

}