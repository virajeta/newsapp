import { Component, OnInit } from '@angular/core';
import {NewsserviceService} from '../newsservice.service';
import {Config} from '../Configuration';
import {GoogleNewsTemplate} from '../GoogleNewsTemplate';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DeviceDetectorService } from 'ngx-device-detector';
import { NewsCategoryTemplate } from "../NewsCategoryTemplate";

import  "turn.js";

declare var $: any;

@Component({
  selector: 'app-newstile',
  templateUrl: './newstile.component.html',
  styleUrls: ['./newstile.component.less']
})
export class NewstileComponent implements OnInit {
  CONFIG = Config;
  constructor(private newsService: NewsserviceService,private httpService:HttpClient, private deviceService:DeviceDetectorService) { }
  newsArticles: Observable<GoogleNewsTemplate>[] = [];
  pageSizes: Array<undefined>;
  deviceInfo = null;
  newsCategoryWiseList:NewsCategoryTemplate[] = [];
  //abc: Array<Object>[];
  onDataRecieved(categoryName, oData){
    this.pageSizes = new  Array(Math.ceil(this.newsArticles.length/this.CONFIG.articlesInSinglePage));
    console.log("--------",this.pageSizes);
    for(var i=0; i< oData.articles.length; i++){
      oData.articles[i]["category"] = categoryName;
    }
  	this.newsArticles = this.newsArticles.concat(oData.articles);
   var oThat = this;
   if(categoryName === this.CONFIG.category[this.CONFIG.category.length-1])
    setTimeout( _ => {
                      <any>$(".newsList").turn({
                        display: ((window.innerHeight/window.innerWidth) > 1) ? "single": "double",
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

    for(var i=0; i<this.CONFIG.category.length; i++){
           let options = {
           params:{
             apiKey: "1ca24960431e492ea8e68122f56eb36a",
            country: this.CONFIG.country,
            category: this.CONFIG.category[i]
           }
         };
      
        this.newsService.getData(url, options).subscribe(this.onDataRecieved.bind(this, this.CONFIG.category[i])); 
    }

  }
  ngOnInit() {
    $('.newsList').height(window.innerHeight*0.85);
    this.deviceInfo = this.deviceService.getDeviceInfo();
    this.askData();
  }

}
