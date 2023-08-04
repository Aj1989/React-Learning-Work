import './MenuCardComponent.css';
import MenuCardItemComponent from './MenuCardItemComponent';
export default function MenuCardComponent(props){
  return <div>
          <MenuCardItemComponent props={props}/>
 </div>;
}