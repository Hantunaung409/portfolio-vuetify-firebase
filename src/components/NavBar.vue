<template>
    <v-app-bar app color="black" dark flat class="px-6" style="position: fixed; z-index: 2100;">
    <v-btn rounded>
        <!-- <v-icon color="yellow" left class="mr-2">fas fa-signature</v-icon>Han -->
       <router-link :to="{ name: 'login'}">
            <v-avatar size="40px">
                <v-img alt="Avatar"
                    src="../../src/assets/lucifer.png"></v-img>
            </v-avatar>    
       </router-link> 

    </v-btn>  

        <v-spacer></v-spacer>
        <v-btn @click="scroll('home')" class="d-none d-sm-block" :class="{ 'text-yellow': activeName == 'home' }">Home</v-btn>
        <v-btn @click="scroll('about')" class="d-none d-sm-block"
            :class="{ 'text-yellow': activeName == 'about' }">About</v-btn>
        <v-btn @click="scroll('projects')" class="d-none d-sm-block"
            :class="{ 'text-yellow': activeName == 'projects' }">Projects</v-btn>
        <v-btn @click="scroll('contact')" class="d-none d-sm-block"
            :class="{ 'text-yellow': activeName == 'contact' }">Contact</v-btn>
        <v-btn @click="drawer = !drawer" class=" d-sm-none"><v-icon>fas fa-bars</v-icon></v-btn>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" temporary style="z-index: 2002; position: fixed;" class="bg-grey-darken-2" sticky>
        <v-list>
            <v-list-item prepend-icon="fas fa-home" class="text-white">
                <v-btn variant="text" width="80%" class="justify-start"
                    @click="scroll('home')">Home</v-btn>
            </v-list-item>
            <v-list-item prepend-icon="fas fa-question" class="text-white">
                <v-btn variant="text" width="80%" class=" justify-start"
                    @click="scroll('about')">About</v-btn>
            </v-list-item>
            <v-list-item prepend-icon="fas fa-laptop" class="text-white">
                <v-btn variant="text" width="80%" class=" justify-start"
                    @click="scroll('projects')">Projects</v-btn>
            </v-list-item>
            <v-list-item prepend-icon="fas fa-phone" class="text-white">
                <v-btn variant="text" width="80%" class=" justify-start"
                    @click="scroll('contact')">Contact</v-btn>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
export default {
    name: 'NavBar',
    data() {
        return {
            drawer: false,
            activeName: 'home',
        }
    },
    methods: {
        scroll(refId) {
            const scrollToElement = document.getElementById(refId);
            this.activeName = refId;
            scrollToElement.scrollIntoView({ behavior: 'smooth' });
        },

    },
    mounted() {
        window.addEventListener('scroll', () => {
            let scrollY = window.pageYOffset;
            if (scrollY >= 0 && scrollY <= 250) {
                this.activeName = "home";
            } else if (scrollY >= 250 && scrollY <= 1000) {
                this.activeName = "about";
            } else if (scrollY >= 1000 && scrollY <= 1700) {
                this.activeName = "projects";
            } else if (scrollY >= 1700) {
                this.activeName = "contact";
            }
        });

    },
}

</script>

<style lang="scss" scoped>

</style>