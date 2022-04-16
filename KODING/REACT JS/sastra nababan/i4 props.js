// ------------ PROPS
function Greeting (props){
  return (<h1> halo world, {props.nama} !</h1>);
}
<Greeting nama="Sylmi"/>
// ------------ ARROW FUNCTIONS
const Greeting2 = (props) => {
  return (<h1> halo world, {props.nama} !</h1>);
}
<Greeting2 nama="izza"/>
// ------------ PROPS DOUBLE
function Greeting (props){
return (<h1> halo world, {props.nama} !, alamat {props.alamat}</h1>);
}
<Greeting nama="Sylmi" alamat="saiti"/>
// atau
<Greeting 
      nama="Sylmi" 
      alamat="saiti"/>
// ------------- PROP DEFAULT kayak alt pada img
/* ini di tulis pas di bawah komponen bersangkutan ya tips nya, sbenernya tidak ada aturan baku */
Greeting.defaultProps = {
  nama : "Name here!",
  alamat : "address here!"
}