import Document, { Html, Main, NextScript, Head } from 'next/document'

export default class MyDocument extends Document{
    render() {
        return(
            <Html>
                <Head>
                    <link rel="shortcut icon" href="" type="image/x-icon"/>
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link href="https://fonts.googleapis.com/css2?family=Black+Ops+One&family=Raleway:wght@400;500&display=swap" 
                        rel="stylesheet" />
                    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                    <meta http-equiv="Content-Type" content="text/html;charset=UTF-8"/>
                    <meta name="description" content="Checklist dos TPs do Santa"/>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}