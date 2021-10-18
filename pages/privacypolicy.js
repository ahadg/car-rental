import Head from 'next/head'


const privacypolicy = () => {
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
                <title>Privacy Policy</title>
                <link rel='icon' href='/favicon.ico'/>
            </Head>
            <h1>Privacy Policy</h1>
        </div>
    )
}

export default privacypolicy
