import { Directive, HostListener } from '@angular/core';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser';

@Directive({
  selector: '[in-app-link]' // Attribute selector
})
export class InAppLinkDirective {

  options : InAppBrowserOptions = {
    location : 'yes', 
    hidden : 'no',
    zoom: 'yes'
  }

  constructor(private inappbrowser: InAppBrowser) { }

  @HostListener("click", ["$event"]) 
  onclick(event) {
    console.log('clicked');
    event.preventDefault();
    console.log(event.target.href);

    this.inappbrowser.create(event.target.href, '_blank', this.options);

  }

}
