import React from 'react';

function ButtonLink(props){
    // props => { className: "propriedade do botao passada", href:"/"}
    console.log(props);
    return(
        <a href={props.href} className={props.className}>
            {props.children}
        </a>
    );
}

export default ButtonLink;