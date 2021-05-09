import {  useState } from 'react';

import { SideBar } from './components/SideBar';
import { Content } from './components/Content';

import './styles/global.scss';

import './styles/sidebar.scss';
import './styles/content.scss';


// interface GenreResponseProps {
//   id: number;
//   name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
//   title: string;
// }

export function App() {

  const [selectedGenreId, setSelectedGenreId] = useState(1)

  const state = {
    selectedGenreId,
    setSelectedGenreId
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>

      <SideBar state={state}/>
      <Content state={state}/>
            
    </div>
  )
}