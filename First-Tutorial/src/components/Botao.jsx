function Botao() {

   const bode = document.getElementById('bode')
   function grayButton() {
      bode.style = 'background: #4444'
   }
   function whiteButton() {
      bode.style = 'background: #ffff'
   }

   return (
      <div>
         <button onClick={grayButton}>Grey</button>
         <br/>
         <br/>
         <br/>
         <button onClick={whiteButton}>White</button>
      </div>
   )
}

export default Botao