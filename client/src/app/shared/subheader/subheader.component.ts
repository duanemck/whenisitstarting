import { Component, Input } from '@angular/core';
import { MdIcon,MdIconRegistry } from '@angular2-material/icon';

@Component({
    moduleId : module.id,
    selector : 'sub-header',
    directives : [MdIcon],
    providers : [MdIconRegistry],
    templateUrl : 'subheader.component.html',
    styleUrls : ['subheader.component.css']
})
export class SubHeader{
    @Input() title: string;
    
    @Input() icon: string;
}