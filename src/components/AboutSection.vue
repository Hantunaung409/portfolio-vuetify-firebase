<template>
  <section class="" id="about">
    <v-col cols="12" class="mt-16 ">

      <!-- about -->
      <v-row class="ma-5">
        <v-col cols="12" sm="10" class=" offset-sm-1">
          <h1 class="text-center">About Me</h1>
          <p class="text-grey-darken-3 mt-3">A <span class=" text-black font-weight-bold">Laravel Vuejs</span> developer
            with craving for experieces, open-minded, and accountability.I won't try to assert you that I will always be full of excitement but I guarantee that I don't easily get bored.</p>
        </v-col>
      </v-row>

      <!-- Timeline -->
      <v-row class="ma-5">
        <div class="d-none d-sm-block">
          <v-timeline align="start">
            <v-timeline-item icon="fas fa-graduation-cap" dot-color="white" fill-dot>
              <template v-slot:opposite>
                <!-- Opposite content -->
              </template>
              <div>
                <div class="text-caption text-grey-darken-2">2017-2020</div>
                <p>
                  <span class=" font-weight-bold">Inforamtion Science Technology(Ist)</span>-University of Technology (Yadanapon Cyber City)
                </p>
              </div>
            </v-timeline-item>

            <v-timeline-item icon="fas fa-certificate" dot-color="white" fill-dot>
              <template v-slot:opposite>
                <!-- Opposite content -->
              </template>
              <div>
                <div class="text-caption text-grey-darken-2">2018</div>
                <p>
                  <span class=" font-weight-bold">Object Oriented Programming in C++</span> by ASEAN Cyber University
                </p>
              </div>
            </v-timeline-item>

            <v-timeline-item icon="fas fa-briefcase" dot-color="white" fill-dot>
              <template v-slot:opposite>
                <!-- Opposite content -->
              </template>
              <div>
                <div class="text-caption text-grey-darken-2">2022-Today</div>
                <p>
                  Self-employed at web development since mid July of 2022 .
                </p>
              </div>
            </v-timeline-item>
          </v-timeline>          
        </div>

         <div class="d-sm-none">
          <v-timeline side="end">
            <v-timeline-item icon="fas fa-graduation-cap" dot-color="white" fill-dot>
              <template v-slot:opposite>
                <!-- Opposite content -->
              </template>
              <div>
                <div class="text-caption text-grey-darken-2">2017-2020</div>
                <p>
                  <span class=" font-weight-bold">Inforamtion Science Technology(Ist)</span>-University of Technology (Yadanapon Cyber City)
                </p>
              </div>
            </v-timeline-item>

            <v-timeline-item icon="fas fa-certificate" dot-color="white" fill-dot>
              <template v-slot:opposite>
                <!-- Opposite content -->
              </template>
              <div>
                <div class="text-caption text-grey-darken-2">2018</div>
                <p>
                  <span class=" font-weight-bold">Object Oriented Programming in C++</span> by ASEAN Cyber University
                </p>
              </div>
            </v-timeline-item>

            <v-timeline-item icon="fas fa-briefcase" dot-color="white" fill-dot>
              <template v-slot:opposite>
                <!-- Opposite content -->
              </template>
              <div>
                <div class="text-caption text-grey-darken-2">2022-2023</div>
                <p>
                  Self-employed at web development since mid July of 2022 .
                </p>
              </div>
            </v-timeline-item>
          </v-timeline>          
         </div>

      </v-row>

      <!-- languages and toools -->
      <h1 class="text-center mt-5">Languages & Tools</h1>
      <v-row class=" ma-5">
        <v-col cols="12" sm="6" lg="4" v-for="skill in skills" :key="skill.name">
          <v-row class="align-center justify-center">
            <v-col cols="2">
              <h1 :title="skill.name"><v-img :src="skill.svgLink"></v-img></h1>
            </v-col>
            <v-col cols="10">
              <v-progress-linear v-model="skill.marks" :color="skill.color" height="15" rounded>
                <strong>{{ Math.ceil(skill.marks) }}%</strong>
              </v-progress-linear>
            </v-col>

          </v-row>
        </v-col>
      </v-row>

    </v-col>
  </section>
</template>

<script>
import { db } from '@/firebase';
import { collection, getDocs } from '@firebase/firestore';
import { ref } from 'vue'
import { onMounted } from 'vue';
export default {
  name: 'AboutSection',
  setup() {
    //   let skills = ref([
    //     { name: 'HTML5', marks: 85, color: '#e34f26', svgLink: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg' },
    //     { name: 'CSS', marks: 80, color: '#264de4', svgLink: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg' },
    //     { name: 'BootStrap5', marks: 85, color: '#563d7c', svgLink: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-original-wordmark.svg' },
    //     { name: 'JavaScript', marks: 80, color: 'yellow', svgLink: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg' },
    //     { name: 'JQuery', marks: 80, color: '#0769ad', svgLink: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/jquery/jquery-original-wordmark.svg' },
    //     { name: 'VueJs', marks: 85, color: 'green', svgLink: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/vuejs/vuejs-original-wordmark.svg' },
    //     { name: 'PHP', marks: 85, color: '#8993be', svgLink: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg' },
    //     { name: 'Laravel', marks: 85, color: '#e34f26', svgLink: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/laravel/laravel-plain-wordmark.svg' },
    //     { name: 'MySql', marks: 85, color: '#00758F', svgLink: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg' },
    //     { name: 'PostMan', marks: 85, color: '#e34f26', svgLink: 'https://raw.githubusercontent.com/flathub/com.getpostman.Postman/master/logo-mark.svg' },
    //     { name: 'Linux', marks: 85, color: '#333333', svgLink: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg' },
    // ])

    let skills = ref([]);

    let load = async () => {
      try {
        const response = await getDocs(collection(db, 'skills'));

        skills.value = response.docs.map(doc => {

          return { ...doc.data(), id: doc.id };
        })


      } catch (err) {
        console.log(err);
      }
    };

    onMounted(() => {
      load();
    });
    return { skills, load }
  }
}
</script>

<style lang="scss" scoped></style>