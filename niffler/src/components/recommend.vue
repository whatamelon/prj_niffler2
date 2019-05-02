<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" class="amber lighten-4" fixed app>
      <v-list dense>
      <router-link to="/weather" color="#FF6F61" class="nav_active">
        <v-list-tile color="amber darken-4">
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
         <v-flex xs12 class="pt-2 pl-5 ml-4">
          <v-subheader><h1>오늘의 추천!</h1></v-subheader>
        </v-flex>
        <v-flex justify-center>
          <div class="hooper">
            <hooper>
              <slide>
                <link-prevue :url="url" class="link1"></link-prevue>
              </slide>
              <slide>
                <link-prevue :url="url2" class="link2"></link-prevue>
              </slide>
              <slide>
                <link-prevue :url="url3" class="link3"></link-prevue>
              </slide>
            </hooper>
          </div>
        </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import { Hooper, Slide } from 'hooper';
import 'hooper/dist/hooper.css';
import LinkPrevue from 'link-prevue'
  export default {
    name: 'app',
  components: {
    LinkPrevue,
    Hooper,
    Slide
    },
    data () {
      return {
        url : "http://media.fastcampus.co.kr/popular/how-to-be-software-developer-programmer/",
        url2 : "https://sports.news.naver.com/epl/news/read.nhn?oid=413&aid=0000081795",
        url3 : "https://www.20slab.org/archives/315",
        drawer: null
      }
    }
  }
</script>

<style scoped>

  .nav_active{
    text-decoration: none;
  }

   .router-link-active {
    text-decoration: none;
    color : #FF8F00;
    }
   .active{
      display:none !important;
     }
    .activeNot {
      display:inline !important;
    }
    .offset-xs1{
      margin-top:50px;
    }
    .link{
      color : #FF8F00;
    }
    li.hooper-slide.is-current{
      margin-right:20px;
    } 
    .hooper-list{
      width:100%;
      height:300% !important;
    }
    .hooper{
      width:100%;
      height:300% !important;
    }
    .justify-center{
      width:100%;
      height:300% !important;
      margin-top:10px;
    }
    .wrapper{
      width:330px !important;
    }
</style>
