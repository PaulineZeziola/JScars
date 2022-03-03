

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

const logo = './assets/images/JScars.png';

/* =================== COMPONENTS ============= */
const Home = {
  template: '#home',
  name : 'Home',
  data() {
     return {
       cars,
       logo,
       searchTitle : '',
    }
  }, 
  computed: {
    // function to filter cars in terms of user search
    filteredList() {
      return this.cars.filter((car) => {
        return car.title.toLowerCase().includes(this.searchTitle. toLowerCase());
      })
    },
  }
}

const Car = {
  template: '#carDetails',
  name : 'Car', 
  data() {
    return {cars}
  },
  methods: {
    searchCarById: function(cars, id) {
      console.log('coucou');
      const carById = cars.find((car) => {
        return car.id === id
      })
      return carById;
    }
  }, 
}


// router

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