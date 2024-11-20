function Botao() {
   let texto = 'Hello, world!'

   const bode = document.getElementById('bode')
   function grayButton() {
      bode.style = 'background: #4444'
   }
   function whiteButton() {
      bode.style = 'background: #f2f2f2'
   }

   return (
      <div>
         <button onClick={() => grayButton()}>{texto}</button>
         <button onClick={() => whiteButton()}>{texto}</button>
      </div>
   )
}

export default Botao