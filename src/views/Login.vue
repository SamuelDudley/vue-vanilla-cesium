<template>
    <v-container
      fill-height
      fluid
    >
      <v-row
        align="center"
        justify="center"
      >
        <v-col
          cols="12"
          sm="8"
          md="4"
        >
          <v-card class="elevation-12">
            <v-toolbar
              color="primary"
              dark
              flat
            >
              <v-toolbar-title>Login form</v-toolbar-title>
              <v-spacer />
            </v-toolbar>
            <v-card-text>
              <v-form>
                <v-text-field
                  label="Login"
                  name="login"
                  prepend-icon="person"
                  type="text"
                />

                <v-text-field
                  id="password"
                  label="Password"
                  name="password"
                  prepend-icon="lock"
                  type="password"
                />
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-spacer />
              <v-btn @click="login()" color="primary">Login</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
</template>

<script>
export default {
  data: function () {
    return {
      email : "",
      password : ""
    }
  },

  props: {
    source: String,
  },

  created () {
    this.$vuetify.theme.dark = true
  },

  methods: {
    login: function () {
      console.log("login attempted...")
      let email = this.email 
      let password = this.password
      this.$store.dispatch('bearer', password ) // replace with this.response.access_token jwt from oauth server
      .then(() => this.$router.push('/'))
      // .catch(err => console.log(err))
    }
  }
}
</script>