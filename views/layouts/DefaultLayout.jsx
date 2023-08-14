import React from "react";


function DefaultLayout(props) {
    return (
        <html>
            <head>
                <title>{props.title}</title>
                <link rel="stylesheet" href="/styles.css" />
            </head>
            <body>
                <nav style={{display: 'flex', width: '100%', justifyContent: 'space-evenly'}}>
                    <a href="/fruits">Fruits</a>
                    <a href="/meats">Meats</a>
                    <a href="/vegetables">Vegetables</a>
                </nav>
                {props.children}
            </body>
        </html>
    )
}

export default DefaultLayout;

/*
we pass in props to use props.children so the default view can be wrapped around

<DefaultLayout>
    <Show />
</DefaultLayout>


*/