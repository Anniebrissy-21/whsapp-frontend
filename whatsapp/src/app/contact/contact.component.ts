// src/app/chat/components/chat-inbox/chat-inbox.component.ts
import { Component, OnInit } from '@angular/core';
import { AppService } from '../services/app.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  public contactList: any = {};

  constructor(
    private appService: AppService,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.getContact()
  }

  public getContact() {
    return this.http.get('http://127.0.0.1:8000/api/contacts/', { headers: this.appService.getAuthHeaders() }).subscribe({
      next: (res: any) => {
        this.contactList = res?.results;
        console.log(this.contactList)
      },
      error: err => {

      }
    })
  }


}
