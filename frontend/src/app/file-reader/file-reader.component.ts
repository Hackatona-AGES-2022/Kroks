import { Component, Input, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-file-reader',
  templateUrl: './file-reader.component.html',
  styleUrls: ['./file-reader.component.scss'],
})
export class FileReaderComponent implements OnInit {
  @Input('fileType')
  fileType!: string;

  constructor(private httpService: HttpService) {}

  ngOnInit(): void {}

  async onFileSend(event: any) {
    const file: File = event.target.files[0];
    console.log(file);
    (await this.httpService.sendImage(file)).subscribe((d) => console.log(d));
    // console.log(file.type);

    // const fileReader = new FileReader();

    // fileReader.onload = (fileLoadEvent) => {
    //   // var source = this.convertDataURIToBinary(fileLoadEvent.target?.result);
    //   var source = fileLoadEvent.target?.result?.toString();
    //   console.log(source);
    //   this.httpService.sendImage(source).subscribe((d) => {
    //     console.log(d);
    //   });
    // };
    // fileReader.readAsDataURL(file);
  }

  convertDataURIToBinary(dataURI: any) {
    var base64Index = dataURI.indexOf(';base64,') + ';base64,'.length;
    var base64 = dataURI.substring(base64Index);
    var raw = window.atob(base64);
    var rawLength = raw.length;
    var array = new Uint8Array(new ArrayBuffer(rawLength));

    for (let i = 0; i < rawLength; i++) {
      array[i] = raw.charCodeAt(i);
    }
    return array;
  }
}
