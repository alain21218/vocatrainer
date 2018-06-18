# Angular 2+ tips

## Summary
- [Useful videos](#videos)
- [Useful websites](#websites)
- [Alternate colors](#altcolors)
- [Modules](#modules)
- [View Child](#viewchild)





<i id="videos">





### Useful videos 
- [Advanced Angular tips and tricks](https://www.youtube.com/watch?v=vyiyJCLlGwo)
- [Routing with Modules](https://www.youtube.com/watch?v=RNWm0moU9e8)





<i id="websites">





### Useful websites 
- [Cheat sheet](https://angular.io/guide/cheatsheet)
- [Real architecture example](https://github.com/gothinkster/angular-realworld-example-app)





<i id="altcolors">





## Alternate colors

```css
.odd {
    background: grey;
}

.even {
    background: white;
}
```

```html
<div *ngFor="let elem of elems; let even=even; let odd=odd"
    [ngClass]="{odd:odd, even:even}">
</div>
```



<i id="modules">



## Modules

### Basic project tree :

- App
    - __Shared__ is the most important
        - services
        - pipes
        - models
        - etc...
    - Home
    - Admin
    - etc..

> __Shared__ is usually __imports__ by every other modules. To do that, each child must be `exports` to be visible from others modules.

```js

// Shared Module
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelloComponent } from './hello/hello.component';
archieve
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HelloComponent],   // Must be declared before export
  exports: [
    HelloComponent                  // Be visible for others
  ]
})

export class SharedModule { }

```

> Now it can be `imports` in any module

```js

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module'; // 1

@NgModule({
  imports: [
    CommonModule,
    SharedModule                                        // 2
  ],
  declarations: [],
  exports: []
})
export class HomeModule { }

```

> Finally, HelloComponent can be access from HomeModule's childs




<i id="viewchild">




## View Child

> ViewChild can be an alternative to get or set property values of a child component and keep it dumb

```js

@ViewChild('example') example: ExampleComponent;

constructor() {
    example.oneProperty = "value"; // Access to a property of the child
}

```

```html

<example #example>  <!-- We need #example to reference it -->
    <p>Some content</p>
</example>   

```