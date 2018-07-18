import { Component, OnInit } from '@angular/core';
import {NewsserviceService} from '../newsservice.service';
import {Config} from '../Configuration';
import {GoogleNewsTemplate} from '../GoogleNewsTemplate';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-newstile',
  templateUrl: './newstile.component.html',
  styleUrls: ['./newstile.component.less']
})
export class NewstileComponent implements OnInit {
  CONFIG = Config;
  constructor(private newsService: NewsserviceService,private httpService:HttpClient) { }
  newsArticles: Observable<GoogleNewsTemplate>[] = [];
  //abc: Array<Object>[];
  onDataRecieved(oData){
  	this.newsArticles = this.newsArticles.concat(oData.articles);

  	//this.abc = oData.articles;
  	//console.log(this.abc);
  }
     ngAfterViewInit(){
       setTimeout(_ => {
          // if($(".newsList").length)
          $(".newsList").turn({
          display: "double",
          autoCenter:true,
          //height: 400,
         // width: 600,
          pages: this.newsArticles.length
        }, 100);        
       })

  }
  askData(){
    let url = this.CONFIG.url;
    let options = {
       params:{
         apiKey: "1ca24960431e492ea8e68122f56eb36a",
        country: this.CONFIG.country,
        category: this.CONFIG.category
       }
     };
  
    this.newsService.getData(url, options).subscribe(this.onDataRecieved.bind(this)); 
  }
  ngOnInit() {

    this.askData();
  }

}
