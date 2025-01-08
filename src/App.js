import NavBar from './Layout/Navbar.js';
import interactive from './assets/interactive_installation.png'
import logo from './logo.svg';
import myvideo from './assets/movie.mov';
import jhon from './assets/jhon.jpg';
import drapigeon from './assets/drapigeon.jpg';
import cage from './assets/cage.png';
import elk from './assets/elk.png';
import no_scope from './assets/no_scope.jpeg';
import eye from './assets/eye.png';
import her from './assets/her.png';
import d_drum from './assets/d_drum.png';
import glass from './assets/glass.png';
import vxe from './assets/VXEIAZ1.png';
import aymen from './assets/aymenlogo5.png';
import background from './assets/backgroundnjessie.png';
import deepsea from './assets/deepsea.png';
import lensobsi from './assets/lensobsi.png';
import logo2 from './assets/logo1.png';
import logo3 from './assets/logo2.png';
import sculpture from './assets/sculpture33.png';
import stu from './assets/stu.png';
import swamp2 from './assets/swamp2.png';
import untitled from './assets/untitled.png';
import days2 from './assets/36DAYS2.png';
import ouioui from './assets/ouioui.jpg';
import myLogo from './assets/mylogo.svg';
import './App.css';

function Images(props) {
  const { data = [] } = props;

  return (
    <div className="bg-zinc-200 flex flex-1 overflow-y-auto justify-center">
        <div className="px-8 py-4 flex flex-col w-1/2 space-y-4">
          <div  className="flex flex-col bg-white p-4 px-4 rounded-lg shadow-md">
            <p className="mb-2 text-xl">Artist Video Statement</p>
            <video className="w-full aspect-video" controls loop autoplay>
              <source  src={myvideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            {/* <embed controls className="w-full aspect-video" type="video/quicktime" src={myvideo} /> */}
          </div>
          {data.map((e, i) => 
            <div key={`image-${i}`} className="flex flex-col bg-white p-4 px-4 rounded-lg shadow-md">
              <a href={e?.href} target="_blank" className="mb-2 text-xl">{e?.title}</a>
              <img className="mx-2 rounded " src={e?.image} alt="Italian Trulli" />
              <p className="mt-2 text-lg" >{e?.description}</p>
            </div>
          )}
      </div>
    </div>
  )
}

function useImages() {
  return [
    {
      title: "Swamp",
      href: "https://www.behance.net/gallery/216337555/_",
      image: swamp2,
      description: "",
    },
    {
      title: "Interactive Installation",
      href: "https://www.behance.net/gallery/199954249/INTERACTIVE-INSTALLATION-FAEM-Y2S2",
      image: interactive,
      description: "",
    },
    {
      title: "Deep Sea",
      href: "https://www.behance.net/gallery/193000189/DEEP-SEA-2024",
      image: deepsea,
      description: "",
    },
    {
      title: "Triggered 2024",
      href: "https://www.behance.net/gallery/192999999/TRIGGERED-2024",
      image: untitled,
      description: "",
    },
    {
      title: "Logo VXEIZA",
      image: vxe,
      href: "https://www.behance.net/gallery/190213465/VXEIZA-Logo-GIF-animation",
      description: "",
    },
    {
      title: "Logo",
      href: "https://www.behance.net/gallery/190213189/City-Logo",
      image: logo2,
      description: "",
    },
    {
      title: "Logo ELK",
      href: "https://www.behance.net/gallery/190213021/ELK-LOGO",
      image: elk,
      description: "",
    },
    {
      title: "Interactive Multimedia Performance",
      href: "https://www.behance.net/gallery/189376765/Interactive-Multimedia-Performance-Eye",
      image: eye,
      description: "",
    },
    {
      title: "Glass Fairy",
      href: "https://www.behance.net/gallery/186201971/Glass-Fairy",
      image: glass,
      description: "",
    },
    // {
    //   title: "Her And There Logo Animation",
    //   href: "https://www.behance.net/gallery/183408351/Her-and-There-logo-animation",
    //   description: "",
    // },
    {
      title: "Here And There Logo Animation",
      href: "https://www.behance.net/gallery/183408351/Here-and-There-logo-Animation",
      image: her,
      description: "",
    },
    {
      title: "36 Days of Type 2023",
      href: "https://www.behance.net/gallery/170820403/36-Days-of-Type-2023-Final-result#",
      image: days2,
      description: "",
    },
    {
      title: "3D Animation For The Nessie Drumkit",
      href: "https://www.behance.net/gallery/166494071/3D-ANIMATION-FOR-THE-NESSIE-DRUMKIT",
      image: d_drum,
      description: "",
    },
    {
      title: "Nessie Drumkit Covers",
      href: "https://www.behance.net/gallery/166493103/NESSIE-DRUMKIT-COVERS",
      image: background,
      description: "",
    },
    {
      title: "No Scope Custom Typography 3D",
      href: "https://www.behance.net/gallery/166350083/NO-SCOPE-CUSTOM-TYPOGRAPHY-3D",
      image: no_scope,
      description: "",
    },
  ]
}
function App() {
  const imagesData = useImages();

  return (
      <div className="flex flex-col h-screen">
        <div className="flex flex-1 overflow-hidden">

          <NavBar />
          <Images data={imagesData}/>

        </div>
      </div>
  );
}

export default App;
