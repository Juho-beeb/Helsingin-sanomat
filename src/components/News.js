import React from "react";
import SideSection from './SideSection';
import MainSection from './MainSection';
import MainSection2 from "./MainSection2";





const MainSectionData = [
    {
      news: 'Näitä ruokia kannattaa syödä',
      maintopic: 'Ruoka',
      picture: 'Ruoka'
    },
  
  ]
  const MainSectionData2 = [
    {
      news: 'Jalkapalloa pelattiin viime viikonloppuna',
      maintopic: 'Urheilu',
      picture: 'Jalkapallo'
    }
  ]


  
  const SideSectionData = [
    {
      sidetitle: 'Ravintolat',
      sidebody: 'Ravintoloiden tanssi- ja laulukielto päättyy koko suomessa'
    },
    {
      sidetitle: 'Tanssi',
      sidebody: 'Tanssiryhmä Scandinavian Hunks lopettaa'
    },
    {
      sidetitle: 'HS Helsinki',
      sidebody: 'Rajujen some­purkausten mukaan pelleä aiotaan etsiä pesäpallo­mailojen kanssa'
    },
    {
      sidetitle: 'Holokausti',
      sidebody: 'Natsien joukkomurhista syytetty 96-vuotias entinen sihteeri katosi Saksassa ennen oikeuden­käyntiä'
    },
    {
      sidetitle: 'Kesä',
      sidebody: 'Kesä on ohi'
    },
    {
      sidetitle: 'Ruotsi',
      sidebody: 'Göteborgin räjähdyksestä epäiltynä etsitään 55-vuotiasta miestä'
    }
  ]

export default function News() {

    return (
            
      <div className={'uutiset'}>
      <div style={{display:'flex', flexDirection:'row'}}>
      <div style={{display:'flex', flexDirection:'column'}}>
      {
        MainSectionData.map(element =>  <MainSection data={element} />)
      }
      {
        MainSectionData2.map(element => <MainSection2 data={element} />)
      }
  
      
      </div>
      <div style={{display:'flex', flexDirection:'column'}}>
        <div style={{fontSize:'30px', fontWeight:'700', paddingTop:'10px', paddingLeft:'20px', backgroundColor:'white', marginLeft:'15px', marginRight:'250px'}}>
          Luetuimmat</div>
      {
        SideSectionData.map(element =>  <SideSection data={element} />)
      }
      </div>
      </div>
      </div>
    )
}