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
      <router-link to="/main" class="link"><v-btn icon><v-icon>keyboard_arrow_right</v-icon></v-btn></router-link>
    </v-toolbar>
    
    <v-content>
      <v-container>
        <v-layout row wrap>
        <v-flex xs12>
          <v-subheader>검색어를 입력해주세요!</v-subheader>
        </v-flex>
        <v-flex justify-center offset-xs1>
         	 <v-card width="200px" height="70px">
         	 	<v-card-title class="pb-3">
         	 		<div>
         	 			<input placeholder="검색어1" style="height:40px;">
         	 		</div>
         	 	</v-card-title>
          	</v-card>
              <v-card class="second" width="200px" height="70px">
         	 	<v-card-title class="pb-3">
         	 		<div>
         	 			<input placeholder="검색어2" style="height:40px;">
         	 		</div>
         	 	</v-card-title>
          	</v-card>
        </v-flex>
            <div style="float:right; width:30px;">
                <v-btn raised small class="right" color="#90CAF9">검색</v-btn>
            </div>

         <v-flex xs12 class="pt-4">

        </v-flex>
        <v-flex justify-center offset-xs1>
         
        </v-flex>
   
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
  export default {
   data () {
      return {
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
    .v-card.v-sheet.theme--light.second{
        margin-top:20px;
    }
    button.right.v-btn.v-btn--small.theme--light{
        height:160px;
        left:10px;
        margin-top:0px;
    }
    .link{
      color : #FF8F00;
    }
</style>
