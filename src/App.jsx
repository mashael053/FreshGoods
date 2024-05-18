import Homepage from './Component/Homepage'
import Benefit from './Component/Benefit'
import Footer from './Component/Footer'
import Card from './Component/Card'
import Describion from './Component/Describion'
import './App.css'
import Coustmer from './Component/Coustmer'
import Endpage from './Component/Endpage'

function App() {

  return (
    <>
<Homepage/>


<div>
        <h1 className="font-bold mt-8 text-lg text-gray-800 text-center ">Here are Some Benefits of your offer </h1>
        <p className="mt-2 font-serif text-center">Explain what makes your product or service great. Talk about features in a way that highlights
         the real value people get out of them</p>
    </div>

    <div className='flex flex-row justify-center items-center max-sm:flex-col'>
<Benefit title="BeneFit1" pragragh="For example, restaurants and bakeries could outline the health benefits of their all-natural ingredients." images="https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/freshgoods/b41bc87d-freshgoods-benefit2-icon_1000000000000000000028.png"/>
<Benefit title="BeneFit2" pragragh=" Florists and ither small relainlers might use this spacee to describe how thir products make delightful,one-of-a-kind gift." images="https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/freshgoods/6622ad60-freshgoods-benefit3-icon_1000000000000000000028.png"/>
<Benefit title="BeneFit3" pragragh="Your Could also add buttons to this section and share links to other products or available delivery methods." images="https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/freshgoods/3a18a275-freshgoods-benefit1-icon_1000000000000000000028.png"/>
</div>

<Coustmer />

<div className='flex flex-row gap-6 justify-center items-center mt-20 max-sm:flex-col max-sm:w-69'>
<Card img="https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/freshgoods/6765ae81-freshgoods-feature1_10go0b20go09e00000001o.jpg" title="Feature 1" text="Talk about some if the details of your offer with a focus on the value people get back. "/>
<Card img="https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/freshgoods/bf92a2f6-freshgoods-feature2_10go0ku0go09e00009e01o.jpg" title="Feature 2" text="Talk about some if the details of your offer with a focus on the value people get back. "/>
<Card img="https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/freshgoods/f55dfcfa-freshgoods-feature3_10go0b40go09e00000601o.jpeg" title="Feature 3" text="Share a little about yourself as a business owner, or maybe describe what makes your product or service unique. Give visitors one more reason to care about your offer and want to buy from you. "/>
</div>

<Describion/>
<Endpage /> 
<Footer/>
    </>
  
  )
}

export default App
