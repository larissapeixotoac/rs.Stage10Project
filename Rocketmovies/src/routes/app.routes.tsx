import { Route, Routes } from "react-router-dom"

import { Home } from '../pages/Home.tsx'
import { Profile } from '../pages/Profile.tsx'
import { NewMovie } from '../pages/NewMovie.tsx'
import { MoviePreview } from '../pages/MoviePreview.tsx'

export function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home/>}  />
            <Route path="/profile" element={<Profile/>}  />
            <Route path="/newmovie" element={<NewMovie/>}  />
            <Route path="/moviepreview/:id" element={<MoviePreview/>}  />
        </Routes>
    )
}

