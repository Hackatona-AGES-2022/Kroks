import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-file-reader',
  templateUrl: './file-reader.component.html',
  styleUrls: ['./file-reader.component.scss'],
})
export class FileReaderComponent implements OnInit {
  @Input('fileType')
  fileType!: string;

  constructor() {}

  ngOnInit(): void {}

  async onFileSend(event: any) {
    const file: File = event.target.files[0];

    console.log(file.type);

    const fileReader = new FileReader();

    fileReader.onload = function (fileLoadEvent) {
      var srcData = fileLoadEvent.target?.result;
    };
    fileReader.readAsDataURL(file);
  }
}
