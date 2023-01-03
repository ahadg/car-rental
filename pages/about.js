import Head from 'next/head'
import Image from 'next/image'
import Pic from '../public/family.jpg'


const about = () => {
    return (
        <div 
        style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '90vh'
        }}
        >
            <Head>
            <meta name="google-site-verification" content="UV7geI93Mq57Rr9EbvI-aUYGqWKS7E6iGUJv2TCa4cY" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta charSet="utf-8" />
                <meta name="description" content="Agile Car Rental is a Rental company in St. Thomas, United States Virgin Islands. Offering the best vehicles for the area and incredible Deals including Cyril E King..." />
                <title>Agile Car Rental | About Page</title>
                <link rel='icon' href='/favicon.ico'/>
            </Head>
            {/* <h1>about</h1> */}
            <div>
            
      <h1>
        About Agile 
      </h1>
      <h2>
      Most tourist and travellers need transportation. At Agile we provide vehicles that make travelling easy.
      </h2>
      <Image src={Pic} alt='Home Page' width={180} height={70} /> 

      <p>
      Located in the Caribbean Sea chain of the United States Virgin Islands, St. Thomas is a beautiful tropical destination for travelers with a taste for adventure. Renting a car in St. Thomas is one of the best ways to see the whole island, at your own pace. Charlotte Amalie, Saint Thomas has some of the district's top attractions as St. Thomas is home to several natural bays and historical sites, including Magens Bay, Brewers Bay, and Fort Christian. With Cyril E King Airport being an extremely hilly 7 miles from Magen's bay, a rental car from Agile is ideal for the territory. Securing a rental car from Agile Car Rentals is the way to go if you want to tour Saint Thomas or Saint John.      </p>
     
        </div>
        </div>
    )
}

export default about
