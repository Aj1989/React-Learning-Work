export default function MenuCardItemComponent(props){
    const concepts = props.props.data;
    return <div>
        <ul id='concepts'>
        {concepts.map((concept)=>(
        <li className='concept'>
            <img src={concept.image}></img>
            <h2>{concept.title}</h2>
            <p>{concept.description}</p>
        </li>
          ))}
      </ul>
        
    </div>
}