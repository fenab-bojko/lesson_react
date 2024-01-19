

export default function action (simbol = 1, heigth = 1) {
   fetch (
      './backend/action.php',
      {
         method: 'POST',
         header: '',
         body: JSON.stringify({
            'simbol': simbol,
            'heigth': heigth
         })
      }
   )
   .then (response => response.text ())
   .then (response => {
      console.log(response)
   })

}