<template> 
	
    <v-app>

    <v-toolbar color="#FF6F61" class="mb-3" dark>
        <router-link to="/" color="#FF6F61" ><v-icon>keyboard_arrow_left</v-icon></router-link>
          <v-toolbar-title class="ml-4"> What is it? </v-toolbar-title>
    </v-toolbar>

    <v-content>
        <v-layout row wrap>
            <v-flex xs12>
            <v-title class="headline"> Project Niffler </v-title>
            </v-flex>

            <v-flex>

                <v-card class="pa-4 ma-3">
                      <h4 class="mb-3">Project Niffler는 SNS의 홍수 속에서 사람들이 남들에게 보이는 것 보다는
                                    자기개발에 조금 더 신경 썻으면 하는 마음에 시작했습니다.</h4>

                     <h4 class="mb-3">졸업작품으로 개발을 시작했으며, 개인 서비스 플랫폼이라고 볼 수 있습니다.</h4>

                    <h4 class="mb-3">우리는 그날의 날씨와 기분이라는 생활 밀착형 서비스와 사용자가 관심있는 트렌드를
                                    비교해보는 구글 트렌드 서비스를 제공합니다.</h4>

                    <h4 class="mb-3"> 당신이 우리 서비스를 사용함으로 자기 자신에 대해 조금 더 알아갔으면 합니다.</h4>

                    <h4 class="mb-3">-Project Niffler-</h4>

                </v-card>

            </v-flex>



        </v-layout>
    </v-content>


    </v-app>

</template>


<script>



</script>


<style>
.router-link-active {
    text-decoration: none;
    }
</style>