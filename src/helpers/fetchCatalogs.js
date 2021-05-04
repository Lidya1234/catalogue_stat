
import { DISPLAYLIST} from '../reducers/catalogueSlice'
import axios from 'axios'

const fetchCatalogs =() => dispatch =>
{ 
    axios.get('https://pokeapi.co/api/v2/pokemon')
    .then(response => {
       console.log(response.data)
       const { data } = response.data
       dispatch(DISPLAYLIST(data))
   }).catch(error => {
       console.log(error);
   })
}

export default fetchCatalogs;