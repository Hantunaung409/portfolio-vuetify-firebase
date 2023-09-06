<template>
      <v-footer>
        <v-card elevation="0" rounded="0" width="100%" class=" w-100">
            <v-card-text class="text-black ">
                <v-row>
                    <v-col cols="12" sm="4">
                        <div class="d-flex justify-space-between">
                            <a href="https://web.facebook.com/hanhtunaung.1213894" class=" text-decoration-none text-black">
                                <v-icon>fa-brands fa-facebook</v-icon>
                            </a>
                            <a href="" class=" text-decoration-none text-black">
                                <v-icon>fa-brands fa-linkedin</v-icon>
                            </a>
                            <a href="https://www.instagram.com/castiel_in_hell11/" class=" text-decoration-none text-black">
                                <v-icon>fa-brands fa-instagram</v-icon>
                            </a>
                            <a href="https://github.com/Hantunaung409" class=" text-decoration-none text-black">
                                <v-icon>fa-brands fa-github</v-icon>
                            </a>
                        </div>                        
                    </v-col>
                    <v-col cols="12" sm="8" class=" text-center text-sm-end">
                        {{ new Date().getFullYear() }},
                        <strong>&copy; Han Tun Aung All Rights Reserve</strong>                          
                    </v-col>

                </v-row>

            </v-card-text>
        </v-card>
      </v-footer>
</template>

<script>
export default {
    name: 'FooterSection',
    setup () {
        

        return {}
    }
}
</script>

<style lang="scss" scoped>

</style>