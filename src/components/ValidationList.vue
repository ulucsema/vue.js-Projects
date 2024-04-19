<template>
  <div id="validation-list">

    <div class="container">
      <div class="a">
            <router-view :key="$route.fullPath" />
      <div class="card">
        <div class="card-body">

            <form @submit.prevent="submitForm">
              <div class="form-group">
                <label for="username">Kullanıcı Adı:</label>
                <input type="text" class="form-control" id="username" v-model="username">
              </div>
              <div class="form-group">
                <label for="email">E-posta:</label>
                <input type="email" class="form-control" id="email" v-model="email">
              </div>
              <div class="form-group">
                <label for="phone">Telefon Numarası:</label>
                <input type="tel" class="form-control" id="phone" v-model="phone">
              </div>
              <div class="form-group">
                <label for="password">Şifre:</label>
                <input type="password" class="form-control" id="password" v-model="password">
              </div>
              <div class="form-group">
                <label for="confirmPassword">Şifre Doğrulama:</label>
                <input type="password" class="form-control" id="confirmPassword" v-model="confirmPassword">
              </div>
              <div class="form-group">
                <label for="tcNo">TC No:</label>
                <input type="text" class="form-control" id="tcNo" v-model="tcNo">
              </div>
              <button type="submit" class="btn btn-info">Kayıt Ol</button>
            </form>
          <div v-if="errorMessage" class="alert alert-danger mt-3">{{ errorMessage }}</div>
        </div>
      </div>
      </div>
    </div>
  </div>

</template>

<script> 
import ValidationDataService from '../services/ValidationDataService.js';


export default {
  name: 'App',
  data() {
    return {
      username: '',
      email: '',
      phone: '',
      password: '',
      confirmPassword: '',
      errorMessage: ''
    };
  },
  methods: {
    submitForm() {
      if (!ValidationDataService.validateUsername(this.username)) {
        this.errorMessage = 'Kullanıcı adı en az 6 karakter olmalıdır.';
        return;
      }
      if (!ValidationDataService.validateEmail(this.email)) {
        this.errorMessage = 'Geçersiz e-posta adresi.';
        return;
      }
      if (!ValidationDataService.validatePhone(this.phone)) {
        this.errorMessage = 'Telefon numarası geçersiz.';
        return;
      }
      if (!ValidationDataService.validatePassword(this.password)) {
        this.errorMessage = 'Şifre en az 6 karakter olmalıdır.';
        return;
      }
      if (this.password !== this.confirmPassword) {
        this.errorMessage = 'Şifreler uyuşmuyor.';
        return;
      }
      if (!ValidationDataService.validateTcNo(this.tcNo)) {
        this.errorMessage = 'Tc No numarası geçersiz.';
        return;
      } else {
        this.$router.push({ name: 'ProductList' });

      }
      
     
    }
  }
};

</script>




<style>
.container {
  margin-top: 5px;
}
.card {
  align-justify:center; 
  width: 500px;
  margin: 0 auto;
  transform: scale(0.9);
}
template {
  background-color: white;
}
</style>