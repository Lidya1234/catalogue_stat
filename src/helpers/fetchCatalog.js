import { DISPLAYLIST} from '../reducers/catalogueSlice'
import axios from 'axios'

const fetchCatalog = () => (dispatch) =>
{ 
    axios.get('https://pokeapi.co/api/v2/pokemon/1/')
    .then(response => {
       console.log(response.data)
       const { data } = response.data
       dispatch(DISPLAYLIST(data))
   }).catch(error => {
       console.log(error);
   })
}

export default fetchCatalog;