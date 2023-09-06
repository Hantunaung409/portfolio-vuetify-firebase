<template>
    <div id="adminView" class=" mx-3 bg-grey-lighten-3">
      <a href="#" class="go-top"><v-icon color="black">fas fa-chevron-up</v-icon></a>
      <div class=" d-flex justify-center align-center">
        <v-btn :class="{ 'activeComponent' : isActive == 'addProject'}" variant="text" @click=" isActive = 'addProject'">Add Project</v-btn>
        <v-btn :class="{ 'activeComponent' : isActive == 'addLanguage'}" variant="text" @click=" isActive = 'addLanguage'">Add Language and Tools</v-btn>
      </div>

      <!-- add project -->
      <div class="" v-if="isActive == 'addProject' ">
        <AddProject></AddProject>
      </div>

     <!-- add project -->
      <div class="" v-if="isActive == 'addLanguage' ">
        <AddLanguageNTool></AddLanguageNTool>
      </div>
    </div>
</template>

<script>
import AddLanguageNTool from '../components/AddLanguageNTool'
import AddProject from '../components/AddProject'
import { ref } from 'vue'
export default {
  components: {
    AddLanguageNTool, AddProject },
    setup () {
        let isActive = ref("addProject");

        return { isActive }
    }
}
</script>

<style lang="scss" scoped>
#adminView{
  min-width: 400px;
}
.activeComponent {
    border-bottom: 1px solid green;
 }
</style>