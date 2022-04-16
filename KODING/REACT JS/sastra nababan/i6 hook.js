// tidak ada import kecuali react

// contoh 1 Hook dasar:
const CounterHook = () => {
    const [ jumlah, setJumlah ] = useState(0); 
    return(
      <div>
        <h1>CounterHook = {jumlah} </h1>
        <button onClick= { () => setJumlah(jumlah + 1) }> tambah! </button>
      </div>     
    );
  }

// contoh 2 hook reset:
  const CounterHook = () => {
    const [ jumlah, setJumlah ] = useState(0); 
    return(
      <div>
        <h1>CounterHook = {jumlah} </h1>
        <button onClick= { () => setJumlah(jumlah + 1) }> tambah! </button>
        <button onClick= { () => setJumlah(jumlah - jumlah) }> Reset! </button>
      </div>
    );
  }

  // panggilan tidak mengirim apapun

  <CounterHook />

  // contoh 3 
  /* === templat dasar kosong --*/
  /*
  planning :
    1 contoh tombol subscribe = klik sekali switch true false
    2 contoh counter like = jumlah increase (ketika diklik nilai bertambah)
    3 contoh counter dislike = sda namun kita tidak bikin function sendiri malainkan mendapat sharing dari like
    4 counter lain yang memanggil methode lainya (like) yang di modifikasi - namun mengalami asynchronous
    5 mengatasi asynchronopus
    6 semua methode ini menggunakan satu function komponen (subscribe)yang memiliki 3 state(subscribe,like,dislike)
    7 membuat "handle state "untuk digunakan  pemnggilan saat di klik "dalam button"
  */
  const Subscribe = () => {
    return(
      <div>
        <p>
          <button>Subscribe !</button>
          <span> true </span>
        </p>
          <p><button> Like ! </button>
          <span> 0 </span>
        </p>
        <p>
          <button> Dislike ! </button>
          <span> 0 </span>
        </p>
      </div>
      )
    }

  /*=== step 1 initial--*/

  const Subscribe = () => {

    // inisialisasi data / state
    const [data, ubahData] = useState({
        subscribe : false,
        like : 0,
        dislike : 0
      }
    )

    return(
      <div>
        <p>
          <button>Subscribe !</button>
          <span> true </span>
        </p>
          <p><button> Like ! </button>
          <span> 0 </span>
        </p>
        <p>
          <button> Dislike ! </button>
          <span> 0 </span>
        </p>
      </div>
      )
    }

    // baca data / state

    const Subscribe = () => {
      const [data, ubahData] = useState({
          subscribe : false,
          like : 0,
          dislike : 0
        }
      )
  
      return(
        <div>
          <h4>Subscribe</h4>
          <p>
            <button>Subscribe </button><span> {JSON.stringify(state.subscribe)}</span>  // *** disini
          </p>
          <p>
            <button>like</button><span> {state.like}</span>                             // *** disini
          </p>
          <p>
            <button>dislike</button><span> {state.dislike}</span>                       // *** disini
          </p>
      </div>
        )
      }


  /*=== step 2 handle--*/     
      // bikin fungsi handle aksi pada masing2 state

      const Subscribe = () => {
  
        const [state, setState] = useState({
          subscribe : false,
          like  : 0,
          dislike : 0
        })
        
        const HandleSubscribe = () => {     // *** disini 
          setState({
            subscribe : !state.subscribe
          })
        }
        const HandleLike = () => {          // *** disini 
          setState({                           
            like : state.like + 1
          })
        } 
        const HandleDislike = () => {       // *** disini 
          setState({
            dislike : state.dislike + 1
          })
        } 
      
        return(
          <div>
            <h4>Subscribe</h4>
            <p>
              <button onClick = {HandleSubscribe}> Subscribe </button><span> {JSON.stringify(state.subscribe)}</span>
            </p>
            <p>
              <button onClick = {HandleLike}> like </button><span> {state.like}</span>
            </p>
            <p>
              <button onClick = {HandleDislike}> dislike </button><span> {state.dislike}</span>
            </p>
          </div>
        );
      }

