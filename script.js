Alpine.store('action', {
  on: false,
  toggle(){
    this.on = !this.on
  }
})

Alpine.data('name', () => ({
  firstName : 'farid',
  lastName : 'fadilah',
  users : [],
  isLoading: false,
  fetchListUser(){
    this.isLoading = true
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(async (response) => {
        this.users  = await response.json()
        this.isLoading = false
      }
    )
  },
  count : 0,
    data: ['farid', 'fadilah', 'permana'],
    table: [
    {nama: 'farid', gender: 'l', kategori_usia: 10},
    {nama: 'fadilah', gender: 'l', kategori_usia: 13},
    {nama: 'permana', gender: 'p', kategori_usia: 19}
    ],
    isShow: false,
    name: 'farid',
    search: '',
    message : 'hallo',
    get searchData(){ 
      return this.data.filter(i => i.startsWith(this.search))
    },
    fetchLogin(){
      localStorage.setItem('email', this.email)
    },
    cobaFetch(){
      const formData = new FormData()
      formData.append('', '')
      fetch('https://jsonplaceholder.typicode.com/users', {
        method : 'POST',
        body: formData,
        headers: {
          authorization: 'value'
        }
      })
    }
  }),
)