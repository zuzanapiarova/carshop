/*use this file as a single file that is going to export all of our components,
so we can import them in a simpler manner within the pages where we are going to use them

now we can just use the component in our desired file like this: < Hero /> and click control+shift or sth similar and it will automatically import it
*/
import Hero from './Hero'
import CustomButton from './CustomButton'
import Navbar from './Navbar'
import Footer from './Footer'
import CustomFilter from './CustomFilter'
import Searchbar from './Searchbar'
import SearchManufacturer from './SearchManufacturer'
import CarCard from './CarCard'
import CarDetail from './CarDetail'
import ShowMore from './ShowMore'

export {
    Hero, 
    CustomButton, 
    Navbar, 
    Footer, 
    CustomFilter, 
    Searchbar, 
    SearchManufacturer, 
    CarCard, 
    CarDetail, 
    ShowMore
}