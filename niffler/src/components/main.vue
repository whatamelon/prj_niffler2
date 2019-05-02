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
      <router-link to="/" ><v-btn icon><v-icon>keyboard_arrow_right</v-icon></v-btn></router-link>
    </v-toolbar>
    
    <v-content>
      <v-container>
        <v-layout row wrap>
        <v-flex xs12>
          <v-subheader>오늘 기분 어때요?</v-subheader>
        </v-flex>
        <v-flex justify-center offset-xs1>
         	 <v-card width="270px" height="150px">
         	 	<v-card-title class="pb-3">
         	 		<div>
         	 			<h5>기분을 알려주세요!</h5>
         	 		</div>
         	 	</v-card-title>
         	 		<v-card-text class="pb-3 pt-2">
         	 			<v-icon id="sibal1" class="colorDisplay" color="red lighten-1" @click="sad">brightness_1</v-icon>
         	 			<v-icon id="sibal2" class="colorDisplay" color="yellow" @click="sad">brightness_1</v-icon>
         	 			<v-icon id="sibal3" class="colorDisplay" color="green accent-2" @click="sad">brightness_1</v-icon>
         	 			<v-icon id="sibal4" class="colorDisplay" color="blue lighten-2" @click="sad">brightness_1</v-icon>
         	 			<v-icon id="sibal5" class="colorDisplay" color="deep-purple lighten-3" @click="sad">brightness_1</v-icon>
         	 		</v-card-text>
         	 		<v-card-text class="pt-1">
         	 			<v-card-text id="fuck1" class="pt-0 pl-0 pr-5 d-inline" style="display:none !important">기분 나빠 ㅡ.ㅡ</v-card-text>
                <v-card-text id="fuck2" class="pt-0  text-xs-left d-inline" >별로야...</v-card-text>
                <v-card-text id="fuck3" class="pt-0 pr-0 pl-5 d-inline active" style="display:none !important">그냥 그래</v-card-text>
                <v-card-text id="fuck4" class="pt-0  text-xs-right d-inline" >좋아!</v-card-text>
         	 			<v-card-text id="fuck5" class="pt-0 pr-0 pl-5 d-inline active" style="display:none !important">완전 좋아!</v-card-text>
         	 		</v-card-text>
          	</v-card>
        </v-flex>
         <v-flex xs12 class="pt-4">
          <v-subheader>오늘의 추천을 만나보세요!</v-subheader>
        </v-flex>
        <v-flex justify-center offset-xs1>
         	 		<div>
         	 			 <link-prevue :url="url" class="link1" style="width: 270px!important;
      margin-right: 0px !important;"></link-prevue>
         	 		</div>
        </v-flex>
        <v-spacer></v-spacer>
   
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import LinkPrevue from 'link-prevue'
  export default {
    name : 'app',
    components: {
      LinkPrevue
    },

   data () {
      return {
        url : "https://joshua1988.github.io/web-development/translation/how-to-become-uncommonly-web-dev/",
        drawer: null
      }
    },
    props: {
      source: String
    },
    methods: {
      sad () {
        
      var sibal1 = document.getElementById('sibal1');
      var sibal2 = document.getElementById('sibal2');
      var sibal3 = document.getElementById('sibal3');
      var sibal4 = document.getElementById('sibal4');
      var sibal5 = document.getElementById('sibal5');

      var fuck1 = document.getElementById('fuck1');
      var fuck2 = document.getElementById('fuck2');
      var fuck3 = document.getElementById('fuck3');
      var fuck4 = document.getElementById('fuck4');
      var fuck5 = document.getElementById('fuck5');
        
      sibal1.onclick= function(){
        sibal1.classList.remove('active');
        sibal2.classList.add('active');
        sibal3.classList.add('active');
        sibal4.classList.add('active');
        sibal5.classList.add('active');

        fuck1.classList.toggle('active');
        fuck2.classList.add('active');
        fuck4.classList.add('active');
       
      }

      sibal2.onclick= function(){
        sibal1.classList.add('active');
        sibal2.classList.remove('active');
        sibal3.classList.add('active');
        sibal4.classList.add('active');
        sibal5.classList.add('active');

        fuck4.classList.add('active');
       
      }

      sibal3.onclick= function(){
        sibal1.classList.add('active');
        sibal2.classList.add('active');
        sibal3.classList.remove('active');
        sibal4.classList.add('active');
        sibal5.classList.add('active');

        fuck2.classList.add('active');
        fuck3.classList.remove('active');
        fuck4.classList.add('active');
       
      }

      sibal4.onclick= function(){
        sibal1.classList.add('active');
        sibal2.classList.add('active');
        sibal3.classList.add('active');
        sibal4.classList.remove('active');
        sibal5.classList.add('active');

        fuck2.classList.add('active');
       
      }

      sibal5.onclick= function(){
        sibal1.classList.add('active');
        sibal2.classList.add('active');
        sibal3.classList.add('active');
        sibal4.classList.add('active');
        sibal5.classList.remove('active');

         fuck1.classList.add('active');
        fuck2.classList.add('active');
        fuck3.classList.add('active');
        fuck4.classList.add('active');
        fuck5.classList.add('active');
       
      }

        /* for (var i = 0; i<colorDis.length; i++) {
          let colorDisArr = colorDis[i]
          colorDisArr.onclick=function() {
            colorDisArr.classList.add('bye');
          }
        }  */

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
    }
   .active{
      display:none !important;
     }
    .activeNot {
      display:inline !important;
    }
    .link.wrapper{
      width: 270px!important;
      margin-right: 0px !important;
    }
</style>
