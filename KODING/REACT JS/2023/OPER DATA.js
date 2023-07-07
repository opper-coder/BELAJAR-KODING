sumber youtube: 
1. Semmi Verian > [NGE-React] #17 Mengirimkan data dari child ke parent component
2. dea afrizal > Code Yang Harus React JS Developer Ketahui

kirimdata dari parent ke child
------------------------------------------
 const Parent = () => {                   // komponen parent nya
  return
  <>
   <Child name="aqil">                    // panggil komponen dengan oper data ke child
  </>  
 }
 -----
const Child = (props) => {                // komponen child tangkap data dengan props
 return
 <>
  <div>Halo nama saya {props.name}</div>  // gunakan props
 </>
}

kirimdata dari Child ke Parent
------------------------------------------
 const Parent = () => {
  return
  <>
   <Child name="aqil"> 
  </>  
 }
 -----
const Child = (props) => {
 return
 <>
  <div>Halo nama saya {props.name}</div>
 </>
}


 
