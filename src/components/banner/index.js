import('./index.css') ;
const abc = (d)=>{
  console.log(d) ;
  console.log('开始设置样式了'); 
  document.querySelector('#app').innerHTML =`<h1 class ="user-title">这是我自己配置的第一个post-css, 怎么样啊？</h1>` ;
}
export default abc ;