// namun saat di jalan kan ada masalah saat di klik maka nilai yang lain hilang maka butuh penanganan 
// dengan merger dengan menulis  ...state pada masing2 state
// artinya "nilai state di merger dg nilai yang sekarang"

      const Subscribe = () => {
  
        const [state, setState] = useState({
          subscribe : false,
          like  : 0,
          dislike : 0
        })
        
        const HandleSubscribe = () => {
          setState({
            ...state,     // *** disini
            subscribe : !state.subscribe
          })
        }
        const HandleLike = () => {
          setState({
            ...state,     // *** disini
            like : state.like + 1
          })
        } 
        const HandleDislike = () => {
          setState({
            ...state,     // *** disini
            dislike : state.dislike + 1
          })
        } 
        
        return(
          <div>
            <h4>Subscribe</h4>
            <p>
              <button onClick = {HandleSubscribe}> Subscribe </button><span> {JSON.stringify(state.subscribe)}</span>
            </p>
            <p>
              <button onClick = {HandleLike}> like </button><span> {state.like}</span>
            </p>
            <p>
              <button onClick = {HandleDislike}> dislike </button><span> {state.dislike}</span>
            </p>
          </div>
        );
      }

  /*=== step 3 --*/

  // kasus 3 saat kita panggil method like dalam handle lainya (3 kali misalnya)
  // maka hasilnya tetap sama dengan methode hndle pada like biasa (yaitu nilai state + 1) coba jalankan 
  // padahal maksudnya kita panggil 3 kali harus nilai state = state * 3 
  // hal itu di sebabkan state berjalan secara asynchronous 

  const Subscribe = () => {
  
    const [state, setState] = useState({
      subscribe : false,
      like  : 0,
      dislike : 0
    })
    
    const HandleSubscribe = () => {
      setState({
        ...state,     
        subscribe : !state.subscribe
      })
    }
    const HandleLike = () => {
      // 2 *** disini state asynchronous
      setState({
        ...state,     
        like : state.like + 1
      })
    } 
    const HandleDislike = () => {
      setState({
        ...state,     
        dislike : state.dislike + 1
      })
    } 
    const HandleTripleLike = () => {  // *** dibuat disini
      HandleLike()      // 1 *** disini panggil 3x
      HandleLike()
      HandleLike()
    } 
    
    return(
      <div>
        <h4>Subscribe</h4>
        <p>
          <button onClick = {HandleSubscribe}> Subscribe </button><span> {JSON.stringify(state.subscribe)}</span>
        </p>
        <p>
          <button onClick = {HandleLike}> like </button><span> {state.like}</span>
        </p>
        <p>
          <button onClick = {HandleDislike}> dislike </button><span> {state.dislike}</span>
        </p>
        <p>
        <button onClick = {HandleTripleLike}> triplelike </button><span> {state.dislike}</span>   // *** dipanggil disini
      </p>
      </div>
    );
  }

  // agar hasil nya sesuai harapan saat diklik bertambah 3 bukanya 1 maka
  // pada methode handling parent state bungkus dalam fungsi (bernama currenstate)

  const Subscribe = () => {
  
    const [state, setState] = useState({
      subscribe : false,
      like  : 0,
      dislike : 0
    })
    const HandleSubscribe = () => {
      setState({
        ...state,
        subscribe : !state.subscribe
      })
    }
    const HandleLike = () => {
      // async
      setState(currentState => ({  // *** disini
        ...state, 
        like : currentState.like + 1
      }))
    } 
    const HandleDislike = () => {
      setState({
        ...state,
        dislike : state.dislike + 1
      })
    } 
    const HandleTripleLike = () => {
      HandleLike()
      HandleLike()
      HandleLike()
    } 
    
    return(
      <div>
        <h4>Subscribe</h4>
        <p>
          <button onClick = {HandleSubscribe}> Subscribe </button><span> {JSON.stringify(state.subscribe)}</span>
        </p>
        <p>
          <button onClick = {HandleLike}> like </button><span> {state.like}</span>
        </p>
        <p>
          <button onClick = {HandleDislike}> dislike </button><span> {state.dislike}</span>
        </p>
        <p>
          <button onClick = {HandleTripleLike}> triplelike </button><span> {state.like}</span>
        </p>
      </div>
    );
  }