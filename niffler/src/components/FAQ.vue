<template> 
	
    <v-app>

    <v-toolbar color="#FF6F61" class="mb-3" dark>
        <router-link to="/" color="#FF6F61" ><v-icon>keyboard_arrow_left</v-icon></router-link>
          <v-toolbar-title class="ml-4"> FAQ </v-toolbar-title>
    </v-toolbar>

    <v-content>
        <v-layout row wrap>

            <v-flex>

            <v-expansion-panel v-model="currSection" @expand="onFocus($event, n)">

                <v-expansion-panel-content v-for="(section, n) in sections" :value="n==currSection" :key="`expansion-${n}`"
                     @input="onInput($event, n)" @focus="$emit($event, n)">

                        <h3 slot="header" title>
                                <v-icon left dark>{{expandIcon(n)}}</v-icon>
                                 {{section.title}}
                        </h3>

                    <v-card light>

                        <v-card-text>
                         "{{section.field}}"
                         </v-card-text>

                    </v-card>
                    
                </v-expansion-panel-content>
            </v-expansion-panel>

            </v-flex>

        </v-layout>
    </v-content>
    </v-app>
</template>


<script>
export default {
  data: () => ({
    msgId: "MSGID",
    currSection: 0,
    openSection: true,
    sections: [
      {
        complete: false,
        title: "로그인이 안돼요.",
        field: "아이디 비밀번호 다시 한 번 확인해 주세요."
      },
      {
        complete: false,
        title: "어떻게 사용하죠?",
        field: "날씨 잘 보시구, 구글 트렌드 잘 활용하시구, 그 날 그 날 기분에 따라 활용하시면 됩니다!"
      },
      {
        complete: false,
        title: "처음화면 배경이 왜 검은색이죠?",
        field: "Intro는 thisisneverthat의 사이트를 오마쥬 했습니다! 그래서 검은색이에요!"
      },
      {
        complete: false,
        title: "업데이트 안하나요?",
        field: "시간되면 슬슬 하겠습니다!"
      },
      {
        complete: false,
        title: "날씨는 어떻게 봐요?",
        field: "날씨 탭 들어가시면 됩니다!"
      },
      {
        complete: false,
        title: "회원탈퇴는 어떻게 하죠?",
        field: "로그인 하시면 인트로에 회원탈퇴 부분이 있습니다! 안녕히가세요!"
      },
      {
        complete: false,
        title: "밥은 언제 먹죠?",
        field: "그러게요... 삼시세끼 챙겨먹어야되는데... "
      }
    ]
  }),
  methods: {
    expandIcon: function (n) {
      return (this.openSection && (n === this.currSection)) ? "keyboard_arrow_up" : "keyboard_arrow_down";
    },
    onInput (isOpen, n) {
      if (n === this.currSection) {
        this.openSection = isOpen;
      } else {
        this.openSection = true;
      }

      this.currSection = n;
      console.log(`Selected section: ${n + 1}, openSection=${this.openSection ? "open" : "closed"}, input=${isOpen}`);
    },
    onFocus (ev, n) {
      console.log("Section click:", n + 1, ev);
    },
    prevSection () {
      if (this.currSection > 0) {
        this.currSection--;
      }
    },
    nextSection () {
      if (this.currSection + 1 < this.sections.length) {
        this.currSection++;
      }
    },
    doClose () {
      this.$emit('closePanel');
    },
    generateForm (msgId, steps, fields) {

    }
  },
  mounted () {
  }
}
</script>


<style>
.router-link-active {
    text-decoration: none;
    }
</style>