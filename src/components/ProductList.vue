<template>
  <div class="album py-5 bg-body-tertiary">
    <div class="container">

      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        <div class="col">
          <div class="card shadow-sm">
             <img src="../assets/cello.jpeg" />
            <div class="card-body">
               <h5> ÇELLO</h5>              
              <div class="fiyat">12000 TL</div> 
              <p class="card-text">Yüksek kaliteli kahverengi ahşap malzemeden özenle yapılmıştır. Ahşap gövde, enstrümanın doğal güzelliğini sergiler. Çellonun sapı, dayanıklı ve sağlam akçaağaçtan yapılmıştır. Akçaağaç sapın dengeli yapısı, çalıcının tekniğini geliştirmesine ve enstrümandan maksimum performansı elde etmesine yardımcı olur.</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
               <button type="button" class="btn btn-sm btn-outline-info" @click="addToCart('ÇELLO - 12000TL')">Sepete Ekle</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card shadow-sm">
            <img src="../assets/keman.jpeg" />
            <div class="card-body">
            <h5> KEMAN</h5> 
            <div class="fiyat">15000 TL</div> 
              <p class="card-text">Yüksek kaliteli kahverengi ahşap kullanılarak özenle yapılmıştır. Güçlü ve zengin bir ses sunan gövdesi, ustalıkla işlenmiş ağaçlarla dikkat çeker. Sağlam akçaağaç sapı, çalıcının rahat bir tutuş sağlaması için tasarlanmıştır.</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-info" @click="addToCart('KEMAN - 15000TL')">Sepete Ekle</button>
                 </div>
               </div>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card shadow-sm">
            <img src="../assets/kontrabas.jpeg" />
            <div class="card-body">
            <h5>KONTRABAS</h5> 
            <div class="fiyat">20000 TL</div> 
              <p class="card-text">Yüksek kaliteli kahverengi ahşap kullanılarak özenle yapılmıştır. Tel takımı, her nota için net ve güçlü bir ton elde etmek için özenle seçilmiştir. Ayarlanabilir teller ve diğer ayarlar, çalıcının optimum çalım performansını sağlamak için hassasiyetle yapılmıştır.</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-info" @click="addToCart('KONTRABAS - 20000TL')">Sepete Ekle</button>
                 </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card shadow-sm">
           <img src="../assets/akustikgitar.jpeg" />
            <div class="card-body">
            <h5> AKUSTİK GİTAR</h5> 
            <div class="fiyat">13000 TL</div> 
              <p class="card-text">Doğal ahşap malzemeden özenle yapılmıştır ve sıcak tonlarıyla dikkat çeker. Akçaağaç sapı, güçlü bir tutuş sağlarken, çalıcının tekniğini geliştirmesine olanak tanır.</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-info" @click="addToCart('AKUSTİK GİTAR - 13000TL')">Sepete Ekle</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card shadow-sm">
           <img src="../assets/elektrogitar.jpeg" />
            <div class="card-body">
            <h5> ELEKROGİTAR</h5> 
            <div class="fiyat">9000 TL</div> 
              <p class="card-text">Bu elektro gitar, her türlü müzik tarzında ve performans ortamında kullanılmak üzere tasarlanmıştır. Ayrıca, düşük eylem ayarı, kolay çalım ve hızlı sololar için mükemmel bir platform sağlar.</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-info" @click="addToCart('ELEKROGİTAR - 9000TL')">Sepete Ekle</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card shadow-sm">
           <img src="../assets/klasikgitar.jpeg" />
            <div class="card-body">
            <h5>KLASİK GİTAR</h5> 
            <div class="fiyat">8000 TL</div> 
              <p class="card-text">Yüksek kaliteli malzemeler ve el işçiliği ile üretilmiştir, sanat ve performans arasında mükemmel bir denge sağlar. Hem geleneksel repertuarları icra etmek hem de yeni müzikal keşifler yapmak isteyen her seviyedeki çalıcı için mükemmel bir seçenektir. </p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-info" @click="addToCart('KLASİK GİTAR - 8000TL')">Sepete Ekle</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card shadow-sm">
             <img src="../assets/davul.jpeg" />
            <div class="card-body">
            <h5>DAVUL</h5> 
            <div class="fiyat">21200 TL</div> 
              <p class="card-text">Kaliteli malzemeler kullanılarak üretilen davul kasası, sağlam bir zemin sunar ve titreşimlerin dengeli bir şekilde dağılmasını sağlar. Bateri setinin parçaları, ergonomik tasarımıyla çalıcının rahat bir çalım deneyimi yaşamasını sağlar. Ayarlanabilir özellikler sayesinde, her çalıcı kendi tercihlerine göre en iyi çalım pozisyonunu kolaylıkla ayarlayabilir.</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-info" @click="addToCart('DAVUL - 21200TL')">Sepete Ekle</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card shadow-sm">
           <img src="../assets/elektronik-davul.jpeg" />
            <div class="card-body">
            <h5> ELEKTRONİK DAVUL</h5> 
            <div class="fiyat">24000 TL</div> 
              <p class="card-text">Dayanıklı ve hafif yapısı, taşınabilirlik ve sahne performansları için ideal bir çözüm sunar. Davul pad'leri ve pedallar, gerçek davula benzer bir çalım hissi sağlar ve çalıcının doğal bir performans sergilemesini sağlar.</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-info" @click="addToCart('ELEKTRONİK DAVUL - 24000TL')" >Sepete Ekle</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card shadow-sm">
           <img src="../assets/orff.jpeg" />
            <div class="card-body">
            <h5> ORFF</h5> 
            <div class="fiyat">6000 TL</div> 
              <p class="card-text">Bu çalgılar, sağlam ve dayanıklı yapılarıyla uzun süreli kullanım için uygundur. Ahşap ve metal gibi kaliteli malzemelerden üretilmiş olmaları, net ve zengin sesler sağlar. Ayrıca, ergonomik tasarımları, çocukların rahatça çalmasını ve müziğin tadını çıkarmasını sağlar. </p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-info" @click="addToCart('ORFF - 6000TL')">Sepete Ekle</button>
                </div>
              </div>
            </div>
          </div>
        </div>

         <div class="col">
          <div class="card shadow-sm">
           <img src="../assets/mizika.jpeg" />
            <div class="card-body">
            <h5> MIZIKA</h5> 
            <div class="fiyat">3000 TL</div> 
              <p class="card-text">Dayanıklı yapısı ve basit tasarımı, mızıkayı hem profesyonel müzisyenlerin hem de yeni başlayanların tercihi haline getirir. Taşınabilirliği, onu her yerde ve her zaman çalınabilir kılar. </p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-info" @click="addToCart('MIZIKA - 3000TL')">Sepete Ekle</button>
                </div>
              </div>
            </div>
          </div>
        </div>

       <div class="col">
          <div class="card shadow-sm">
           <img src="../assets/saksafon.jpeg" />
            <div class="card-body">
            <h5>SAKSAFON</h5> 
            <div class="fiyat">23000 TL</div> 
              <p class="card-text"> Saksafonun zarif tasarımı ve ergonomik yapısı, çalıcının doğal bir çalım deneyimi yaşamasını sağlar. Tenor, alto, soprano ve bariton gibi farklı türlerdeki saksafonlar, geniş bir ses yelpazesi sunar ve her türlü müzik tarzında kullanılabilir.</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-info" @click="addToCart('SAKSAFON - 23000TL')">Sepete Ekle</button>
                </div>
              </div>
            </div>
          </div>
        </div>

         <div class="col">
          <div class="card shadow-sm">
           <img src="../assets/trompet.jpeg" />
            <div class="card-body">
            <h5>TROMPET</h5> 
            <div class="fiyat">8000 TL</div> 
              <p class="card-text">Dayanıklı ve yüksek kaliteli malzemelerden üretilen trompetler, uzun süreli kullanım için uygun bir yapıya sahiptir. Ayrıca, farklı tonalite seçenekleri ve ayarlanabilir özellikler sayesinde, her müzisyenin kişisel tercihlerine göre en iyi sesi elde etmesini sağlar.</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-info" @click="addToCart('TROMPET - 8000TL')">Sepete Ekle</button>
                </div>
              </div>
            </div>
          </div>
        </div>

         <div class="col">
          <div class="card shadow-sm">
           <img src="../assets/org.jpeg" />
            <div class="card-body">
            <h5>ORG</h5> 
            <div class="fiyat">11000 TL</div> 
              <p class="card-text">Org, dinamik performanslar için ideal bir enstrümandır. Hem sololar hem de eşlik parçaları için uygundur ve her türlü müzik tarzında kullanılabilir. Ayrıca, çok seslilik ve harmonik zenginlik, müziğinizi daha etkileyici hale getirir.</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-info" @click="addToCart('ORG - 11000TL')">Sepete Ekle</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card shadow-sm">
           <img src="../assets/piyano.jpeg" />
           <div class="card-body">
           <h5>PİYANO</h5> 
           <div class="fiyat">50000 TL</div> 
              <p class="card-text">Beyaz renkli piyano, klavyenin üzerindeki düğmeleri ve ayarlarıyla birlikte, şık ve minimalist bir görünüme sahiptir. Kolayca ayarlanabilir pedal sistemi, çalıcının ifadesini zenginleştirir ve performansını daha dinamik hale getirir.</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-info" @click="addToCart('PİYANO - 50000TL')">Sepete Ekle</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>



</template>

<script>
import { store } from '../store';

export default {
  methods: {
    addToCart(productName) {
      // Add product to cart
      store.cartItems.push(productName);

      // Show pop-up message
      this.showPopupMessage('Ürün sepete eklendi.');

      // Hide pop-up message after 2 seconds
      setTimeout(() => {
        this.closePopup();
      }, 2000);
    },
    // Function to show pop-up message
    showPopupMessage(message) {
      this.popupMessage = message;
      this.showPopup = true;
    },
    // Function to close pop-up message
    closePopup() {
      this.showPopup = false;
    }
  }
};
</script>


<style>

.container {
  background: #1f6f78;
}

.col {
  display: flex;
}
.card {
  font-family: fangsong; 
  width: 300px;
  border: 1px solid #ccc;
  border-radius: 5px;
  overflow: hidden;
}

.card-content {
  padding: 20px;
}

.card-action {
  padding: 10px;
  background-color: #f9f9f9;
  position: relative;
}

.btn {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
}


</style>