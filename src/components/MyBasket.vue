<template>
  <div>
    <h3 class="header">SEPETİM</h3>
    <div v-if="cartItems.length === 0">
      <p>Sepetiniz boş.</p>
      <button class="btn btn-sm btn-outline-info" @click="showEmptyCartPopup">Satın Al</button>
    </div>
    <div v-else>
      <p v-for="(item, index) in cartItems" :key="index">
        <button class="btn btn-sm btn-outline-danger" @click="removeFromCart(index)">Sepetten Çıkar</button>
        {{ item }}
      </p>
      <button class="btn btn-sm btn-outline-info" @click="showPurchasePopup">Satın Al</button>
    </div>

    <div v-if="showPopup">
      <div class="popup">
        <span @click="closePopup">&times;</span>
        <p>{{ popupMessage }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { store } from '../store';

export default {
  data() {
    return {
      showPopup: false,
      popupMessage: ''
    };
  },
  computed: {
    cartItems() {
      return store.cartItems;
    }
  },
  methods: {
    removeFromCart(index) {
      store.cartItems.splice(index, 1);
    },
    showEmptyCartPopup() {
      this.popupMessage = 'Sepetinizde ürün yok. Lütfen ürün ekleyiniz.';
      this.showPopup = true;
    },
    showPurchasePopup() {
      this.popupMessage = 'Satın alındı.';
      this.showPopup = true;
      setTimeout(() => {
        this.showPopup = false;
        store.cartItems = [];
      }, 1000);
    },
    closePopup() {
      this.showPopup = false;
    }
  }
};
</script>

<style>
.popup {
  position: fixed;
  top: 10%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #93e4c1;
  padding: 30px;
  border: 10px solid white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 9999;
}

.popup span {
  position: fixed;
  top: 5px;
  right: 10px;
  cursor: pointer;
}
.header {
  margin: 5px;
  text-align: center;
  background-color: #1f6f78;
  font-family: fangsong;
  color: #ffffff;
}
.btn{
  font-family: fangsong;
}
.div {
  background-color: blue;
}
</style>

