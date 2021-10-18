import Head from 'next/head'


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
                <title>About Page</title>
                <link rel='icon' href='/favicon.ico'/>
            </Head>
            <h1>about</h1>
        </div>
    )
}

export default about
