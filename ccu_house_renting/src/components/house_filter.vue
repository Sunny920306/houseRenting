<template>
    <div>
      <form id="filter-form">
        <input v-model="searchInput" type="text" placeholder="搜尋">
    
        房型：
        <select v-model="roomType" id="room-type-select">
          <option value="single">單人房</option>
          <option value="double">雙人房</option>
          <option value="entire">包棟</option>
        </select>
    
        價格：
        <input v-model="minPrice" id="min-price-input" type="number" placeholder="最低價格" > - 
        <input v-model="maxPrice" id="max-price-input" type="number" placeholder="最高價格" >
    
        距離中正大學正門距離：
        <input v-model="maxDistance" id="max-distance-input" type="number" placeholder="最大距離"> 公里以內
    
        設施：
        <input v-model="hasParkingLot" id="has-parkinglot-checkbox" type="checkbox"> 停車
        <input v-model="hasWater" id="has-water-checkbox" type="checkbox"> 飲水機
        <input v-model="hasElevator" id="has-elevator-checkbox" type="checkbox"> 電梯
        <input v-model="hasWasher" id="has-washer-checkbox" type="checkbox"> 洗衣機
    
        <button id="submit-button" @click="onSubmit">搜索</button>
      </form>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        searchInput: '',
        roomType: '',
        minPrice: null,
        maxPrice: null,
        maxDistance: null,
        hasParkingLot: false,
        hasWater: false,
        hasElevator: false,
        hasWasher: false,
      };
    },
    methods: {
      onSubmit() {
        if (this.minPrice !== null && this.minPrice < 0) {
            alert('輸入不可小於0')
            this.minPrice = 0;
        }
        
        if (this.maxPrice !== null && this.maxPrice < 0) {
            alert('輸入不可小於0')
            this.maxPrice = 0;
        }
        if (this.maxDistance !== null && this.maxDistance < 0) {
            alert('輸入不可小於0')
            this.maxDistance = 0;
        }

        const filters = {
          searchInput: this.searchInput,
          roomType: this.roomType,
          minPrice: this.minPrice,
          maxPrice: this.maxPrice,
          maxDistance: this.maxDistance,
          hasParkingLot: this.hasParkingLot,
          hasWater: this.hasWater,
          hasElevator: this.hasElevator,
          hasWasher: this.hasWasher,
        };
  
        // 發送 API 請求
        axios.post('YOUR_API_ENDPOINT', filters)
          .then(response => {
            // 在這裡處理 API 回應
            console.log(response.data);
          })
          .catch(error => {
            // 在這裡處理錯誤
            console.error('Error:', error);
          });
      },
    },
  };
  </script>
  