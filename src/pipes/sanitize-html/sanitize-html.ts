import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({
  name: 'sanitizeHtml',
})
export class SanitizeHtmlPipe implements PipeTransform {
  
  constructor(private domSanitizer: DomSanitizer) {}

  transform(value: string, ...args): SafeHtml {

    const htmlContent = value.replace("<a", "<a in-app-link");
    return this.domSanitizer.bypassSecurityTrustHtml(htmlContent);

  }

}
