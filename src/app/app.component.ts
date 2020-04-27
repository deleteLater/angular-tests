import { Component } from '@angular/core';
import { NgModule, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';


@Component({
  selector: 'app-root',
  template: `
    <div>
      <div>Hello World! This is the {{ title }} app.</div>
      <button (click)='getLazy1()'>lazy 1</button>
      <button (click)='getLazy2()'>lazy 2</button>
    </div>
  `
})
export class AppComponent {
  title = 'lazy-demo';

  constructor(
    private viewContainerRef: ViewContainerRef,
    private cfr: ComponentFactoryResolver
  ) {

  }

  async getLazy1() {
    this.viewContainerRef.clear();

    const {Lazy1Component} = await import('./lazy1.component');

    this.viewContainerRef.createComponent(
      this.cfr.resolveComponentFactory(Lazy1Component)
    );
  }

  async getLazy2() {
    // we only want to show one of the lazy-loaded components at a time
    this.viewContainerRef.clear();

    // import the components, lazily, using the await import syntax.
    const {Lazy2Component} = await import('./lazy2.component');

    this.viewContainerRef.createComponent(
      this.cfr.resolveComponentFactory(Lazy2Component)
    );
  }
}
