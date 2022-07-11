window.addEventListener('load', () => {
    const urlLoginGo = '../index.html';

    const app = Vue.createApp({
        data(){
            return {
                userLogin: {
                    username: '',
                    password: '',
                    name: ''
                }
            }
        },
        created(){
            if(localStorage.getItem('vue3.userlogin') === null){
                window.location.href = urlLoginGo;
            } else {
                this.userLogin = JSON.parse(localStorage.getItem('vue3.userlogin'));
            }
            
        },
        methods:{
            deleteLocalStorage: function(){
                localStorage.removeItem('vue3.userlogin');
            }
        }
    });

    app.mount('#app');


})