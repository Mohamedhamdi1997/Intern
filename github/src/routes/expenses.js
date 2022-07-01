import '../gallery.css';
import Sidebar from '../sidebar';
import { useParams } from "react-router-dom";
import Img1 from '../img/img1.png';
import Img2 from '../img/img2.png';
import Img3 from '../img/img3.png';
import Img4 from '../img/img4.png';
import Img5 from '../img/img5.png';
import Img8 from '../img/img8.png';
import Img9 from '../img/img9.png';
import Img10 from '../img/img10.png';
import Img11 from '../img/img11.png';
export default function Expenses() {
  const { id } = useParams();
    return (
      <div>
     <Sidebar />
     <div className="pageD">

      <img src={data[id-1].imgSrc} style={{width: '95vw', height: '100vh'}}/>
        </div>
        <div className="transparent"></div>
        <div className="imagerotate">
        <div className="block">
        <div className="date"><p>PROJECT DATE: {data[id-1].date}</p></div>
        <div className="nom"><p>{data[id-1].name} </p></div>
       </div>
        </div>
        </div>
    );
  }
  let data =[
        {
            id: 0,
            imgSrc: Img8,
            name: 'GAMMART CENTRE',
            date: '2020'
        },
        {
            id: 1,
            imgSrc: Img2,
            name: 'COWERKING SPACE',
            date: '2018'
        },
        {
            id: 2,
            imgSrc: Img3,
            name: 'KITCHEN SHOWRROOM',
            date: '2019'
        },
        {
            id: 3,
            imgSrc: Img9,
            name: 'CAFÉ À PARIS',
            date: '2015'
        },
        {
            id: 4,
            imgSrc: Img4,
            name: 'GULLIETTA 1962',
            date: '2019'
        },
        {
          id: 6,
          imgSrc: Img1,
          name: 'APPARTEMENT 02',
          date: '2020'
      },
      
      {
          id: 8,
          imgSrc: Img11,
          name: 'APPARTEMENT 01',
          date: '2021'
      },
      {
          id: 9,
          imgSrc: Img10,
          name: 'HOTEL À ALGER',
          date: '2021'
      },
      {
        id: 7,
        imgSrc: Img5,
        name: 'Appartement PARIS',
        date: '2020'
    }
      ]