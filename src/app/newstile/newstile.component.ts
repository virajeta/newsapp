import { Component, OnInit } from '@angular/core';
import {NewsserviceService} from '../newsservice.service';
import {Config} from '../Configuration';
import {GoogleNewsTemplate} from '../GoogleNewsTemplate';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as $ from 'jquery';
import  "turn.js";

@Component({
  selector: 'app-newstile',
  templateUrl: './newstile.component.html',
  styleUrls: ['./newstile.component.less']
})
export class NewstileComponent implements OnInit {
  CONFIG = Config;
  constructor(private newsService: NewsserviceService,private httpService:HttpClient) { }
  newsArticles: Observable<GoogleNewsTemplate>[] = [];
  pageSizes: Array<undefined>;
  //abc: Array<Object>[];
  onDataRecieved(oData){
    this.pageSizes = new  Array(Math.ceil(oData.articles.length/this.CONFIG.articlesInSinglePage));
  	this.newsArticles = this.newsArticles.concat(oData.articles);
    var oThat = this;
    setTimeout( _ => {
                      <any>$(".newsList").turn({
                        display: "double",
                        autoCenter:true,
                        options:{
                          gradients: true,
                          elevation:2,
                          turnCorners: 'tl,tr'
                        },
                        //height: 400,
                       // width: 600,
                        pages: this.newsArticles.length
                      });
                  }, 100);

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
    $('.newsList').height(window.innerHeight*0.85);
    this.askData();
  }

}
