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
                <title>About Page</title>
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
      Agile LLC is a standard and licensed car Rental Company that offers a wide range of services that revolves around the car rental industry and other complementary services. We intend giving our customers every reason to always rent or lease of cars which is why we have customized our services, we want to be known as the rental company that truly care for her customers.
      </p>
     
        </div>
        </div>
    )
}

export default about
