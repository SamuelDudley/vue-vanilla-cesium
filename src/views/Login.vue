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
                  v-model="user"
                  label="Login"
                  name="login"
                  prepend-icon="person"
                  type="text"
                />
                <v-text-field
                  v-model="password"
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
      user : "",
      password : ""
    }
  },

  created () {
    this.$vuetify.theme.dark = true
  },

  methods: {
    login: function () {
      // eslint-disable-next-line no-console
      console.log("login attempted...")
      let user = this.user 
      let password = this.password
      // make call to auth server and return jwt
      this.$store.dispatch('bearer', password ) // replace with this.response.access_token jwt from oauth server
      .then(() => this.$router.push('/'))
      // eslint-disable-next-line no-console
      .catch(err => console.log(err))
    }
  }
}
</script>