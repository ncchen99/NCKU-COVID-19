const app = Vue.createApp({
    
    data() {
        return {
            navbarShow: false,

            content: [
                {ch: '回防疫網頁專區 BACK TO PREVENTION OF CORONAVIRUS INFECTION SECTION', link: 'https://app.pers.ncku.edu.tw/ncov_web/'},
                {ch: '回成大首頁 BACK TO TOP PAGE OF NCKU', link: 'https://www.ncku.edu.tw/'},
            ],
        }
    },
    
    methods: {
        showNavBar() {
            console.log('test')
            this.navbarShow = !this.navbarShow
        },
    }
})

app.mount('#navbar-header')