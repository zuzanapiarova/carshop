/*use this file as a single file that is going to export all of our components,
so we can import them in a simpler manner within the pages where we are going to use them

now we can just use the component in our desired file like this: < Hero /> and click control+shift or sth similar and it will automatically import it
*/
import Hero from './Hero'
import CustomButton from './CustomButton'
export {
    Hero, 
    CustomButton
}