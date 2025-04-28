import './Card.css'

const Card = ({children,className})=>{
 const classes = `Card  ${className}`;// baad mein anay wala class replace karay ka css properties ko shaid
return(
    <div className={classes}>

        {children}

    </div>
    // to jin custom aor builtin elements ya tags ko jab ham wrap 
    // krtay hein is Card element say wrap yani Card element ko parent element banadetay ehin jis ka andar baqi s
    // aray elements use ya call krsaktay hein aor wo indroni tags ya elements props.children hotay hein
);
}
export default Card