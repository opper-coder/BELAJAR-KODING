sumber youtube: 
1. Semmi Verian > [NGE-React] #17 Mengirimkan data dari child ke parent component
2. dea afrizal > Code Yang Harus React JS Developer Ketahui

kirimdata dari parent ke child
------------------------------------------
 const Parent = () => {                   // 1. komponen parent nya
  return
  <>
   <Child name="aqil">                    // 3. panggil komponen dengan oper data ke child
  </>  
 }
 -----
const Child = (props) => {                // 2. komponen child tangkap data dengan props
 return
 <>
  <div>"Halo nama saya "{props.name}</div>  // 4. gunakan props
 </>
}

kirimdata dari Child ke Parent
------------------------------------------
 const Parent = () => {                   // 1. parent 
  return
  <>
   <Child name="aqil"> 
  </>  
 }
 -----
const Child = (props) => {                // 2. child
    const operData = () => {
        "halo yang ini nama saya"
    }
    
 return
 <>
  <div>Halo nama saya {props.name}</div>
 </>
}


 
