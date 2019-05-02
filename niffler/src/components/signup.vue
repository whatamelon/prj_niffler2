<template>
  <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  >

  <v-toolbar color="#FF6F61" class="mb-3" dark>
        <router-link to="/" color="#FF6F61" ><v-icon>keyboard_arrow_left</v-icon></router-link>
          <v-toolbar-title class="ml-4"> 회원가입 </v-toolbar-title>
	</v-toolbar>

    <v-text-field class="px-3"
      v-model="id"
      :counter="10"
      :rules="idRules"
      label="ID"
      required
    ></v-text-field>

	<v-text-field class="px-3"
	   v-model="password"
	   :counter="20"
	   :rules="passwordRules"
        label="비밀번호"
		required
    ></v-text-field>

	<v-text-field class="px-3"
	   v-model="passwordCheck"
	   :counter="20"
	   :rules="passwordCheckRules"
        label="비밀번호 확인"
		required
    ></v-text-field>

	<v-text-field class="px-3"
      v-model="name"
      :rules="nameRules"
      label="이름"
      required
    ></v-text-field>
	
	<v-text-field class="px-3"
      v-model="job"
      :rules="jobRules"
      label="직업"
      required
    ></v-text-field>

    <v-text-field class="px-3"
      v-model="hobby"
      :rules="hobbyRules"
      label="취미"
      required
    ></v-text-field>

    <v-select class="px-3"
      v-model="select"
      :items="items"
      :rules="[v => !!v || '나이대를 알려주세요!']"
      label="나이대"
      required 
    ></v-select>

    <v-checkbox class="px-3"
      v-model="checkbox"
      :rules="[v => !!v || '동의하셔야 회원가입이 진행됩니다!']"
      label="개인정보 수집에 동의하십니까?"
      required
    ></v-checkbox>

    <v-btn
      :disabled="!valid"
      color="green"
      @click="validate"
    >
      Validate
    </v-btn>

    <v-btn
      color="red"
      @click="reset"
    >
      Reset Form
    </v-btn>

  </v-form>
</template>

<script>
  export default {
    data: () => ({
	  valid: true,
	  id: '',
      idRules: [
        v => !!v || 'ID를 적어주세요!',
        v => (v && v.length <= 10) || '아이디는 10자 이상이어야 합니다.'
	  ],
	  
	  password: '',
      passwordRules: [
        vp => !!vp || '비밀번호를 적어주세요!',
        vp => (vp && vp.length <= 20) || '비밀번호는 8 - 20자 이어야 합니다.'
	  ],
	  
	  passwordCheck: '',
      passwordCheckRules: [
        vChk => !!vChk || '비밀번호를 확인하세요!',
        vChk => (v != vChk ) || '비밀번호를 확인해주세요!'
      ],

      name: '',
      nameRules: [
        n => !!n || '이름을 알려주세요!'
	  ],

	  job: '',
      jobRules: [
        j => !!j || '직업을 알려주세요!'
	  ],

	  hobby: '',
      hobbyRules: [
        h => !!h || '취미를 알려주세요!',
      ],
      select: null,
      items: [
        '0-9',
        '10-19',
        '20-29',
		'30-39',
		'40-49',
		'50-59'
      ],
	  checkbox: false
    }),

    methods: {
      validate () {
        if (this.$refs.form.validate()) {
          this.snackbar = true
        }
      },
      reset () {
        this.$refs.form.reset()
      }
    }
  }
</script>

<style>
.menuable__content__active{
	top:40px !important;
	left:0px !important;
}
.router-link-active {
    text-decoration: none;
    }
</style>