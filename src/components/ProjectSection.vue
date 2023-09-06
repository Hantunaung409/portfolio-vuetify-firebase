<template>
    <section class="" id="projects">
        <h1 class="text-center mb-5">Projects</h1>
        <div class="mx-8">
          <v-carousel hide-delimiters show-arrows="hover" v-if="projects.length !== 0">
            <template v-for="(project, index) in projects">
              <v-carousel-item v-if="(index + 1) % columns === 1 || columns === 1" :key="index">
                <!--how much items at a time-->

                <v-row class="flex-nowrap">
                  <template v-for="(n, i) in columns">
                    <template v-if="(+index + i) < projects.length">

                      <v-col :key="i">
                        <!-- the content -->
                        <v-card class="mx-auto" max-width="400">
                          <v-img class="align-end text-white" height="200"
                            :src="projects[+index + i].imageUrl" cover>
                            <v-card-title>{{ projects[+index + i].title }}</v-card-title>
                          </v-img>

                          <v-card-subtitle class="pt-4">
                            {{ projects[+index + i].subTitle }}
                          </v-card-subtitle>

                          <v-card-text>
                            <div>{{ projects[+index + i].projectText }}</div>
                          </v-card-text>

                          <v-card-actions>
                            <a :href="projects[+index + i].codeLink" class="text-decoration-none">
                              <v-btn color="orange">
                                Code
                              </v-btn>
                            </a>
                            <v-spacer></v-spacer>
                            <a :href="projects[+index + i].demoLink" class="text-decoration-none" v-if="projects[+index + i].codeLink">
                              <v-btn color="orange">
                               Demo
                              </v-btn>
                            </a>
                          </v-card-actions>
                        </v-card>
                        <!-- {{ +index + i + 1}} 
                        {{ projects[+index + i]}} -->
                      </v-col>

                    </template>
                  </template>
                </v-row>

              </v-carousel-item>
            </template>
          </v-carousel>
        </div>

    </section>

</template>

<script>
import { db, storage } from '@/firebase';
import { collection, getDocs } from '@firebase/firestore';
import { ref as storageRef, getDownloadURL } from "firebase/storage";
import { ref,computed, onMounted} from 'vue'
import { useDisplay } from 'vuetify'
export default {
    setup () {
      let projects = ref([]);

      let load = async () => {
        try {
          const response = await getDocs(collection(db, "projects"));

            projects.value = response.docs.map((doc)=> {

              return {...doc.data(), id: doc.id}

            });

            projects.value.map(async (pro) => {
              await getDownloadURL(storageRef(storage, `project/${pro.imageName}`)).then((downLoad_url) => {
                pro.imageUrl = downLoad_url;
            });            
          });

        }catch(err){
          console.log(err);
        }
    };
    onMounted(() => {
       load();
    });

      const { name } = useDisplay();

      let columns = computed(() => {
    
      if (name.value == "xl") {
        return 3;
      }
      if (name.value == "lg") {
        return 3;
      }

      if (name.value == "md") {
        return 2;
      }

      return 1;
      })
        return { projects, columns, load}
    },
}
</script>

<style lang="scss" scoped>

</style>