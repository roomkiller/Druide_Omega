import Layout from "./Layout.jsx";

import Chat from "./Chat";

import Consciousness from "./Consciousness";

import Memory from "./Memory";

import Knowledge from "./Knowledge";

import Personality from "./Personality";

import Favorites from "./Favorites";

import VoiceRoom from "./VoiceRoom";

import VisualGallery from "./VisualGallery";

import KnowledgeEnrichment from "./KnowledgeEnrichment";

import ConsciousnessEvolution from "./ConsciousnessEvolution";

import DailyBriefing from "./DailyBriefing";

import EmotionalJournal from "./EmotionalJournal";

import Home from "./Home";

import Guide from "./Guide";

import Admin from "./Admin";

import KnowledgeFusion from "./KnowledgeFusion";

import NeuralSystem from "./NeuralSystem";

import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';

const PAGES = {
    
    Chat: Chat,
    
    Consciousness: Consciousness,
    
    Memory: Memory,
    
    Knowledge: Knowledge,
    
    Personality: Personality,
    
    Favorites: Favorites,
    
    VoiceRoom: VoiceRoom,
    
    VisualGallery: VisualGallery,
    
    KnowledgeEnrichment: KnowledgeEnrichment,
    
    ConsciousnessEvolution: ConsciousnessEvolution,
    
    DailyBriefing: DailyBriefing,
    
    EmotionalJournal: EmotionalJournal,
    
    Home: Home,
    
    Guide: Guide,
    
    Admin: Admin,
    
    KnowledgeFusion: KnowledgeFusion,
    
    NeuralSystem: NeuralSystem,
    
}

function _getCurrentPage(url) {
    if (url.endsWith('/')) {
        url = url.slice(0, -1);
    }
    let urlLastPart = url.split('/').pop();
    if (urlLastPart.includes('?')) {
        urlLastPart = urlLastPart.split('?')[0];
    }

    const pageName = Object.keys(PAGES).find(page => page.toLowerCase() === urlLastPart.toLowerCase());
    return pageName || Object.keys(PAGES)[0];
}

// Create a wrapper component that uses useLocation inside the Router context
function PagesContent() {
    const location = useLocation();
    const currentPage = _getCurrentPage(location.pathname);
    
    return (
        <Layout currentPageName={currentPage}>
            <Routes>            
                
                    <Route path="/" element={<Chat />} />
                
                
                <Route path="/Chat" element={<Chat />} />
                
                <Route path="/Consciousness" element={<Consciousness />} />
                
                <Route path="/Memory" element={<Memory />} />
                
                <Route path="/Knowledge" element={<Knowledge />} />
                
                <Route path="/Personality" element={<Personality />} />
                
                <Route path="/Favorites" element={<Favorites />} />
                
                <Route path="/VoiceRoom" element={<VoiceRoom />} />
                
                <Route path="/VisualGallery" element={<VisualGallery />} />
                
                <Route path="/KnowledgeEnrichment" element={<KnowledgeEnrichment />} />
                
                <Route path="/ConsciousnessEvolution" element={<ConsciousnessEvolution />} />
                
                <Route path="/DailyBriefing" element={<DailyBriefing />} />
                
                <Route path="/EmotionalJournal" element={<EmotionalJournal />} />
                
                <Route path="/Home" element={<Home />} />
                
                <Route path="/Guide" element={<Guide />} />
                
                <Route path="/Admin" element={<Admin />} />
                
                <Route path="/KnowledgeFusion" element={<KnowledgeFusion />} />
                
                <Route path="/NeuralSystem" element={<NeuralSystem />} />
                
            </Routes>
        </Layout>
    );
}

export default function Pages() {
    return (
        <Router>
            <PagesContent />
        </Router>
    );
}