<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" class="amber lighten-4" fixed app>
      <v-list dense>
      <router-link to="/weather" color="#FF6F61" class="nav_active">
        <v-list-tile color="amber darken-4" >
          <v-list-tile-action>
            <v-icon color="amber darken-4">wb_sunny</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>날씨</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile></router-link>
        
        <v-divider></v-divider>
        
        <router-link to="/trend" color="#FF6F61" class="nav_active">
        <v-list-tile color="amber darken-4">
          <v-list-tile-action>
            <v-icon color="amber darken-4">trending_up</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>트렌드 검색</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile></router-link>
        
        <v-divider></v-divider>
        
        <router-link to="/recommend" color="#FF6F61" class="nav_active">
        <v-list-tile color="amber darken-4">
          <v-list-tile-action>
            <v-icon color="amber darken-4">thumb_up</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>오늘의 추천</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile></router-link>
        
        <v-divider></v-divider>
        
        <router-link to="/feel" color="#FF6F61" class="nav_active">
        <v-list-tile color="amber darken-4">
          <v-list-tile-action>
            <v-icon color="amber darken-4">insert_emoticon</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>오늘의 기분</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile></router-link>
        
      </v-list>
    </v-navigation-drawer>
    
    <v-toolbar color="amber darken-3" fixed app>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-spacer></v-spacer>
      <router-link to="/main" class="link" ><v-btn icon><v-icon>keyboard_arrow_right</v-icon></v-btn></router-link>
    </v-toolbar>
    
    <v-content>
      <v-container>
        <v-layout row wrap>
        <v-flex xs12 class="pl-2">
          <v-subheader>오늘 날씨!</v-subheader>
        </v-flex>
        <v-flex justify-center offset-xs1>
         	 <v-card width="270px" height="150px" style="background-color : #90CAF9">
         	 	<v-card-title class="pb-3">
                <div class="weatherView">
                  <div class="img" style="padding-right:10px;">
                    <img src="@/assets/letterS.png" alt="seoul" style=" width:70px;"/>
                  <div class="todayLoc" style="float:right; margin-top:10px; padding-left:20px;">
                    <p>{{ country }}</p>
                    <p>{{ city }}</p>
                  </div>
                  </div>
                  <div class="todayTemp" style="display:flex; margin-top:20px;">
                    <p style="margin-right:20px;">최저기온 : {{ tempMin }}&deg;C</p>
                    <p>최고기온 : {{ tempMax }}&deg;C</p>
                  </div>
                </div>
         	 	</v-card-title>
         	 		
          	</v-card>
        </v-flex>
         <v-flex xs12 class="pt-4 pl-2">
          <v-subheader>이번주 날씨!</v-subheader>
        </v-flex>
        <v-flex justify-center offset-xs1>
         	 <v-card width="270px" height="250px" style="background-color : #90CAF9">
         	 	<v-card-title class="weeks">
                <div class="weekView" >
                  <div class="dates" style="float:left; background-color : #BBDEFB" >
                    <p>날짜</p>
                    <p>{{ weekDate1 }}</p>
                    <p>{{ weekDate2 }}</p>
                    <p>{{ weekDate3 }}</p>
                    <p>{{ weekDate4 }}</p>
                  </div>
                  <div class="temps" style="float:right; background-color :#C5CAE9;">
                    <p>평균기온</p>
                    <p>{{ weekTemp1 }}&deg;C</p>
                    <p>{{ weekTemp2 }}&deg;C</p>
                    <p>{{ weekTemp3 }}&deg;C</p>
                    <p>{{ weekTemp4 }}&deg;C</p>
                  </div>
                </div>
         	 	</v-card-title>
          	</v-card>
        </v-flex>
        <v-spacer></v-spacer>
   
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import axios from 'axios';

 export default {
   name:'app',
    data: () => ({
        drawer: null,
      country:'',
      city : '',
      tempMax:'',
      tempMin:'',
      weekDate1 : [],
      weekTemp1 : [],
      weekDate2 : [],
      weekTemp2 : [],
      weekDate3 : [],
      weekTemp3 : [],
      weekDate4 : [],
      weekTemp4 : []
     }),
  methods:  {
    getWeather() {
      const url = 'http://api.openweathermap.org/data/2.5/weather?q=Seoul&units=metric&apikey=3d31ad55e3b04dcdfb1d42ff1af32638';
      axios
        .get(url)
        .then(response=>{
          this.country = response.data.sys.country
          this.city = response.data.name
          this.tempMin = response.data.main.temp_min
          this.tempMax = response.data.main.temp_max
        })
        .catch(error => {
          console.log(error);
        });
      },
    getWeek() {
      const url2 = 'http://api.openweathermap.org/data/2.5/forecast?q=Seoul&units=metric&apikey=3d31ad55e3b04dcdfb1d42ff1af32638';
      axios
        .get(url2)
        .then(response=>{
          this.weekDate1 = (response.data.list[10].dt_txt).slice(0,10);
          this.weekTemp1 = response.data.list[10].main.temp
          this.weekDate2 = (response.data.list[18].dt_txt).slice(0,10);
          this.weekTemp2 = response.data.list[18].main.temp
          this.weekDate3 = (response.data.list[26].dt_txt).slice(0,10);
          this.weekTemp3 = response.data.list[26].main.temp
          this.weekDate4 = (response.data.list[34].dt_txt).slice(0,10);
          this.weekTemp4 = response.data.list[34].main.temp
        })
        .catch(error => {
          console.log(error);
        });
    }
    },
    created(){
      this.getWeather();
      this.getWeek();
    }
  }


 
  /* 
const puppeteer = require('puppeteer'); // Object 형태 반환
console.log('1 : ' + puppeteer);
(async() => {
  const browser = await puppeteer.launch(); // 여기서부터 문제있음
    console.log('2 : ' + browser);
    const page = await browser.newPage();
    console.log('3 : ' + page);
    await page.goto('https://search.naver.com/search.naver?where=nexearch&sm=osp_hty&ie=UTF-8&query=%EB%84%A4%EC%9D%B4%EB%B2%84+%EB%82%A0%EC%94%A8');

    const innerHTML = await page.evaluate(() => document.querySelector('.main_info').innerHTML);

    console.table(innerHTML);
 
    browser.close();
})(); */

</script>

<style scoped>
  .nav_active{
    text-decoration: none;
  }

   .router-link-active {
    text-decoration: none;
    }
   .active{
      display:none !important;
     }
    .activeNot {
      display:inline !important;
    }
    p{
      color:#2962FF;
    }
    .dates p{
      margin-left:33px;
      margin-right:35px;
      margin-top:20px;
      margin-bottom:25px;
    }
    .temps p{
      margin-left:35px;
      margin-right:36px;
      margin-top:20px;
      margin-bottom:25px;
    }
    .weeks.v-card__title{
      padding : 0 0 0 0px;
    }
    .dates{
      border-right-style: inset;
    }
    .link{
      color : #FF8F00;
    }
</style>
