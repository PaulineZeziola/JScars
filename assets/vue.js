/* =================== DATAS ================== */
const cars = [
  {
    id: 1,
    title: 'mercedes classe C',
    brand: 'Mercedes',
    mileage: '186000',
    price: '9500',
    picture: './assets/images/mercedesC.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean imperdiet tempor euismod. Cras nec vehicula magna. Quisque feugiat metus ligula, non ultrices tellus finibus sit amet. Cras posuere felis nec arcu hendrerit, in vehicula lectus tempor. Nulla non pulvinar magna. Donec mollis porta ligula, quis feugiat metus.' 
  },
  {
    id: 2,
    title: 'fiat 500',
    brand: 'Fiat',
    mileage: '52000',
    price: '11200',
    picture: './assets/images/fiat500.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean imperdiet tempor euismod. Cras nec vehicula magna. Quisque feugiat metus ligula, non ultrices tellus finibus sit amet. Cras posuere felis nec arcu hendrerit, in vehicula lectus tempor. Nulla non pulvinar magna. Donec mollis porta ligula, quis feugiat metus.'
  },
  {
    id: 3,
    title: 'Citroen C3',
    brand: 'Citroen',
    mileage: '89000',
    price: '7450',
    picture: './assets/images/citroenC3.jpeg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean imperdiet tempor euismod. Cras nec vehicula magna. Quisque feugiat metus ligula, non ultrices tellus finibus sit amet. Cras posuere felis nec arcu hendrerit, in vehicula lectus tempor. Nulla non pulvinar magna. Donec mollis porta ligula, quis feugiat metus.'
  },
  {
    id: 4,
    title: 'kangoo',
    brand: 'Renault',
    mileage: '256000',
    price: '3100',
    picture: './assets/images/kangoo.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean imperdiet tempor euismod. Cras nec vehicula magna. Quisque feugiat metus ligula, non ultrices tellus finibus sit amet. Cras posuere felis nec arcu hendrerit, in vehicula lectus tempor. Nulla non pulvinar magna. Donec mollis porta ligula, quis feugiat metus.'
  },
  {
    id: 5,
    title: 'kia niro',
    brand: 'Kia',
    mileage: '112000',
    price: '6400',
    picture: './assets/images/kiaNiro.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean imperdiet tempor euismod. Cras nec vehicula magna. Quisque feugiat metus ligula, non ultrices tellus finibus sit amet. Cras posuere felis nec arcu hendrerit, in vehicula lectus tempor. Nulla non pulvinar magna. Donec mollis porta ligula, quis feugiat metus.'
  },
  {
    id: 6,
    title: 'Peugeot 206',
    brand: 'Peugeot',
    mileage: '145000',
    price: '3150',
    picture: './assets/images/206.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean imperdiet tempor euismod. Cras nec vehicula magna. Quisque feugiat metus ligula, non ultrices tellus finibus sit amet. Cras posuere felis nec arcu hendrerit, in vehicula lectus tempor. Nulla non pulvinar magna. Donec mollis porta ligula, quis feugiat metus.'
  }
]



/* =================== COMPONENTS ============= */

/* HOME WITH CARS LIST */
const Home = {
  template: '#home',
  name : 'Home',
  data() {
     return {
       cars,
       carsToDisplay : [],
       searchTitle : '',
       searchBrand : '',
       searchPriceMin : 0,
       searchPriceMax : 50000,
       searchKmMin : 0,
       searchKmMax : 1000000,
    }
  },
  methods: {
    // function to initialize user's advanced search
    initializeSearch () {
      this.searchTitle = '';
      this.searchBrand = '';
      this.searchPriceMin = 0;
      this.searchPriceMax = 50000;
      this.searchKmMin = 0;
      this.searchKmMax = 1000000;
    }
  }, 

  computed: {
    // function to filter cars in terms of user search
    filteredList() {
      carsToDisplayTitle = this.cars.filter((car) => {
        return car.title.toLowerCase().includes(this.searchTitle.toLowerCase());
      })
      carsToDisplayBrand = carsToDisplayTitle.filter((car) => {
        return car.brand.toLowerCase().includes(this.searchBrand.toLowerCase());
      })
      carsToDisplayPriceMin = carsToDisplayBrand.filter((car) => {
        return parseInt(car.price)>this.searchPriceMin;
      })
      carsToDisplayPriceMax = carsToDisplayPriceMin.filter((car) => {
        return parseInt(car.price)<this.searchPriceMax;
      })
      carsToDisplayKmMin = carsToDisplayPriceMax.filter((car) => {
        return parseInt(car.mileage)>this.searchKmMin;
      })
      carsToDisplayKmMax = carsToDisplayKmMin.filter((car) => {
        return parseInt(car.mileage)<this.searchKmMax;
      })
     
      return this.carsToDisplay = carsToDisplayKmMax
    },
  }
}

/* CAR DETAILS */
const Car = {
  template: '#carDetails',
  name : 'Car', 
  data() {
    return {
      cars,
      id : this.$route.params.id,
      carById : {},
    }
  },

  // property update after component creation
  computed: {
    carByIdComputed() {
      return this.carById;
    }
  },

  // search car by id before render of component
  created() {
    return this.carById = this.cars.find((car) => car.id == this.id)
  },
}


/* ================ ROUTER ================= */

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes: [
    {path: '/', component: Home, name: 'Home'},
    {path: '/car/:id', component: Car, name: 'Car'}
  ]
})

const app = Vue.createApp({
  data () {
    return {
      logo : './assets/images/JScars.png',
    }
  }
});

app.use(router).mount('#app');