import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'cs-inputfile',
  templateUrl: './inputfile.component.html',
  styleUrls: ['./inputfile.component.css']
})
export class InputfileComponent implements OnInit {
  @Input()
  public get img(): string{
    return this._img;
  }

  @Output() imgChange = new EventEmitter<string>();
  public set img(value: string) {
    this._img = value;
    this.imgChange.emit(value);
  }

  private id:number;
  private _img: string;

  constructor() { 
    this.id = Math.random();
  }

  ngOnInit() {
  }

  public onFileChange(event) {
    let reader = new FileReader();
    if(event.target.files && event.target.files.length > 0) {
      let file = event.target.files[0];
      reader.readAsDataURL(file);
      reader.onload = () => {
        if(file.size > 100000){
          alert("Fichier trop volumineux (100ko max)");
          event.target.value = '';
          return;
        } 
        let b64 = `data:${file.type};base64,`
        this.img = b64 + reader.result.split(',')[1];
      };
    }
  }
}
