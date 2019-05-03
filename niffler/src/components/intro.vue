<template>
  <div id="intro_all">
  	<div id="intro_head">
  		<p class="date">{{comDate}}</p>
  	</div>
  	<div id="intro_body1">
  		<p class="title">thisiswhoami</p>
  	</div>
  	<div id="intro_body2">
			<v-layout row justify-center>
    <v-dialog v-model="dialog" max-width="600px">
      <template v-slot:activator="{ on }">
        <v-btn color="#000000" dark v-on="on" class="mb-0">Log in</v-btn>
      </template>
      <form v-on:submit.prevent="login" id="login">
      <v-card>
        <v-card-title>
          <span class="headline" style="margin-left:33%;">로그인</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12>
                <v-text-field label="아이디" id="usr_id" ref="usr_id" required></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field label="비밀번호" type="password" id="usr_password" ref="usr_password" required></v-text-field>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-btn color="black" dark block class="mb-3" v-on:click="login" raised @click="dialog = false">Log In</v-btn>
        </v-card-actions>
      </v-card>
      </form>
    </v-dialog>
  </v-layout>
  		<div class="li"><a href="/#/signup" class="a_liSign">Sign Up</a></div>
  		<div class="li"><a href="/#/FAQ" class="a_liFAQ">FAQ</a></div>
  	</div>
  	<div id="intro_footer">
  		<a href="/#/whatisit" class="a_liwhat">what is it?</a>
  	</div>
  </div>
</template>



<script>
import axios from 'axios';
export default {
  methods:{
    login:function(){
      var usr_id = this.$refs.usr_id.value;
      var usr_password = this.$refs.usr_password.value;
      axios.post('/login', {
        usr_id:'usr_id',
        usr_password:'usr_password'
      });
    }
  },
computed:{
 	comDate:function(){
 		var d = new Date();
        var currentDate = d.getFullYear() + " / " + ( d.getMonth() + 1 ) + " / " + d.getDate() ;
        var currentTime = d.getHours() + " : " + d.getMinutes() + " " ;
        var result = document.getElementById("time-result");
       return currentDate + "  " + currentTime + " " + "Seoul";
 	}
	 },
	 data: () => ({
      dialog: false
    })
}
       

</script>


<style>

#intro_all {
	background-color:#000000;
    width: -webkit-fill-available;
    height: -webkit-fill-available;
	
}

p.date{
	margin-top:0px;
	color : #FFFFFF;
}

p.title{
	margin-top:30%;
	color : #FFFFFF;
}

#intro_body2 {
	margin-top:30%;
	color:#FFFFFF;
}
.li {
	margin-top:5%;
	margin-bottom:8%;
}

#intro_footer {
	border: 3px solid #FFFFFF;
	color: #FFFFFF;
	margin-top:30%;
	margin-left:30%;
	margin-right:30%;
}
a.a_liFAQ{
    text-decoration: none;
    color:#FFFFFF;
}
a.a_liwhat{
    text-decoration: none;
    color:#FFFFFF;
		
}
a.a_liSign{
    text-decoration: none;
    color:#FFFFFF;
		margin-top:0%; 
}
</style>
