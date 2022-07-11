window.addEventListener('load', () => {
    const urlLoginGo = 'html/index.html';

    const app = Vue.createApp({
        data(){
            return {
                users: [],
                userLogin: {
                    username: '',
                    password: '',
                    name: ''
                },
            }
        },
        created(){
            if(localStorage.getItem('vue3.userlogin') !== null){
                window.location.href = urlLoginGo;
            }
            else if (localStorage.getItem('vue3.js') !== null) {
                this.users = JSON.parse(localStorage.getItem('vue3.js'));
            } else {
                this.listUsers();
            }
        },
        methods:{
            listUsers: async function(){
                const res = await fetch('https://jsonplaceholder.typicode.com/users')
                const data = await res.json();
                console.log(data);
                this.users = data.slice(0,5);
                this.updateLocalStorage();
            },
            processUser: function (event) {
                event.preventDefault();
                const userFound = this.users.find((user, index) => {
                    return user.username === this.userLogin.username && user.email === this.userLogin.password;
                });
                if(userFound === undefined){
                    alert("Usuario y/o Contraseña son incorrectos.");
                } else {
                    this.userLogin.name = userFound.name
                    localStorage.setItem('vue3.userlogin', JSON.stringify(this.userLogin));
                    window.location.href = urlLoginGo;
                }
                console.log(userFound);
            },
            updateLocalStorage: function(){
                localStorage.setItem('vue3.js', JSON.stringify(this.users));
            },
            deleteLocalStorage: function(){
                localStorage.removeItem('vue3.userlogin');
            }
        }
    });

    app.mount('#app');


})