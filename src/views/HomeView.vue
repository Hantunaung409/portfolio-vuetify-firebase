<template>
 <v-app id="homeView" class="bg-grey-lighten-3">
  <!-- go to top -->
  <a href="#" class="go-top"><v-icon color="black">fas fa-chevron-up</v-icon></a>

  <NavBar></NavBar>

  <v-container fluid>

    <!-- head -->
    <section class="head" id="home">
        <v-row class="mt-5">
          <v-col cols="12" sm="5" offset="sm-1">
            <div style="position: relative; z-index:2001;" class="mt-16">
              <h1 class="text-grey">Hello,</h1>
              <h1 class="text-white">I'm Han Tun Aung</h1>
              <span class="text-grey">Web Developer</span> <br>
              <a href="#contact" class="text-decoration-none"><v-btn tile dark class="text-yellow mt-8" variant="outlined">Contact me</v-btn></a>
            </div>
          </v-col>

          <v-col class="d-none d-sm-block" cols="5">
            <div class="mt-6" style="position: relative;z-index: 2000;">
              <v-img src="../../src/assets/gahag-muser7.svg" contain max-height="250"></v-img>
            </div>
          </v-col>
        </v-row>
      </section>

      <AboutSection></AboutSection>

      <ProjectSection></ProjectSection>

      <ContactSection></ContactSection>
  </v-container>
  <FooterSection></FooterSection>
 </v-app>
</template>

<script lang="ts" scope>
import { defineComponent } from 'vue';
// Components
import NavBar from '../components/NavBar.vue'
import AboutSection from '../components/AboutSection.vue'
import ProjectSection from '../components/ProjectSection.vue'
import ContactSection from '../components/ContactSection.vue'
import FooterSection from '../components/FooterSection.vue'
export default defineComponent({
  name: 'HomeView',
  components: { NavBar, AboutSection, ProjectSection, ContactSection, FooterSection},

  methods: {
    goToTop() {
      let goTop = document.getElementsByClassName("go-top");
        window.addEventListener('scroll',function(){
            if(window.pageYOffset > 250){
                goTop[0].classList.add('active');
            }else{
                goTop[0].classList.remove('active');
            }
        })
    }
  },

  mounted() {
    if (this.$route.name == 'home') {
          this.goToTop();
    }
    

  },

});


</script>
<style>
* {
  scroll-behavior: smooth;
}

.v-container {
  padding: 16px 0;
}

.head {
  position: relative;
  text-align: center;
  padding: 12px;
  margin-bottom: 6px;
  height: 70vh;
  width: 100%;
  color: white;
}

.head::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 50%;
  background: black;
  transform: skew(0deg, 6deg);
}

.head::after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  width: 50%;
  background: black;
  transform: skew(0deg, -6deg);
}
.go-top {
  text-align: center;
  position: fixed;
  background-color: #FFEB3B;
  bottom: 70px;
  right: 25px;
  z-index: 5000;
  display: inline-block;
  padding: 5px 10px 10px 10px;
  border-radius: 50%;
  opacity: 0;
  transition: all 0.5s;
}

.go-top.active {
  opacity: 1;
}
</style>
