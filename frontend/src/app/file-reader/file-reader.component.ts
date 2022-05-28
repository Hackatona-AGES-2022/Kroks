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

    console.log(file.type);

    const fileReader = new FileReader();

    fileReader.onload = (fileLoadEvent) => {
      var source = fileLoadEvent.target?.result;
      console.log(source);
      this.httpService.sendImage(source).subscribe();
    };
    fileReader.readAsDataURL(file);
  }
}
