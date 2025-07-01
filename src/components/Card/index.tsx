type CardType= {
children: React.ReactNode;
title: string;
className:string
}

export default function Card(props:CardType){

    const {children, title, className}= props
    return(
        <div 
        className={` ${className}`}>
            {title}
            {children}
        </div>
    )
}