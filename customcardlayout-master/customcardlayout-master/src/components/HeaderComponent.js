import KeyConcept from '../asset/images/header/key-concepts.png'; 
export default function HeaderComponent(){
    return <div>
       <header>
        <img src={KeyConcept} alt='Skill company logo'></img>
        <h2>SKILL</h2>
        <p>KIDS BRAIN DEVELOPEMENT PROGRAM</p>
      </header>
    </div>;
}