<template>
  <div>
  
    <house_filter></house_filter> // 使用篩選器
    <div class="up_wrapper">
      <a href="首頁連結" target="_blank">
        <img :src="homeImage" alt="首頁圖片" />
      </a>
      <div>
        <a href="#"><span>Search</span></a>
        <a href="#"><span>Map</span></a>
        <a href="#"><span>Law</span></a>
        <button>Sign</button>
        <button>Login</button>
      </div>
      <hr>
    </div>
    <div id="houses">
      <div v-for="house in displayedHouses" :key="house.id">
        <img :src="house.image" alt="房屋圖片">
        <h3>{{ house.title }}</h3>
        <span id="address">{{ house.address }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      homeImage: "首頁圖片連結", // 首頁圖片
      houses: [
        {
          id: 1,
          image: "房屋圖片連結1",
          title: "豐原站前稀有獨立平房，鬧中取靜，僅此一檔",
          address: "台中市豐原區文村街"
        },
        // 其他房屋資料
      ]
    };
  },
    computed: {
    // 使用 computed 屬性來計算顯示在頁面上的資料
    displayedHouses() {
      return this.houses;
    }
  }

};
</script>
